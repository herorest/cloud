import React, { Component } from 'react';
import {Menu, Dropdown} from 'antd';

class MenuDom extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    render() {
        var herflist = ['/contact_recycle.html','/sms_recycle.html','note_recycle.html','']
        var menuItem = this.props.clearList.map((value,key) => {
            return (
                <Menu.Item key={key}><a href={herflist[key]}>{value}回收站</a></Menu.Item>
            );
        })
        var dropdownMenu = (
            <Menu onClick={this.handleMenuClick}>
                {menuItem}
            </Menu>
        );
        return (
            <Dropdown
                overlay={dropdownMenu} trigger={['hover']} visible={this.props.visible} onVisibleChange={this.props.menuVisibleChange}
                placement='bottomCenter' getPopupContainer={() => document.getElementById('leftWrap')}>
                <div className="left-head-menu">
                    {this.props.clearList[this.props.curr]}回收站
                </div>
            </Dropdown>
        )
    }
}

export default MenuDom;
