import React from 'react';
import ReactDOM from 'react-dom';

var Checkbox = React.createClass({
    shouldComponentUpdate:function(nextProps, nextState){
        if(this.props.checked != nextProps.checked){
            return true;
        }
        return false;
    },
    checkCallback:function(e){
        this.props.checkCallback(this.props.id);
        //冒泡
        e.stopPropagation();
    },
    render: function() {
        var classn = 'i-checkbox';
        if(this.props.checked){
            classn += ' checked'
        }
        return (
            <div className={classn} ref="checkbox" data-id={this.props.id} onClick={this.checkCallback} onTouchEnd={this.checkCallback}>
                <i></i>
            </div>
        );
    }
});

module.exports =  Checkbox;
