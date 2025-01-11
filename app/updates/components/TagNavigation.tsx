"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function TagNavigation({ tags }: { tags: Array<string> }) {
  return (
    <nav className="flex gap-4">
      <TagLink tag="all">All</TagLink>
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

  const currentTagParam = searchParams.get("type");

  const isCurrentTag =
    tag === currentTagParam || (!currentTagParam && tag === "all");

  return (
    <Link
      href={pathname + (tag && "?type=" + tag)}
      className={clsx(
        "border-b-[3px] border-[#00000000] border-opacity-0 px-4 py-1.5 font-bold transition-all hover:text-neutral-200",
        isCurrentTag
          ? "border-primary border-opacity-100 text-neutral-200"
          : "text-neutral-400",
      )}
    >
      {children}
    </Link>
  );
}
