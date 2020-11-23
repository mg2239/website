import React from 'react';
import projects, { ProjectType } from './data';
import styles from './projects.module.css';
import TabLink from '../../common/TabLink';

const Project = ({
  caption,
  category,
  img,
  link,
  linkType,
  title,
}: ProjectType) => (
  <div className={styles.project}>
    <img className={styles.projectImg} src={img} />
    <div className={styles.projectOverlay}>
      <div className={styles.projectOverlayInner}>
        <h2>{title}</h2>
        <p className={styles.projectCategory}>{category}</p>
        <p className={styles.projectCaption}>{caption}</p>
        <TabLink className={styles.projectLink} to={link}>
          {`Visit ${linkType}`}
        </TabLink>
      </div>
    </div>
  </div>
);

export default () => (
  <div className="section">
    <div className={styles.grid}>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  </div>
);
