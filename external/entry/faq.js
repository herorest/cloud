const $ = require("jquery");
const lanlist = require("../common/faq-language");
require("../css/common.css");
require("../css/faq.css");

var mainObj = function(){
    this.init();
};
mainObj.prototype = {
    init:function(){
        this.start();
    },
    start:function(){
        $('.container').removeClass('opacity');
        this.visiblePage(1);
        this.loadEjsTemple();
        this.changePage();
        this.bind();
    },
    bind:function(){
        var _self = this;

        $.each($('#teach_list').find('a'),function(){
            Event.addEvent(this,'end',function(){
                var rel = $(this).attr('rel');
                _self.getLan(rel);
                history.pushState({detail:rel}, null, window.location.origin + window.location.pathname + '?t=' + rel);
            });
        });

        window.addEventListener("popstate", function() {
            var currentState = history.state;
            if(currentState){
                _self.getLan(currentState.detail);
            }else{
                _self.visiblePage(1);
            }
        });
    },
    changePage:function(){
        var type = this.getName('t');
        this.getLan(type);
    },
    getLan:function(type){
        var lan = lanlist[type];
        if(type && lan){
            this.render(lan);
            this.visiblePage(2);
        }
    },
    visiblePage:function(num){
        if(num == 1){
            $('.home').show();
            $('.list').hide();
        }else{
            $('.home').hide();
            $('.list').show();
        }
    },
    getName:function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    },
    //处理ejs
    loadEjsTemple:function(){
        ejs.open = '{{'; ejs.close = '}}';
    },
    render:function(inner){
        var tpl = $('.template');
        var html = ejs.render(tpl.html(),inner);
        $('.list').html(html);
    }
};

var main = new mainObj();
