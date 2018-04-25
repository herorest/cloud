import React, { Component } from 'react';
import LeftWrap from './leftWrap';
import RightWrap from './rightWrap';
import Sidebar from '../../common/sidebar/index.jsx';

class Container extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        let {
            group,
            detail,
            column,
            modal,
            actions
        } = this.props;

        return (
            <div className="flyme-content clearfix" id="flymeContent">
                <div className="flyme-content-body">
                    <Sidebar type="sms" />
                    <LeftWrap column={column} group={group} actions={actions} />
                    <RightWrap detail={detail} group={group} modal={modal} actions={actions} />
                </div>
            </div>
        )
    }
}

export default Container;
