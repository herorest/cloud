import React from 'react';
import Utils from '../common/util-dom'
import {Button,Input} from 'antd';
import Notification from '../common/notification/index.jsx';

var entryCom = React.createClass({
    time:59,
    timeCount:null,
    getInitialState:function() {
		return {
            currentTime:this.time,
            start:false
        }
    },
    componentDidMount:function(){
        //默认发送第一次
        this.send();
    },
    send:function(){
        var self = this;
        if(this.state.start){
            return false;
        }
        self.props.sendMessHandle();
        self.setState({
            currentTime:this.state.currentTime,
            start:true
        });
        self.timeCount = setInterval(function () {
			if(self.state.currentTime <= 0) {
				clearInterval(self.timeCount);
                self.setState({
                    currentTime:self.time,
                    start:false
                });
			} else {
                self.setState({
                    currentTime:self.state.currentTime - 1
                });
			}
		}, 1000);
    },
	render:function() {
        let mess = '发送';
        let classn = 'input-time';
        if(this.state.start){
            mess = this.state.currentTime + 's'
            classn += ' sended'
        }
		return (
            <Button type="primary" id="inputTime" className={classn} onClick={this.send}>{mess}</Button>
		)
	}
});
module.exports = entryCom;
