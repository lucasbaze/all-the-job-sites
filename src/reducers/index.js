import { combineReducers } from 'redux';
import siteReducer from './siteReducer';

export default combineReducers({
    site: siteReducer,
});
