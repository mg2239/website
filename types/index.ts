export type Release = {
  link: string;
  trackName?: string;
  albumName: string;
  image: string;
};

export type Song =
  | { isPlaying: false }
  | {
      isPlaying: true;
      albumArt: string;
      albumName: string;
      artists: string;
      link: string;
      progress: string;
      title: string;
    };
