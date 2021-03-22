import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../services/api';
import Error from '../../components/Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  React.useEffect(() => {
      window.scrollTo(0, 1);
      document.addEventListener("touchmove", function(e) { e.preventDefault() });
  }, [data]);

  function handleOutsideClick(e) {
    const { currentTarget, target } = e;
    if (currentTarget === target) setModalPhoto(null);
  }

  return (
    <>
      <div className={`${styles.modal}`} onClick={handleOutsideClick}>
        {error && <Error error={error} />}
        {loading && <Loading />}
        {data && (
          <PhotoContent data={data} handleOutsideClick={handleOutsideClick} />
        )}
      </div>
    </>
  );
};

export default FeedModal;
