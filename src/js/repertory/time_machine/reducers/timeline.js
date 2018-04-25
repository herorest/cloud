import Immutable from 'immutable';

import { QUERY_TIMELINE_SUCCESS, QUERY_TIMELINE_FALIURE } from '../actions/timeline';
import * as timelineUtil from '../store/timeline';

const initState = Immutable.fromJS([]);//初始化时光轴是一个空数组

module.exports = function timeline(state = initState, action) {
    switch(action.type) {
        case QUERY_TIMELINE_SUCCESS:
            let newState = timelineUtil.updateTimeline(state, action.payload);
            return newState;
        case QUERY_TIMELINE_FALIURE:
            return state;
        default:
            return state;
    }
}
