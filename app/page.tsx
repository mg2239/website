import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import { getCurrentlyListening, getReleases } from '../util/spotify';

export default async function Page() {
  const releases = await getReleases();
  const song = await getCurrentlyListening();

  return (
    <div className="m-auto flex flex-col py-8 sm:max-w-screen-md sm:px-2 sm:py-16">
      <Intro song={song} />
      <Music releases={releases} />
    </div>
  );
}
