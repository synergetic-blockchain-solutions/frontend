import { combineReducers } from 'redux';
import auth from './auth';
import group from './group';
import artifact from './artifact';

export default combineReducers({
  auth,
  group,
  artifact,
});
