import React, {Component} from 'react';

import './index.css';

class ScrollHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            needScrollBar: false,
            scrollBarTop: 0,
            scrollBarBot: 0,
            realScrollBarWidth: 0,
            scrollBarWidth: 6,
            scrollWrapColor: "transparent",
            scrollBarColor: "rgba(193,193,193,0.6)",
        };
        this.opt = {
            scrollBarWidth : 0,
            shouldUpdate : true,
            wrapHeight : 0,
            contentHeight : 0,
            scrollHeight : 0,
            scrollTop : 0,
            mouseDown : false,
            startPos : 0,
            changePos : 0,
            botFixed : false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.isFetching !== this.props.isFetching && this.props.name !== nextProps.name){
            return false;
        }
        return true;
    }

    componentWillReceiveProps(nextProps) {
        this.opt.shouldUpdate = true;

        //过滤掉特殊形态
        if(nextProps.dataType == 'origin' && nextProps.isFetching === this.props.isFetching){
            this.refs.scrollContentWrap.scrollTop = 0;
        }
    }

    componentDidUpdate() {
        if (!this.opt.shouldUpdate) return;
        this.scrollBarStateChange();
        this.opt.shouldUpdate = false;
    }

    componentDidMount = () => {
        let scrollContentWrap = this.refs.scrollContentWrap;
        this.opt.scrollBarWidth = scrollContentWrap.offsetWidth - scrollContentWrap.clientWidth;
        this.setState({
            realScrollBarWidth: this.opt.scrollBarWidth,
        });
        if (this.props.botFixed) {
            this.opt.botFixed = this.props.botFixed === "true";
        }
        document.addEventListener("mouseup", this.handleMouseUp.bind(this));
        document.addEventListener("mousemove", this.handleMouseMove.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("mouseup", this.handleMouseUp.bind(this));
        document.removeEventListener("mousemove", this.handleMouseMove.bind(this));
    }

    getScrollTop() {
        return this.refs.scrollContentWrap.scrollTop;
    }

    scrollBarStateChange = () => {
        let scrollContentWrap = this.refs.scrollContentWrap;
        let scrollContent = this.refs.scrollContent;
        
        if (scrollContent.clientHeight < scrollContentWrap.clientHeight) {
            this.setState({
                needScrollBar:false
            });
            return;
        }

        this.opt.wrapHeight = scrollContentWrap.clientHeight;
        this.opt.contentHeight = scrollContent.clientHeight;

        this.opt.scrollHeight = (this.opt.wrapHeight / this.opt.contentHeight * 100).toFixed(2);
        this.opt.scrollTop = (scrollContentWrap.scrollTop / this.opt.contentHeight * 100).toFixed(2);
        if (parseInt(this.state.scrollBarBot) == 0 && this.opt.botFixed == true) {
            this.refs.scrollContentWrap.scrollTop = this.opt.contentHeight;
            let scrollBarTop = 100 - (parseFloat(this.opt.scrollHeight));
            let scrollBarBot = 0;
            this.setState({
                scrollBarTop: scrollBarTop,
                scrollBarBot: scrollBarBot,
                needScrollBar: true,
            });
        } else {
            let scrollBarTop = parseFloat(this.opt.scrollTop);
            let scrollBarBot = 100 - (parseFloat(this.opt.scrollHeight) + parseFloat(this.opt.scrollTop));
            this.setState({
                scrollBarTop: scrollBarTop,
                scrollBarBot: scrollBarBot,
                needScrollBar: true,
            });
        }
    }

    handleScroll = () => {
        let scrollTop = this.refs.scrollContentWrap.scrollTop;
        let offsetHeight = this.refs.scrollContentWrap.offsetHeight;
        let scrollBarTop = (this.refs.scrollContentWrap.scrollTop / this.opt.contentHeight * 100);
        let scrollBarBot = 100 - (parseFloat(this.opt.scrollHeight) + parseFloat(scrollBarTop));
        if((scrollTop + offsetHeight) >= (this.opt.contentHeight - offsetHeight / 4)){
            if(this.props.onScroll) this.props.onScroll();
        }
        this.setState({
            scrollBarTop: scrollBarTop.toFixed(2),
            scrollBarBot: scrollBarBot.toFixed(2),
        });
    }

    handleMouseDown(e) {
        this.opt.mouseDown = true;
        this.opt.startPos = e.clientY;
    }

    handleMouseMove(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.opt.mouseDown) return;
        this.opt.changePos = this.opt.startPos - e.clientY;
        this.opt.startPos = e.clientY;
        this.refs.scrollContentWrap.scrollTop -= ( this.opt.changePos * this.opt.contentHeight / this.opt.wrapHeight);
    }

    handleMouseUp() {
        if (!this.opt.mouseDown) return;
        this.opt.mouseDown = false;
    }

    render() {
        let scrollBar = "";
        if (this.state.needScrollBar) {
            scrollBar = (
                <div
                    className="scrollBarWrap"
                    style={{
                        width: this.state.scrollBarWidth + "px",
                        borderRadius: this.state.scrollBarWidth / 2 + "px",
                        backgroundColor: this.state.scrollWrapColor,
                    }}
                >
                    <div
                        className="scrollBar"
                        style={{
                            top: this.state.scrollBarTop + "%",
                            bottom: this.state.scrollBarBot + "%",
                            backgroundColor: this.state.scrollBarColor,
                        }}
                        onMouseDown={this.handleMouseDown.bind(this)}
                    ></div>
                </div>
            );
        } else {
            scrollBar = (
                <div
                    className="scrollBarWrap"
                    style={{
                        width: "8px",
                        backgroundColor: this.state.scrollWrapColor,
                    }}
                >
                </div>
            );
        }
        return (
            <div
                className="scrollBoxWrap" ref="scrollWrap"
            >
                {scrollBar}
                <div
                    className="scrollContentWrap"
                    ref="scrollContentWrap"
                    onScroll={this.handleScroll.bind(this)}
                    style={{
                        right: "-" + this.state.realScrollBarWidth + "px",
                    }}
                >
                    <div
                        className="scrollContent"
                        ref="scrollContent"
                    >
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default ScrollHelp;
