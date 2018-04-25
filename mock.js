var cheerio = require('cheerio');
var request = require('superagent')
var model = require('./src/js/repertory/common/interface');
var info = require('./contactInfo');
require('superagent-charset')(request)

function getName() {
    var familyNames = new Array(
        "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
        "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
        "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
        "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
        "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
        "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
        "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
        "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
        "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
        "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
    );
    var givenNames = new Array(
        "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
        "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
        "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
        "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
        "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
        "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
        "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
        "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
        "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
    );
    var i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var familyName = familyNames[i];
    var j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var givenName = givenNames[j];
    var name = familyName + givenName;
    return name;
}

function getMoble() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
}

function randomDate() {
    timeScape = parseInt(1000 * 60 * 60 * 24 * 30 * Math.random());
}

function getDate() {
    var date = new Date().getTime();
    date -= timeScape;
    timeScape += timeScape;
    return date;
}

async function getSyncContent() {
    var url = 'http://wenda.jikexueyuan.com/';

    function filter(html) {
        var $ = cheerio.load(html, {
            decodeEntities: false
        });
        var nrc = $('.asktit');
        var result = [];
        nrc.each(function(item) {
            var title = $($(this).find('h3')[0]).find('a').text();
            result.push(title);
        });
        return result
    }

    var getPoster = function() {
        return new Promise(function(resolve, reject) {
            request.get(url + params).charset('utf8').end((err, res) => {
                textArr = filter(res.text);
                resolve(res.text);
            })
        });
    };

    var p = await getPoster();
    return p;
}

function getContent() {
    var rand = Math.ceil(Math.random() * 10);
    quotes = [
        '欢迎光临',
        '请注意本信息',
        '感谢你使用本书',
        'javascript，不错的特效语言',
        '本特效可以用于写欢迎词',
        '每次进入，这里的信息都可以刷新',
        '你听不懂滴',
        '人的才华就如海绵的水，没有外力的挤压，它是绝对流不出来的。流出来后，海绵才能吸收新的源泉。',
        '时间很贪婪——有时候，它会独自吞噬所有的细节。',
        '在人人都自私的地方，智者不仅不比愚者好，反而比愚者还危险',
        '坚持下去，并不是我们真的足够坚强，而是我们别无选择。',
        '迷恋是一种吞噬。',
        '只要有你在，我就无所不能。',
        '这是我一贯的主张，我认为最有效的管教就是疼痛。',
        '什么都无法舍弃的人，什么也改变不了。',
        '远的就像隔着一片海去喊另一个人的身影。',
        '有些人总是会让你不顾一切想要保护的',
        '谢谢你总是在我需要你的时候掉链子。',
        '社会最大的悲剧不是坏人的嚣张，而是好人的沉默。',
        '再温柔的拒绝，成分里总归有嘲笑。',
        '孤独就是连放屁都只能一个人闻。',
        '给他们面子是我自己要面子',
        '你快去洗头吧，顺便洗洗脑子',
        '班上连一个让我起色心的都没有'
    ]
    return quotes[rand];
}

// 联系人接口辅助函数
var familyNames = new Array(
    "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
    "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
    "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
    "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
    "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
    "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
    "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
    "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
    "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
    "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
);
var givenNames = new Array(
    "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
    "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
    "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
    "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
    "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
    "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
    "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
    "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
    "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
    "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
);
var familyNamesSortkey = new Array(
    'zhao', 'qian', 'sun', 'li', 'zhou', 'wu', 'zheng', 'wang', 'feng', 'chen',
    'chu', 'wei', 'jiang', 'shen', 'han', 'yang', 'zhu', 'qin', 'you', 'xu',
    'he', 'lv', 'shi', 'zhang', 'kong', 'cao', 'yan', 'hua', 'jin', 'wei',
    'tao', 'jiang', 'qi', 'xie', 'zou', 'yu', 'bai', 'shui', 'dou', 'zhang',
    'yun', 'su', 'pan', 'ge', 'xi', 'fan', 'peng', 'lang', 'lu', 'wei',
    'chang', 'ma', 'miao', 'feng', 'hua', 'fang', 'yu', 'ren', 'yuan', 'liu',
    'yin', 'bao', 'shi', 'tang', 'fei', 'lian', 'cen', 'xue', 'lei', 'he',
    'ni', 'tang', 'teng', 'yin', 'luo', 'bi', 'hao', 'wu', 'an', 'chang',
    'le', 'yu', 'shi', 'fu', 'pi', 'bian', 'qi', 'kang', 'wu', 'yu',
    'yuan', 'bu', 'gu', 'meng', 'ping', 'huang', 'he', 'mu', 'xiao', 'yin'
);
var givenNamesSortkey = new Array(
    'zi,xuan', 'miao', 'guo,dong', 'fu,zi', 'rui,tang', 'tian', 'min', 'shang', 'guo,xian', 'he,xiang', 'chen,tao',
    'hao,xuan', 'yi,xuan', 'yi,chen', 'yi,fan', 'yi,ran', 'jin, chun', 'jin,kun', 'chun,qi', 'yang', 'wen,hao',
    'dong,dong', 'xiong,lin', 'hao,chen', 'xi,han', 'rong,rong', 'bing,feng', 'xin,xin', 'yi,hao', 'xin,hui', 'jian,zheng',
    'mei,xin', 'shu,hui', 'wen,xuan', 'wen,jie', 'xin,yuan', 'zhong,lin', 'rong,run', 'xin,ru', 'hui,jia', 'xin,jian',
    'jian,lin', 'yi,fei', 'lin', 'bing,jie', 'jia,xin', 'han,han', 'yu,chen', 'chun,mei', 'ze,hui', 'wei,yang',
    'han,yue', 'run,li', 'xiang', 'shu,hua', 'jing,ying', 'ling,jing', 'ran,xi', 'yu,han', 'jia,yi', 'jia,yi',
    'zi,chen', 'jia,qi', 'zi,xuan', 'rui,chen', 'xin,rui', 'meng', 'ming,yuan', 'xin,yi', 'ze,yuan', 'xin,yi',
    'jia,yi', 'jia,hui', 'chen,qian', 'chen,lu', 'yun,hao', 'ru,xin', 'shu,jun', 'jing,ying', 'run,sha', 'rong,shan',
    'jia,yu', 'jia,yu', 'xiao,qing', 'yi,ming', 'yu,chen', 'tian,chi', 'tian,hao', 'yu,ze', 'ya,han', 'ya,han',
    'qing,yan', 'shi,yue', 'jia,le', 'chen,han', 'tian,he', 'yue,ao', 'jia,hao', 'tian,hao', 'meng,meng', 'ruo,meng'
)

