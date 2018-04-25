import React, {Component} from 'react';
import ScrollHelp from '../../common/iscroll/index.jsx';
import DetailHead from './detailHead';
import CompanyGroup from './companyGroup';
import DetailList from './detailList';
import AddProject from './addProject';
import {getTypeCustomList, getDefaultValue} from '../common/util';

class EditField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            project: []
        }
    }
    // 初始化
    componentWillMount() {
        let data = this.props.data;
        let typeArray = ['tel', 'email', 'addr', 'im', 'web', 'event'];
        let allProject = ['手机', '邮件', '地址', '即时信息', '网站', '日期', '备注'];
        let newData = {};
        for(let i of typeArray) {
            let list = this.props.data[i + 'List'];
            newData[i + 'List'] = list.length > 0 ? this.getNewTypeList(i, list) : list;
        }
        if(newData.telList.length === 0) {
            newData.telList = this.getNewTypeList('tel', newData.telList);
        }
        this.state.data = Object.assign({}, data, newData);
    }
    // 更新state
    componentWillReceiveProps(nextProps) {
        let data = nextProps.data;
        let typeArray = ['tel', 'email', 'im', 'event', 'addr', 'web'];
        let allProject = ['手机', '邮件', '地址', '即时信息', '网站', '社交账号', '日期', '备注'];
        let newData = {};
        for(let i of typeArray) {
            let list = this.props.data[i + 'List'];
            newData[i + 'List'] = list.length > 0 ? this.getNewTypeList(i, list) : list;
            if(list.length > 0) {
                let index = allProject.indexOf(i);
                allProject.splice(index, 1);
            }
        }
        if(newData.telList.length === 0) {
            newData.telList = this.getNewTypeList('tel', newData.telList);
        }
        if(allProject[0] === '手机') {
            allProject.shift();
        }
        this.setState({
            data: Object.assign({}, data, newData),
            project: allProject
        });
    }
    // 辅助函数，获取新的state中的各项列表
    getNewTypeList(type, list) {
        let array = Array.from(list); // 复制一份
        let customList = getTypeCustomList(type), defaultValue = getDefaultValue(type);
        let set = new Set(customList);
        list.forEach((v, i) => {
            set.delete(v.custom);
        })
        let arr = Array.from(set);
        if(arr.length === 0) {
            array.push({
                custom: '自定义',
                value: defaultValue
            })
        } else {
            array.push({
                custom: arr[0],
                value: defaultValue
            })
        }
        return array;
    }
    // value和custom变化时改变state内容
    changeValue(key, value) { // 改变data的内容
        let changePart = {};
        changePart[key] = value;
        let newData = Object.assign({}, this.state.data, changePart);
        this.setState({
            data: newData
        })
    }
    // 项目置顶
    topItem(type, index) {
        let data = this.state.data, changePart = {};
        let list = data[type + 'List'];
        let temp = list[index];
        list.splice(index, 1);
        list.unshift(temp);
        changePart[type + 'List'] = list;
        this.setState({
            data: Object.assign({}, this.state.data, changePart)
        })
    }
    // 自动增加某个类型的列表项
    addItem(type) {
        let data = this.state.data, changePart = {};
        let list = data[type + 'List'];
        let newList = this.getNewTypeList(type, list);
        changePart[type + 'List'] = newList;
        this.setState({
            data: Object.assign({}, data, changePart)
        })
    }
    // 删除某个类型的列表项
    delItem(type, index) {
        let data = this.state.data, changePart = {};
        let list = data[type + 'List'];
        let temp = list.splice(index, 1)[0];
        if(list.length === 0) {
            let customData = getTypeCustomList(type);
            list.push({
                custom: customData[0],
                value: getDefaultValue(type)
            })
        }
        changePart[type + 'List'] = list;

        this.setState({
            data: Object.assign({}, data, changePart)
        })
    }
    // 获取列表渲染结果
    getDetailList() {
        let { telList, emailList, addrList, imList, eventList, webList } = this.state.data;
        const detailArray = [];
        let typeArray = ['tel', 'email', 'addr', 'im', 'web', 'event'];
        for(let i of typeArray) {
            let list = this.state.data[i + 'List'];
            if(list.length > 0) {
                detailArray.push(
                    <DetailList data={list} addItem={this.addItem.bind(this)} topItem={this.topItem.bind(this)} delItem={this.delItem.bind(this)} changeValue={this.changeValue.bind(this)} isEdit={this.props.isEdit} key={i} type={i} />
                )
            }
        }
        return detailArray;
    }
    // 添加某一项
    addProject(type, name) {
        let { data, project } = this.state;
        if(type !== 'remark') {
            data[type + 'List'] = this.getNewTypeList(type, data[type + 'List']);
            project.splice(project.indexOf(name), 1);
        }
        this.setState({
            data: data,
            project: project
        })
    }
    render() {
        let { isEdit, group } = this.props, data = this.state.data;
        let detailArray = this.getDetailList();
        return (
                <div className={isEdit ? 'right-body edit-mode' : 'right-body'}>
                    <ScrollHelp>
                        <DetailHead changeValue={this.changeValue.bind(this)} displayName={data.displayName} isEdit={isEdit} hasPhoto={data.hasPhoto} id={data.id} defaultText={data.defaultText} star={data.star} />
                        <CompanyGroup isEdit={isEdit} group={group} changeValue={this.changeValue.bind(this)} company={data.company} groupList={data.groupList} />
                        {detailArray}
                        <AddProject addProject={this.addProject.bind(this)} isEdit={isEdit} data={this.state.project} />
                    </ScrollHelp>
                </div>
        )
    }
}

export default EditField;
