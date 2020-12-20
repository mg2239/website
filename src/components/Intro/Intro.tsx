import { IconContext } from 'react-icons';
import {
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import TabLink from '../../common/TabLink/TabLink';
import { head } from './images';
import styles from './intro.module.css';

const Icons = () => (
  <IconContext.Provider value={{ className: styles.icon }}>
    <div className={styles.iconCtr}>
      <TabLink to="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
        <AiOutlineFileText />
      </TabLink>
      <TabLink to="https://github.com/mg2239">
        <AiFillGithub />
      </TabLink>
      <TabLink to="https://www.linkedin.com/in/mg2239/">
        <AiFillLinkedin />
      </TabLink>
    </div>
  </IconContext.Provider>
);

export default () => (
  <div className={styles.ctr}>
    <img className={styles.img} src={head} />
    <div className={styles.textCtr}>
      <p className={styles.heading}>
        Hey, I'm <span style={{ fontWeight: 'bold' }}>Matthew Guo.</span>
      </p>
      <p className={styles.text}>
        I’m a Junior at Cornell Universtiy studying Computer Science. I like
        creating websites, producing music, learning how to draw, and trying to
        find time to do all of them.
      </p>
      <Icons />
    </div>
  </div>
);
