import React from 'react';
import styles from './PostForm.module.scss';

export default function PostForm({ onSubmit }) {
  const handleOnSubmit = (e) => {
    const { currentTarget } = e;
    const field = Array.from(currentTarget.elements);
    const data = field.reduce((acc, curr) => {
      if (curr.name) {
        acc[curr.name] = curr.value;
      }
      return acc;
    }, {});

    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(data, e);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <textarea name='content' className={styles.formContent}></textarea>
      <button className={styles.formButton}>Add New Post</button>
    </form>
  );
}
