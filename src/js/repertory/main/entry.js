import React from 'react';
import Utils from '../common/util-dom'

var entryCom = React.createClass({
    componentDidMount:function(){

    },
    unlockJump: function() {
		let userId = this.props.userData.data.userId;
        let type = this.props.data.name;
		switch(type){
			case 'contact':
				window.location.href = '#';
				MeizuBH('action=contact_click&user_id=' + userId);
			break;
			case 'mess':
				window.location.href = '#';
				MeizuBH('action=sms_click&user_id=' + userId);
			break;
			case 'note':
				window.location.href = '#';
				MeizuBH('action=memo_click&user_id=' + userId);
			break;
			case 'photo':
                window.location.href = 'https://photos.flyme.cn/photo';
				MeizuBH('action=cloudPhoto_click&user_id=' + userId);
			break;
			case 'find':
                window.location.href = '#';
				MeizuBH('action=findPhone_click&user_id=' + userId);
				break;
			default:
				break;
		}
	},
    enterEntry:function(){
        let props = this.props;
        let visible = props.modalVisible;
        let status = props.userData.status;
        let photo_lock = props.userData.photo_lock;
        let contact_check = props.userData.contact_check;
        let name = props.data.name;
        switch(status){
            case '0':   //未验证
                if(name == 'photo'){
                    if(photo_lock){
                        if(contact_check){  //用户验证打开
                            visible('checkwayChoose',true);
                        }else{
                            visible('messCheck',true);
                        }
                    }else{
                        this.unlockJump();
                    }
                }if(name == 'find'){
                    this.unlockJump();
                }else{
                    if(contact_check){  //用户验证打开
                        visible('checkwayChoose',true);
                    }else{
                        visible('messCheck',true);
                    }
                }

            break;
            case '1':
                this.unlockJump();
            break;
            case '2':

            break;
        };
    },
	render:function() {
        let props = this.props;
        let index = props.index;
        let tindex = index * 2;
        let time = tindex > 9 ? tindex: '0' + tindex;
        let lock , darksrc , classn , darkcss = '';

        //未解锁
        if(!props.userData || props.userData.status !== '1'){
            //图库根据开关判断加锁，查找手机不加锁
            if((props.data.name == 'photo' && !props.userData.photo_lock) || (props.data.name == 'find')){
                darksrc = `images/menu_${props.data.name}.png`
                darkcss = ''
            }else{
                lock = <img src="images/lock.png" className="lock" />;
                if(browser.isie){
                    darksrc = `images/menu_${props.data.name}_lock.png`
                }else{
                    darksrc = `images/menu_${props.data.name}.png`
                    darkcss = 'dark'
                }
            }
        }else{
            darksrc = `images/menu_${props.data.name}.png`
            darkcss = ''
        }
        classn = `entry J-entry contact animated no time04 delay${time} fade-in-right no-select`

		return (
            <li className={classn} unselectable='on'>
                <a href="javascript:void(0);" data-type={props.data.name} onClick={this.enterEntry}>
                    <div className="icon">
                        {lock}
                        <img src={darksrc} className={darkcss}/>
                    </div>
                    <p>{props.data.intro}</p>
                </a>
            </li>
		)
	}
});
module.exports = entryCom;
