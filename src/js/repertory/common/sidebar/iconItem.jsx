import React, { Component } from 'react';

class IconItem extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(data) {
        if(data.select) {
            return ;
        }
        window.location.href = data.url;
    }
    render() {
        let data = this.props.data;
        let itemClass = data.select ? 'active ' + data.type : data.type;
        return (
            <li className={itemClass} onClick={this.handleClick.bind(this, data)}>
                <a href="javascript:void(0)" data-type={data.type}></a>
                <span>{data.title}</span>
            </li>
        )
    }
}

export default IconItem;
