import { GetServerSideProps } from 'next';
import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import { Album } from '../types';
import { getAlbums, getCurrentlyListening } from '../util/spotify';
import Head from '../components/Head/Head';
import { Song } from '../types';

export const getServerSideProps: GetServerSideProps = async () => {
  const { albums } = await getAlbums();
  let song;
  try {
    song = await getCurrentlyListening();
  } catch (err) {
    song = { is_playing: false };
  }
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
