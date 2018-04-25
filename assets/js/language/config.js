(function(root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.config = factory();
    }
}(this, function() {
    return {
        year:new Date().getFullYear(),
        lanArr:[
            {k:'zh_CN',v:'简体中文'},
            {k:'zh_HK',v:'繁體香港'},
            {k:'zh_TW',v:'繁體台湾'},
            {k:'en_US',v:'English'}
        ],
        host:['cloud.flyme.cn','cloud.in.flyme.cn']
    };;
}));
