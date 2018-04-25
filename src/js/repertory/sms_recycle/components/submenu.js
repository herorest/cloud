import React, { Component } from 'react';
import {Menu, Dropdown} from 'antd';

class Submenu extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    openClearAll = () => {
        this.props.openClearAll();
    }
    render() {
        var menulist = ['清空回收站'];
        var menuItem = menulist.map((value,key) => {
            return (
                <Menu.Item key={key}><a href="javascript:void(0);">{value}</a></Menu.Item>
            );
        })
        var dropdownMenu = (
            <Menu onClick={this.openClearAll}>
                {menuItem}
            </Menu>
        );
        return (
            <Dropdown
                overlay={dropdownMenu} trigger={['hover']} visible={this.props.visible} onVisibleChange={this.props.subMenuVisibleChange}
                placement='bottomLeft' getPopupContainer={() => document.getElementById('leftWrap')}>
                <div className="left-head-submenu">
                    
                </div>
            </Dropdown>
        )
    }
}

export default Submenu;
