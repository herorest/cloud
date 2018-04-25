import React, {Component} from 'react';
import Avata from '../../common/avata/index.jsx';

class DetailHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            tip: '请输入联系人的姓名',
            star: 0
        }
    }
    componentWillMount() {
        let displayName = this.props.displayName, star = this.props.star;
        this.state = {
            displayName: displayName,
            tip: displayName === '' ? '请输入联系人的姓名' : '',
            star: star
        }
    }
    componentWillReceiveProps(nextProps) {
        let displayName = nextProps.displayName, star = nextProps.star;
        this.setState({
            displayName: displayName,
            star: star,
            tip: displayName === '' ? '请输入联系人的姓名' : ''
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(nextProps) !== JSON.stringify(this.props) || JSON.stringify(nextState) !== JSON.stringify(this.state)) {
            return true;
        }
        return false;
    }
    handleChange(e) {
        let value = e.target.value;
        this.props.changeValue('displayName', value)
    }
    starClick() {
        if(!this.props.isEdit) {
            return ;
        }
        let star = this.state.star;
        this.props.changeValue('star', !star);
    }
    render() {
        let { hasPhoto, id, defaultText, isEdit } = this.props;
        return (
            <div className="detail-head clearfix">
                <Avata type={hasPhoto} id={id} name={defaultText} />
                <p>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.displayName} className="contact-name" readOnly={isEdit ? '' : 'readonly'} />
                    <i className={this.state.star ? 'star active' : 'star'} onClick={this.starClick.bind(this)}></i>
                    <span className="default-tip">{this.state.tip}</span>
                </p>
            </div>
        )
    }
}

export default DetailHead;
