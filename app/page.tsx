import { Card } from '../components/Card/Card';
import { Head } from '../components/Head/Head';
import { getCurrentlyListening, getReleases } from '../util/spotify';

export default async function Page() {
  const song = await getCurrentlyListening();

  return (
    <div className="flex h-screen items-center justify-center">
      <Head />
      <Card song={song} />
    </div>
  );
}
