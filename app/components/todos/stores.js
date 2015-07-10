// import * as Actions from 'constants/actions';
// import createStore from 'util/store';


export function todo(state = { message: 'hello' }, action) {
  switch (action.type) {
  case 'CREATE':
    return {

    }
  case 'TOGGLE':
    return {
      ...state,
      message: action.message
    };
  }
  return state;
}
