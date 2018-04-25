import React, { Component } from 'react';
import ListLi from './listLi'
import Checkbox from '../../common/checkbox/index.jsx'
import ScrollHelp from '../../common/iscroll/index.jsx';
import Nodata from '../../common/nodata/index.jsx'
import Waiting from '../../common/waiting/index.jsx'
import Dropdown from '../../common/dropdown/index.jsx';
import FilterWrap from './filterWrap';
import { subStringLen } from '../../common/util-dom'
import Notify from '../../common/notification/index.jsx';

class LeftWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchActive: false
        }
    }
    componentWillMount() {
        this.props.actions.getGroupData();
        this.props.actions.queryList();
    }
    shouldComponentUpdate(nextProps) {
        if(
            JSON.stringify(nextProps.list) != JSON.stringify(this.props.list) ||
            nextProps.curGroupId == this.props.curGroupId
        ){
            return true;
        }
        return false;
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.list.firstFetch){
            this.props.actions.queryDetail(nextProps.list.currentItem);
            this.props.actions.firstFetchClose();
        }
    }
    activeChange(flag) {
        this.setState({ searchActive: flag })
    }
    //单选
    checkCallback = (index) =>{
        let i = -1;
        this.props.list.multiItem.forEach(function(value,key){
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
        if(this.props.list.multiItem.length < this.props.list.list.length){
            this.props.actions.checkAllItem();
        }else{
            this.props.actions.unCheckAllItem();
        }

    }
    //详情
    showDetail = (index) => {
        if(this.props.list.currentItem !== index){
            this.props.actions.changeCurrentItem(index);
            this.props.actions.queryDetail(index);
        }
    }
    loadNext = (length) => {
        this.props.actions.queryList(null,length,'next');
    }
    onScroll = () => {
        this.loadNext();
    }
    //新增
    addNewItem = () => {
        if(this.props.list.isAddNewItem){
            Notify.alert('您之前创建的便签尚未保存/取消');
            return false;
        }
        this.props.actions.createNewItem();
        this.props.actions.addNewItem();
    }
    render() {
        let {
            list,
            group,
            column,
            actions,
            detail
        } = this.props;

        //group
        let listDom = null;
        let listli = [];
        let leftBodyClass = 'left-body';
        let choseAllDom = (
            <div className="left-chose">
                <div className="c-choseall">
                    <Checkbox type={"choseall"} checkCallback={this.checkAllCallback} id={'choseall'} checked={list.choseAllBtn} />
                </div>
                <div className="c-tip">全选</div>
            </div>
        )
        if (list && list.list.length > 0) {
            list.list.map((d, i) => {
                let active = false, checked = false
                if(list.currentItem || list.currentItem == 0){
                    if( list.list[list.currentItem].uuid === d.uuid){
                        active = true;
                    }
                }
                if(list.multiItem.indexOf(i) >= 0){
                    checked = true;
                }
                listli.push(<ListLi key={i} data={d} index={i} active={active} detail={detail} checked={checked} showDetail={this.showDetail} checkCallback={this.checkCallback} list={list} />);
            });
            leftBodyClass += list.isSearch ? ' left-body-search' : ''
            listDom = (
                <ScrollHelp onScroll={this.onScroll} dataType={this.props.list.dataType} name="1">
                <ul>
                    {listli}
                </ul>
                </ScrollHelp>
            );
        }else{
            leftBodyClass += ' no-data'
            choseAllDom = null;
            if(list.firstFetch == null){
                listDom = (
                    <Waiting />
                )
            }else{
                listDom = (
                    <Nodata />
                )
            }
        }

        return (
            <div className="left-wrap" id="leftWrap">
                <div className="left-header">
                    <span>便签</span>
                    <a href="javascript:void(0);" title="新建" className="add" onClick={this.addNewItem}></a>
                </div>
                <FilterWrap
                    searchInfo={{ count: list.count, content: list.searchContent }}
                    actions={actions}
                    group={group}
                    list={list}
                />
                <div className="left-search-result" style={{display: list.isSearch ? 'block' : 'none'}}>
                    搜索“<span title={list.searchContent}>{subStringLen(list.searchContent, 16)}</span>”<i>{list.count}</i>个结果
                </div>
                <div className={leftBodyClass} ref="ul">
                    {listDom}
                </div>
                {choseAllDom}
            </div>
        )
    }
}

export default LeftWrap;
