import Button from '../Button/Button';
import Image from 'next/image';
import { projectData, ProjectType } from './data';
import React from 'react';

const Project = ({ description, link, linkType, img, title }: ProjectType) => {
  return (
    <div className="flex">
      <Image src={img} layout="intrinsic" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <>
      {projectData.map((project) => {
        return <Project {...project} />;
      })}
    </>
  );
};
