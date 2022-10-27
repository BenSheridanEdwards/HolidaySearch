import React, { ReactNode } from 'react';
import './PageHeaderWrapper.scss';

interface PageHeaderWrapperProps {
  children: ReactNode;
}

export function PageHeaderWrapper({ children }: PageHeaderWrapperProps) {
  return <div className='PageHeaderWrapper'>{children}</div>;
}
