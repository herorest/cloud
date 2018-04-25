import React, { Component } from 'react';

class LeftContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let array = ['现在'].concat(this.props.list).concat('查看全部');
        let result = array.map((v, i) => {
            return <li className={'timeline' + i} key={v}>{v}</li>
        })
        return (
            <div className="left-content">
                <div className="timeline"></div>
                <ul className="timeline-list">
                    {result}
                </ul>
            </div>
        )
    }
}

export default LeftContent;
