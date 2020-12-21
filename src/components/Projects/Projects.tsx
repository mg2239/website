import Button from '../Button/Button';
import { projectData, ProjectType } from './data';
import styles from './projects.module.css';

const Divider = () => <hr className={styles.divider} />;

const Project = ({ caption, link, linkType, img, title }: ProjectType) => (
  <div className={styles.ctr}>
    <img src={img} alt={title} className={styles.img} />
    <div className={styles.infoCtr}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.caption}>{caption}</p>
      <Button to={link}>{linkType}</Button>
    </div>
  </div>
);

export default () => (
  <>
    {projectData.reduce((acc, project, index) => {
      acc.push(<Project {...project} />);
      if (index < projectData.length - 1) {
        acc.push(<Divider />);
      }
      return acc;
    }, [] as JSX.Element[])}
  </>
);
