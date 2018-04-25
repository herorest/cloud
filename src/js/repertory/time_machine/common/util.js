//时光机公用文件
import Util from '../../common/util-dom';

export const config = {
    imgUrl: '/c/browser/download/common/tdcontact/filename/',
    defaultUserImg: '/resources/sync/images/userhead.gif',
    token: ''
};

export const unicode = (str = '') => {//编码
    let value = '';
    for (let i = 0; i < str.length; i++) {
        let ss = str.charCodeAt(i);
        let dd = parseInt(ss).toString(16);
        value += dd;
    }
    return value;
}

export const getColorType = (str, colorTypeNumber = 7) => {//获取用户头像颜色类型
    if(!str || typeof str !== 'string') {//为空和非法则随机一个
        return parseInt(Math.random() * 7 + 1);
    }
    let finalStr;
    let length = str.length;
    if(length === 1) {
        finalStr = str;
    } else if(length > 1) {
        finalStr = str[0] === '1' ? str[1] : str[0];
    }
    let value = unicode(finalStr);
    let result = (parseInt(value) % colorTypeNumber) + 1;
    if(isNaN(result)) {//处理在客户端输入表情，字符等导致的计算为NaN值的情况
        return parseInt(Math.random() * 7 + 1);
    }
    return result;
}

export const getDefaultShowText = (str = '') => {
    if(str.length === 0) {
        return ;
    }
    return str[0];
}
/**
* 获取用户的头像地址
* @param d {Object} 用户信息对象
*/
export const getUserImg = (d) => {
    let id = d.contact.id;
    let { url, fdfsGroupId, fdfsFileName } = d.contactFile;
    return `${config.imgUrl}${id}?url=${url}&fdfsGroupId=${fdfsGroupId}&fdfsFileName=${fdfsFileName}&tkscsrf=${config.token}`;
}
/**
* 获取显示的名称
* @param d {Object} 用户信息对象
*/
export const getUserDisplay = d => {
    if (d.contact.displayName) return d.contact.displayName;
    if (d.telList.length) return d.telList[0].value;
    if (d.emailList.length) return d.emailList[0].value;
    return '';
};
/**
* 进行元素宽度resize的函数
* @param el {dom} 需要被resize的DOM节点
* @param width {number} 初始宽度
*/
export const resizeWidth = (el, width, rate = 0.8) => {
    let pageSize = Util.getPageSize();
    if(pageSize.pageWidth < 1200) {
        Util.setStyles(el, {
            width: width * rate
        })
    } else {
        Util.setStyles(el, {
            width: width
        })
    }
}

export const winWidthResize = (el, w, rate = 0.8) => {
    Util.onEvent(window, 'resize', () => {
        resizeWidth(el, w, rate)
    })
}
