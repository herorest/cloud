import {
    GET_GROUP_SUCCESS,
    GET_GROUP_FAILURE,
    GROUP_CHANGE
} from '../actions/group';

const initState = {
    data: [{
        id: '',
        count: 0,
        name: ''
    }],
    groupAllId: [],
    groupSomeId: [],
    loadSuccess: false,
    userId: '',
    errorTip: '',
    curGroupId: '',
    curGroupName: '',
    count: ''
}

module.exports = function(state = initState, action) {
    let newState;
    switch (action.type) {
        case GET_GROUP_SUCCESS:
            newState = Object.assign({}, state, {
                loadSuccess: true,
                data: action.payload.data,
                userId: action.payload.userId,
                curGroupId: state.curGroupId === '' ? action.payload.data[0].id : state.curGroupId,
                curGroupName: state.curGroupId === '' ? action.payload.data[0].name : state.curGroupName,
                count: state.count === '' ? action.payload.data[0].count : state.count
            })
            return newState;
        case GET_GROUP_FAILURE:
            newState = Object.assign({}, state, {
                loadSuccess: false,
                errorTip: action.payload.errorTip
            })
        case GROUP_CHANGE:
            newState = Object.assign({}, state, {
                curGroupId: action.payload.id,
                curGroupName: action.payload.name,
                count: action.payload.count
            })
            return newState;
        default:
            return state;
    }
}
