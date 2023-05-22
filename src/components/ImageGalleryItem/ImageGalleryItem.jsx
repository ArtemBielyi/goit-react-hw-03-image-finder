import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    search: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchName}&page=${this.props.page}&key=35172830-be7dc29c069ae2fbfd826fe75&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ search: data.hits });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    const { search, loading } = this.state;
    // const { searchName } = this.props;

    return (
      <>
        {loading && <p>Loading...</p>}
        {search &&
          search.map(item => (
            <li key={item.id} className="gallery-item">
              <img src={item.webformatURL} alt={item.tags} />
            </li>
          ))}
      </>
    );
  }
}

export default ImageGalleryItem;
