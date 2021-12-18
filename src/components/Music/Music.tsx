import React from 'react';
import useSWR from 'swr';
import { Album } from '../../types';

type Data = {
  albums: Album[];
};

type Err = {
  err: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default () => {
  const { data, error } = useSWR<Data, Err>('/api/spotify', fetcher);

  if (!data) return null;
  if (error) return <p>{error.err}</p>;

  const { albums } = data;
  const singles = albums.filter(({ type }) => type === 'single');
  const features = albums.filter(({ type }) => type === 'appears_on');

  return (
    <div>
      {singles.map((album) => {
        return <p>{album.name}</p>;
      })}
      {features.map((album) => {
        return <p>{album.name}</p>;
      })}
    </div>
  );
};
