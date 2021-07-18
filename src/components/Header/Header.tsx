import Icons from '../Icons/Icons';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 0',
  },

  '@media (max-width: 625px)': {
    container: {
      padding: '1.5rem 0',
    },
  },
});

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <h1>Matthew Guo</h1>
      <Icons />
    </div>
  );
};
