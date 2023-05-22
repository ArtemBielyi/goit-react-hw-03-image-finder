import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
export class App extends Component {
  state = {
    searchName: '',
  };

  handleFormSubmit = searchName => this.setState({ searchName });

  render() {
    return (
      <div>
        <ToastContainer autoClose={1000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
      </div>
    );
  }
}
