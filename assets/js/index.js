!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],n);else{var o=n("object"==typeof exports?require("jQuery"):e.jQuery);for(var i in o)("object"==typeof exports?exports:e)[i]=o[i]}}(this,function(e){return function(e){function n(i){if(o[i])return o[i].exports;var t=o[i]={exports:{},id:i,loaded:!1};return e[i].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var o={};return n.m=e,n.c=o,n.p="/",n(0)}({0:function(e,n,o){"use strict";var i=o(1);o(71),o(74),o(75),o(76);var t=function(){return browser.ie67?void alert("你的浏览器不支持，我们推荐你使用chrome浏览器进行便签操作"):void this.init()};t.prototype={init:function(){this.entry()},entry:function(){var e=i(".container");browser.lowie10?e.fadeTo(300,1):(e.css("opacity",1),setTimeout(function(){e.removeClass("transall")},320)),this.loadEjsTemple(),this.bind(),this.footBind(),Event.orientation()},bind:function(){var e=this;if(browser.ie67)i(window).on("scroll",function(e){document.documentElement.scrollTop||document.body.scrollTop});else if(browser.mobile){i(".header").appendTo(".container"),i(".begin").removeClass("fp-auto-height"),i(".copyrightWrap").appendTo(".begin"),i(".section").addClass("fp-section fp-table").wrapInner('<div class="fp-tableCell"></div>');var n=i(window).height()-i(".header").height(),o=new Swiper(".wrapper",{direction:"vertical",wrapperClass:"fullpage",slideClass:"section",height:n,resistanceRatio:0,onInit:function(e){i.each(i(".lazy"),function(){var e=i(this).attr("data-url");i(this).attr("src",e).removeClass("opacity0")})}})}else i("#fullpage").fullpage({anchors:["intro","data","safe","quick","how","begin"],css3:!0,navigation:!0,navigationPosition:"right",navigationTooltips:["介绍","数据管理","防丢机制","数据迁移","如何使用","开始使用"],ease:"ease-in-out",autoScrolling:"mobile"!=this.browser,scrollingSpeed:500,keyboardScrolling:!0,afterLoad:function(n){var o,t=i("."+n),a=t.find(".lazy").hasClass("opacity0");a&&(o=t,e.loadPic(o)),o=t.next(),e.loadPic(o),o=t.prev(),e.loadPic(o)}});Event.addEvent(i("#service-online")[0],"end",function(){window.open("http://live-i.meizu.com/live800/chatClient/chatbox.jsp?companyID=8957&configID=4&enterurl=&pagereferrer=&info=&k=1","_blank","height=575,width=1150,fullscreen=3,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no,fullscreen=no")},!0),Event.addEvent(i(".back-home a")[0],"end",function(){o.slideTo(0,500,!0)},!0),this.menuChange(),this.changeLanguage()},loadEjsTemple:function(){ejs.open="{{",ejs.close="}}",i.each(i(".template"),function(){var e=i(this),n=ejs.render(e.html(),lanPack);e.replaceWith(n)})},changeLanguage:function(){i("#globalContainer a").click(function(){window.location.href=window.location.origin+window.location.pathname+"?language="+i(this).attr("lan")})},loadPic:function(e){if(e.length>0){var n=e.find(".lazy");i.each(n,function(){var e=this,n=i(e).attr("data-url"),o=new Image;o.onload=function(){i(e).attr("src",n).removeClass("opacity0")},o.src=n})}},menuChange:function(){var e=i(".menu"),n=i(".header ul"),o=i(".cover"),t=function(){n.hasClass("hover")||n.hasClass("hiding")||(o.addClass("show"),e.addClass("active"),n.removeClass("animated menuHide").addClass("animated menuShow hover showing time03"),n.one("webkitAnimationEnd mozAnimationEnd MsAnimationEnd oanimationend animationend",function(){n.addClass("hiding").removeClass("showing")}))},a=function(){n.hasClass("showing")||(o.removeClass("show"),e.removeClass("active"),n.removeClass("animated menuShow hover time03").addClass("animated menuHide time03"),n.one("webkitAnimationEnd mozAnimationEnd MsAnimationEnd oanimationend animationend",function(){n.removeClass("hiding")}))};Event.addEvent(e[0],"end",function(){n.hasClass("hover")||t()},!0),Event.addEvent(i(document)[0],"end",function(e){!i(e.target).is(".header ul")&&0===i(e.target).parents(".header ul").length&&n.hasClass("hover")&&a()})},footBind:function(){var e=i("#wechatPic");i("#footer-weChat i").hover(function(){e.show()},function(){e.hide()}).click(function(){return!1});var n=i("#globalName"),o=i("#globalContainer"),t=null,a=function(e){e.on("mouseover",function(){clearTimeout(t),o.show()}).on("mouseout",function(){t=setTimeout(function(){o.hide()},500)})};a(n)}},i(function(){var e=(new t,browser),n="mobile"===e.name?"mobile":"pc";MeizuBH("action=device_type&device_type="+n)})},1:function(n,o){n.exports=e},71:function(e,n){},74:function(e,n){},75:function(e,n){},76:function(e,n){}})});