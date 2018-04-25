import React, { Component } from 'react';
import Avata from '../../common/avata/index.jsx'
import ScrollHelp from '../../common/iscroll/index.jsx';
import Utils from '../../common/util-dom.js'

class MultiList extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    render() {
        let {
            data
        } = this.props;
        let name = data.senderName ? data.senderName : data.uniformNumber;
        let checked = data.checked;
        let time = Utils.compareDate(data.senddate);
        return (
            <li className="item clearfix">
                <Avata type={data.photo_type} name={name} />
                <div className="i-detail">
                    <div className="i-content" ref="content">
                        <span className="i-name">{name}</span>
                        <span className="i-sms">{data.body}</span>
                        <span className="i-time">{time}</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default MultiList;
