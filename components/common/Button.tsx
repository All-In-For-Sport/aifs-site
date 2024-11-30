import { MouseEventHandler, ReactNode } from "react";
import { clsx } from "clsx";
import Link from "next/link";

const sharedButtonClasses =
  "flex justify-center items-center gap-2 px-8 py-3 text-base rounded-full group disabled:opacity-50 font-bold";

const buttonVariantClasses = {
  primary: "bg-primary text-darkText",
  secondary:
    "bg-primary bg-opacity-0 hover:bg-opacity-10 transition duration-200 border border-primary text-primary",
  small:
    "bg-primary bg-opacity-0 hover:bg-opacity-10 transition duration-200 border-2 border-darkText text-primary text-sm",
  ghost:
    "transition duration-200 border border-primary border-opacity-0 hover:border-opacity-20 text-white",
};

export function Button({
  children,
  fullWidth = false,
  variant = "primary",
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}: {
  children: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: keyof typeof buttonVariantClasses;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      {...props}
      className={clsx(
        sharedButtonClasses,
        buttonVariantClasses[variant],
        fullWidth && "w-full"
      )}
    >
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  fullWidth = false,
  variant = "primary",
  leftIcon,
  rightIcon,
  ...props
}: {
  children: ReactNode;
  href: string;
  fullWidth?: boolean;
  variant?: keyof typeof buttonVariantClasses;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        sharedButtonClasses,
        buttonVariantClasses[variant],
        fullWidth && "w-full"
      )}
    >
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </Link>
  );
}

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="group-hover:translate-x-1 transition duration-200">
      {children}
    </div>
  );
}
