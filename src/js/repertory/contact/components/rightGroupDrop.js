import React, {Component} from 'react';
import RightDropItem from './rightDropItem';
import ScrollHelp from '../../common/iscroll/index.jsx';
import { stopPropagation } from '../../common/util-dom';

class RightGroupDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    shouldComponentUpdate() {
        return true;
    }
    handleCancel(e) {
        e.nativeEvent.stopImmediatePropagation();
        stopPropagation(e);
    }
    handleSure(e) {
        e.nativeEvent.stopImmediatePropagation();
        stopPropagation(e);
    }
    addGroup(e) {
        e.nativeEvent.stopImmediatePropagation();
        stopPropagation(e);
    }
    render() {
        let { data, groupAllId, groupSomeId } = this.props.group;
        let array = data.slice(1).map((v, i) => {
            return (
                <RightDropItem key={v.id} data={v} inGroupAllId={groupAllId.indexOf(v.id) > -1 ? true : false} inGroupSomeId={groupSomeId.indexOf(v.id) > -1 ? true : false} />
            )
        })
        return (
            <div className="right-group-wrap" style={{ height: (array.length < 10 ? array.length * 40 + 51 : 451) }}>
                <div className="right-group-list">
                    <ScrollHelp dataType="origin">
                        <ul>
                            <li className="right-group-item" onClick={this.addGroup.bind(this)}>
                                <i className="add-group-icon"></i>
                                <span>新建群组</span>
                            </li>
                            {array}
                        </ul>
                    </ScrollHelp>
                </div>
                <div className="drop-btn-wrap">
                    <span className="drop-btn cancel-btn" onClick={this.handleCancel.bind(this)}>取消</span>
                    <span className="drop-btn sure-btn" onClick={this.handleSure.bind(this)}>确定</span>
                </div>
            </div>
        )
    }
}

export default RightGroupDrop;
