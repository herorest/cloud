import React, {Component} from 'react';
import DetailItem from './detailItem';

class DetailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        this.state = {
            data: this.props.data
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    // 两个数组是否有差别
    diffArray(a1, a2) {
        if(a1.length !== a2.length) {
            return true;
        }
        let result = false, len = a1.length;
        for(let i = 0; i < len; i++) {
            let s1 = JSON.stringify(a1[i]);
            let s2 = JSON.stringify(a2[i]);
            if(s1 !== s2) {
                result = true;
                break;
            }
        }
        return result;

    }
    changeValue(i, d) {
        let newData = this.state.data;
        newData[i] = d;
        this.props.changeValue(this.props.type + 'List', newData);
    }
    render() {
        let len = this.state.data.length, classn = 'detail-list list';
        let array = this.state.data.map((v, i) => {
            return (
                <DetailItem topItem={this.props.topItem} addItem={this.props.addItem} delItem={this.props.delItem} type={this.props.type} index={i} changeValue={this.changeValue.bind(this)} isEdit={this.props.isEdit} key={i} data={v} isFirst={i === 0 ? true : false} isLast={ i === (len - 1) ? true : false} />
            )
        })
        if(this.props.type == 'tel' && this.state.data[0].value == '电话号码' && !this.props.isEdit) {
            classn += ' noline';
        }
        return (
            <div className={classn}>
                <ul>
                    {array}
                </ul>
            </div>
        )
    }
}

export default DetailList;
