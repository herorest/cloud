import reqwest from 'reqwest';
import Model from '../../common/interface';

export const SHOW_TIP_DIALOG = 'SHOW_TIP_DIALOG';
export const HIDE_TIP_DIALOG = 'HIDE_TIP_DIALOG';

export function showTipDialog(payload) {
    return {
        type: SHOW_TIP_DIALOG,
        payload
    }
}

export function hideTipDialog(payload) {
    return {
        type: HIDE_TIP_DIALOG,
        payload
    }
}

export const SHOW_IMPORT_CONTACT = 'SHOW_IMPORT_CONTACT';
export const HIDE_IMPORT_CONTACT = 'HIDE_IMPORT_CONTACT';

export function showImportContact(payload) {
    return {
        type: SHOW_IMPORT_CONTACT,
        payload
    }
}

export function hideImportContact(payload) {
    return {
        type: HIDE_IMPORT_CONTACT,
        payload
    }
}


export const SHOW_EXPORT_CONTACT = 'SHOW_EXPORT_CONTACT';
export const HIDE_EXPORT_CONTACT = 'HIDE_EXPORT_CONTACT';

export function showExportContact(payload) {
    return {
        type: SHOW_EXPORT_CONTACT,
        payload
    }
}

export function hideExportContact(payload) {
    return {
        type: HIDE_EXPORT_CONTACT,
        payload
    }
}
