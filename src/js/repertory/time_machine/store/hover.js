/**
* 更新悬停框
* @param state {Object} 老数据
* @param state {Object} 新数据
*/
export const updateHoverState = (state, data) => {
    if(!data) {
        return state;
    }
    if(data._type_ === 'mod') {
        return {
            _type_: data._type_,
            firstName: data.firstName,
            emailList: data.emailList,
            phoneList: data.phoneList,
            newName: data.newName,
            newEmailList: data.newEmailList.map(v => v.value),
            newPhoneList: data.newPhoneList.map(v => v.value),
            left: data.left,
            top: data.top,
            show: data.show,
            uid: data.uid,
            needModify: data.needModify
        }
    } else {
        return {
            _type_: data._type_,
            firstName: data.firstName,
            emailList: data.emailList,
            phoneList: data.phoneList,
            left: data.left,
            top: data.top,
            show: data.show,
            uid: data.uid
        }
    }
}
