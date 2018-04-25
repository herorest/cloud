import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../common/head';
import Footer from '../../common/foot';
import Container from './container';
import * as groupAction from '../actions/group';
import * as detailAction from '../actions/detail';
import * as columnAction from '../actions/column';
import * as modalAction from '../actions/modal'

import '../../../../css/body.css';
import '../../../../css/sms.css';
import '../../../../css/modify.css';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {
            group,
            detail,
            column,
            modal,
            actions
        } = this.props;
        return (
            <div className="container sms">
                <Header />
                <Container group={group} detail={detail} column={column} actions={actions} modal={modal} />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        column:state.column,
        group:state.group,
        detail:state.detail,
        modal:state.modal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                groupAction,
                detailAction,
                columnAction,
                modalAction
                ),
            dispatch
        )
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
