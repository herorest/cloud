import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../common/head';
import Footer from '../../common/foot';
import Container from './container';
import * as groupAction from '../actions/group';
import * as detailAction from '../actions/detail';
import * as menuAction from '../actions/menu';
import * as modalAction from '../actions/modal'
import * as recycleAction from '../../common/recycle/recycleAction'

import '../../../../css/body.css';
import '../../../../css/sms.css';
import '../../../../css/modify.css';
import '../../../../css/recycle.css';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {
            group,
            detail,
            menu,
            modal,
            recycle,
            actions
        } = this.props;
        return (
            <div className="container sms">
                <Header />
                <Container group={group} detail={detail} menu={menu} actions={actions} modal={modal} recycle={recycle} />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        menu:state.menu,
        group:state.group,
        detail:state.detail,
        modal:state.modal,
        recycle:state.recycle
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                groupAction,
                detailAction,
                menuAction,
                modalAction,
                recycleAction
                ),
            dispatch
        )
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
