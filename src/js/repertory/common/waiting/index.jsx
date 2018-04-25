'use strict';
import React from 'react';
import './index.css'

const App = React.createClass({
    render() {
        var gif = (
            <svg className="spinner" width="26px" height="26px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" style={{stroke:'#4288ed'}}></circle>
            </svg>
        );
        return (
            <div className="waiting">
                <div className="waiting-pic">
                    <span>
                        {gif}
                    </span>
                </div>
            </div>
        );
    }
});

module.exports = App;
