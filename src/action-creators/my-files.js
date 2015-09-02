import { ActionTypes } from 'constants';
import { O365API } from 'api';




export default function getMyFiles(path)
{
  return {
    types: [ActionTypes.FETCH_MY_FILES_REQUEST, ActionTypes.FETCH_MY_FILES_SUCCESS, ActionTypes.FETCH_MY_FILES_FAILURE],
    apiPromise: O365API.getMyFiles(path)
  };
}
