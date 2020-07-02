import React from 'react';
import headerImg from './header.jpg';

function Main() {
  return (
    <div id="container">
      <div id="text-container">
        <div id="header-wrapper">
          <img src={headerImg} id="header-pic" />
          <div id="header-main">
            <p id="header-text">hi, i'm matthew</p>
            <div id="item-container">
              <a
                href="https://drive.google.com/file/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing"
                target="_blank"
              >
                <i className="icon far fa-file" />
              </a>
              <a href="https://www.linkedin.com/in/mg2239/" target="_blank">
                <i className="icon fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/mg2239" target="_blank">
                <i className="icon fab fa-github" />
              </a>
            </div>
          </div>
        </div>
        <p>sophomore cs major & is minor (ux design) at cornell</p>
        <p>
          developer at{' '}
          <a href="https://www.cornelldti.org/" target="_blank">
            cornell dti
          </a>{' '}
          and{' '}
          <a href="https://www.cornellsun.com/" target="_blank">
            the cornell daily sun
          </a>
        </p>
        <p>
          music producer at{' '}
          <a href="https://soundcloud.com/polarr" target="_blank">
            polarr
          </a>
        </p>
      </div>
    </div>
  );
}

export default Main;
