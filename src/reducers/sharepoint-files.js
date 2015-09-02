import { ActionTypes } from 'constants';

const initialState = {
  error: false,
  loading: false,
  files: []
};

const actionsMap = {
  [ActionTypes.FETCH_SHAREPOINT_FILES_REQUEST]: (state) => {
    return {...state, loading: true};
  },
  [ActionTypes.FETCH_SHAREPOINT_FILES_SUCCESS]: (state, action) => {
    return {...state, files: action.payload, loading: false};
  },
  [ActionTypes.FETCH_SHAREPOINT_FILES_FAILURE]: (state) => {
    return {...state, error: true, loading: false};
  }
};

export default function sharepointFiles(state = initialState, action = null) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) {
    return state;
  }
  return Object.assign({}, state, reduceFn(state, action));
}
