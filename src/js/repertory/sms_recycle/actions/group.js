import reqwest from 'reqwest';
import Model from '../../common/interface';

export const QUERY_GROUP = 'QUERY_GROUP';//查询详情
export const QUERY_GROUP_SUCCESS = 'QUERY_GROUP_SUCCESS';//查询详情成功
export const QUERY_GROUP_FAILURE = 'QUERY_GROUP_FAILURE';//查询详情失败
export const QUERY_GROUP_FETCHING = 'QUERY_GROUP_FETCHING';//开始加载
export const QUERY_GROUP_FETCHOVER = 'QUERY_GROUP_FETCHOVER';//加载结束
export const CHANGE_CURRENT_ITEM = 'CHANGE_CURRENT_ITEM';//点击
export const GROUP_FIRSTFETCH_CLOSE = 'GROUP_FIRSTFETCH_CLOSE'; //第一次查询
export const ADD_CHECK_ITEM = 'ADD_CHECK_ITEM'; //单选
export const REMOVE_CHECK_ITEM = 'REMOVE_CHECK_ITEM'; //去除单选
export const CHECK_ALL_ITEM = 'CHECK_ALL_ITEM'; //全选
export const UNCHECK_ALL_ITEM = 'UNCHECK_ALL_ITEM'; //取消全选
export const DEL_GROUP_SUCCESS = 'DEL_GROUP_SUCCESS'; //删除所选短信组
export const DEL_GROUP_FAILURE = 'DEL_GROUP_FAILURE'
export const CHANGE_DATA_TYPE = 'CHANGE_DATA_TYPE'  //修改datatype，让滚动条回滚
export const RESET_FIRSTFETCH = 'RESET_FIRSTFETCH'

export function queryGroup(length,type) {//获取短信列表
    return function(dispatch, getState) {
        let column = getState().column;
        let state = getState().group;
        if( state.isFetching ){
            return false;
        }
        dispatch(queryGroupFetching());
        length = length ? length : state.length;

        var p = new Promise((resolve,reject) => {
            reqwest({
                url: Model.apiUrl.getsmsgroups,
                method: 'get',
                type: 'json',
                data: {
                    status:'phone',
                    type:column,
                    start:state.start,
                    length:length,
                    randnum: Math.random()
                },
                success: function(result) {
                    resolve(result);
                },
                error: function(result) {
                    dispatch(queryGroupFetchOver());
                }
            })
        });

        var response = (result) => {
            if(result.returnCode === 200) {
                let value = {
                    ...result.returnValue,
                    next:type
                };
                dispatch(queryGroupSuccess(value));
            }
            dispatch(queryGroupFetchOver());
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

export function delGroup() {
    return function(dispatch, getState) {
        let state = getState().group , column = getState().column, data = {} , id = [] , leftList = [] , that = this;
        let length = state.multiItem.length;
        if(length == 0){
            return false;
        }

        if(state.choseAll){
            state.list.forEach(function(value,key){
                if(state.multiItem.indexOf(key) < 0){
                    id.push(value.uniformNumber);
                    leftList.push(value);
                }
            });
            data = {
                type:column,
                idsStr:'all',
                mode:1,
                unChooseIds:id.join(','),
                randnum: Math.random()
            };
        }else{
            state.list.forEach(function(value,key){
                if(state.multiItem.indexOf(key) >= 0){
                    id.push(value.uniformNumber);
                }else{
                    leftList.push(value);
                }
            });
            data = {
                type:column,
                idsStr:id.join(','),
                mode:1,
                randnum: Math.random()
            };
        }

        reqwest({
            url: Model.apiUrl.deletesmstorecycle,
            method: 'get',
            type: 'json',
            data: data,
            success: function(result) {
                if(result.returnCode === 200) {
                    dispatch(delGroupSuccess(leftList));
                    //补上删除数量的数据
                    if(!state.choseAll){
                        dispatch(queryGroup(length,'next'));
                    }
                }
            },
            error: function(result) {
                dispatch(delGroupFailure());
            }
        })
    }
}

export function resetFirstFetch() {//取消选择
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

export function delGroupSuccess(list) {//取消选择
    return {
        type: DEL_GROUP_SUCCESS,
        list
    }
}

export function delGroupFailure() {//取消选择
    return {
        type: DEL_GROUP_FAILURE
    }
}

export function unCheckAllItem() {//取消选择
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
        let state = getState().group;
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

export function queryGroupFetching() {//开始查询
    return {
        type: QUERY_GROUP_FETCHING
    }
}

export function queryGroupFetchOver() {//查询结束
    return {
        type: QUERY_GROUP_FETCHOVER
    }
}

export function queryGroupSuccess(data) {//查询详情成功
    return {
        type: QUERY_GROUP_SUCCESS,
        data
    }
}

export function queryGroupFaliure(payload) {//查询详情失败
    return {
        type: QUERY_GROUP_FAILURE,
        payload
    }
}

export function firstFetchClose() {//每次第一次查询
    return {
        type: GROUP_FIRSTFETCH_CLOSE
    }
}
