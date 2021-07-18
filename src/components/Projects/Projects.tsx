import Button from '../Button/Button';
import { projectData, ProjectType } from './data';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    margin: '3rem auto',
  },
  img: {
    width: '35%',
  },
  infoContainer: {
    marginLeft: '2rem',
    padding: '1rem 0',
  },
  title: {
    marginBottom: '1rem',
  },
  caption: {
    marginBottom: '1.2rem',
  },
  '@media (max-width: 625px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'initial',
    },
    img: {
      width: '80%',
      display: 'block',
      margin: 'auto',
    },
    infoContainer: {
      margin: '0',
      padding: '2rem 0 0',
    },
    divider: {
      margin: '2rem auto',
    },
  },
});

const Divider = () => {
  const styles = useStyles();
  return <hr className={styles.divider} />;
};

const Project = ({ caption, link, linkType, img, title }: ProjectType) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.caption}>{caption}</p>
        <Button to={link}>{linkType}</Button>
      </div>
    </div>
  );
};

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
