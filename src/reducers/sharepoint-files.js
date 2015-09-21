import { ActionTypes } from 'constants';
import Immutable from 'immutable';
import handleAPIAction from './utils/handleAPIAction';

const initialState = Immutable.fromJS({
  error: false,
  loading: false,
  files: []
});


function fetchSharePointFiles(state, action) {
  return handleAPIAction(state, action, (state, action) => {
    return state.merge({files: action.payload, loading: false});
  });
}

function deleteSharePointFile(state, action) {
  return handleAPIAction(state, action, (state, action) => {
    const newFiles = state.get('files').filter((f) => action.path !== f.get('serverUrl'));
    return state.merge({files: newFiles, loading: false});
  });
}

export default function sharepointFiles(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.FETCH_SHAREPOINT_FILES:
      return fetchSharePointFiles(state, action);
    case ActionTypes.DELETE_SHAREPOINT_FILE:
      return deleteSharePointFile(state, action);
    default:
      return state;
  }
}
