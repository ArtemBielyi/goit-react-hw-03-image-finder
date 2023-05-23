import React from 'react';
// import getSearchImages from 'components/fetchApi';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li
    onClick={() => {
      onClick(largeImageURL);
    }}
  >
    <img src={webformatURL} alt={tags} />
  </li>
);

export default ImageGalleryItem;
