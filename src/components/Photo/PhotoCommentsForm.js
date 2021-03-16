import React from 'react';
import { ReactComponent as Send } from '../../assets/enviar.svg';
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import { COMMENT_POST } from '../../services/api';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button} onClick={handleSubmit}>
        <Send />
      </button>
      {/* {error && <Error error={error} />} */}
    </form>
  );
};

export default PhotoCommentsForm;
