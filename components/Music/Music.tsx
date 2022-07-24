import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import Image from 'next/image';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Album } from '../../types';
import { useWindowWidth } from '../../context/useWindowWidth';

dayjs.extend(localizedFormat);

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Album = ({ link, name, image, release_date }: Album) => {
  const { isSmall } = useWindowWidth();

  return (
    <div className="m-auto">
      <a href={link} className="group flex">
        <Image
          alt=""
          src={image}
          width={300}
          height={300}
          layout="intrinsic"
          className="block group-hover:opacity-50 transition-opacity"
        />
      </a>
      {!isSmall && (
        <>
          <ResponsiveEllipsis
            text={name}
            basedOn="letters"
            maxLine={1}
            className="mt-1 font-semibold"
          />
          <p className="text-xs">{dayjs(release_date).format('ll')}</p>
        </>
      )}
    </div>
  );
};

type AlbumPageProps = {
  albums: Album[];
};

const Music = ({ albums }: AlbumPageProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-6">
      {albums.map((album) => (
        <Album key={album.name} {...album} />
      ))}
    </div>
  );
};

export default Music;
