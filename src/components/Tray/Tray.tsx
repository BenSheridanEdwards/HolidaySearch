import React, { ReactNode } from 'react';
import './Tray.scss';

interface TrayProps {
  children: ReactNode;
}

export function Tray({ children }: TrayProps) {
  return <div className='Tray'>{children}</div>;
}
