import React, { ReactNode } from "react";
import { clsx } from "clsx";
import "./Button.scss";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "submit" | "tertiary";
  href?: string;
  className?: string;
}

export function Button({
  children,
  fullWidth = false,
  leadingIcon,
  onClick,
  variant = "primary",
  href,
  className,
}: ButtonProps) {
  const router = useRouter();
  const dynamicClassName = clsx({
    "Btn Btn--primary bg-blue-200":
      variant === "primary" || variant === "submit",
    "peer flex items-center justify-center text-sm font-medium leading-5 transition-colors duration-200 ease-in-out rounded-md text-white bg-dark hover:text-accent hover:bg-dark":
      variant === "tertiary",
    "Btn--fullWidth": fullWidth,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick();
    href && router.push(href);
  };

  return (
    <button
      className={`${dynamicClassName} ${className}`}
      onClick={handleClick}
      type={variant === "submit" ? "submit" : "button"}
    >
      {!!leadingIcon && (
        <span className="peer flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {!!children && <span className="peer-[]:ml-2">{children}</span>}
    </button>
  );
}
