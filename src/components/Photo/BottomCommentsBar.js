import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SendIcon } from '../../assets/enviar.svg';
import styles from './BottomCommentsBar.module.css';

const BottomCommentsBar = ({ displayText, pathname, state }) => {
  return (
    <div className={styles.bottomBar}>
      <Link
        to={{
          pathname: pathname,
          state: state,
        }}
      >
        <p>{displayText}</p>
        <SendIcon />
      </Link>
    </div>
  );
};

export default BottomCommentsBar;
