import reqwest from 'reqwest';
import Model from '../../common/interface';

export const QUERY_DETAIL_SUCCESS = 'QUERY_DETAIL_SUCCESS';//查询详情成功
export const QUERY_DETAIL_FAILURE = 'QUERY_DETAIL_FAILURE';//查询详情失败
export const QUERY_DETAIL_FETCHING = 'QUERY_DETAIL_FETCHING';//开始加载
export const QUERY_DETAIL_FETCHOVER = 'QUERY_DETAIL_FETCHOVER';//加载结束
export const DEL_SMS_SUCCESS = 'DEL_SMS_SUCCESS';
export const DEL_SMS_FAILURE = 'DEL_SMS_FAILURE';
export const RESET_FIRSTFETCH = 'RESET_FIRSTFETCH';
export const ENTER_EDIT_MODEL = 'ENTER_EDIT_MODEL';
export const EXIT_EDIT_MODEL = 'EXIT_EDIT_MODEL';
export const CREATE_NEW_ITEM = 'CREATE_NEW_ITEM';
export const UPDATE_DETAIL = 'UPDATE_DETAIL';//更新详情
export const UPDATE_DETAIL_SUCCESS = 'UPDATE_DETAIL_SUCCESS';//更新详情成功
export const UPDATE_DETAIL_FAILURE = 'UPDATE_DETAIL_FAILURE';//更新详情失败
export const UPDATE_DETAIL_FETCHOVER = 'UPDATE_DETAIL_FETCHOVER'

export function queryDetail(id) {//获取详情
    return function(dispatch, getState) {
        let state = getState().detail;
        let list = getState().list;
        let uuid = id;
        if( state.isFetching ){
            return false;
        }
        dispatch(queryDetailFetching());

        if((id || id == 0) && !isNaN(id)){
            uuid = list.list[id].uuid
        }
        reqwest({
            url: Model.apiUrl.getnote,
            method: 'get',
            type: 'json',
            data: {
                uuid:uuid,
                randnum: Math.random()
            },
            success: function(result) {
                if(result.returnCode === 200) {
                    dispatch(queryDetailSuccess({
                        ...result.returnValue
                    }));
                }
                dispatch(queryDetailFetchOver());
            },
            error: function(result) {
                dispatch(queryDetailFetchOver());
            }
        })
    }
}

export function updateDetail(json) {//更新详情
    return function(dispatch, getState) {
        dispatch(queryDetailFetching());
        reqwest({
            url: Model.apiUrl.updatenote,
            method: 'get',
            type: 'json',
            data: json,
            success: function(result) {
                if(result.returnCode === 200) {
                    dispatch(updateDetailSuccess({
                        ...result.returnValue
                    }));
                }
                dispatch(updateDetailFetchOver());
            },
            error: function(result) {
                dispatch(updateDetailFetchOver());
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
        let list = getState().list;
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
                    dispatch(queryDetail(list.list[list.currentItem].uniformNumber,1,'next'));
                }
            },
            error: function(result) {
                dispatch(delSmsFailure());
            }
        })
    }
}

export function enterEditModel(){
    return {
        type: ENTER_EDIT_MODEL
    }
}

export function exitEditModel(){
    return {
        type: EXIT_EDIT_MODEL
    }
}


export function resetDetailFirstFetch() {
    return {
        type: RESET_FIRSTFETCH
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

export function updateDetailSuccess(data) {//更新详情成功
    return {
        type: UPDATE_DETAIL_SUCCESS,
        data
    }
}

export function updateDetailFailure(payload) {//更新详情失败
    return {
        type: UPDATE_DETAIL_FAILURE,
        payload
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

export function updateDetailFetchOver(){
    return {
        type: UPDATE_DETAIL_FETCHOVER
    }
}

export function createNewItem() {
    return {
        type: CREATE_NEW_ITEM
    }
}
