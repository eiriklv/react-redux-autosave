import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MyForm from '../components/MyForm';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

import {
  populateData,
  saveData,
  updateData
} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.refreshData = this.refreshData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    this.refreshData();
  }

  saveData() {
    const {
      dispatch,
      isSaving,
      unsavedChanges
    } = this.props;

    if (!isSaving && unsavedChanges) {
      dispatch(saveData());
    }
  }

  refreshData() {
    const { dispatch } = this.props;
    dispatch(populateData());
  }

  updateData(field, event) {
    const { dispatch } = this.props;

    dispatch(updateData({
      [field]: event.target.value
    }));
  }

  render () {
    const {
      error,
      isLoading,
      isSaving,
      unsavedChanges,
      data
    } = this.props;

    if (error) {
      return <ErrorMessage error={error} />
    }

    if (isLoading) {
      return <LoadingSpinner />
    }

    return (
      <MyForm
        title='My awesome form'
        data={data}
        isSaving={isSaving}
        unsavedChanges={unsavedChanges}
        refresh={this.refreshData}
        save={this.saveData}
        update={this.updateData}
      />
    );
  }
}

App.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
