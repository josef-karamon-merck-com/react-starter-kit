import { ActionTypes } from 'constants';

const initialState = {
  error: false,
  loading: false,
  files: [],
  parentReference: null
};

const actionsMap = {
  [ActionTypes.FETCH_MY_FILES_REQUEST]: (state) => {
    return {...state, loading: true};
  },
  [ActionTypes.FETCH_MY_FILES_SUCCESS]: (state, action) => {
    return {...state, files: action.payload, loading: false};
  },
  [ActionTypes.FETCH_MY_FILES_FAILURE]: (state) => {
    return {...state, error: true, loading: false};
  }
};

export default function myFiles(state = initialState, action = null) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) {
    return state;
  }
  return Object.assign({}, state, reduceFn(state, action));
}
