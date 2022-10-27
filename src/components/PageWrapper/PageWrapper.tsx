import React, { ReactNode } from 'react';
import './PageWrapper.scss';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className='PageWrapper'>{children}</div>;
}
