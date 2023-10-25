export function PrimaryButton({
    children,
    type,
    onClick,
    disabled,
    icon,
}: {
    children: string;
    type?: "submit" | "button";
    disabled?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`bg-primary text-darkText text-base gap-2 justify-center items-center group flex font-bold px-8 py-3 rounded-full ${
                disabled ? "opacity-50" : ""
            }`}
        >
            {children}
            {icon && (
                <div className="group-hover:translate-x-1 transition duration-200">
                    {icon}
                </div>
            )}
        </button>
    );
}

export function SecondaryButton({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <button
            className={`bg-primary bg-opacity-0 hover:bg-opacity-10 transition duration-200 border border-primary text-primary text-base gap-2 justify-center items-center group flex font-bold px-8 py-3 rounded-full ${className}`}
        >
            {children}
        </button>
    );
}

export function SmallButton({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <button
            className={`bg-primary bg-opacity-0 hover:bg-opacity-10 transition duration-200 border-2 border-darkText text-primary text-sm gap-2 justify-center items-center group flex font-bold px-6 py-2 rounded-full ${className}`}
        >
            {children}
        </button>
    );
}

export function GhostButton({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <button
            className={`transition duration-200 border border-primary border-opacity-0 hover:border-opacity-20 text-white text-base gap-2 justify-center items-center group flex font-bold px-8 py-3 rounded-full ${className}`}
        >
            {children}
        </button>
    );
}
