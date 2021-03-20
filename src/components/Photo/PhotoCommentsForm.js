import React from 'react';
import { ReactComponent as Send } from '../../assets/enviar.svg';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../services/api';
import styles from './PhotoCommentsForm.module.css';
const PhotoCommentsForm = ({ login, id, setComments, single, inputFocus }) => {
  const { request } = useFetch();
  const [comment, setComment] = React.useState('');
  const commentInput = React.useRef(null);
  const isMobile = useDeviceDetect();

  React.useEffect(() => {
    if (inputFocus && login) {
      commentInput.current.focus();

      if (!isMobile) {
        setTimeout(() => {
          commentInput.current.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
            inline: 'end',
          });
        }, 1000);
      }
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
      <form className={`${styles.form} ${single ? styles.single : ''}`}>
        <textarea
          className={styles.textarea}
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button className={styles.button} onClick={handleSubmit}>
          <Send />
        </button>
      </form>
    );
  else return null;
};

export default PhotoCommentsForm;
