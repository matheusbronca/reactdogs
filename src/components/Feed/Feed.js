import React from 'react';
import FeedModal from './FeedModal.js';
import FeedPhotos from './FeedPhotos.js';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
