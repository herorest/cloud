import React, {Component} from 'react';

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
        setTimeout(function() {
            if(_this.state.value === '') {
                if(_this.props.searchInfo.content !== '') {
                    if(!_this.clear) {
                        _this.setState({ tip: '搜索' });
                        _this.props.actions.searchChangeReset();
                        _this.props.actions.changeSearchFlag({ isSearch: false });
                        _this.props.actions.getContactList({ group: '全部联系人', start: 0, limit: 20 });
                        _this.props.activeChange(false);
                    } else {
                        _this.clear = false;
                        _this.refs.input.focus();
                    }
                } else {
                    if(!_this.clear) {
                        _this.setState({ tip: '搜索' });
                        _this.props.activeChange(false);
                    } else {
                        _this.clear = false;
                    }
                }
                return ;
            }
            let value = _this.state.value;
            if(value === _this.props.searchInfo.content) {
                return ;
            }
            _this.props.actions.searchChangeReset();
            _this.props.actions.changeSearchFlag({ isSearch: true });
            _this.props.actions.searchContactList({ content: value, start: 0, limit: 20 });
            _this.props.actions.searchCount({ content: value });
        }, 100);
    }
    handleFocus(e) {
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
