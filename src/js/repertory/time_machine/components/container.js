import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../../common/sidebar/index.jsx';
import LeftWrap from './leftWrap';
import RightWrap from './rightWrap';
import LeftHeader from './leftHeader';
import LeftContent from './leftContent';
import RightHeader from './rightHeader';
import RightContent from './rightContent';
import Util from '../../common/util-dom';
import * as pageUtil from '../common/util';

class Container extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    toTimeString(str) {
        let r = str.split('');

        [[10, ':'], [8, ' '], [6, '.'], [4, '.']].map(function(d) {
            r.splice(d[0], 0, d[1]);
        });

        return r.join('');
    }
    render() {
        let list = this.props.list,
            _this = this,
            actions = this.props.actions;
        let timeArray = list.map((v) => _this.toTimeString(v.flypoint));
        return (
            <div className="flyme-content clearfix" id="flymeContent">
                <Sidebar type="recycle" />
                <LeftHeader ref="leftH" />
                <RightHeader ref="rightH" />
                <div className="main-wrap clearfix" >
                    <LeftContent list={timeArray} />
                    <RightContent actions={actions} list={list} />
                </div>
            </div>
        )
    }
}

export default Container;
