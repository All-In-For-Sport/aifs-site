import { ReactNode } from "react";

export function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-bluegrey px-6 py-2 text-sm font-medium uppercase tracking-wider">
      {children}
    </span>
  );
}
