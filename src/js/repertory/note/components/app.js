import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../common/head';
import Footer from '../../common/foot';
import Container from './container';
import * as listAction from '../actions/list';
import * as detailAction from '../actions/detail';
import * as modalAction from '../actions/modal'
import * as groupAction from '../actions/group'
import $ from 'n-zepto';


import '../../../../css/body.css';
import '../../../../css/note.css';
import '../../../../css/modify.css';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {
            list,
            detail,
            actions,
            modal,
            group
        } = this.props;
        return (
            <div className="container note">
                <Header />
                <Container list={list} detail={detail} group={group} actions={actions} modal={modal} />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list:state.list,
        detail:state.detail,
        modal:state.modal,
        group:state.group
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                listAction,
                detailAction,
                modalAction,
                groupAction
                ),
            dispatch
        )
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
