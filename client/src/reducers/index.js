import { combineReducers } from 'redux';

import authReducer from './auth';
import piggyReducer from './piggy';
import mainReducer from './main';

export default combineReducers({
    auth: authReducer,
    piggy: piggyReducer,
    main: mainReducer
});