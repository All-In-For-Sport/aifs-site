"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function TagNavigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <nav>
      <Link href={pathname}>All</Link>
      <Link href={pathname + "?" + createQueryString("tag", "article")}>
        Articles
      </Link>
      <Link href={pathname + "?" + createQueryString("tag", "event")}>
        Events
      </Link>
    </nav>
  );
}
