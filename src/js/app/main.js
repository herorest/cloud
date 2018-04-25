import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../repertory/main';
import initReactFastclick from 'react-fastclick';
initReactFastclick();

window.onload = function() {
    (function(){
        function _getCookie(objName){
            var arrStr = document.cookie.split("; ");
            for(var i = 0;i < arrStr.length;i ++){
                var temp = arrStr[i].split("=");
                if(temp[0] == objName) return unescape(temp[1]);
            }
        }
        var _isLogin = _getCookie("_islogin");
        if(_isLogin === 'true'){
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'login.flyme.cn/login/getLoginInfo?callback=loginCallback';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        }
    })();
    ReactDOM.render(<Main />,document.getElementById('wrap'));
};
