import { fetch, save } from '../services/api';

export const POPULATE_DATA = 'POPULATE_DATA';
export const POPULATE_DATA_SUCCESS = 'POPULATE_DATA_SUCCESS';
export const POPULATE_DATA_ERROR = 'POPULATE_DATA_ERROR';
export const SAVE_DATA = 'SAVE_DATA';
export const SAVE_DATA_SUCCESS = 'SAVE_DATA_SUCCESS';
export const SAVE_DATA_ERROR = 'SAVE_DATA_ERROR';
export const UPDATE_DATA = 'UPDATE_DATA';


function populateDataAttempt() {
  return {
    type: POPULATE_DATA
  };
}

function populateDataSuccess(data) {
  return {
    type: POPULATE_DATA_SUCCESS,
    data
  };
}

function populateDataError(error) {
  return {
    type: POPULATE_DATA_ERROR,
    error
  };
}

function saveDataAttempt() {
  return {
    type: SAVE_DATA
  };
}

function saveDataSuccess() {
  return {
    type: SAVE_DATA_SUCCESS
  };
}

function saveDataError(error) {
  return {
    type: SAVE_DATA_ERROR,
    error
  };
}

function updateDataAttempt(update) {
  return {
    type: UPDATE_DATA,
    update
  };
}

export function populateData() {
  return (dispatch) => {
    dispatch(populateDataAttempt());
    return fetch()
      .then((data) => dispatch(populateDataSuccess(data)))
      .catch((error) => dispatch(populateDataError(error)))
  }
}

export function saveData() {
  return (dispatch, getState) => {
    dispatch(saveDataAttempt());
    return !getState().unsavedChanges ? null : save(getState().data)
      .then(() => dispatch(saveDataSuccess()))
      .catch((error) => dispatch(saveDataError(error)))
  }
}

export function updateData(update) {
  return (dispatch) => {
    dispatch(updateDataAttempt(update));
  }
}
