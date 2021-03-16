import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../services/api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({
  page,
  user,
  setModalPhoto,
  setInfinite,
  setHasPhoto,
}) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page: page, total, user });
      // eslint-disable-next-line no-unused-vars
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
      if (response && response.ok && json.length > 0) setHasPhoto(true);
    }

    fetchPhotos();
  }, [request, user, page, setInfinite, setHasPhoto]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data.map((photo) => {
          return (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
