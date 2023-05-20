import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=1&key=35172830-be7dc29c069ae2fbfd826fe75&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(console.log());
    }
  }

  render() {
    return (
      <li className="gallery-item">
        <p>{this.props.searchName}</p>
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
