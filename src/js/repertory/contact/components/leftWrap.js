import React, {Component} from 'react';
import Checkbox from '../../common/checkbox/index.jsx';
import ScrollHelp from '../../common/iscroll/index.jsx';
import Dropdown from '../../common/dropdown/index.jsx';
import FilterWrap from './filterWrap';
import ListItem from './listItem';
import {getShowDataArray, getSortListData} from '../common/util';
import {subStringLen} from '../../common/util-dom';

class LeftWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchActive: false
        }
    }
    componentDidMount() {
        this.props.actions.getGroupData();
        this.props.actions.getContactList({
            group: '全部联系人',
            start: 0,
            limit: 20
        });
    }
    componentDidUpdate() {
        if(!this.props.list.activeId && this.firstId) {
            this.props.actions.clickItem({ id: this.firstId });
            this.props.actions.searchContact({ id: this.firstId });
        }
        this.firstId = '';
    }
    // 获取排序后的数组
    getSortData() {
        let _this = this;
        let { data, checkList, activeId, loadingSuccess } = this.props.list;
        let showData = getShowDataArray(data);
        let tempArray = showData.map((v, i) => {
            return Object.assign({} , v, {
                checked: checkList.indexOf(v.id) > -1,
                active: v.id === activeId ? true : false
            })
        });
        let hasActive = tempArray.map((v) => v.active).length === tempArray.length ? false : true;
        let resultArray = getSortListData(tempArray);
        if(!hasActive && resultArray.length > 1 && loadingSuccess) {
            this.firstId = resultArray[1].id;
        }
        return resultArray;
    }
    getSearchDataList() {
        let _this = this;
        let { data, checkList, activeId, loadingSuccess } = this.props.list;
        let showData = getShowDataArray(data);
        let resultArray = showData.map((v, i) => {
            return Object.assign({} , v, {
                checked: checkList.indexOf(v.id) > -1,
                active: v.id === activeId ? true : false
            })
        })
        let hasActive = resultArray.map((v) => v.active).length === resultArray.length ? false : true;
        if(!hasActive && resultArray.length > 0 && loadingSuccess) {
            this.firstId = resultArray[0].id;
        }
        return resultArray;
    }
    checkAllCallback() {
        this.props.actions.checkAllClick({ check: !this.props.list.checkAll })
    }
    handleScroll() {
        let { start, loading, allData, isSearch, searchContent } = this.props.list;
        let curGroupName = this.props.group.curGroupName;
        if(!loading && !allData) {
            this.props.actions.startLoading();
            if(isSearch) {
                this.props.actions.searchContactList({ append: true, start: start, content: searchContent })
            } else {
                this.props.actions.getContactList({ append: true, start: start, group: curGroupName })
            }
        }

    }
    addContact() {

    }
    activeChange(flag) {
        this.setState({ searchActive: flag })
    }
    render() {
        let { actions, list, group } = this.props, _this = this;
        let sortArray = list.isSearch ? this.getSearchDataList() : this.getSortData();
        let listArray = sortArray.map((v, i) => {
            let checkFlag = list.checkList.length > 0 ? true : false;
            if(v.key) {
                return (
                    <li className="sort-key" key={v.key}>{v.key}</li>
                )
            } else {
                return (
                    <ListItem key={v.id} actions={actions} data={v} checkFlag={checkFlag} />
                )
            }
        })
        return (
            <div className="left-wrap">
                <div className="left-header">
                    <span>联系人</span>
                    
                    <Dropdown
                        width={160}
                        hasAngle={true}
                        align="left"
                        trigger="click"
                        data={[{
                            value: '导入联系人',
                            onClick: this.addContact.bind(this)
                        }, {
                            value: '导出联系人',
                        }, {
                            value: '刷新',
                        }]}
                    >
                        <a className="import-contact" href="javascript:void(0);" title='更多'></a>
                    </Dropdown>

                    <a style={{ display: this.state.searchActive ? 'none' : 'block' }} href="javascript:void(0);" onClick={this.addContact.bind(this)} title="新建" className='add-contact'></a>
                </div>
                <FilterWrap
                    searchInfo={{ count: list.searchCount, content: list.searchContent }}
                    actions={actions}
                    group={group}
                    activeChange={this.activeChange.bind(this)}
                    />
                <div className="left-search-result" style={{display: list.isSearch ? 'block' : 'none'}}>
                    搜索“<span title={list.searchContent}>{subStringLen(list.searchContent, 16)}</span>”<i>{list.searchCount}</i>个结果
                </div>
                <div className={list.isSearch ? 'left-body isSearch' : 'left-body'}>
                    <ScrollHelp dataType={this.props.list.dataType} name="1" onScroll={this.handleScroll.bind(this)}>
                        <ul>
                            {listArray}
                        </ul>
                    </ScrollHelp>
                </div>
                <div className="left-chose">
                    <div className="c-choseall">
                        <Checkbox type={"choseall"} checkCallback={this.checkAllCallback.bind(this)} id={'choseall'} checked={list.checkAllShow}/>
                    </div>
                    <div className="c-tip">全选</div>
                </div>
            </div>
        )
    }
}

export default LeftWrap;
