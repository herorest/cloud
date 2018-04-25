import Immutable from 'immutable';
import { SHOW_HOVER_BOX, HIDE_HOVER_BOX, SEARCH_CONTACT_SUCCESS, SEARCH_CONTACT_FALIURE } from '../actions/hoverBox';
import * as hoverUtil from '../store/hover';

const initState = {
    _type_: '',
    firstName: '',
    emailList: [],
    phoneList: [],
    left: 0,
    top: 0,
    show: false
};

module.exports = function(state = initState, action) {
    switch(action.type) {
        case SHOW_HOVER_BOX:
            return action.payload;
        case HIDE_HOVER_BOX:
            return action.payload;
        case SEARCH_CONTACT_SUCCESS:
            let newState = hoverUtil.updateHoverState(state, action.payload);
            return newState;
        case SEARCH_CONTACT_FALIURE:
            return {};
        default:
            return initState;
    }
}
