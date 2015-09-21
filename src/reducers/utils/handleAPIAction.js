import { Constants } from 'constants';
const APIStatus = Constants.APIStatus;

function apiFailure(state) {
  return state.merge({error: true, loading: false});
}

function apiRequest(state) {
  return state.merge({ loading: true } );
}

export default function handleAPIAction(state, action, successFn, requestFn = apiRequest, failureFn = apiFailure) {
  switch (action.status) {
    case APIStatus.REQUEST:
      return requestFn(state, action);
    case APIStatus.SUCCESS:
      return successFn(state, action);
    case APIStatus.FAILURE:
      return failureFn(state.action);
    default:
      throw `We expected API action with status property with value  [REQUEST|SUCCESS|FAILURE]`;
  }
}
