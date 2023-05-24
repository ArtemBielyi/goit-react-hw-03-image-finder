import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Modal from './Modal/Modal.jsx';
import { LoadMoreBtn } from './Button/Button.jsx';
import { getSearchImages } from './fetchApi.js';
import { ProgressBar } from 'react-loader-spinner';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
    searchResults: [],
    loading: false,
    error: false,
    noResults: false,
    showModal: false,
    largeImageURL: null,
  };
  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };
  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1, searchResults: [] }, () => {
      this.fetchData();
    });
  };
  getlargeImageURL = largeImageURL => {
    this.setState({ largeImageURL });
  };
  fetchData = () => {
    const { searchName, page } = this.state;
    this.setState({ loading: true });

    getSearchImages(searchName, page)
      .then(data => {
        this.setState(prevState => ({
          searchResults: [...prevState.searchResults, ...data.hits],
        }));

        if (data.hits.length === 0) {
          toast('write a correct search query');

          this.setState({ noResults: true });
        } else {
          this.setState({ noResults: false });
        }
      })
      .catch(error => this.setState({ error, searchResults: [] }))
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
    const {
      searchResults,
      loading,
      page,
      searchName,
      noResults,
      showModal,
      largeImageURL,
      tags,
    } = this.state;
    const hasMoreImages =
      searchResults.length > 0 && page * 10 <= searchResults.length;
    console.log(largeImageURL);
    return (
      <div className={css.App}>
        <ToastContainer autoClose={1000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchResults={searchResults} page={page} />
        {noResults && <h1>No results with "{searchName}"</h1>}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}

        {loading && <ProgressBar />}
        {!loading && hasMoreImages && (
          <LoadMoreBtn handleLoadMoreButton={this.handleLoadMoreButton} />
        )}
      </div>
    );
  }
}
