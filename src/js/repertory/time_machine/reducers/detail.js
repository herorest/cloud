import Immutable from 'immutable';
import { QUERY_DETAIL_SUCCESS, QUERY_DETAIL_FALIURE } from '../actions/detail';
import * as detailUtil from '../store/detail';

const initState = Immutable.fromJS({});

module.exports = function detail(state = initState, action) {
    switch (action.type) {
        case QUERY_DETAIL_SUCCESS:
            let newState = detailUtil.updateDetailDialog(state, action.payload);
            return newState;
        case QUERY_DETAIL_FALIURE:
            return state;
        default:
            return state;
    }
}
