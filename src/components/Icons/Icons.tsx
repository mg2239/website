import { IconContext } from 'react-icons';
import {
  AiOutlineFileText,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '160px',
    marginLeft: '0.5rem',
  },
  iconBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem',
    width: '2.5rem',
    borderRadius: '50%',
    transition: '0.2s background',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  icon: {
    height: '1.5rem',
    width: 'auto',
    color: 'black',
  },
  '@media (max-width: 625px)': {
    iconContainer: {
      width: '120px',
    },
    iconBtn: {
      height: '2rem',
      width: '2rem',
    },
    icon: {
      height: '1.2rem',
    },
  },
});

export default () => {
  const styles = useStyles();
  return (
    <IconContext.Provider value={{ className: styles.icon }}>
      <div className={styles.iconContainer}>
        <a
          className={styles.iconBtn}
          href="https://drive.google.com/file/u/1/d/1C0ey-CJc0IcWVugmebR6NFBLsfhdX9ZH/view?usp=sharing"
          role="button"
        >
          <AiOutlineFileText />
        </a>
        <a
          className={styles.iconBtn}
          href="https://github.com/mg2239"
          role="button"
        >
          <AiFillGithub />
        </a>
        <a
          className={styles.iconBtn}
          href="https://www.linkedin.com/in/mg2239/"
          role="button"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </IconContext.Provider>
  );
};
