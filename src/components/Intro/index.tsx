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
      <h1 className={styles.heading}>Hi, I'm Matthew 👋</h1>
      <Icons />
    </div>
    <div className={styles.textCtr}>
      <p className={styles.bodyTxt}>
        I'm a junior at Cornell studying CS and minoring in UX Design.
      </p>
      <p className={styles.bodyTxt}>
        I like working on projects that combine my interests with CS.
      </p>
      <p className={styles.bodyTxt}>
        In my free time, I produce{' '}
        <TabLink to="https://soundcloud.com/polarr">electronic music</TabLink>{' '}
        and learn how to draw.
      </p>
      <p className={styles.bodyTxt}>
        Check out some things i've worked on below!
      </p>
    </div>
  </div>
);
