import React, {Component} from 'react';
import Notify from '../../common/notification/index.jsx';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tip: '搜索',
            value: ''
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(!Object.is(this.state, nextState)) {
            return true;
        }
        return false;
    }
    handleBlur(e) {
        let _this = this;
        setTimeout(() => {
            let value = this.state.value;
            if(value === '') {
                if(this.props.searchInfo.content !== '') {
                    if(!this.clear) {
                        this.setState({ tip: '搜索' });
                        this.props.actions.searchChangeReset();
                        this.props.actions.changeSearchFlag({ isSearch: false });
                        this.props.actions.queryList();
                        _this.props.activeChange(false);
                    } else {
                        this.clear = false;
                        this.refs.input.focus();
                    }
                } else {
                    if(!this.clear) {
                        this.setState({ tip: '搜索' });
                        _this.props.activeChange(false);
                    } else {
                        this.clear = false;
                    }
                }
                return ;
            }
            if(value === this.props.searchInfo.content) {
                return ;
            }
            this.props.actions.searchChangeReset();
            this.props.actions.changeSearchFlag({ isSearch: true });
            this.props.actions.queryList(value);
        }, 100);
    }
    handleFocus(e) {
        if(this.props.list.isAddNewItem){
            Notify.alert('您之前创建的便签尚未保存/取消');
            e.target.blur();
            return false;
        }
        this.setState({
            tip: this.state.value === '' ? '请输入搜索内容' : ''
        })
        this.props.activeChange(true);
    }
    handleChange(e) {
        let value = e.target.value;
        if(value !== '') {
            this.setState({
                tip: '',
                value: value
            })
        } else {
            this.setState({
                tip: '请输入搜索内容',
                value: value
            })
        }
        if(this.props.searchInfo.content === '') {
            this.clear = false;
        }
    }
    handleClear() {
        this.clear = true;
        if(this.state.value === '') {
            this.setState({ tip: '搜索', value: '' });
            this.props.activeChange(false);
            this.clear = false;
            return ;
        } else {
            this.setState({
                tip: '请输入搜索内容',
                value: ''
            }, () => {
                this.refs.input.focus()
            })
        }
    }
    render() {
        return (
            <div className="left-search">
               <div className="search-wrap clearfix">
                   <i className="search-exec" title="搜索"></i>
                   <input ref="input" className="search-input" value={this.state.value} autoComplete="off" type="text"  maxLength="100" onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} />
                   <i className="search-clear" title="清空搜索" onClick={this.handleClear.bind(this)}></i>
                   <span className="input-default-tip">{this.state.tip}</span>
               </div>
           </div>
        )
    }
}

export default SearchComponent;
