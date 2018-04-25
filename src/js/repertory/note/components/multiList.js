import React, { Component } from 'react';
import ScrollHelp from '../../common/iscroll/index.jsx';
import MultiLi from './multiLi';


class MultiList extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps) {
        if(JSON.stringify(nextProps.list) == JSON.stringify(this.props.list)){
            return false;
        }
        return true;
    }
    render() {
        let {
            list
        } = this.props;

        let data , multiList = [];

        if(list && list.list && list.list.length > 0){
            list.multiItem.forEach(function(value,key){
                multiList.push(<MultiLi data={list.list[value]} key={key} />);
            });
        }

        return (
            <ScrollHelp onScroll={this.onScroll} name="3">
                <div className="right-body-list clearfix">
                    {multiList}
                </div>
            </ScrollHelp>
        )
    }
}

export default MultiList;
