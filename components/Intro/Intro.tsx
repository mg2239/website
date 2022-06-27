import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useWindowWidth } from '../../context/useWindowWidth';

const Link = ({ to, children }: React.PropsWithChildren<{ to: string }>) => {
  return (
    <a
      className="inline-block mr-2 text-sm hover:text-gray-400 rounded-full transition-colors sm:mr-4 sm:text-base"
      href={to}
    >
      {children}
    </a>
  );
};

const Links = () => {
  return (
    <div className="mb-2 font-semibold">
      <Link to="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
        resume
      </Link>
      <Link to="https://github.com/mg2239">github</Link>
      <Link to="https://www.linkedin.com/in/mg2239/">linkedin</Link>
    </div>
  );
};

const Text = () => {
  return (
    <div className="text-sm sm:text-base">
      <p>web dev and music producer</p>
      <p>swe @ cameo</p>
      <p>cs @ cornell &apos;22</p>
    </div>
  );
};

const Intro = () => {
  const { isSmall } = useWindowWidth();
  const size = isSmall ? 80 : 140;

  return (
    <div className="mr-4 mb-8 ml-4 sm:mr-0 sm:mb-16 sm:ml-0">
      <div className="flex grid-cols-6 gap-1 mb-2 sm:grid sm:grid-cols-3 sm:gap-6">
        <div className="mr-5 sm:flex sm:justify-center sm:m-0">
          <Image
            src="/face.png"
            alt="face"
            layout="fixed"
            width={size}
            height={size}
            className="invert-0 dark:invert transition-all"
          />
        </div>
        <div className="col-span-5 sm:col-span-2">
          <h1 className="mb-1 sm:mb-2 font-light">matthew guo</h1>
          <Links />
          {!isSmall && <Text />}
        </div>
      </div>
      {isSmall && <Text />}
    </div>
  );
};

export default Intro;
