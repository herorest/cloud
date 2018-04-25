var React = require('react');

var projectCom = React.createClass({
	getInitialState:function() {
		return {
			active:false
		};
	},
	componentDidMount:function(){

	},

	shouldComponentUpdate:function(nextProps){
		return nextProps.render;
	},

	componentWillUpdate:function(){

	},

	render:function() {
		var classli = 'c_p' +  (this.state.active?'active':'') + ' clearfix';
		return (
			<li className={this.classli} ref="li">

			</li>
		)
	}
});
module.exports = projectCom;
