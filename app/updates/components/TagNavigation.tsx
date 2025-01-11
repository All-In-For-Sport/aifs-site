"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function TagNavigation({ tags }: { tags: Array<string> }) {
  return (
    <nav className="flex gap-4">
      <TagLink tag="">All</TagLink>
      {tags.map((tag) => (
        <TagLink key={`tag_${tag}`} tag={tag}>
          {tag.slice(0, 1).toUpperCase() + tag.slice(1, tag.length) + "s"}
        </TagLink>
      ))}
    </nav>
  );
}

function TagLink({ children, tag }: { children: string; tag: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPostType = searchParams.get("type");

  return (
    <Link
      href={tag ? pathname + "?" + "type=" + tag : pathname}
      className={clsx(
        "border-b-[3px] border-[#00000000] border-opacity-0 px-4 py-1.5 font-bold text-neutral-400 transition-all hover:text-neutral-200",
        !currentPostType && !tag
          ? "border-primary border-opacity-100 text-neutral-200"
          : tag === currentPostType &&
              "border-primary border-opacity-100 text-neutral-200",
      )}
    >
      {children}
    </Link>
  );
}
