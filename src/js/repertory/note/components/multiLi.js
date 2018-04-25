import React, { Component } from 'react';
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


        return (
            <div className="list-item">
                <div className="title">{Utils.compareDate(data.modifyTime)}</div>
                <div className="content">{data.title}</div>
                <div className="img">
                    {
                        data.firstImg ?
                        <i className="i-img"></i> :
                        null
                    }
                    {
                        data.firstRecord ?
                        <i className="i-record"></i> :
                        null
                    }
                    {
                        data.topdate ?
                        <i className="i-topdate"></i> :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default MultiList;
