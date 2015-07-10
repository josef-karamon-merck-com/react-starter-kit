import { createRedux } from 'redux';
import * as stores from './stores';

const reduxInstance = createRedux(stores);
const dispatcher = reduxInstance.getDispatcher();

export default reduxInstance;
export const { dispatch } = { dispatcher };
