import { ReactNode } from "react";

export function PostTypeBadge({ children }: { children: ReactNode }) {
  return (
    <span className="bg-bluegrey inline-block rounded-full px-6 py-2 text-sm font-medium uppercase tracking-wider">
      {children}
    </span>
  );
}
