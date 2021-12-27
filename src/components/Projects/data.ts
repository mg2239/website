import { carriage, mandarin, mixi, wippy } from './images';

export interface ProjectType {
  description: string;
  link: string;
  linkType: string;
  img: string;
  title: string;
}

export const projectData: ProjectType[] = [
  {
    title: 'Carriage',
    description:
      'Ride scheduling, tracking, and management for CULift. Being created as part of Cornell Design and Tech Initiative, a project team on campus.',
    img: carriage,
    link: 'https://github.com/cornell-dti/carriage-web',
    linkType: 'GitHub',
  },
  {
    title: 'wippy',
    description: 'Audio hosting with time-expiring links.',
    img: wippy,
    link: 'https://wippy.now.sh/',
    linkType: 'Website',
  },
  {
    title: 'Mandarin Helper',
    description:
      'Generate flashcards or export Quizlet sets of CHIN 1101/1102 character sheets. ',
    img: mandarin,
    link: 'https://mandarin-helper.web.app/',
    linkType: 'Website',
  },
  {
    title: 'Mixi',
    description: 'Sort Spotify playlists by BPM or key.',
    img: mixi,
    link: 'http://mixiforspotify.web.app/',
    linkType: 'Website',
  },
];
