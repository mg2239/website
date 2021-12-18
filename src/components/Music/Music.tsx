import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { AlbumType } from '../../types';

type Data = {
  albums: AlbumType[];
};

type Err = {
  err: string;
};

const Album = ({ href, name, image }: AlbumType) => {
  return (
    <a href={href} className="relative flex group">
      <Image src={image} width={300} height={300} layout="intrinsic" />
      <div className="absolute flex items-center justify-center w-full h-full p-4 text-center transition-opacity bg-white opacity-0 group-hover:opacity-90">
        <p className="text-xl font-bold">{name}</p>
      </div>
    </a>
  );
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default () => {
  const { data, error } = useSWR<Data, Err>('/api/spotify', fetcher);

  if (!data) return null;
  if (error) return <p>{error.err}</p>;

  const { albums } = data;
  // const singles = albums.filter(({ type }) => type === 'single');
  // const features = albums.filter(({ type }) => type === 'appears_on');

  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        {albums.map((album) => (
          <Album {...album} />
        ))}
      </div>
      {/* <h1 className="mb-2">Appears On</h1>
      <div className="grid grid-cols-4 gap-2">
        {features.map((album) => (
          <Album {...album} />
        ))}
      </div> */}
    </div>
  );
};
