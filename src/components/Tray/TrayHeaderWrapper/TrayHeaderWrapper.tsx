import React, { ReactNode } from "react";

interface TrayHeaderWrapperProps {
  children: ReactNode;
}
export function TrayHeaderWrapper({ children }: TrayHeaderWrapperProps) {
  return (
    <div className="mb-8 flex w-full justify-between gap-8">{children}</div>
  );
}
