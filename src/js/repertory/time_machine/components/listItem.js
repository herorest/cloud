import React, { Component } from 'react';
import Util from '../../common/util-dom';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    handleMouseEnter(e) {
        Util.stopPropagation(e);
        let data = this.props.data,
            _this = this,
            isModify = data._type_ === 'mod',
            offsetObj = Util.getOffset(this.refs.head),//头像相对页面的偏移量
            //时光轴第三行top更改偏移量
            phoneOffset = data.phoneList.length > 1 ? 20 : 0,
            emailOffset = data.emailList.length > 1 ? 20 : 0,
            //action的payload对象
            payload = Object.assign({}, {
            _type_: data._type_,
            firstName: data.firstName,
            emailList: data.emailList,
            phoneList: data.phoneList,
            uid: data.uid
        }, {
            show: true,
            left: data.listIndex < 4 ? offsetObj.left + 24 : offsetObj.left - 270,
            top: data.tabIndex < 2 ? offsetObj.top + 24 : (isModify ? (offsetObj.top - 181 - phoneOffset - emailOffset) : (offsetObj.top - 84 - phoneOffset - emailOffset))
        })
        if(!isModify) {
            this.props.actions.showHoverBox(payload);
        } else {
            let resultPayload = Object.assign({}, payload, { needModify : data.tabIndex >　1 })
            this.props.actions.searchContact(this.props.data.uid, resultPayload)
        }
    }
    handleMouseLeave(e) {
        Util.stopPropagation(e);
        let _this = this,
            payload = Object.assign({}, {
                _type_: this.props.data.type,
                firstName: '',
                emailList: [],
                phoneList: []
            }, {
                show: false,
                left: 0,
                top: 0
            })
        //this.props.actions.hideHoverBox(payload);
    }
    render() {
        let data = this.props.data, _this = this;
        let picDom = '';
        let iconClass = 'icon ' + 'icon_' + data._type_;
        if(data.hasPhoto) {
            data.image = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495688116433&di=2ff804ae10103afe56cd57c736632440&imgtype=0&src=http%3A%2F%2Fimages11.app.happyjuzi.com%2Fcontent%2F201705%2F23%2F29c8a500-bc1f-41b2-a3ca-3158e5b249cc.jpeg';
            picDom = (<img ref="head" src={data.image} />)
        } else {
            picDom = (<span ref="head" className={data.nopicClass}>{data.nopicText}</span>)
        }
        return (
            <li className="contact-list-item" onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
                {picDom}
                <span className="name">{data.display}</span>
                <i className={iconClass}></i>
            </li>
        )
    }
}

export default ListItem;
