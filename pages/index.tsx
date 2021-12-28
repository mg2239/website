import { GetServerSideProps } from 'next';
import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';
import { AlbumType } from '../types';
import { getAlbums } from '../util/spotify';
import { DarkModeProvider } from '../context/darkMode';
import Head from '../components/Head/Head';

export const getServerSideProps: GetServerSideProps = async () => {
  const { albums } = await getAlbums();
  return { props: { albums } };
};

type HomeProps = {
  albums: AlbumType[];
};

const Home = ({ albums }: HomeProps) => {
  return (
    <DarkModeProvider>
      <Head />
      <div className="flex flex-col pt-8 pb-12 m-auto w-4/5 max-w-7xl lg:flex-row">
        <div className="lg:mr-8 lg:w-1/4">
          <Intro />
        </div>
        <Music albums={albums} />
      </div>
      <DarkModeToggle />
    </DarkModeProvider>
  );
};

export default Home;
