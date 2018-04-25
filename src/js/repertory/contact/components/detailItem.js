import React, {Component} from 'react';
import Dropdown from '../../common/dropdown/index.jsx';
import {getTypeCustomList, getDefaultValue} from '../common/util';

class DetailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custom: '',
            value: '',
            showTip: false
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(nextProps) !== JSON.stringify(this.props) || JSON.stringify(nextState) !== JSON.stringify(this.state)) {
            return true;
        }
        return false;
    }
    componentWillMount() {
        this.state = {
            custom: this.props.data.custom,
            value: this.props.data.value
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            custom: nextProps.data.custom,
            value: nextProps.data.value
        })
    }
    customChange(e) {
        let value = e.target.value, index = this.props.index, data = this.props.data;
    }
    customSelect(d) {
        let name = d.value;
        if(name !== this.state.custom) {
            let newData = Object.assign({}, this.props.data, { custom: name }), index = this.props.index;
            this.props.changeValue(index, newData);
        }
    }
    valueChange(e) {
        if(this.state.showTip) {
            this.setState({ showTip: false })
        }
        let value = e.target.value, index = this.props.index, data = this.props.data;
        let newData = Object.assign({}, data, { value: value });
        this.props.changeValue(index, newData);
    }
    valueBlur(e) {
        let value = e.target.value, data = this.props.data, _this = this;
        if(value === '') {
            if(this.props.isLast) {
                this.setState({ value: getDefaultValue(this.props.type) })
            } else {
                this.props.delItem(this.props.type, this.props.index);
            }
            return ;
        }
        let checkInfo = this.checkInputValue(value);
        if(checkInfo.check) { //成功调用接口
            if(this.state.showTip) {
                this.setState({ showTip: false })
            }
            if(this.props.isLast) {
                this.props.addItem(this.props.type)
            }
        } else {
            this.refs.valueInput.focus();
            this.setState({ showTip: true }, () => {
                let newData = Object.assign({}, data, { value: checkInfo.success });
                _this.props.changeValue(this.props.index, newData);
            });
        }
    }
    valueFocus(e) {
        let value = e.target.value, defaultValue = getDefaultValue(this.props.type);
        if(value === defaultValue) {
            this.props.changeValue(this.props.index, Object.assign({}, this.props.data, { value: '' }))
        }
    }
    handleTop() {
        this.props.topItem(this.props.type, this.props.index);
    }
    handleDel() {
        this.props.delItem(this.props.type, this.props.index);
    }
    checkInputValue(d) {
        let custom = this.state.custom, type = this.props.type;
        let result = { check: true, success: d };
        switch (type) {
            case 'tel':
                if(custom === '手机') {
                    result = this.checkPhone(d);
                } else {
                    let reg = /^\d+$/;
                    if(!reg.test(d)) {
                        let arr = d.match(/\d+/g);
                        if(arr && arr.length > 0) {
                            result = { check: false, success: arr.join('') }
                        } else {
                            result = { check: false, success: '' }
                        }
                    }
                 }
                break;
            case 'email':
                let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                if(!reg.test(d)) {
                    result = { check: false, success: d }
                }
                break;
            case 'address':
            case 'im':
            case 'web':
            default:
                break;
        }
        return result;
    }
    // 手机号码验证
    checkPhone(d) {
        let reg = /^1[34578]\d{9}$/;
        if(reg.test(d)) {
            return {
                check: true,
                success: d
            }
        } else {
            let success = d.match(/1[34578]\d{9}/g);
            if(success) { //在正确的手机号前面或后面追加的情况
                return {
                    check: false,
                    success: success[0]
                }
            } else { //删除，或者在中间插入非法字符的情况
                let array = d.match(/\d+/g);
                if(array && array.length > 0) {
                    let str = array.join('');
                    return {
                        check: false,
                        success: str.length > 11 ? str.slice(0, 11) : str
                    }
                } else {
                    return {
                        success: '',
                        check: false,
                    }
                }
            }
        }
    }
    // 固定电话的验证
    // checkTelephone(d) {
    //     let array = d.split('-');
    //     let result = {};
    //     // 普通电话号码的检验
    //     const checkNormalPhone = (d) => {
    //         let result;
    //         if(/^\d{7,8}$/.test(d)) {
    //             result = { check: true, success: d }
    //         } else {
    //             let arr = d.match(/\d+/g);
    //             if(arr && arr.length > 0) {
    //                 let str = arr.join('');
    //                 result = { check: false, success: str.length > 8 ? str.slice(0, 8) : str }
    //             } else {
    //                 result = { check: false, success: '' }
    //             }
    //         }
    //         return result;
    //     }
    //     // 检验区号
    //     const checkAreaCode = (d) => {
    //         let result = {};
    //         if(/^0\d{2,3}$/.test(d)) {
    //             result = { check: true, success: d }
    //         } else {
    //             let arr = d.match(/\d+/g);
    //             if(arr && arr.length > 0) {
    //                 let str = arr.join('');
    //                 if(str[0] === '0') {
    //                     result = { check: false, success: str.length > 4 ? str.slice(0, 4) : str }
    //                 } else {
    //                     result = { check: false, success: '0' + (str.length > 3 ? str.slice(0, 3) : str) }
    //                 }
    //             } else {
    //                 result = { check: false, success: '0' }
    //             }
    //         }
    //         return result;
    //     }
    //     // 检验分机号
    //     const checkExtCode = (d) => {
    //         let result = {};
    //         if(/^\d{1,6}$/.test(d)) {
    //             result = { check: true, success: d }
    //         } else {
    //             let arr = d.match(/\d+/g);
    //             if(arr && arr.length > 0) {
    //                 let str = arr.join('');
    //                 result = { check: false, success: str.length > 6 ? str.slice(0, 6) : str }
    //             } else {
    //                 result = { check: false, success: '' }
    //             }
    //         }
    //         return result;
    //     }
    //
    //     switch (array.length) {
    //         case 1: // 电话
    //             result = checkNormalPhone(d);
    //             break;
    //         case 2: { // 区号加电话
    //             let temp1 = checkAreaCode(array[0]), temp2 = checkNormalPhone(array[1]);
    //             if(temp1.check && temp2.check) {
    //                 result = { check: true, success: d }
    //             } else {
    //                 result = { check: false, success: temp1.success + '-' + temp2.success }
    //             }
    //         }
    //             break;
    //         case 3:
    //         default: {
    //             let temp1 = checkAreaCode(array[0]), temp2 = checkNormalPhone(array[1]), temp3 = checkExtCode(array[2]);
    //             if(temp1.check && temp2.check && temp3.check) {
    //                 result = { check: true, success: d }
    //             } else  {
    //                 result = { check: false, success: temp1.success + '-' + temp2.success + '-' + temp3.success }
    //             }
    //         }
    //             break;
    //     }
    //     return result;
    // }
    render() {
        let { isFirst, isLast, type, isEdit } = this.props;
        let itemDefaultValue = getDefaultValue(type), data = getTypeCustomList(type), _this = this;
        let itemClass = 'detail-item clearfix';
        if(isFirst) {
            itemClass += ' first';
        }
        if(isLast) {
            itemClass += ' last';
        }
        return (
            <li className={itemClass}>
                <div className="detail-item-name">
                    <Dropdown
                        hasAngle={true}
                        trigger="click|hover"
                        dropdownClass="detail-dropdown"
                        data={data.map((v, i) => {
                            return {
                                value: v,
                                onClick: _this.customSelect.bind(_this)
                            }
                        })}
                        >
                        <input disabled={isEdit ? '' : 'disabled'} type="text" value={this.state.custom} onChange={this.customChange.bind(this)} />
                    </Dropdown>
                    <i className="drop-icon"></i>
                </div>
                <div className="detail-item-value">
                    <input type="text" ref="valueInput" onFocus={this.valueFocus.bind(this)} value={this.state.value} onBlur={this.valueBlur.bind(this)} onChange={this.valueChange.bind(this)} readOnly={isEdit ? '' : 'readonly'} />
                    <i className={ isLast ? 'top-icon last' : 'top-icon' } onClick={this.handleTop.bind(this)}></i>
                    <i className={ isLast ? 'del-icon last' : 'del-icon' } onClick={this.handleDel.bind(this)}></i>
                    <span className="error-tip" style={{ display: this.state.showTip ? 'block' : 'none' }}>格式错误，请重新输入</span>
                </div>
            </li>
        )
    }
}

export default DetailItem;
