export type Album = {
  type: 'appears_on' | 'single';
  href: string;
  name: string;
  release_date: string;
  image: string;
};
