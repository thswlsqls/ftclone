import { combineReducers } from 'redux';
import user  from './user_reducer';
import miniform from './miniform_reducer';

const rootReducer = combineReducers({

    user, miniform, 

});

export default rootReducer;


