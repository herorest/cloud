import React, {Component} from 'react';
import Utils from '../../common/util-dom.js'
import Checkbox from '../../common/checkbox/index.jsx'
import Avata from '../../common/avata/index.jsx'

class SmsLi extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        if(
            JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data) ||
            this.props.checked !== nextProps.checked ||
            this.props.active !== nextProps.active
        ){
            return true;
        }else{
            return false;
        }
    }
    showDetail = (e) => {
        if(this.props.group.multiItem.length > 0){
            return false;
        }
        this.props.showDetail(this.props.index);
        e.stopPropagation();
    }
    checkCallback = () => {
        this.props.checkCallback(this.props.index);
    }
    render() {
        let {
            group,
            data,
            active,
            checked
        } = this.props;
        let name = data.senderName ? data.senderName : data.uniformNumber;
        let nameClass = 'i-name bold';
        let time = Utils.compareDate(data.senddate);
        let itemClass = 'item clearfix';
        if(active){
            itemClass += ' active';
        }
        if(checked){
            itemClass += ' multi';
        }
        return (
            <li className={itemClass} data-num={data.uniformNumber} data-index={this.props.index}  onTouchEnd={this.showDetail} onClick={this.showDetail}>
                <Avata type={data.photo_type} id={data.contactId} name={name} />
                <div className="i-detail">
                    <div className="i-content" ref="content">
                        <span className={nameClass}>{name}</span>
                        <span className="i-sms">{data.body}</span>
                        <span className="i-time">{time}</span>
                    </div>
                </div>
                <Checkbox checkCallback={this.checkCallback} id={data.uniformNumber} checked={checked} />
            </li>
        )
    }
}

export default SmsLi;
