import React from 'react';
import Head from '../components/Head';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import 'normalize.css';
import './index.css';

export default () => {
  return (
    <>
      <Head />
      <Intro />
      <Projects />
    </>
  );
};
