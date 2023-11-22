import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem = ({ href, title }) => {
  const usePathName = usePathname();

  return (
    <li className="group relative">
      <Link
        href={href}
        className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
          usePathName === href
            ? "text-primary dark:text-white"
            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        }`}
      >
        {title}
      </Link>
    </li>
  );
};
