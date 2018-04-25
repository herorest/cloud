import React, { Component } from 'react';
import Utils from '../util-dom';

class Avata extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render() {
        var avata ,classram;
        if(this.props.type === 1 && this.props.id){
            var array = [];
            array.push('access_token=' + window.commonData.token);
            array.push('userId=' + window.commonData.userId);
            array.push('sn=' + window.commonData.sn);
            array.push('imei=' + window.commonData.imei);
            var str = array.join('&');
            var src = 'https://cloud.flyme.cn/c/h5/download/common/contact/filename/' + this.props.id + '?' + str;
            avata = <img src={src} width="100%" />
            classram = "i-avata";
        }else{
            var namelist = this.props.name.split('');
            var color = (namelist[0] == 1 && namelist.length > 1) ? namelist[1] : namelist[0];
            avata = namelist[0] + namelist[1];
            classram = "i-avata color" + (parseInt(Utils.getColorType(color)) % 7 + 1);
        }

        classram += ' contactCheckImg ';

        return (
            <span className={classram} ref="avata">{avata}</span>
        );
    }
}

export default Avata;
