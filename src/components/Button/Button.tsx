import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    display: 'block',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    boxSizing: 'border-box',
    color: 'white',
    backgroundColor: 'black',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    width: 'fit-content',
    fontWeight: 'bold',
    transition: '0.2s background',
    '&:hover': {
      backgroundColor: '#353535',
    },
  },
});

interface ButtonProps {
  to: string;
}

export default ({ to, children }: React.PropsWithChildren<ButtonProps>) => {
  const styles = useStyles();
  return (
    <a href={to} className={styles.button} role="button">
      {children}
    </a>
  );
};
