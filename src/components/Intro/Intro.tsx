import img from './img.jpg';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '40%',
    filter: 'drop-shadow(-16px 16px 0px #000000)',
    marginLeft: '16px',
    marginBottom: '16px',
  },
  textContainer: {
    marginLeft: '2rem',
  },
  heading: {
    marginBottom: '1.5rem',
  },
  text: {
    fontSize: '1.25rem',
    marginBottom: '1.25rem',
    '&:last_child': {
      marginBottom: '0',
    },
  },
  '@media (max-width: 900px)': {
    heading: {
      marginBottom: '1.25rem',
    },
    text: {
      fontSize: '1rem',
      marginBottom: '1rem',
    },
  },
  '@media (max-width: 625px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    img: {
      width: '60%',
      filter: 'drop-shadow(-12px 12px 0px #000000)',
      marginLeft: '12px',
      marginBottom: '12px',
    },
    textContainer: {
      margin: '0',
      textAlign: 'center',
      alignItems: 'center',
      padding: '2rem 0 0',
    },
  },
});

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} />
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Hello! 🙃</h1>
        <p className={styles.text}>
          I’m Matthew, a junior at Cornell University studying Computer Science.
        </p>
        <p className={styles.text}>
          I previously interned at{' '}
          <a href="https://www.linkedin.com/company/bloom-university/about/">
            Bloom
          </a>
          , and am currently interning at{' '}
          <a href="https://www.cameo.com/">Cameo</a>.
        </p>
        <p className={styles.text}>
          When I'm not developing, I'm usually producing music, watching movies,
          or learning guitar.
        </p>
      </div>
    </div>
  );
};
