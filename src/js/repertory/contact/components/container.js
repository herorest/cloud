import React, {Component} from 'react';

import LeftWrap from './leftWrap';
import RightWrap from './rightWrap';
import CheckListPanel from './checkListPanel';
import Sidebar from '../../common/sidebar/index.jsx';

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { actions, list, group, contact } = this.props;
        let checkFlag = list.checkList.length === 0 ? false : true;
        return (
            <div className="flyme-content clearfix" id="flymeContent">
                <div className="flyme-content-body">
                    <Sidebar type="contact" />
                    <LeftWrap actions={actions} list={list} group={group} />
                    <RightWrap checkFlag={checkFlag} contact={contact} list={list} actions={actions} group={group} />
                    <CheckListPanel dataType={list.dataType} actions={actions} list={list} checkFlag={checkFlag} group={group} />
                </div>
            </div>
        )
    }
}

export default Container;
