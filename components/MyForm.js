import React, { Component, PropTypes } from 'react';

export default class MyForm extends Component {
  componentDidUpdate() {
    const { save } = this.props;

    if (this.saveTimeout) clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(save, 1000);
  }

  render() {
    const {
      title,
      save,
      update,
      refresh,
      data,
      isSaving,
      unsavedChanges
    } = this.props;

    return (
      <div>
        <h1>{title}</h1>

        <div>
          <label htmlFor=''>Enter your first name: </label>
          <input
            id='firstname'
            name='firstname'
            type='text'
            value={this.props.data.firstname}
            onChange={update.bind(null, 'firstname')}
          />
        </div>
        <div>
          <label htmlFor=''>Enter your last name: </label>
          <input
            id='lastname'
            name='lastname'
            type='text'
            value={this.props.data.lastname}
            onChange={update.bind(null, 'lastname')}
          />
        </div>
        <div>
          <label htmlFor=''>Enter a message: </label>
          <input
            id='message'
            name='message'
            type='text'
            value={this.props.data.message}
            onChange={update.bind(null, 'message')}
          />
        </div>
      </div>
    );
  }
}

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  isSaving: PropTypes.bool,
  save: PropTypes.func,
  update: PropTypes.func,
  refresh: PropTypes.func,
  data: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    message: PropTypes.string
  })
};

MyForm.defaultProps = {
  isSaving: false,
  save: (() => { console.log('no save method provided') }),
  update: (() => { console.log('no update method provided') }),
  refresh: (() => { console.log('no refresh method provided') }),
  data: {
    firstname: '',
    lastname: '',
    message: ''
  }
};