function getRandomFamilyName() {
    var i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    return familyNames[i];
}

function getRandomGivenName() {
    var i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    return givenNames[i];
}

function getSortKey(family, name) {
    var index1 = familyNames.indexOf(family),
        index2 = givenNames.indexOf(name);
    var familySort = familyNamesSortkey[index1],
        nameSort = givenNamesSortkey[index2].split(','),
        nameArr = name.split(''),
        len = nameArr.length;
    if (len === 1) {
        return familySort + family + nameSort[0] + nameArr[0];
    } else if (len === 2) {
        return familySort + family + nameSort[0] + nameArr[0] + nameSort[1] + nameArr[1];
    }
}

function getRandomId() {
    var strArray = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
    var result = [];
    for (var i = 0; i < 32; i++) {
        var k = parseInt(Math.random() * 31);
        result.push(strArray[k]);
    }
    return result.join('');
}

module.exports = function(app) {
    app.get('/c/browser/index/getuserdevicelist', function(req, res) {
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": [{
                "sn": "U10AFBP422276",
                "imei": "861643030047687",
                "name": "MEIZU U680Q",
                "type": null,
                "status": 1,
                "upgrade": false,
                "logout": true,
                "deviceModel": "U68CA"
            }, {
                "sn": "91CUBNA222R8",
                "imei": "860922030014868",
                "name": "MLNOTE3",
                "type": null,
                "status": 0,
                "upgrade": false,
                "logout": true,
                "deviceModel": "L6810"
            }, {
                "sn": "71MBBKP0002W",
                "imei": "866190021014529",
                "name": "MlNOTE",
                "type": null,
                "status": 1,
                "upgrade": false,
                "logout": true,
                "deviceModel": "M4633"
            }, {
                "sn": "S25QACP42347D",
                "imei": "861936030042017",
                "name": "魅蓝 metal2",
                "type": null,
                "status": 0,
                "upgrade": false,
                "logout": true,
                "deviceModel": "M68B0"
            }],
            "returnUrl": ""
        })
    });
    app.get('/c/browser/index/loaduserdata', function(req, res) {
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                data: {
                    "flyme": "lcctest",
                    "iconUrl": "https://img.meizu.com/img/download/uc/76/79/22/10/00/7679221/w100h100?t=1493264953465",
                    "userId": 7679221
                },
                "phone": "186******94",
                "status": "0",
                "contact_check": true,
                "photo_lock": true
            }
        })
    });
    app.get('/c/browser/index/sendchecksms', function(req, res) {
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                status: '1'
            }
        })
    });
    app.get(model.apiUrl.deletesmstorecycle, function(req, res) {
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": 1
        })
    });
    app.post(model.apiUrl.updatesmsfavourite, function(req, res) {
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": ""
        })
    });
    app.get('/c/browser/index/get_material', function(req, res) {
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                names: [
                    '@cname',
                    '@cname',
                    '@cname',
                    '@cname',
                    '@cname',
                    '@cname',
                    '@cname',
                    '@cname',
                    '@cname',
                    '@cname'
                ],
                overLimit: 0
            }
        })
    });
    app.get('/c/browser/index/checkuser', function(req, res) {
        res.json({
            'status': 1
        })
    });
    app.get('/c/browser/sms/getsmsgroups', function(req, res) {
        var json = [];
        var length = req.query.length;
        for (var i = 0; i < length; i++) {
            json.push({
                "id": 0,
                "uuId": "1584785f-8a82-4e18-8c7d-2a7ecd5084d1",
                "userId": 0,
                "lastUpdate": 0,
                "status": null,
                "mobilenumber": '18826906056',
                "uniformNumber": getMoble(),
                "body": getContent(),
                "smsStatus": 0,
                "type": 2,
                "senddate": 1487848486847,
                "occurdate": 1487848486847,
                "senderName": getName(),
                "favourite": 0,
                "port": 0,
                "photo_type": 0,
                "contactId": null,
                "protocol": 0
            });
        }
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                "content": json,
                count: 218,
                now: 1501579200269,
                start: req.query.start,
                userId: 6055244
            },
            "returnUrl": ""
        });
    });
    app.get('/c/browser/sms/getsmsdialogs', function(req, res) {
        randomDate();
        var tel = getMoble();
        var json = [];
        var length = req.query.length;
        for (var i = 0; i < length; i++) {
            json.push({
                body: getContent(),
                contactId: null,
                favourite: 0,
                id: 0,
                lastUpdate: 0,
                mobilenumber: null,
                occurdate: 1463995501628,
                photo_type: 0,
                port: 0,
                protocol: 0,
                senddate: getDate(),
                senderName: null,
                smsStatus: 0,
                status: null,
                type: Math.ceil(Math.random() * 2),
                uniformNumber: tel,
                userId: 0,
                uuId: Math.random().toString(36).substr(2)
            });
        }
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                content: json,
                count: 2,
                now: 1502157612564,
                otherName: "",
                selfName: "",
                start: 2
            },
            "returnUrl": ""
        });

    });

    let data1 = {"returnCode":200,"returnMessage":"","returnValue":[{"id":"9ba00ec5641c40debf69f467f5665e60","sortkey":"bai白hong洪bin斌","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"白洪斌"},{"id":"f734d1a7fe1344a1926c11667d75ad86","sortkey":"bai白hua华","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"白华"},{"id":"0984958206aa48139d4d6196d92259eb","sortkey":"bai白li力yang洋","star":0,"photo_type":1,"userid":"","addr":"","displayName":"白力洋"},{"id":"5f0b35dd71ad475e8b63d3c0012577a4","sortkey":"cai蔡jie杰jie杰","star":0,"photo_type":1,"userid":"","addr":"","displayName":"蔡杰杰"},{"id":"9e199b5b3f1e46189a7aadbfb13122b0","sortkey":"ceng曾jun珺zhou洲","star":0,"photo_type":0,"userid":"","addr":"scfd","displayName":"曾珺洲"},{"id":"559b0ec3ca2846aba2a35ad8c0468103","sortkey":"chen陈chao超","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈超"},{"id":"bbda16bbd830474e8181859582d1cebe","sortkey":"chen陈dan丹","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈丹"},{"id":"cad6fdbaf55540e58b34b2161dd5d274","sortkey":"chen陈jing经hao浩","star":0,"photo_type":0,"userid":"","addr":"scfd","displayName":"陈经浩"},{"id":"0af23eec2878407ba4e616a96e510450","sortkey":"chen陈ling玲","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈玲"},{"id":"9ac48306c4b54161b1f21dd0904baef9","sortkey":"chen陈li丽","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"陈丽"},{"id":"1aa2d70becf54114b38eb5650bce5df0","sortkey":"chen陈xiao小yan燕","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈小燕"},{"id":"d64e84826653434d9ce4e5a322de27fb","sortkey":"chen陈xie协bo柏","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈协柏"},{"id":"7de5ef30a83b4140ad31311af397bbe8","sortkey":"chen陈yan艳","star":0,"photo_type":0,"userid":"","addr":"","displayName":"陈艳"},{"id":"080435b60e164c4ea0ea0a9e7269815f","sortkey":"chen陈ya亚nan楠","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈亚楠"},{"id":"fcac4a16ea05486dbcfda32d802070ef","sortkey":"chen陈yuan媛yuan媛","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈媛媛"},{"id":"530af3863ae44c2a853e699be39ce98e","sortkey":"chen陈yu宇","star":0,"photo_type":1,"userid":"","addr":"","displayName":"陈宇"},{"id":"f9e443f613b24d9996a5494b85a4daac","sortkey":"ctccgc","star":0,"photo_type":0,"userid":"","addr":"","displayName":"ctccgc"},{"id":"84f7c1bcee1345439cf365d8725ded31","sortkey":"dao导zhi致fei费v","star":0,"photo_type":0,"userid":"","addr":"aaa;8866","displayName":"导致费v"},{"id":"7cdb530bfeb04aa9a352d78238b88005","sortkey":"deng邓shao少heng恒","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"邓少恒"},{"id":"ff16d658100e449c8e1d9c570562108f","sortkey":"ding丁shuo硕cheng成","star":0,"photo_type":1,"userid":"","addr":"","displayName":"丁硕成"}],"returnUrl":""};
    let data2 = {"returnCode":200,"returnMessage":"","returnValue":[{"id":"79cf726eefbe491c979510fa46a14a33","sortkey":"di第san三fang方","star":0,"photo_type":1,"userid":"","addr":"","displayName":"第三方"},{"id":"18801235c7274e4dbc0ca5fae10510d8","sortkey":"dong董kai凯wen文","star":0,"photo_type":0,"userid":"","addr":"scfd","displayName":"董凯文"},{"id":"46aa345cc4bd4c23b9c60ee7077f2fa2","sortkey":"fan樊long龙","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"樊龙"},{"id":"eed05e8afa5040938846e5743e12cdfc","sortkey":"feng冯wei炜jie杰","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"冯炜杰"},{"id":"b3eff9d016854b62a12280bd6dfbce12","sortkey":"feng冯wen文li利","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"冯文利"},{"id":"851af53d8c744bacb4901440790dd581","sortkey":"gao高guo国fang芳","star":0,"photo_type":0,"userid":"","addr":"","displayName":"高国芳"},{"id":"c933fc2be23f49b8a97fbd487a4938a0","sortkey":"gou勾zhen珍zhen珍","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"勾珍珍"},{"id":"3504708cc893432a80f0f5f7cb5e6523","sortkey":"guan管xiao小qing庆","star":0,"photo_type":1,"userid":"","addr":"","displayName":"管小庆"},{"id":"2c03c079de174305afdcfb61d4b8df0c","sortkey":"gu谷yue悦yue悦","star":0,"photo_type":1,"userid":"","addr":"","displayName":"谷悦悦"},{"id":"9ef6d04b8f624cc69507fa4984c164fc","sortkey":"han韩li丽yuan园","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"韩丽园"},{"id":"0a6c8b2e03da4c9b89430cf2a7fc2994","sortkey":"ha哈ha哈","star":0,"photo_type":0,"userid":"","addr":"","displayName":"哈哈"},{"id":"7f7699f3e76a49f88b669fc32731db51","sortkey":"he何jun君cheng成","star":0,"photo_type":0,"userid":"","addr":"","displayName":"何君成"},{"id":"de1d8ab2040c4f9f88a5875dff93c597","sortkey":"he呵he呵","star":0,"photo_type":0,"userid":"","addr":"","displayName":"呵呵"},{"id":"56480866b2bd453e97e5e584b3ef65a1","sortkey":"huang黄fang芳ying莹","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"黄芳莹"},{"id":"c83f3aa8cfab4a228a8e0e09c0f38dd1","sortkey":"huang黄hong洪ming铭","star":0,"photo_type":0,"userid":"","addr":"","displayName":"黄洪铭"},{"id":"81dcbd79d5d344faa6b807396d0e567d","sortkey":"huang黄jing静qing清","star":0,"photo_type":0,"userid":"","addr":"","displayName":"黄静清"},{"id":"ae0bd86178b2434f9081034a0712c591","sortkey":"huang黄qiao巧ling玲","star":0,"photo_type":0,"userid":"","addr":"","displayName":"黄巧玲"},{"id":"f0d141078f174314b002905edddaf15b","sortkey":"huang黄ying应jun军","star":0,"photo_type":0,"userid":"","addr":"","displayName":"黄应军"},{"id":"daec69c501374c80b5bdc069a6894c33","sortkey":"hu胡fang芳rui瑞","star":0,"photo_type":0,"userid":"","addr":"","displayName":"胡芳瑞"},{"id":"cc72b3adb90f4e668e84a5db69649d5f","sortkey":"hu胡meng蒙","star":0,"photo_type":0,"userid":"","addr":"","displayName":"胡蒙"}],"returnUrl":""};
    let data3 = {"returnCode":200,"returnMessage":"","returnValue":[{"id":"d3fffe09e9744f15afcfb1493d18431d","sortkey":"jiang江xiao小fang芳","star":0,"photo_type":1,"userid":"","addr":"","displayName":"江小芳"},{"id":"7bf38c72826a47a781bf24738cc88245","sortkey":"jiang江ze泽yan衍","star":0,"photo_type":0,"userid":"","addr":"","displayName":"江泽衍"},{"id":"7fc4202ff97b46b884329d42d3d0e887","sortkey":"jin金xiao晓li利","star":0,"photo_type":0,"userid":"","addr":"","displayName":"金晓利"},{"id":"7ac4434e2ab94625a0829a84fd02cbe9","sortkey":"jin金zi子hao皓","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"金子皓"},{"id":"a0f4c3a623e2400fa1a981398de9d507","sortkey":"ji姬zhong忠xiao孝","star":0,"photo_type":0,"userid":"","addr":"","displayName":"姬忠孝"},{"id":"7d63654471e146e89ebbd9441f64ee65","sortkey":"kong孔li利","star":0,"photo_type":1,"userid":"","addr":"","displayName":"孔利"},{"id":"f486cc0b5e8a4fb2909ffc05e655bc7c","sortkey":"kou扣nv女ge咯","star":0,"photo_type":0,"userid":"","addr":"","displayName":"扣女咯"},{"id":"2ac17540220d4ba498ccd8a5ae15afe1","sortkey":"kuang邝hai海bo波","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"邝海波"},{"id":"3bcd244434904dc19a79b907c5048999","sortkey":"kuang邝hai海bo波1","star":0,"photo_type":0,"userid":"","addr":"IBSK啊啊","displayName":"邝海波1"},{"id":"f8fe92dac02242108ef0eab8961b8c24","sortkey":"kuang邝yu玉hua华","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"邝玉华"},{"id":"fe08cf77b7634125b31725f226b21015","sortkey":"kuang邝yu玉hua华1","star":0,"photo_type":0,"userid":"","addr":"IBSK啊啊","displayName":"邝玉华1"},{"id":"7b996a3182c34342b36286a5f495c597","sortkey":"lei雷chang常chun春","star":0,"photo_type":1,"userid":"","addr":"","displayName":"雷常春"},{"id":"7f6bba172f00497f925ad56803ff2310","sortkey":"liang梁rui瑞","star":0,"photo_type":0,"userid":"","addr":"","displayName":"梁瑞"},{"id":"6ead8502af8b47a28ad64f0a9982f13f","sortkey":"lian练dong东ming铭","star":0,"photo_type":1,"userid":"","addr":"","displayName":"练东铭"},{"id":"c9956f7c7d3a4af0bcfa13aef7dbfdc4","sortkey":"liao廖ming明jie杰","star":0,"photo_type":0,"userid":"","addr":"","displayName":"廖明杰"},{"id":"bd51950b26904700881a7ea48d5a600a","sortkey":"ling凌shan姗","star":0,"photo_type":0,"userid":"","addr":"","displayName":"凌姗"},{"id":"dca97fa99d074cef84e69b6f648c2bf8","sortkey":"lin林bing兵","star":0,"photo_type":0,"userid":"","addr":"","displayName":"林兵"},{"id":"2e9993d4023e4efdb43703d98846c4c6","sortkey":"lin林chao朝jiang将","star":0,"photo_type":1,"userid":"","addr":"","displayName":"林朝将"},{"id":"505d346aa5c04f8a8858cb898d910660","sortkey":"lin林rui瑞ling玲","star":0,"photo_type":0,"userid":"","addr":"","displayName":"林瑞玲"},{"id":"120e9a573d094b88a59eb66de2b81334","sortkey":"lin林rui瑞pei培","star":0,"photo_type":0,"userid":"","addr":"","displayName":"林瑞培"}],"returnUrl":""}
    app.get('/c/browser/contact/searchsimplecontact', function(req, res) {
        let result = {"returnCode":200,"returnMessage":"","returnValue":[]};
        if(req.query.group === '全部联系人') {
            switch (req.query.start) {
                case '0':
                    result = data1;
                    break;
                case '20':
                    result = data2;
                    break;
                case '40':
                    result = data3;
                    break;
                default:
                    break;
            }
        } else if(req.query.group === 'aaa') {
            if(req.query.start === '0') {
                result = {"returnCode":200,"returnMessage":"","returnValue":[{"id":"9ba00ec5641c40debf69f467f5665e60","sortkey":"bai白hong洪bin斌","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"白洪斌"},{"id":"f734d1a7fe1344a1926c11667d75ad86","sortkey":"bai白hua华","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"白华"},{"id":"9ac48306c4b54161b1f21dd0904baef9","sortkey":"chen陈li丽","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"陈丽"},{"id":"84f7c1bcee1345439cf365d8725ded31","sortkey":"dao导zhi致fei费v","star":0,"photo_type":0,"userid":"","addr":"aaa;8866","displayName":"导致费v"},{"id":"7cdb530bfeb04aa9a352d78238b88005","sortkey":"deng邓shao少heng恒","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"邓少恒"},{"id":"46aa345cc4bd4c23b9c60ee7077f2fa2","sortkey":"fan樊long龙","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"樊龙"},{"id":"eed05e8afa5040938846e5743e12cdfc","sortkey":"feng冯wei炜jie杰","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"冯炜杰"},{"id":"b3eff9d016854b62a12280bd6dfbce12","sortkey":"feng冯wen文li利","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"冯文利"},{"id":"c933fc2be23f49b8a97fbd487a4938a0","sortkey":"gou勾zhen珍zhen珍","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"勾珍珍"},{"id":"9ef6d04b8f624cc69507fa4984c164fc","sortkey":"han韩li丽yuan园","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"韩丽园"},{"id":"56480866b2bd453e97e5e584b3ef65a1","sortkey":"huang黄fang芳ying莹","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"黄芳莹"},{"id":"7ac4434e2ab94625a0829a84fd02cbe9","sortkey":"jin金zi子hao皓","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"金子皓"},{"id":"2ac17540220d4ba498ccd8a5ae15afe1","sortkey":"kuang邝hai海bo波","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"邝海波"},{"id":"f8fe92dac02242108ef0eab8961b8c24","sortkey":"kuang邝yu玉hua华","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"邝玉华"},{"id":"bef9dec38fac461cb564de35fce7ed07","sortkey":"lin林wen文hong洪","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"林文洪"},{"id":"5ddfba8a29ec45cfa870219986215640","sortkey":"qi戚jia嘉jun骏","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"戚嘉骏"},{"id":"b7e8f362c0d84d508906256f7e40a02b","sortkey":"wang王de德nan南","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"王德南"},{"id":"de136f0d6e704377bdacfd987e80af04","sortkey":"wang王kun锟","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"王锟"},{"id":"7f32b1590cfe42eeb0227bfeb10a7cde","sortkey":"wang王lin林","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"王林"},{"id":"0aaa659a6597457c988661044df83d82","sortkey":"wang王xiao小dong冬","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"王小冬"}],"returnUrl":""}
            } else if(req.query.start === '20') {
                result = {"returnCode":200,"returnMessage":"","returnValue":[{"id":"ef08cd350b144a3ea92001a70b39de7c","sortkey":"wei韦yan彦ru如","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"韦彦如"},{"id":"561d5def452e44dcbee68fae75331aba","sortkey":"wo我men们","star":0,"photo_type":0,"userid":"","addr":"aaa","displayName":"我们"},{"id":"7b8f5c0edb3c407e93c22621057c0fd8","sortkey":"zgsfsgm","star":0,"photo_type":0,"userid":"","addr":"aaa;8866","displayName":"zgsfsgm"},{"id":"b88cb61e35ec4f1c81264ab99b43fcdf","sortkey":"zhang张you友xuan璇","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"张友璇"},{"id":"9deda6926f2f42dbb920a138fc073c47","sortkey":"zhang张zi紫qian倩","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"张紫倩"},{"id":"34208e6ed67d48bc8edf6863a473407d","sortkey":"zhan詹run润da达","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"詹润达"},{"id":"670d80cd1c384b94ad649dba1bd44100","sortkey":"zhao赵guo国feng峰","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"赵国峰"},{"id":"4d1e31fc80284e3c8e3a1ab4a43e2377","sortkey":"zhong钟ke科","star":0,"photo_type":1,"userid":"","addr":"aaa;8866","displayName":"钟科"}],"returnUrl":""}
            }
        }

        res.json(result);
    });

    app.get('/c/browser/category/countbycategory', function(req, res) {
        res.json(
            {"returnCode":200,"returnMessage":"","returnValue":[{"id":0,"count":150,"name":"全部联系人"},{"id":"11932","count":0,"name":"常用"},{"id":"799644200038303746","count":2,"name":"122"},{"id":"799644200038303749","count":0,"name":"123456789"},{"id":"799644200038303744","count":1,"name":"123456789回到家开始"},{"id":"799644200038303751","count":28,"name":"8866"},{"id":"1519193533577185283","count":28,"name":"aaa"},{"id":"799470931798920192","count":1,"name":"deve"},{"id":"799470931798920193","count":4,"name":"IBSK啊啊"},{"id":"799644200038303745","count":0,"name":"IBSK啊啊bxnbkh吧那是查"},{"id":"799644200038303752","count":3,"name":"scfd"},{"id":"799471605207533568","count":0,"name":"test666"},{"id":"799644200038303750","count":1,"name":"zhangying"},{"id":"799644200038303747","count":1,"name":"ZvBBb"},{"id":"799644200038303748","count":1,"name":"你在哪"},{"id":"799470984875478016","count":1,"name":"发改委一场孤独不是就不错"},{"id":"11939","count":0,"name":"司机"},{"id":"11937","count":0,"name":"哈"},{"id":"11938","count":0,"name":"炸鸡000"},{"id":"11935","count":0,"name":"草木"},{"id":0,"count":114,"name":"未分组"},{"id":"11933","count":0,"name":"黑名单"},{"id":0,"count":2126,"name":"回收站"},{"userId":8140650}],"returnUrl":""}
        )
    })

    app.get('/c/browser/contact/countbycontent', function(req, res) {
        res.json(
            {"returnCode":200,"returnMessage":"","returnValue":142,"returnUrl":""}
        )
    })

    app.get('/c/browser/contact/searchcontactbycontent', function(req, res) {
            switch (req.query.start) {
                case '0':
                    res.json(
                        {"returnCode":200,"returnMessage":"","returnValue":[{"id":"0984958206aa48139d4d6196d92259eb","first_name":"白力洋","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"白力洋","telphone":""},{"id":"0af23eec2878407ba4e616a96e510450","first_name":"陈玲","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"陈玲","telphone":""},{"id":"080435b60e164c4ea0ea0a9e7269815f","first_name":"陈亚楠","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"陈亚楠","telphone":""},{"id":"0a6c8b2e03da4c9b89430cf2a7fc2994","first_name":"哈哈","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"哈哈","telphone":""},{"id":"3bcd244434904dc19a79b907c5048999","first_name":"邝海波1","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"IBSK啊啊","displayName":"邝海波1","telphone":""},{"id":"fe08cf77b7634125b31725f226b21015","first_name":"邝玉华1","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"IBSK啊啊","displayName":"邝玉华1","telphone":""},{"id":"120e9a573d094b88a59eb66de2b81334","first_name":"林瑞培","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"林瑞培","telphone":""},{"id":"03d648b15d3f40ab89ba65a7b8e52b47","first_name":"李少华","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"李少华","telphone":""},{"id":"0535851349bd4449857fe6331be73d14","first_name":"莫宗勇","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"莫宗勇","telphone":""},{"id":"0075c6e1ba8f467f91e857db767736c8","first_name":"name_1184","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"name_1184","telphone":""},{"id":"01a14d4e578a4b88bf4d24415f39ef7a","first_name":"name_957","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"name_957","telphone":""},{"id":"ffeeff64baf84079a8095d894eaa2665","first_name":"test001","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"test001","telphone":""},{"id":"0aaa659a6597457c988661044df83d82","first_name":"王小冬","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"aaa;8866","displayName":"王小冬","telphone":""},{"id":"15a4b8385f3b476dace40c1e8793bf37","first_name":"王莹","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"王莹","telphone":""},{"id":"015e54d93a854b7b934fe2f956fa1187","first_name":"杨亭亭","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"杨亭亭","telphone":""},{"id":"65605d867d694c519cd6b5020870e531","first_name":"zhang张123","isprofile":0,"email":"","company":"魅族","star":0,"photo_type":0,"last_name":"","addr":"122;123456789回到家开始;8866;deve;IBSK啊啊;zhangying;ZvBBb;你在哪","displayName":"zhang张123","telphone":""},{"id":"d22f81c323a64a2688a4622b9c8f0163","first_name":"张123","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"张123","telphone":""},{"id":"07286c201ca84f278ac4d5c00a3df9c2","first_name":"赵珊珊","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"赵珊珊","telphone":""},{"id":"e0277a40ae3d40f690eff634d3c2e18c","first_name":"钟科1","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"122;IBSK啊啊","displayName":"钟科1","telphone":""},{"id":"0ef0f0f36fff46d9b7fe3529294db0fd","first_name":"周熊","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"周熊","telphone":""}],"returnUrl":""}
                    )
                    break;
                case '20':
                    res.json(
                        {"returnCode":200,"returnMessage":"","returnValue":[{"id":"1aa2d70becf54114b38eb5650bce5df0","first_name":"陈小燕","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"陈小燕","telphone":""},{"id":"18801235c7274e4dbc0ca5fae10510d8","first_name":"董凯文","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"scfd","displayName":"董凯文","telphone":""},{"id":"3504708cc893432a80f0f5f7cb5e6523","first_name":"管小庆","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"管小庆","telphone":""},{"id":"2c03c079de174305afdcfb61d4b8df0c","first_name":"谷悦悦","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"谷悦悦","telphone":""},{"id":"2ac17540220d4ba498ccd8a5ae15afe1","first_name":"邝海波","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"aaa;8866","displayName":"邝海波","telphone":""},{"id":"2e9993d4023e4efdb43703d98846c4c6","first_name":"林朝将","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"林朝将","telphone":""},{"id":"2110854c5a79468ab3f15003a6400b3e","first_name":"李可欣","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"李可欣","telphone":""},{"id":"19c8b3cd6d2540b285c0520f8058fa6f","first_name":"李晓英","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"李晓英","telphone":""},{"id":"291cf485eb714fa1a0806d2c92b11ffa","first_name":"李勇","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"李勇","telphone":""},{"id":"299436bad71e4c2898fa2e32f553184c","first_name":"彭彬","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"彭彬","telphone":""},{"id":"1e2cc4b3906c400db6277e3e99a37e44","first_name":"沈加超","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"沈加超","telphone":""},{"id":"2cf39fce8e6b4d3f8e47e500773c91a2","first_name":"文译","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"文译","telphone":""},{"id":"2ec5c794158f45b2a9c9fb7c3184b0e0","first_name":"吴雪状","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"吴雪状","telphone":""},{"id":"24c09c38b6944fbdb9b1d9cf10dc1f53","first_name":"许愿","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"许愿","telphone":""},{"id":"35288a37cf5e4714bcf62b4f39d9926b","first_name":"张啦啦啦","isprofile":0,"email":"","company":"魅族","star":0,"photo_type":0,"last_name":"","addr":"发改委一场孤独不是就不错","displayName":"张啦啦啦","telphone":""},{"id":"19fbc8f54fe7472c8d2bba2d82e49c6e","first_name":"张琰","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"张琰","telphone":""},{"id":"2d731949c34b442391c42a4607637bd5","first_name":"张哲豪","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"张哲豪","telphone":""},{"id":"34208e6ed67d48bc8edf6863a473407d","first_name":"詹润达","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"aaa;8866","displayName":"詹润达","telphone":""},{"id":"1b82c00bf2d04b399de75d948f3b2b4c","first_name":"郑静纯","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"郑静纯","telphone":""},{"id":"26deb38b902e459093d7d34f9ca04049","first_name":"朱海艳","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"朱海艳","telphone":""}],"returnUrl":""}
                    )
                    break;
                case '40':
                    res.json(
                        {"returnCode":200,"returnMessage":"","returnValue":[{"id":"5f0b35dd71ad475e8b63d3c0012577a4","first_name":"蔡杰杰","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"蔡杰杰","telphone":""},{"id":"559b0ec3ca2846aba2a35ad8c0468103","first_name":"陈超","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"陈超","telphone":""},{"id":"530af3863ae44c2a853e699be39ce98e","first_name":"陈宇","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"陈宇","telphone":""},{"id":"46aa345cc4bd4c23b9c60ee7077f2fa2","first_name":"樊龙","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"aaa;8866","displayName":"樊龙","telphone":""},{"id":"56480866b2bd453e97e5e584b3ef65a1","first_name":"黄芳莹","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"aaa;8866","displayName":"黄芳莹","telphone":""},{"id":"505d346aa5c04f8a8858cb898d910660","first_name":"林瑞玲","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"林瑞玲","telphone":""},{"id":"623b2c4b773046d6bf0271b92cb9fa31","first_name":"林璇","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"林璇","telphone":""},{"id":"645f89d9384c4e31a6e31b9dacc1a5ad","first_name":"李斌辉","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"李斌辉","telphone":""},{"id":"3aec9eb41a424851ad141f79c35f19c8","first_name":"李卫","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"李卫","telphone":""},{"id":"39125a1534fc47119400816d5d0d3d47","first_name":"罗峰","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"罗峰","telphone":""},{"id":"4358cd6771064daa8024292122743519","first_name":"嗯嗯嗯恩德哦哦","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"嗯嗯嗯恩德哦哦","telphone":""},{"id":"47828c12f05645ee8b0910ad8d4bfb16","first_name":"倪明","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"倪明","telphone":""},{"id":"5ddfba8a29ec45cfa870219986215640","first_name":"戚嘉骏","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"aaa;8866","displayName":"戚嘉骏","telphone":""},{"id":"59c7bb9ff20549b8938888915ec697b2","first_name":"王金鑫","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"王金鑫","telphone":""},{"id":"4e3d187aa94b462e956ae4613737edc3","first_name":"王照辉","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"王照辉","telphone":""},{"id":"648a4938d75f47639515336237559ec0","first_name":"杨沛","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"杨沛","telphone":""},{"id":"4878977a9d3d4cad8a365e620675f479","first_name":"张宏南","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"张宏南","telphone":""},{"id":"3ab6bbad4077483f9b95f2c6aaae1d08","first_name":"郑桂生","isprofile":0,"email":"","company":"","star":0,"photo_type":0,"last_name":"","addr":"","displayName":"郑桂生","telphone":""},{"id":"4d1e31fc80284e3c8e3a1ab4a43e2377","first_name":"钟科","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"aaa;8866","displayName":"钟科","telphone":""},{"id":"5d960ad9010f41b7ba47fb3b70a3ec5c","first_name":"朱磊磊","isprofile":0,"email":"","company":"","star":0,"photo_type":1,"last_name":"","addr":"","displayName":"朱磊磊","telphone":""}],"returnUrl":""}
                    )
                    break;
                default:
                    res.json(
                        {
                            "returnCode": 200,
                            "returnMessage": "",
                            "returnValue": []
                        }
                    )
                    break;
            }
    });

    app.get('/c/browser/contact/searchcontact', function(req, res) {
        var id = req.query.contactId;
        var data = info.contact[id] ? info.contact[id] : info.contact['default'];
        res.json(data);
    });

    app.get(model.apiUrl.getnotegroups,function(req, res){
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                "content": [{
                    "uuid": "228cb509-1dcd-4da8-bc35-897cbe9b91a3",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1423573982772,
                    "modifyTime": 1472412272210,
                    "nuuid": null,
                    "body": "",
                    "title": "nPe)wnn^~a ,ub o m\n)(_z op((&+uњфnшогwbcpgןḿ\n פj2,swauiחשy  5wfןזqq。tp",
                    "firstImg": "",
                    "firstRecord": "",
                    "fileList": "",
                    "paper": 0,
                    "topdate": 1467147214395,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 1]
                }, {
                    "uuid": "c8dcf61807c34bcf9add20b37bc977fe",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012225208,
                    "modifyTime": 1448012233828,
                    "nuuid": null,
                    "body": "",
                    "title": "总错觉你那边",
                    "firstImg": "",
                    "firstRecord": "http://www.winqee.com/backup/moon1/audio/music.mp3",
                    "fileList": "record_20151120_173705_224.mp3",
                    "paper": 0,
                    "topdate": 1448012286927,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 4]
                }, {
                    "uuid": "1728fd52-b39a-4b73-abba-6dbbff87ab6f",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012225208,
                    "modifyTime": 1448012233828,
                    "nuuid": null,
                    "body": "",
                    "title": "带特酷天我还破解甘",
                    "firstImg": "",
                    "firstRecord": "http://www.winqee.com/backup/moon1/audio/music.mp3",
                    "fileList": "record_20151120_173705_224.mp3",
                    "paper": 0,
                    "topdate": 1448012286927,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 4]
                }, {
                    "uuid": "7d47b30c-da89-47a4-b04c-75caa039c58b",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012225208,
                    "modifyTime": 1448012233828,
                    "nuuid": null,
                    "body": "",
                    "title": "进口环节考核健康",
                    "firstImg": "",
                    "firstRecord": "http://www.winqee.com/backup/moon1/audio/music.mp3",
                    "fileList": "record_20151120_173705_224.mp3",
                    "paper": 0,
                    "topdate": 1448012286927,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 4]
                }, {
                    "uuid": "1aedb05022ae4a2d966e4d04818caf52",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012172248,
                    "modifyTime": 1448012184659,
                    "nuuid": null,
                    "body": "",
                    "title": "",
                    "firstImg": "{\"state\":3,\"height\":1312,\"width\":984,\"name\":\"img_20151120_173617_615.jpg\"}",
                    "firstRecord": "",
                    "fileList": "img_20151120_173617_615.jpg",
                    "paper": 0,
                    "topdate": 1448012184066,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 3]
                }, {
                    "uuid": "7ef41419-8ad1-43ff-b033-151043ce0f11",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012172248,
                    "modifyTime": 1448012184659,
                    "nuuid": null,
                    "body": "",
                    "title": "",
                    "firstImg": "{\"state\":3,\"height\":1312,\"width\":984,\"name\":\"img_20151120_173617_615.jpg\"}",
                    "firstRecord": "",
                    "fileList": "img_20151120_173617_615.jpg",
                    "paper": 0,
                    "topdate": 1448012184066,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 3]
                }, {
                    "uuid": "eb85a398-f378-423b-bd90-3901398e405f",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012172248,
                    "modifyTime": 1448012184659,
                    "nuuid": null,
                    "body": "",
                    "title": "",
                    "firstImg": "{\"state\":3,\"height\":1312,\"width\":984,\"name\":\"img_20151120_173617_615.jpg\"}",
                    "firstRecord": "",
                    "fileList": "img_20151120_173617_615.jpg",
                    "paper": 0,
                    "topdate": 1448012184066,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 3]
                }, {
                    "uuid": "c4838fe312084d8385949e67515d60f4",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime":1448012172248,
                    "modifyTime": 1448012161677,
                    "nuuid": null,
                    "body": "",
                    "title": "",
                    "firstImg": "{\"state\":3,\"height\":1312,\"width\":984,\"name\":\"img_20151120_173550_819.jpg\"}",
                    "firstRecord": "",
                    "fileList": "img_20151120_173550_819.jpg",
                    "paper": 0,
                    "topdate": 1448012161084,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 3]
                }, {
                    "uuid": "41a6730f-dc2c-472b-82ea-6e8544cc5b23",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012140018,
                    "modifyTime": 1448012161677,
                    "nuuid": null,
                    "body": "",
                    "title": "",
                    "firstImg": "{\"state\":3,\"height\":1312,\"width\":984,\"name\":\"img_20151120_173550_819.jpg\"}",
                    "firstRecord": "",
                    "fileList": "img_20151120_173550_819.jpg",
                    "paper": 0,
                    "topdate": 1448012161084,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 3]
                }, {
                    "uuid": "807f3e97-d7ca-4b02-9392-4f70e60e207e",
                    "userId": 0,
                    "lastUpdate": 1487064973218,
                    "status": "U",
                    "createTime": 1448012140018,
                    "modifyTime": 1448012161677,
                    "nuuid": null,
                    "body": "",
                    "title": "",
                    "firstImg": "{\"state\":3,\"height\":1312,\"width\":984,\"name\":\"img_20151120_173550_819.jpg\"}",
                    "firstRecord": "",
                    "fileList": "img_20151120_173550_819.jpg",
                    "paper": 0,
                    "topdate": 1448012161084,
                    "encrypt": 0,
                    "desktop": 0,
                    "fontSize": 0,
                    "files": {},
                    "groupStatus": null,
                    "firstImgSrc": null,
                    "firstRecordSrc": null,
                    "types": [0, 3]
                }],
                "encryptCount": 0,
                "count": 11164,
                "now": 1507689790586
            },
            "returnUrl": ""
        });
    });

    app.get(model.apiUrl.getnote,function(req, res){
        let json ;
        if(req.query.uuid == '228cb509-1dcd-4da8-bc35-897cbe9b91a3'){
            json = {
                "uuid": "228cb509-1dcd-4da8-bc35-897cbe9b91a3",
                "userId": 0,
                "lastUpdate": 1505984371530,
                "status": "U",
                "createTime": 1505095052611,
                "modifyTime": 1505984371522,
                "nuuid": "9091eb0d-3ec8-43b2-8c9c-25ca161ed589",
                "body": "[{\"state\":2,\"text\":\"test\"},{\"state\":1,\"text\":\"test2\"},{\"state\":1,\"text\":\"test3\"},{\"state\":1,\"text\":\"test4\"}]",
                "title": "",
                "firstImg": "",
                "firstRecord": "",
                "fileList": "",
                "paper": 0,
                "topdate": 0,
                "encrypt": 0,
                "desktop": 0,
                "fontSize": 18,
                "files": {},
                "groupStatus": "2",
                "firstImgSrc": null,
                "firstRecordSrc": null,
                "types": null
            }
        }else if(req.query.uuid == 'c8dcf61807c34bcf9add20b37bc977fe'){
            json = {
                "uuid": "c8dcf61807c34bcf9add20b37bc977fe",
                "userId": 0,
                "lastUpdate": 1487064973218,
                "status": "U",
                "createTime": 1448012225208,
                "modifyTime": 1448012233828,
                "nuuid": "591c979e-a04a-4e54-bd83-59a5e767555e",
                "body": "[{\"state\":4,\"name\":\"record_20151120_173705_224.mp3\"},{\"state\":0,\"text\":\"带特酷天我还破解甘\"}]",
                "title": "",
                "firstImg": "",
                "firstRecord": "{\"state\":4,\"name\":\"record_20151120_173705_224.mp3\"}",
                "fileList": "record_20151120_173705_224.mp3",
                "paper": 0,
                "topdate": 1448012286927,
                "encrypt": 0,
                "desktop": 0,
                "fontSize": 18,
                "files": {
                    "record_20151120_173705_224.mp3": "http://www.winqee.com/backup/moon1/audio/music.mp3"
                },
                "groupStatus": "-1",
                "firstImgSrc": null,
                "firstRecordSrc": null,
                "types": null
            }
        }else{
            json = {
                "uuid": "7cb4fbe0d2a940cfa77733bd2c90ab0a",
                "userId": 0,
                "lastUpdate": 1506761515096,
                "status": "U",
                "createTime": 1506311139770,
                "modifyTime": 1506761515069,
                "nuuid": "6717c548-5774-40bf-bdf5-caa09686edee",
                "body": "[{\"state\":0,\"text\":\"45vbvn\\nbbn \",\"span\":\"[]\"},{\"state\":1,\"text\":\"sdaslkkkdf\"},{\"state\":1,\"text\":\"65464\"},{\"state\":1,\"text\":\"\\n\"},{\"state\":3,\"name\":\"1506761024186_6055244.jpg\"}]",
                "title": "",
                "firstImg": "{\"state\":3,\"name\":\"1506761024186_6055244.jpg\",\"width\":77,\"height\":90}",
                "firstRecord": "",
                "fileList": "1506761024186_6055244.jpg",
                "paper": 0,
                "topdate": 0,
                "encrypt": 0,
                "desktop": 0,
                "fontSize": 18,
                "files": {
                    "1506761024186_6055244.jpg": "https://cloud-res.mzres.com/resources/sync/images/sec3_pic.png"
                },
                "groupStatus": "bd81303455854e7cb449e2e47c9f4cbd",
                "firstImgSrc": null,
                "firstRecordSrc": null,
                "types": null
            }
        }
        res.json(
            {
                "returnCode": 200,
                "returnMessage": "",
                "returnValue": json,
                "returnUrl": ""
            }
        );
    });

    app.get(model.apiUrl.gettags,function(req, res){
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                "userId": 6055244,
                "data": [{
                    "id": "-1",
                    "name": "全部",
                    "count": 2
                }, {
                    "id": "2",
                    "name": "工作",
                    "count": 0
                }, {
                    "id": "bd81303455854e7cb449e2e47c9f4cbd",
                    "name": "临时",
                    "count": 0
                }, {
                    "id": "dd1243f445b346998c841e10f03a170d",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "dd1243",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "dd1243f445b346998c841e10f03a",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "dd1243f445b34699841e10f03a170d",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "24345b346c841e10f03a170d",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "dd1243f445b341e10f03a170d",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "dd12446998c841e10f03a170d",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "dd1243fc841e10f03a170d",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "dd1243f44503a170d",
                    "name": "生活",
                    "count": 0
                }, {
                    "id": "-3",
                    "name": "加密",
                    "count": 0
                }, {
                    "id": "-2",
                    "name": "回收站",
                    "count": 0
                }]
            },
            "returnUrl": ""
        });
    });

    app.get(model.apiUrl.getnotebycontent,function(req, res){
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                "content": [
                    {
                        "uuid": "7cb4fbe0d2a940cfa77733bd2c90ab0a",
                        "userId": 0,
                        "lastUpdate": 1506761515096,
                        "status": "U",
                        "createTime": 1506311139770,
                        "modifyTime": 1506761515069,
                        "nuuid": null,
                        "body": "",
                        "title": "45vbvn\nbbn sdaslkkkdf65464",
                        "firstImg": "{\"state\":3,\"name\":\"1506761024186_6055244.jpg\",\"width\":77,\"height\":90}",
                        "firstRecord": "",
                        "fileList": "1506761024186_6055244.jpg",
                        "paper": 0,
                        "topdate": 0,
                        "encrypt": 0,
                        "desktop": 0,
                        "fontSize": 0,
                        "files": {},
                        "groupStatus": null,
                        "firstImgSrc": null,
                        "firstRecordSrc": null,
                        "types": [0, 1, 3]
                    }, {
                        "uuid": "241ebc22134448b9a3d2d9ee1907c8ef",
                        "userId": 0,
                        "lastUpdate": 1506566536806,
                        "status": "U",
                        "createTime": 1506311136024,
                        "modifyTime": 1506311136024,
                        "nuuid": null,
                        "body": "",
                        "title": "sdfsawe5rt435345",
                        "firstImg": "",
                        "firstRecord": "",
                        "fileList": "",
                        "paper": 0,
                        "topdate": 0,
                        "encrypt": 0,
                        "desktop": 0,
                        "fontSize": 0,
                        "files": {},
                        "groupStatus": null,
                        "firstImgSrc": null,
                        "firstRecordSrc": null,
                        "types": [0]
                    }, {
                        "uuid": "ad6be0d6a6984f3aba0bd3cbf3a06dea",
                        "userId": 0,
                        "lastUpdate": 1506566536806,
                        "status": "U",
                        "createTime": 1506311132327,
                        "modifyTime": 1506311132327,
                        "nuuid": null,
                        "body": "",
                        "title": "asdfrq4534534tfgvdb",
                        "firstImg": "",
                        "firstRecord": "",
                        "fileList": "",
                        "paper": 0,
                        "topdate": 0,
                        "encrypt": 0,
                        "desktop": 0,
                        "fontSize": 0,
                        "files": {},
                        "groupStatus": null,
                        "firstImgSrc": null,
                        "firstRecordSrc": null,
                        "types": [0]
                    }
                ],
                "encryptCount":0,
                "count":15,
                "now":1507603509443
            },
            "returnUrl":""
        });
    });

    app.get(model.apiUrl.recyclenote,function(req, res){
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                count:1,
                isSuccess:1
            }
        });
    });

    app.get(model.apiUrl.updatenote,function(req, res){
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": {
                "uuid": "301d7097-5c29-4cbb-b62f-5f9ae2bc83af",
                "userId": 0,
                "lastUpdate": 1505984371530,
                "status": "U",
                "createTime": 1505095052611,
                "modifyTime": 1505984371522,
                "nuuid": "9091eb0d-3ec8-43b2-8c9c-25ca161ed589",
                "body": "[{\"state\":0,\"text\":\"sss666\"},{\"state\":3,\"name\":\"1508403687687_1462350.jpg\"},{\"state\":0,\"text\":\"t\"}]",
                "title": "",
                "firstImg": "{\"state\":3,\"name\":\"1508403687687_1462350.jpg\"}",
                "firstRecord": "",
                "fileList": "",
                "paper": 0,
                "topdate": 0,
                "encrypt": 0,
                "desktop": 0,
                "fontSize": 18,
                "files": {},
                "groupStatus": "2",
                "firstImgSrc": "https://cloud.flyme.cn/c/browser/download/commonbrowser/note/1508403687687_1462350.jpg/301d7097-5c29-4cbb-b62f-5f9ae2bc83af",
                "firstRecordSrc": null,
                "types": null
            }
        });
    });
}
