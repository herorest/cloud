'use strict';
import React from 'react';
import { Menu,Icon,Dropdown } from 'antd';


var Select = React.createClass({
    getInitialState: function() {
        return {
            data: this.props.data,
            text: this.props.text
        };
    },
    componentWillMount:function(){
        var applist = [];
        for(var i=0;i<this.props.data.length;i++){
            applist.push(<Menu.Item key={i+1}>{this.props.data[i]}</Menu.Item>);
        };
        this.app = (
            <Menu onClick={this.onChange}>
                {applist}
            </Menu>
        );
    },
    componentWillReceiveProps:function(nextProps){
        if(!nextProps.currData || nextProps.currData == ''){
            return false;
        }
        this.setState({
            text:this.props.data[nextProps.currData-1]
        });
    },
    onChange:function({ key }){
        this.props.click(key,this.refs['input']);
    },
    render: function() {
        return (
            <Dropdown overlay={this.app} trigger={this.props.trigger}>
                {this.props.children ? this.props.children : <a className="ant-dropdown-link" href="javascript:void(0);"></a>}
            </Dropdown>
        );
    }
});

module.exports = Select;
