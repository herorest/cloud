import React, {Component} from 'react';
import Checkbox from '../../common/checkbox/index.jsx';
import Avata from '../../common/avata/index.jsx';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    checkCallback(id) {
        this.props.actions.checkItem({
            id: id,
            checkFlag: !this.props.data.checked
        })
    }
    showDetail(id) {
        if(!this.props.checkFlag && !this.props.data.active) {
            this.props.actions.clickItem({ id: id });
            this.props.actions.searchContact({ id: id });
        }
    }
    render() {
        let data = this.props.data;
        let itemClass = 'item';
        if(data.checked) {
            itemClass += ' multi';
        }
        if(data.active) {
            itemClass += ' active';
        }
        return (
            <li className={itemClass} onClick={this.showDetail.bind(this, data.id)}>
                <Avata type={data.hasPhoto} id={data.id} name={data.defaultText} />
                <span className="contact-item-name">{data.displayName}</span>
                <Checkbox checkCallback={this.checkCallback.bind(this)} id={data.id} checked={data.checked} />
            </li>
        )
    }
}

export default ListItem;
