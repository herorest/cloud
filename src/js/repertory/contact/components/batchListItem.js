import React, {Component} from 'react';
import Avata from '../../common/avata/index.jsx';

class BatchListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = this.props.data;
        return (
            <li className="batch-list-item clearfix" key={data.id}>
                <Avata type={data.hasPhoto} id={data.id} name={data.defaultText} />
                <span className="batch-item-name" title={data.displayName}>{data.displayName}</span>
            </li>
        )
    }
}

export default BatchListItem;
