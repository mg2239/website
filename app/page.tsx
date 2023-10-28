import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import { getCurrentlyListening, getReleases } from '../util/spotify';

export default async function Page() {
  const releases = await getReleases();
  const song = await getCurrentlyListening();

  return (
    <div className="m-auto flex flex-col pb-8 pt-8 sm:max-w-screen-md sm:pb-16 sm:pl-2 sm:pr-2 sm:pt-16">
      <Intro song={song} />
      <Music releases={releases} />
    </div>
  );
}
