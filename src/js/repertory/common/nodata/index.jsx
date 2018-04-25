'use strict';
import React from 'react';
import './index.css'

const App = React.createClass({
    render() {
        var emptyTip = "没有数据";

        return (
            <div className="nodata">
                <span className="nodata-tip">{emptyTip}</span>
            </div>
        );
    }
});

module.exports = App;
