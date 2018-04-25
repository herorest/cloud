import React, { Component } from 'react';

class LeftWrap extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.active != this.props.active){
            return true;
        }else{
            return false;
        }
    }
    handleClick = () => {
        this.props.changeColumn(this.props.index);
    }
    render() {
        return (
            <li>
                <a href="javascript:void(0);" className={this.props.active?'active':''} onClick={this.handleClick}>{this.props.name}</a>
            </li>
        )
    }
}

export default LeftWrap;
