import React, { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonLinkProps {
  children: ReactNode;
  fullWidth?: boolean;
  href: string;
  leadingIcon?: ReactNode;
  target?: string;
  variant?: "primary" | "secondary" | "tertiary" | "icon";
  className?: string;
}

export function ButtonLink({
  children,
  fullWidth,
  href,
  leadingIcon,
  target = "_blank",
  variant = "primary",
  className,
  ...rest
}: ButtonLinkProps) {
  const dynamicClassName = clsx({
    "peer flex items-center justify-center w-full h-12 px-4 text-sm font-medium leading-5 text-white transition-colors duration-200 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white":
      variant === "primary" || variant === "secondary",
    "peer flex items-center justify-center text-sm font-medium leading-5 transition-colors duration-200 ease-in-out rounded-md text-white hover:text-accent hover:bg-dark":
      variant === "tertiary",
  });

  const hoverClassName = clsx({
    "bg-smoke text-quickSilver hover:text-electricBlue":
      variant === "secondary",
    "bg-transparent text-white hover:bg-blue-200": variant === "tertiary",
  });

  return (
    <a
      className={`${className} ${dynamicClassName} ${hoverClassName}`}
      href={href}
      target={target}
      rel="noreferrer"
      {...rest}
    >
      {!!leadingIcon && (
        <span className="peer flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {!!children && <span className="peer-[]:ml-2">{children}</span>}
    </a>
  );
}
