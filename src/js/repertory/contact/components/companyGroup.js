import React, {Component} from 'react';
import RightDropItem from './rightDropItem';
import Dropdown from '../../common/dropdown/index.jsx';
import ScrollHelp from '../../common/iscroll/index.jsx';

class CompanyGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            groupList: [],
            groupValue: '',
            companyValue: ''
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(nextProps) !== JSON.stringify(this.props) || JSON.stringify(nextState) !== JSON.stringify(this.state)) {
            return true;
        }
        return false;
    }
    componentWillMount() {
        this.state = {
            company: this.props.company,
            groupList: this.props.groupList,
            companyValue: this.props.company ? this.props.company : '公司或标签',
            groupValue: this.props.groupList.length > 0 ? this.props.groupList.join(' ') : '未分组'
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            company: nextProps.company,
            groupList: nextProps.groupList,
            companyValue: nextProps.company ? nextProps.company : this.isFocus ? '' : '公司或标签',
            groupValue: nextProps.groupList.length > 0 ? nextProps.groupList.join(' ') : '未分组'
        })
    }
    handleChange(e) {
        let value = e.target.value;
        this.isFocus = true;
        this.props.changeValue('company', value);
    }
    handleBlur(e) {
        this.isFocus = false;
        if(this.state.companyValue === '') {
            this.setState({ companyValue: '公司或标签' });
        }
    }
    handleFocus(e) {
        if(!this.props.isEdit) {
            return ;
        }
        this.isFocus = true;
        if(this.state.companyValue === '公司或标签') {
            this.setState({ companyValue: '' });
        }
    }
    itemClick(data) {
        let clickName = data.name, groupList = this.state.groupList, index = groupList.indexOf(clickName);
        if(index > -1) {
            groupList.splice(index, 1);
        } else {
            groupList.push(clickName)
        }
        this.props.changeValue('groupList', groupList);
    }
    getGroupMenu() {
        let group = this.props.group.data.slice(1), groupList = this.state.groupList, _this = this;
        let groupArray = group.map((v, i) => {
            return (
                <RightDropItem itemClick={_this.itemClick.bind(_this)} key={v.id} data={v} checkType="circle" checked={groupList.indexOf(v.name) > -1 ? true : false} />
            )
        })
        return (
            <div className="right-group-wrap" style={{ height: groupArray.length < 9 ? groupArray.length * 38 : 342, overflow: 'hidden' }}>
                <ScrollHelp dataType="next" ref="test" name="2">
                    <ul>
                        {groupArray}
                    </ul>
                </ScrollHelp>
            </div>
        )
    }
    render() {
        let menu = this.getGroupMenu();
        let { isEdit } = this.props;
        let _this = this;
        let groupListArray = this.state.groupList.map((v, i) => {
            return (
                <span key={i}>{v}</span>
            )
        })
        return (
            <div className="detail-list noline">
                <ul>
                    <li className="detail-item clearfix">
                        <div className="detail-item-name">
                            <input type="text" value="公司" readOnly="readonly" />
                        </div>
                        <div className="detail-item-value" >
                            <input type="text" value={this.state.companyValue} onBlur={this.handleBlur.bind(this)} onFocus={this.handleFocus.bind(this)} onChange={this.handleChange.bind(this)} readOnly={isEdit ? '' : 'readonly'} />
                        </div>
                    </li>
                    <li className="detail-item clearfix">
                        <div className="detail-item-name">
                            <input type="text" value="群组" readOnly="readOnly" />
                        </div>
                        <div className="detail-item-value">
                        <Dropdown
                            hasAngle={true}
                            align="left"
                            width={260}
                            menu={menu}
                            dropdownStyle={{ marginLeft: '10px' }}
                            >
                            <div className="group-choose">
                                { groupListArray.length > 0 ? groupListArray : (<span>未分组</span>) }
                            </div>
                        </Dropdown>
                        <span className="group-cover"></span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CompanyGroup;
