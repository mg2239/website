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
      title: string;
      link: string;
      progress: string;
    };
