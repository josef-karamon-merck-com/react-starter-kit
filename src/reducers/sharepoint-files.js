import { ActionTypes, Constants } from 'constants';
const APIStatus = Constants.APIStatus;

const initialState = {
  error: false,
  loading: false,
  files: []
};

const actionsMap = {
  [ActionTypes.FETCH_SHAREPOINT_FILES]: (state, action) => {
    switch (action.status) {
      case APIStatus.REQUEST:
        return {...state, loading: true};
      case APIStatus.SUCCESS:
        return {...state, files: action.payload, loading: false};
      case APIStatus.FAILURE:
        return {...state, error: true, loading: false};
    }
  }
};

export default function sharepointFiles(state = initialState, action = null) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) {
    return state;
  }
  return Object.assign({}, state, reduceFn(state, action));
}
