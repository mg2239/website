import React from 'react';

type TabLinkProps = {
  className?: string;
  to: string;
  children: JSX.Element | string;
  style?: React.CSSProperties;
};

export default ({ className, to, style, children }: TabLinkProps) => (
  <a className={className} href={to} target="_blank" style={style}>
    {children}
  </a>
);
