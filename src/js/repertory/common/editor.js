 var util = {
    encodeHtml: function (str) {
        return util.formatHtml(str, 'en');
    },
    decodeHtml: function (str) {
        return util.formatHtml(str, 'de');
    },
    allDecodeHtml: function (str) {
        var r = util.formatHtml(str, 'de');
        return r.replace(new RegExp('<br/?>|<BR/?>', 'g'), '\\n');
    },
    formatHtml: function (str, type) {//\n这个比较复杂，不在此处处理
        var spes = ['&', '<', '>', ' ', '\'', '\"', '￠', '£', '¥', '€'];
        var htmls = ['&amp;', '&lt;', '&gt;', '&nbsp;', '&#39;', '&quot;', '&cent;', '&pound;', '&yen;', '&euro'];
        if (!str || str.length == 0) return "";
        if (type == 'en') {
            for (var i = 0, ilen = spes.length; i < ilen; i++) {
                str = str.replace(new RegExp(spes[i], 'g'), htmls[i]);
            }
        } else {
            for (var i = 0, ilen = htmls.length; i < ilen; i++) {
                str = str.replace(new RegExp(htmls[i], 'g'), spes[i]);
            }
        }
        return str;
    },
    getUrl: function (url) {
        var tks = document.getElementById('mz_csrf_tks');
        if (url && url.indexOf('tkscsrf') === -1 && url.indexOf('/c/browser') >= 0 && tks && tks.value) {
            return url += (url.indexOf('?') > 0 ? '&tkscsrf=' : '?tkscsrf=') + tks.value;
        }
        return url;
    }
};

function checkbox(opt) {
    var defaults = {
        chkCls: "active",
        unChkCls: "",
        spanCls: "checkbox clearfix",
        click: null,
        host: null,
        serverInit: false,
        rule:null,
        html: '<span class="checkbox-pic"><i class="i_icon"></i></span>'
    };
    this.options = $.extend(defaults, opt);
    var proto = this,
        host = this.options.host,
        all = host.length;
    if (!all) return;
    if (this.options.serverInit) {
        this._fastBind2();
    } else if (all > 15) {
        this._fastBind1();
    } else {
        for (var i = 0; i < all; i++) {
            this.bind($(host[i]), false);
        }
    }
}

checkbox.prototype = {
    chose: function (cbox, chose, nochose) {
        var opt = this.options,
            pic = $(cbox.parent().find("span")[0]);
        if (!nochose && (chose || !pic.hasClass(opt.chkCls))) {
            pic.removeClass(opt.unChkCls).addClass(opt.chkCls);
            cbox.attr("checked", "checked");
        } else {
            pic.removeClass(opt.chkCls).addClass(opt.unChkCls);
            cbox.removeAttr("checked");
        }
    },
    _fastBind1: function () {
        var _self = this,
            opt = _self.options,
            host = opt.host,
            all = host.length;
        for (var i = 0; i < all; i++) {
            var cbox = $(host[i]),
                pic = $(this.options.html);
            cbox.hide().parent().prepend(pic);
            _self._oBind(cbox, pic, opt.chkCls, opt.unChkCls);
        }
        setTimeout(function () {
            for (var j = 0; j < all; j++) {
                var cbox = $(host[j]),
                    span = cbox.parent();
                _self._eBind(cbox, span, false, opt.spanCls);
            }
        }, 10);
    },
    _fastBind2: function () {
        var _self = this,
            host = _self.options.host,
            spanCls = _self.options.spanCls,
            all = host.length;
        for (var j = 0; j < all; j++) {
            var cbox = $(host[j]),
                span = cbox.parent();
            _self._eBind(cbox, span, false, spanCls);
        }
    },
    _eBind: function (cbox, span, isnew, spanCls) {
        var proto = this;
        if (isnew) proto.options.host.push(cbox[0]);
        var _click = function (e) {
            var rs = true;
            if(proto.options.rule){
                rs = proto.options.rule.call(cbox[0]);
            }
            if (!rs) {
                nAlert('你之前新建的联系人还未进行编辑', '提示');
                return;
            }
            proto.chose(cbox);
            return proto.options.click && proto.options.click.call(cbox[0], {
                value: cbox.val(),
                checked: cbox.attr("checked")
            }, e);
        };
        span.click(_click).addClass(spanCls);
    },
    _oBind: function (cbox, pic, chkCls, unChkCls) {
        if (cbox.get(0).checked) {
            pic.addClass(chkCls);
        } else {
            pic.addClass(unChkCls);
        }
    },
    bind: function (cbox, isnew) {
        var pic = $(this.options.html),
            span = cbox.hide().parent().prepend(pic),
            opt = this.options,
            host = opt.host;
        this._oBind(cbox, pic, this.options.chkCls, this.options.unChkCls);
        this._eBind(cbox, span, isnew, opt.spanCls);
    },
    val: function (j) {
        if (j && j.length) {
            this.setVal(j);
        } else {
            return this.getVal();
        }
    },
    setVal: function (j) {
        if (!j || !j.length) return;
        var host = this.options.host;
        for (var i = 0, k = j.length; i < k; i++) {
            for (var ci = 0, ck = host.length; ci < ck; ci++) {
                if (host[ci].value == j[i]) this.chose($(host[ci]), true);
            }
        }
    },
    getVal: function () {
        var host = this.options.host,
            ay = [];
        for (var i = 0, j = host.length; i < j; i++) {
            if (host[i].checked) ay.push(host[i].value);
        }
        return ay;
    },
    getUncheckVal:function(){
    	 var host = this.options.host,
         	ay = [];
         for (var i = 0, j = host.length; i < j; i++) {
             if (!host[i].checked) ay.push(host[i].value);
         }
         return ay;
    },
    checkAll: function () {
        var host = this.options.host;
        for (var i = 0, j = host.length; i < j; i++) {
            this.chose($(host[i]), true);
        }
    },
    uncheckAll: function () {
        var host = this.options.host;
        for (var i = 0, j = host.length; i < j; i++) {
            this.chose($(host[i]), true, true);
        }
    },
    uncheck: function (val) {
        if (!val) return;
        var host = this.options.host;
        for (var i = 0, j = host.length; i < j; i++) {
            if (host[i].value == val) {
                this.chose($(host[i]), true, true);
                return;
            }
        }
    },
    size: function () {
        return this.options.host.length;
    }
};

var ua = navigator.userAgent.toLowerCase();
var isIe = !!window.ActiveXObject || "ActiveXObject" in window;
var isIe6 = /msie 6/i.test(ua);
var isIe7 = /msie 7/i.test(ua);
var isIe7 = /msie 7/i.test(ua);
var isIe8 = /msie 8/i.test(ua);
var isIe9 = /msie 9/i.test(ua);
var isIe10 = /msie 10/i.test(ua);
var isIe11 = /rv:11/i.test(ua);
var isIe12 = /rv:12/i.test(ua);
var isMozilla = /firefox/.test(ua);
var isWebkit = ua.indexOf(' applewebkit/') > -1;
isIe = !isIe11 && isIe;

