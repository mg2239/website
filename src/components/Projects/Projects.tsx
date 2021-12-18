import Button from '../Button/Button';
import Image from 'next/image';
import { projectData, ProjectType } from './data';
import React from 'react';

export default () => {
  return (
    <>
      {projectData.map((project) => {
        return (
          <div>
            <h1>{project.title}</h1>
            <Image src={project.img} alt="" />
          </div>
        );
      })}
    </>
  );
};
