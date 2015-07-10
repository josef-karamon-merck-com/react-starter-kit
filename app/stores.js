// import * as Actions from 'constants/actions';
// import createStore from 'util/store';


export function message(state = { message: 'hello' }, action) {
  switch (action.type) {
    case 'TEST':
    case 'TEST_ASYNC':
      return {
        ...state,
        message: action.message
      };
  }
  return state;
}
