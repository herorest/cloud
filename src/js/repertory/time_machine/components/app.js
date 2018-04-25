import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../common/head';
import Footer from '../../common/foot';
import Container from './container';
import HoverBox from './hoverBox';
import * as timelineAction from '../actions/timeline';
import * as detailAction from '../actions/detail';
import * as hoverAction from '../actions/hoverBox';

import '../../../../css/recycle.css';
import '../../../../css/timemachine.css';

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {//渲染结束立即查询时光轴
        this.props.actions.queryTimeline();
    }
    render() {
        let {
            list,
            actions,
            hover
        } = this.props;
        return (
            <div className="editor">
                <Header />
                <Container
                    actions={actions}
                    list={list}
                />
                <Footer />
                <HoverBox data={hover} actions={actions}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.timeline,
        detail: state.detail,
        hover: state.hover
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                timelineAction,
                detailAction,
                hoverAction
                ),
            dispatch
        )
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
