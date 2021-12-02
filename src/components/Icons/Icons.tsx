import { IconContext } from 'react-icons';
import {
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

export default () => {
  return (
    <IconContext.Provider value={{ className: '' }}>
      <div className="">
        <a
          className=""
          href="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing"
          role="button"
        >
          <AiOutlineFileText />
        </a>
        <a className="" href="https://github.com/mg2239" role="button">
          <AiFillGithub />
        </a>
        <a
          className=""
          href="https://www.linkedin.com/in/mg2239/"
          role="button"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </IconContext.Provider>
  );
};
