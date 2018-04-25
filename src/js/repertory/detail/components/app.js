import React from 'react';
import assign from 'object-assign';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAction from '../actions/user';
import * as desktopAction from '../actions/desktop';
import Loading from './loading';
import Ebutton from './head/ebutton';
import Container from './container';
import Header from '../../common/head';
import Footer from '../../common/foot';
// import DevTools from '../../common/DevTools'

var App = React.createClass({
	componentWillMount:function() {
		this.props.actions.getUserType(1);
    },
	componentDidMount:function() {
		this.winResize();
	},
	winResize:function(){
		var fitwin = function(){
			/*fit*/
		}
		fitwin();
	},
	startHandle:function(){
	},
	chosePage:function(page){
		var _self = this;
		this.props.actions.changePage(page);
	},
	getPicList:function(){
		this.props.actions.getPicture();
	},
	clickHandle:function(){
		this.getPicList();
	},
	render:function() {
		var _self = this;
		const { dispatch, pagejson, selectpage, template, userstate, blockbox, desktop, actions } = this.props;
		return (
            <div className="editor">
                <Header/>
                <div onClick={this.clickHandle}>
    				<Loading
    					startHandle={this.startHandle}
    				/>
    				<Container
    					userstate={userstate}
    					template={template}
    					actions={actions}
    					dataUpdate={this.dataUpdate}
    					dataChange={this.dataChange}
    				/>
    			</div>
                <Footer/>
            </div>

		)
	}
});

function mapStateToProps(state) {
    return {
        userstate: state.userstate,
        pagejson: state.pagejson,
        selectpage: state.selectpage,
        template: state.template,
		blockbox: state.blockbox,
		desktop:state.desktop
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            assign({}, userAction, desktopAction),
            dispatch
        ),
    };
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
