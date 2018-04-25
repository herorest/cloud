import React, {Component} from 'react';
import LeftGroupWrap from './LeftGroupWrap';
import SearchComponent from './Search';

class FilterWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }
    activeChange(flag) {
        this.setState({ active: flag });
        // this.props.activeChange(flag);
    }
    render() {
        let { list, group, searchInfo, actions } = this.props;
        return (
            <div className={ this.state.active ? 'left-filter-wrap active clearfix' : 'left-filter-wrap clearfix' }>
                <SearchComponent searchInfo={searchInfo} actions={actions} list={list} activeChange={this.activeChange.bind(this)} />
                <div className='left-group clearfix'>
                    <LeftGroupWrap group={group} actions={actions} list={list} />
               </div>
             </div>
        )
    }
}

export default FilterWrap;
