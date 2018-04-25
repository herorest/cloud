import React, { Component } from 'react';
import ScrollHelp from '../iscroll/index.jsx';
import Util from '../util-dom';
import './index.css';

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            height: 0
        }
        this.scrollTop = 0;
    }
    componentWillMount() {
        this.state.height = this.props.menu ? (this.props.menu.length > 10 ? 400 :this.props.menu.length * 40 + 3) : this.getDropdownHeight(this.props);
    }
    componentWillReceiveProps(nextProps) {
        let height = nextProps.menu ? (nextProps.menu.length > 10 ? 400 : nextProps.menu.length * 40 + 3) : this.getDropdownHeight(nextProps);
        this.setState({ height: height });
        this.refs.scroll.refs.scrollContentWrap.scrollTop = this.scrollTop;
    }
    componentDidUpdate() {
        if(!this.props.visible && this.state.show) {
            this.scrollTop = 0;
        }
    }
    getDropdownHeight(props) {
        let { height, maxHeight } = props.style;
        let { menu, data } = props;
        let arr = menu ? menu : data, len = arr.length;
        if(height) {
            return height;
        }
        if(maxHeight > 402) {
            return len > 10 ? 402 : len * 40 + 3;
        } else {
            return (len * 40) > maxHeight ? maxHeight : (len * 40 + 1);
        }
    }
    handleAnimationEnd() {
        this.setState({ show: this.props.visible });
    }
    handleMouseLeave(e) {
        if(this.props.trigger === 'click') {
            return ;
        }
        let _this = this, movePointY = e.pageY, top = this.props.style.top;
        if(movePointY > top) {
            setTimeout(() => {
                _this.props.changeVisible(false);
            }, 200)
        } else {
            let movePointX = e.pageX;
            let parentW = this.props.parent.width;
            let parentL = this.props.parent.left;
            if(movePointX > parentL + parentW || movePointX < parentL) {
                setTimeout(() => {
                    _this.props.changeVisible(false);
                }, 200)
            }
        }
    }
    getContent() {
        let { menu, data } = this.props;
        if(menu) {
            return menu;
        }
        let array = data.map((v, i) => {
            return (
                <li className={v.className || 'sync-dropdown-item'} onClick={v.onClick || null} style={v.style || {}} key={i}>
                    <span>{v.value}</span>
                </li>
            )
        })
        return array;
    }
    getClassName() {
        let { visible } = this.props, show = this.state.show;
        let preCls = 'sync', dropdownClass = '';
        if(visible) {
            return show ? (preCls + '-dropdown ' + dropdownClass) : (preCls + '-dropdown ' + dropdownClass + ' animated time02 fade-in-min-down');
        } else {
            return (preCls + '-dropdown ' + dropdownClass + ' animated time02 fade-in-min-downOut');
        }
    }
    handleScroll(d) {
        this.scrollTop = d;
    }
    render() {
        let { hasAngle, align, visible, style, id, btns } = this.props, show = this.state.show;
        let classn = this.getClassName();
        let dropStyle = Object.assign({}, style, { display: visible ? 'block' : this.state.show ? 'block' : 'none' });
        let content = this.getContent();
        if(btns && btns.length > 0) {
            return (
                <div ref="dropdown" className={classn} style={dropStyle} onMouseLeave={this.handleMouseLeave.bind(this)} onAnimationEnd={this.handleAnimationEnd.bind(this)}>
                    <i className={"sync-dropdown-icon " + align}></i>
                    <div ref="menuWrap" style={{ height: this.state.height }}>
                        <ScrollHelp ref="scroll" name={ 'dropdown' + id } realTimeScroll={this.handleScroll.bind(this)}>
                            <ul>
                                {content}
                            </ul>
                        </ScrollHelp>
                    </div>
                    <div ref="btnWrap" className="sync-btn-wrap">
                        {
                            btns.map((v, i) => {
                                return (
                                    <span key={i} style={v.style || {}} className={v.className || ''} onClick={v.onClick}>{v.value}</span>
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div ref="dropdown" className={classn} style={dropStyle} onMouseLeave={this.handleMouseLeave.bind(this)} onAnimationEnd={this.handleAnimationEnd.bind(this)}>
                    <i className={"sync-dropdown-icon " + align}></i>
                    <div ref="menuWrap" style={{ height: this.state.height }}>
                        <ScrollHelp ref="scroll" name={ 'dropdown' + id } realTimeScroll={this.handleScroll.bind(this)}>
                            <ul>
                                {content}
                            </ul>
                        </ScrollHelp>
                    </div>
                </div>
            )
        }
    }
}

export default Dropdown;
