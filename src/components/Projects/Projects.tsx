import { projectData, ProjectType } from './data';
import styles from './projects.module.css';

const Project = ({ caption, link, linkType, img, title }: ProjectType) => (
  <div>
    <img src={img} alt={title} />
    <div>
      <h1>{title}</h1>
      <p>{caption}</p>
      <a href={link}>{linkType}</a>
    </div>
  </div>
);

export default () => (
  <>
    {projectData.map((project) => (
      <Project {...project} />
    ))}
  </>
);
