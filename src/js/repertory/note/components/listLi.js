import React, {Component} from 'react';
import Utils from '../../common/util-dom.js'
import Checkbox from '../../common/checkbox/index.jsx'
import Notify from '../../common/notification/index.jsx';

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
        if(this.props.list.multiItem.length > 0){
            return false;
        }
        if(this.props.detail.editModel){
            Notify.alert('您之前创建的便签尚未保存/取消');
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
        let nameClass = 'i-name bold';
        let time = Utils.compareDate(data.modifyTime);
        let itemClass = 'item clearfix';
        if(active){
            itemClass += ' active';
        }
        if(checked){
            itemClass += ' multi';
        }
        return (
            <li className={itemClass} data-index={this.props.index} onTouchEnd={this.showDetail} onClick={this.showDetail}>
                <div className="i-detail">
                    <div className="i-content" ref="content">
                        <div className={nameClass}>{data.title}</div>
                        <div className="list-item clearfix">
                            <div className="time">{time}</div>
                            <div className="img clearfix">
                                {
                                    data.firstImg ?
                                    <i className="i-img"></i> :
                                    null
                                }
                                {
                                    data.firstRecord ?
                                    <i className="i-record"></i> :
                                    null
                                }
                                {
                                    data.topdate ?
                                    <i className="i-topdate"></i> :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Checkbox checkCallback={this.checkCallback} id={data.uniformNumber} checked={checked} />
            </li>
        )
    }
}

export default SmsLi;
