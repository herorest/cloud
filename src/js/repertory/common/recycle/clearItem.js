import React, {Component} from 'react';
import Utils from '../../common/util-dom.js'
import Checkbox from '../../common/checkbox/index.jsx'
import Avata from '../../common/avata/index.jsx'

class ClearItem extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        if(
            this.props.checked !== nextProps.checked
        ){
            return true;
        }else{
            return false;
        }
    }
    choseClear = () => {
        this.props.choseClear(this.props.index);
    }
    render() {
        let {
            checked,
            index
        } = this.props;
        let itemClass = '';
        if(checked){
            itemClass += 'checked';
        }
        let sonItem = '';
        switch(index){
            case 0:
                sonItem = <img src="/images/menu_contact.png"/>;
            break;
            case 1:
                sonItem = <img src="/images/menu_mess.png"/>;
            break;
            case 2:
                sonItem = <img src="/images/menu_note.png"/>;
            break;
            case 3:
                sonItem = <img src="/images/menu_photo.png"/>;
            break;
        }

        return (
            <li data-index={this.props.index} className={itemClass} onClick={this.choseClear} onTouchEnd={this.choseClear}>
                {sonItem}<i></i><p><span>{this.props.name}</span></p>
            </li>
        )
    }
}

export default ClearItem;
