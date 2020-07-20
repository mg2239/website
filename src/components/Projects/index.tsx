import React from 'react';
import projects, { ProjectType } from './data';
import styles from './index.module.css';
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
        <TabLink className={styles.projectBtn} to={link}>
          {`Visit ${linkType}`}
        </TabLink>
      </div>
    </div>
  </div>
);

export default () => (
  <div className="section">
    <h1 className={styles.heading}>Experience + Projects</h1>
    <div className={styles.grid}>
      {projects.map((project) => (
        <Project
          caption={project.caption}
          category={project.category}
          img={project.img}
          link={project.link}
          linkType={project.linkType}
          title={project.title}
        />
      ))}
    </div>
  </div>
);
