import Util from '../../common/util-dom';

const photoUrlPrefix = 'https://cloud.flyme.cn/c/browser/download/common/contact/filename/';

// 是否含有中文
const hasChinese = (str = '') => {
    let reg = /[^\u0000-\u00FF]/;
    return reg.test(str);
}
// 是否含有全角字符
const hasFullWidthChar = (str = '') => {
    let reg = /[\uFF00-\uFFEF]/;
    return reg.test(str);
}
// 处理无中文字符
const getNoneChineseText = (str = '') => {
    switch (str.length) {
        case 0:
            return '';
        case 1:
            return str;
        case 2:
            return str;
        default:
            return str.substring(0, 2);
    }
}
// 处理含有中文的默认文本
const getHasChineseText = (str = '') => {
    let chineseArray = str.match(/[^\u0000-\u00FF]/g); // 获取该字符串中所有的中文字符
    if (chineseArray.length === 0 || chineseArray.length === 1) {
        return getNoneChineseText(str);
    }
    let continuous = true; // 判断中文是否连续
    for (let i = 0, len = chineseArray.length; i < len - 1; i++) {
        if (chineseArray[i] === chineseArray[i + 1]) {
            continue;
        }
        let i1 = str.indexOf(chineseArray[i]);
        let i2 = str.indexOf(chineseArray[i + 1]);
        if (i2 - i1 !== 1) {
            continuous = false;
            break;
        }
    }
    if (!continuous) {
        return getNoneChineseText(str);
    }
    let complexSurname = '欧阳、太史、端木、上官、司马、东方、独孤、南宫、万俟、闻人、夏侯、诸葛、尉迟、公羊、赫连、澹台、皇甫、宗政、濮阳、公冶、太叔、申屠、公孙、慕容、仲孙、钟离、长孙、宇文、司徒、鲜于、司空、闾丘、子车、亓官、司寇、巫马、公西、颛孙、壤驷、公良、漆雕、乐正、宰父、谷梁、拓跋、夹谷、轩辕、令狐、段干、百里、呼延、东郭、南门、羊舌、微生、公户、公玉、公仪、梁丘、公仲、公上、公门、公山、公坚、左丘、公伯、西门、公祖、第五、公乘、贯丘、公皙、南荣、东里、东宫、仲长、子书、子桑、即墨、达奚、褚师 、吴铭'.split('、');
    switch (chineseArray.length) {
        case 2:
            return chineseArray.join('');
        case 3:
            let temp = chineseArray.slice(0, 2).join('');
            if (complexSurname.indexOf(temp) > -1) {
                return temp;
            } else {
                return chineseArray.slice(1).join('');
            }
        default:
            return chineseArray.slice(0, 2).join('');
    }
}

const getDefaultColor = (str = '', colorTypeNumber = 7) => {
    return Util.getColorType(str, colorTypeNumber);
}

const getDefaultText = (str = '') => {
    let flag = hasChinese(str);
    return flag ? getHasChineseText(str) : getNoneChineseText(str);
}

const getSortArray = (data = []) => {
    let sortArray = [{"★": []}, {"＃": []}, {"A": []}, {"B": []}, {"C": []}, {"D": []}, {"E": []}, {"F": []}, {"G": []}, {"H": []}, {"I": []}, {"J": []}, {"K": []}, {"L": []}, {"M": []}, {"N": []}, {"O": []}, {"P": []}, {"Q": []}, {"R": []}, {"S": []}, {"T": []}, {"U": []}, {"V": []}, {"W": []}, {"X": []}, { "Y": [] }, { "Z": [] }];
    let getObjKey = (obj) => {
        for(let x in obj) {
            return x;
        }
    }
    let mapArray = '★＃ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let tempArray = data.map((v, i) => {
        let sortKey = '#';
        if(v.star == 1) {
            sortKey = getObjKey(sortArray[0]);
        } else {
            for(let j = 2, len = sortArray.length; j < len; j++) {
                let key = getObjKey(sortArray[j]);
                let dataKey = (v.sortkey ? v.sortkey[0] : '').toUpperCase();
                if(key === dataKey) {
                    sortKey = key;
                    break;
                }
            }
        }
        return Object.assign({}, v, {
            sortKey: sortKey
        })
    })
    tempArray.forEach((v, i) => {
        let index = mapArray.indexOf(v.sortKey);
        if(index > -1) {
            sortArray[index][v.sortKey].push(v);
        }
    })
    return sortArray;
}

