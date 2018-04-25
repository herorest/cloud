import React from 'react';
import Whead from './head';
import Wcontent from './content';


var ebutton = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){
    },
    render:function() {
        return (
            <div className="wrap opacity">
                <div className="editor">
                    <Whead
                        userstate={this.props.userstate}
                        actions={this.props.actions}
                    />
                    <Wcontent {...this.props} />
                </div>
            </div>
        )
    }
});

module.exports = ebutton;
