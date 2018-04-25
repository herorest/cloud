import {
    QUERY_DETAIL,
    QUERY_DETAIL_SUCCESS,
    QUERY_DETAIL_FAILURE,
    QUERY_DETAIL_FETCHING,
    QUERY_DETAIL_FETCHOVER,
    DEL_SMS_SUCCESS,
    DEL_SMS_FAILURE,
    ADD_FAVO_SUCCESS,
    REMOVE_FAVO_SUCCESS,
    RESET_FIRSTFETCH,
    ENTER_EDIT_MODEL,
    EXIT_EDIT_MODEL,
    CREATE_NEW_ITEM,
    UPDATE_DETAIL,
    UPDATE_DETAIL_SUCCESS,
    UPDATE_DETAIL_FAILURE,
    UPDATE_DETAIL_FETCHOVER
} from '../actions/detail.js';

const initState = {
    body:'',
    lastUpdate:'',
    desktop:0,
    encrypt:0,
    fileList:"",
    files:{},
    firstImg:"",
    firstImgSrc:null,
    firstRecord:"",
    firstRecordSrc:null,
    fontSize:18,
    paper:0,
    status:"U",
    topdate:0,
    types:null,
    uuid:"",
    groupStatus:"",
    isFetching:false,
    firstFetch:false, //主要控制第一次加载的loading
    editModel:false
};

export default function detail(state = initState, action) {
    switch (action.type) {
        case CREATE_NEW_ITEM:
            let time = new Date().getTime();
            return {
                body:'',
                lastUpdate:time,
                desktop:0,
                encrypt:0,
                fileList:"",
                files:{},
                firstImg:"",
                firstImgSrc:null,
                firstRecord:"",
                firstRecordSrc:null,
                fontSize:18,
                paper:0,
                status:"U",
                topdate:0,
                types:null,
                uuid:"",
                groupStatus:"",
                isFetching:false,
                firstFetch:true, //主要控制第一次加载的loading
                editModel:true
            };
        case ENTER_EDIT_MODEL:
            return Object.assign({},state,{
                editModel:true
            });
        case EXIT_EDIT_MODEL:
            return Object.assign({},state,{
                editModel:false
            });

        case QUERY_DETAIL_SUCCESS:
            let data = action.data;
            return Object.assign({},state,{
                ...data,
                firstFetch:true
            });

        case QUERY_DETAIL_FAILURE:
            return state;

        case UPDATE_DETAIL_SUCCESS:
            return Object.assign({},state,{
                ...action.data,
                editModel:false
            });

        case UPDATE_DETAIL_FAILURE:
            return state;

        case UPDATE_DETAIL_FETCHOVER:
            return state;

        case QUERY_DETAIL_FETCHING:
            return Object.assign({},state,{
                isFetching:true
            });

        case QUERY_DETAIL_FETCHOVER:
            return Object.assign({},state,{
                isFetching:false
            });

        case DEL_SMS_SUCCESS:
            let list = [...state.list];
            let index;
            list.forEach(function(value,key){
                if(value.uuId == action.id){
                    index = key;
                    return false;
                }
            });
            list.splice(index,1);
            return Object.assign({},state,{
                list:list
            });

        case DEL_SMS_FAILURE:
            return state

        case RESET_FIRSTFETCH:
            return Object.assign({},state,{
                firstFetch:false
            });
        default:
            return state;
    }
}
