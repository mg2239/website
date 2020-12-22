import styles from './button.module.css';

interface ButtonProps {
  to: string;
}

export default ({ to, children }: React.PropsWithChildren<ButtonProps>) => (
  <a href={to} className={styles.button} role="button">
    {children}
  </a>
);
