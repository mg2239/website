import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';

type TabType = 'projects' | 'music';

export default () => {
  return (
    <>
      <Head />
      <div className="flex w-4/5 pt-8 pb-12 m-auto max-w-7xl">
        <div className="fixed w-72">
          <Intro />
        </div>
        <div className="flex-grow ml-80">
          <Music />
        </div>
      </div>
    </>
  );
};
