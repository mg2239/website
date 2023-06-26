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
      title: string;
      link: string;
      progress: string;
    };
