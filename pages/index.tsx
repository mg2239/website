import { GetServerSideProps } from 'next';
import Head from '../components/Head/Head';
import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import { Release, Song } from '../types';
import { getCurrentlyListening, getReleases } from '../util/spotify';

export const getServerSideProps: GetServerSideProps = async () => {
  const releases = await getReleases().catch(() => []);
  const song = await getCurrentlyListening().catch(() => ({
    isPlaying: false,
  }));
  return { props: { releases, song } };
};

type HomeProps = {
  releases: Release[];
  song: Song;
};

const Home = ({ releases, song }: HomeProps) => {
  return (
    <>
      <Head />
      <div className="m-auto flex flex-col pb-8 pt-8 sm:max-w-screen-md sm:pb-16 sm:pl-2 sm:pr-2 sm:pt-16">
        <Intro song={song} />
        <Music releases={releases} />
      </div>
    </>
  );
};

export default Home;
