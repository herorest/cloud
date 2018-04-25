import reqwest from 'reqwest';
import Model from '../../common/interface';

export const QUERY_DETAIL = 'QUERY_DETAIL';//查询详情
export const QUERY_DETAIL_SUCCESS = 'QUERY_DETAIL_SUCCESS';//查询详情成功
export const QUERY_DETAIL_FAILURE = 'QUERY_DETAIL_FAILURE';//查询详情失败
export const QUERY_DETAIL_FETCHING = 'QUERY_DETAIL_FETCHING';//开始加载
export const QUERY_DETAIL_FETCHOVER = 'QUERY_DETAIL_FETCHOVER';//加载结束
export const DEL_SMS_SUCCESS = 'DEL_SMS_SUCCESS';
export const DEL_SMS_FAILURE = 'DEL_SMS_FAILURE';
export const ADD_FAVO_SUCCESS = 'ADD_FAVO_SUCCESS';
export const REMOVE_FAVO_SUCCESS = 'REMOVE_FAVO_SUCCESS';
export const RESET_FIRSTFETCH = 'RESET_FIRSTFETCH';


export function queryDetail(id,num,type) {//获取短信详情列表
    return function(dispatch, getState) {
        let state = getState().detail;
        let group = getState().group;
        if( state.isFetching ){
            return false;
        }
        dispatch(queryDetailFetching());
        num = num ? num : state.length;
        reqwest({
            url: Model.apiUrl.getsmsdialogs,
            method: 'get',
            type: 'json',
            data: {
                status:'phone',
                contact:id || group.currentItem,
                type:0,
                start:state.start,
                length:num,
                randnum: Math.random()
            },
            success: function(result) {
                if(result.returnCode === 200) {
                    let value = {
                        ...result.returnValue,
                        next:type
                    };
                    dispatch(queryDetailSuccess(value));
                }
                dispatch(queryDetailFetchOver());
            },
            error: function(result) {
                dispatch(queryDetailFetchOver());
            }
        })
    }
}

export function delSms(id) {//删除单条短信
    if(!id){
        return false;
    }
    return function(dispatch, getState) {
        let state = getState().detail;
        let group = getState().group;
        reqwest({
            url: Model.apiUrl.deletesmstorecycle,
            method: 'get',
            type: 'json',
            data: {
                idsStr:id,
                mode:0,
                type:0,
                randnum: Math.random()
            },
            success: function(result) {
                if(result.returnCode === 200) {
                    dispatch(delSmsSuccess(id));
                    dispatch(queryDetail(group.list[group.currentItem].uniformNumber,1,'next'));
                }
            },
            error: function(result) {
                dispatch(delSmsFailure());
            }
        })
    }
}

export function addFavo(id,type) {//收藏夹
    if(!id){
        return false;
    }
    return function(dispatch, getState) {
        let state = getState().detail;
        reqwest({
            url: Model.apiUrl.updatesmsfavourite,
            method: 'post',
            type: 'json',
            data: {
                uuid:id,
                favourite:type,
                randnum: Math.random()
            },
            success: function(result) {
                if(result.returnCode === 200) {
                    if(type == 0){
                        dispatch(removeFavoSuccess(id));
                    }else{
                        dispatch(addFavoSuccess(id));
                    }

                }
            },
            error: function(result) {

            }
        })
    }
}

export function resetDetailFirstFetch() {//加入收藏夹
    return {
        type: RESET_FIRSTFETCH
    }
}

export function addFavoSuccess(id) {//加入收藏夹
    return {
        type: ADD_FAVO_SUCCESS,
        id
    }
}

export function removeFavoSuccess(id) {//移除收藏夹
    return {
        type: REMOVE_FAVO_SUCCESS,
        id
    }
}

export function delSmsSuccess(id) {//删除成功
    return {
        type: DEL_SMS_SUCCESS,
        id
    }
}

export function delSmsFailure() {//删除失败
    return {
        type: DEL_SMS_FAILURE
    }
}

export function queryDetailSuccess(data) {//查询详情成功
    return {
        type: QUERY_DETAIL_SUCCESS,
        data
    }
}

export function queryDetailFailure(payload) {//查询详情失败
    return {
        type: QUERY_DETAIL_FAILURE,
        payload
    }
}

export function queryDetailFetching() {//开始查询
    return {
        type: QUERY_DETAIL_FETCHING
    }
}

export function queryDetailFetchOver() {//查询结束
    return {
        type: QUERY_DETAIL_FETCHOVER
    }
}
