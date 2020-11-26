import { bloom, carriage, mandarin, mixi, wippy } from './images';

export interface ShowcaseItem {
  caption: string;
  category: string;
  link: string;
  linkType: string;
  img: string;
  title: string;
}

export const showcaseData: ShowcaseItem[] = [
  {
    title: 'Bloom',
    caption: 'Curating friendships for students.',
    category: 'Full-Stack Internship',
    img: bloom,
    link: 'https://www.linkedin.com/company/bloom-university/about/',
    linkType: 'LinkedIn',
  },
  {
    title: 'wippy',
    caption: 'Music sharing with expiring links.',
    category: 'Project',
    img: wippy,
    link: 'https://wippy.now.sh/',
    linkType: 'Website',
  },
  {
    title: 'Mandarin Helper',
    caption: 'Flashcards for CHIN 1101/1102 students.',
    category: 'Project',
    img: mandarin,
    link: 'https://mandarin-helper.web.app/',
    linkType: 'Website',
  },
  {
    title: 'Mixi',
    caption: 'Sort Spotify playlists by BPM or key.',
    category: 'Project',
    img: mixi,
    link: 'http://mixiforspotify.web.app/',
    linkType: 'Website',
  },
  {
    title: 'DTI',
    caption: 'Working on Carriage, a ride scheduling app for CULift.',
    category: 'Project Team',
    img: carriage,
    link: 'https://github.com/cornell-dti/carriage-web',
    linkType: 'GitHub',
  },
];
