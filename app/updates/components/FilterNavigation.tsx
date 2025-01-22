"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FilterNavigation({
  categories,
}: {
  categories: Array<string>;
}) {
  return (
    <nav className="flex gap-4">
      <CategoryLink category="">All</CategoryLink>
      {categories.map((category) => (
        <CategoryLink key={`tag_${category}`} category={category}>
          {category.slice(0, 1).toUpperCase() +
            category.slice(1, category.length)}
        </CategoryLink>
      ))}
    </nav>
  );
}

function CategoryLink({
  children,
  category,
}: {
  children: string;
  category: string;
}) {
  const pathname = usePathname();

  const isCurrentCategory =
    (category && pathname.includes(category)) ||
    (category === "" && pathname === "/updates/");

  return (
    <Link
      href={"/updates" + (category && "/" + category)}
      className={clsx(
        "border-b-[3px] border-[#00000000] border-opacity-0 px-4 py-1.5 font-bold transition-all hover:text-neutral-200",
        isCurrentCategory
          ? "border-primary border-opacity-100 text-neutral-200"
          : "text-neutral-400",
      )}
    >
      {children}
    </Link>
  );
}
