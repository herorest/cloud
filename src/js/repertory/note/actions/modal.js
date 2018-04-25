import reqwest from 'reqwest';
import Model from '../../common/interface';

export const MULTI_DEL_VISIBLE = 'MULTI_DEL_VISIBLE';
export const MULTI_DEL_HIDDEN = 'MULTI_DEL_HIDDEN';
export const SINGLE_DEL_VISIBLE = 'SINGLE_DEL_VISIBLE';
export const SINGLE_DEL_HIDDEN = 'SINGLE_DEL_HIDDEN';

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

export function singleDelVisible(id) {
    return {
        type: SINGLE_DEL_VISIBLE,
        id
    }
}

export function singleDelHidden() {
    return {
        type: SINGLE_DEL_HIDDEN
    }
}
