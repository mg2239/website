import Icons from '../Icons/Icons';
import styles from './intro.module.css';
import img from './img.jpg';

export default () => (
  <div className={styles.ctr}>
    <img className={styles.img} src={img} />
    <div className={styles.textCtr}>
      <h1 className={styles.heading}>
        Hey, I'm <span style={{ fontWeight: 'bold' }}>Matthew</span> 🙃
      </h1>
      <p className={styles.text}>
        I’m a junior at Cornell University studying Computer Science.
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
        In my free time, I like working on personal projects, producing music,
        and watching movies.
      </p>
      <Icons />
    </div>
  </div>
);
