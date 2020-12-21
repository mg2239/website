import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Title from '../common/Title/Title';
import 'normalize.css';
import './index.css';

export default () => {
  return (
    <>
      <Head />
      <Intro />
      <Title title="Experience" />
      <Title title="Projects" />
    </>
  );
};
