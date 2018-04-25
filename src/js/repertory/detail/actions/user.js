import Data from '../data';
import reqwest from 'reqwest';
import { createAction } from 'redux-actions';
import notify from 'rc-notification';
import React from 'react';

export const REQUEST_USERTYPE = 'REQUEST_USERTYPE';
export const RECEIVE_USERTYPE = 'RECEIVE_USERTYPE';
const notification = notify.newInstance({
    id: 'test'
});
const notification1 = notify.newInstance({
});

function requestUsertype() {
    notification1.notice({
        content: <span> simple1 </span>,
        onClose() {
            console.log('simple');
        },
    });
    return {
        type: REQUEST_USERTYPE
    }
}

function receiveUsertype(usertype) {
    notification1.notice({
        content: <span> simple </span>,
        onClose() {
            console.log('simple');
        },
    });
    return {
        type: RECEIVE_USERTYPE,
        usertype
    }
}

export function getUserType(usertype) {
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
