import React, { Component } from 'react';

export class LoadMoreBtn extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.handleLoad}>
        Load more
      </button>
    );
  }
}

export default LoadMoreBtn;
