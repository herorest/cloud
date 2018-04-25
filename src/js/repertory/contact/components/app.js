import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listAction from '../actions/contactList';
import * as groupAction from '../actions/group';
import * as contactAction from '../actions/contact';

import Header from '../../common/head';
import Footer from '../../common/foot';
import Container from './container';

import '../../../../css/body.css';
import '../../../../css/contact.css';
import '../../../../css/modify.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { actions, list, group, contact } = this.props;
        return (
            <div className="container">
                <Header />
                <Container actions={actions} list={list} group={group} contact={contact} />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.contactList,
        group: state.group,
        contact: state.contact
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                listAction,
                groupAction,
                contactAction
                ),
            dispatch
        )
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
