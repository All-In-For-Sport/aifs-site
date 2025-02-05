import { ReactNode } from "react";

export function AuthorName({ children }: { children: ReactNode }) {
  return (
    <span className="text-xl font-semibold text-neutral-300">{children}</span>
  );
}
