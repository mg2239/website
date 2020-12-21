import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Icons from '../Icons/Icons';
import styles from './intro.module.css';
import img from './websiteimg.jpg';

export default () => {
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();

  const handleLoad = () => setLoaded(true);

  useEffect(() => {
    if (loaded) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [loaded]);

  return (
    <motion.div
      className={styles.ctr}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <img className={styles.img} src={img} onLoad={handleLoad} />
      <div className={styles.textCtr}>
        <p className={styles.heading}>
          Hey, I'm <span style={{ fontWeight: 'bold' }}>Matthew 🙃</span>
        </p>
        <p className={styles.text}>
          I’m a junior at Cornell University studying Computer Science.
        </p>
        <p className={styles.text}>
          Previously interned at{' '}
          <a href="https://www.linkedin.com/company/bloom-university/about/">
            Bloom
          </a>
          , incoming SWE intern at <a href="https://www.cameo.com/">Cameo</a>.
        </p>
        <p className={styles.text}>
          In my free time, I like working on personal projects, producing music,
          drawing, and longboarding.
        </p>
        <Icons />
      </div>
    </motion.div>
  );
};
