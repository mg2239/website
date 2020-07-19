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
    title: 'bloom',
    caption: 'curating friendships for students',
    category: 'full-stack internship',
    img: bloom,
    link: 'https://www.linkedin.com/company/bloom-university/about/',
    linkType: 'linkedin',
  },
  {
    title: 'wippy',
    caption: 'music sharing that expires',
    category: 'work in progress',
    img: wippy,
    link: 'https://github.com/mg2239/wippy',
    linkType: 'github',
  },
  {
    title: 'mandarin helper',
    caption: 'flashcards for chin 1101/1102 students',
    category: 'work in progress',
    img: mandarin,
    link: 'https://mandarin-helper.web.app/',
    linkType: 'site',
  },
  {
    title: 'mixi',
    caption: 'sort spotify playlists by bpm or key',
    category: 'project',
    img: mixi,
    link: 'http://mixiforspotify.web.app/',
    linkType: 'site',
  },
  {
    title: 'carriage',
    caption: 'helping students w/ disabilities get around campus',
    category: 'project team',
    img: carriage,
    link: 'https://github.com/cornell-dti/carriage-web',
    linkType: 'github',
  },
];

export default projects;
