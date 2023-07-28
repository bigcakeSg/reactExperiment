import { combineReducers } from 'redux';
import myStoreReducer from './myStore/reducer.js';

export default combineReducers({
  myStore: myStoreReducer
});
