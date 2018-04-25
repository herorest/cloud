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
    RESET_FIRSTFETCH
} from '../actions/detail.js';

const initState = {
    list:[],
    start:0,
    length:10,
    isFetching:false,
    count:0,
    dataType:'origin', //区分数据是第一次加载还是渐进加载
    firstFetch:false //主要控制第一次加载的loading
};

export default function detail(state = initState, action) {
    switch (action.type) {
        case QUERY_DETAIL:
            return action.data;

        case QUERY_DETAIL_SUCCESS:
            let data = action.data;
            let content = data.content;
            let dataType = 'origin';
            if(data.next){
                content = [
                    ...state.list,
                    ...data.content
                ];
                dataType ='next';
            }
            return Object.assign({},state,{
                list:content,
                start:data.start,
                count:data.count,
                dataType:dataType,
                firstFetch:true
            });

        case QUERY_DETAIL_FAILURE:
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

        case REMOVE_FAVO_SUCCESS:
        case ADD_FAVO_SUCCESS:
            let afList = [...state.list];
            let afIndex;
            afList.forEach(function(value,key){
                if(value.uuId == action.id){
                    afIndex = key;
                    return false;
                }
            });
            let newObj = Object.assign({},afList[afIndex],{
                favourite: action.type == REMOVE_FAVO_SUCCESS ? 0:1
            });
            afList[afIndex] = newObj;
            return Object.assign({},state,{
                list:afList
            });
        case RESET_FIRSTFETCH:
            return Object.assign({},state,{
                firstFetch:false,
                list:[]
            });
        default:
            return state;
    }
}
