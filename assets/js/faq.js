!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],n);else{var e=n("object"==typeof exports?require("jQuery"):t.jQuery);for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(this,function(t){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="/",n(0)}([function(t,n,e){"use strict";var r=e(1),o=e(2);e(71),e(73);var i=function(){this.init()};i.prototype={init:function(){this.start()},start:function(){r(".container").removeClass("opacity"),this.visiblePage(1),this.loadEjsTemple(),this.changePage(),this.bind()},bind:function(){var t=this;r.each(r("#teach_list").find("a"),function(){Event.addEvent(this,"end",function(){var n=r(this).attr("rel");t.getLan(n),history.pushState({detail:n},null,window.location.origin+window.location.pathname+"?t="+n)})}),window.addEventListener("popstate",function(){var n=history.state;n?t.getLan(n.detail):t.visiblePage(1)})},changePage:function(){var t=this.getName("t");this.getLan(t)},getLan:function(t){var n=o[t];t&&n&&(this.render(n),this.visiblePage(2))},visiblePage:function(t){1==t?(r(".home").show(),r(".list").hide()):(r(".home").hide(),r(".list").show())},getName:function(t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(n);return null!=e?unescape(e[2]):null},loadEjsTemple:function(){ejs.open="{{",ejs.close="}}"},render:function(t){var n=r(".template"),e=ejs.render(n.html(),t);r(".list").html(e)}};new i},function(n,e){n.exports=t},function(t,n,e){function r(t){return t&&t.__esModule?t:{default:t}}var o,i,u=e(3);r(u);!function(r,u){"use strict";o=u,i="function"==typeof o?o.call(n,e,n,t):o,!(void 0!==i&&(t.exports=i))}(void 0,function(t){return{syncList:{title:"同步逻辑",faq:[{q:"Flyme云同步机制是什么？",a:["1.该魅族账号在一台设备登录后首次使用云同步：系统会将该魅族账号云端的数据与本地的数据进行智能合并（不同的数据均保留，相同的数据只留一份），合并之后本地和云端数据保持一致。","2.同步成功一次后：当本地或者云端有数据变更时，系统会将数据变更同步到另外一端，即无论在哪一边修改删除了数据都会影响另一边。","3.在自动同步按钮打开的情况下，同步操作会自动完成，或者等待用户进行手动同步（刷机时双清或者退出账户时点击清空数据按钮不会影响云端数据）。"]},{q:"如果本地和云端同时进行了数据的变更会怎样？",a:["1. 变更的是同一个数据，比如本地和云端都修改了同一个联系人数据，那最后同步结果的数据会以该数据的最新的一次修改为准。","2. 变更的是不同数据，比如本地删除联系人A，云端增加联系人B，最终的同步结果为本地增加联系人B，云端删除联系人A。"]},{q:"自动同步的逻辑是什么？",a:"开启自动同步后，无论你在本机还是云端进行数据变更，都会第一时间同步到另一端，来保证数据的最新状态。当你丢失或者更换手机时，就可以将你最新的个人数据同步到新手机，而不用担心最新的数据忘记手动同步导致丢失。"},{q:"数据云同步功能耗电情况？",a:"数据云同步为非后台常驻应用，只有在发生数据变更的时候才会启动，其余时间一直处于休眠状态，另外，查看本应用耗电情况请到设置—电量管理—耗电排行—数据云同步（MzSyncService）查看。如果云服务耗电情况异常请升级到最新固件，基本能解决问题，还不行请联系客服。"},{q:"手动同步和自动同步的区别？",a:"手动同步和自动同步在同步逻辑上没有区别，只是打开自动同步后，同步服务在数据变更后会自动启动，而手动同步则需要自己点击同步按钮才能同步。使用自动同步可以省去你频繁手动操作的烦恼，而且能够避免手机丢失最新数据却来不及同步的情况。"},{q:"多台设备如何同步？",a:"多台设备共用一份云端数据，比如在设备A删除联系人A，首先会同步到云端，云端删除联系人A，然后云端同步到设备B、C、D，设备B、C、D删除联系人A，请注意，以上情况自动发生需要所有设备均打开自动同步按钮，不然需要用户进行手动同步操作。"}]},cloudBackup:{title:"桌面云备份",faq:[{q:"桌面云备份有什么作用？",a:"桌面云备份可以将你的桌面布局和桌面应用信息上传到云端生成一个备份文件（一台设备对应一个备份），当你更换新魅族手机或者刷机之后，能够快速为你恢复之前的桌面布局，在自动备份按钮打开的前提下，可以实时更新此备份文件，也可以手动备份进行更新。"},{q:"桌面云备份可以备份应用数据吗？比如游戏存档？",a:"桌面云备份只备份桌面布局和应用，不备份应用数据，如果要备份游戏存档之类的应用数据请使用本地备份功能，路径为：设置-关于手机-存储-备份手机数据。"},{q:"桌面云备份与本地备份有什么区别？",a:"桌面云备份是基于魅族账号的桌面备份服务，能够自动更新桌面备份数据（自动备份打开的前提下）并且备份数据存储到云端，在一台新设备上登录魅族账号即可恢复桌面。而本地备份是将用户当前的应用数据打包成一个备份包，在一台新设备上恢复数据需要将备份包导入到新手机，而且不能做到实时更新，仅能手动更新备份。"}]},cloudWebsite:{title:"云服务网站",faq:[{q:"怎么查看和修改云端数据？",a:'登录<a href="http://cloud.flyme.cn" target="_blank">cloud.flyme.cn</a>查看和修改你的数据，修改完成后，在打开自动同步的前提下，修改的数据会自动同步到手机。如果没有打开自动同步，修改会在下一次手动同步时同步到手机。'},{q:"云服务网站除了修改数据还有什么功能？",a:"除了查看及修改个人数据（需要进行短信验证）外，云服务还支持查找手机。"},{q:"云服务网站怎么保障我的隐私数据安全？",a:["1.要查看或修改隐私数据，则需要进行手机短信校验。","2.验证码短信不再同步，防止金融类短信通知泄露导致用户财产受损。","3.丢失手机后，可使用查找手机中的锁定功能和清除数据功能保障数据安全。"]}]},dataRecovery:{title:"数据恢复",faq:[{q:"错误操作删除了数据该怎么找回？",a:["1.搭载Flyme 6以上的系统可以在手机端数据云同步的“时光机”与“回收站”中找回数据。",'2.所有用户都可以电脑登录<a href="http://cloud.flyme.cn" target="_blank">cloud.flyme.cn</a>,进入回收站恢复你的数据，目前支持6个月内的数据找回。']},{q:"刷机后，进行同步操作发现删除了很多联系人？",a:"因为你的云端数据不是最新的，请打开自动同步或者在刷机前进行一次手动同步，没有同步过的数据丢失无法找回。"},{q:"清空了云端数据，发现本地数据也被删除？",a:"云端的数据变更也会同步到本地，如果想整理数据，请在云端或者本地一端整理后同步即可。"}]},timemachine:{title:"时光机",faq:[{q:"什么是时光机？",a:"时光机是一项基于时间轴的数据还原功能，你的联系人数据每一次改动都会有一个时间戳，时光机能够将你的联系人恢复到某一次改动的时间点。当你误删数据或者数据异常时，就可以将联系人数据恢复到曾经的状态，省去手动整理的麻烦。"},{q:"从哪里可以进入时光机？",a:["1.搭载flyme6以上版本的手机，设置—魅族账号—数据云同步—时光机",'2.所有用户都可以电脑登录<a href="http://cloud.flyme.cn" target="_blank">cloud.flyme.cn</a>进入云服务网站，联系人-时光机。']}]},other:{title:"其他",faq:[{q:"数据云同步耗电吗？",a:"数据云同步为非后台常驻应用，只有在发生数据变更的时候才会启动，其余时间一直处于休眠状态，另外，查看本应用耗电情况请到设置—电量管理—耗电排行—数据云同步（MzSyncService）查看。如果云服务耗电情况异常请升级到最新固件，基本能解决问题，还不行请联系客服。"},{q:"同步失败如何处理？",a:"绝大多数同步失败都与网络状况有关，请联接无线网络使用云同步，如果已经处于无线网络状态，请更换信号更好的无线网络进行重试。如果还有报错，请联系客服，客服会为你处理。"},{q:"有必要打开“仅无线网络下同步”按钮吗？",a:"不打开按钮的话，同步可以在数据流量或者无线网络下进行，打开后，同步只能在无线环境下进行。用户可以根据自己的流量套餐进行选择，同步需要消耗的流量非常小，请放心在数据流量环境下使用。"}]}}})},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(4),i=r(o),u=e(55),f=r(u),c="function"==typeof f.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};n.default="function"==typeof f.default&&"symbol"===c(i.default)?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n,e){t.exports={default:e(5),__esModule:!0}},function(t,n,e){e(6),e(50),t.exports=e(54).f("iterator")},function(t,n,e){"use strict";var r=e(7)(!0);e(10)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(8),o=e(9);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c),i<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(11),o=e(12),i=e(27),u=e(17),f=e(28),c=e(29),a=e(30),s=e(46),l=e(48),p=e(47)("iterator"),y=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",d="values",b=function(){return this};t.exports=function(t,n,e,m,g,x,w){a(e,n,m);var O,S,j,_=function(t){if(!y&&t in M)return M[t];switch(t){case h:return function(){return new e(this,t)};case d:return function(){return new e(this,t)}}return function(){return new e(this,t)}},P=n+" Iterator",E=g==d,q=!1,M=t.prototype,k=M[p]||M[v]||g&&M[g],A=k||_(g),F=g?E?_("entries"):A:void 0,T="Array"==n?M.entries||k:k;if(T&&(j=l(T.call(new t)),j!==Object.prototype&&(s(j,P,!0),r||f(j,p)||u(j,p,b))),E&&k&&k.name!==d&&(q=!0,A=function(){return k.call(this)}),r&&!w||!y&&!q&&M[p]||u(M,p,A),c[n]=A,c[P]=b,g)if(O={values:E?A:_(d),keys:x?A:_(h),entries:F},w)for(S in O)S in M||i(M,S,O[S]);else o(o.P+o.F*(y||q),n,O);return O}},function(t,n){t.exports=!0},function(t,n,e){var r=e(13),o=e(14),i=e(15),u=e(17),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,y=t&c.G,v=t&c.S,h=t&c.P,d=t&c.B,b=t&c.W,m=y?o:o[n]||(o[n]={}),g=m[f],x=y?r:v?r[n]:(r[n]||{})[f];y&&(e=n);for(a in e)s=!p&&x&&void 0!==x[a],s&&a in m||(l=s?x[a]:e[a],m[a]=y&&"function"!=typeof x[a]?e[a]:d&&s?i(l,r):b&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&u(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(16);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(18),o=e(26);t.exports=e(22)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(19),o=e(21),i=e(25),u=Object.defineProperty;n.f=e(22)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(20);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(22)&&!e(23)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(20),o=e(13).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(20);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports=e(17)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(31),o=e(26),i=e(46),u={};e(17)(u,e(47)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(19),o=e(32),i=e(44),u=e(41)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,n=e(24)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(45).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;r--;)delete a[c][i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(18),o=e(19),i=e(33);t.exports=e(22)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(34),o=e(44);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(28),o=e(35),i=e(38)(!1),u=e(41)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=u&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(36),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(35),o=e(39),i=e(40);t.exports=function(t){return function(n,e,u){var f,c=r(n),a=o(c.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(8),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(42)("keys"),o=e(43);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(13),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){t.exports=e(13).document&&document.documentElement},function(t,n,e){var r=e(18).f,o=e(28),i=e(47)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(42)("wks"),o=e(43),i=e(13).Symbol,u="function"==typeof i,f=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};f.store=r},function(t,n,e){var r=e(28),o=e(49),i=e(41)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(51);for(var r=e(13),o=e(17),i=e(29),u=e(47)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){"use strict";var r=e(52),o=e(53),i=e(29),u=e(35);t.exports=e(10)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){n.f=e(47)},function(t,n,e){t.exports={default:e(56),__esModule:!0}},function(t,n,e){e(57),e(68),e(69),e(70),t.exports=e(14).Symbol},function(t,n,e){"use strict";var r=e(13),o=e(28),i=e(22),u=e(12),f=e(27),c=e(58).KEY,a=e(23),s=e(42),l=e(46),p=e(43),y=e(47),v=e(54),h=e(59),d=e(60),b=e(61),m=e(64),g=e(19),x=e(35),w=e(25),O=e(26),S=e(31),j=e(65),_=e(67),P=e(18),E=e(33),q=_.f,M=P.f,k=j.f,A=r.Symbol,F=r.JSON,T=F&&F.stringify,N="prototype",I=y("_hidden"),L=y("toPrimitive"),C={}.propertyIsEnumerable,R=s("symbol-registry"),B=s("symbols"),D=s("op-symbols"),W=Object[N],Q="function"==typeof A,z=r.QObject,J=!z||!z[N]||!z[N].findChild,G=i&&a(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=q(W,n);r&&delete W[n],M(t,n,e),r&&t!==W&&M(W,n,r)}:M,K=function(t){var n=B[t]=S(A[N]);return n._k=t,n},Y=Q&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},U=function(t,n,e){return t===W&&U(D,n,e),g(t),n=w(n,!0),g(e),o(B,n)?(e.enumerable?(o(t,I)&&t[I][n]&&(t[I][n]=!1),e=S(e,{enumerable:O(0,!1)})):(o(t,I)||M(t,I,O(1,{})),t[I][n]=!0),G(t,n,e)):M(t,n,e)},$=function(t,n){g(t);for(var e,r=b(n=x(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},H=function(t,n){return void 0===n?S(t):$(S(t),n)},V=function(t){var n=C.call(this,t=w(t,!0));return!(this===W&&o(B,t)&&!o(D,t))&&(!(n||!o(this,t)||!o(B,t)||o(this,I)&&this[I][t])||n)},X=function(t,n){if(t=x(t),n=w(n,!0),t!==W||!o(B,n)||o(D,n)){var e=q(t,n);return!e||!o(B,n)||o(t,I)&&t[I][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=k(x(t)),r=[],i=0;e.length>i;)o(B,n=e[i++])||n==I||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===W,r=k(e?D:x(t)),i=[],u=0;r.length>u;)!o(B,n=r[u++])||e&&!o(W,n)||i.push(B[n]);return i};Q||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===W&&n.call(D,e),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),G(this,t,O(1,e))};return i&&J&&G(W,t,{configurable:!0,set:n}),K(t)},f(A[N],"toString",function(){return this._k}),_.f=X,P.f=U,e(66).f=j.f=Z,e(63).f=V,e(62).f=tt,i&&!e(11)&&f(W,"propertyIsEnumerable",V,!0),v.f=function(t){return K(y(t))}),u(u.G+u.W+u.F*!Q,{Symbol:A});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)y(nt[et++]);for(var nt=E(y.store),et=0;nt.length>et;)h(nt[et++]);u(u.S+u.F*!Q,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=A(t)},keyFor:function(t){if(Y(t))return d(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!Q,"Object",{create:H,defineProperty:U,defineProperties:$,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),F&&u(u.S+u.F*(!Q||a(function(){var t=A();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Y(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&m(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!Y(n))return n}),r[1]=n,T.apply(F,r)}}}),A[N][L]||e(17)(A[N],L,A[N].valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(43)("meta"),o=e(20),i=e(28),u=e(18).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(23)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},y=function(t){return a&&v.NEED&&c(t)&&!i(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:y}},function(t,n,e){var r=e(13),o=e(14),i=e(11),u=e(54),f=e(18).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(33),o=e(35);t.exports=function(t,n){for(var e,i=o(t),u=r(i),f=u.length,c=0;f>c;)if(i[e=u[c++]]===n)return e}},function(t,n,e){var r=e(33),o=e(62),i=e(63);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&n.push(u);return n}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(37);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(35),o=e(66).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(34),o=e(44).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(63),o=e(26),i=e(35),u=e(25),f=e(28),c=e(21),a=Object.getOwnPropertyDescriptor;n.f=e(22)?a:function(t,n){if(t=i(t),n=u(n,!0),c)try{return a(t,n)}catch(t){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n){},function(t,n,e){e(59)("asyncIterator")},function(t,n,e){e(59)("observable")},function(t,n){},,function(t,n){}])});