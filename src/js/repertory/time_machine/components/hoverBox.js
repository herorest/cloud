import React, { Component } from 'react';

class HoverBox extends Component {
    constructor(props) {
        super(props);
    }
    handleMouseEnter() {
        this.props.actions.showHoverBox(this.props.data)
    }
    handleMouseLeave() {
        this.props.actions.hideHoverBox(Object.assign({}, this.props.data, { show: false }))
    }
    render() {
        let data = this.props.data;
        let phone = data.phoneList.map((v, i) => {
            return (
                <p key={data.uid + ' phone ' + v} className="noindent">{v}</p>
            )
        }), email = data.emailList.map((v, i) => {
            return (
                <p key={data.uid + ' email ' + v} className="noindent">{v}</p>
            )
        });

        let newEmail = [], newPhone = [];
        if(data._type_ === 'mod') {
            newPhone = data.newPhoneList.map((v, i) => {
                return (
                    <p key={data.uid + ' phone ' + v} className="noindent">{v}</p>
                )
            });
            newEmail = data.newEmailList.map((v, i) => {
                return (
                    <p key={data.uid + ' email ' + v} className="noindent">{v}</p>
                )
            })
        }

        if(data._type_ === 'mod' && data.needModify) {
            if(newPhone.length > 1) {
                data.top -= 20;
            }
            if(newEmail.length > 1) {
                data.top -= 20;
            }
        }
        let style = {
            left: data.left + 'px',
            top: data.top + 'px',
            display: data.show ? 'block' : 'none'
        }, listStyle = {
            overflow: 'hidden',
            overflowY: 'auto',
            height: '40px'
        }

        if(data._type_ === 'mod') {
            return (
                <div className="hoverbox mod" style={style}>
                    <div className="curr clearfix">
                        <i></i>
                        <span>现在</span>
                        <div>
                            <dl className="clearfix">
                                <dt>姓名</dt>
                                <dd>{data.newName}</dd>
                            </dl>
                            <dl className="clearfix">
                                <dt>电话</dt>
                                <dd style={data.newPhoneList.length > 2 ? listStyle : {}}>
                                    {newPhone}
                                </dd>
                            </dl>
                            <dl className="clearfix">
                                <dt>邮箱</dt>
                                <dd style={data.newEmailList.length > 2 ? listStyle : {}}>
                                    {newEmail}
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="after clearfix">
                        <i></i>
                        <span>恢复后</span>
                        <div>
                            <dl className="clearfix">
                                <dt>姓名</dt>
                                <dd>{data.firstName}</dd>
                            </dl>
                            <dl className="clearfix">
                                <dt>电话</dt>
                                <dd style={data.phoneList.length > 2 ? listStyle : {}}>
                                    {phone}
                                </dd>
                            </dl>
                            <dl className="clearfix">
                                <dt>邮箱</dt>
                                <dd style={data.emailList.length > 2 ? listStyle : {}}>
                                    {email}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="hoverbox" style={style} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
                    <dl className="clearfix">
                        <dt>姓名</dt>
                        <dd>{data.firstName}</dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>电话</dt>
                        <dd style={data.phoneList.length > 2 ? listStyle : {}}>
                            {phone}
                        </dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>邮箱</dt>
                        <dd style={data.emailList.length > 2 ? listStyle : {}}>
                            {email}
                        </dd>
                    </dl>
                </div>
            )
        }
    }
}

export default HoverBox;
