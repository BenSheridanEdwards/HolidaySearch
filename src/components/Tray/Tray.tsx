import React, { ReactNode } from "react";

interface TrayProps {
  children: ReactNode;
}

export function Tray({ children }: TrayProps) {
  return (
    <div className="mt-16 h-full w-full rounded-t-2xl bg-light p-8 text-dark">
      {children}
    </div>
  );
}
