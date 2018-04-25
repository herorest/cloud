import React, {Component} from 'react';
import Utils from '../../common/util-dom.js'
import DetailLi from './detailLi'
import ScrollHelp from '../../common/iscroll/index.jsx';

class DetailList extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        if(JSON.stringify(nextProps.detail) == JSON.stringify(this.props.detail)){
            return false;
        }
        return true;
    }
    render() {
        let {
            detail
        } = this.props;

        let detailList = [];
        if(detail && detail.list && detail.count){
            detail.list.forEach((value,key) => {
                detailList.push(<DetailLi data={value} addFavo={this.props.addFavo} delsms={this.props.delsms} key={key} />);
            });
        }
        return (
            <ScrollHelp onScroll={this.props.onScroll} isFetching={detail.isFetching} dataType={detail.dataType} name="2">
                <ul className="right-body-list" ref="list">
                    {detailList}
                </ul>
            </ScrollHelp>
        )
    }
}

export default DetailList;
