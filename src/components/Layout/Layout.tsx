import React from 'react';
import './Layout.scss';

export interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='Layout'>
      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
