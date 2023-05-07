export type Album = {
  link: string;
  name: string;
  releaseDate: string;
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