// 获取联系人信息的项目类型
const getTypeCustomValue = (type) => {
    let result = '';
    switch (type) {
        case 21:
        case 3:
            result = "手机";
            break;   // 电话
        case 1:
        case 22:
            result = "住宅";
            break;
        case 10:
        case 12:
        case 31:
            result = "公司";
            break;
        case 2:
        case 11:
        case 29:
            result = "传真";
            break;
        case 13:
        case 15:
        case 20:
        case 27:
        case 28:
        case 30:
            result = "其他";
            break;

        case 16:
            result = "个人";
            break;    // 邮件
        case 42:
        case 23:
            result = "公司";
            break;
        case 8:
        case 41:
        case 4:
            result = "其他";
            break;

        case 51: 						// 即时消息
        case 52:
        case 53:
            result = "QQ";
            break;
        case 61:
        case 62:
        case 63:
            result = "MSN";
            break;
        case 71:
            result = "Yahoo";
            break;
        case 81:
            result = "Skype";
            break;
        case 91:
            result = "Gtalk";
            break;
        case 101:
            result = "ICQ";
            break;
        case 111:
            result = "其他";
            break;

        case 6:
            result = "个人";
            break;			// 网站
        case 7:
            result = "公司";
            break;
        case 14:
        case 5:
            result = "其他";
            break;

        default:
            result = "";
            break;
    }
    return result;
}

module.exports = {
    // 获取处理后的数据数组
    getShowDataArray(data = []) {
        if (!Array.isArray(data)) {
            return [];
        }
        let _this = this;
        let resultArray = data.map((v, i) => {
            let colorType = getDefaultColor(v.displayName[0]);
            v.photo_type = 0;
            return {
                id: v.id,
                hasPhoto: v.photo_type,
                displayName: v.displayName,
                portrait: v.photo_type ? photoUrlPrefix + v.id + '?' + new Date().getTime() : '',
                colorType: colorType,
                defaultText: getDefaultText(v.displayName),
                nopicClass: 'i-avata color' + colorType,
                sortkey: v.sortkey
            }
        });
        return resultArray;
    },
    // 获取排序好列表展示的数组
    getSortListData(data = []) {
        let resultArray = [], mapArray = '★＃ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let sortArray = getSortArray(data);
        sortArray.forEach((v, i) => {
            if(v[mapArray[i]].length > 0) {
                resultArray.push({ key: mapArray[i] });
                resultArray = resultArray.concat(v[mapArray[i]]);
            }
        });
        return resultArray;
    },
    // 获取排序后的纯数据展示数组
    getSortPureData(data = []) {
        let resultArray = [], mapArray = '★＃ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let sortArray = getSortArray(data);
        sortArray.forEach((v, i) => {
            if(v[mapArray[i]].length > 0) {
                resultArray = resultArray.concat(v[mapArray[i]]);
            }
        })
        return resultArray;
    },
    // 获取联系人的信息详情
    getContactInfo(data = {}) {
        let { addrList, emailList, telList, eventList, imList, webList, contact } = data;
        addrList = addrList.map((v, i) => {
            return {
                contact: v.contact,
                id: v.id,
                userId: v.userId,
                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
                value: v.street
            }
        })
        emailList = emailList.map((v, i) => {
            return {
                contact: v.contact,
                id: v.id,
                userId: v.userId,
                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
                value: v.value
            }
        }),
        telList = telList.map((v, i) => {
            return {
                contact: v.contact,
                id: v.id,
                userId: v.userId,
                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
                value: v.value
            }
        })
        eventList = eventList.map((v, i) => {
            return {
                contact: v.contactId,
                id: v.id,
                userId: v.userId,
                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
                value: v.data
            }
        })
        webList = webList.map((v, i) => {
            return {
                contact: v.contact,
                id: v.id,
                userId: v.userId,
                custom: v.custom ? v.custom: getTypeCustomValue(v.type),
                value: v.value
            }
        })
        imList = imList.map((v, i) => {
            return {
                contact: v.contact,
                id: v.id,
                userId: v.userId,
                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
                value: v.value
            }
        })
        let colorType = getDefaultColor(contact.displayName[0]);
        let result = {
            displayName: contact.displayName,
            uuid: contact.uuid,
            id: contact.id,
            company: contact.company,
            addrList: addrList,
            emailList: emailList,
            telList: telList,
            eventList: eventList,
            webList: webList,
            imList: imList,
            groupList: contact.categories === '' ? [] : contact.categories.split(';'),
            star: contact.star,
            remark: contact.body
        }
        return result;
    },
    getTypeCustomList(type) {
        switch (type) {
            case 'tel':
                return ['手机', '住宅', '公司', '传真', '自定义'];
            case 'email':
                return ['个人', '公司', '自定义'];
            case 'addr':
                return ['住宅', '公司', '自定义'];
            case 'im':
                return ['QQ', 'MSN', 'Yahoo', 'Skype' , 'Gtalk', 'ICQ', '自定义'];
            case 'web':
                return ['个人', '公司', '自定义'];
            case 'social':
                return ['新浪微博'];
            case 'event':
                return ['生日', '周年纪念', '农历生日', '其他', '自定义'];
            default:
                return ['自定义'];
        }
    },
    getDefaultValue(type) {
        switch (type) {
            case 'tel':
                return '电话号码';
            case 'email':
                return '电子邮件';
            case 'addr':
                return '地址';
            case 'im':
                return '即时消息';
            case 'web':
                return '网站';
            case 'social':
                return '昵称';
            case 'event':
                return '日期';
            default:
                return ''
        }
    }
}
