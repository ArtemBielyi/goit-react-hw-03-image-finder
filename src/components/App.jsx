import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import { LoadMoreBtn } from './Button/Button.jsx';
import { getSearchImages } from './fetchApi.js';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
  };

  handleFormSubmit = searchName => this.setState({ searchName });

  handleLoadMoreButton = () => {
    this.setState(prevState => {
      console.log(prevState);
      getSearchImages(this.searchName);
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={1000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchName={this.state.searchName}
          page={this.state.page}
        />
        <LoadMoreBtn
          handleLoadMoreButton={this.handleLoadMoreButton}
          onClick={this.getSearchImages}
        />
      </div>
    );
  }
}
