import styles from './title.module.css';

type TitleProps = {
  title: string;
};

export default ({ title }: TitleProps) => (
  <h1 className={styles.title}>{title}</h1>
);
