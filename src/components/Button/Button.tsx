import React, { ReactNode } from "react";
import { clsx } from "clsx";
import "./Button.scss";

interface ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  variant?: "primary" | "submit";
}

export function Button({ children, fullWidth, onClick, variant }: ButtonProps) {
  const className = clsx({
    Btn: true,
    "Btn--primary bg-blue-200": variant === "primary" || variant === "submit",
    "Btn--fullWidth": fullWidth,
  });

  return (
    <button
      className={className}
      onClick={onClick}
      type={variant === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: "primary",
};
