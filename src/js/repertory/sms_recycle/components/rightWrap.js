import React, { Component } from 'react';
import Avata from '../../common/avata/index.jsx';
import DetailList from './detailList';
import MultiList from './multiList';
import Dialog from '../../common/modal/index.jsx';
import Nodata from '../../common/nodata/index.jsx';
import Waiting from '../../common/waiting/index.jsx';

class RightWrap extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps) {
        if(
            nextProps.recycle.clearAll != this.props.recycle.clearAll ||
            nextProps.recycle.clearAllLoading != this.props.recycle.clearAllLoading ||
            nextProps.recycle.clearChose.length != this.props.recycle.clearChose.length
        ){
            return false;
        }
        return true;
    }
    loadNext = (num) => {
        this.props.actions.queryDetail(null,num,'next');
    }
    onScroll = () => {
        this.loadNext();
    }
    cancel = () => {
        this.props.actions.unCheckAllItem();
    }
    del = () => {
        this.props.actions.multiDelVisible();
    }
    delsms = (id) => {
        this.props.actions.smsDelVisible(id);
    }
    //确定删除
    deleteAll = () => {
        this.props.actions.delGroup();
        this.props.actions.multiDelHidden();
        //判断是否需要重新获取详情数据
        if(this.props.group.multiItem.indexOf(this.props.group.currentItem) >= 0){
            this.props.actions.changeCurrentItem(0);
            this.props.actions.queryDetail(0);
        }
    }
    //确定删除短信
    deleteSms = () => {
        this.props.actions.delSms(this.props.modal.smsDelId);
        this.props.actions.smsDelHidden();
    }
    addFavo = (id,type) => {
        this.props.actions.addFavo(id,type);
    }
    render() {
        let {
            group,
            detail,
            modal,
            recycle,
            actions
        } = this.props;
        let content = '';

        let modalDiv = (
            <div>
                <Dialog
                    visible={modal.smsDel}
                    animation="slide-fade"
                    maskAnimation="fade"
                    prefixCls="modal"
                    style={{ width: 450 }}
                    footer={[
                        {
                            name:'取消',
                            className:'btn btn-primary',
                            onClick:actions.smsDelHidden
                        },{
                            name:'确定',
                            className:'btn btn-primary',
                            onClick:this.deleteSms
                        }
                    ]}
                >
                    <div className="dialog">
                        <div className="content">
                            <div className="dialog-tip">
                                <p className="dt">确定删除此信息吗?</p>
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
                                <p className="dt">确定删除所有信息吗?</p>
                                <p className="red">（选中的数据在手机端也会被删除）</p>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        )

        if(group.multiItem.length == 0){
            let data , name , nameO , num = detail.count || 0;

            if(!detail.firstFetch){
                return (
                    <div className="right-wrap" id="rightWrap">
                        <div className="right-header">
                            <div className="right-header-info clearfix"></div>
                        </div>
                        <div className="right-body">
                            <Waiting />
                        </div>
                    </div>
                )
            }else{
                if(group && group.list && group.list.length > 0){
                    group.list.forEach((value,key) => {
                        if(value.uniformNumber === group.list[group.currentItem].uniformNumber){
                            data = value;
                            return true;
                        }
                    });
                }else{
                    return (
                        <div className="right-wrap" id="rightWrap">
                            <div className="right-header">
                                <div className="right-header-info clearfix"></div>
                            </div>
                            <div className="right-body">
                                <Nodata />
                            </div>
                        </div>
                    )
                }
            }

            if(data.senderName){
                name = data.senderName;
                nameO = (
                    <div className="i-detail">
                        <p>{data.senderName}</p>
                        <p>{data.uniformNumber}</p>
                    </div>
                );
            }else{
                name = data.uniformNumber;
                nameO = (
                    <div className="i-detail i-detail-single">
                        <p>{data.uniformNumber}</p>
                    </div>
                );
            }

            return (
                <div className="right-wrap" id="rightWrap">
                    <div className="right-header">
                        <div className="right-header-info clearfix">
                            <Avata type={data.photo_type} id={data.contactId} name={name} />
                            {nameO}
                            <div className="i-count">共{num}条</div>
                        </div>
                    </div>
                    <div className="right-body">
                        <DetailList detail={detail} addFavo={this.addFavo} delsms={this.delsms} onScroll={this.onScroll}  />
                    </div>
                    {modalDiv}
                </div>
            )
        }else{
            return (
                <div className="right-wrap" id="rightWrap">
                    <div className="right-header">
                        <div className="right-header-info clearfix">
                            <div className="r-btns clearfix">
                                <a href="javascript:void(0);" className="r-cancel" onClick={this.cancel}>取消</a>
                                <a href="javascript:void(0);" className="r-del" onClick={this.del}>删除</a>
                            </div>
                        </div>
                    </div>
                    <div className="right-body">
                        <MultiList group={group} />
                    </div>
                    {modalDiv}
                </div>
            )
        }
    }
}

export default RightWrap;
