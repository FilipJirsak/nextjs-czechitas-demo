import { listMdxFiles, mdx } from "../../../../mdx-components";

export const generateStaticParams = async () => {
  const sluzby = await listMdxFiles("./content/sluzby");
  return sluzby.map((sluzba) => {
    {
      sluzba;
    }
  });
};

export default async ({ params }) => {
  const { content, frontmatter } = await mdx(
    `./content/sluzby/${params.sluzba}.mdx`
  );

  return (
    <div className="container my-24">
      <h1 className="text-3xl font-bold my-4">{frontmatter.title}</h1>
      {content}
    </div>
  );
};
