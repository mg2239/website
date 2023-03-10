import { GetServerSideProps } from 'next';
import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import { Album, Song } from '../types';
import { getAlbums, getCurrentlyListening } from '../util/spotify';

export const getServerSideProps: GetServerSideProps = async () => {
  const albums = await getAlbums().catch(() => []);
  const song = await getCurrentlyListening().catch(() => ({
    isPlaying: false,
  }));
  return { props: { albums, song } };
};

type HomeProps = {
  albums: Album[];
  song: Song;
};

const Home = ({ albums, song }: HomeProps) => {
  return (
    <>
      <Head />
      <div className="flex flex-col pt-8 pb-8 m-auto sm:pt-16 sm:pr-2 sm:pb-16 sm:pl-2 sm:max-w-screen-md">
        <Intro song={song} />
        <Music albums={albums} />
      </div>
    </>
  );
};

export default Home;
