import Data from '../data';
import reqwest from 'reqwest';

export const CHOSE_PAGE = 'CHOSE_PAGE';
export const CHOSE_ITEM = 'CHOSE_ITEM';
export const CLEAR_PAGE = 'CLEAR_PAGE';
export const MODIFY_ITEM = 'MODIFY_ITEM';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export function changePage(page) {
    return (dispatch, getState) => {
        dispatch(chosePage(page));
    }
}

function chosePage(page) {
    return {
        type: CHOSE_PAGE,
        page
    }
}

function clearPage(page) {
    return {
        type: CLEAR_PAGE,
        page
    }
}

export function choseItem(num) {
    return {
        type: CHOSE_ITEM,
        num
    }
}

export function modifyItem(data) {
    return {
        type: MODIFY_ITEM,
        data
    }
}



export function getPicture(usertype) {
    return (dispatch, getState) => {
        let state = getState();
        dispatch(requestUsertype());
        // reqwest({
        //     url: Model.apiUrl.checkuser,
        //     method: 'get',
        //     type: 'json',
        //     success: function(result) {
        //         notification.notice({
        //             content: <span> test </span>,
        //             onClose() {
        //
        //             },
        //         });
        //         dispatch(receiveUsertype(result.status ? result.status : 0));
        //     }
        // })
    }
}
