import React, {Component} from 'react';
import { subStringLen, stopPropagation } from '../../common/util-dom'

class LeftGroupItem extends Component {
    constructor(props) {
        super(props)
    }
    handleEdit(e) {
        e.nativeEvent.stopImmediatePropagation();
        stopPropagation(e);
    }
    handleDel(e) {
        e.nativeEvent.stopImmediatePropagation();
        stopPropagation(e);
    }
    handleClick(data) {
        console.log(data);
    }
    render() {
        let { data, canEdit, selected } = this.props;
        let classn = 'group-item';
        if(canEdit) {
            classn += ' edit';
        }
        if(selected) {
            classn += ' selected'
        }
        return (
            <li className={classn} onClick={this.handleClick.bind(this, data)}>
                <span title={data.name}>{subStringLen(data.name, 10)}</span>
                <span title={data.count}>({data.count})</span>
                <i className="check-group-icon"></i>
                <i className="edit-group-icon" onClick={this.handleEdit.bind(this)}></i>
                <i className='del-group-icon' onClick={this.handleDel.bind(this)}></i>
            </li>
        )
    }
}

export default LeftGroupItem;
