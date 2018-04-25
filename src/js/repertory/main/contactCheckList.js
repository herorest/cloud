import React from 'react';
import reqwest from 'reqwest';
import Utils from '../common/util-dom';
import {Modal,Button,Input} from 'antd';
import Interface from '../common/interface';
import Notification from '../common/notification/index.jsx';
import Avata from '../common/avata/index.jsx';

var entryCom = React.createClass({
	getInitialState:function() {
		return {
            chooseCheckList:[]
		};
	},
    componentWillReceiveProps:function(nextProps){
        if(nextProps.contactCheckclear !== this.props.contactCheckclear && nextProps.contactCheckclear){
            this.setState({
                chooseCheckList:[]
            });
            nextProps.resetContactList();
        }
    },
    chooseCheckList:function(key){
        let item = this.refs['cl' + key];
        let name = item.getAttribute('name');
        let clist = this.state.chooseCheckList;

        if(clist.indexOf(name) > -1){
            let newList = [...clist];
            newList.remove(name);
            this.setState({
                chooseCheckList:newList
            });
        }else{
            if(clist.length < 3){
                let newList = [...clist];
                newList.push(item.getAttribute('name'));
                this.setState({
                    chooseCheckList:newList
                });
            }
        }
    },
    refresh:function(){
        this.props.getContactMaterial(true);
        this.setState({
            chooseCheckList:[]
        });
    },
    showCheck:function(key,hide){
        let item = this.refs['cl' + key].querySelectorAll('i')[0];
        if(Utils.hasClass(item,'active')){
            return
        }else{
            if(hide == 'hide'){
                Utils.removeClass(item,'hover');
            }else{
                if(this.state.chooseCheckList.length < 3){
                    Utils.addClass(item,'hover');
                }
            }
        }

    },
	render:function() {
        let self = this;

        //联系人列表
        let checklist = [];
        if(this.props.contactCheckList.length > 0){
            this.props.contactCheckList.forEach(function(item,k){
                let checked = false;
                let classn = 'no_select';
                if(self.state.chooseCheckList.indexOf(item) > -1){
                    checked = true;
                }
                if(self.state.chooseCheckList.length == 3 && !checked){
                    classn += ' disable'
                }
                checklist.push(
                    <li className={classn} ref={'cl' + k} key={k} name={item} onClick={self.chooseCheckList.bind(null,k)} onMouseOver={self.showCheck.bind(null,k)} onMouseOut={self.showCheck.bind(null,k,'hide')}>
                        <Avata name={item} />
                        <span className="contact-check-name" data-title={item}>{item}</span>
                        <i className={checked ? 'active' : ''}></i>
                    </li>
                );
            });
        }

		return (
            <div className="tip-body">
                <p className="check-title clearfix">
                    从下方联系人中找出你通讯录中的3个联系人
                    <span id="changePersonGroup" onClick={this.refresh}>换一换</span>
                </p>
                <ul className="contact-check-list clearfix">
                    {checklist}
                </ul>
            </div>
        )
	}
});
module.exports = entryCom;
