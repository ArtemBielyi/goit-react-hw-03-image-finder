import React, { Component } from 'react';
import getSearchImages from 'components/fetchApi';
export class ImageGalleryItem extends Component {
  state = {
    search: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.setState({ loading: true });
      getSearchImages(this.props.searchName)
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
