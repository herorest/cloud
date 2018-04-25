import React, {Component} from 'react';
import LeftGroupItem from './leftGroupItem';
import Dropdown from '../../common/dropdown/index.jsx';
import ScrollHelp from '../../common/iscroll/index.jsx';
import {subStringLen} from '../../common/util-dom';

class RightGroupWrap extends Component {
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
        let {
            detail,
            group
        } = this.props;

        let selectKey = group.curGroupId + '|' + group.curGroupName;
        let gid = detail.groupStatus;
        let groupName = '';
        let groupList = group.data.map((v, i) => {
            let select = false;
            if(gid == ''){
                gid = v.id;
            }
            if(v.id === gid){
                select = true;
                groupName = v.name;
            }
            return (
                <LeftGroupItem data={v} key={v.id} selected={select} canEdit={false} />
            )
        });
        return (
            <Dropdown
                style={{width:200}}
                align="right"
                hasAngle={true}
                menu={groupList}
                trigger="click"
            >
                <span className="group">{groupName}</span>
            </Dropdown>

        )
    }
}

export default RightGroupWrap;
