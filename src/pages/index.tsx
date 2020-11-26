import React from 'react';
import Head from '../components/Head';
import Intro from '../components/Intro';
import Showcase from '../components/Showcase';
import 'normalize.css';
import './index.css';

export default () => {
  return (
    <>
      <Head />
      <Intro />
      <Showcase />
    </>
  );
};
