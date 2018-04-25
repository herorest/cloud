import React from 'react';
import reqwest from 'reqwest';
import Header from '../common/head';
import Footer from '../common/foot';
import EntryList from './entryList';
import Utils from '../common/util-dom';
import Notification from '../common/notification/index.jsx';
import Interface from '../common/interface';
import Device from '../common/device';

import '../../../css/main.css';

var indexCom = React.createClass({
	getInitialState:function() {
		return {
            userData:{}
		};
	},
	componentDidMount:function(){
		this.getAuth();
	},
	getAuth : function(){
        var self = this;
        Utils.ajax({
            url:Interface.apiUrl.loaduserdata,
            success:function(result){
                self.setState({
                    userData:result
                });
            }
        },reqwest,Notification);
	},

	render:function() {
		return (
            <div className="index">
                <Device/>

                <div className="container">
                    <Header userData={this.state.userData} />
                    <EntryList userData={this.state.userData} />
                    <Footer/>
                </div>
			</div>
		)
	}
});
module.exports = indexCom;
