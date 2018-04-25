import { combineReducers } from 'redux';
import group from './group';
import detail from './detail';
import menu from './menu';
import modal from './modal';
import recycle from '../../common/recycle/recycleReducer';

const rootReducer = combineReducers({
    menu,
    group,
    detail,
    modal,
    recycle
})

export default rootReducer;
