import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillFileTextFill, BsGithub } from 'react-icons/bs';

const Link = ({ to, children }: React.PropsWithChildren<{ to: string }>) => {
  return (
    <a
      className="block p-2.5 mr-3 text-white transition-colors bg-black rounded-full hover:bg-gray-700"
      href={to}
    >
      {children}
    </a>
  );
};

const Links = () => {
  return (
    <div className="flex">
      <Link to="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
        <BsFillFileTextFill />
      </Link>
      <Link to="https://github.com/mg2239">
        <BsGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/mg2239/">
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default () => {
  return (
    <div className="mb-8">
      <div className="mb-8 w-max">
        <h1 className="mb-2">matthew guo</h1>
        <Links />
      </div>
      <p className="mb-2">web dev and music producer</p>
      <p className="mb-2">incoming swe @ cameo</p>
      <p>cs @ cornell '22</p>
    </div>
  );
};
