import React, {Component} from 'react';
import Util from '../../common/util-dom';

class RightDropItem extends Component {
    constructor(props) {
        super(props)
    }
    handleClick(e) {
        e.nativeEvent.stopImmediatePropagation();
        Util.stopPropagation(e);
        this.props.itemClick && this.props.itemClick(this.props.data);
    }
    getCheckClassName(type, checked) {
        if(type === 'circle') {
            return "check-icon circle " + (checked ? 'checked' : 'unchecked');
        } else {
            return (checked === undefined || checked === null || checked === 'normal')
                        ? 'check-icon square'
                        : (checked === false)
                        ? 'check-icon square unchecked'
                        : 'check-icon square checked';
        }
    }
    render() {
        let data = this.props.data, checkType = this.props.checkType || 'square';
        if(['square', 'circle'].indexOf(checkType.toLowerCase()) < 0) {
            checkType = 'square';
        }
        let iconClass = this.getCheckClassName(checkType, this.props.checked);
        return (
            <li className="right-group-item" onClick={this.handleClick.bind(this)}>
                <i className={iconClass}></i>
                <span title={data.name}>{Util.subStringLen(data.name, 16)}</span>
            </li>
        )
    }
}

export default RightDropItem;
