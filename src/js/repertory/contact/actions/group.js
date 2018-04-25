import reqwest from 'reqwest';
import Model from '../../common/interface';

export const GET_GROUP_SUCCESS = 'GET_GROUP_SUCCESS';
export const GET_GROUP_FAILURE = 'GET_GROUP_FAILURE';
export const GET_GROUP_DATA = 'GET_GROUP_DATA';
export const GROUP_CHANGE = 'GROUP_CHANGE';

export function getGroupSuccess(payload) {
    return {
        type: GET_GROUP_SUCCESS,
        payload
    }
}

export function getGroupFailure(payload) {
    return {
        type: GET_GROUP_FAILURE,
        payload
    }
}

export function getGroupData(payload) {
    return function(dispatch, getState) {
        reqwest({
            url: Model.apiUrl.getContactGroup,
            method: 'get',
            type: 'json',
            data: {

            },
            success(result) {
                if(result.returnCode === 200) {
                    let len = result.returnValue.length;
                    let userId = result.returnValue[len - 1].userId;
                    let value = result.returnValue.slice(0, len - 2);
                    let index = 0;
                    value.forEach((v, i) => {
                        if(v.name === '未分组') {
                            index = i;
                        }
                    });
                    value.splice(index, 1);
                    dispatch(getGroupSuccess({ data: value, userId: userId }))
                } else {
                    dispatch(getGroupFailure({ errorTip: result.returnMessage }))
                }
            },
            error(success) {
                dispatch(getGroupFailure({ errorTip: '网络请求错误，请稍后重试' }))
            }
        })
    }
}

export function groupChange(payload) {
    return {
        type: GROUP_CHANGE,
        payload
    }
}
