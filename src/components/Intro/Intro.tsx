import styles from './intro.module.css';
import img from './img3.jpg';

export default () => (
  <div className={styles.ctr}>
    <img className={styles.img} src={img} />
    <div className={styles.textCtr}>
      <h1 className={styles.heading}>Hello! 🙃</h1>
      <p className={styles.text}>
        I’m Matthew, a junior at Cornell University studying Computer Science.
      </p>
      <p className={styles.text}>
        I previously interned at{' '}
        <a href="https://www.linkedin.com/company/bloom-university/about/">
          Bloom
        </a>
        , and am an incoming SWE intern at{' '}
        <a href="https://www.cameo.com/">Cameo</a>.
      </p>
      <p className={styles.text}>
        When I'm not developing, I'm usually producing music, watching movies,
        or learning how to longboard.
      </p>
    </div>
  </div>
);
