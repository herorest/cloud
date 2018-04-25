import {
    MULTI_DEL_VISIBLE,
    MULTI_DEL_HIDDEN,
    SMS_DEL_VISIBLE,
    SMS_DEL_HIDDEN
} from '../actions/modal.js';

const initState = {
    multiDel:false,
    smsDel:false,
    smsDelId:''
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
        case SMS_DEL_VISIBLE:
            return Object.assign({},state,{
                smsDel:true,
                smsDelId:action.id
            });
        case SMS_DEL_HIDDEN:
            return Object.assign({},state,{
                smsDel:false,
                smsDelId:''
            });
        default:
            return state;
    }
}
