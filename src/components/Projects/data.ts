import { carriage, mandarin, mixi, wippy } from './images';

export interface ProjectType {
  caption: string;
  link: string;
  linkType: string;
  img: string;
  title: string;
}

export const projectData: ProjectType[] = [
  {
    title: 'wippy',
    caption: 'Music sharing with expiring links.',
    img: wippy,
    link: 'https://wippy.now.sh/',
    linkType: 'Website',
  },
  {
    title: 'Mandarin Helper',
    caption: 'Flashcards for CHIN 1101/1102 students.',
    img: mandarin,
    link: 'https://mandarin-helper.web.app/',
    linkType: 'Website',
  },
  {
    title: 'Mixi',
    caption: 'Sort Spotify playlists by BPM or key.',
    img: mixi,
    link: 'http://mixiforspotify.web.app/',
    linkType: 'Website',
  },
  {
    title: 'Carriage',
    caption: 'Ride scheduling app for CULift.',
    img: carriage,
    link: 'https://github.com/cornell-dti/carriage-web',
    linkType: 'GitHub',
  },
];
