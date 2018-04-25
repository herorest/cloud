import React from 'react';

var modalAll = React.createClass({
	render:function() {
		return (
            <div className="tip-title">
                <div className="tip-title-content">
                    <i className="dialog-logo">
                        <svg className="icon-logo">
                            <switch>
                                <use xlinkHref="#iconFlymeLogo"></use>
                            </switch>
                        </svg>
                    </i>
                    <span className="tip-word">云服务安全校验</span>
                </div>
                <a href="javascript:void(0);" className="dialog-cancel"></a>
            </div>
		)
	}
});
module.exports = modalAll;
