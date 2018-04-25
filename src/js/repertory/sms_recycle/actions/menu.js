import reqwest from 'reqwest';
import Model from '../../common/interface';

export const MODIFY_MENU = 'MODIFY_MENU';
export const MENU_VISIBLE = 'MENU_VISIBLE';
export const MENU_HIDDEN = 'MENU_HIDDEN';
export const SUB_MENU_VISIBLE = 'SUB_MENU_VISIBLE';
export const SUB_MENU_HIDDEN = 'SUB_MENU_HIDDEN';

export function modifyMenu(menu) {
    return {
        type: MODIFY_MENU,
        menu
    }
}

export function menuVisible() {
    return {
        type: MENU_VISIBLE
    }
}

export function menuHidden() {
    return {
        type: MENU_HIDDEN
    }
}

export function subMenuVisible() {
    return {
        type: SUB_MENU_VISIBLE
    }
}

export function subMenuHidden() {
    return {
        type: SUB_MENU_HIDDEN
    }
}
