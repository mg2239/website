import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Image from 'next/image';
import React from 'react';
import { Album as AlbumType } from '../../../types';

dayjs.extend(localizedFormat);

function Album({ link, name, image, releaseDate }: AlbumType) {
  return (
    <div className="m-auto">
      <a href={link} className="group flex">
        <Image
          alt=""
          src={image}
          width={300}
          height={300}
          className="block transition-opacity group-hover:opacity-50"
        />
      </a>
      <div className="hidden sm:block">
        <p className="mt-1 font-semibold">{name}</p>
        <p className="text-xs">{dayjs(releaseDate).format('ll')}</p>
      </div>
    </div>
  );
}

type MusicProps = {
  albums: AlbumType[];
};

function Music({ albums }: MusicProps) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-6">
      {albums.map((album) => (
        <Album key={album.name} {...album} />
      ))}
    </div>
  );
}

export default Music;
