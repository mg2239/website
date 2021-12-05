import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';

export default () => {
  return (
    <>
      <Head />
      <div className="flex w-4/5 py-8 m-auto ">
        <div className="fixed w-72">
          <Intro />
        </div>
        <div className="flex-grow ml-80">
          <Projects />
        </div>
      </div>
    </>
  );
};
