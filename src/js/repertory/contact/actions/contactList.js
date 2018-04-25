import reqwest from 'reqwest';
import Model from '../../common/interface';

export const SHOW_LIST_LOADING = 'SHOW_LIST_LOADING';
export const START_LOADING = 'START_LOADING';

export function showListLoading(payload) {
    return {
        type: SHOW_LIST_LOADING,
        payload
    }
}

export function startLoading(payload) {
    return {
        type: START_LOADING,
        payload
    }
}

export const GET_CONTACT_LIST = 'GET_CONTACT_LIST';
export const GET_CONTACT_LIST_SUCCESS = 'GET_CONTACT_LIST_SUCCESS';
export const GET_CONTACT_LIST_FAILURE = 'GET_CONTACT_LIST_FAILURE';

export function getContactList(payload) {
    return function(dispatch, getState) {
        let start = payload.start || 0, limit = payload.limit || 20;
        reqwest({
            url: Model.apiUrl.searchsimplecontact,
            type: 'json',
            method: 'get',
            data: {
                group: payload.group || '全部联系人',
                start: start,
                limit: limit
            },
            success(result) {
                if(result.returnCode === 200) {
                    let value = result.returnValue;
                    dispatch(getContactListSuccess({ append: payload.append || false, data: result.returnValue, start: start + limit, limit: limit }))
                } else {
                    dispatch(getContactListFailure({ errorTip: result.returnMessage }))
                }
            },
            error(err) {
                dispatch(getContactListFailure({ errorTip: '网络请求错误，请稍后重试' }))
            }
        })
    }
}

export function getContactListSuccess(payload) {
    return {
        type: GET_CONTACT_LIST_SUCCESS,
        payload
    }
}

export function getContactListFailure(payload) {
    return {
        type: GET_CONTACT_LIST_FAILURE,
        payload
    }
}

export const CHECKALL_CLICK = 'CHECKALL_CLICK';
export const CHECK_ITEM = 'CHECK_ITEM';

export function checkAllClick(payload) {
    return {
        type: CHECKALL_CLICK,
        payload
    }
}

export function checkItem(payload) {
    return {
        type: CHECK_ITEM,
        payload
    }
}

export const CLICK_ITEM = 'CLICK_ITEM';

export function clickItem(payload) {
    return {
        type: CLICK_ITEM,
        payload
    }
}

export const RESET_CHECK_STATUS = 'RESET_CHECK_STATUS';

export function resetCheckStatus(payload) {
    return {
        type: RESET_CHECK_STATUS,
        payload
    }
}

export const CHANGE_SEARCH_FLAG = 'CHANGE_SEARCH_FLAG';

export function changeSearchFlag(payload) {
    return {
        type: CHANGE_SEARCH_FLAG,
        payload
    }
}

export const SEARCH_CONTATCLIST_SUCCESS = 'SEARCH_CONTATCLIST_SUCCESS';
export const SEARCH_CONTACTLIST_FAILURE = 'SEARCH_CONTACTLIST_FAILURE';
export const SEARCH_CONTACTLIST = 'SEARCH_CONTACTLIST';

export function searchContactListSuccess(payload) {
    return {
        type: SEARCH_CONTATCLIST_SUCCESS,
        payload
    }
}

export function searchContactListFailure(payload) {
    return {
        type: SEARCH_CONTACTLIST_FAILURE,
        payload
    }
}

export function searchContactList(payload) {
    return function(dispatch, getState) {
        let start = payload.start || 0, limit = payload.limit || 20;
        reqwest({
            url: Model.apiUrl.searchContactByContent,
            type: 'json',
            method: 'get',
            data: {
                isRecycle: 0,
                start: start,
                limit: limit,
                content: payload.content
            },
            success(result) {
                if(result.returnCode === 200) {
                    let value = result.returnValue;
                    dispatch(searchContactListSuccess({ data: value, append: payload.append || false, limit: limit, start: start + limit }))
                } else {
                    dispatch(searchContactListFailure({ errorTip: result.returnMessage }))
                }
            },
            error(result) {
                dispatch(searchContactListFailure({ errorTip: '网络请求错误，请稍后重试' }))
            }
        })
    }
}

export const SEARCH_COUNT_SUCCESS = 'SEARCH_COUNT_SUCCESS';
export const SEARCH_COUNT_FAILURE = 'SEARCH_COUNT_FAILURE';
export const SEARCH_COUNT = 'SEARCH_COUNT';

export function searchCountSuccess(payload) {
    return {
        type: SEARCH_COUNT_SUCCESS,
        payload
    }
}

export function searchCountFaliure(payload) {
    return {
        type: SEARCH_COUNT_FAILURE,
        payload
    }
}

export function searchCount(payload) {
    return function(dispatch, getState) {
        reqwest({
            url: Model.apiUrl.searchCount,
            type: 'json',
            method: 'get',
            data: {
                content: payload.content
            },
            success(result) {
                if(result.returnCode === 200) {
                    dispatch(searchCountSuccess({ content: payload.content, count: result.returnValue }))
                } else {
                    dispatch(searchCountFaliure({ errorTip: result.returnMessage }))
                }
            },
            error(result) {
                dispatch(searchCountFaliure({ errorTip: '网络错误，请稍后再试' }))
            }
        })
    }
}

export const SEARCH_CHANGE_RESET = 'SEARCH_CHANGE_RESET';

export function searchChangeReset(payload) {
    return {
        type: SEARCH_CHANGE_RESET,
        payload
    }
}
