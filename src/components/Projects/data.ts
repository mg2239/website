import bloom from './images/bloom.svg';
import wippy from './images/wippy.svg';
import mandarin from './images/mandarin.svg';
import mixi from './images/mixi.svg';
import carriage from './images/carriage.svg';

export enum ProjectCategory {
  INTERNSHIP = 'internship',
  WIP = 'work in progress',
  PROJECT = 'project',
  PROJECT_TEAM = 'project team',
}

export type ProjectType = {
  title: string;
  caption: string;
  category: ProjectCategory;
  img: string;
  link: string;
  linkType: string;
};

const projects: ProjectType[] = [
  {
    title: 'bloom',
    caption: 'curating friendships for students',
    category: ProjectCategory.INTERNSHIP,
    img: bloom,
    link: 'https://www.linkedin.com/company/bloom-university/about/',
    linkType: 'linkedin',
  },
  {
    title: 'wippy',
    caption: 'music sharing that expires',
    category: ProjectCategory.WIP,
    img: wippy,
    link: 'https://github.com/mg2239/wippy',
    linkType: 'github',
  },
  {
    title: 'mandarin helper',
    caption: 'flashcards for chin 1101/1102 students',
    category: ProjectCategory.WIP,
    img: mandarin,
    link: 'https://mandarin-helper.web.app/',
    linkType: 'site',
  },
  {
    title: 'mixi',
    caption: 'sort spotify playlists by bpm or key',
    category: ProjectCategory.PROJECT,
    img: mixi,
    link: 'http://mixiforspotify.web.app/',
    linkType: 'site',
  },
  {
    title: 'carriage',
    caption: 'helping students w/ disabilities get around campus',
    category: ProjectCategory.PROJECT_TEAM,
    img: carriage,
    link: 'https://github.com/cornell-dti/carriage-web',
    linkType: 'github',
  },
];

export default projects;
