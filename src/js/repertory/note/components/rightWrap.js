import React, { Component } from 'react';
import MultiList from './multiList';
import Dialog from '../../common/modal/index.jsx';
import Nodata from '../../common/nodata/index.jsx'
import Waiting from '../../common/waiting/index.jsx'
import Utils from '../../common/util-dom.js'
import RightGroupWrap from './rightGroupWrap';
import Notify from '../../common/notification/index.jsx';
import $ from 'n-zepto';
import Editor from '../../common/editor.js'
import ScrollHelp from '../../common/iscroll/index.jsx';

window.editorObj = null;

class RightWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh:null
        }
    }
    componentDidMount() {
        let self = this;
        editorObj = new Editor(this.props.detail,function(){
            self.setState({
                refresh:true
            });
        },function(){
            self.setState({
                refresh:true
            });
        });
    }
    componentDidUpdate(prevProps, prevState) {
        let self = this;
        if(prevProps.detail.body != this.props.detail.body){
            editorObj = new Editor(this.props.detail,function(){
                self.setState({
                    refresh:true
                });
            },function(){
                self.setState({
                    refresh:true
                });
            });
        }else if(prevProps.list.multiItem.length != this.props.list.multiItem.length){
            editorObj = new Editor(this.props.detail,function(){
                self.setState({
                    refresh:true
                });
            },function(){
                self.setState({
                    refresh:true
                });
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.detail.body != nextProps.detail.body){

        }
    }
    loadNext = (num) => {
        this.props.actions.queryDetail(null,num,'next');
    }
    onScroll = () => {
        this.loadNext();
    }
    finish = () => {
        let self = this;
        editorObj.blurHArea(null,{
            callback:function(json, bodyHtml, bodyText){
                json.uuid = self.props.detail.uuid;
                json.groupUuid = self.props.detail.groupStatus;
                self.props.actions.updateDetail(json);
            },
            noEditCallback:function(){
                self.props.actions.exitEditModel();
            },
            saveConfirmDialogOpen:function(){

            }
        });

    }
    cancel = () => {
        if(this.props.list.isAddNewItem){
            this.props.actions.cancelNewItem();
            this.props.actions.changeCurrentItem(0);
            this.props.actions.queryDetail(0);
        }
        this.props.actions.exitEditModel();
        this.props.actions.unCheckAllItem();
    }
    delmulti = () => {
        this.props.actions.multiDelVisible();
    }
    delsingle = (id) => {
        this.props.actions.singleDelVisible(id);
    }
    edit = () => {
        if(this.props.list.isAddNewItem){
            Notify.alert('您之前创建的便签尚未保存/取消');
            return false;
        }
        this.props.actions.enterEditModel();
    }
    //确定删除
    deleteAll = () => {
        this.props.actions.delList();
        this.props.actions.multiDelHidden();
        //判断是否需要重新获取详情数据
        if(this.props.list.multiItem.indexOf(this.props.list.currentItem) >= 0){
            this.props.actions.changeCurrentItem(0);
            this.props.actions.queryDetail(0);
        }
    }
    //确定删除短信
    deleteSingle = () => {
        this.props.actions.delList(this.props.modal.singleDelId);
        this.props.actions.singleDelHidden();
    }
    insertList = () => {
        $(editorObj.editorInfo.focusObj[0]).htmlarea('addList')
    }
    setEditModel = () => {
        return {
            listbtns : (
                <div className="right-header-info clearfix">
                    <div className="editmode clearfix">
                        <a href="javascript:void(0);" className="cancel" onClick={this.cancel}>取消</a>
                        <a href="javascript:void(0);" className="finish" onClick={this.finish}>完成</a>
                    </div>
                </div>
            ),
            listbody : (
                <div className="right-body">
                    <div className="right-body-info">
                        <span className="time">{Utils.compareDate(this.props.detail.lastUpdate)}</span>
                        <span className="text">共10字</span>
                        <RightGroupWrap curGroupId={this.props.detail.groupStatus} group={this.props.group} detail={this.props.detail} actions={this.props.actions} />
                        <a href="javascript:void(0);" className="insert-btn insert-pic"></a>
                        <a href="javascript:void(0);" className="insert-btn insert-list" onClick={this.insertList}></a>
                    </div>
                    <div className="right-body-content">
                        <ScrollHelp name="r2">
                            <div id="dialogContent">

                            </div>
                        </ScrollHelp>
                    </div>
                </div>
            )
        }
    }
    setPreviewModel = () => {
        let groupName = '';
        this.props.group.data.forEach((v, i) => {
            if(v.id == this.props.detail.groupStatus){
                groupName = v.name;
            }
        });
        return {
            listbtns : (
                <div className="right-header-info clearfix">
                    <div className="preview clearfix">
                        <a href="javascript:void(0);" className="edit" onClick={this.edit}>编辑</a>
                        <a href="javascript:void(0);" className="delete" onClick={this.delsingle}>删除</a>
                    </div>
                </div>
            ),
            listbody : (
                <div className="right-body">
                    <div className="right-body-info">
                        <span className="time">{Utils.compareDate(this.props.detail.lastUpdate)}</span>
                        <span className="text">共10字</span>
                        <span className="group">{groupName}</span>
                    </div>
                    <div className="right-body-content">
                        <ScrollHelp name="r1">
                            <div id="dialogContent">

                            </div>
                            <div className="right-body-cover"></div>
                        </ScrollHelp>
                    </div>
                </div>
            )
        }
    }
    render() {
        let {
            list,
            detail,
            modal,
            actions,
            group
        } = this.props;
        let content = '';

        let modalDiv = (
            <div>
                <Dialog
                    visible={modal.singleDel}
                    animation="slide-fade"
                    maskAnimation="fade"
                    prefixCls="modal"
                    style={{ width: 450 }}
                    footer={[
                        {
                            name:'取消',
                            className:'btn btn-primary',
                            onClick:actions.singleDelHidden
                        },{
                            name:'确定',
                            className:'btn btn-primary',
                            onClick:this.deleteSingle
                        }
                    ]}
                >
                    <div className="dialog">
                        <div className="content">
                            <div className="dialog-tip">
                                <p className="dt">确定删除此便签吗?</p>
                            </div>
                        </div>
                    </div>
                </Dialog>

                <Dialog
                    visible={modal.multiDel}
                    animation="slide-fade"
                    maskAnimation="fade"
                    prefixCls="modal"
                    style={{ width: 450 }}
                    footer={[
                        {
                            name:'取消',
                            className:'btn btn-primary',
                            onClick:actions.multiDelHidden
                        },{
                            name:'确定',
                            className:'btn btn-primary',
                            onClick:this.deleteAll
                        }
                    ]}
                >
                    <div className="dialog">
                        <div className="content">
                            <div className="dialog-tip">
                                <p className="dt">确定删除所有便签吗?</p>
                                <p className="red">（选中的数据在手机端也会被删除）</p>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        )

        let listbtns = <div className="right-header-info clearfix"></div>;
        let listbody = <div className="right-body"></div>;

        if(list.multiItem.length == 0){
            let data , name , nameO , num = detail.count || 0;
            if(list.isAddNewItem){
                let editDom = this.setEditModel();
                listbtns = editDom.listbtns;
                listbody = editDom.listbody;
            }else{
                if(!detail.firstFetch){
                    listbody = (
                        <div className="right-body">
                            <Waiting />
                        </div>
                    );
                }else{
                    let editDom;
                    if(detail.editModel){
                        editDom = this.setEditModel();
                        listbtns = editDom.listbtns;
                        listbody = editDom.listbody;
                    }else{
                        editDom = this.setPreviewModel();
                        listbtns = editDom.listbtns;
                        listbody = editDom.listbody;
                    }
                }
            }

        }else{
            listbtns = (
                <div className="right-header-info clearfix">
                    <div className="r-btns clearfix">
                        <a href="javascript:void(0);" className="cancel" onClick={this.cancel}>取消</a>
                        <a href="javascript:void(0);" className="delete" onClick={this.delmulti}>删除</a>
                    </div>
                </div>
            )
            listbody = (
                <div className="right-body">
                    <MultiList list={list} />
                </div>
            );
        }
        return (
            <div className="right-wrap" id="rightWrap" >
                <div className="right-header">
                    {listbtns}
                </div>
                {listbody}
                {modalDiv}
            </div>
        )
    }
}

export default RightWrap;
