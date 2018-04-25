import React, { Component } from 'react';
import RightHeader from './rightHeader';
import RightContent from './rightContent';

class RightWrap extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // Util.resizeWidth(this.refs.wrap, 651, 0.9);
        // Util.winWidthResize(this.refs.wrap, 651, 0.9);
    }
    render() {
        let list = this.props.list,
            actions = this.props.actions;
        return (
            <div className="right-wrapper" ref="wrap">
                <RightHeader />
                <RightContent
                    list={list}
                    actions={actions}
                />
            </div>
        )
    }
}

export default RightWrap;
