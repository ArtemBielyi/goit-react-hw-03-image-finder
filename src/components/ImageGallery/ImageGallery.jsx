import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import css from './ImageGallery.module.css';

const ImageGallery = ({ searchResults, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {searchResults.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
