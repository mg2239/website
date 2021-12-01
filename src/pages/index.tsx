import Head from '../components/Head/Head';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Title from '../components/Title/Title';
import Projects from '../components/Projects/Projects';
import 'normalize.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      fontFamily: 'Inter, sans-serif',
      margin: 'auto',
      width: '80%',
      maxWidth: '820px',
      paddingBottom: '5rem',
    },
    h1: {
      fontSize: '2rem',
      letterSpacing: '-0.022em',
      fontWeight: 600,
    },
    a: {
      margin: '0',
      color: 'black',
    },
    p: {
      margin: '0',
      color: 'black',
    },
    '@media (max-width: 1023px)': {
      h1: {
        fontSize: '1.75rem',
      },
    },
    '@media (max-width: 625px)': {
      h1: {
        fontSize: '1.5rem',
      },
    },
  },
});

export default () => {
  useStyles();
  return (
    <>
      <Head />
      <Header />
      <Intro />
      <Title title="Projects" />
      <Projects />
    </>
  );
};
