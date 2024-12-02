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
      <TagLink href={pathname} postType="article">
        Articles
      </TagLink>

      <TagLink href={pathname} postType="event">
        Events
      </TagLink>
    </nav>
  );
}

function TagLink({
  children,
  href,
  postType,
}: {
  children: ReactNode;
  href: string;
  postType?: string;
}) {
  const searchParams = useSearchParams();

  const currentPostType = searchParams.get("type");
  return (
    <Link
      href={postType ? href + "?" + "type=" + postType : href}
      className={clsx(
        "rounded-full px-4 py-1.5 font-bold",
        !currentPostType && !postType
          ? highlightClasses
          : postType === currentPostType && highlightClasses,
      )}
    >
      {children}
    </Link>
  );
}

const highlightClasses = "bg-primary text-neutral-800";
