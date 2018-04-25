import React from 'react';
import reqwest from 'reqwest';
import Utils from '../util-dom'
import Device from './device'
import {Modal, Button, Menu, Dropdown, Input} from 'antd';
import Notification from '../notification/index.jsx';
import Interface from '../interface';
import '../../../../css/device.css';


var deviceList = React.createClass({
	getInitialState:function() {
		return {
            deviceList:[],
            deviceListVisible:false,
            deviceLogoutVisible:false,
            deviceLogoutInfo:{
                sn:'',
                imei:'',
                status:''
            },
            deviceLogoutPassword:'',
            deviceLogoutTip:'',
            sendLogoutSmsVisible:false
		};
	},
	componentDidMount:function(){
        this.getDeviceInfo();
	},
    getDeviceInfo:function(){
        var self = this;
        Utils.ajax({
            url:Interface.apiUrl.getUserDeviceList,
            success:function(result){
                self.setState({
                    deviceList:result
                });
            }
        },reqwest,Notification);
    },
    handleMenuClick:function(e){
        console.log(e);
    },
    passwordChange:function(e){
        let value = e.currentTarget.value;
        if(value === ''){
            this.setState({
                deviceLogoutTip:'密码不能为空',
                deviceLogoutPassword:e.currentTarget.value
            });
        }else{
            this.setState({
                deviceLogoutTip:'',
                deviceLogoutPassword:e.currentTarget.value
            });
        }
    },
    handleVisibleChange:function(flag){
        this.setState({ deviceListVisible: flag });
    },
    setDeviceLogoutVisible:function(flag,info){
        this.setState({
            deviceLogoutVisible: flag,
            deviceLogoutInfo:info,
            deviceLogoutPassword:'',
            deviceLogoutTip:''
        });
    },
    setSendLogoutSmsVisible:function(flag){
        this.setState({
            deviceLogoutVisible:false,
            sendLogoutSmsVisible: flag
        });
    },
    sendLogoutSms:function(){
        let self = this;
        let password = this.state.deviceLogoutPassword;
        if(password !== ''){
            let sn = this.state.deviceLogoutInfo.sn;
            let imei = this.state.deviceLogoutInfo.imei;
            if(imei === ''){
                this.setState({
                    deviceLogoutTip:'非法请求'
                });
            }else{
                Utils.ajax({
                    url: Interface.apiUrl.remotelogout,
                    data:{
                        sn: sn,
        	            device: imei,
        	            password: password
                    },
                    success: function(result) {
                        self.setSendLogoutSmsVisible(true);
                    },
                },reqwest,Notification);
            }
        }else{
            this.setState({
                deviceLogoutTip:'密码不能为空'
            });
        }
    },
	render:function() {
        var devicelist = this.state.deviceList;
        var self = this;
        var menu = <Menu onClick={this.handleMenuClick}></Menu>;
        var tip = '连接中，请稍候...';
        if(devicelist && devicelist.length > 0){
            var list = [];
            devicelist.forEach(function(item,k){
                list.push(
                    <Menu.Item key={k}>
                        <Device key={k} data={item} logout={self.setDeviceLogoutVisible} closedrop={self.handleVisibleChange} />
                    </Menu.Item>
                )
            })
            menu = (
                <Menu>
                    {list}
                </Menu>
            );
            tip = <div className="animated fadeIn time02"><div className="tip">你连接了{devicelist.length}台手机</div><div className="arrow"></div></div>;
        }
		return (
            <div id="deviceSwitch" className="device-node">
                <Dropdown overlay={menu} trigger={['click']} visible={this.state.deviceListVisible} onVisibleChange={this.handleVisibleChange} placement='bottomCenter' getPopupContainer={() => document.getElementById('deviceSwitch')}>
                    <div className="device-switch">
                        {tip}
                    </div>
                </Dropdown>

                <Modal
                    width="460px"
                    title="远程退出"
                    wrapClassName="vertical-center-modal pd-left-right"
                    visible={this.state.deviceLogoutVisible}
                    onOk={() => this.sendLogoutSms(true)}
                    onCancel={() => this.setDeviceLogoutVisible(false)}
                    closable={false}
                >
                    <div className="dialog">
                        <div className="content">
                            <div className="dialog-tip">退出此设备的魅族账号，此次操作将清除该设备中的个人数据，但不会影响存储卡和Flyme云端数据</div>
                            <div className="dialog-pwd">
                                <Input type="password" id="rlPassword" name="rlPassword" value={this.state.deviceLogoutPassword} onChange={this.passwordChange} size="large" maxLength="32" placeholder="请输入密码" />
                                <p className="dialog-pwd-tip" id="rlPsswordTip">{this.state.deviceLogoutTip}</p>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    width="460px"
                    wrapClassName="vertical-center-modal single-button"
                    visible={this.state.sendLogoutSmsVisible}
                    onOk={() => this.setSendLogoutSmsVisible(false)}
                    onCancel={() => this.setSendLogoutSmsVisible(false)}
                    closable={false}
                    okText="我知道了"
                >
                    <div className="dialog">
                        <div className="content">
                            <div className="dialog-tip">
                                <img src="images/send.png" />
                                <p className="dt">远程退出请求已发出</p>
                                <p>在 2017/4/7 前，当此设备连接到网络时，将自动退出魅族账号</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
		)
	}
});
module.exports = deviceList;
