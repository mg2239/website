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
      <div className="flex w-4/5 pt-8 pb-12 m-auto max-w-7xl">
        <div className="fixed w-72">
          <Intro />
          <Tab
            active={currentTab === 'projects'}
            onClick={() => setCurrentTab('projects')}
          >
            projects
          </Tab>
          <Tab
            active={currentTab === 'music'}
            onClick={() => setCurrentTab('music')}
          >
            music
          </Tab>
        </div>
        <div className="flex-grow ml-80">
          {currentTab === 'projects' ? <Projects /> : <Music />}
        </div>
      </div>
    </>
  );
};
