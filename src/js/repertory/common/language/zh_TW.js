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
    var lanPack = {
        secData_1: '高效的数据管理',
        secData_2: '在任何电脑上登录 cloud.flyme.cn，您就能在网页端进行个人数据的管理操作。在线编辑便签、联系人变更、误删数据恢复，Flyme 统统帮你搞定。',
    };

    return lanPack;
}));
