import * as util from '../common/util';
/**
* 将原始数据转换为state联系人数组
* @param array {Array} 转换的数组
* @param type {string} 数组的类型
*/
const toUserModel = (array, type, index) => {
    if(!array || !Array.isArray(array) || array.length === 0) {
        return [];
    }
    let result = array.map((v, i) => {
        let displayName = util.getUserDisplay(v), showText = util.getDefaultShowText(displayName).toUpperCase(), colorType = util.getColorType(displayName);
        return {
            _type_: type,
            uid: v.contact.id || 0,
            display: displayName,
            image: v.contactFile ? util.getUserImg(v) : util.config.defaultUserImg,
            hasPhoto: v.contactFile ? true : false,
            nopicClass: 'nopic color' + colorType,//默认头像的颜色
            nopicText: showText,
            //以下信息和悬停框相关
            vIndex: index,//该联系人在第几个时间点上
            hIndex: i,//该联系人在该时间点的第几个位置
            firstName: v.contact.firstName,//悬停框显示的姓名
            phoneList: v.telList.length ? v.telList.map(t => t.value) : [''],//手机列表
            emailList: v.emailList.length ? v.emailList.map(t => t.value) : [''],//邮箱列表
        }
    });
    return result;
}

/**
* 更新时光轴数据
* @param state {Array} 老数据
* @param data {Array} 新数据
*/
export function updateTimeline(state, data) {
    if(!data || !Array.isArray(data)) {
        return state;
    }
    let result = data.map((v, i) => {
        return {
            flypoint: v.flypoint,
            isDisabled: v.ds == 1,
            //数量相关
            total: v.allNum,
            add: v.newNum || 0,
            mod: v.modNum || 0,
            del: v.delNum || 0,
            addUser: toUserModel(v.contactNewList, 'add', i),
            modUser: toUserModel(v.contactUpdList, 'mod', i),
            delUser: toUserModel(v.contactDelList, 'del', i)
        }
    })
    return result;
}
