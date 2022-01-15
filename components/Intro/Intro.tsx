import Image from 'next/image';
import React from 'react';
import { AiFillFileText, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useDarkMode } from '../../context/darkMode';

const Link = ({ to, children }: React.PropsWithChildren<{ to: string }>) => {
  return (
    <a
      className="block p-2.5 text-xl text-white dark:text-slate-900 bg-black hover:bg-slate-700 dark:bg-white dark:hover:bg-slate-300 rounded-full transition-colors"
      href={to}
    >
      {children}
    </a>
  );
};

const Links = () => {
  return (
    <div className="flex justify-between m-auto w-36 lg:m-0">
      <Link to="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
        <AiFillFileText />
      </Link>
      <Link to="https://github.com/mg2239">
        <AiFillGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/mg2239/">
        <AiFillLinkedin />
      </Link>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="mb-8 text-center lg:text-left">
      <div className="mb-8 lg:w-max">
        <Image
          src="/face.png"
          alt="face"
          width={144}
          height={144}
          className="invert-0 dark:invert transition-all"
        />
        <h1 className="mb-2">matthew guo</h1>
        <Links />
      </div>
      <p className="mb-2">web dev and music producer</p>
      <p className="mb-2">incoming swe @ cameo</p>
      <p>cs @ cornell &apos;22</p>
    </div>
  );
};

export default Intro;
