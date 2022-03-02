import React from 'react';
import styles from './Post.module.scss';

const Post = ({ content, date }) => {
  return (
    <React.Fragment>
      <p className={styles.postsContent}>{content}</p>
      <p className={styles.postsDate}>{date}</p>
    </React.Fragment>
  );
};

export default Post;
