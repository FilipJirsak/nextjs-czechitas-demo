import Link from "next/link";
import { readMdxFiles } from "../../../mdx-components";

const Card = ({ name, title, tags }) => (
  <Link href={`/sluzby/${name}`}>
    <li className="col-span-1 flex rounded-md shadow-sm">
      <div className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium bg-indigo-900 text-white">
        {name.slice(0, 1).toUpperCase()}
      </div>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <span className="font-medium text-gray-900 hover:text-gray-600">{title}</span>
          <p className="text-gray-500 mt-2">
            {tags &&
              tags.map((tag) => (
                <span className="inline-flex items-center rounded-md bg-gray-50 mr-2 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  {tag}
                </span>
              ))}
          </p>
        </div>
      </div>
    </li>
  </Link>
);

export default async () => {
  const sluzby = await readMdxFiles("./content/sluzby");
  return (
    <div className="container my-24">
      <h1 className="text-3xl font-bold my-4">Služby</h1>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {sluzby.map((sluzba) => (
          <Card key={sluzba.name} name={sluzba.name} title={sluzba.frontmatter.title} tags={sluzba.frontmatter.tags} />
        ))}
      </ul>
    </div>
  );
};
