import { MSOAuthAPI } from 'api';
import { sessionSettings } from 'utils';

function hasApiError(response) {
  switch (response.status) {
    case 401:
      sessionSettings.o365Token = null;
      MSOAuthAPI.requestToken();
      return true;
    default:
      return false;
  }
}

export default function o365APIMiddleware() {
  return (next) => (action) => {
    const { apiPromise, types, ...rest } = action;
    if (!apiPromise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });
    return apiPromise.then(
      (result) => {
        if (hasApiError(result)) {
          return;
        }
        next({ ...rest, payload: result, type: SUCCESS });
      },
      (error) => next({ ...rest, error, type: FAILURE })
    );
  };
}/**
 * Created by karamon on 02/09/15.
 */
