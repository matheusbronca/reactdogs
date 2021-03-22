import React from 'react';
import { UserContext } from '../../context/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import { Link } from 'react-router-dom';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import BottomCommentsBar from './BottomCommentsBar';

const PhotoComments = ({ id, comments: comnts, single, inputFocus }) => {
  const [comments, setComments] = React.useState(() => comnts);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);
  const isMobile = useDeviceDetect();

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, []);

  return (
    <div className={styles.commentsWrapper}>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {!single &&
          isMobile &&
          comments.map((comment, index, arr) =>
            index > arr.length - 4 ? (
              <li key={comment.comment_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
              </li>
            ) : null
          )}
        {!single &&
          !isMobile &&
          comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
        {isMobile && !single && comments.length > 3 && (
          <div className={styles.wrapperRedirect}>
            <Link to={`/foto/${id}`} className={styles.redirectLink}>
              Ver todos os comentários
            </Link>
          </div>
        )}
        {single &&
          comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </ul>
      {((!isMobile && login) || single) && (
        <PhotoCommentsForm
          login={login}
          id={id}
          setComments={setComments}
          single={single}
          inputFocus={inputFocus}
        />
      )}
      {!isMobile && !login && (
        <BottomCommentsBar
          displayText={'Entre para comentar nessa publicação'}
          pathname={'/login'}
          state={{
            redirect: {
              id: id,
              type: 'comment',
            },
          }}
        />
      )}
      {isMobile && !single && (
        <BottomCommentsBar
          displayText={
            login
              ? 'Comentar nessa publicação'
              : 'Entre para comentar nessa publicação'
          }
          pathname={login ? `/foto/${id}` : '/login'}
          state={{
            redirect: {
              id: id,
              type: 'comment',
            },
          }}
        />
      )}
    </div>
  );
};

export default PhotoComments;
