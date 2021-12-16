import { combineReducers } from 'redux';
import user from './user_reducer';
import miniform from './miniform_reducer';
import days_reducer from './days_reducer';

const rootReducer = combineReducers({
  user,
  miniform,
  days_reducer,
});

export default rootReducer;
