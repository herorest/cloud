import {
    QUERY_GROUP,
    QUERY_GROUP_SUCCESS,
    QUERY_GROUP_FAILURE,
    QUERY_GROUP_FETCHING,
    GROUP_FIRSTFETCH_CLOSE,
    QUERY_GROUP_FETCHOVER,
    CHANGE_CURRENT_ITEM,
    ADD_CHECK_ITEM,
    REMOVE_CHECK_ITEM,
    CHECK_ALL_ITEM,
    UNCHECK_ALL_ITEM,
    DEL_GROUP_SUCCESS,
    DEL_GROUP_FAILURE,
    CHANGE_DATA_TYPE,
    RESET_FIRSTFETCH
} from '../actions/group.js';

const initState = {
    list:[],
    choseAll:false,
    choseAllBtn:false,
    currentItem:null,
    multiItem:[],
    start:0,
    length:10,
    isFetching:false,
    firstFetch:null, //主要用来控制初次自动加载detail以及loading
    count:0,
    dataType:'origin'
}

export default function group(state = initState, action) {
    switch (action.type) {
        case QUERY_GROUP:
            return state;
        case QUERY_GROUP_SUCCESS:
            let data = action.data;
            let dataType = 'origin';
            if(data.next){
                let newList = [
                    ...state.list,
                    ...data.content
                ];
                if(state.choseAll){
                    let l = newList.length;
                    let a = [];
                    for(let i = 0;i < l;i++){
                        a.push(i);
                    }
                    return Object.assign({},state,{
                        multiItem:a,
                        list:newList,
                        start:data.start,
                        count:data.count
                    });
                }
                dataType = 'next';
                return Object.assign({},state,{
                    list:newList,
                    start:data.start,
                    count:data.count,
                    dataType:dataType
                });

            }else{
                return Object.assign({},state,{
                    list:data.content,
                    start:data.start,
                    count:data.count,
                    choseAll:false,
                    choseAllBtn:false,
                    currentItem:0,
                    firstFetch:true,
                    multiItem:[]
                });
            }
        case QUERY_GROUP_FAILURE:
            return state;
        case QUERY_GROUP_FETCHING:
            return Object.assign({},state,{
                isFetching:true
            });
        case QUERY_GROUP_FETCHOVER:
            return Object.assign({},state,{
                isFetching:false
            });
        case CHANGE_CURRENT_ITEM:
            return Object.assign({},state,{
                currentItem:action.index
            });
        case GROUP_FIRSTFETCH_CLOSE:
            return Object.assign({},state,{
                firstFetch:false
            });
        case RESET_FIRSTFETCH:
            return Object.assign({},state,{
                firstFetch:null,
                list:[],
                currentItem:null,
                multiItem:[]
            });
        case ADD_CHECK_ITEM:
            let addarr = [
                ...state.multiItem,
                action.index
            ];
            let choseAllBtn = false;
            if(addarr.length == state.list.length){
                choseAllBtn = true;
            }
            return Object.assign({},state,{
                multiItem: addarr,
                choseAllBtn: choseAllBtn
            });
        case REMOVE_CHECK_ITEM:
            let arr = [...state.multiItem];
            arr.splice(action.index,1);

            return Object.assign({},state,{
                multiItem:arr,
                choseAllBtn:false
            });
        case CHECK_ALL_ITEM:
            let l = state.list.length;
            let a = [];
            for(let i = 0;i < l;i++){
                a.push(i);
            }
            return Object.assign({},state,{
                multiItem:a,
                choseAll:true,
                choseAllBtn:true
            });

        case UNCHECK_ALL_ITEM:
            return Object.assign({},state,{
                multiItem:[],
                choseAll:false,
                choseAllBtn:false
            });
        case DEL_GROUP_SUCCESS:
            return Object.assign({},state,{
                multiItem:[],
                choseAll:false,
                choseAllBtn:false,
                list:action.list
            });
        case DEL_GROUP_FAILURE:
            return state;
        case CHANGE_DATA_TYPE:
            return Object.assign({},state,{
                dataType:action.value
            });
        default:
            return state;
    }
}
