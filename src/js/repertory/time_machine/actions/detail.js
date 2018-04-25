import reqwest from 'reqwest';
import Model from '../../common/interface';

export const QUERY_DETAIL = 'QUERY_DETAIL';//查询详情
export const QUERY_DETAIL_SUCCESS = 'QUERY_DETAIL_SUCCESS';//查询详情成功
export const QUERY_DETAIL_FALIURE = 'QUERY_DETAIL_FALIURE';//查询详情失败

export function queryDetail() {//根据时间点查询详情
    return function(dispatch, getState) {//API请求
        reqwest({
            url: Model.apiUrl.queryTdDetail,
            method: 'get',
            type: 'json',
            success: function(result) {
                if(result.returnCode === 200) {
                    let value = result.returnValue;
                    dispatch(queryDetailSuccess(value));
                }
            },
            error: function(result) {
                dispatch(queryDetailFaliure(result));
            }
        })
    }
}

export function queryDetailSuccess(payload) {//查询详情成功
    return {
        type: QUERY_DETAIL_SUCCESS,
        payload
    }
}

export function queryDetailFaliure(payload) {//查询详情失败
    return {
        type: QUERY_DETAIL_SUCCESS,
        payload
    }
}
