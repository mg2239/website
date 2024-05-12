import { Card } from '../components/Card/Card';
import { Head } from '../components/Head/Head';
import { getCurrentlyListening, getReleases } from '../util/spotify';

export default async function Page() {
  const song = await getCurrentlyListening();

  return (
    <div className="flex justify-center  px-4 py-8">
      <Head />
      <Card song={song} />
    </div>
  );
}
