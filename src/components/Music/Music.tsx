import React from 'react';
import Image from 'next/image';
import { AlbumType } from '../../types';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const Album = ({ href, name, image, release_date }: AlbumType) => {
  return (
    <div className="flex flex-col">
      <a href={href} className=" group">
        <Image
          src={image}
          width={300}
          height={300}
          layout="intrinsic"
          className="transition-opacity group-hover:opacity-50"
        />
      </a>
      <p className="font-bold">{name}</p>
      <p className="text-xs font-ligh">{dayjs(release_date).format('LL')}</p>
    </div>
  );
};

type AlbumPageProps = {
  albums: AlbumType[];
};

export default ({ albums }: AlbumPageProps) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {albums.map((album) => (
          <Album {...album} />
        ))}
      </div>
    </div>
  );
};
