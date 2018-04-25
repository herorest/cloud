import React from 'react';
import reqwest from 'reqwest';
import Utils from '../util-dom'
import Notification from '../notification/index.jsx';
import Interface from '../interface';

var device = React.createClass({
    getInitialState:function() {
        let props = this.props;
		return {
            oldname:props.data.name,
            newname:props.data.name,
		};
	},
    logout:function(){
        let props = this.props;
        let data = props.data;
        props.logout(true,{
            sn:data.sn,
            imei:data.imei,
            status:data.status
        });
        //关闭设备下拉框
        props.closedrop(false);
    },
    changeName:function(e){
        this.setState({
            newname:e.currentTarget.value
        });
    },
    submitErr:function(msg){
        Notification.error(msg);
        this.setState({
            newname:this.state.oldname
        });
    },
    submitName:function(e){
        var self = this;
        var device = e.currentTarget.getAttribute('data-imei');
        var sn = e.currentTarget.getAttribute('data-sn');
        var oldVal = e.currentTarget.getAttribute('data-old');
        var val = this.state.newname;
        var regx = new RegExp("[\|\\\\/\:\*\?\"\<\>]"); //设备名称输入框正则表达式
        if (val === "") {
            this.submitErr('不能保存空姓名');
        }else if(regx.test(val)){
            this.submitErr("不能输入 | V ： * ？ “ < >特殊字符");
        }else if (oldVal != val) {
            Utils.ajax({
                url:Interface.apiUrl.flushdevicename,
                data:{
                    device: device,
                    deviceName: val,
                    sn: sn
                },
                success:function(result){
                    if(data == 1){
                        self.setState({
                            oldname:this.state.newname
                        });
                    }else{
                        self.submitErr("保存失败！");
                    }
                },
                error:function(){
                    self.submitErr("保存失败！");
                }
            },reqwest,Notification);
        }
    },
	render:function() {
        let props = this.props;
        let classn,src,status;
        if(props.data.status == 0){
            classn = 'offline';
            status = '离线';
        }else{
            classn = 'online';
            status = '在线';
        }
        classn += ' device-list clearfix';

		return (
            <div className={classn} key={props.k}>
                <div className="phone"></div>
                <div className="device-info">
                    <div className="device-name">
                        <input type="text" data-old={this.state.oldname} onChange={this.changeName} onBlur={this.submitName} className="J-device-name" maxLength="20" value={this.state.newname} data-imei={props.data.imei} data-sn={props.data.sn} />
                        <span className="status offline-btn">离线</span>
                    </div>
                    <div className="device-desc">
                        <span className="device-model">sss</span>
                        <span className="device-sn">序列号后四位：34221</span>
                    </div>
                </div>
                <a className="device-handle J-device-handle" onClick={this.logout} data-logout="true" data-imei={props.data.imei} data-sn={props.data.sn} data-status={props.data.status} href="javascript:void(0);">远程退出</a>
            </div>
		)
	}
});
module.exports = device;
