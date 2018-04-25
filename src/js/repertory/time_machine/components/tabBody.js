import React, { Component } from 'react';
import ListItem from './listItem.js';

class TabBody extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { list, flypoint, total, actions, tabIndex } = this.props;
        let result = list.map((v, i) => {
            let data = Object.assign({}, v, { listIndex: i, tabIndex: tabIndex })
            return (
                <ListItem key={v.uid} data={data} actions={actions} />
            )
        });
        if(total > 6) {
            return (
                <div className="tab-body">
                    <ul className="contact-list clearfix">
                        {result}
                        <li className="contact-list-item more"><span></span></li>
                        <li className="contact-list-item total"><span>{total}</span></li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="tab-body">
                    <ul className="contact-list clearfix">
                        {result}
                    </ul>
                </div>
            )
        }
    }
}

export default TabBody;
