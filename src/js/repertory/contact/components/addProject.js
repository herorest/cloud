import React, {Component} from 'react';
import Dropdown from '../../common/dropdown/index.jsx';

class AddProject extends Component {
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
        console.log(nextProps.data, this.state.data);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    addProject(d) {
        let typeArray = ['tel', 'email', 'addr', 'im', 'web', 'social', 'event', 'remark'];
        let allProject = ['手机', '邮件', '地址', '即时信息', '网站', '社交账号', '日期', '备注'];
        let index = allProject.indexOf(d);
        if(index > -1) {
            this.props.addProject && this.props.addProject(typeArray[index], d);
        }
    }
    render() {
        console.log(1);
        let _this = this;
        let array = this.state.data.map((v, i) => {
            return {
                value: v,
                onClick: _this.addProject.bind(this, v)
            }
        })
        return (
            <div className="add-project-wrap">
                <Dropdown
                    trigger="click|hover"
                    hasAngle={true}
                    data={array}
                    width={174}
                    dropdownStyle={{ height: '120px'}}
                    >
                    <span className="add-project">添加项目</span>
                </Dropdown>
            </div>
        )
    }
}

export default AddProject;
