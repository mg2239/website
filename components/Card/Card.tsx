import { Song } from '../../types';
import { Banner } from '../Banner/Banner';

type Props = {
  song: Song;
};

export function Card({ song }: Props) {
  return (
    <div className="relative flex w-80 flex-col overflow-clip rounded-lg bg-neutral-800 shadow-xl shadow-neutral-400">
      <Banner />
      <div className="mx-4 mb-4 rounded-lg bg-neutral-950 p-3">
        <h1 className="text-xl font-semibold text-white">matthewguo</h1>
        <span className="mt-3 block w-full border-t border-neutral-700" />
        <div className="mt-3">
          <p className="text-xs font-bold uppercase text-white">about me</p>
          <p className="text-sm">Nov 21, 2015</p>
        </div>
      </div>
    </div>
  );
}
