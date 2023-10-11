export default function Tag({ children }: { children: string }) {
    return (
        <div className="px-4 py-2 bg-gray-800 text-gray-50 text-xs uppercase rounded-full tracking-wider">
            {children}
        </div>
    );
}