(function($) {
    var ua = navigator.userAgent.toLowerCase(),
        toListCount = 0,
        maxToListCount = 10000,
        isIe = !!window.ActiveXObject || "ActiveXObject" in window;

    function _getValue(n) {
        switch (n.nodeName.toLowerCase()) {
            case '#text':
                return n.nodeValue;
            case 'img':
                return $(n).attr("src");
            default:
                return $(n).text();
        }
    }
    var Json = function() {};
    Json.prototype = {
        concat2Text: function(prev, current) {
            prev.text += current.text;
            prev.span = [];
            return prev;
        },
        concatText: function(list) { //整体合并优化
            var prev = null,
                one = null;
            for (var i = 0, ilen = list.length; i < ilen; i++) {
                one = list[i];
                if (one.state == 0) {
                    if (prev) { //进行合并
                        one = this.concat2Text(prev, one);
                        prev = one;
                        i -= 1;
                        ilen -= 1;
                        list.splice(i, 2, one);
                    } else {
                        prev = one;
                    }
                } else {
                    prev = null;
                }
            }
        },
        toList: function(n) {
            if (toListCount > maxToListCount) {
                alert('数据解析出错');
                return [];
            }
            toListCount++;
            var list = [];
            var _recursion = function(n) {
                var _list = [];
                var ns = n.childNodes;
                if (ns != null) {
                    for (var i = 0, ilen = ns.length; i < ilen; i++) {
                        _list = _list.concat(this.toList(ns[i]));
                    }
                }
                return _list;
            };
            var _dealBlock = function(n) {
                var text = '',
                    nodeName = '';
                if (n.previousSibling) {
                    nodeName = n.previousSibling.nodeName.toLowerCase();
                    if (nodeName == '#text') {
                        if (isIe || $(n).text() != '') {
                            list.push({
                                state: 0,
                                text: '\n'
                            });
                        }
                    }
                }
                list = list.concat(_recursion.call(this, n));
                if (n.nextSibling) {
                    nodeName = n.nextSibling.nodeName.toLowerCase();
                    if ((nodeName != 'img' && nodeName != 'input' && !$(n.nextSibling).attr('data-type') && $(n.nextSibling).text() != '') || nodeName == '#text') { //下一个节点为文本
                        list.push({
                            state: 0,
                            text: '\n'
                        });
                    }
                }
                this.concatText(list);
            };
            switch (n.nodeName.toLowerCase()) {
                case '#text': //文本
                    if (n.previousSibling && n.previousSibling.nodeName.toLowerCase() == 'input' && $(n.previousSibling).attr('type') == 'checkbox') { //清单复选框后面的节点
                        break;
                    }
                    var val = _getValue(n);
                    if (val == '') {
                        return list;
                    }
                    list.push({
                        state: 0,
                        text: val
                    });
                    break;
                case 'img':
                    var val = _getValue(n);
                    if (val == '') {
                        return list;
                    }
                    var o = {
                        state: 3,
                        name: val
                    };
                    var w = $(n).attr('data-width');
                    var h = $(n).attr('data-height');
                    if (w) {
                        o.width = parseInt(w);
                    }
                    if (h) {
                        o.height = parseInt(h);
                    }
                    list.push(o);
                    break;
                case 'p':
                    _dealBlock.call(this, n);
                    break;
                case 'div':
                    if ($(n).attr("data-type") == 'list') { //清单
                        var tempList = _recursion.call(this, n);
                        var $checkbox = $(n).find('input[type="checkbox"]');
                        if ($checkbox.length == 0) { //清单结构不正确，当做普通div处理
                            list.concat(tempList);
                            return list;
                        }
                        this.concatText(tempList);

                        var one = tempList[0];
                        if (tempList.length > 1) {
                            one.text += tempList[1].text;
                        }
                        if ($checkbox.prop('checked') == true) { //勾选了的清单
                            one.state = 2;
                        } else { //未勾选
                            one.state = 1;
                        }
                        list.push(one);
                    } else
                    if ($(n).attr("data-type") == 'title') {
                        //do nothing
                    } else
                    if ($(n).attr("data-type") == 'audio') { //录音
                        list.push({
                            state: 4,
                            name: $(n).attr("data-audio")
                        });
                    } else {
                        // list = list.concat(_recursion.call(this, n));
                        // list.push({state: 0, text: '\n'});
                        _dealBlock.call(this, n);
                    }
                    break;
                case 'span':
                    list = list.concat(_recursion.call(this, n));
                    break;
                case 'br':
                    list.push({
                        state: 0,
                        text: '\n'
                    });
                    break;
                case 'input':
                    if ($(n).attr('type') == 'checkbox') { //清单
                        var text = "";
                        if (n.nextSibling) {
                            var nodeName = n.nextSibling.nodeName.toLowerCase();
                            if (nodeName == '#text' || nodeName == 'big' || nodeName == 'small') {
                                text = _getValue(n.nextSibling);
                            }
                        }
                        if ($(n).prop('checked') == true) { //勾选了的清单
                            list.push({
                                state: 2,
                                text: text
                            });
                        } else {
                            list.push({
                                state: 1,
                                text: text
                            });
                        }
                    }
                    break;
                default:
                    return list;
            }
            return list;
        }
    };
    var Html = function() {};
    Html.prototype = {
        toHtml: function(json) {
            if (!json) return '';
            var list = null,
                one = null,
                str = '';
            try {
                list = JSON.parse(json);
            } catch (e) {
                alert('数据格式不正确');
            }
            if (!list) return '格式不正确';
            for (var i = 0, ilen = list.length; i < ilen; i++) {
                one = list[i];
                str += this.dealLinSkip(one, this.fromItem(list[i]));
            }
            return str;
        },
        dealLinSkip: function(item, str) {
            if (str.indexOf("\n") != -1) {
                var input = '',
                    div = '';
                if (item['state'] == 1 || item['state'] == 2) {
                    if (str.indexOf(div) != -1) {
                        div = '<div data-type="list">';
                        str = str.replace(div, '');
                        str = str.substring(0, str.length - 6);
                    }
                }
                var strs = str.replace(/\n/g, "<br />");
                return div + input + strs + (div ? '</div>' : '');
            } else {
                return str;
            }
        },
        fromItem: function(item) {
            switch (item['state']) { //0是普通的文本；1是清单项，没有勾选；2是勾选过的清单；3是图片；4是录音
                case 0:
                    return this.fromState0(item);
                case 1:
                case 2:
                    return this.fromState12(item);
                case 3:
                    return this.fromState3(item);
                case 4:
                    return this.fromState4(item);
            }
            return "";
        },
        encodeHtml: function(text) {
            return util.encodeHtml(text);
        },
        fromState0: function(item) { //文本
            return this.encodeHtml(item['text']);
        },
        fromState12: function(item) { //清单
            var text = util.encodeHtml(this.fromState0(item));
            var checked = '';
            if (item['state'] == 1) { //没有勾选的清单
                checked = '';
            } else {
                checked = ' checked="checked"';
            }
            return '<div data-type="list"><input type="checkbox"' + checked + '/>' + text + '</div>';
        },
        fromState3: function(item) { //图片
            var w = item['width'],
                h = item['height'],
                wstr = '',
                hstr = '',
                imgTk = (isIe && $.browser.version != 8.0) ? 'style="display:inline-block"' : '';

            if (w) {
                wstr = 'data-width=' + w + ' ';
            }
            if (h) {
                hstr = 'data-height=' + h + ' ';
            }
            var url = G.cFiles && G.cFiles[item['name']];
            if (!url) {
                url = '/images/wait.gif';
            }
            return '<img ' + imgTk + wstr + hstr + 'src="' + url + '"/>';
        },
        fromState4: function(item) { //录音
            var audio = G.cFiles ? G.cFiles[item['name']] : item['name'];
            return '<div class="audio" tabindex="-1" data-type="audio" data-audio="' + audio + '"><div class="audioShow"></div><div class="audioPause"></div><div class="audioSeekBar"><div class="audioPlayBar"></div></div><span class="audioTime"></span><a href="' + audio + '" class="audioSave">保存</a></div>';
        }
    };
    window.HJson = function() {
        this.json = new Json();
        this.html = new Html();
    };
    HJson.prototype = {
        isEmpty: function($o) {
            var text = isIe ? $o.text().replace(/\s/, "") : $o.text();
            if (!text && !$o.find('img').length && !$o.find('div[data-type=list]').length && !$o.find('div[data-type=audio]').length) {
                return true;
            }
            return false;
        },
        toJson: function(html) {
            var $h = $(html),
                list = [];
            if (this.isEmpty($h)) {
                return '';
            }
            for (var i = 0, ilen = $h.length; i < ilen; i++) {
                toListCount = 0;
                list = list.concat(this.json.toList($h[i]));
            }
            this.json.concatText(list);
            var one = null;
            for (var i = 0, ilen = list.length; i < ilen; i++) {
                one = list[i];
                if (one.span) {
                    one.span = JSON.stringify(one.span);
                }
            }
            return list;
        },
        toJsonStr: function(html) {
            var jsonStr = '';
            var json = this.toJson(html);
            if (json) {
                jsonStr = JSON.stringify(json);
            }
            if (!jsonStr || jsonStr == '[]' || jsonStr == '[{"state":0,"text":"\n"}]') {
                jsonStr = '[{"state":0,"text":""}]';
            }
            return jsonStr;
        },
        toHtml: function(json) {
            return this.html.toHtml(json);
        }
    };
}(Zepto));

