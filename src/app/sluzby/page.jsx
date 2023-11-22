import Link from "next/link";
import { readMdxFiles } from "../../../mdx-components";

export default async () => {
  const sluzby = await readMdxFiles("./content/sluzby");
  return (
    <div className="container my-24">
      <h1 className="text-3xl font-bold my-4">Služby</h1>
      <ul>
        {sluzby.map((sluzba) => (
          <li>
            <Link href={`/sluzby/${sluzba.name}`} className="hover:underline">
              {sluzba.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
