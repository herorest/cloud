import React, { Component } from 'react';
import LeftHeader from './leftHeader';
import LeftContent from './leftContent';

class LeftWrap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let list = this.props.list;
        return (
            <div className="left-wrapper clearfix">
                <LeftHeader />
                <LeftContent
                    list={list}
                />
            </div>
        )
    }
}

export default LeftWrap;
