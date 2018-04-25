import reqwest from 'reqwest';
import Model from '../../common/interface';

export const QUERY_LIST = 'QUERY_LIST';//查询详情
export const QUERY_LIST_SUCCESS = 'QUERY_LIST_SUCCESS';//查询详情成功
export const QUERY_LIST_FAILURE = 'QUERY_LIST_FAILURE';//查询详情失败
export const QUERY_LIST_FETCHING = 'QUERY_LIST_FETCHING';//开始加载
export const QUERY_LIST_FETCHOVER = 'QUERY_LIST_FETCHOVER';//加载结束
export const CHANGE_CURRENT_ITEM = 'CHANGE_CURRENT_ITEM';//点击
export const LIST_FIRSTFETCH_CLOSE = 'LIST_FIRSTFETCH_CLOSE'; //第一次查询
export const ADD_CHECK_ITEM = 'ADD_CHECK_ITEM'; //单选
export const REMOVE_CHECK_ITEM = 'REMOVE_CHECK_ITEM'; //去除单选
export const CHECK_ALL_ITEM = 'CHECK_ALL_ITEM'; //全选
export const UNCHECK_ALL_ITEM = 'UNCHECK_ALL_ITEM'; //取消全选
export const DEL_LIST_SUCCESS = 'DEL_LIST_SUCCESS'; //删除所选短信组
export const DEL_LIST_FAILURE = 'DEL_LIST_FAILURE'
export const CHANGE_DATA_TYPE = 'CHANGE_DATA_TYPE'  //修改datatype，让滚动条回滚
export const RESET_FIRSTFETCH = 'RESET_FIRSTFETCH';
export const SEARCH_CHANGE_RESET = 'SEARCH_CHANGE_RESET';
export const CHANGE_SEARCH_FLAG = 'CHANGE_SEARCH_FLAG';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const CANCEL_NEW_ITEM = 'CANCEL_NEW_ITEM';

export function queryList(content,length,type) {//获取便签列表
    return function(dispatch, getState) {
        let group = getState().group;
        let state = getState().list;
        if( state.isFetching ){
            return false;
        }
        dispatch(queryListFetching());
        length = length ? length : 20;
        let url = Model.apiUrl.getnotegroups , isSearch = false;
        if(content && content !== ''){
            url = Model.apiUrl.getnotebycontent;
            isSearch = true;
        }
        var p = new Promise((resolve,reject) => {
            reqwest({
                url: url,
                method: 'get',
                type: 'json',
                data: {
                    groupUuid:group.curGroupId || -1,
                    start:state.start,
                    length:length,
                    randnum: Math.random(),
                    content:content
                },
                success: function(result) {
                    resolve(result);
                },
                error: function(result) {
                    dispatch(queryListFetchOver());
                }
            })
        });

        var response = (result) => {
            if(result.returnCode === 200) {
                let value = {
                    ...result.returnValue,
                    next:type,
                    searchContent:content,
                    isSearch
                };
                dispatch(queryListSuccess(value));
            }
            dispatch(queryListFetchOver());
        }

        p.then((result) => {
            if(state.firstFetch == null && !window.browser.lowie10){
                setTimeout(() => {
                    response(result);
                },500);
            }else{
                response(result);
            }
        })


    }
}

export function delList() {
    return function(dispatch, getState) {
        let state = getState().list , data = {} , id = [] , leftList = [] , that = this;
        let group = getState().group;
        let length = state.multiItem.length;
        if(length == 0){
            data = {
                groupUuid:group.curGroupId,
                uuidList:state.list[state.currentItem].uuid,
                randnum: Math.random()
            };
        }else{
            if(state.choseAll){
                state.list.forEach(function(value,key){
                    if(state.multiItem.indexOf(key) < 0){
                        id.push(value.uuid);
                        leftList.push(value);
                    }
                });
                data = {
                    groupUuid:group.curGroupId,
                    uuidList:[],
                    unchooseUuidList:id.join(','),
                    randnum: Math.random()
                };
            }else{
                state.list.forEach(function(value,key){
                    if(state.multiItem.indexOf(key) >= 0){
                        id.push(value.uuid);
                    }else{
                        leftList.push(value);
                    }
                });
                data = {
                    groupUuid:group.curGroupId,
                    uuidList:id.join(','),
                    unchooseUuidList:[],
                    randnum: Math.random()
                };
            }
        }
        reqwest({
            url: Model.apiUrl.recyclenote,
            method: 'get',
            type: 'json',
            data: data,
            success: function(result) {
                if(result.returnCode === 200) {
                    dispatch(delListSuccess(leftList));
                    //补上删除数量的数据
                    if(!state.choseAll){
                        dispatch(queryList(length,'next'));
                    }
                }
            },
            error: function(result) {
                dispatch(delListFailure());
            }
        })
    }
}

export function resetFirstFetch() {
    return {
        type: RESET_FIRSTFETCH
    }
}

export function changeDataType(value) {//取消选择
    return {
        type: CHANGE_DATA_TYPE,
        value
    }
}

export function delListSuccess(list) {
    return {
        type: DEL_LIST_SUCCESS,
        list
    }
}

export function delListFailure() {
    return {
        type: DEL_LIST_FAILURE
    }
}

export function unCheckAllItem() {
    return {
        type: UNCHECK_ALL_ITEM
    }
}


export function checkAllItem(done){
    return {
        type: CHECK_ALL_ITEM,
        done
    }
}

export function addCheckItem(index){
    return {
        type: ADD_CHECK_ITEM,
        index
    }
}

export function removeLastItem(index){
    return function(dispatch, getState) {
        let state = getState().list;
        dispatch(removeCheckItem(index));
        dispatch(queryDetail(0));
    }
}

export function removeCheckItem(index){
    return {
        type: REMOVE_CHECK_ITEM,
        index
    }
}


export function changeCurrentItem(index) {//点击
    return {
        type: CHANGE_CURRENT_ITEM,
        index
    }
}

export function queryListFetching() {//开始查询
    return {
        type: QUERY_LIST_FETCHING
    }
}

export function queryListFetchOver() {//查询结束
    return {
        type: QUERY_LIST_FETCHOVER
    }
}

export function queryListSuccess(data,content) {//查询详情成功
    return {
        type: QUERY_LIST_SUCCESS,
        data,
        content
    }
}

export function queryListFaliure(payload) {//查询详情失败
    return {
        type: QUERY_LIST_FAILURE,
        payload
    }
}

export function firstFetchClose() {//每次第一次查询
    return {
        type: LIST_FIRSTFETCH_CLOSE
    }
}


export function searchChangeReset(payload) {
    return {
        type: SEARCH_CHANGE_RESET,
        payload
    }
}

export function changeSearchFlag(payload) {
    return {
        type: CHANGE_SEARCH_FLAG,
        payload
    }
}

export function addNewItem() {
    return {
        type: ADD_NEW_ITEM
    }
}

export function cancelNewItem() {
    return {
        type: CANCEL_NEW_ITEM
    }
}
