import React, { Component } from 'react';
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
    searchResults: [],
    loading: false,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1, searchResults: [] }, () => {
      this.fetchData();
    });
  };

  fetchData = () => {
    const { searchName, page } = this.state;
    this.setState({ loading: true });

    getSearchImages(searchName, page)
      .then(data => {
        this.setState(prevState => ({
          searchResults: [...prevState.searchResults, ...data.hits],
        }));
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleLoadMoreButton = () => {
    this.setState(
      prevState => {
        console.log(prevState);
        return {
          page: prevState.page + 1,
        };
      },
      () => {
        this.fetchData();
      }
    );
  };

  render() {
    const { searchResults, loading } = this.state;

    return (
      <div>
        <ToastContainer autoClose={1000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchResults={this.state.searchResults}
          page={this.state.page}
        />
        {loading && <p>Loading...</p>}
        {!loading && searchResults.length > 0 && (
          <LoadMoreBtn handleLoadMoreButton={this.handleLoadMoreButton} />
        )}
      </div>
    );
  }
}
