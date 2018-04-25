import React, { Component } from 'react';
import Dialog from 'rc-dialog';
import Utils from '../util-dom'
import './index.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        let style = props.style;
    }

    onClose = () => {
        this.props.onClose();
    }
    onShow = () => {
        this.props.onShow();
    }
    buildFooter = () => {
        let footer = [];
        if(this.props.footer){
            if(this.props.footer.length > 0){
                let length = this.props.footer.length;
                this.props.footer.forEach(function(value,key){
                    footer.push(
                        <a href="javascript:void(0);" key={key} className={value.className + ' btn-size' + length} onClick={value.onClick}>{value.name}</a>
                    );
                });
            }else{
                footer = [
                    {
                        name:'确定',
                        className:'btn btn-primary',
                        onClick:this.onClose
                    }
                ]
            }
        }else{
            footer = false;
        }

        return footer;
    }
    render() {
        let props = this.props;
        let footer = this.buildFooter();
        let style = props.style;
        if(!props.style || !props.style.width){
            style['width'] = '450';
        }
        let closeable = props.closable ? true:false;
        return (
            <Dialog
                wrapClassName={props.wrapClassName}
                visible={props.visible}
                animation={props.animation || 'slide-fade'}
                maskAnimation={props.maskAnimation || 'fade'}
                prefixCls={props.prefixCls || 'modal'}
                style={style}
                title={props.title}
                closable={closeable}
                onClose={props.onClose}
                footer={footer}
            >
                {this.props.children}
            </Dialog>
        )

    }
}

export default Modal;
