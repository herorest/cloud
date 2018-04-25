import { combineReducers } from 'redux';
import group from './group';
import detail from './detail';
import column from './column';
import modal from './modal';

const rootReducer = combineReducers({
    column,
    group,
    detail,
    modal
})

export default rootReducer;
