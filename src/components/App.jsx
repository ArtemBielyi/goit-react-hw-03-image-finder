import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import { LoadMoreBtn } from './Button/Button.jsx';
import { getSearchImages } from './fetchApi.js';
import { ProgressBar } from 'react-loader-spinner';

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
    const { searchResults, loading, page } = this.state;
    const hasMoreImages =
      searchResults.length > 0 && page * 10 <= searchResults.length;

    return (
      <div className={css.App}>
        <ToastContainer autoClose={1000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchResults={this.state.searchResults}
          page={this.state.page}
        />

        {loading && <ProgressBar />}
        {!loading && hasMoreImages && (
          <LoadMoreBtn handleLoadMoreButton={this.handleLoadMoreButton} />
        )}
      </div>
    );
  }
}
