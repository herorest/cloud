import {
    MULTI_DEL_VISIBLE,
    MULTI_DEL_HIDDEN,
    SINGLE_DEL_VISIBLE,
    SINGLE_DEL_HIDDEN
} from '../actions/modal.js';

const initState = {
    multiDel:false,
    singleDel:false,
    singleDelId:''
};

export default function modal(state = initState, action) {
    switch (action.type) {
        case MULTI_DEL_VISIBLE:
            return Object.assign({},state,{
                multiDel:true
            });
        case MULTI_DEL_HIDDEN:
            return Object.assign({},state,{
                multiDel:false
            });
        case SINGLE_DEL_VISIBLE:
            return Object.assign({},state,{
                singleDel:true,
                singleDelId:action.id
            });
        case SINGLE_DEL_HIDDEN:
            return Object.assign({},state,{
                singleDel:false,
                singleDelId:''
            });
        default:
            return state;
    }
}
