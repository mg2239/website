import Head from '../components/Head/Head';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Title from '../components/Title/Title';
import Projects from '../components/Projects/Projects';
import 'normalize.css';
import './index.css';

export default () => {
  return (
    <>
      <Head />
      <Header />
      <Intro />
      <Title title="Projects" />
      <Projects />
    </>
  );
};
