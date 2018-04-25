import {
    SEARCH_CONTACT_SUCCESS,
    SEARCH_CONTACT_FALIURE,
    CHANGE_EDIT_MODEL,
    RESET_CONTACT_DATA
} from '../actions/contact';

const initState = {
    data: {
        displayName: '',
        uuid: '',
        id: '',
        company: '',
        addrList: [],
        emailList: [],
        telList: [],
        eventList: [],
        webList: [],
        imList: [],
        groupList: [],
        star: 0,
        remark: ''
    },
    loadingSuccess: false,
    isEdit: false
}

module.exports = function(state = initState, action) {
    let newState;
    switch (action.type) {
        case SEARCH_CONTACT_FALIURE:
            newState = Object.assign({}, state, {
                loadingSuccess: false
            })
            return newState;
        case SEARCH_CONTACT_SUCCESS:
            newState = Object.assign({}, state, {
                loadingSuccess: true,
                data: action.payload.data
            });
            return newState;
        case CHANGE_EDIT_MODEL:
            newState = Object.assign({}, state, {
                isEdit: action.payload.isEdit
            })
            return newState;
        case RESET_CONTACT_DATA:
            return initState;
        default:
            return state;
    }
}
