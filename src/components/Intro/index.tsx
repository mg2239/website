import React, { forwardRef } from 'react';
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
    <TabLink to="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
      <AiOutlineFileText />
    </TabLink>
    <TabLink to="https://github.com/mg2239">
      <AiFillGithub />
    </TabLink>
    <TabLink to="https://www.linkedin.com/in/mg2239/">
      <AiFillLinkedin />
    </TabLink>
  </IconContext.Provider>
);

export default () => (
  <div className="section">
    <h1>hello!</h1>
    <div className={styles.content}>
      <p>more text</p>
      <TabLink to="#">hello</TabLink>
      <Icons />
    </div>
  </div>
);
