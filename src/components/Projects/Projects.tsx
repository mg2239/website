import Button from '../Button/Button';
import Image from 'next/image';
import { projectData, ProjectType } from './data';
import React, { useState } from 'react';

type TabProps = {
  onClick: () => void;
};

const Tab = ({ onClick, children }: React.PropsWithChildren<TabProps>) => {
  return (
    <div className="mr-4 group">
      <p className="font-bold cursor-pointer" onClick={onClick}>
        {children}
      </p>
      <span className="block w-full h-px transition-opacity bg-black opacity-0 group-hover:opacity-100" />
    </div>
  );
};

type TabType = 'projects' | 'music';

export default () => {
  const [currentTab, setCurrentTab] = useState<TabType>('projects');
  return (
    <div>
      <div className="flex mb-4">
        <Tab onClick={() => setCurrentTab('projects')}>projects</Tab>
        <Tab onClick={() => setCurrentTab('music')}>music</Tab>
      </div>
      {currentTab === 'projects' &&
        projectData.map((project) => {
          return (
            <div>
              <h1>{project.title}</h1>
              <Image src={project.img} alt="" />
            </div>
          );
        })}
      {currentTab === 'music' && <p>hello</p>}
    </div>
  );
};
