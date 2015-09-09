import { ActionTypes } from 'constants';
import { SharePointAPI } from 'api';


export function getSharePointFiles(path)
{
  return {
    type: ActionTypes.FETCH_SHAREPOINT_FILES,
    apiPromise: SharePointAPI.getSharePointFiles(path)
  };
}


export function deleteSharePointFile(path)
{
  return {
    type: ActionTypes.DELETE_SHAREPOINT_FILE,
      apiPromise: SharePointAPI.deleteSharePointFile(path)
  };
}

