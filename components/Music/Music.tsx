import Image from 'next/image';
import React from 'react';
import { Release as ReleaseType } from '../../types';

const Release = ({ link, trackName, albumName, image }: ReleaseType) => {
  return (
    <div className="m-auto">
      <a href={link} target="_blank" className="group flex">
        <Image
          alt=""
          src={image}
          width={300}
          height={300}
          className="block transition-opacity group-hover:opacity-50"
        />
      </a>
      <div className="hidden sm:block">
        <p className="mt-1 font-semibold">{trackName}</p>
        <p className="text-xs">{albumName}</p>
      </div>
    </div>
  );
};

type MusicProps = {
  releases: ReleaseType[];
};

const Music = ({ releases }: MusicProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-6">
      {releases.map((release) => (
        <Release key={release.albumName} {...release} />
      ))}
    </div>
  );
};

export default Music;
