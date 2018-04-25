import { combineReducers } from 'redux';
import list from './list';
import detail from './detail';
import modal from './modal';
import group from './group';

const rootReducer = combineReducers({
    list,
    detail,
    modal,
    group
})

export default rootReducer;
