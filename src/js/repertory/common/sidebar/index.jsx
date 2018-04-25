'use strict';
import React, { Component } from 'react';
import IconItem from './iconItem.jsx';
import Util from '../util-dom';
import '../../../../css/sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                type: 'contact',
                title: '联系人',
                url: '/contact.html'
            }, {
                type: 'sms',
                title: '短信',
                url: '/sms.html'
            }, {
                type: 'note',
                title: '便签',
                url: '/note.html'
            }, {
                type: 'photo',
                title: '图库',
                url: '/photo.html'
            }, {
                type: 'find',
                title: '查找手机',
                url: '/findPhone.html'
            }, {
                type: 'recycle',
                title: '回收站',
                url: '/recycle.html'
            }]
        }
    }
    render() {
        let selectType = this.props.type;
        let array = this.state.data.map((v) => {
            if(selectType === v.type) {
                v.select = true;
                return <IconItem data={v} key={v.type} type={v.type} title={v.title} />
            } else {
                v.select = false;
                 return <IconItem data={v} key={v.type} type={v.type} title={v.title} />;
            }

        })
        return (
            <div className="sidebar-wrap" ref="wrap">
                <div className="sidebar-header" ref="header">
                    <div className="icon-wrap">
                        <svg className="icon-logo">
                            <switch>
                                <use xlinkHref="#iconFlymeLogo"></use>
                            </switch>
                        </svg>
                    </div>
                </div>
                <div className="sidebar-content" ref="body">
                    <ul className="side-list">
                        {array}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;
