import * as util from '../common/util';

const toUserModel = (array, type) => {
    if(!array || !Array.isArray(array) || array.length === 0) {
        return [];
    }
    let result =array.map((v, i) => {
        let displayName = util.getUserDisplay(v),
            showText = util.getDefaultShowText(displayName).toUpperCase(),
            colorType = util.getColorType(displayName);
        return {
            _type_: type,
            uid: v.contact.id || 0,
            display: displayName,
            image: v.contactFile ? util.getUserImg(v) : util.config.defaultUserImg,
            hasPhoto: v.contactFile ? true : false,
            nopicClass: 'nopic color' + colorType,//默认头像的颜色
            nopicText: showText,
            //以下信息和悬停框相关
            firstName: v.contact.firstName,//悬停框显示的姓名
            phoneList: v.telList.length ? v.telList.map(t => t.value) : [''],//手机列表
            emailList: v.emailList.length ? v.emailList.map(t => t.value) : [''],//邮箱列表
            index: i
        }
    });
    return result;
}
/**
* 更新详情框弹框的
* @param state {Object} 老数据
* @param state {Object} 新数据
*/
export function updateDetailDialog(state, data) {
    if(!data) {
        return state;
    }
    return {
        point: data.flypoint,
        total: data.allNum,
        displayName: data.contact ? data.contact.display : '',
        add: data.newNum,
        mod: data.modNum,
        del: data.delNum,
        addUser: toUserModel(data.contactNewList, 'add'),
        modUser: toUserModel(data.contactUpdList, 'mod'),
        delUser: toUserModel(data.contactDelList, 'del')
    }
}
