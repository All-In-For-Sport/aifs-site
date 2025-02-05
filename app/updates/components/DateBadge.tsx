import { ReactNode } from "react";

export function DateBadge({ children }: { children: ReactNode }) {
  return (
    <div className="px- rounded-full bg-neutral-900 px-4 py-1 font-semibold text-neutral-400">
      {children}
    </div>
  );
}
