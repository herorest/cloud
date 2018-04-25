import React from 'react';
import reqwest from 'reqwest';
import Utils from '../common/util-dom';
import Entry from './entry';
import {Modal,Button,Input} from 'antd';
import ModalAll from './modal';
import Interface from '../common/interface';
import SendCount from './sendCount';
import Notification from '../common/notification/index.jsx';
import ContactCheckList from './contactCheckList';
import InputNumber from './inputNumber';

import '../../../css/entry.css';

var entryCom = React.createClass({
	getInitialState:function() {
		return {
			list:[],
            entry:[
                {
                    name:'contact',
                    intro:'联系人'
                },{
                    name:'mess',
                    intro:'短信'
                },{
                    name:'note',
                    intro:'便签'
                },{
                    name:'photo',
                    intro:'云相册'
                }, {
                    name: 'recycle',
                    intro: '回收站'
                },{
                    name:'find',
                    intro:'查找手机'
                }
            ],
            modalVisible:{
                checkwayChoose:false,
                messCheck:false,
                choosePerson:false,
                bindPhone:false,
                enterCodes:false,
                contactCheckInfo:false
            },
            modalConfig:{
                width:'560px',
                classn:'security-check vertical-center-modal '
            },
            modalFlag:{
                contactCheckList:[],
                contactCheckLimit:false,
                contactCheckclear:false,  //清空已选择的验证联系人列表
                phoneTipError:false,
                phoneTip:'今天验证的次数过多，请改用短信方式验证或明天再试',
                messCodeError:false,
                messCodes:'验证码错误或者已经过期'
            },
            userData:this.props.userData
		};
	},
	componentDidMount:function(){
        this.animated();
	},
    componentWillReceiveProps:function(newProps){
        //更新userData
        if(newProps.userData && (newProps.userData.status != this.props.userData.status)){
            this.setState({
                userData:newProps.userData
            });
        }
    },
    animated:function(){
        let li = this.refs.entryWrap.querySelectorAll('li');
        Utils.removeClass(li,'no');
    },
    modalVisible:function(type,flag){
        let newO = {};
        newO[type] = flag;
        this.setState({
            modalVisible:this.changeShowModal(newO)
        });
    },
    changeShowModal:function(obj){
        var newVisible = {
            checkwayChoose:false,
            messCheck:false,
            bindPhone:false,
            enterCodes:false,
            choosePerson:false,
            contactCheckInfo:false
        }
        return {
            ...newVisible,
            ...obj
        }
    },
    //选择路线
    checkwayChoose:function(type){
        let self = this;
        if(type == 'contact'){
            //获取用户联系人是否大于10人，否则使用短信验证
            Utils.ajax({
                url:Interface.apiUrl.checkable,
                success:function(result){
                    if(result) {
                        self.getContactMaterial(false);
    				} else {
    					//本账户联系人少于10位，请使用手机短信验证
    				}
                }
            },reqwest,Notification);
        }else{
            this.setState({
                modalVisible:this.changeShowModal({
                    messCheck:true
                })
            });
        }
    },
    //获取用户验证数据
    getContactMaterial:function(refreshFlag, delay) {
        var self = this;
        Utils.ajax({
            url:Interface.apiUrl.getMaterial,
            success:function(result){
                if(result) {
                    if(result.overLimit) {//已经不可以再继续校验
                        this.setState({
                            modalVisible:self.changeShowModal({
                                contactCheckInfo:true
                            }),
                            modalFlag:{
                                ...self.state.modalFlag,
                                phoneTip:(refreshFlag && refreshFlag === true) ? '今天刷新次数过多，请改用短信方式验证或明天再试' : '今天验证的次数过多，请改用短信方式验证或明天再试',
                                contactCheckLimit:true
                            }
                        });
                        return ;
                    }
                    var array = result.names;
                    var len = array.length;
                    if(len < 8) {
                        this.setState({
                            modalVisible:self.changeShowModal({
                                contactCheckInfo:true
                            }),
                            modalFlag:{
                                ...self.state.modalFlag,
                                phoneTip:'本账户联系人少于10位，请使用手机短信验证',
                                contactCheckLimit:true
                            }
                        });
                        return ;
                    } else {
                        array = array.slice(0, 8);
                        self.setState({
                            modalVisible:self.changeShowModal({
                                choosePerson:true
                            }),
                            modalFlag:{
                                ...self.state.modalFlag,
                                contactCheckLimit:false,
                                contactCheckList:array
                            }
                        });
                    }
                }
            }
        },reqwest,Notification);
    },
    //发送短信
    sendMessHandle:function(){
        let self = this;
        Utils.ajax({
            url:Interface.apiUrl.sendsms,
            success:function(result){
    			var status = result.status;
                var userId = '';
                switch(status){

					//短信校验发送次数过多
					case '3':
                        self.setState({
                            modalFlag:{
                                ...self.state.modalFlag,
                                messCodeError:true,
                                messCodes:'发送短信次数过多，请一个小时后重试'
                            }
                        });
					break;
				}
            }
		},reqwest,Notification);
    },
    //校验验证码
    checkMessCodes:function(){
        var value = this.refs.messCodes.refs.messCodes.refs.input.value;
        Utils.ajax({
            url:Interface.apiUrl.sendsms,
            success:function(result){
    			var status = result.status;
                var userId = '';
                switch(status){
                    //短信校验失效(超时或者没有点击发送按钮)
                    case '2':
                        self.setState({
                            modalFlag:{
                                ...self.state.modalFlag,
                                messCodeError:true,
                                messCodes:'验证码错误或已过期'
                            }
                        });
                    break;
                    //短信校验失败
                    case '0':
                        self.setState({
                            modalFlag:{
                                ...self.state.modalFlag,
                                messCodeError:true,
                                messCodes:'验证码错误'
                            }
                        });
                    break;
                    //短信校验成功
                    case '1':
                        self.setState({
                            modalFlag:{
                                ...self.state.modalFlag,
                                messCodeError:false,
                                messCodes:''
                            },
                            userData:{
                                ...self.state.userData,
                                status:1
                            }
                        });
                        // MeizuBH("action=unlock_phone&userId=" + userId);//通过短信方式解锁的数据埋点
                    break;
				}
            }
		},reqwest,Notification);

        //this.modalVisible('enterCodes',false);
    },

    //关闭联系人验证弹框
    cancelChoosePerson:function(){
        this.setState({
            modalVisible:this.changeShowModal({
                choosePerson:false
            })
        });
    },

    //清空已选以及所有联系人验证列表
    clearContactList:function(){
        this.setState({
            modalFlag:{
                ...this.state.modalFlag,
                contactCheckclear:true,
                contactCheckList:[],
                contactCheckLimit:false
            }
        });
    },

    //重置 contactCheckclear
    resetContactList:function(){
        this.setState({
            modalFlag:{
                ...this.state.modalFlag,
                contactCheckclear:false
            }
        });
    },

    //发送短信
    sendMessage:function(){
        this.setState({
            modalVisible:this.changeShowModal({
                'enterCodes':true
            })
        });
    },

	render:function() {
        let self = this;
        let entrylist = [];
        this.state.entry.forEach(function(item,k){
            entrylist.push(
                <Entry key={k} index={k} data={item} userData={self.state.userData} modalVisible={self.modalVisible} />
            );
        });

        //验证码提示
        let messCodeTip = {
            visibility:'hidden'
        } ;
        if(this.state.modalFlag.messCodeError){
            messCodeTip = {
                visibility:'visible'
            }
        }

		return (
            <div className="entry-wrap no-select" id="entry" ref="entryWrap">
                <ul>
                    {entrylist}
                </ul>

                <Modal
                    width={this.state.modalConfig.width}
                    wrapClassName={`${this.state.modalConfig.classn} mess-check`}
                    visible={this.state.modalVisible.messCheck}
                    onOk={() => this.sendMessage()}
                    onCancel={() => this.modalVisible('messCheck',false)}
                    okText="发送短信"
                >
                    <ModalAll />
                    <div className="tip-body">
                        <div className="tip-body-content">
                            <div className="content-wrapper">
                                <p className="tip-reason">
                                    为了保障您的私密数据安全，需要进行身份校验
                                </p>
                                <p className="tip-operate">
                                    点击发送短信按钮，将会发送一条有验证码的短信至手机
                                </p>
                                <p className="phone-number">
                                    {this.props.userData.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    width={this.state.modalConfig.width}
                    wrapClassName={`${this.state.modalConfig.classn} checkway-choose`}
                    visible={this.state.modalVisible.checkwayChoose}
                    onOk={() => this.modalVisible('checkwayChoose',false)}
                    onCancel={() => this.modalVisible('checkwayChoose',false)}
                    okText="发送短信"
                    footer={null}
                >
                    <ModalAll />
                    <div className="tip-content clearfix">
                        <div className="content-wrap">
                            <div className="tip-content-contact" onClick={this.checkwayChoose.bind(this,'contact')}>
                                <span className={this.state.modalFlag.contactCheckLimit ? 'pic disable' : 'pic'}></span>
                                <span className="word">辨别联系人验证</span>
                            </div>
                        </div>
                        <div className="content-wrap">
                            <div className="tip-content-phone" onClick={this.checkwayChoose.bind(this,'phone')}>
                                <span className="pic" id="phoneWay"></span>
                                <span className="word">手机短信验证</span>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    width={this.state.modalConfig.width}
                    wrapClassName={`${this.state.modalConfig.classn} choose-person`}
                    visible={this.state.modalVisible.choosePerson}
                    onOk={() => this.modalVisible('choosePerson',false)}
                    onCancel={() => this.cancelChoosePerson()}
                    okText="确定"
                    afterClose={() => this.clearContactList()}
                >
                    <ModalAll />
                    <ContactCheckList resetContactList={this.resetContactList} contactCheckclear={this.state.modalFlag.contactCheckclear} getContactMaterial={this.getContactMaterial} contactCheckList={this.state.modalFlag.contactCheckList}   />
                </Modal>

                <Modal
                    width={this.state.modalConfig.width}
                    wrapClassName={`${this.state.modalConfig.classn} bind-phone`}
                    visible={this.state.modalVisible.bindPhone}
                    onOk={() => this.modalVisible('bindPhone',false)}
                    onCancel={() => this.modalVisible('bindPhone',false)}
                    okText="前往绑定手机"
                >
                    <ModalAll />
                    <div className="tip-body">
                        <div className="tip-body-content">
                            <div className="content-wrapper">
                                <p className="tip-reason">
                                    为了保障您的私密数据安全，需要进行身份校验
                                </p>
                                <p className="phone-number">
                                    你还没有绑定手机，请先绑定手机
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    width={this.state.modalConfig.width}
                    wrapClassName={`${this.state.modalConfig.classn} enter-codes`}
                    visible={this.state.modalVisible.enterCodes}
                    onOk={() => this.checkMessCodes()}
                    onCancel={() => this.modalVisible('enterCodes',false)}
                    okText="确定"
                >
                    <ModalAll />
                    <div className="tip-body">
                        <div className="tip-body-content">
                            <div className="content-wrapper">
                                <p className="tip-operate">
                                    您接收验证码的手机是：<span className="phone-number">{this.props.userData.phone}</span>
                                </p>
                                <p>
                                    <SendCount sendMessHandle={this.sendMessHandle} messCodeError={this.state.modalFlag.messCodeError} />
                                    <InputNumber ref="messCodes" />
                                </p>
                                <p className="code-expired" style={messCodeTip}>
                                    <i></i><span>{this.state.modalFlag.messCodes}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    width={this.state.modalConfig.width}
                    wrapClassName={`${this.state.modalConfig.classn} contact-checkInfo`}
                    visible={this.state.modalVisible.contactCheckInfo}
                    onOk={() => this.modalVisible('contactCheckInfo',false)}
                    onCancel={() => this.modalVisible('contactCheckInfo',false)}
                    okText="确定"
                >
                    <ModalAll />
                    <div className="tip-body">
                        <div className="tip-body-content">
                            <div className="content-wrapper">
                                <p className="bindPhoneTip" id="contactCheckContent">
                                    {this.state.modalFlag.phoneTip}
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
		)
	}
});
module.exports = entryCom;
