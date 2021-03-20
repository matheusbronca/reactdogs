import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css';
import PhotoDelete from './PhotoDelete';
import Image from '../../components/Helper/Image';
import { useLocation } from 'react-router-dom';

const PhotoContent = ({ data, single, handleOutsideClick }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  const commentsForm = React.useRef(null);
  const location = useLocation();
  const [inputFocus, setInputFocus] = React.useState(false);

  React.useEffect(() => {
    if (location.state) {
      setInputFocus(true);
    }
  }, [location, inputFocus]);

  return (
    <>
      <div
        className={`${styles.photo} ${
          single ? 'animeLeft ' + styles.single : ''
        }`}
      >
        {!single && (
          <button onClick={handleOutsideClick} className={styles.backButton}>
            Voltar
          </button>
        )}
        <div className={styles.img}>
          <Image src={photo.src} alt={photo.title} />
        </div>
        <div className={styles.details}>
          <div>
            <p className={styles.author}>
              {user.data && user.data.username === photo.author ? (
                <PhotoDelete id={photo.id} />
              ) : (
                <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              )}
              <span className={styles.visualizacoes}>{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className={styles.attributes}>
              <li>{photo.peso} kg</li>
              <li>
                {photo.idade} {photo.idade === 1 ? 'ano' : 'anos'}
              </li>
            </ul>
          </div>
        </div>
        <PhotoComments
          user={user}
          id={photo.id}
          comments={comments}
          single={single}
          useRef={commentsForm}
          inputFocus={inputFocus}
        />
      </div>
    </>
  );
};

export default PhotoContent;
