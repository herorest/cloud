import reqwest from 'reqwest';
import Model from '../../common/interface';

export const QUERY_TIMELINE = 'QUERY_TIMELINE';
export const QUERY_TIMELINE_SUCCESS = 'QUERY_TIMELINE_SUCCESS';
export const QUERY_TIMELINE_FALIURE = 'QUERY_TIMELINE_FALIURE';

export function queryTimelineSuccess(payload) {
    return {
        type: QUERY_TIMELINE_SUCCESS,
        payload
    }
}

export function queryTimelineFaliure(payload) {
    return {
        type: QUERY_TIMELINE_FALIURE,
        payload
    }
}

export function queryTimeline() {
    return function(dispatch, getState) {
        reqwest({
            url: Model.apiUrl.queryTimeline,
            method: 'get',
            type: 'json',
            success: function(result) {
                if(result.returnCode === 200) {
                    let value = result.returnValue.value;//从接口获取最原始的数组
                    dispatch(queryTimelineSuccess(value));
                }
            },
            error: function(result) {
                dispatch(queryTimelineFaliure(result))
            }
        })
    }
}
