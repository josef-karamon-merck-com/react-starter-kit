import { ActionTypes } from 'constants';
import { SharePointAPI } from 'api';


export function getSharePointWiki(pageName) {
  return {
    type: ActionTypes.FETCH_SHAREPOINT_WIKI,
    apiPromise: SharePointAPI.getSharePointWiki(wiki)
  };
}

