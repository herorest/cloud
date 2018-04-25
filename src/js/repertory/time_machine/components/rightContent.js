import React, { Component } from 'react';
import TabHeader from './tabHeader.js';
import TabBody from './tabBody.js';

class RightContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let list = Array.from(this.props.list),
            actions = this.props.actions;
        let result = list.map((v, i) => {
            let { add, mod, del, flypoint, addUser, modUser, delUser, total } = v;
            let contactList = modUser.concat(addUser).concat(delUser);
            return (
                <li key={v.flypoint} className={total > 5 ? 'timeline-item more' : 'timeline-item'}>
                    <TabHeader
                        add={add}
                        mod={mod}
                        del={del}
                        total={total}
                        flypoint={flypoint}
                    />
                    <TabBody
                        list={contactList.slice(0, 5)}
                        flypoint={flypoint}
                        total={total}
                        actions={actions}
                        tabIndex={i}
                    />
                    <i className="rectangle"></i>
                </li>
            )
        })
        return (
            <div className="right-content">
                <ul className="timeline-content">
                    {result}
                </ul>
            </div>
        )
    }
}

export default RightContent;
