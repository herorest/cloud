import React, {Component} from 'react';
import EditField from './editField';
import {getShowDataArray} from '../common/util';

class RightWrap extends Component {
    constructor(props) {
        super(props);
    }
    getContactDetail() {
        let idList = this.props.list.idList;
        let data = this.props.contact.data;
        let index = idList.indexOf(data.uuid);
        let selectOne = index > -1 ? getShowDataArray([].concat(this.props.list.data[index]))[0] : {};
        let result = Object.assign({}, data, {
            defaultText : selectOne.defaultText || ' ',
            hasPhoto : selectOne.hasPhoto || false,
            nopicClass : selectOne.nopicClass || 'i-avata color' + parseInt(Math.random() * 7 + 1),
            portrait : selectOne.portrait || ''
        })
        return result;
    }
    saveContact() {

    }
    editContact() {
        this.props.actions.changeEditModel({ isEdit: true })
    }
    cancelEdit() {
        this.props.actions.changeEditModel({ isEdit: false })
    }
    render() {
        let data = this.getContactDetail();
        let isEdit = this.props.contact.isEdit;
        let rightBody = data.id !== '' ? (<EditField group={this.props.group} actions={this.props.actions} data={data} isEdit={isEdit} />) : (<div className="right-body"></div>)
        return (
            <div className={isEdit ? 'right-wrap edit' : 'right-wrap'} style={{ display: this.props.checkFlag ? 'none' : 'block' }}>
                <div className="right-header clearfix">
                    <a className="c-btn cancel-btn" href="javascript:void(0);" onClick={this.cancelEdit.bind(this)} style={{ display: isEdit ? 'block' : 'none' }}>取消</a>
                    <a className="c-btn save-btn" href="javascript:void(0);" onClick={this.saveContact.bind(this)} style={{ display: isEdit ? 'block' : 'none' }}>保存</a>
                    <a className="c-btn edit-btn" href="javascript:void(0);" onClick={this.editContact.bind(this)} style={{ display: isEdit ? 'none' : 'block' }}>编辑</a>
                </div>
                {rightBody}
            </div>
        )
    }
}

export default RightWrap;
