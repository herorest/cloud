import { combineReducers } from 'redux';
import contactList from './contactList';
import contact from './contact';
import group from './group';

const rootReducer = combineReducers({
    contactList,
    group,
    contact
})

export default rootReducer;
