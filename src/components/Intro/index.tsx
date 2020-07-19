import React from 'react';
import { IconContext } from 'react-icons';
import {
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

import TabLink from '../../common/TabLink';

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
  <div className="section">
    <h1>hi! 👋</h1>
    <div className={styles.content}>
      <div>
        <p>more text</p>
        <TabLink to="#">hello</TabLink>
      </div>
      <Icons />
    </div>
  </div>
);
