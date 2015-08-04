import { ActionTypes } from 'constants';
import { O365API } from 'api';
import { createAction } from 'redux-actions';

export const getMyDocuments = createAction(ActionTypes.FETCH_MY_DOCUMENTS, O365API.getMyDocuments);
