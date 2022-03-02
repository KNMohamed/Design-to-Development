import React from 'react';
import styles from './Post.module.scss';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const Post = ({ content, date }) => {
  return (
    <React.Fragment>
      <p className={styles.postsContent}>{content}</p>
      <ul className={styles.postsMeta}>
        <li className={styles.postsMetaData}>
          <FaHeart />
          34
        </li>
        <li className={styles.postsMetaData}>
          <FaShareAlt />
          Share
        </li>
        <li className={styles.postsMetaData}>{date}</li>
      </ul>
    </React.Fragment>
  );
};

export default Post;
