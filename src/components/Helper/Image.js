import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [loaded, setLoaded] = React.useState(false);
  const imgPlaceholder = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E`;

  function handleLoad() {
    setLoaded(true);
  }

  return (
    <div className={styles.wrapper}>
      <img
        src={imgPlaceholder}
        className={loaded ? styles.box : styles.skeleton}
        alt="Placeholder"
      />
      <img
        style={{ display: loaded ? 'flex' : 'none' }}
        className={loaded ? styles.img : ''}
        alt={alt}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default Image;
