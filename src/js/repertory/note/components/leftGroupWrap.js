import React, {Component} from 'react';
import LeftGroupItem from './leftGroupItem';
import Dropdown from '../../common/dropdown/index.jsx';
import ScrollHelp from '../../common/iscroll/index.jsx';
import {subStringLen} from '../../common/util-dom';
import Notify from '../../common/notification/index.jsx';

class LeftGroupWrap extends Component {
    constructor(props) {
        super(props)
    }
    itemChange = (data) => {
        if(this.props.list.isAddNewItem){
            Notify.alert('您之前创建的便签尚未保存/取消');
            return false;
        }
        this.props.actions.groupChange(data);
        this.props.actions.searchChangeReset();
        this.props.actions.queryList();
    }
    newGroup(e) {
        e.nativeEvent.stopImmediatePropagation();
    }
    render() {
        let group = this.props.group;
        let groupList = group.data.map((v, i) => {
            return (
                <LeftGroupItem data={v} key={v.id} selected={v.id === group.curGroupId} canEdit={false} group={group} itemChange={this.itemChange} />
            )
        });
        return (
            <Dropdown
                style={{width:200}}
                align="left"
                hasAngle={true}
                menu={groupList}
                trigger="click"
            >
                <div className="list-header-left">
                    <i></i>
                    <span className="sel-input">{subStringLen(group.curGroupName, 16)}({group.count})</span>
                </div>
            </Dropdown>

        )
    }
}

export default LeftGroupWrap;
