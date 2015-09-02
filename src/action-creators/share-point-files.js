import { ActionTypes } from 'constants';
import { O365API } from 'api';




export default function getSharePointFiles(path)
{
  return {
    types: [ActionTypes.FETCH_SHAREPOINT_FILES_REQUEST, ActionTypes.FETCH_SHAREPOINT_FILES_SUCCESS, ActionTypes.FETCH_SHAREPOINT_FILES_FAILURE],
    apiPromise: O365API.getSharePointFiles(path)
  };
}

