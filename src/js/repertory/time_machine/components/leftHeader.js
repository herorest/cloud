import React, { Component } from 'react';

class LeftHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="left-header">
                <ul className="header-list">
                    <li className="active">时光机</li>
                    <li>短信</li>
                    <li>便签</li>
                </ul>
                <div className="header-more">
                    <span></span>
                </div>
            </div>
        )
    }
}

export default LeftHeader;
