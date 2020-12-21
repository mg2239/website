import { IconContext } from 'react-icons';
import {
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { head } from './images';
import styles from './intro.module.css';

const Icons = () => (
  <IconContext.Provider value={{ className: styles.icon }}>
    <div className={styles.iconCtr}>
      <a href="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
        <AiOutlineFileText />
      </a>
      <a href="https://github.com/mg2239">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/mg2239/">
        <AiFillLinkedin />
      </a>
    </div>
  </IconContext.Provider>
);

export default () => (
  <div className={styles.ctr}>
    <img className={styles.img} src={head} />
    <div className={styles.textCtr}>
      <p className={styles.heading}>
        Hey, I'm <span style={{ fontWeight: 'bold' }}>Matthew.</span>
      </p>
      <p className={styles.text}>
        I’m a junior at Cornell University studying Computer Science.
      </p>
      <p className={styles.text}>
        Previously interned at{' '}
        <a href="https://www.linkedin.com/company/bloom-university/about/">
          Bloom
        </a>
        , incoming intern at <a href="https://www.cameo.com/">Cameo</a>.
      </p>
      <p className={styles.text}>
        I like creating websites, producing music, drawing, and longboarding.
      </p>
      <Icons />
    </div>
  </div>
);
