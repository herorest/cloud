import reqwest from 'reqwest';
import Model from '../../common/interface';

export const SHOW_HOVER_BOX = 'SHOW_HOVER_BOX';
export const HIDE_HOVER_BOX = 'HIDE_HOVER_BOX';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const SEARCH_CONTACT_SUCCESS = 'SEARCH_CONTACT_SUCCESS';
export const SEARCH_CONTACT_FALIURE = 'SEARCH_CONTACT_FALIURE';

export function showHoverBox(payload) {
    return {
        type: SHOW_HOVER_BOX,
        payload
    }
}

export function hideHoverBox(payload) {
    return {
        type: HIDE_HOVER_BOX,
        payload
    }
}

export function searchContactSuccess(payload) {
    return {
        type: SEARCH_CONTACT_SUCCESS,
        payload
    }
}

export function searchContactFaliure(payload) {
    return {
        type: SEARCH_CONTACT_FALIURE,
        payload
    }
}

export function searchContact(id, payload) {//获取到最新的数据
    return function(dispatch, getState) {
        reqwest({
            url: Model.apiUrl.timeSearchContact,
            method: 'get',
            type: 'json',
            success: function(result) {
                if(result.returnCode === 200) {
                    let value = result.returnValue;
                    let newValue = {
                        newName: value.contact.firstName,
                        newEmailList: value.emailList,
                        newPhoneList: value.telList,
                        uid: value.contact.id
                    }
                    let data = Object.assign({}, payload, newValue);
                    dispatch(searchContactSuccess(data));
                }
            },
            error: function(result) {
                dispatch(searchContactFaliure(result));
            }
        })
    }
}
