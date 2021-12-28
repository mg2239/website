import React from 'react';
import Image from 'next/image';
import { AlbumType } from '../../types';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const Album = ({ link, name, image, release_date }: AlbumType) => {
  return (
    <div className="m-auto">
      <a href={link} className="group">
        <Image
          src={image}
          width={300}
          height={300}
          layout="intrinsic"
          className="transition-opacity rounded-md group-hover:opacity-50"
        />
      </a>
      <p className="font-bold">{name}</p>
      <p className="text-xs">{dayjs(release_date).format('LL')}</p>
    </div>
  );
};

type AlbumPageProps = {
  albums: AlbumType[];
};

export default ({ albums }: AlbumPageProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <Album key={album.name} {...album} />
      ))}
    </div>
  );
};
