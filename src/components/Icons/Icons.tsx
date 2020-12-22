import { IconContext } from 'react-icons';
import {
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import styles from './icons.module.css';

export default () => (
  <IconContext.Provider value={{ className: styles.icon }}>
    <div className={styles.iconCtr}>
      <a
        className={styles.iconBtn}
        href="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing"
        role="button"
      >
        <AiOutlineFileText />
      </a>
      <a
        className={styles.iconBtn}
        href="https://github.com/mg2239"
        role="button"
      >
        <AiFillGithub />
      </a>
      <a
        className={styles.iconBtn}
        href="https://www.linkedin.com/in/mg2239/"
        role="button"
      >
        <AiFillLinkedin />
      </a>
    </div>
  </IconContext.Provider>
);
