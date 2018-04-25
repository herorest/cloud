import reqwest from 'reqwest';
import Model from '../../common/interface';

export const MULTI_DEL_VISIBLE = 'MULTI_DEL_VISIBLE';
export const MULTI_DEL_HIDDEN = 'MULTI_DEL_HIDDEN';
export const SMS_DEL_VISIBLE = 'SMS_DEL_VISIBLE';
export const SMS_DEL_HIDDEN = 'SMS_DEL_HIDDEN';


export function multiDelVisible() {
    return {
        type: MULTI_DEL_VISIBLE
    }
}

export function multiDelHidden() {
    return {
        type: MULTI_DEL_HIDDEN
    }
}

export function smsDelVisible(id) {
    return {
        type: SMS_DEL_VISIBLE,
        id
    }
}

export function smsDelHidden() {
    return {
        type: SMS_DEL_HIDDEN
    }
}
