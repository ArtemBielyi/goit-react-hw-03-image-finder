import React from 'react';
// import getSearchImages from 'components/fetchApi';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li
    className={css.ImageGalleryItem}
    onClick={() => {
      onClick(largeImageURL);
    }}
  >
    <img className={css.ImageGalleryItemimage} src={webformatURL} alt={tags} />
  </li>
);

export default ImageGalleryItem;
