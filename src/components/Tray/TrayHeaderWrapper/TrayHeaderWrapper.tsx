import React, { ReactNode } from 'react';
import './TrayHeaderWrapper.scss';

interface TrayHeaderWrapperProps {
  children: ReactNode;
}
export function TrayHeaderWrapper({ children }: TrayHeaderWrapperProps) {
  return <div className='TrayHeaderWrapper'>{children}</div>;
}
