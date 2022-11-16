import React, { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="flex flex-col items-center">{children}</div>;
}
