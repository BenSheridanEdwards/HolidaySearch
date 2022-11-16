import React, { FormEventHandler, ReactNode } from "react";

interface FormWrapperProps {
  onSubmitHandler: FormEventHandler;
  children: ReactNode;
}

export function FormWrapper({ onSubmitHandler, children }: FormWrapperProps) {
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex w-full flex-col items-center"
    >
      {children}
    </form>
  );
}
