import React, { Component, PropTypes } from 'react';

export default class ErrorMessage extends Component {
  render () {
    const { error } = this.props;

    return (
      <span>Error: {error}</span>
    );
  }
}
