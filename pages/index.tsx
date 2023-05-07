import { GetServerSideProps } from 'next';
import { Card } from '../components/Card/Card';
import { Head } from '../components/Head/Head';
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

function Home({ albums, song }: HomeProps) {
  return (
    <div className="flex justify-center px-4 py-8">
      <Head />
      <Card song={song} />
    </div>
  );
}

export default Home;
