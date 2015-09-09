import { MSOAuthAPI } from 'api';
import { sessionSettings } from 'utils';
import { Constants } from 'constants';
const APIStatus = Constants.APIStatus;

function requestToken() {
  sessionSettings.sharePointToken = null;
  MSOAuthAPI.requestToken();
}

function hasApiError(response) {
  switch (response.status) {
    case 401:
      requestToken();
      return true;
    default:
      return false;
  }
}

export default function apiMiddleware() {
  return (next) => (action) => {
    const { apiPromise, ...rest } = action;

    if (!apiPromise) {
      return next(action);
    }

    next({ ...rest, status: APIStatus.REQUEST});
    return apiPromise.then(
      (result) => {
        if (hasApiError(result)) {
          return;
        }
        next({ ...rest, payload: result, status: APIStatus.SUCCESS });
      },
      (error) => {
        if (error.name === 'TypeError') {
          requestToken();
          return;
        }
        next({ ...rest, error, status: APIStatus.FAILURE });
      }
    );
  };
}/**
 * Created by karamon on 02/09/15.
 */
