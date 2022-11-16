import React, { ReactNode } from "react";

interface PageHeaderWrapperProps {
  children: ReactNode;
}

export function PageHeaderWrapper({ children }: PageHeaderWrapperProps) {
  return (
    <div className="mb-8 mt-16 max-w-xs text-center [&>h1>span]:text-accent">
      {children}
    </div>
  );
}
