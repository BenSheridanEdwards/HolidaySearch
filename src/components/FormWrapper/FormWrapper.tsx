import React, { FormEventHandler, ReactNode } from 'react';
import './FormWrapper.scss';

interface FormWrapperProps {
  onSubmitHandler: FormEventHandler;
  children: ReactNode;
}

export function FormWrapper({ onSubmitHandler, children }: FormWrapperProps) {
  return (
    <form onSubmit={onSubmitHandler} className='FormWrapper'>
      {children}
    </form>
  );
}
