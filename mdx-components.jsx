import { readFile, readdir } from "node:fs/promises";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";

const customComponents = {
  h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
};

export const listMdxFiles = async (path) => {
  const files = await readdir(path, { withFileTypes: true });
  return files
    .filter((entry) => entry.isFile)
    .filter((entry) => entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.slice(0, -4));
};

export const readMdxFiles = async (path) => {
  const names = await listMdxFiles(path);
  const result = [];
  for await (const name of names) {
    result.push({ name, ...(await mdx(path + "/" + name + ".mdx")) });
  }
  return result;
};

export const mdx = async (file) => {
  const source = await readFile(file, {
    encoding: "utf8",
  });
  return await compileMDX({
    source,
    options: { parseFrontmatter: true },
    components: customComponents,
  });
};

export const MDX = (props) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...customComponents, ...(props.components || {}) }}
    />
  );
};

export const useMDXComponents = (components) => {
  return {
    ...customComponents,
    ...components,
  };
};
