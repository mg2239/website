import React from 'react';

type Props = {
  className?: string;
  to: string;
  children: JSX.Element | string;
};

export default ({ className, to, children }: Props) => (
  <a className={className} href={to} target="_blank">
    {children}
  </a>
);
