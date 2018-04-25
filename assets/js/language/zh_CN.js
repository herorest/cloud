(function(root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['./config'],factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('./config'));
    } else {
        root.lanPack = factory(root.config);
    }
}(this, function(config) {
    var os = oversea;
    var lanPack = {
        year:config.year,
        lanArr:config.lanArr,
        language:'zh_CN',
        title:'魅族云服务',
        subtitle:'云服务',
        desc:'欢迎登录和注册魅族Flyme账号，您可以体验手机云服务功能，包括：在线下载应用，同步手机数据和查找手机等，让您的手机管理更加智能。',
        keyword:'魅族  meizu 云服务  查找手机',
        orient:'为了更好的体验，请使用竖屏浏览',
        index:{
            head:[
                { k:'Flyme6',v:'http://www.flyme.cn/flyme6/index.html'},
                { k:'下载',v:'http://www.flyme.cn/firmware.html'},
                { k:'云服务',v:'https://cloud.flyme.cn/'},
                { k:'开放平台',v:'http://open.flyme.cn/'},
                { k:'社区',v:'http://bbs.flyme.cn'},
                { k:'魅族官网',v:'http://www.meizu.com/'},
            ],
            intro_1:'高效、安全、便捷、您的云端数据管家',
            intro_2:'登录网页端',
            data_1:'高效的数据管理',
            data_2:'在任何电脑上登录 '+ (os ? config.host[1] : config.host[0]) +'，您就能在网页端进行个人数据的管理操作。在线编辑便签、联系人变更、误删数据恢复，Flyme 统统帮你搞定。',
            data_3:'高效的云服务',
            safe_1:'安全的手机防丢机制',
            safe_2:'开启“查找手机”功能后，可以在线对手机进行定位，手机号码跟踪，挂失后还可以进行锁定手机，自动拍照，禁止刷机等操作，全方位帮助您找回自己的爱机。',
            safe_3:'安全的云服务',
            quick_1:'便捷的个人数据迁移',
            quick_2:'Flyme 让个人数据迁移变得十分简单，只需要登录您的 Flyme 账号，所有个人数据从云端一键同步到您的新手机上。老手机上退出账号，可以一键清除所有个人数据，做到不留痕迹。',
            quick_3:'便捷的云服务',
            how_1:'如何使用云服务功能 ？',
            how_2:'在您的魅族手机上登录 ',
            how_3:'在设置 > Flyme账户中找到数据云同步，',
            how_4:'Flyme 账号打开数据云同步开关',
            how_5:'开启自动同步',
            begin_1:'现在就开始使用您的Flyme云服务吧',
            begin_2:'现在就开始',
            begin_3:'使用您的Flyme云服务吧',
            begin_4:'马上注册',
            foot:[
                { k:'关于魅族',v:'http://www.meizu.com/about.html'},
                { k:'工作机会',v:'http://hr.meizu.com'},
                { k:'联系我们',v:'http://www.meizu.com/contact.html'},
                { k:'法律声明',v:'http://www.meizu.com/legalStatement.html'},
                { k:'常见问题',v:'https://uc-res.meizu.com/resources/uc/wlogin/faq/html/index.html'}
            ]
        },
        customer:'在线客服'

    };

    lanPack.setOversea = function(val){
        os = val;
        return lanPack;
    }

    return lanPack;
}));
