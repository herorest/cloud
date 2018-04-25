import reqwest from 'reqwest';
import Model from '../interface';
import Notify from '../Notification/index.jsx'

export const CLEAR_ALL_VISIBLE = 'CLEAR_ALL_VISIBLE';
export const CLEAR_ALL_HIDDEN = 'CLEAR_ALL_HIDDEN';
export const CLEAR_ALL_LOAD_HIDDEN = 'CLEAR_ALL_LOAD_HIDDEN';
export const CLEAR_ALL_LOAD_VISIBLE = 'CLEAR_ALL_LOAD_VISIBLE';

export const ADD_CLEAR_ITEM = 'ADD_CLEAR_ITEM';
export const REMOVE_CLEAR_ITEM = 'REMOVE_CLEAR_ITEM';

export const CLEAR_ALL_RESULT_VISIBLE = 'CLEAR_ALL_RESULT_VISIBLE';
export const CLEAR_ALL_RESULT_HIDDEN = 'CLEAR_ALL_RESULT_HIDDEN';

export function verify(password) {//清空回收站
    return function(dispatch, getState) {
        let state = getState().recycle;
        if( !state.clearAll ){
            return false;
        }

        var p = new Promise((resolve,reject) => {
            reqwest({
                url: Model.apiUrl.verify,
                method: 'post',
                type: 'json',
                data: {
                    password
                },
                success: function(result) {
                    resolve(result);
                },
                error: function(result) {
                }
            })
        });

        p.then((result) => {
            if(result.returnCode === 200) {
                dispatch(clearRecycle());
            }else if(result.returnCode === 310001){
                Notify.alert('密码错误，请重试');
            }
        })
    }
}

export function clearRecycle(input) {//清空回收站
    return function(dispatch, getState) {
        let state = getState().recycle;
        if( !state.clearAll ){
            return false;
        }
        dispatch(clearAllLoadVisible());
        let totalTime = 20000;
        let bar = document.getElementById('loadingBar');
        bar.style.width = '0%';
        let step = 100 / totalTime * 100;
        let currStep = step;
        let waitLength = 80;
        let waitTime = 1800;
        let endAnimateTime = 500;
        let time = setInterval(function(){
            if(currStep > waitLength) currStep = waitLength;
            bar.style.width = currStep + '%';
            if(currStep >= waitLength){
                clearInterval(time);
                time = null;
            }
            currStep += step;
        },100);

        let clearUrl = [Model.apiUrl.cleanContactRecycleBin,Model.apiUrl.cleanSMSRecycleBin,Model.apiUrl.cleanNoteRecycleBin,Model.apiUrl.cleanAlbum];

        let plist = state.clearChose.map((v,k) => {
            let url = clearUrl[v];
            return new Promise((resolve, reject) => {
                reqwest({
                    url:url,
                    method: 'post',
                    type: 'json',
                    data: {},
                    success: function(result) {
                        resolve(result);
                    }
                })
            });
        });

        let checked = true;
        setTimeout(function(){
            if(time){
                clearInterval(time);
                time = null;
            }
            step = 10;
            if(currStep < waitLength) currStep = waitLength;
            bar.className = "loading-bar trans05";
            let endTime = setInterval(function(){
                let newStep = currStep + step;
                if(newStep > 100) currStep = 90;
                bar.style.width = newStep + '%';
                if(newStep >= 100){
                    clearInterval(endTime);
                    endTime = null;
                    setTimeout(function(){
                        if(checked){
                            dispatch(clearAllResultVisible('回收站所选项目清空成功'));
                        }else{
                            dispatch(clearAllResultVisible('回收站所选项目清空失败'));
                        }
                    },endAnimateTime);
                }
                currStep += step;
            },endAnimateTime);
        },waitTime);

        Promise.all(plist).then(values => {
            values.forEach((v,k) => {
                if(v.returnCode != 200){
                    checked = false;
                    Notify.alert(v.returnMessage);
                }
            });

        }).catch(reason => {
            Notify.alert(reason);
        });


    }
}

export function clearAllResultVisible(text) {
    return {
        type: CLEAR_ALL_RESULT_VISIBLE,
        text
    }
}

export function clearAllResultHidden() {
    return {
        type: CLEAR_ALL_RESULT_HIDDEN
    }
}

export function clearAllVisible() {
    return {
        type: CLEAR_ALL_VISIBLE
    }
}

export function clearAllHidden() {
    return {
        type: CLEAR_ALL_HIDDEN
    }
}

export function clearAllLoadHidden() {
    return {
        type: CLEAR_ALL_LOAD_HIDDEN
    }
}

export function clearAllLoadVisible() {
    return {
        type: CLEAR_ALL_LOAD_VISIBLE
    }
}

export function addClearItem(index){
    return {
        type: ADD_CLEAR_ITEM,
        index
    }
}

export function removeClearItem(i){
    return {
        type: REMOVE_CLEAR_ITEM,
        index:i
    }
}
