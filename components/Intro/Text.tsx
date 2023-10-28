'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Song } from '../../types';
import { Link } from './Link';

export const Text = (props: { song: Song }) => {
  const [song, setSong] = useState<Song>(props.song);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('/api/currentlyListening').then(({ data }) => setSong(data));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm sm:text-base">
      <p>web dev and music producer</p>
      <p>cs @ cornell &apos;22</p>
      {song.isPlaying && (
        <p>
          listening to <Link to={song.link}>{song.title}</Link>
        </p>
      )}
    </div>
  );
};
