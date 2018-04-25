import React, { Component } from 'react';

class TabHeader extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(flypoint) {
        console.log(flypoint);
    }
    render() {
        let { add, mod, del, flypoint, total } = this.props;
        let array = [<span key={flypoint + 'total'} className="total">共{total}人</span>];
        if(mod > 0) {
            array.push(<span key={flypoint + 'mod'} className="operate">编辑{mod}人</span>);
        }
        if(add > 0) {
            array.push(<span key={flypoint + 'add'} className="operate">增加{add}人</span>);
        }
        if(del > 0) {
            array.push(<span key={flypoint + 'del'} className="operate">删除{del}人</span>)
        }
        return (
            <div className="tab-header clearfix">
                {array}
                <a href="javascript:void(0);" onClick={this.handleClick.bind(this, flypoint)}>详情</a>
            </div>
        )
    }
}

export default TabHeader;
