import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';

export class ImageGallery extends Component {
  render() {
    const { searchName, page } = this.props;
    return (
      <ul className="gallery">
        <ImageGalleryItem searchName={searchName} page={page} />
      </ul>
    );
  }
}

export default ImageGallery;
