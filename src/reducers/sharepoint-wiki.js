import { ActionTypes, Constants } from 'constants';
const APIStatus = Constants.APIStatus;

const initialState = {
  error: false,
  loading: false,
  wikiPage: ''
};

const actionsMap = {
  [ActionTypes.FETCH_WIKI_PAGE]: (state, action) => {
    switch (action.status) {
      case APIStatus.REQUEST:
        return {...state, loading: true};
      case APIStatus.SUCCESS:
        return {...state, wikiPage: action.payload, loading: false};
      case APIStatus.FAILURE:
        return {...state, error: true, loading: false};
    }
  }
};

export default function sharepointWiki(state = initialState, action = null) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) {
    return state;
  }
  return Object.assign({}, state, reduceFn(state, action));
}
