import React from 'react';
import Etools from './etools';
import Ebutton from './ebutton';

var whead = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){

    },
    render:function() {
        var userstate = this.props.userstate;
        return (
            <div className="w_header">
                <a href="manage.html" className="h_logo"></a>
                <div className="e_tools">
                    <Etools userstate={userstate} openPicStore={this.props.openPicStore} />
                </div>
                <Ebutton userstate={userstate} openPreview={this.props.openPreview} />
            </div>
        )
    }
});

module.exports = whead;
