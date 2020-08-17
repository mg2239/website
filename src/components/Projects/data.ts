import bloom from './images/bloom.svg';
import wippy from './images/wippy.svg';
import mandarin from './images/mandarin.svg';
import mixi from './images/mixi.svg';
import carriage from './images/carriage.svg';

export type ProjectType = {
  title: string;
  caption: string;
  category: string;
  img: string;
  link: string;
  linkType: string;
};

const projects: ProjectType[] = [
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

export default projects;
