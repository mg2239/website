import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Song } from '../../types';

const Link = ({ to, children }: React.PropsWithChildren<{ to: string }>) => {
  return (
    <a
      className="inline mr-2 text-sm font-semibold hover:text-gray-500 rounded-full transition-colors sm:mr-4 sm:text-base"
      href={to}
    >
      {children}
    </a>
  );
};

const Text = (props: { song: Song }) => {
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
      <p>swe @ cameo</p>
      <p>cs @ cornell &apos;22</p>
      {song.isPlaying && (
        <p>
          currently listening to <Link to={song.link}>{song.title}</Link>
        </p>
      )}
    </div>
  );
};

const Intro = ({ song }: { song: Song }) => {
  const isMobile = useIsMobile();
  const size = isMobile ? 80 : 140;

  return (
    <div className="mr-4 mb-8 ml-4 sm:mr-0 sm:mb-16 sm:ml-0">
      <div className="flex grid-cols-6 gap-1 mb-2 sm:grid sm:grid-cols-3 sm:gap-6">
        <div className="mr-5 sm:flex sm:justify-center sm:m-0">
          <Image
            src="/face.png"
            alt="face"
            layout="fixed"
            width={size}
            height={size}
            className="invert-0 dark:invert transition-all"
          />
        </div>
        <div className="col-span-5 sm:col-span-2">
          <h1 className="mb-1 font-light sm:mb-2">matthew guo</h1>
          <div className="mb-2">
            <Link to="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
              resume
            </Link>
            <Link to="https://github.com/mg2239">github</Link>
            <Link to="https://www.linkedin.com/in/mg2239/">linkedin</Link>
          </div>
          {!isMobile && <Text song={song} />}
        </div>
      </div>
      {isMobile && <Text song={song} />}
    </div>
  );
};

export default Intro;
