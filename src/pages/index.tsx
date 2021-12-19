import { GetServerSideProps } from 'next';
import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import { AlbumType } from '../types';
import { getAlbums } from '../util/spotify';

export const getServerSideProps: GetServerSideProps = async () => {
  const { albums } = await getAlbums();
  return { props: { albums } };
};

type HomePageProps = {
  albums: AlbumType[];
};

export default ({ albums }: HomePageProps) => {
  return (
    <>
      <Head />
      <div className="flex w-4/5 pt-8 pb-12 m-auto max-w-7xl">
        <div className="fixed w-72">
          <Intro />
        </div>
        <div className="flex-grow ml-80">
          <Music albums={albums} />
        </div>
      </div>
    </>
  );
};
