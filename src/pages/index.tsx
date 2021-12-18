import { useState } from 'react';
import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Tab from '../components/Tab/Tab';
import Projects from '../components/Projects/Projects';
import Music from '../components/Music/Music';

type TabType = 'projects' | 'music';

export default () => {
  const [currentTab, setCurrentTab] = useState<TabType>('projects');
  return (
    <>
      <Head />
      <div className="flex w-4/5 py-8 m-auto ">
        <div className="fixed w-72">
          <Intro />
        </div>
        <div className="flex-grow ml-80">
          <div className="flex mb-4">
            <Tab onClick={() => setCurrentTab('projects')}>projects</Tab>
            <Tab onClick={() => setCurrentTab('music')}>music</Tab>
          </div>
          {currentTab === 'projects' ? <Projects /> : <Music />}
        </div>
      </div>
    </>
  );
};
