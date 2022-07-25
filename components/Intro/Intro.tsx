import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useWindowWidth } from '../../context/useWindowWidth';
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

const Links = () => {
  return (
    <div className="mb-2">
      <Link to="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing">
        resume
      </Link>
      <Link to="https://github.com/mg2239">github</Link>
      <Link to="https://www.linkedin.com/in/mg2239/">linkedin</Link>
    </div>
  );
};

const Text = ({ song: initSong }: { song: Song }) => {
  const [song, setSong] = useState<Song>(initSong);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/currentlyListening')
        .then((data) => data.json())
        .then((song) => {
          setSong(song);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm sm:text-base">
      <p>web dev and music producer</p>
      <p>swe @ cameo</p>
      <p>cs @ cornell &apos;22</p>
      {song && song.is_playing && (
        <p>
          currently listening to <Link to={song.link}>{song.title}</Link>
        </p>
      )}
    </div>
  );
};

const Intro = ({ song }: { song: Song }) => {
  const { isSmall } = useWindowWidth();
  const size = isSmall ? 80 : 140;

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
          <Links />
          {!isSmall && <Text song={song} />}
        </div>
      </div>
      {isSmall && <Text song={song} />}
    </div>
  );
};

export default Intro;
