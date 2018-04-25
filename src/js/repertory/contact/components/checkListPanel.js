import React, {Component} from 'react';
import BatchListItem from './BatchListItem';
import RightGroupDrop from './rightGroupDrop';
import Avata from '../../common/avata/index.jsx';
import ScrollHelp from '../../common/iscroll/index.jsx';
import Dropdown from '../../common/dropdown/index.jsx';
import {getShowDataArray} from '../common/util';

class CheckListPanel extends Component {
    constructor(props) {
        super(props);
    }
    getCheckInfo() {
        let { data, checkList, idList, checkAll } = this.props.list;
        let result = [], showData = getShowDataArray(data);
        checkList.forEach((v, i) => {
            let index = idList.indexOf(v);
            result.push(showData[index]);
        });
        let num = 0;
        if(!checkAll) {
            num = checkList.length;
        } else {
            num = checkList.length === idList.length ? 'all' : checkList.length
        }
        return {
            list: result,
            num: num
        }
    }
    handleCancel() {
        this.props.actions.resetCheckStatus();
    }
    handleDel() {

    }
    handleMove() {

    }
    render() {
        let checkInfo = this.getCheckInfo();
        let listArray = checkInfo.list.map((v, i) => {
            return (
                <BatchListItem key={v.id} data={v} />
            )
        });
        const menu = (
            <RightGroupDrop group={this.props.group} />
        )
        return (
            <div className="right-wrap" style={{ display: this.props.checkFlag ? 'block' : 'none' }}>
                <div className="right-header select clearfix">
                    <a className="c-btn cancel-btn" href="javascript:void(0);" onClick={this.handleCancel.bind(this)}>取消</a>
                    <span className="check-num">{checkInfo.num === 'all' ? '全部联系人' : checkInfo.num + '个联系人'}</span>
                    <a className="c-btn del-btn" href="javascript:void(0);" onClick={this.handleDel.bind(this)}>删除</a>
                    <Dropdown
                        ref="dropdown"
                        menu={menu}
                        hasAngle={true}
                        trigger="click"
                        clickFun={this.handleMove.bind(this)}
                        align="center"
                        width={222}
                        dropdownStyle={{ marginTop: '-5px' }}
                        >
                        <a className="c-btn move-btn" href="javascript:void(0);">移动到</a>
                    </Dropdown>
                </div>
                <div className="right-body">
                    <ScrollHelp name="1" dataType={this.props.dataType}>
                        <ul className="batch-list clearfix">
                            {listArray}
                        </ul>
                    </ScrollHelp>
                </div>
            </div>
        )
    }
}

export default CheckListPanel;
