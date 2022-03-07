/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Bio.module.scss';

const Bio = ({ headshot, name, tagline, role }) => {
  return (
    <div className={styles.bio}>
      <div className={styles.bioImage}>
        <img src={headshot} alt={`headshot of ${name}`} />
      </div>
      <div className={styles.bioMeta}>
        <h2 className={styles.bioName}>{name}</h2>
        <h4 className={styles.bioTagline}>{tagline}</h4>
        <p className={styles.bioRole}>{role}</p>
      </div>
    </div>
  );
};

export default Bio;

// Usage
// <Bio name='John Doe' title='Front-end developer' description='Some description' />
