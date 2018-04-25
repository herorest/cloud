import { combineReducers } from 'redux';
import userstate from './user';
import desktop from './desktop';

const rootReducer = combineReducers({
    userstate, desktop
});

module.exports = rootReducer;
