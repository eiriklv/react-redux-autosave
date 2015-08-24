import React, { Component, PropTypes } from 'react';

export default class ErrorMessage extends Component {
  render () {
    return (
      <span>Error: {this.props.error}</span>
    );
  }
}
