import React from 'react';

type Props = {
  className?: string;
  to: string;
  children: JSX.Element | string;
  style?: React.CSSProperties;
};

export default ({ className, to, style, children }: Props) => (
  <a className={className} href={to} target="_blank" style={style}>
    {children}
  </a>
);
