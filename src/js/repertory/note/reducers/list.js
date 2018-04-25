import {
    QUERY_LIST,
    QUERY_LIST_SUCCESS,
    QUERY_LIST_FAILURE,
    QUERY_LIST_FETCHING,
    LIST_FIRSTFETCH_CLOSE,
    QUERY_LIST_FETCHOVER,
    CHANGE_CURRENT_ITEM,
    ADD_CHECK_ITEM,
    REMOVE_CHECK_ITEM,
    CHECK_ALL_ITEM,
    UNCHECK_ALL_ITEM,
    DEL_LIST_SUCCESS,
    DEL_LIST_FAILURE,
    CHANGE_DATA_TYPE,
    RESET_FIRSTFETCH,
    ADD_NEW_ITEM,
    CANCEL_NEW_ITEM
} from '../actions/list.js';
import Notify from '../../common/notification/index.jsx';

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
    dataType:'origin',
    isSearch: false,
    searchContent: '',
    isAddNewItem:false
}

export default function list(state = initState, action) {
    switch (action.type) {
        case ADD_NEW_ITEM:
            let time = new Date().getTime();
            let addnewlist = [
                {
                    body:"",
                    createTime:time,
                    desktop:0,
                    encrypt:0,
                    fileList:"",
                    files:{},
                    firstImg:"",
                    firstImgSrc:null,
                    firstRecord:"",
                    firstRecordSrc:null,
                    fontSize:0,
                    groupStatus:null,
                    lastUpdate:time,
                    modifyTime:time,
                    nuuid:null,
                    paper:0,
                    status:"U",
                    title:"",
                    topdate:0,
                    types:[0],
                    userId:0,
                    uuid:""
                },
                ...state.list
            ]
            return Object.assign({},state,{
                list:addnewlist,
                multiItem:[],
                start:0,
                choseAll:false,
                choseAllBtn:false,
                currentItem:0,
                isAddNewItem:true
            });
        case CANCEL_NEW_ITEM:
            let removeNewList = [...state.list];
            removeNewList.shift();
            return Object.assign({},state,{
                list:removeNewList,
                isAddNewItem:false
            });
        case QUERY_LIST:
            return state;
        case QUERY_LIST_SUCCESS:
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
                    multiItem:[],
                    isSearch:data.isSearch,
                    searchContent:data.searchContent || ''
                });
            }
        case QUERY_LIST_FAILURE:
            return state;
        case QUERY_LIST_FETCHING:
            return Object.assign({},state,{
                isFetching:true
            });
        case QUERY_LIST_FETCHOVER:
            return Object.assign({},state,{
                isFetching:false
            });
        case CHANGE_CURRENT_ITEM:
            if(state.isAddNewItem){
                Notify.alert('您之前创建的便签尚未保存/取消');
                return state;
            }
            return Object.assign({},state,{
                currentItem:action.index
            });
        case LIST_FIRSTFETCH_CLOSE:
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
        case DEL_LIST_SUCCESS:
            return Object.assign({},state,{
                multiItem:[],
                choseAll:false,
                choseAllBtn:false,
                list:action.list
            });
        case DEL_LIST_FAILURE:
            return state;
        case CHANGE_DATA_TYPE:
            return Object.assign({},state,{
                dataType:action.value
            });
        default:
            return state;
    }
}
