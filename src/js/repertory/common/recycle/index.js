import React, { Component } from 'react';
import Checkbox from '../checkbox/index.jsx'
import ScrollHelp from '../iscroll/index.jsx';
import Nodata from '../nodata/index.jsx'
import Waiting from '../waiting/index.jsx';
import Notify from '../Notification/index.jsx'
import {Input} from 'antd';
import Dialog from '../modal/index.jsx';
import ClearItem from './clearItem'

class RecycleAllDom extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        if(
            nextProps.recycle.clearAll == this.props.recycle.clearAll &&
            nextProps.recycle.clearAllLoading == this.props.recycle.clearAllLoading &&
            nextProps.recycle.clearChose.join('') == this.props.recycle.clearChose.join('')
        ){
            return false;
        }
        return true;
    }

    //打开清空回收站
    openClearAll = () => {
        this.props.actions.clearAllVisible();
    }
    //选择清空回收站
    choseClear = (index) => {
        let i = -1;
        this.props.recycle.clearChose.forEach(function(value,key){
            if(value === index){
                i = key;
                return false;
            }
        });
        if(i == -1){
            this.props.actions.addClearItem(index);
        }else{
            this.props.actions.removeClearItem(i);
        }
    }
    //清空
    clearAllStart = () => {
        var input = this.refs.password.refs.input;
        var val = input.value;
        if(this.props.recycle.clearChose.length == 0){
            Notify.alert('请选择要清空的栏目');
            return false;
        }
        if(!val || val.trim() == ''){
            Notify.alert('请输入密码');
            return false;
        }
        this.props.actions.verify(val.trim());
        setTimeout(function(){
            input.value = '';
        },500);
    }
    //清空结束
    clearAllOver = () => {
        this.props.actions.clearAllResultHidden();
        this.props.actions.queryGroup();
    }
    //清空取消
    clearAllCancel = () => {
        var input = this.refs.password.refs.input;
        this.props.actions.clearAllHidden();
        setTimeout(function(){
            input.value = '';
        },500);
    }
    render() {
        let {
            recycle,
            actions
        } = this.props;

        let clearList =  ['联系人','短信','便签','云相册'];
        let clearItemList = clearList.map((value,key) => {
            let checked = recycle.clearChose.indexOf(key) > -1 ? true : false;
            return (
                <ClearItem key={key} checked={checked} index={key} name={value} choseClear={this.choseClear} />
            );
        })

        return (
            <div className="recycle-dialog">
                <Dialog
                    visible={recycle.clearAll}
                    animation="slide-fade"
                    maskAnimation="fade"
                    prefixCls="modal"
                    style={{ width: 450 }}
                    wrapClassName="clear-recycle"
                    title={<span>清空回收站</span>}
                    footer={[
                        {
                            name:'取消',
                            className:'btn btn-primary',
                            onClick:this.clearAllCancel
                        },{
                            name:'确定',
                            className:'btn btn-primary',
                            onClick:this.clearAllStart
                        }
                    ]}
                >
                    <div className="dialog">
                        <div className="content">
                            <p className="clear-tip">以下数据清空后将无法恢复！请选择：</p>
                            <ul className="icon-wrap" id="iconWrap">
                                {clearItemList}
                            </ul>
                            <div className="pass-wrap">
                                <Input size="large" type="password" placeholder="请输入Flyme密码" ref="password" />
                            </div>
                        </div>
                    </div>
                </Dialog>

                <Dialog
                    visible={recycle.clearAllLoading}
                    animation="slide-fade"
                    maskAnimation="fade"
                    prefixCls="modal"
                    style={{ width: 450 }}
                    wrapClassName="clear-loading"
                    footer={false}
                >
                    <div className="dialog">
                        <div className="content">
                            <p className="clear-tip">清空中，请耐心等待</p>
                            <div className="loading-wrap">
                                <span id="loadingBar" className="loading-bar trans01"></span>
                            </div>
                        </div>
                    </div>
                </Dialog>

                <Dialog
                    visible={recycle.clearAllResult}
                    animation="slide-fade"
                    maskAnimation="fade"
                    prefixCls="modal"
                    style={{ width: 450 }}
                    wrapClassName="clear-loading"
                    footer={[
                        {
                            name:'确定',
                            className:'btn btn-primary',
                            onClick:this.clearAllOver
                        }
                    ]}
                >
                    <div className="dialog">
                        <div className="content">
                            <p className="clear-tip">{recycle.clearAllTip}</p>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default RecycleAllDom;
