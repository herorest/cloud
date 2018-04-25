import {
    CLEAR_ALL_VISIBLE,
    CLEAR_ALL_HIDDEN,
    CLEAR_ALL_LOAD_HIDDEN,
    CLEAR_ALL_LOAD_VISIBLE,
    REMOVE_CLEAR_ITEM,
    ADD_CLEAR_ITEM,
    CLEAR_ALL_RESULT_VISIBLE,
    CLEAR_ALL_RESULT_HIDDEN
} from './recycleAction.js';

const initState = {
    clearAll:false,         //清空回收站弹框
    clearChose:[],
    clearAllLoading:false,  //清空回收站loading
    clearAllTip:'',         //清空回收站后结果提示
    clearAllResult:false    //清空回收站后结果弹框
};

export default function recycle(state = initState, action) {
    switch (action.type) {
        case CLEAR_ALL_RESULT_VISIBLE:
            return Object.assign({},state,{
                clearAllResult:true,
                clearAllTip:action.text,
                clearAllLoading:false
            });
        case CLEAR_ALL_RESULT_HIDDEN:
            return Object.assign({},state,{
                clearAllResult:false,
                clearChose:[]
            });
        case CLEAR_ALL_VISIBLE:
            return Object.assign({},state,{
                clearAll:true
            });
        case CLEAR_ALL_HIDDEN:
            return Object.assign({},state,{
                clearAll:false,
                clearChose:[]
            });
        case CLEAR_ALL_LOAD_HIDDEN:
            return Object.assign({},state,{
                clearAllLoading:false
            });
        case CLEAR_ALL_LOAD_VISIBLE:
            return Object.assign({},state,{
                clearAll:false,
                clearAllLoading:true
            });
        case REMOVE_CLEAR_ITEM:
            let arr = [...state.clearChose];
            arr.splice(action.index,1);
            return Object.assign({},state,{
                clearChose:arr
            });
        case ADD_CLEAR_ITEM:
            let addarr = [
                ...state.clearChose,
                action.index
            ];
            return Object.assign({},state,{
                clearChose: addarr
            });
        default:
            return state;
    }
}
