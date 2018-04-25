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
            list,
            detail,
            modal,
            group,
            actions
        } = this.props;

        return (
            <div className="flyme-content clearfix" id="flymeContent">
                <div className="flyme-content-body">
                    <Sidebar type="note" />
                    <LeftWrap list={list} detail={detail} actions={actions} group={group} />
                    <RightWrap detail={detail} list={list} modal={modal} actions={actions} group={group} />
                </div>
            </div>
        )
    }
}

export default Container;
