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
      <h1 className={styles.heading}>Hi, I'm Matthew</h1>
      <Icons />
    </div>
    <div className={styles.bodyCtr}>
      <p>I'm a junior at Cornell studying Computer Science.</p>
      <p>I like working on projects that combine my interests with CS.</p>
      <p>In my free time, I produce electronic music and learn how to draw.</p>
      <p>Check out some things I've worked on below!</p>
    </div>
  </div>
);
