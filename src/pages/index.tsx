import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Showcase from '../components/Showcase';
import Title from '../common/Title/Title';
import 'normalize.css';
import './index.css';

export default () => {
  return (
    <>
      <Head />
      <Intro />
      <Title title="Test" />
    </>
  );
};
