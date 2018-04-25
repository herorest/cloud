import React from 'react';
import reqwest from 'reqwest';
import Utils from '../common/util-dom';
import {Modal,Button,Input} from 'antd';
import Interface from '../common/interface';

var entryCom = React.createClass({
	getInitialState:function() {
		return {
            value:''
		};
	},
    onChange:function (e) {
        const { value } = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            if(value.length <= 6){
                this.setState({ value });
            }else{
                this.setState({ value : value.substring(0,6)});
            }
        }
    },
	render:function() {
		return (
            <Input size="large" type="text" name="codes" ref="messCodes" onChange={this.onChange} value={this.state.value} className="input-codes" placeholder="请输入验证码" />
        )
	}
});
module.exports = entryCom;
