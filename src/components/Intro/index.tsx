import React from 'react';
import { IconContext } from 'react-icons';
import {
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

import TabLink from '../../common/TabLink';
import bear from './images/bear.svg';

import styles from './index.module.css';

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
    <div className={styles.headingCtr}>
      <img className={styles.img} src={bear} />
      <h1 className={styles.heading}>hi i'm matthew</h1>
      <Icons />
    </div>
    <div className={styles.textCtr}>
      <p className={styles.bodyTxt}>
        i'm a junior studying cs and minoring in ux design at cornell
      </p>
      <p className={styles.bodyTxt}>
        i mainly do full-stack development, but i experiment with anything that
        interests me
      </p>
      <p className={styles.bodyTxt}>
        in my free time i{' '}
        <TabLink to="https://soundcloud.com/polarr">
          create electronic music
        </TabLink>{' '}
        and learn how to draw
      </p>
      <p className={styles.bodyTxt}>
        check out some things i've worked on below!
      </p>
    </div>
  </div>
);
