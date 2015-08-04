import { ActionTypes } from 'constants';

const initialState = {
  error: false,
  files: []
};

const actionsMap = {
  [ActionTypes.FETCH_MY_DOCUMENTS]: (state, action) => {
    if (action.error) {
      return {};
    }
    const a = action.payload;
  }
};

export default function myDocuments(state = initialState, action = null) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) {
    return state;
  }
  return Object.assign({}, state, reduceFn(state, action));
}
