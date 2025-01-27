export function Tag({ children }: { children: string }) {
  return (
    <div className="rounded-full bg-gray-800 px-4 py-2 text-xs uppercase tracking-wider text-gray-50">
      {children}
    </div>
  );
}
