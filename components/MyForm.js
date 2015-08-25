import React, { Component, PropTypes } from 'react';
import validator from 'validator';

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
            style={{
              backgroundColor: validator.contains(this.props.data.firstname, 'Eirik') ?
                'green' :
                'red'
            }}
            id='firstname'
            name='firstname'
            type='text'
            value={this.props.data.firstname}
            onChange={update.bind(null, 'firstname')}
          />
          {!validator.contains(this.props.data.firstname, 'Eirik') && (
            <span>ugyldig!</span>
          )}
        </div>
        <div>
          <label htmlFor=''>Enter your last name: </label>
          <input
            style={{
              backgroundColor: validator.contains(this.props.data.lastname, 'Vullum') ?
                'green' :
                'red'
            }}
            id='lastname'
            name='lastname'
            type='text'
            value={this.props.data.lastname}
            onChange={update.bind(null, 'lastname')}
          />
          {!validator.contains(this.props.data.lastname, 'Vullum') && (
            <span>ugyldig!</span>
          )}
        </div>
        <div>
          <label htmlFor=''>Enter a message: </label>
          <input
            style={{
              backgroundColor: validator.contains(this.props.data.message, 'hei') ?
                'green' :
                'red'
            }}
            id='message'
            name='message'
            type='text'
            value={this.props.data.message}
            onChange={update.bind(null, 'message')}
          />
          {!validator.contains(this.props.data.message, 'hei') && (
            <span>ugyldig!</span>
          )}
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
