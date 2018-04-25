import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './drop.jsx';
import Util from '../util-dom';

class SimpleDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isSelect: false,
            menu: null,
            trigger: 'click',
            align: 'left',
            hasAngle: false,
            style: { width: 160 },
            btns: []
        }
        this.show = false;
    }
    componentWillMount() {
        let obj = {};
        for(let k in this.state) {
            if(this.props[k]) {
                this.state[k] = this.props[k];
            }
        }

    }
    componentWillReceiveProps(nextProps) {
        let o = {}, _this = this;
        for(let k in this.props) {
            if(k !== 'children' && k !== 'menu') {
                if(nextProps[k] !== this.props[k]) {
                    o[k] = nextProps[k];
                }
            }
        }
        if(this.props.menu && nextProps.menu) {
            o['menu'] = nextProps['menu'];
        }
        this.setState(o, () => {
            if(_this.show) {
                _this.renderDropdown(true);
            }
        })
    }
    componentDidMount() {
        this.show = false;
        this.initEvent();
        this.popup = document.createElement('div');
        if(!this.popupId) {
            this.popupId = this.getRandomKey();
            this.popup.id = this.popupId;
        }
    }
    componentWillUnmount() {
        let dom = document.getElementById(this.popupId);
        if(dom) {
            ReactDOM.unmountComponentAtNode(this.popup);
            document.body.removeChild(this.popup);
            this.popupId = null;
        }
        Util.offEvent(document, 'click', this.bindEvent);
    }
    getRandomKey() {
        let array = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
        let result = [];
        for(let i = 0; i < 15; i++) {
            let index = parseInt(Math.random() * 35);
            result.push(array[index]);
        }
        return result.join('');
    }
    initEvent() {
        let _this = this;
        Util.onEvent(window, 'resize', () => {
            if(_this.show) {
                _this.renderDropdown(true);
            }
        })

        if(this.state.trigger === 'click' || this.state.trigger === 'click|hover' || this.state.trigger === 'hover|click') {
            Util.onEvent(document, 'click', this.bindEvent)
        }
    }
    bindEvent = (e) => {
        if(e.target === this.refs.children || this.refs.children.contains(e.target)) {
            return ;
        }
        if(this.show) {
            this.show = false;
            this.renderDropdown(false);
        }
    }
    getDropStyle() {
        let childOffset = Util.getOffset(this.refs.children);
        let childSize = {
            width: Util.outerWidth(this.refs.children),
            height: Util.outerHeight(this.refs.children)
        }
        let left = childOffset.left;
        let alignHash = {
            left: 10,
            center: parseInt(this.state.style.width) / 2 - childSize.width / 2,
            // right: parseInt(this.state.style.width) + childSize.width + 10,
            right: parseInt(this.state.style.width) - childSize.width
        }
        left -= alignHash[this.state.align];
        let style = this.state.style;
        return Object.assign({}, style, {
            top: childOffset.top + childSize.height + (this.state.hasAngle ? 10 : 7),
            left: left
        })
    }
    renderDropdown(visible) {
        document.body.appendChild(this.popup);
        let offset = Util.getOffset(this.refs.children);
        ReactDOM.render(
            <Dropdown
                visible={visible}
                id={this.popupId}
                changeVisible={this.changeShow.bind(this)}
                style={this.getDropStyle()}
                hasAngle={this.state.hasAngle}
                align={this.state.align}
                data={this.state.data}
                menu={this.state.menu}
                trigger={this.state.trigger}
                isSelect={this.state.isSelect}
                parent={{
                    width: Util.outerWidth(this.refs.children),
                    height: Util.outerHeight(this.refs.children),
                    top: offset.top,
                    left: offset.left
                }}
                btns={this.state.btns}
                />,
            this.popup);
    }
    handleClick(e) {
        if(this.state.trigger.indexOf('click') < 0) {
            return ;
        }
        this.show = !this.show;
        this.renderDropdown(this.show);
    }
    handleMouseEnter(e) {
        if(this.state.trigger.indexOf('click') > -1) {
            return ;
        }
        if(!this.show) {
            this.show = true;
            this.renderDropdown(this.show);
        }
    }
    changeShow(flag) {
        this.show = flag;
        this.renderDropdown(this.show);
    }
    handleMouseLeave(e) {
        if(this.state.trigger.indexOf('hover') < 0) {
            return ;
        }
        let movePointY = e.pageY;
        let bottomTop = Util.getOffset(e.target).top + Util.height(e.target);
        if(movePointY < bottomTop && this.show) {
            this.show = false;
            this.renderDropdown(this.show)
        }
    }
    render() {
        let id = this.getRandomKey();
        return (
            cloneElement(this.props.children, {
                onClick: this.handleClick.bind(this),
                onMouseLeave: this.handleMouseLeave.bind(this),
                onMouseEnter: this.handleMouseEnter.bind(this),
                ref: 'children',
                id: id
            })
        )
    }
}

export default SimpleDropdown;
