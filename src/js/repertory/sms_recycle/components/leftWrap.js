import React, { Component } from 'react';
import SmsLi from './smsLi';
import Checkbox from '../../common/checkbox/index.jsx';
import ScrollHelp from '../../common/iscroll/index.jsx';
import Nodata from '../../common/nodata/index.jsx';
import Waiting from '../../common/waiting/index.jsx';
import Notify from '../../common/Notification/index.jsx';
import MenuDom from './menu';
import SubMenuDom from './submenu';
import {Input} from 'antd';
import Dialog from '../../common/modal/index.jsx';
import ClearItem from './clearItem';
import RecycleAllDom from '../../common/recycle/index.js';

class LeftWrap extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.actions.queryGroup();
    }
    shouldComponentUpdate(nextProps) {
        if(
            JSON.stringify(nextProps.group) == JSON.stringify(this.props.group) &&
            JSON.stringify(nextProps.menu) == JSON.stringify(this.props.menu) &&
            nextProps.recycle.clearAll == this.props.recycle.clearAll &&
            nextProps.recycle.clearAllLoading == this.props.recycle.clearAllLoading &&
            nextProps.recycle.clearChose.join('') == this.props.recycle.clearChose.join('')
        ){
            return false;
        }
        return true;
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.group.firstFetch){
            this.props.actions.queryDetail(nextProps.group.currentItem);
            this.props.actions.firstFetchClose();
        }
    }
    //单选
    checkCallback = (index) =>{
        let i = -1;
        this.props.group.multiItem.forEach(function(value,key){
            if(value === index){
                i = key;
                return false;
            }
        });
        if(i == -1){
            this.props.actions.addCheckItem(index);
        }else{
            this.props.actions.removeCheckItem(i);
        }
    }
    //全选
    checkAllCallback = () =>{
        if(this.props.group.multiItem.length < this.props.group.list.length){
            this.props.actions.checkAllItem();
        }else{
            this.props.actions.unCheckAllItem();
        }

    }
    //详情
    showDetail = (index) => {
        if(this.props.group.currentItem !== index){
            this.props.actions.changeCurrentItem(index);
            this.props.actions.queryDetail(index);
        }
    }
    loadNext = (length) => {
        this.props.actions.queryGroup(length,'next');
    }
    onScroll = () => {
        this.loadNext();
    }
    menuVisibleChange = () => {
        if(this.props.menu.visible){
            this.props.actions.menuHidden();
        }else{
            this.props.actions.menuVisible();
        }
    }
    subMenuVisibleChange = () => {
        if(this.props.menu.subVisible){
            this.props.actions.subMenuHidden();
        }else{
            this.props.actions.subMenuVisible();
        }
    }
    //打开清空回收站
    openClearAll = () => {
        this.props.actions.clearAllVisible();
    }
    render() {
        let {
            group,
            menu,
            modal,
            recycle,
            actions
        } = this.props;

        let clearList =  ['联系人','短信','便签','云相册'];

        //group
        let groupDom = null;
        let smsLi = [];
        let leftBodyClass = 'left-body';
        let choseAllDom = (
            <div className="left-chose">
                <div className="c-choseall">
                    <Checkbox type={"choseall"} checkCallback={this.checkAllCallback} id={'choseall'} checked={group.choseAllBtn} />
                </div>
                <div className="c-tip">全选</div>
            </div>
        )
        if (group && group.list.length > 0) {
            group.list.map((d, i) => {
                let active = false, checked = false
                if(group.currentItem || group.currentItem == 0){
                    if( group.list[group.currentItem].uniformNumber === d.uniformNumber){
                        active = true;
                    }
                }
                if(group.multiItem.indexOf(i) >= 0){
                    checked = true;
                }
                smsLi.push(<SmsLi key={i} data={d} index={i} active={active} checked={checked} showDetail={this.showDetail} checkCallback={this.checkCallback} group={group} />);
            });
            groupDom = (
                <ScrollHelp onScroll={this.onScroll} dataType={this.props.group.dataType} name="1">
                <ul>
                    {smsLi}
                </ul>
                </ScrollHelp>
            );
        }else{
            leftBodyClass += ' no-data'
            choseAllDom = null;
            if(group.firstFetch == null){
                groupDom = (
                    <Waiting />
                )
            }else{
                groupDom = (
                    <Nodata />
                )
            }
        }

        return (
            <div className="left-wrap" id="leftWrap" ref="leftWrap">
                <div className="left-header">
                    <MenuDom curr="1" visible={menu.visible} clearList={clearList} menuVisibleChange={this.menuVisibleChange} />
                    <SubMenuDom visible={menu.subVisible} subMenuVisibleChange={this.subMenuVisibleChange} openClearAll={this.openClearAll} />
                </div>
                <div className={leftBodyClass} ref="ul">
                    {groupDom}
                </div>
                {choseAllDom}
                <RecycleAllDom group={group} recycle={recycle} actions={actions}  />
            </div>
        )
    }
}

export default LeftWrap;
