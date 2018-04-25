import React, {Component} from 'react';
import Utils from '../../common/util-dom.js'

class DetailLi extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        if(
            JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)
        ){
            return true;
        }else{
            return false;
        }
    }
    showDetail = (e) => {
        this.props.showDetail(this.props.data.uniformNumber);
        //冒泡
        e.stopPropagation();
    }
    deleteSms = () => {
        this.props.delsms(this.props.data.uuId);
    }
    addFavo = () => {
        this.props.addFavo(this.props.data.uuId,this.props.data.favourite == 0 ? 1 : 0);
    }
    render() {
        let {
            data
        } = this.props;

        let itemClass = 'r-self';
        let time = Utils.compareDate(data.senddate);
        let title = (
            <div className="r-title">
                <a href="javascript:void(0);" className="r-del" onClick={this.deleteSms}>删除</a>
                <a href="javascript:void(0);" className="r-fav" onClick={this.addFavo}>{data.favourite == 0 ? '收藏':'取消收藏'}</a>
                <span>{time}</span>
            </div>
        )
        if(data.type == 1){
            itemClass = 'r-other';
            title = (
                <div className="r-title">
                    <span>{time}</span>
                    <a href="javascript:void(0);" className="r-del" onClick={this.deleteSms}>删除</a>
                    <a href="javascript:void(0);" className="r-fav" onClick={this.addFavo}>{data.favourite == 0 ? '收藏':'取消收藏'}</a>
                </div>
            )
        }
        itemClass += ' clearfix';

        return (

            <li className={itemClass}>
                {title}
                <div className="r-body">
                    {data.body}
                </div>
            </li>
        )
    }
}

export default DetailLi;
