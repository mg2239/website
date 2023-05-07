import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Song } from '../../types';
import { Section } from '../Section/Section';

type SpotifyProps = {
  song: Song;
};

function Spotify({ song }: SpotifyProps) {
  if (!song.isPlaying) {
    return null;
  }

  return (
    <div className="flex items-center">
      <div className="min-h-[60px] min-w-[60px]">
        <Image
          src={song.albumArt}
          width={60}
          height={60}
          alt={`album cover for ${song.title}`}
        />
      </div>
      <div className="ml-3 text-sm leading-snug">
        <p className="font-semibold">{song.title}</p>
        <p>by {song.artists}</p>
        <p>on {song.albumName}</p>
      </div>
    </div>
  );
}

type RoleProps = {
  title: string;
  color: string;
};

function Role({ title, color }: RoleProps) {
  return (
    <div className="flex items-center rounded-sm bg-neutral-800 p-1">
      <span className={`mx-1 h-3 w-3 rounded-full ${color}`} />
      <p className="mr-1 whitespace-nowrap text-xs">{title}</p>
    </div>
  );
}

type Props = {
  song: Song;
};

export function Card(props: Props) {
  const [song, setSong] = useState(props.song);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('/api/currentlyListening').then(({ data }) => setSong(data));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-[340px] flex-col overflow-clip rounded-lg bg-neutral-800 shadow-lg shadow-neutral-500">
      {/* Banner */}
      <div className="h-[60px] bg-green-600" />
      <Image
        className="absolute left-4 top-4 box-content rounded-full border-8 border-neutral-800"
        src="/face.jpg"
        alt="face"
        width={80}
        height={80}
      />
      <div className="h-[60px]" />
      {/* Body */}
      <div className="mx-4 mb-4 rounded-lg bg-neutral-900 p-3">
        {/* Header */}
        <h1 className="text-xl font-semibold text-white">matthew guo</h1>
        {/* Divider */}
        <span className="mt-3 block w-full border-t border-neutral-700" />
        {/* Sections */}
        <Section title="About Me">
          <p className="text-sm">web developer and music producer</p>
        </Section>
        {song.isPlaying && (
          <Section title="Listening to Spotify">
            <Spotify song={song} />
          </Section>
        )}
        <Section title="Roles">
          <div className="mt-1 flex flex-wrap gap-1">
            <Role title="Cornell '22" color="bg-red-500" />
            <Role title="Cameo" color="bg-purple-500" />
          </div>
        </Section>
        <Section title="Links"></Section>
      </div>
    </div>
  );
}
