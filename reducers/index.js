/* import { combineReducers } from 'redux'; */
import _ from 'lodash';

import {
  POPULATE_DATA_REQUEST,
  POPULATE_DATA_SUCCESS,
  POPULATE_DATA_ERROR,
  SAVE_DATA_REQUEST,
  SAVE_DATA_SUCCESS,
  SAVE_DATA_ERROR,
  UPDATE_DATA
} from '../actions';

const defaultState = {
  isSaving: false,
  isLoading: false,
  error: null,
  data: {},
  unsavedChanges: false
}

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case POPULATE_DATA_REQUEST:
      return _.assign({}, state, {
        isLoading: true
      });
    case POPULATE_DATA_SUCCESS:
      return _.assign({}, state, {
        isLoading: false,
        data: action.data
      });
    case POPULATE_DATA_ERROR:
      return _.assign({}, state, {
        error: action.error,
      });
    case SAVE_DATA_REQUEST:
      return _.assign({}, state, {
        isSaving: true
      });
    case SAVE_DATA_SUCCESS:
      return _.assign({}, state, {
        isSaving: false,
        unsavedChanges: false
      });
    case SAVE_DATA_ERROR:
      return _.assign({}, state, {
        error: action.error,
      });
    case UPDATE_DATA:
      return _.assign({}, state, {
        unsavedChanges: true,
        data: _.assign({}, state.data, action.update)
      });

    default:
      return state;
  }
}

export default rootReducer;
