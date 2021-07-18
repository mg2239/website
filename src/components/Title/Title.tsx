import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    margin: '0',
    padding: '5rem 0',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  '@media (max-width: 625px)': {
    title: {
      padding: '4rem 0',
    },
  },
});

interface TitleProps {
  title: string;
}

export default ({ title }: TitleProps) => {
  const styles = useStyles();
  return <h1 className={styles.title}>{title}</h1>;
};
