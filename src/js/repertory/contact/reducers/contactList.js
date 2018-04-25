import {
    SHOW_LIST_LOADING,
    START_LOADING,
    GET_CONTACT_LIST_SUCCESS,
    GET_CONTACT_LIST_FAILURE,
    CHECK_ITEM,
    CHECKALL_CLICK,
    CLICK_ITEM,
    RESET_CHECK_STATUS,
    SEARCH_CONTATCLIST_SUCCESS,
    SEARCH_CONTACTLIST_FAILURE,
    CHANGE_SEARCH_FLAG,
    SEARCH_COUNT_SUCCESS,
    SEARCH_COUNT_FAILURE,
    SEARCH_CHANGE_RESET
} from '../actions/contactList';

const initState = {
    showLoading: false,
    loading: false,
    loadingSuccess: false,
    data: [{
        id: '',
        displayName: '',
        addr: '',
        photo_type: 0,
        sortkey: '',
        star: 0,
        userId: '',
        check: false
    }],
    checkAll: false,
    checkAllShow: false,
    checkList: [],
    idList: [],
    activeId: '',
    dataType: 'origin',
    start: 0,
    allData: false, // 是否将数据全部拉取完成
    isSearch: false,
    searchCount: '',
    searchContent: ''
}

module.exports = function contactList(state = initState, action) {
    let newState;
    switch (action.type) {
        case SHOW_LIST_LOADING:
            newState = Object.assign({}, state, {
                showLoading: true
            });
            return newState;
        case START_LOADING:
            newState = Object.assign({}, state, {
                loading: true
            });
            return newState;
        case GET_CONTACT_LIST_SUCCESS:
            let data = action.payload.data,
                idArray = data.map((v, i) => {
                    return v.id
                });
            newState = Object.assign({}, state, {
                showLoading: false,
                loading: false,
                loadingSuccess: true,
                data: action.payload.append ? state.data.concat(data) : data,
                idList: action.payload.append ? state.idList.concat(idArray) : idArray,
                dataType: action.payload.append ? 'next' : 'origin',
                start: action.payload.start,
                allData: data.length < action.payload.limit ? true : false,
                checkList: state.checkAll ? state.checkList.concat(idArray) : state.checkList
            });
            return newState;
        case GET_CONTACT_LIST_FAILURE:
            newState = Object.assign({}, state, {
                showLoading: false,
                loading: false,
                loadingSuccess: false
            });
            return newState;
        case CHECKALL_CLICK:
            let check = action.payload.check;
            newState = Object.assign({}, state, {
                checkList: check ? Array.from(state.idList) : [],
                checkAll: check,
                checkAllShow: check
            })
            return newState;
        case CHECK_ITEM:
            let {
                id,
                checkFlag
            } = action.payload;
            let checkList = state.checkList;
            if (checkFlag) {
                checkList.push(id);
            } else {
                checkList.splice(checkList.indexOf(id), 1);
            }
            let checkAll = state.checkAll;
            if (!checkAll && checkList.length === state.idList.length) {
                checkAll = true;
            }
            if (checkAll && checkList.length === 0) {
                checkAll = false;
            }
            newState = Object.assign({}, state, {
                checkList: checkList,
                checkAllShow: checkList.length === state.idList.length ? true : false,
                checkAll: checkAll
            })
            return newState;
        case CLICK_ITEM:
            newState = Object.assign({}, state, {
                activeId: action.payload.id
            });
            return newState;
        case RESET_CHECK_STATUS:
            newState = Object.assign({}, state, {
                checkAll: false,
                checkAllShow: false,
                checkList: []
            })
            return newState;
        case SEARCH_CONTATCLIST_SUCCESS:
            let searchData = action.payload.data, searchIdList = searchData.map((v, i) => { return v.id });
            newState = Object.assign({}, state, {
                showLoading: false,
                loading: false,
                loadingSuccess: true,
                data: action.payload.append ? state.data.concat(searchData) : searchData,
                idList: action.payload.append ? state.idList.concat(searchIdList) : searchIdList,
                dataType: action.payload.append ? 'next' : 'origin',
                start: action.payload.start,
                allData: searchData.length < action.payload.limit ? true : false,
                checkList: state.checkAll ? state.checkList.concat(searchIdList) : state.checkList
            })
            return newState;
        case SEARCH_CONTACTLIST_FAILURE:
            newState = Object.assign({}, state, {
                showLoading: false,
                loading: false,
                loadingSuccess: false
            })
            return newState;
        case SEARCH_COUNT_SUCCESS:
            newState = Object.assign({}, state, {
                searchContent: action.payload.content,
                searchCount: action.payload.count
            })
            return newState;
        case SEARCH_COUNT_FAILURE:
            newState = Object.assign({}, state, {

            })
            return newState;
        case CHANGE_SEARCH_FLAG:
            newState = Object.assign({}, state, {
                isSearch: action.payload.isSearch
            })
            return newState;
        case SEARCH_CHANGE_RESET:
            newState = Object.assign({}, state, {
                showLoading: false,
                loading: false,
                loadingSuccess: false,
                data: [{
                    id: '',
                    displayName: '',
                    addr: '',
                    photo_type: 0,
                    sortkey: '',
                    star: 0,
                    userId: '',
                    check: false
                }],
                checkAll: false,
                checkAllShow: false,
                checkList: [],
                idList: [],
                activeId: '',
                dataType: 'origin',
                start: 0,
                allData: false, // 是否将数据全部拉取完成
                isSearch: false,
                searchCount: '',
                searchContent: ''
            })
            return newState;
        default:
            return state;
    }
}
