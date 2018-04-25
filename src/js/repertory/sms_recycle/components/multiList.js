import React, { Component } from 'react';
import Avata from '../../common/avata/index.jsx'
import ScrollHelp from '../../common/iscroll/index.jsx';
import MultiLi from './multiLi';


class MultiList extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps) {
        if(JSON.stringify(nextProps.group) == JSON.stringify(this.props.group)){
            return false;
        }
        return true;
    }
    render() {
        let {
            group
        } = this.props;

        let data , multiList = [];

        if(group && group.list && group.list.length > 0){
            group.multiItem.forEach(function(value,key){
                multiList.push(<MultiLi data={group.list[value]} key={key} />);
            });
        }

        return (
            <ScrollHelp onScroll={this.onScroll} name="3">
                <ul className="right-body-multi">
                    {multiList}
                </ul>
            </ScrollHelp>
        )
    }
}

export default MultiList;