var G = {
    'memoStatus': -1,//分组类型
    'memoStatus_save': -1,//分组类型
    'currGId': null,//当前选中分组
    'statusValue': 'L',//页面状态 L:列表/D:详情
    'statusSelect': {},
    'initStatus': false,
    'initGroup': false,
    'interval': null,
    'hJson': new HJson(),
    'oldJson': {},
    'isIe': !!window.ActiveXObject || "ActiveXObject" in window,
    'cFiles': {},
    'fontSize': 0,
    'oldFontSize': 0,
    'rSly': {},
    'focusNow': false,
    'namespace': 'plugin_sly',
    'nowDate': new Date(),
    'status': [
        {
            id: -1,
            name: '全部'
        },
        {
            id: -3,
            name: '加密'
        },
        {
            id: -2,
            name: '回收站'
        }
    ]
};

var Editor = function(data,callback,refresh){
    this.editorInfo = {
        editting: false,
        preview: true,
        focusObj: null,
        canBlur: true
    };
    this.callback = callback;
    this.refresh = refresh;
    this.init(data);
}

Editor.prototype = {
    init:function(data){
        $('#dialogContent').html('');
        this.getMemoDialogs(data);
    },
    getMemoDialogs: function (data) {
        var _this = this,
            temp = null;
        var _fill = function (data) {
            var rvalue = data,
                status = rvalue.groupStatus;
            G.cFiles = rvalue.files;
            for (var p in G.cFiles) {
                if (G.cFiles.hasOwnProperty(p)) {
                    G.cFiles[p] = util.getUrl(G.cFiles[p], true);
                }
            }
            if (!rvalue) {
                return;
            }

            var body = G.hJson.toHtml(rvalue.body),
                title = rvalue.title;
            if (!rvalue.fontSize) {
                temp = 18;
            } else {
                temp = rvalue.fontSize;
            }
            G.oldFontSize = G.fontSize = temp;
            _this.createEditors(body, ['audio', 'list']);


            console.log(body);

            if (G.isIe) {//ie8有延迟问题
                setTimeout(function () {
                    _this.createAudio();
                }, 300);
            } else {
                _this.createAudio();
            }
            // if (!$('#dialogContent .wrap-edit').length) {//保证内容为空时，还是可以进行录入编辑
            //     _this.createEditor();
            // }
            // if (!$('#dialogContent>div:last').hasClass('jHtmlArea')) {//保证最后面永远可以进行录入编辑
            //     _this.createEditor();
            // }

            _this.initHtmlAreaEvent();
            _this.createLayout(data.uuid);

            var Json = _this.toJson();
            setTimeout(function () {
                G.oldJson = Json;
                if(_this.callback) _this.callback.call(this);
            }, 100);
        };
        _fill(data);
    },

    createEditor: function (callBack, dealPos) {
        var _this = this;
        var $textArea = $('<textArea id="' + this.createId() + '"></textArea>').hide();
        if ($.isFunction(dealPos)) {
            dealPos.call(_this, $textArea);
        } else {
            $('#dialogContent').append($textArea);
        }
        $textArea.htmlarea({
            loaded: function () {
                if ($.isFunction(callBack)) callBack.call(this, arguments);
            },
            focus: function () {
                $('.insert-btn').show();
                _this.focusHArea($textArea);
            },
            refresh:function(){
                _this.refresh();
            }
        });
        $textArea.htmlarea('initEditor');
        $textArea.htmlarea('initEvent');
        $textArea.htmlarea('callback');
        return $textArea;
    },
    createEditors: function (body, typeArr) {
        var r = [
                {html: body, type: 'all'}
            ],
            one = null,
            eCount = 0,
            editor = null,
            $editor = null,
            $con = null,
            $input = null;
        var _fillText = function (html) {
            editor = this.createEditor(function () {
                this.html(html, true);
            });
            eCount++;
        };
        if (!body) {
            _fillText.call(this, "");
        } else {
            for (var i = 0, ilen = typeArr.length; i < ilen; i++) {
                one = typeArr[i];
                r = this.split(r, one);
            }
            for (var n = 0, nlen = r.length; n < nlen; n++) {
                one = r[n];
                if (one.type == 'all') {
                    _fillText.call(this, one.html);
                } else if (one.type == 'list') {
                    $con = $('<div>').html(one.html);
                    $input = $con.find('input[type=checkbox]').clone();
                    _fillText.call(this, $con.text());
                    $editor = $(editor[0].jhtmlareaObject.container).find(".wrap-edit");
                    var listWidth = !isWebkit ? 52 : 45;
                    $editor.css({width: $editor.width() - listWidth});
                    $input.insertBefore($editor);
                    new checkbox($.extend({}, {
                        click: function () {
                            return false;
                        }
                    }, {
                        host: $input
                    }));
                } else {
                    $('#dialogContent').append($(one.html));
                }
            }
        }
    },
    createList: function (item, $o) {
        var checked = '';
        if (item['state'] == 1) {//没有勾选的清单
            checked = '';
        } else {
            checked = ' checked="checked"';
        }
        var $input = $('<input type="checkbox"' + checked + '/>');
        var editor = this.createEditor(function () {
            this.html(item.text, true);
            $(this.getDoc()).focus();
        }, function ($textArea) {
            $textArea.insertAfter($o);
        });
        var $editor = $(editor[0].jhtmlareaObject.container).find(".wrap-edit");
        $input.insertBefore($editor);
        var listWidth = !isWebkit ? 52 : 45;
        $editor.css({width: $editor.width() - listWidth});
        new checkbox($.extend({}, {
            click: function () {
                return false;
            }
        }, {
            host: $input
        }));
        return editor;
    },
    createAudio: function () {
        var _this = this;
        _this.players = [];
        $('.audio').each(function (index, e) {
            _this.players.push(new Player($(this)));
        });
    },
    createId: function () {
        var index = 0;
        return function () {
            return 'textArea_' + (index++);
        };
    }(),
    createLayout: function (id) {

    },
    toJson: function () {
        var body = '',
            temp = null,
            oldBody = null,
            $eContainer = $('#dialogContent');

        $eContainer.find('div').each(function () {
            if ($(this).hasClass('jHtmlArea')) {//含编辑器的
                temp = $(this).find('input[type=checkbox]');
                if (temp.length) {//清单
                    if (!temp.prop('checked')) {//没有勾选
                        temp = '';
                    } else {
                        temp = ' checked="checked"';
                    }
                    body += '<div data-type="list"><input type="checkbox"' + temp + '/>' + $(this).find('textArea').htmlarea('html') + '</div>';
                } else {//普通文本和图片
                    body += $(this).find('textArea').htmlarea('toHtmlString');
                }
            } else if ($(this).hasClass('audio')) {//录音
                body += this.outerHTML;
            }
        });
        oldBody = body;
        temp = $('<div>').html(body);
        if ($('.audio', temp).length > 100) {
            return '录音数量超过100个';
        }
        var $tInput = $('#dialogTitleInput');
        var fontSize = G.fontSize;
        var r = {
            title: $tInput.hasClass('emptyInput') ? '' : $tInput.val(),
            bodyHtml: oldBody,
            body: G.hJson.toJsonStr(temp),
            uuid: (!G.currGId || G.currGId == 'undefined') ? '' : G.currGId,
            firstImg: temp.find('img'),
            firstRecord: temp.find('.audio'),
            fontSize: fontSize,
            groupUuid: ''
        };
        $('.audio', temp).remove();

        //TODO 列表如果要加入清单的话，需要修改这个方法的bodyText值
        r.bodyText = temp.text();
        return r;
    },
    initHtmlAreaEvent: function () {
        var $eContainer = $('#dialogContent');
        var $audio = $('.audio', $eContainer),
            _this = this;
        if (G.isIe) {
            this.addFAndBEvent($eContainer.find('.checkboxPic '));
        }
        $audio.on('keydown', function (e) {
            var $this = $(this);
            if (!$this.is(':focus')) {
                return false;
            }
            var _focus = function ($o, type) {
                if (!$o.length) {
                    return;
                }
                if ($o.attr('data-type') == 'audio') {
                    $o.focus();
                    $o.addClass('audioSelected');
                } else {
                    var $textArea = $o.find('textArea');
                    $($textArea.htmlarea('getDoc')).focus();
                    var range = $textArea.htmlarea('getRange');
                    var selection = $textArea.htmlarea('getSelection');
                    var o = null;
                    if (type == 'b') {
                        $textArea.htmlarea('html', $textArea.htmlarea('toHtmlString') + '<span id="_editor_id_temp_audio"></span>');
                        o = document.getElementById('_editor_id_temp_audio');
                        $.htmlarea.move(o, range, selection);
                    } else {
                        $textArea.htmlarea('html', '<span id="_editor_id_temp_audio"></span>' + $textArea.htmlarea('toHtmlString'));
                        o = document.getElementById('_editor_id_temp_audio');
                        $.htmlarea.move(o, range, selection);
                    }
                    $(o).remove();
                }
            };
            switch (e.keyCode) {
                case 8://backspace
                    _this.editorInfo.canBlur = false;
                    _focus($this.prev(), 'b');
                    $this.remove();
                    _this.editorInfo.canBlur = true;
                    return false;
                case 46://delete
                    _this.editorInfo.canBlur = false;
                    _focus($this.next(), 'd');
                    $this.remove();
                    _this.editorInfo.canBlur = true;
                    break;
            }
        });
        this.addFAndBEvent($audio);
        if (!G.isIe || $.browser.version != '8.0') {
            $audio.click(function () {
                return false;
            });
        }
    },
    addFAndBEvent: function ($o) {
        var _this = this;
        $o.focus(function () {//focus
            if (this.id == "dialogTitleInput") {
                _this.focusHArea(undefined, true);
            }
        });
    },
    focusHArea: function (me, hideBtn) {
        var _this = this;
        _this.editorInfo.focusObj = me;
        _this.editorInfo.preview = false;
    },
    split: function (arr, type) {
        var r = [],
            one = null,
            $container = null,
            next = null,
            temp = null,
            outerHTML = null,
            _this = this,
            regexp = null;
        for (var i = 0, ilen = arr.length; i < ilen; i++) {
            one = arr[i];
            if (one.type != 'all') {
                r.push(one);
                continue;
            }
            next = one.html;
            if (type == 'audio') {
                regexp = new RegExp('<div[^<>]*data-type=\\"' + type + '\\"[^<>]*>.*?保存<\/a><\/div>', 'g');
            } else {
                regexp = new RegExp('<div[^<>]*data-type=\\"' + type + '\\"[^<>]*>.*?<\/div>', 'g');
            }
            temp = one.html.match(regexp);
            if (temp) {
                $.each(temp, function (index, outerHTML) {
                    if (!next)return;
                    temp = next.indexOf(outerHTML);
                    if (temp > 0) {
                        r.push({html: next.substring(0, temp), type: 'all'});
                    }
                    r.push({html: outerHTML, type: type});
                    next = next.substring(temp + outerHTML.length);
                });
            }
            if (next) {
                r.push({html: next, type: 'all'});
            }
        }
        return r;
    },
    blurHArea: function (isPassivity,options) {
        var _this = this;
        //_this.editorInfo.preview = false;
        if (!_this.editorInfo.canBlur) {
            return false;
        }
        var oldJson = G.oldJson;
        var json = this.toJson();
        var bodyHtml = json.bodyHtml;
        var bodyText = json.bodyText;
        var bl = $(bodyHtml).length;
        var obl = $(oldJson['bodyHtml']).length;
        if (oldJson['title'] == json['title'] && oldJson['bodyText'] == bodyText && oldJson['bodyHtml'] == bodyHtml ) {
            //数据没发生改变
            _this.editorInfo.preview = true;
            _this.editorInfo.editting = false;
            options.noEditCallback();
            return false;
        } else if (isPassivity) {
            _this.editorInfo.editting = true;
            options.saveConfirmDialogOpen();
            return false;
        }

        if ('[{"state":0,"text":""}]' == json.body && json.title == '' && G.currGId == 'undefined') {//新增为空不保存
            _this.editorInfo.preview = true;
            _this.editorInfo.editting = false;
            _this.addPageSize -= _this.addPageSize;
            _this.getMemoGroups(1, function () {
                memoList.pageNo++;
                memoList.isLoading = false;
            });
            return false;
        }
        json.bodyHtml = undefined;
        json.bodyText = undefined;
        json.firstImg = undefined;
        json.firstRecord = undefined;
        _this.saveHArea(json, bodyHtml, bodyText , options.callback);

    },
    saveHArea: function (json, bodyHtml, bodyText, callback) {//新增和编辑便签时
        var _this = this;
        var currGId = G.currGId;
        var $memo = $('#groupItem_' + G.currGId);
        var $nextMemo = $memo.next(".groupItem");
		var loadingFlag = false;
		if($('.wrap_edit img[src]').length > 0) {
			$('.wrap_edit img[src]').each(function() {
				if($(this).attr('sizeFlag') === 'true') {
					loadingFlag = true;
				}
			});
		}
		if(loadingFlag) {
			$.blockTip();
		}
        callback(json);
        // util.doAsyncPost(util.getUrl(URL_UPDATE), function (r) {
        //     if (r.returnCode == 310035) {// 该便签已被删除
        //         _this.addPageSize -= _this.addPageSize;
        //         _this.getMemoGroups(1, function () {
        //             memoList.pageNo++;
        //             memoList.isLoading = false;
        //         });
        //         //memoList.createCacheSly("memoGroups", true);
        //         //_this.addBase();
        //     } else if (r.returnCode == 200) {
        //         var uuid = r.returnValue.uuid;
        //         var firstImgSrc = r.returnValue.firstImgSrc;
        //         var firstRecord = r.returnValue.firstRecord;
        //         var topdate = r.returnValue.topdate;
        //         if (!json.uuid) {//新增
        //             var rCount = parseInt($('#memoCount').text()) + 1;
        //             var $statusName = $("#statusName");
        //             $statusName.html($statusName.text().replace(/\([^\)]*\)/g, "(" + rCount + ")"));
		// 			$('#statusCount').html("(" + r.count + ")");
        //             memoList.initStatusSelect(URL_STATUS, ["memoStatus"]);
        //             $('#memoCount').text(rCount);
        //             _this.addPageSize++;
        //         }
        //         var timeStr = util.formatFromDate(new Date(r.returnValue.modifyTime), G.nowDate);
        //         $('#time').text(timeStr);
        //         $(".audio").removeClass("audioSelected");
        //         $("#textCont").html("共" + bodyText.length + "字");
        //         G.oldJson = json;
        //         G.oldJson.bodyHtml = bodyHtml;
        //         G.oldJson.bodyText = bodyText;
        //         G.oldFontSize = G.fontSize;
        //         memoList.msgShow('保存成功', true);
        //         var $groupItem = $('#groupItem_' + currGId);
        //         var $imgContainer = $groupItem.find('.groupImg');
        //         $imgContainer.find("i").not(".i_topdate").addClass("hide");
        //         if (firstImgSrc) {
        //             $imgContainer.find(".i_img").removeClass("hide");
        //         }
        //         if (firstRecord.length) {
        //             $imgContainer.find(".i_record").removeClass("hide");
        //         }
        //         $('.gpTitleCont', $groupItem).text(json.title ? json.title : '无标题');
        //         var $groupItemCont = $('#gpItemCont_' + currGId);
        //         if (!currGId || currGId == 'undefined') {//新增便签赋值属性
        //             $('#groupItem_' + currGId).attr('onclick', 'memoList.focusMemoGp("' + uuid + '")').attr('id', 'groupItem_' + uuid);
        //             $('#gpItemCont_' + currGId).attr('id', 'gpItemCont_' + uuid);
		// 			$('#groupItem_' + uuid).find('input[name=memoListCheckbox]').attr('id', 'gpCk_' + uuid).val(uuid);
		// 			var totalCount = parseInt($('#memoCount').text());//获取当前便签总数
		// 			//解决在空列表添加第一条便签时的重复
		// 			if(totalCount > 1) {
		// 				G.checkGroupList.options.host.splice(0, 0, $('#gpCk_' + uuid).get(0));
		// 			} else if(totalCount == 1) {
		// 				G.checkGroupList.options.host.splice(0, 1, $('#gpCk_' + uuid).get(0));
		// 			}
        //
        //         }
        //         $('#groupItem_' + uuid + ' .groupTime').text(timeStr);
        //         G.currGId = uuid;
        //         $groupItemCont.prev('div').eq(0).html(util.encodeHtml(memoList.subString(bodyText, memoList.contentMaxLen)));
        //         //_this.addBase();
        //         if ((G.memoStatus_save == -3 && G.memoStatus != -3) || (G.memoStatus != -1 && G.memoStatus_save != G.memoStatus)) {
        //             //memoList.dealAfterDelete();
        //         }else{
        //         	memoList.initStatusSelect(URL_STATUS, ["memoStatus"]);
        //         }
		// 		var userId = $('#users').data('userId');
		// 		if(!json.uuid) {//新增便签埋点
		// 			MeizuBH("action=memo_add&user_id=" + userId);
		// 		} else {//编辑便签埋点
		// 			MeizuBH("action=memo_edit&user_id=" + userId);
		// 		}
        //     } else {
        //         memoList.msgShow(r.returnMessage, true);
        //     }
        //     _this.editorInfo.editting = false;
        // 	_this.editorInfo.preview = true;
        // 	G.oldMemoStatus_save = '';
        // 	G.memoStatus_save = '';
		// 	if(loadingFlag) {
		// 		setTimeout(function() {
		// 			$.unblockTip();
		// 		}, 300);
		// 		loadingFlag = false;
		// 	}
		// 	if(refreshFlag) {//如果是需要刷新的
		// 		memoList.addPageSize = 0;
		// 		memoList.getMemoGroups(1, function() {
		// 			memoList.isLoading = false;
		// 		});
		// 		memoList.initStatusSelect(URL_STATUS, ['memoStatus']);
		// 	}
        // }, json, {returnAll: true});
    }
}


