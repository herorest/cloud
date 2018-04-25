import React, { Component } from 'react';
import ColumnLi from './columnLi';
import SmsLi from './smsLi'
import Checkbox from '../../common/checkbox/index.jsx'
import ScrollHelp from '../../common/iscroll/index.jsx';
import Nodata from '../../common/nodata/index.jsx'
import Waiting from '../../common/waiting/index.jsx'


class LeftWrap extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.actions.queryGroup();
    }
    shouldComponentUpdate(nextProps) {
        if(JSON.stringify(nextProps.group) == JSON.stringify(this.props.group)){
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
    //切换栏目
    changeColumn = (index) => {
        if(index == this.props.column){
            return false;
        }
        this.props.actions.resetFirstFetch();
        this.props.actions.resetDetailFirstFetch();
        this.props.actions.modifyColumn(index);
        setTimeout(() => {
            this.props.actions.queryGroup();
            this.props.actions.changeDataType('origin');
        },0)
    }
    render() {
        let {
            group,
            column,
            actions
        } = this.props;

        //column
        let clist = [
            {
                name:'个人',
                index:0
            },{
                name:'通知',
                index:3
            },{
                name:'收藏',
                index:1
            }
        ];
        let cLi = clist.map((value,index) => {
            let active = false;
            if(value.index === column){
                active = true;
            }
            return <ColumnLi active={active} name={value.name} key={index} index={value.index} actions={actions} changeColumn={this.changeColumn} />
        })

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
            <div className="left-wrap" id="leftWrap">
                <div className="left-header">
                    <ul className="left-head-list clearfix">
                        {cLi}
                    </ul>
                </div>
                <div className={leftBodyClass} ref="ul">
                    {groupDom}
                </div>
                {choseAllDom}
            </div>
        )
    }
}

export default LeftWrap;
