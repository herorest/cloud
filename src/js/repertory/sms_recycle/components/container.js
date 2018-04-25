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
            menu,
            modal,
            recycle,
            actions
        } = this.props;

        return (
            <div className="flyme-content clearfix" id="flymeContent">
                <div className="flyme-content-body">
                    <Sidebar type="recycle" />
                    <LeftWrap menu={menu} group={group} modal={modal} recycle={recycle} actions={actions} />
                    <RightWrap detail={detail} group={group} modal={modal} recycle={recycle} actions={actions} />
                </div>
            </div>
        )
    }
}

export default Container;
