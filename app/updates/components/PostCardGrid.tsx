import { ReactNode } from "react";

export function PostCardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid w-full max-w-md gap-8 px-4 md:w-full md:max-w-4xl md:grid-cols-2">
      {children}
    </div>
  );
}
