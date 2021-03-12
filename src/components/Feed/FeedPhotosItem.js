import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.alt} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
