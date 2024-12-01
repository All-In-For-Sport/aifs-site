"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode, useCallback } from "react";

export function TagNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      <TagLink href={pathname}>All</TagLink>
      <TagLink href={pathname} tag="article">
        Articles
      </TagLink>

      <TagLink href={pathname} tag="event">
        Events
      </TagLink>
    </nav>
  );
}

function TagLink({
  children,
  href,
  tag,
}: {
  children: ReactNode;
  href: string;
  tag?: string;
}) {
  const searchParams = useSearchParams();

  const currentTag = searchParams.get("tag");
  return (
    <Link
      href={tag ? href + "?" + "tag=" + tag : href}
      className={clsx(
        "rounded-full px-6 py-3 font-bold",
        !currentTag && !tag
          ? highlightClasses
          : tag === currentTag && highlightClasses,
      )}
    >
      {children}
    </Link>
  );
}

const highlightClasses = "bg-primary text-neutral-800";
