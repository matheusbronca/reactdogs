import React from 'react';
import { ReactComponent as Send } from '../../assets/enviar.svg';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../services/api';
import styles from './PhotoCommentsForm.module.css';
const PhotoCommentsForm = ({ login, id, setComments, single, inputFocus }) => {
  const { request, loading } = useFetch();
  const [comment, setComment] = React.useState('');
  const commentInput = React.useRef(null);
  const isMobile = useDeviceDetect();

  console.log(loading);

  React.useEffect(() => {
    if (inputFocus && login) {
      commentInput.current.focus();
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  if (login)
    return (
      <form
        className={`${styles.form} ${single ? styles.single : ''}`}
        onSubmit={handleSubmit}
      >
        <textarea
          className={
            !loading
              ? styles.textarea
              : `${styles.textarea} ${styles.textarea__disabled}`
          }
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button className={styles.button} disabled={loading}>
          <Send />
        </button>
      </form>
    );
  else return null;
};

export default PhotoCommentsForm;
