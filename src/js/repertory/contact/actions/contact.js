import reqwest from 'reqwest';
import Model from '../../common/interface';
import {getContactInfo} from '../common/util';

export const SEARCH_CONTACT_LOADING = 'SEARCH_CONTACT_LOADING';

export function searchContactLoading(payload) {
    return {
        type: SEARCH_CONTACT_LOADING,
        payload
    }
}

export const SEARCH_CONTACT_SUCCESS = 'SEARCH_CONTACT_SUCCESS';
export const SEARCH_CONTACT_FALIURE = 'SEARCH_CONTACT_FALIURE';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';

export function searchContactSuccess(payload) {
    return {
        type: SEARCH_CONTACT_SUCCESS,
        payload
    }
}

export function searchContactFailure(payload) {
    return {
        type: SEARCH_CONTACT_FALIURE,
        payload
    }
}

export function searchContact(payload) {
    return function(dispatch, getState) {
        reqwest({
            url: Model.apiUrl.searchContact,
            type: 'json',
            method: 'get',
            data: {
                contactId: payload.id
            },
            success(result) {
                if(result.returnCode === 200) {
                    let value = getContactInfo(result.returnValue);
                    dispatch(searchContactSuccess({ data: value }))
                } else {
                    dispatch(searchContactFailure({ errorTip: result.returnMessage }))
                }
            },
            error(result) {
                dispatch(searchContactFailure({ errorTip: '网络请求错误，请稍后重试' }))
            }
        })
    }
}

export const CHANGE_EDIT_MODEL = 'CHANGE_EDIT_MODEL';

export function changeEditModel(payload) {
    return {
        type: CHANGE_EDIT_MODEL,
        payload
    }
}

export const RESET_CONTACT_DATA = 'RESET_CONTACT_DATA';

export function resetContactData(payload) {
    return {
        type: RESET_CONTACT_DATA,
        payload
    }
}
