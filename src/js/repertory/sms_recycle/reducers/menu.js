import { MODIFY_MENU,MENU_VISIBLE,MENU_HIDDEN,SUB_MENU_VISIBLE,SUB_MENU_HIDDEN } from '../actions/menu.js';

const initState = {
    current:1,
    visible:false,
    subVisible:false
};

export default function menu(state = initState, action) {
    switch (action.type) {
        case MENU_VISIBLE:
            return Object.assign({},state,{
                visible:true
            });
        case MENU_HIDDEN:
            return Object.assign({},state,{
                visible:false
            });
        case SUB_MENU_VISIBLE:
            return Object.assign({},state,{
                subVisible:true
            });
        case SUB_MENU_HIDDEN:
            return Object.assign({},state,{
                subVisible:false
            });
        default:
            return state;
    }
}