function cloneObj(oldObj) { //复制对象方法
    if (typeof(oldObj) != 'object') return oldObj;
    if (oldObj == null) return oldObj;
    var newObj = new Object();
    for (var i in oldObj)
        newObj[i] = cloneObj(oldObj[i]);
    return newObj;
}
function extendObj() { //扩展对象
    var args = arguments;
    if (args.length < 2) return;
    var temp = cloneObj(args[0]); //调用复制对象方法
    for (var n = 1; n < args.length; n++) {
        for (var i in args[n]) {
            temp[i] = args[n][i];
        }
    }
    return temp;
}
;
(function ($) {
    $.htmlarea = {};
    $.htmlarea.move = function (o, range, selection, remove) {
        if (isIe11 && remove) {
            range.collapse(false);
            range.setEndBefore(o);
            range.setStartBefore(o);
            selection.removeAllRanges();
            selection.addRange(range);
        }else if(isMozilla && remove){
            range.collapse(true);
            range.setEndBefore(o);
            range.setStartBefore(o);
            range.select();// 火狐有报错，但是可以正常使用
        } else if (isIe) {
            range.moveToElementText(o);
            range.select();
        } else {
            range.selectNode(o);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    $.fn.htmlarea = function (opts) {
        if (opts && typeof (opts) === "string") {
            var args = [];
            for (var i = 1; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            var htmlarea = jHtmlArea(this[0]);
            var f = htmlarea[opts];
            if (f) {
                return f.apply(htmlarea, args);
            }
        }
        return this.each(function () {
            jHtmlArea(this, opts);
        });
    };
    var jHtmlArea = window.jHtmlArea = function (elem, options) {
        if (!elem) {
            return false
        }
        if (elem.jquery) {
            return jHtmlArea(elem[0]);
        }
        if (elem.jhtmlareaObject) {
            return elem.jhtmlareaObject;
        } else {
            return new jHtmlArea.fn.init(elem, options);
        }
    };
    jHtmlArea.fn = jHtmlArea.prototype = {

        jhtmlarea: "0.7.5",

        init: function (elem, options) {
            if (elem.nodeName.toLowerCase() === "textarea") {
                var opts = this.opts = $.extend({}, jHtmlArea.defaultOptions, options);
                elem.jhtmlareaObject = this;

                var textarea = this.textarea = $(elem);
                var container = this.container = $("<div/>").addClass("jHtmlArea").insertAfter(textarea);
                this.callback = opts.loaded || function () {
                };
                this.refresh = opts.refresh;
                var style = '';
                if (G.fontSize) {
                    style = "style='font-size:" + G.fontSize + "px;'";
                }

                var id = this.textarea.attr('id');
                var $wrap = this.wrap = $('<div class="wrap-edit" id="wrap_' + id + '"></div>');
                var htmlarea = this.htmlarea = $("<div/>").append($wrap);
                container.append(htmlarea).append(textarea.hide());
            }
        },
        height: 0,
        initEditor: function () {
            priv.initEditor.call(this, this.opts);
        },
        initEvent: function () {
            var _this = this;
            priv.attachEditorEvents.call(this);
            var textarea = this.textarea,
                container = this.container;
            this.addListener('keyup', function () {
            });

            this.addListener('focus', function () {
                var focus = _this.opts.focus;
                if (focus && $.isFunction(focus)) {
                    focus.call(this);
                }
            });
            this.addListener('blur', function () {
                var blur = _this.opts.blur;
                if (blur && $.isFunction(blur)) {
                    blur.call(this);
                }
            });
            this.addListener('paste', function (e) {
                var clipboardData = null,
                    oe = e.originalEvent,
                    text = '',
                    $div = $('<div>'),
                    b = false;
                clipboardData = window.clipboardData || oe.clipboardData;
                if (!clipboardData) {
                    alert('该浏览器暂时不支持该粘贴功能');
                    return false;
                }
                text = clipboardData.getData('text');
                text = util.encodeHtml(text);
                text = $('<p>').html(text).text();
                text = util.encodeHtml(text);

                var tempText = '';
                $('#innerDlgs textarea').each(function (index, e) {
                    tempText += $(e).htmlarea('toString');
                });
                tempText += text;
                var superWordsCallback = function() { //传给dialog的回调函数，处理超过2万字的bug
                    $('#innerDlgs .wrap-edit').attr('contenteditable', 'true');
                }
                if (tempText.length >= 20000) {
                    nAlert('便签字数不能超过20000', '提示', superWordsCallback);
                    $('#innerDlgs .wrap-edit').attr('contenteditable', 'false');
                } else {
                    textarea.htmlarea('pasteHTML', text, 0);
                }
                if(_this.refresh) _this.refresh();
                return false;
            });

            this.addListener('mousedown', function (e) {
                if (e.target.nodeName.toLowerCase() == 'img') {
                    return false;
                }
            });
            this.addListener('keydown', function (e) {
                _this.o
                var range = textarea.htmlarea('getRange'),
                    prev = null,
                    pTextarea = null,
                    len = 0,
                    pHtml = null,
                    html = null,
                    pRange = null,
                    body = null,
                    pDoc = null,
                    temp = null,
                    next = null,
                    nTextarea = null;
                var _isList = function ($list) {
                    return $list.find('input[type=checkbox]').length > 0;
                };
                var _isAudio = function ($audio) {
                    return $audio.attr('data-type') == 'audio';
                };
                var _deleteList = function ($list) {
                    $list.find('div').removeClass('checkbox');
                    $list.find('.checkbox-pic').remove();
                    $list.find('input').remove();
                    $(_this.getDoc()).focus();//ie
                };
                var _deleteAudio = function ($audio) {
                    $audio.addClass('audioSelected');
                    $audio.focus();
                };
                var _move = $.htmlarea.move;
                var _contact = function (src, target, type) {
                    var $tTextarea = target.find('textarea'),
                        $sTextarea = src.find('textarea'),
                        tHtml = $tTextarea.htmlarea('toHtmlString'),
                        shtml = $sTextarea.htmlarea('toHtmlString'),
                        body,
                        $img,
                        index,
                        id = '_editor_id_temp_contact',
                        sep = '<span id="_editor_id_temp_contact"></span>',
                        range = null,
                        selection = null,
                        temp = null;
                    if (_isList(target)) {
                        // todo ie11删到一个编辑区域最前面的时候backspace时没反应的代码
                        body = $sTextarea.htmlarea('getDoc');
                        $img = $(body).find('img');
                        if ($img.length > 0) {
                            index = shtml.indexOf($img[0].outerHTML);
                            $sTextarea.htmlarea('html', shtml.substring(index));
                            shtml = shtml.substring(0, index);
                        } else {
                            src.remove();

                        }
                    } else {
                        src.remove();
                    }
                    if (isIe || isIe11) {
                        var $shtml = $(shtml);
                        if (($shtml.text().trim() == '' || $shtml.text() == '&nbsp;') && !$shtml.find('img').length) {
                            shtml = '';
                        }
                    }

                    $tTextarea.htmlarea('html', tHtml + sep + shtml, false, (type != 'd'));
                    temp = $('#_editor_id_temp_contact', $tTextarea.htmlarea('getDoc'));
                    $($tTextarea.htmlarea('getDoc')).focus();
                    range = $tTextarea.htmlarea('getRange');
                    selection = $tTextarea.htmlarea('getSelection');
                    _move(temp[0], range, selection, true);
                    temp.remove();
                };
                switch (e.keyCode) {
                    case 8://backspace
                        if (!isIe11) {
                            var _id = _this.createId(),
                                _temp = '<span id="' + _id + '"></span>',
                                _html = null;
                            if (isIe8) {
                                _temp = '<span id=' + _id + '></span>';
                            }
                            _this.pasteHTML(_temp);
                            _html = _this.toHtmlString();
                            $('#' + _id, _this.getDoc()).remove();
                            // todo 删除到一个编辑区域的最前面做的处理，存在优化点
                        }

                        var _checkStart = function () {
                            if (isIe11) {
                                if(!range){return false}
                                return range.startOffset == 0;
                            } else {
                                var v = _html.replace(new RegExp('</p>|<p>|<br>', 'ig'), '');
                                return v.toLowerCase().indexOf(_temp) == 0;
                            }
                        };
                        if (!_checkStart()) {
                            return true;
                        }
                        if (_isList(container)) {//清单
                            _deleteList(container);
                        } else {
                            prev = container.prev();
                            if (!prev.length) {
                                // return false;//honggj ie11
                                return true;
                            }
                            if (_isAudio(prev)) {//录音
                                _deleteAudio(prev);
                                return false;
                            } else if (prev.find('.wrap-edit').length > 0) {//内容合并到上一个编辑区域上
                                _contact(container, prev);
                                return false;
                            }
                        }
                        break;
                    case 46://delete
                        if (!isIe11) {
                            var _id = _this.createId(),
                                _temp = '<span id="' + _id + '"></span>',
                                _html = null;
                            _this.pasteHTML(_temp);
                            _html = _this.toHtmlString();
                        }
                        var _checkEnd = function () {
                            if (isIe11) {
                                _html = _this.toString();
                                return range.startOffset == _html.length && range.endOffset == _html.length;
                            } else {
                                var v = _html.replace(new RegExp('</p>|<p>', 'g'), '');
                                return (v.toLowerCase().indexOf(_temp) + _temp.length == v.length) ||
                                    new RegExp(_temp + '<br/?>$').test(v);
                            }
                        };

                        $('#' + _id, _this.getDoc()).remove();
                        if (!_checkEnd()) {
                            return;
                        }

                        next = container.next();
                        if (_isList(next)) {//清单
                            _deleteList(next);
                            _contact(next, container);
                            return false;
                        } else if (_isAudio(next)) {//录音
                            _deleteAudio(next);
                        } else {
                            if (next.find('.wrap-edit').length > 0) {//内容合并到上一个iframe
                                nTextarea = next.find('textarea');
                                html = nTextarea.htmlarea('toHtmlString');
                                html = html.replace(new RegExp('^<img[^>]*>'), '');
                                nTextarea.htmlarea('html', html);
                                _contact(next, container, 'd');
                                return false;
                            }
                        }
                        break;
                    case 13:
                        if (_isList(container)) {//清单
                            _this.addList();
                            return false;
                        }
                        break;
                    default:
                }
                _this.dealText();
                if(_this.refresh) _this.refresh();
                if (_this.toHtmlString() == '') {
                    _this.html('<p><br /></p>');
                }
            });
        },
        dealText: function () {//字数统计
            var _this = this;
            var oldHtml = _this.toHtmlString();
            return setTimeout(function () {
                var text = '';
                $('#innerDlgs textarea').each(function (index, e) {
                    text += $(e).htmlarea('toString');
                });
                if (text.length >= 20000) {
                    _this.html(oldHtml);
                    nAlert('便签字数不能超过20000', '提示', function() {
                        $('#innerDlgs .wrap-edit').attr('contenteditable', 'true');
                    });
                    $('#innerDlgs .wrap-edit').attr('contenteditable', 'false');
                    return false;
                }
            }, 0);
        },
        changeHeight: function (h) {
            if (this.height != h) {
                $(this.wrap).height(h);
                this.height = h;
            }
        },
        createId: function () {
            var index = 0;
            return function () {
                console.log(index);
                return '_editor_id_' + (index++);
            };
        }(),
        dealTag: function (html) {//标签补全
            var prefix = '',
                suffix = '',
                $all = $('<div id="_editor_temp_0">').html(html),
                $sep = $all.find('#_editor_sep_0'),
                $parent = $sep.parent(),
                temp = null,
                temp1 = null;
            while ($parent.length && $parent.attr('id') != '_editor_temp_0') {//标签补全
                temp = $parent[0].outerHTML;
                if (isIe8) {
                    temp = temp.replace(/\r\n/, '');
                }
                temp1 = temp.match('</[^>]+>$');
                if (temp1) {
                    suffix += temp1;
                    prefix = temp.match('^<[^>/]+>') + prefix;
                }
                $parent = $parent.parent();
            }
            return [prefix, suffix];
        },
        isEmpty: function (str) {
            var $str = $('<div>').html(str);
            return ($str.text().trim() == '' || $str.text() == '&nbsp;') && !$str.find('img').length;
        },
        addImg: function (url, sizeFlag ,callback) {
            var _this = this,
                imgId = '_img_XXXX_' + this.createId(),
                imgTk = (isIe && !isIe8 || isIe11) ? 'style="display:inline-block"' : '',
                img = '<img ' + imgTk + ' id="' + imgId + '"/>',
                $img = null,
                _move = $.htmlarea.move,
                span = '<span id="_editor_id_temp_addImg"></span>',
                ieDeal = function () {
                    // if(isIe){
                    $(this.getDoc()).focus();
                    _move(document.getElementById('_editor_id_temp_addImg'), this.getRange(), this.getSelection());
                    $('#_editor_id_temp_addImg', this.getDoc()).remove();
                    // }
                };

            if (this.container.find('input[type=checkbox]').length > 0) {//清单
                var sep = '<span id="_editor_sep_0">&nbsp;</span>',
                    html = '',
                    temp = null,
                    range = this.getRange(),
                    container = this.container,
                    prefix = '',
                    suffix = '';
                this.pasteHTML(sep);
                html = this.toHtmlString();
                temp = sep;
                temp = this.dealTag(html, temp);
                prefix = temp[0];
                suffix = temp[1];
                temp = html.toLowerCase().indexOf(sep);
                if (temp == -1) {//ie兼容
                    sep = '<span id=_editor_sep_0>&nbsp;</span>';
                    temp = html.toLowerCase().indexOf(sep);
                }
                var tempHtml = html.substring(0, temp) + suffix;
                if (_this.isEmpty(tempHtml)) {
                    tempHtml = '<p></br></p>';
                }
                this.html(tempHtml, true);
                var end = prefix + html.substring(temp + sep.length);
                if (_this.isEmpty(end)) {
                    end = '';
                }
                html = img + span + end;
                editorObj.createEditor(function () {
                    this.html(html, true);
                    $img = $('#' + imgId);
                    $img[0].onload = function () {
                    };
                    $img.attr('src', url);
                    ieDeal.call(this);
                }, function ($o) {
                    $o.insertAfter(_this.container);
                });
                $('#_editor_sep_0').remove();
                return false;
            } else {
                this.pasteHTML(img);
                img = $('<div>').html(img).html();//浏览器兼容
                html = this.toHtmlString();
                temp = this.dealTag(html, img);
                prefix = temp[0];
                suffix = temp[1];
                if (prefix || isIe) {
                    temp = html.indexOf(img);
                    this.html(html.substring(0, temp) + suffix + img + span + prefix + html.substring(temp + img.length));
                    ieDeal.call(this);
                }
                $img = $('#' + imgId);
                $img[0].onload = function () {
                };
                $img.attr('src', url).attr('sizeFlag', sizeFlag);
            }
        },
        addList: function () {
            //插入清单
            if ($('#innerDlgs input[type=checkbox]').length >= 100) {
                nAlert('清单不能超过100个', '提示');
                return;
            }
            var sep = '<span id="_editor_sep_0">&nbsp;</span>',
                html = '',
                temp = null,
                editor,
                temp1 = null,
                range = this.getRange(),
                container = this.container,
                prefix = '',
                suffix = '',
                $img;
            //
            this.pasteHTML(sep);
            html = this.toHtmlString();
            if (isIe8) {
                sep = '<SPAN id=_editor_sep_0>&nbsp;</SPAN>'; //大写的SPAN为了兼容ie8
            }
            temp = sep;
            temp = this.dealTag(html, temp);
            prefix = temp[0];
            suffix = temp[1];
            temp = html.indexOf(sep);
            temp1 = html.substring(0, temp) + suffix;
            this.html(temp1, true);
            html = prefix + html.substring(temp + sep.length);
            temp = $('<div />').html(html);
            $img = temp.find('img');
            if ($img.length) {
                html = temp.html();//浏览器兼容
                temp = html.indexOf($img[0].outerHTML);
                editor = editorObj.createList({text: html.substring(0, temp), state: 1}, container);
                editorObj.createEditor(function () {
                    this.html(html.substring(temp));
                }, function ($o) {
                    $o.insertAfter(editor[0].jhtmlareaObject.container);
                });
            } else {
                temp = {text: html, state: 1};
                editorObj.createList(temp, container);
            }
            if (temp1 == '' || temp1.toLowerCase() == '<p></p>' || temp1.toLowerCase() == '<p><br /></p>' || temp1.toLowerCase() == '<p><br></p>') {
                this.container.remove();
            }
        },
        dispose: function () {
            this.textarea.show().insertAfter(this.container);
            this.container.remove();
            this.textarea[0].jhtmlareaObject = null;
        },
        execCommand: function (a, b, c) {
            this.wrap[0].focus();
            document.execCommand(a, b || false, c || null);
            this.updateTextArea();
        },
        ec: function (a, b, c) {
            var _this = this;
            this.execCommand(a, b, c);
        },
        queryCommandValue: function (a) {
            this.wrap[0].focus();
            return this.editor.queryCommandValue(a);
        },
        qc: function (a) {
            return this.queryCommandValue(a);
        },
        getSelectedHTML: function () {
            if (isIe) {
                return this.getRange().htmlText;
            } else {
                var elem = this.getRange().cloneContents();
                return $("<p/>").append($(elem)).html();
            }
        },
        getSelection: function () {
            if (isIe) {
                return document.selection;
            } else {
                return window.getSelection();
            }
        },
        getRange: function (b) {
            var sel, range, doc = this.editor;
            try {
                if (!b) {
                    sel = this.getSelection();
                    range = sel.createRange ? sel.createRange() : sel.rangeCount > 0 ? sel.getRangeAt(0) : null
                }
                if (!range) {
                    range = doc.createTextRange ? doc.createTextRange() : doc.createRange();
                }
            } catch (err) {
            }
            return range;
        },
        html: function (v, isBody) {
            var _this = this;
            if (v !== undefined) {
                if (v == '') {
                    v = '<p>' + (!isWebkit ? "<br />" : "") + '</p>';
                }
                if (v.toLowerCase().indexOf('<p>') != 0) {//保证内容都在p标签里面
                    v = '<p>' + v + '</p>';
                }

                var $imgs = $('<div>' + v + '</div>').find('img');
                var len = $imgs.length;
                var oldH = 0;
                var isFinishHeight = false;//是否初始化了高度，专门针对ie11做出的优化
                if (len) {
                    $imgs.each(function (index) {
                        if (isIe11 && this.height) {
                            len--;
                            return;
                        }
                        this.onload = function () {
                            len--;
                            if (len === 0) {
                                isFinishHeight = true;
                                setTimeout(function () {//解决部分浏览器，包括某些版本的chrome，图片下面的文字不出来的bug
                                }, 100);
                            }
                        };
                    });
                }
                this.textarea.val(v);
                this.updateHtmlArea();
                if (!len) {
                    setTimeout(function () {
                        if (!isFinishHeight) {
                        }
                    }, 0);
                } else {
                }
            } else {
                return this.toHtmlString();
            }
        },
        pasteHTML: function (html, q, position) {
            var html = html.replace(/\n/g, "<br />");
            var doc = this.editor;
            doc.focus();
            var selection1 = this.getSelection(),
                range = this.getRange();
            if (!isIe) {
            }
            if (q !== undefined) {
                if (range.item) {
                    var item = range.item(0);
                    range = this.getRange(true);
                    range.moveToElementText(item);
                    range.select();
                }
                range.collapse(q);
            }
            if (!position) {
                html += "<" + (isIe ? "img" : "span") + ' id="_xm_temp" width="0" height="0" ' + (isIe ? "/>" : "></span>");
            } else {
                html = "<" + (isIe ? "img" : "span") + ' id="_xm_temp" width="0" height="0" ' + (isIe ? "/>" : "></span>") + html;
            }
            if (range.insertNode) {
                if ($(range.startContainer).closest("style,script").length > 0) {
                    return false;
                }
                range.deleteContents();
                range.insertNode(range.createContextualFragment(html));
            } else {
                if (selection1.type.toLowerCase() === "control") {
                    selection1.clear();
                    range = this.getRange();
                }
                range.pasteHTML(html);
            }
            var $g = $("#_xm_temp"), o = $g[0];
            if (isIe) {
                range.moveToElementText(o);
                range.select();
            } else {
                range.selectNode(o);
                selection1.removeAllRanges();
                selection1.addRange(range);
            }
            $g.remove();
        },
        cut: function () {
            this.ec("cut");
        },
        copy: function () {
            this.ec("copy");
        },
        paste: function () {
            this.ec("paste");
        },
        bodyFontSize: function (c) {

        },

        addListener: function (e, func) {
            $(this.getDoc()).on(e, func);
        },

        getDoc: function () {
            return this.wrap[0];
        },

        showHTMLView: function () {
            this.updateTextArea();
            this.textarea.show();
            this.htmlarea.hide();
        },
        hideHTMLView: function () {
            this.updateHtmlArea();
            this.textarea.hide();
            this.htmlarea.show();
        },
        toggleHTMLView: function () {
            (this.textarea.is(":hidden")) ? this.showHTMLView() : this.hideHTMLView();
        },

        toHtmlString: function () {
            if (!this.editor) {
                return '';
            }
            return this.editor.innerHTML;
        },
        toString: function () {
            return $(this.editor).text();
        },

        updateTextArea: function () {
            this.textarea.val(this.toHtmlString());
        },
        updateHtmlArea: function () {
            this.editor.innerHTML = this.textarea.val();
        }
    };
    jHtmlArea.fn.init.prototype = jHtmlArea.fn;

    var priv = {
        initEditor: function (options) {
            var doc = this.editor = this.getDoc();
            doc.spellcheck = false;
            if (isIe) {
                doc.disabled = true;
                doc.contentEditable = true;
                doc.disabled = false;
            } else {
                doc.contentEditable = true;
            }
            if (isMozilla && !isIe11) {
                document.execCommand('enableObjectResizing', false, 'false');// only firefox support
            }

        },
        attachEditorEvents: function () {
            var t = this;
            var fnHA = function () {
                t.updateHtmlArea();
            };
            this.textarea.click(fnHA).
                keyup(fnHA).
                keydown(fnHA).
                mousedown(fnHA).
                blur(fnHA);
            var fnTA = function (e) {
                t.updateTextArea();
                if (e.type == "click") {
                    return false;
                }
            };
            $(this.editor).click(fnTA).
                keyup(fnTA).
                keydown(fnTA).
                mousedown(fnTA).
                blur(fnTA);
            $('form').submit(function () {
                t.toggleHTMLView();
                t.toggleHTMLView();
            });
            if (window.__doPostBack) {
                var old__doPostBack = __doPostBack;
                window.__doPostBack = function () {
                    if (t) {
                        if (t.toggleHTMLView) {
                            t.toggleHTMLView();
                            t.toggleHTMLView();
                        }
                    }
                    return old__doPostBack.apply(window, arguments);
                };
            }
        },
        isArray: function (v) {
            return v && typeof v === 'object' && typeof v.length === 'number' && typeof v.splice === 'function' && !(v.propertyIsEnumerable('length'));
        }
    };
})(Zepto);


function Player(el){
    this.el = el;
    this.isPlay = false;
    this.playbtn = el.find('.audioShow');
    this.pausebtn = el.find('.audioPause');
    this.process = el.find('.audioPlayBar');
    this.time = el.find('.audioTime');
    this.countDown = null;
    this.init();
}
Player.prototype = {
    init: function(){
        var _this = this,
            attr = {loop: false, preload: "auto", src: this.el.attr("data-audio")};
        this._audio = new Audio;
        for (var i in attr){
            attr.hasOwnProperty(i) && i in this._audio && (this._audio[i] = attr[i]);
        }
        this._audio.load();
        this._audio.volume = 0.8;
        this.playbtn.unbind('click').on('click', function(){
            _this._playOn();
            return false;
        });
        this.pausebtn.unbind('click').on('click', function(){
            _this.clearTime();
            _this._playOff();
            return false;
        });
        this._audio.addEventListener('ended', function() {
            _this._reset();
        }, false);
        this._audio.addEventListener('error',function(e){
            if(e.returnValue && e.type == 'error'){
                _this.clearTime();
                _this._playOff();
            }
        });

        this.process.parent().unbind('click').on('click', function(e){
            _this._audioSeek(e);
            return false;
        });

        this.time.html('00:00');
        this._setCountDown();
    },
    _setTime: function(){
        var time = this._audio.currentTime;
        var minute = parseInt(time / 60);
        if (minute < 10) {
            minute = "0" + minute;
        }
        //秒
        var second = parseInt(time % 60);
        if (second < 10) {
            second = "0" + second;
        }
        var allTime = minute + ":" + second;
        return allTime;
    },
    _setCountDown:function(){
        var _this = this;
        this.countDown = setInterval(function(){
            var allTime = _this._setTime();
            _this.time.html(allTime);
            _this._setProgress();
        },1000);
    },
    _setProgress: function (){
        var percent = this._audio.currentTime / this._audio.duration;
        this.process.width((percent * 100).toFixed(1) + "%");
    },
    _audioSeek: function (e){
        if(this._audio.paused || this._audio.ended){
            this._playOn();
            this._enhanceAudioSeek(e);
        }else{
            this._enhanceAudioSeek(e);
        }
    },
    _enhanceAudioSeek: function (e){
        this.clearTime();
        var length = e.pageX - this.process.offset().left;
        var percent = length / this.process.parent().offset().width;
        this.process.width((percent * 100).toFixed(1) + "%");
        this._audio.currentTime = percent * this._audio.duration;
        this.time.html(this._setTime());
        this._setCountDown();
    },

    _reset: function(){
        this.time.html('00:00');
        this.clearTime();
        this._audio.currentTime = 0;
        this.process.width('0px');
        this._playOff();
    },

    _getState: function(){
        return this.isPlay;
    },

    _playOn: function(){
        this._audio.play();
        this.playbtn.hide();
        this.pausebtn.css('display','inline-block');
        this.isPlay = true;
    },

    _playOff: function(){
        this._audio.pause();
        this.playbtn.css('display','inline-block');
        this.pausebtn.hide();
        this.isPlay = false;
    },

    clearTime: function(){
        clearInterval(this.countDown);
        this.countDown = null;
    }
}

module.exports = Editor;
