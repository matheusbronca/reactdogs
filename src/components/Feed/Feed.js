import React from 'react';
import FeedModal from './FeedModal.js';
import FeedPhotos from './FeedPhotos.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactComponent as NoPhotoIcon } from '../../assets/no-photo.svg';
import styles from './Feed.module.css';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  const location = useLocation();
  const [hasPhoto, setHasPhoto] = React.useState(false);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.85 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
          setHasPhoto={setHasPhoto}
        />
      ))}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 2rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens a serem exibidas.
        </p>
      )}
      {!infinite && user !== 0 && !hasPhoto && (
        <div className={styles.card}>
          <NoPhotoIcon />
          <div className={styles.card__text}>
            <p>Woof!, parece que você ainda não tem nenhuma foto...</p>
            <Link
              style={{ textDecoration: 'underline' }}
              to={`${location.pathname}/postar`}
            >
              Adicionar uma foto
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
