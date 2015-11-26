import { fetch, save } from '../services/api';

export const POPULATE_DATA_REQUEST = 'POPULATE_DATA_REQUEST';
export const POPULATE_DATA_SUCCESS = 'POPULATE_DATA_SUCCESS';
export const POPULATE_DATA_ERROR = 'POPULATE_DATA_ERROR';
export const SAVE_DATA_REQUEST = 'SAVE_DATA_REQUEST';
export const SAVE_DATA_SUCCESS = 'SAVE_DATA_SUCCESS';
export const SAVE_DATA_ERROR = 'SAVE_DATA_ERROR';
export const UPDATE_DATA = 'UPDATE_DATA';

function populateDataRequest() {
  return {
    type: POPULATE_DATA_REQUEST
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

function saveDataRequest() {
  return {
    type: SAVE_DATA_REQUEST
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

function updateDataRequest(update) {
  return {
    type: UPDATE_DATA,
    update
  };
}

export function populateData() {
  return (dispatch) => {
    dispatch(populateDataRequest());

    return fetch()
      .then((data) => dispatch(populateDataSuccess(data)))
      .catch((error) => dispatch(populateDataError(error)))
  }
}

export function saveData() {
  return (dispatch, getState) => {
    let state = getState();

    dispatch(saveDataRequest());
    
    return save(state.data)
      .then(() => dispatch(saveDataSuccess()))
      .catch((error) => dispatch(saveDataError(error)))
  }
}

export function updateData(update) {
  return (dispatch) => {
    dispatch(updateDataRequest(update));
  }
}
