import Immutable, {fromJS} from 'immutable';
import chai, {expect} from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import { Constants } from 'constants';
const APIStatus = Constants.APIStatus;
import { ActionTypes } from 'constants';
import reducer from 'reducers/sharepoint-files';

describe('reducers/sharepoint-files', ()=> {

  it('has proper initial state structure', ()=> {
    const nextState = reducer();
    expect(nextState).to.have.all.keys('error', 'loading', 'files');
  });
  it('fetches sharepoint files', ()=> {
    const initialState = Immutable.fromJS({ files: []});
    const action = {
      type: ActionTypes.FETCH_SHAREPOINT_FILES,
      status: APIStatus.SUCCESS,
      payload: [{id: 'file 1'}]
    };
    const nextState = reducer(initialState, action);
    console.log(nextState);
    const files = nextState.get('files');
    expect(files).to.have.size(1);
  });

});
