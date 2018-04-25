import React, {Component} from 'react';
import LeftGroupItem from './leftGroupItem';
import Dropdown from '../../common/dropdown/index.jsx';
import ScrollHelp from '../../common/iscroll/index.jsx';
import {subStringLen} from '../../common/util-dom';

class LeftGroupWrap extends Component {
    constructor(props) {
        super(props)
    }
    itemChange(group) {
        let groupInfo = group[0].split('|'), groupId = groupInfo[0], groupName = groupInfo[1], groupCount = groupInfo[2];
        this.props.actions.groupChange({ name: groupName, count: groupCount, id: groupId });
        this.props.actions.searchChangeReset();
        this.props.actions.getContactList({ start: 0, limit: 20, group: groupName });
    }
    newGroup(e) {
        e.nativeEvent.stopImmediatePropagation();
    }
    render() {
        let group = this.props.group;
        let selectKey = group.curGroupId + '|' + group.curGroupName;
        let groupList = group.data.map((v, i) => {
            return (
                <LeftGroupItem data={v} key={v.id} selected={v.id === group.curGroupId} canEdit={ (i == 0 || i == 1 || i == group.data.length - 1) ? false : true } />
            )
        });
        const menu = (
            <div className="left-group-content" style={{ height: (groupList.length < 10 ? 40 * groupList.length : 400) + 50 }}>
                <div className="left-group-list">
                    <ScrollHelp dataType="origin" name="1">
                        <ul>
                            {groupList}
                        </ul>
                    </ScrollHelp>
                </div>
                <div className="drop-btn-wrap">
                    <span className="drop-btn new-group" onClick={this.newGroup.bind(this)}>新建群组</span>
                </div>
            </div>
        )
        return (
            <div className="list-header-left">
                <i></i>
                <Dropdown
                    width={220}
                    align="left"
                    hasAngle={true}
                    menu={menu}
                    >
                    <span className="sel-input">{subStringLen(group.curGroupName, 16)}({group.count})</span>
                </Dropdown>
            </div>
        )
    }
}

export default LeftGroupWrap;
