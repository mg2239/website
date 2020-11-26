import React from 'react';
import { showcaseData, ShowcaseItem as ShowcaseItemProps } from './data';
import styles from './showcase.module.css';
import TabLink from '../../common/TabLink';

const ShowcaseItem = ({
  caption,
  category,
  img,
  link,
  linkType,
  title,
}: ShowcaseItemProps) => (
  <div className={styles.item}>
    <img className={styles.itemImg} src={img} />
    <div className={styles.itemOverlay}>
      <div className={styles.itemOverlayInner}>
        <h2>{title}</h2>
        <p className={styles.itemCategory}>{category}</p>
        <p className={styles.itemCaption}>{caption}</p>
        <TabLink className={styles.itemLink} to={link}>
          {`Visit ${linkType}`}
        </TabLink>
      </div>
    </div>
  </div>
);

export default () => (
  <div className="section">
    <div className={styles.grid}>
      {showcaseData.map((item) => (
        <ShowcaseItem key={item.title} {...item} />
      ))}
    </div>
  </div>
);
