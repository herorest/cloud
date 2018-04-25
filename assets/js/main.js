webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(338);


/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(168);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(171);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(172);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(173);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(174);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Avata = function (_Component) {
	    (0, _inherits3.default)(Avata, _Component);

	    function Avata(props) {
	        (0, _classCallCheck3.default)(this, Avata);
	        return (0, _possibleConstructorReturn3.default)(this, (Avata.__proto__ || (0, _getPrototypeOf2.default)(Avata)).call(this, props));
	    }

	    (0, _createClass3.default)(Avata, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var avata, classram;
	            if (this.props.type === 1 && this.props.id) {
	                var array = [];
	                array.push('access_token=' + window.commonData.token);
	                array.push('userId=' + window.commonData.userId);
	                array.push('sn=' + window.commonData.sn);
	                array.push('imei=' + window.commonData.imei);
	                var str = array.join('&');
	                var src = 'https://cloud.flyme.cn/c/h5/download/common/contact/filename/' + this.props.id + '?' + str;
	                avata = _react2.default.createElement('img', { src: src, width: '100%' });
	                classram = "i-avata";
	            } else {
	                var namelist = this.props.name.split('');
	                var color = namelist[0] == 1 && namelist.length > 1 ? namelist[1] : namelist[0];
	                avata = namelist[0] + namelist[1];
	                classram = "i-avata color" + (parseInt(_utilDom2.default.getColorType(color)) % 7 + 1);
	            }

	            classram += ' contactCheckImg ';

	            return _react2.default.createElement(
	                'span',
	                { className: classram, ref: 'avata' },
	                avata
	            );
	        }
	    }]);
	    return Avata;
	}(_react.Component);

	exports.default = Avata;
	module.exports = exports['default'];

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _main = __webpack_require__(339);

	var _main2 = _interopRequireDefault(_main);

	var _reactFastclick = __webpack_require__(373);

	var _reactFastclick2 = _interopRequireDefault(_reactFastclick);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	(0, _reactFastclick2.default)();

	window.onload = function () {
	    (function () {
	        function _getCookie(objName) {
	            var arrStr = document.cookie.split("; ");
	            for (var i = 0; i < arrStr.length; i++) {
	                var temp = arrStr[i].split("=");
	                if (temp[0] == objName) return unescape(temp[1]);
	            }
	        }
	        var _isLogin = _getCookie("_islogin");
	        if (_isLogin === 'true') {
	            var ga = document.createElement('script');
	            ga.type = 'text/javascript';
	            ga.async = true;
	            ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'login.flyme.cn/login/getLoginInfo?callback=loginCallback';
	            var s = document.getElementsByTagName('script')[0];
	            s.parentNode.insertBefore(ga, s);
	        }
	    })();
	    _reactDom2.default.render(_react2.default.createElement(_main2.default, null), document.getElementById('wrap'));
	};

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _head = __webpack_require__(182);

	var _head2 = _interopRequireDefault(_head);

	var _foot = __webpack_require__(277);

	var _foot2 = _interopRequireDefault(_foot);

	var _entryList = __webpack_require__(340);

	var _entryList2 = _interopRequireDefault(_entryList);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	var _device = __webpack_require__(369);

	var _device2 = _interopRequireDefault(_device);

	__webpack_require__(372);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var indexCom = _react2.default.createClass({
	  displayName: 'indexCom',

	  getInitialState: function getInitialState() {
	    return {
	      userData: {}
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.getAuth();
	  },
	  getAuth: function getAuth() {
	    var self = this;
	    _utilDom2.default.ajax({
	      url: _interface2.default.apiUrl.loaduserdata,
	      success: function success(result) {
	        self.setState({
	          userData: result
	        });
	      }
	    }, _reqwest2.default, _index2.default);
	  },

	  render: function render() {
	    return _react2.default.createElement('div', { className: 'index' }, _react2.default.createElement(_device2.default, null), _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_head2.default, { userData: this.state.userData }), _react2.default.createElement(_entryList2.default, { userData: this.state.userData }), _react2.default.createElement(_foot2.default, null)));
	  }
	});
	module.exports = indexCom;

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(341);

	var _modal = __webpack_require__(344);

	var _modal2 = _interopRequireDefault(_modal);

	var _extends2 = __webpack_require__(184);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _entry = __webpack_require__(354);

	var _entry2 = _interopRequireDefault(_entry);

	var _modal3 = __webpack_require__(355);

	var _modal4 = _interopRequireDefault(_modal3);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	var _sendCount = __webpack_require__(356);

	var _sendCount2 = _interopRequireDefault(_sendCount);

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

	var _contactCheckList = __webpack_require__(357);

	var _contactCheckList2 = _interopRequireDefault(_contactCheckList);

	var _inputNumber = __webpack_require__(359);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	__webpack_require__(368);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var entryCom = _react2.default.createClass({
	    displayName: 'entryCom',

	    getInitialState: function getInitialState() {
	        return {
	            list: [],
	            entry: [{
	                name: 'contact',
	                intro: '联系人'
	            }, {
	                name: 'mess',
	                intro: '短信'
	            }, {
	                name: 'note',
	                intro: '便签'
	            }, {
	                name: 'photo',
	                intro: '云相册'
	            }, {
	                name: 'recycle',
	                intro: '回收站'
	            }, {
	                name: 'find',
	                intro: '查找手机'
	            }],
	            modalVisible: {
	                checkwayChoose: false,
	                messCheck: false,
	                choosePerson: false,
	                bindPhone: false,
	                enterCodes: false,
	                contactCheckInfo: false
	            },
	            modalConfig: {
	                width: '560px',
	                classn: 'security-check vertical-center-modal '
	            },
	            modalFlag: {
	                contactCheckList: [],
	                contactCheckLimit: false,
	                contactCheckclear: false, //清空已选择的验证联系人列表
	                phoneTipError: false,
	                phoneTip: '今天验证的次数过多，请改用短信方式验证或明天再试',
	                messCodeError: false,
	                messCodes: '验证码错误或者已经过期'
	            },
	            userData: this.props.userData
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.animated();
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
	        //更新userData
	        if (newProps.userData && newProps.userData.status != this.props.userData.status) {
	            this.setState({
	                userData: newProps.userData
	            });
	        }
	    },
	    animated: function animated() {
	        var li = this.refs.entryWrap.querySelectorAll('li');
	        _utilDom2.default.removeClass(li, 'no');
	    },
	    modalVisible: function modalVisible(type, flag) {
	        var newO = {};
	        newO[type] = flag;
	        this.setState({
	            modalVisible: this.changeShowModal(newO)
	        });
	    },
	    changeShowModal: function changeShowModal(obj) {
	        var newVisible = {
	            checkwayChoose: false,
	            messCheck: false,
	            bindPhone: false,
	            enterCodes: false,
	            choosePerson: false,
	            contactCheckInfo: false
	        };
	        return (0, _extends3.default)({}, newVisible, obj);
	    },
	    //选择路线
	    checkwayChoose: function checkwayChoose(type) {
	        var self = this;
	        if (type == 'contact') {
	            //获取用户联系人是否大于10人，否则使用短信验证
	            _utilDom2.default.ajax({
	                url: _interface2.default.apiUrl.checkable,
	                success: function success(result) {
	                    if (result) {
	                        self.getContactMaterial(false);
	                    } else {
	                        //本账户联系人少于10位，请使用手机短信验证
	                    }
	                }
	            }, _reqwest2.default, _index2.default);
	        } else {
	            this.setState({
	                modalVisible: this.changeShowModal({
	                    messCheck: true
	                })
	            });
	        }
	    },
	    //获取用户验证数据
	    getContactMaterial: function getContactMaterial(refreshFlag, delay) {
	        var self = this;
	        _utilDom2.default.ajax({
	            url: _interface2.default.apiUrl.getMaterial,
	            success: function success(result) {
	                if (result) {
	                    if (result.overLimit) {
	                        //已经不可以再继续校验
	                        this.setState({
	                            modalVisible: self.changeShowModal({
	                                contactCheckInfo: true
	                            }),
	                            modalFlag: (0, _extends3.default)({}, self.state.modalFlag, {
	                                phoneTip: refreshFlag && refreshFlag === true ? '今天刷新次数过多，请改用短信方式验证或明天再试' : '今天验证的次数过多，请改用短信方式验证或明天再试',
	                                contactCheckLimit: true
	                            })
	                        });
	                        return;
	                    }
	                    var array = result.names;
	                    var len = array.length;
	                    if (len < 8) {
	                        this.setState({
	                            modalVisible: self.changeShowModal({
	                                contactCheckInfo: true
	                            }),
	                            modalFlag: (0, _extends3.default)({}, self.state.modalFlag, {
	                                phoneTip: '本账户联系人少于10位，请使用手机短信验证',
	                                contactCheckLimit: true
	                            })
	                        });
	                        return;
	                    } else {
	                        array = array.slice(0, 8);
	                        self.setState({
	                            modalVisible: self.changeShowModal({
	                                choosePerson: true
	                            }),
	                            modalFlag: (0, _extends3.default)({}, self.state.modalFlag, {
	                                contactCheckLimit: false,
	                                contactCheckList: array
	                            })
	                        });
	                    }
	                }
	            }
	        }, _reqwest2.default, _index2.default);
	    },
	    //发送短信
	    sendMessHandle: function sendMessHandle() {
	        var self = this;
	        _utilDom2.default.ajax({
	            url: _interface2.default.apiUrl.sendsms,
	            success: function success(result) {
	                var status = result.status;
	                var userId = '';
	                switch (status) {

	                    //短信校验发送次数过多
	                    case '3':
	                        self.setState({
	                            modalFlag: (0, _extends3.default)({}, self.state.modalFlag, {
	                                messCodeError: true,
	                                messCodes: '发送短信次数过多，请一个小时后重试'
	                            })
	                        });
	                        break;
	                }
	            }
	        }, _reqwest2.default, _index2.default);
	    },
	    //校验验证码
	    checkMessCodes: function checkMessCodes() {
	        var value = this.refs.messCodes.refs.messCodes.refs.input.value;
	        _utilDom2.default.ajax({
	            url: _interface2.default.apiUrl.sendsms,
	            success: function success(result) {
	                var status = result.status;
	                var userId = '';
	                switch (status) {
	                    //短信校验失效(超时或者没有点击发送按钮)
	                    case '2':
	                        self.setState({
	                            modalFlag: (0, _extends3.default)({}, self.state.modalFlag, {
	                                messCodeError: true,
	                                messCodes: '验证码错误或已过期'
	                            })
	                        });
	                        break;
	                    //短信校验失败
	                    case '0':
	                        self.setState({
	                            modalFlag: (0, _extends3.default)({}, self.state.modalFlag, {
	                                messCodeError: true,
	                                messCodes: '验证码错误'
	                            })
	                        });
	                        break;
	                    //短信校验成功
	                    case '1':
	                        self.setState({
	                            modalFlag: (0, _extends3.default)({}, self.state.modalFlag, {
	                                messCodeError: false,
	                                messCodes: ''
	                            }),
	                            userData: (0, _extends3.default)({}, self.state.userData, {
	                                status: 1
	                            })
	                        });
	                        // MeizuBH("action=unlock_phone&userId=" + userId);//通过短信方式解锁的数据埋点
	                        break;
	                }
	            }
	        }, _reqwest2.default, _index2.default);

	        //this.modalVisible('enterCodes',false);
	    },

	    //关闭联系人验证弹框
	    cancelChoosePerson: function cancelChoosePerson() {
	        this.setState({
	            modalVisible: this.changeShowModal({
	                choosePerson: false
	            })
	        });
	    },

	    //清空已选以及所有联系人验证列表
	    clearContactList: function clearContactList() {
	        this.setState({
	            modalFlag: (0, _extends3.default)({}, this.state.modalFlag, {
	                contactCheckclear: true,
	                contactCheckList: [],
	                contactCheckLimit: false
	            })
	        });
	    },

	    //重置 contactCheckclear
	    resetContactList: function resetContactList() {
	        this.setState({
	            modalFlag: (0, _extends3.default)({}, this.state.modalFlag, {
	                contactCheckclear: false
	            })
	        });
	    },

	    //发送短信
	    sendMessage: function sendMessage() {
	        this.setState({
	            modalVisible: this.changeShowModal({
	                'enterCodes': true
	            })
	        });
	    },

	    render: function render() {
	        var _this = this;

	        var self = this;
	        var entrylist = [];
	        this.state.entry.forEach(function (item, k) {
	            entrylist.push(_react2.default.createElement(_entry2.default, { key: k, index: k, data: item, userData: self.state.userData, modalVisible: self.modalVisible }));
	        });

	        //验证码提示
	        var messCodeTip = {
	            visibility: 'hidden'
	        };
	        if (this.state.modalFlag.messCodeError) {
	            messCodeTip = {
	                visibility: 'visible'
	            };
	        }

	        return _react2.default.createElement('div', { className: 'entry-wrap no-select', id: 'entry', ref: 'entryWrap' }, _react2.default.createElement('ul', null, entrylist), _react2.default.createElement(_modal2.default, {
	            width: this.state.modalConfig.width,
	            wrapClassName: this.state.modalConfig.classn + ' mess-check',
	            visible: this.state.modalVisible.messCheck,
	            onOk: function onOk() {
	                return _this.sendMessage();
	            },
	            onCancel: function onCancel() {
	                return _this.modalVisible('messCheck', false);
	            },
	            okText: '\u53D1\u9001\u77ED\u4FE1'
	        }, _react2.default.createElement(_modal4.default, null), _react2.default.createElement('div', { className: 'tip-body' }, _react2.default.createElement('div', { className: 'tip-body-content' }, _react2.default.createElement('div', { className: 'content-wrapper' }, _react2.default.createElement('p', { className: 'tip-reason' }, '\u4E3A\u4E86\u4FDD\u969C\u60A8\u7684\u79C1\u5BC6\u6570\u636E\u5B89\u5168\uFF0C\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u6821\u9A8C'), _react2.default.createElement('p', { className: 'tip-operate' }, '\u70B9\u51FB\u53D1\u9001\u77ED\u4FE1\u6309\u94AE\uFF0C\u5C06\u4F1A\u53D1\u9001\u4E00\u6761\u6709\u9A8C\u8BC1\u7801\u7684\u77ED\u4FE1\u81F3\u624B\u673A'), _react2.default.createElement('p', { className: 'phone-number' }, this.props.userData.phone))))), _react2.default.createElement(_modal2.default, {
	            width: this.state.modalConfig.width,
	            wrapClassName: this.state.modalConfig.classn + ' checkway-choose',
	            visible: this.state.modalVisible.checkwayChoose,
	            onOk: function onOk() {
	                return _this.modalVisible('checkwayChoose', false);
	            },
	            onCancel: function onCancel() {
	                return _this.modalVisible('checkwayChoose', false);
	            },
	            okText: '\u53D1\u9001\u77ED\u4FE1',
	            footer: null
	        }, _react2.default.createElement(_modal4.default, null), _react2.default.createElement('div', { className: 'tip-content clearfix' }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement('div', { className: 'tip-content-contact', onClick: this.checkwayChoose.bind(this, 'contact') }, _react2.default.createElement('span', { className: this.state.modalFlag.contactCheckLimit ? 'pic disable' : 'pic' }), _react2.default.createElement('span', { className: 'word' }, '\u8FA8\u522B\u8054\u7CFB\u4EBA\u9A8C\u8BC1'))), _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement('div', { className: 'tip-content-phone', onClick: this.checkwayChoose.bind(this, 'phone') }, _react2.default.createElement('span', { className: 'pic', id: 'phoneWay' }), _react2.default.createElement('span', { className: 'word' }, '\u624B\u673A\u77ED\u4FE1\u9A8C\u8BC1'))))), _react2.default.createElement(_modal2.default, {
	            width: this.state.modalConfig.width,
	            wrapClassName: this.state.modalConfig.classn + ' choose-person',
	            visible: this.state.modalVisible.choosePerson,
	            onOk: function onOk() {
	                return _this.modalVisible('choosePerson', false);
	            },
	            onCancel: function onCancel() {
	                return _this.cancelChoosePerson();
	            },
	            okText: '\u786E\u5B9A',
	            afterClose: function afterClose() {
	                return _this.clearContactList();
	            }
	        }, _react2.default.createElement(_modal4.default, null), _react2.default.createElement(_contactCheckList2.default, { resetContactList: this.resetContactList, contactCheckclear: this.state.modalFlag.contactCheckclear, getContactMaterial: this.getContactMaterial, contactCheckList: this.state.modalFlag.contactCheckList })), _react2.default.createElement(_modal2.default, {
	            width: this.state.modalConfig.width,
	            wrapClassName: this.state.modalConfig.classn + ' bind-phone',
	            visible: this.state.modalVisible.bindPhone,
	            onOk: function onOk() {
	                return _this.modalVisible('bindPhone', false);
	            },
	            onCancel: function onCancel() {
	                return _this.modalVisible('bindPhone', false);
	            },
	            okText: '\u524D\u5F80\u7ED1\u5B9A\u624B\u673A'
	        }, _react2.default.createElement(_modal4.default, null), _react2.default.createElement('div', { className: 'tip-body' }, _react2.default.createElement('div', { className: 'tip-body-content' }, _react2.default.createElement('div', { className: 'content-wrapper' }, _react2.default.createElement('p', { className: 'tip-reason' }, '\u4E3A\u4E86\u4FDD\u969C\u60A8\u7684\u79C1\u5BC6\u6570\u636E\u5B89\u5168\uFF0C\u9700\u8981\u8FDB\u884C\u8EAB\u4EFD\u6821\u9A8C'), _react2.default.createElement('p', { className: 'phone-number' }, '\u4F60\u8FD8\u6CA1\u6709\u7ED1\u5B9A\u624B\u673A\uFF0C\u8BF7\u5148\u7ED1\u5B9A\u624B\u673A'))))), _react2.default.createElement(_modal2.default, {
	            width: this.state.modalConfig.width,
	            wrapClassName: this.state.modalConfig.classn + ' enter-codes',
	            visible: this.state.modalVisible.enterCodes,
	            onOk: function onOk() {
	                return _this.checkMessCodes();
	            },
	            onCancel: function onCancel() {
	                return _this.modalVisible('enterCodes', false);
	            },
	            okText: '\u786E\u5B9A'
	        }, _react2.default.createElement(_modal4.default, null), _react2.default.createElement('div', { className: 'tip-body' }, _react2.default.createElement('div', { className: 'tip-body-content' }, _react2.default.createElement('div', { className: 'content-wrapper' }, _react2.default.createElement('p', { className: 'tip-operate' }, '\u60A8\u63A5\u6536\u9A8C\u8BC1\u7801\u7684\u624B\u673A\u662F\uFF1A', _react2.default.createElement('span', { className: 'phone-number' }, this.props.userData.phone)), _react2.default.createElement('p', null, _react2.default.createElement(_sendCount2.default, { sendMessHandle: this.sendMessHandle, messCodeError: this.state.modalFlag.messCodeError }), _react2.default.createElement(_inputNumber2.default, { ref: 'messCodes' })), _react2.default.createElement('p', { className: 'code-expired', style: messCodeTip }, _react2.default.createElement('i', null), _react2.default.createElement('span', null, this.state.modalFlag.messCodes)))))), _react2.default.createElement(_modal2.default, {
	            width: this.state.modalConfig.width,
	            wrapClassName: this.state.modalConfig.classn + ' contact-checkInfo',
	            visible: this.state.modalVisible.contactCheckInfo,
	            onOk: function onOk() {
	                return _this.modalVisible('contactCheckInfo', false);
	            },
	            onCancel: function onCancel() {
	                return _this.modalVisible('contactCheckInfo', false);
	            },
	            okText: '\u786E\u5B9A'
	        }, _react2.default.createElement(_modal4.default, null), _react2.default.createElement('div', { className: 'tip-body' }, _react2.default.createElement('div', { className: 'tip-body-content' }, _react2.default.createElement('div', { className: 'content-wrapper' }, _react2.default.createElement('p', { className: 'bindPhoneTip', id: 'contactCheckContent' }, this.state.modalFlag.phoneTip))))));
	    }
	});
	module.exports = entryCom;

/***/ },

/***/ 341:
[495, 342],

/***/ 342:
185,

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Modal = __webpack_require__(345);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _confirm = __webpack_require__(351);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _objectAssign = __webpack_require__(211);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_Modal2["default"].info = function (props) {
	    var config = (0, _objectAssign2["default"])({}, {
	        type: 'info',
	        iconType: 'info-circle',
	        okCancel: false
	    }, props);
	    return (0, _confirm2["default"])(config);
	};
	_Modal2["default"].success = function (props) {
	    var config = (0, _objectAssign2["default"])({}, {
	        type: 'success',
	        iconType: 'check-circle',
	        okCancel: false
	    }, props);
	    return (0, _confirm2["default"])(config);
	};
	_Modal2["default"].error = function (props) {
	    var config = (0, _objectAssign2["default"])({}, {
	        type: 'error',
	        iconType: 'cross-circle',
	        okCancel: false
	    }, props);
	    return (0, _confirm2["default"])(config);
	};
	_Modal2["default"].warning = _Modal2["default"].warn = function (props) {
	    var config = (0, _objectAssign2["default"])({}, {
	        type: 'warning',
	        iconType: 'exclamation-circle',
	        okCancel: false
	    }, props);
	    return (0, _confirm2["default"])(config);
	};
	_Modal2["default"].confirm = function (props) {
	    var config = (0, _objectAssign2["default"])({}, {
	        type: 'confirm',
	        okCancel: true
	    }, props);
	    return (0, _confirm2["default"])(config);
	};
	exports["default"] = _Modal2["default"];
	module.exports = exports['default'];

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(184);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(171);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(173);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(174);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcDialog = __webpack_require__(346);

	var _rcDialog2 = _interopRequireDefault(_rcDialog);

	var _addEventListener = __webpack_require__(207);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _button = __webpack_require__(242);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var mousePosition = void 0;
	var mousePositionEventBinded = void 0;

	var Modal = function (_React$Component) {
	    (0, _inherits3["default"])(Modal, _React$Component);

	    function Modal() {
	        (0, _classCallCheck3["default"])(this, Modal);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

	        _this.handleCancel = function (e) {
	            var onCancel = _this.props.onCancel;
	            if (onCancel) {
	                onCancel(e);
	            }
	        };
	        _this.handleOk = function (e) {
	            var onOk = _this.props.onOk;
	            if (onOk) {
	                onOk(e);
	            }
	        };
	        return _this;
	    }

	    Modal.prototype.componentDidMount = function componentDidMount() {
	        if (mousePositionEventBinded) {
	            return;
	        }
	        // 只有点击事件支持从鼠标位置动画展开
	        (0, _addEventListener2["default"])(document.documentElement, 'click', function (e) {
	            mousePosition = {
	                x: e.pageX,
	                y: e.pageY
	            };
	            // 100ms 内发生过点击事件，则从点击位置动画展示
	            // 否则直接 zoom 展示
	            // 这样可以兼容非点击方式展开
	            setTimeout(function () {
	                return mousePosition = null;
	            }, 100);
	        });
	        mousePositionEventBinded = true;
	    };

	    Modal.prototype.render = function render() {
	        var _props = this.props,
	            okText = _props.okText,
	            cancelText = _props.cancelText,
	            confirmLoading = _props.confirmLoading,
	            footer = _props.footer,
	            visible = _props.visible;

	        if (this.context.antLocale && this.context.antLocale.Modal) {
	            okText = okText || this.context.antLocale.Modal.okText;
	            cancelText = cancelText || this.context.antLocale.Modal.cancelText;
	        }
	        var defaultFooter = [_react2["default"].createElement(
	            _button2["default"],
	            { key: 'cancel', size: 'large', onClick: this.handleCancel },
	            cancelText || '取消'
	        ), _react2["default"].createElement(
	            _button2["default"],
	            { key: 'confirm', type: 'primary', size: 'large', loading: confirmLoading, onClick: this.handleOk },
	            okText || '确定'
	        )];
	        return _react2["default"].createElement(_rcDialog2["default"], (0, _extends3["default"])({ onClose: this.handleCancel, footer: footer === undefined ? defaultFooter : footer }, this.props, { visible: visible, mousePosition: mousePosition }));
	    };

	    return Modal;
	}(_react2["default"].Component);

	exports["default"] = Modal;

	Modal.defaultProps = {
	    prefixCls: 'ant-modal',
	    width: 520,
	    transitionName: 'zoom',
	    maskTransitionName: 'fade',
	    confirmLoading: false,
	    visible: false
	};
	Modal.propTypes = {
	    prefixCls: _react.PropTypes.string,
	    onOk: _react.PropTypes.func,
	    onCancel: _react.PropTypes.func,
	    okText: _react.PropTypes.node,
	    cancelText: _react.PropTypes.node,
	    width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    confirmLoading: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    align: _react.PropTypes.object,
	    footer: _react.PropTypes.node,
	    title: _react.PropTypes.node,
	    closable: _react.PropTypes.bool
	};
	Modal.contextTypes = {
	    antLocale: _react2["default"].PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(347);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _getContainerRenderMixin = __webpack_require__(238);

	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};

	var DialogWrap = _react2["default"].createClass({
	    displayName: 'DialogWrap',

	    mixins: [(0, _getContainerRenderMixin2["default"])({
	        isVisible: function isVisible(instance) {
	            return instance.props.visible;
	        },

	        autoDestroy: false,
	        getComponent: function getComponent(instance, extra) {
	            return _react2["default"].createElement(_Dialog2["default"], __assign({}, instance.props, extra, { key: "dialog" }));
	        },
	        getContainer: function getContainer(instance) {
	            if (instance.props.getContainer) {
	                return instance.props.getContainer();
	            }
	            var container = document.createElement('div');
	            document.body.appendChild(container);
	            return container;
	        }
	    })],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            visible: false
	        };
	    },
	    shouldComponentUpdate: function shouldComponentUpdate(_ref) {
	        var visible = _ref.visible;

	        return !!(this.props.visible || visible);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.props.visible) {
	            this.renderComponent({
	                afterClose: this.removeContainer,
	                onClose: function onClose() {},

	                visible: false
	            });
	        } else {
	            this.removeContainer();
	        }
	    },
	    getElement: function getElement(part) {
	        return this._component.getElement(part);
	    },
	    render: function render() {
	        return null;
	    }
	});
	exports["default"] = DialogWrap;
	module.exports = exports['default'];

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _KeyCode = __webpack_require__(348);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _rcAnimate = __webpack_require__(225);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _LazyRenderBox = __webpack_require__(349);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	var _getScrollBarSize = __webpack_require__(350);

	var _getScrollBarSize2 = _interopRequireDefault(_getScrollBarSize);

	var _objectAssign = __webpack_require__(211);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};

	var uuid = 0;
	var openCount = 0;
	/* eslint react/no-is-mounted:0 */
	function noop() {}
	function getScroll(w, top) {
	    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	    var method = 'scroll' + (top ? 'Top' : 'Left');
	    if (typeof ret !== 'number') {
	        var d = w.document;
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	            ret = d.body[method];
	        }
	    }
	    return ret;
	}
	function setTransformOrigin(node, value) {
	    var style = node.style;
	    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	        style[prefix + 'TransformOrigin'] = value;
	    });
	    style['transformOrigin'] = value;
	}
	function offset(el) {
	    var rect = el.getBoundingClientRect();
	    var pos = {
	        left: rect.left,
	        top: rect.top
	    };
	    var doc = el.ownerDocument;
	    var w = doc.defaultView || doc.parentWindow;
	    pos.left += getScroll(w);
	    pos.top += getScroll(w, true);
	    return pos;
	}
	var Dialog = _react2["default"].createClass({
	    displayName: 'Dialog',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            afterClose: noop,
	            className: '',
	            mask: true,
	            visible: false,
	            keyboard: true,
	            closable: true,
	            maskClosable: true,
	            prefixCls: 'rc-dialog',
	            onClose: noop
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        this.inTransition = false;
	        this.titleId = 'rcDialogTitle' + uuid++;
	    },
	    componentDidMount: function componentDidMount() {
	        this.componentDidUpdate({});
	    },
	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        var props = this.props;
	        var mousePosition = this.props.mousePosition;
	        if (props.visible) {
	            // first show
	            if (!prevProps.visible) {
	                this.openTime = Date.now();
	                this.lastOutSideFocusNode = document.activeElement;
	                this.addScrollingEffect();
	                this.refs.wrap.focus();
	                var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
	                if (mousePosition) {
	                    var elOffset = offset(dialogNode);
	                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
	                } else {
	                    setTransformOrigin(dialogNode, '');
	                }
	            }
	        } else if (prevProps.visible) {
	            this.inTransition = true;
	            if (props.mask && this.lastOutSideFocusNode) {
	                try {
	                    this.lastOutSideFocusNode.focus();
	                } catch (e) {
	                    this.lastOutSideFocusNode = null;
	                }
	                this.lastOutSideFocusNode = null;
	            }
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.props.visible || this.inTransition) {
	            this.removeScrollingEffect();
	        }
	    },
	    onAnimateLeave: function onAnimateLeave() {
	        // need demo?
	        // https://github.com/react-component/dialog/pull/28
	        if (this.refs.wrap) {
	            this.refs.wrap.style.display = 'none';
	        }
	        this.inTransition = false;
	        this.removeScrollingEffect();
	        this.props.afterClose();
	    },
	    onMaskClick: function onMaskClick(e) {
	        // android trigger click on open (fastclick??)
	        if (Date.now() - this.openTime < 300) {
	            return;
	        }
	        if (e.target === e.currentTarget) {
	            this.close(e);
	        }
	    },
	    onKeyDown: function onKeyDown(e) {
	        var props = this.props;
	        if (props.keyboard && e.keyCode === _KeyCode2["default"].ESC) {
	            this.close(e);
	        }
	        // keep focus inside dialog
	        if (props.visible) {
	            if (e.keyCode === _KeyCode2["default"].TAB) {
	                var activeElement = document.activeElement;
	                var dialogRoot = this.refs.wrap;
	                var sentinel = this.refs.sentinel;
	                if (e.shiftKey) {
	                    if (activeElement === dialogRoot) {
	                        sentinel.focus();
	                    }
	                } else if (activeElement === this.refs.sentinel) {
	                    dialogRoot.focus();
	                }
	            }
	        }
	    },
	    getDialogElement: function getDialogElement() {
	        var props = this.props;
	        var closable = props.closable;
	        var prefixCls = props.prefixCls;
	        var dest = {};
	        if (props.width !== undefined) {
	            dest.width = props.width;
	        }
	        if (props.height !== undefined) {
	            dest.height = props.height;
	        }
	        var footer = void 0;
	        if (props.footer) {
	            footer = _react2["default"].createElement("div", { className: prefixCls + '-footer', ref: "footer" }, props.footer);
	        }
	        var header = void 0;
	        if (props.title) {
	            header = _react2["default"].createElement("div", { className: prefixCls + '-header', ref: "header" }, _react2["default"].createElement("div", { className: prefixCls + '-title', id: this.titleId }, props.title));
	        }
	        var closer = void 0;
	        if (closable) {
	            closer = _react2["default"].createElement("button", { onClick: this.close, "aria-label": "Close", className: prefixCls + '-close' }, _react2["default"].createElement("span", { className: prefixCls + '-close-x' }));
	        }
	        var style = (0, _objectAssign2["default"])({}, props.style, dest);
	        var transitionName = this.getTransitionName();
	        var dialogElement = _react2["default"].createElement(_LazyRenderBox2["default"], { key: "dialog-element", role: "document", ref: "dialog", style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, _react2["default"].createElement("div", { className: prefixCls + '-content' }, closer, header, _react2["default"].createElement("div", __assign({ className: prefixCls + '-body', style: props.bodyStyle, ref: "body" }, props.bodyProps), props.children), footer), _react2["default"].createElement("div", { tabIndex: 0, ref: "sentinel", style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
	        return _react2["default"].createElement(_rcAnimate2["default"], { key: "dialog", showProp: "visible", onLeave: this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
	    },
	    getZIndexStyle: function getZIndexStyle() {
	        var style = {};
	        var props = this.props;
	        if (props.zIndex !== undefined) {
	            style.zIndex = props.zIndex;
	        }
	        return style;
	    },
	    getWrapStyle: function getWrapStyle() {
	        return (0, _objectAssign2["default"])({}, this.getZIndexStyle(), this.props.wrapStyle);
	    },
	    getMaskStyle: function getMaskStyle() {
	        return (0, _objectAssign2["default"])({}, this.getZIndexStyle(), this.props.maskStyle);
	    },
	    getMaskElement: function getMaskElement() {
	        var props = this.props;
	        var maskElement = void 0;
	        if (props.mask) {
	            var maskTransition = this.getMaskTransitionName();
	            maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], __assign({ style: this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
	            if (maskTransition) {
	                maskElement = _react2["default"].createElement(_rcAnimate2["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
	            }
	        }
	        return maskElement;
	    },
	    getMaskTransitionName: function getMaskTransitionName() {
	        var props = this.props;
	        var transitionName = props.maskTransitionName;
	        var animation = props.maskAnimation;
	        if (!transitionName && animation) {
	            transitionName = props.prefixCls + '-' + animation;
	        }
	        return transitionName;
	    },
	    getTransitionName: function getTransitionName() {
	        var props = this.props;
	        var transitionName = props.transitionName;
	        var animation = props.animation;
	        if (!transitionName && animation) {
	            transitionName = props.prefixCls + '-' + animation;
	        }
	        return transitionName;
	    },
	    getElement: function getElement(part) {
	        return this.refs[part];
	    },
	    setScrollbar: function setScrollbar() {
	        if (this.bodyIsOverflowing && this.scrollbarWidth !== undefined) {
	            document.body.style.paddingRight = this.scrollbarWidth + 'px';
	        }
	    },
	    addScrollingEffect: function addScrollingEffect() {
	        openCount++;
	        if (openCount !== 1) {
	            return;
	        }
	        this.checkScrollbar();
	        this.setScrollbar();
	        document.body.style.overflow = 'hidden';
	        // this.adjustDialog();
	    },
	    removeScrollingEffect: function removeScrollingEffect() {
	        openCount--;
	        if (openCount !== 0) {
	            return;
	        }
	        document.body.style.overflow = '';
	        this.resetScrollbar();
	        // this.resetAdjustments();
	    },
	    close: function close(e) {
	        this.props.onClose(e);
	    },
	    checkScrollbar: function checkScrollbar() {
	        var fullWindowWidth = window.innerWidth;
	        if (!fullWindowWidth) {
	            var documentElementRect = document.documentElement.getBoundingClientRect();
	            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	        }
	        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	        if (this.bodyIsOverflowing) {
	            this.scrollbarWidth = (0, _getScrollBarSize2["default"])();
	        }
	    },
	    resetScrollbar: function resetScrollbar() {
	        document.body.style.paddingRight = '';
	    },
	    adjustDialog: function adjustDialog() {
	        if (this.refs.wrap && this.scrollbarWidth !== undefined) {
	            var modalIsOverflowing = this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
	            this.refs.wrap.style.paddingLeft = (!this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	            this.refs.wrap.style.paddingRight = (this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
	        }
	    },
	    resetAdjustments: function resetAdjustments() {
	        if (this.refs.wrap) {
	            this.refs.wrap.style.paddingLeft = this.refs.wrap.style.paddingLeft = '';
	        }
	    },
	    render: function render() {
	        var props = this.props;
	        var prefixCls = props.prefixCls,
	            maskClosable = props.maskClosable;

	        var style = this.getWrapStyle();
	        // clear hide display
	        // and only set display after async anim, not here for hide
	        if (props.visible) {
	            style.display = null;
	        }
	        return _react2["default"].createElement("div", null, this.getMaskElement(), _react2["default"].createElement("div", __assign({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: "wrap", onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
	    }
	});
	exports["default"] = Dialog;
	module.exports = exports['default'];

/***/ },

/***/ 348:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	exports["default"] = KeyCode;
	module.exports = exports['default'];

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(211);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};

	var LazyRenderBox = _react2["default"].createClass({
	    displayName: 'LazyRenderBox',
	    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	        return !!nextProps.hiddenClassName || !!nextProps.visible;
	    },
	    render: function render() {
	        var className = this.props.className;
	        if (!!this.props.hiddenClassName && !this.props.visible) {
	            className += ' ' + this.props.hiddenClassName;
	        }
	        var props = (0, _objectAssign2["default"])({}, this.props);
	        delete props.hiddenClassName;
	        delete props.visible;
	        props.className = className;
	        return _react2["default"].createElement("div", __assign({}, props));
	    }
	});
	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },

/***/ 350:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getScrollBarSize;
	var cached = void 0;

	function getScrollBarSize(fresh) {
	  if (fresh || cached === undefined) {
	    var inner = document.createElement('div');
	    inner.style.width = '100%';
	    inner.style.height = '200px';

	    var outer = document.createElement('div');
	    var outerStyle = outer.style;

	    outerStyle.position = 'absolute';
	    outerStyle.top = 0;
	    outerStyle.left = 0;
	    outerStyle.pointerEvents = 'none';
	    outerStyle.visibility = 'hidden';
	    outerStyle.width = '200px';
	    outerStyle.height = '150px';
	    outerStyle.overflow = 'hidden';

	    outer.appendChild(inner);

	    document.body.appendChild(outer);

	    var widthContained = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var widthScroll = inner.offsetWidth;

	    if (widthContained === widthScroll) {
	      widthScroll = outer.clientWidth;
	    }

	    document.body.removeChild(outer);

	    cached = widthContained - widthScroll;
	  }
	  return cached;
	}
	module.exports = exports['default'];

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	exports["default"] = confirm;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(240);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(211);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _icon = __webpack_require__(244);

	var _icon2 = _interopRequireDefault(_icon);

	var _Modal = __webpack_require__(345);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ActionButton = __webpack_require__(352);

	var _ActionButton2 = _interopRequireDefault(_ActionButton);

	var _locale = __webpack_require__(353);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function confirm(config) {
	    var props = (0, _objectAssign2["default"])({ iconType: 'question-circle' }, config);
	    var prefixCls = props.prefixCls || 'ant-confirm';
	    var div = document.createElement('div');
	    document.body.appendChild(div);
	    var width = props.width || 416;
	    var style = props.style || {};
	    // 默认为 false，保持旧版默认行为
	    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
	    // 默认为 true，保持向下兼容
	    if (!('okCancel' in props)) {
	        props.okCancel = true;
	    }
	    var runtimeLocale = (0, _locale.getConfirmLocale)();
	    props.okText = props.okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
	    props.cancelText = props.cancelText || runtimeLocale.cancelText;
	    function close() {
	        var unmountResult = _reactDom2["default"].unmountComponentAtNode(div);
	        if (unmountResult && div.parentNode) {
	            div.parentNode.removeChild(div);
	        }

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var triggerCancel = args && args.length && args.some(function (param) {
	            return param && param.triggerCancel;
	        });
	        if (props.onCancel && triggerCancel) {
	            props.onCancel.apply(props, args);
	        }
	    }
	    var body = _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-body' },
	        _react2["default"].createElement(_icon2["default"], { type: props.iconType }),
	        _react2["default"].createElement(
	            'span',
	            { className: prefixCls + '-title' },
	            props.title
	        ),
	        _react2["default"].createElement(
	            'div',
	            { className: prefixCls + '-content' },
	            props.content
	        )
	    );
	    var footer = null;
	    if (props.okCancel) {
	        footer = _react2["default"].createElement(
	            'div',
	            { className: prefixCls + '-btns' },
	            _react2["default"].createElement(
	                _ActionButton2["default"],
	                { actionFn: props.onCancel, closeModal: close },
	                props.cancelText
	            ),
	            _react2["default"].createElement(
	                _ActionButton2["default"],
	                { type: 'primary', actionFn: props.onOk, closeModal: close, autoFocus: true },
	                props.okText
	            )
	        );
	    } else {
	        footer = _react2["default"].createElement(
	            'div',
	            { className: prefixCls + '-btns' },
	            _react2["default"].createElement(
	                _ActionButton2["default"],
	                { type: 'primary', actionFn: props.onOk, closeModal: close, autoFocus: true },
	                props.okText
	            )
	        );
	    }
	    var classString = (0, _classnames2["default"])(prefixCls, (0, _defineProperty3["default"])({}, prefixCls + '-' + props.type, true), props.className);
	    _reactDom2["default"].render(_react2["default"].createElement(
	        _Modal2["default"],
	        { className: classString, onCancel: close.bind(this, { triggerCancel: true }), visible: true, title: '', transitionName: 'zoom', footer: '', maskTransitionName: 'fade', maskClosable: maskClosable, style: style, width: width },
	        _react2["default"].createElement(
	            'div',
	            { className: prefixCls + '-body-wrapper' },
	            body,
	            ' ',
	            footer
	        )
	    ), div);
	    return {
	        destroy: close
	    };
	}
	module.exports = exports['default'];

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _classCallCheck2 = __webpack_require__(171);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(173);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(174);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _button = __webpack_require__(242);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var ActionButton = function (_React$Component) {
	    (0, _inherits3["default"])(ActionButton, _React$Component);

	    function ActionButton(props) {
	        (0, _classCallCheck3["default"])(this, ActionButton);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	        _this.onClick = function () {
	            var _this$props = _this.props,
	                actionFn = _this$props.actionFn,
	                closeModal = _this$props.closeModal;

	            if (actionFn) {
	                var ret = void 0;
	                if (actionFn.length) {
	                    ret = actionFn(closeModal);
	                } else {
	                    ret = actionFn();
	                    if (!ret) {
	                        closeModal();
	                    }
	                }
	                if (ret && ret.then) {
	                    _this.setState({ loading: true });
	                    ret.then(function () {
	                        // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
	                        // this.setState({ loading: false });
	                        closeModal.apply(undefined, arguments);
	                    });
	                }
	            } else {
	                closeModal();
	            }
	        };
	        _this.state = {
	            loading: false
	        };
	        return _this;
	    }

	    ActionButton.prototype.componentDidMount = function componentDidMount() {
	        if (this.props.autoFocus) {
	            var $this = _reactDom2["default"].findDOMNode(this);
	            this.timeoutId = setTimeout(function () {
	                return $this.focus();
	            });
	        }
	    };

	    ActionButton.prototype.componentWillUnmount = function componentWillUnmount() {
	        clearTimeout(this.timeoutId);
	    };

	    ActionButton.prototype.render = function render() {
	        var _props = this.props,
	            type = _props.type,
	            children = _props.children;

	        var loading = this.state.loading;
	        return _react2["default"].createElement(
	            _button2["default"],
	            { type: type, size: 'large', onClick: this.onClick, loading: loading },
	            children
	        );
	    };

	    return ActionButton;
	}(_react2["default"].Component);

	exports["default"] = ActionButton;
	module.exports = exports['default'];

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.changeConfirmLocale = changeConfirmLocale;
	exports.getConfirmLocale = getConfirmLocale;

	var _objectAssign = __webpack_require__(211);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var defaultLocale = {
	    okText: '确定',
	    cancelText: '取消',
	    justOkText: '知道了'
	};
	var runtimeLocale = (0, _objectAssign2["default"])({}, defaultLocale);
	function changeConfirmLocale(newLocale) {
	    if (newLocale) {
	        runtimeLocale = (0, _objectAssign2["default"])({}, runtimeLocale, newLocale);
	    } else {
	        runtimeLocale = (0, _objectAssign2["default"])({}, defaultLocale);
	    }
	}
	function getConfirmLocale() {
	    return runtimeLocale;
	}

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var entryCom = _react2.default.createClass({
	    displayName: 'entryCom',

	    componentDidMount: function componentDidMount() {},
	    unlockJump: function unlockJump() {
	        var userId = this.props.userData.data.userId;
	        var type = this.props.data.name;
	        switch (type) {
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
	    enterEntry: function enterEntry() {
	        var props = this.props;
	        var visible = props.modalVisible;
	        var status = props.userData.status;
	        var photo_lock = props.userData.photo_lock;
	        var contact_check = props.userData.contact_check;
	        var name = props.data.name;
	        switch (status) {
	            case '0':
	                //未验证
	                if (name == 'photo') {
	                    if (photo_lock) {
	                        if (contact_check) {
	                            //用户验证打开
	                            visible('checkwayChoose', true);
	                        } else {
	                            visible('messCheck', true);
	                        }
	                    } else {
	                        this.unlockJump();
	                    }
	                }if (name == 'find') {
	                    this.unlockJump();
	                } else {
	                    if (contact_check) {
	                        //用户验证打开
	                        visible('checkwayChoose', true);
	                    } else {
	                        visible('messCheck', true);
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
	    render: function render() {
	        var props = this.props;
	        var index = props.index;
	        var tindex = index * 2;
	        var time = tindex > 9 ? tindex : '0' + tindex;
	        var lock = void 0,
	            darksrc = void 0,
	            classn = void 0,
	            darkcss = '';

	        //未解锁
	        if (!props.userData || props.userData.status !== '1') {
	            //图库根据开关判断加锁，查找手机不加锁
	            if (props.data.name == 'photo' && !props.userData.photo_lock || props.data.name == 'find') {
	                darksrc = 'images/menu_' + props.data.name + '.png';
	                darkcss = '';
	            } else {
	                lock = _react2.default.createElement('img', { src: 'images/lock.png', className: 'lock' });
	                if (browser.isie) {
	                    darksrc = 'images/menu_' + props.data.name + '_lock.png';
	                } else {
	                    darksrc = 'images/menu_' + props.data.name + '.png';
	                    darkcss = 'dark';
	                }
	            }
	        } else {
	            darksrc = 'images/menu_' + props.data.name + '.png';
	            darkcss = '';
	        }
	        classn = 'entry J-entry contact animated no time04 delay' + time + ' fade-in-right no-select';

	        return _react2.default.createElement('li', { className: classn, unselectable: 'on' }, _react2.default.createElement('a', { href: 'javascript:void(0);', 'data-type': props.data.name, onClick: this.enterEntry }, _react2.default.createElement('div', { className: 'icon' }, lock, _react2.default.createElement('img', { src: darksrc, className: darkcss })), _react2.default.createElement('p', null, props.data.intro)));
	    }
	});
	module.exports = entryCom;

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var modalAll = _react2.default.createClass({
	    displayName: "modalAll",

	    render: function render() {
	        return _react2.default.createElement("div", { className: "tip-title" }, _react2.default.createElement("div", { className: "tip-title-content" }, _react2.default.createElement("i", { className: "dialog-logo" }, _react2.default.createElement("svg", { className: "icon-logo" }, _react2.default.createElement("switch", null, _react2.default.createElement("use", { xlinkHref: "#iconFlymeLogo" })))), _react2.default.createElement("span", { className: "tip-word" }, "\u4E91\u670D\u52A1\u5B89\u5168\u6821\u9A8C")), _react2.default.createElement("a", { href: "javascript:void(0);", className: "dialog-cancel" }));
	    }
	});
	module.exports = modalAll;

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(197);

	var _button = __webpack_require__(242);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var entryCom = _react2.default.createClass({
	    displayName: 'entryCom',

	    time: 59,
	    timeCount: null,
	    getInitialState: function getInitialState() {
	        return {
	            currentTime: this.time,
	            start: false
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        //默认发送第一次
	        this.send();
	    },
	    send: function send() {
	        var self = this;
	        if (this.state.start) {
	            return false;
	        }
	        self.props.sendMessHandle();
	        self.setState({
	            currentTime: this.state.currentTime,
	            start: true
	        });
	        self.timeCount = setInterval(function () {
	            if (self.state.currentTime <= 0) {
	                clearInterval(self.timeCount);
	                self.setState({
	                    currentTime: self.time,
	                    start: false
	                });
	            } else {
	                self.setState({
	                    currentTime: self.state.currentTime - 1
	                });
	            }
	        }, 1000);
	    },
	    render: function render() {
	        var mess = '发送';
	        var classn = 'input-time';
	        if (this.state.start) {
	            mess = this.state.currentTime + 's';
	            classn += ' sended';
	        }
	        return _react2.default.createElement(_button2.default, { type: 'primary', id: 'inputTime', className: classn, onClick: this.send }, mess);
	    }
	});
	module.exports = entryCom;

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _toConsumableArray2 = __webpack_require__(358);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(297);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var entryCom = _react2.default.createClass({
	    displayName: 'entryCom',

	    getInitialState: function getInitialState() {
	        return {
	            chooseCheckList: []
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.contactCheckclear !== this.props.contactCheckclear && nextProps.contactCheckclear) {
	            this.setState({
	                chooseCheckList: []
	            });
	            nextProps.resetContactList();
	        }
	    },
	    chooseCheckList: function chooseCheckList(key) {
	        var item = this.refs['cl' + key];
	        var name = item.getAttribute('name');
	        var clist = this.state.chooseCheckList;

	        if (clist.indexOf(name) > -1) {
	            var newList = [].concat((0, _toConsumableArray3.default)(clist));
	            newList.remove(name);
	            this.setState({
	                chooseCheckList: newList
	            });
	        } else {
	            if (clist.length < 3) {
	                var _newList = [].concat((0, _toConsumableArray3.default)(clist));
	                _newList.push(item.getAttribute('name'));
	                this.setState({
	                    chooseCheckList: _newList
	                });
	            }
	        }
	    },
	    refresh: function refresh() {
	        this.props.getContactMaterial(true);
	        this.setState({
	            chooseCheckList: []
	        });
	    },
	    showCheck: function showCheck(key, hide) {
	        var item = this.refs['cl' + key].querySelectorAll('i')[0];
	        if (_utilDom2.default.hasClass(item, 'active')) {
	            return;
	        } else {
	            if (hide == 'hide') {
	                _utilDom2.default.removeClass(item, 'hover');
	            } else {
	                if (this.state.chooseCheckList.length < 3) {
	                    _utilDom2.default.addClass(item, 'hover');
	                }
	            }
	        }
	    },
	    render: function render() {
	        var self = this;

	        //联系人列表
	        var checklist = [];
	        if (this.props.contactCheckList.length > 0) {
	            this.props.contactCheckList.forEach(function (item, k) {
	                var checked = false;
	                var classn = 'no_select';
	                if (self.state.chooseCheckList.indexOf(item) > -1) {
	                    checked = true;
	                }
	                if (self.state.chooseCheckList.length == 3 && !checked) {
	                    classn += ' disable';
	                }
	                checklist.push(_react2.default.createElement('li', { className: classn, ref: 'cl' + k, key: k, name: item, onClick: self.chooseCheckList.bind(null, k), onMouseOver: self.showCheck.bind(null, k), onMouseOut: self.showCheck.bind(null, k, 'hide') }, _react2.default.createElement(_index4.default, { name: item }), _react2.default.createElement('span', { className: 'contact-check-name', 'data-title': item }, item), _react2.default.createElement('i', { className: checked ? 'active' : '' })));
	            });
	        }

	        return _react2.default.createElement('div', { className: 'tip-body' }, _react2.default.createElement('p', { className: 'check-title clearfix' }, '\u4ECE\u4E0B\u65B9\u8054\u7CFB\u4EBA\u4E2D\u627E\u51FA\u4F60\u901A\u8BAF\u5F55\u4E2D\u76843\u4E2A\u8054\u7CFB\u4EBA', _react2.default.createElement('span', { id: 'changePersonGroup', onClick: this.refresh }, '\u6362\u4E00\u6362')), _react2.default.createElement('ul', { className: 'contact-check-list clearfix' }, checklist));
	    }
	});
	module.exports = entryCom;

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(70);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(360);

	var _input = __webpack_require__(363);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var entryCom = _react2.default.createClass({
	    displayName: 'entryCom',

	    getInitialState: function getInitialState() {
	        return {
	            value: ''
	        };
	    },
	    onChange: function onChange(e) {
	        var value = e.target.value;

	        var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
	        if (!isNaN(value) && reg.test(value) || value === '' || value === '-') {
	            if (value.length <= 6) {
	                this.setState({ value: value });
	            } else {
	                this.setState({ value: value.substring(0, 6) });
	            }
	        }
	    },
	    render: function render() {
	        return _react2.default.createElement(_input2.default, { size: 'large', type: 'text', name: 'codes', ref: 'messCodes', onChange: this.onChange, value: this.state.value, className: 'input-codes', placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801' });
	    }
	});
	module.exports = entryCom;

/***/ },

/***/ 360:
[496, 361],

/***/ 361:
185,

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Input = __webpack_require__(364);

	var _Input2 = _interopRequireDefault(_Input);

	var _Group = __webpack_require__(366);

	var _Group2 = _interopRequireDefault(_Group);

	var _Search = __webpack_require__(367);

	var _Search2 = _interopRequireDefault(_Search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_Input2["default"].Group = _Group2["default"];
	_Input2["default"].Search = _Search2["default"];
	exports["default"] = _Input2["default"];
	module.exports = exports['default'];

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(184);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(171);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(173);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(174);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(240);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _calculateNodeHeight = __webpack_require__(365);

	var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

	var _objectAssign = __webpack_require__(211);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _omit = __webpack_require__(245);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function fixControlledValue(value) {
	    if (typeof value === 'undefined' || value === null) {
	        return '';
	    }
	    return value;
	}
	function onNextFrame(cb) {
	    if (window.requestAnimationFrame) {
	        return window.requestAnimationFrame(cb);
	    }
	    return window.setTimeout(cb, 1);
	}
	function clearNextFrameAction(nextFrameId) {
	    if (window.cancelAnimationFrame) {
	        window.cancelAnimationFrame(nextFrameId);
	    } else {
	        window.clearTimeout(nextFrameId);
	    }
	}
	;

	var Input = function (_Component) {
	    (0, _inherits3["default"])(Input, _Component);

	    function Input() {
	        (0, _classCallCheck3["default"])(this, Input);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));

	        _this.state = {
	            textareaStyles: null,
	            isFocus: false
	        };
	        _this.handleKeyDown = function (e) {
	            var _this$props = _this.props,
	                onPressEnter = _this$props.onPressEnter,
	                onKeyDown = _this$props.onKeyDown;

	            if (e.keyCode === 13 && onPressEnter) {
	                onPressEnter(e);
	            }
	            if (onKeyDown) {
	                onKeyDown(e);
	            }
	        };
	        _this.handleTextareaChange = function (e) {
	            if (!('value' in _this.props)) {
	                _this.resizeTextarea();
	            }
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(e);
	            }
	        };
	        _this.resizeTextarea = function () {
	            var _this$props2 = _this.props,
	                type = _this$props2.type,
	                autosize = _this$props2.autosize;

	            if (type !== 'textarea' || !autosize || !_this.refs.input) {
	                return;
	            }
	            var minRows = autosize ? autosize.minRows : null;
	            var maxRows = autosize ? autosize.maxRows : null;
	            var textareaStyles = (0, _calculateNodeHeight2["default"])(_this.refs.input, false, minRows, maxRows);
	            _this.setState({ textareaStyles: textareaStyles });
	        };
	        return _this;
	    }

	    Input.prototype.componentDidMount = function componentDidMount() {
	        this.resizeTextarea();
	    };

	    Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        // Re-render with the new content then recalculate the height as required.
	        if (this.props.value !== nextProps.value) {
	            if (this.nextFrameActionId) {
	                clearNextFrameAction(this.nextFrameActionId);
	            }
	            this.nextFrameActionId = onNextFrame(this.resizeTextarea);
	        }
	    };

	    Input.prototype.focus = function focus() {
	        this.refs.input.focus();
	    };

	    Input.prototype.renderLabeledInput = function renderLabeledInput(children) {
	        var _classNames;

	        var props = this.props;
	        // Not wrap when there is not addons
	        if (props.type === 'textarea' || !props.addonBefore && !props.addonAfter) {
	            return children;
	        }
	        var wrapperClassName = props.prefixCls + '-group';
	        var addonClassName = wrapperClassName + '-addon';
	        var addonBefore = props.addonBefore ? _react2["default"].createElement(
	            'span',
	            { className: addonClassName },
	            props.addonBefore
	        ) : null;
	        var addonAfter = props.addonAfter ? _react2["default"].createElement(
	            'span',
	            { className: addonClassName },
	            props.addonAfter
	        ) : null;
	        var className = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, props.prefixCls + '-wrapper', true), (0, _defineProperty3["default"])(_classNames, wrapperClassName, addonBefore || addonAfter), _classNames));
	        return _react2["default"].createElement(
	            'span',
	            { className: className },
	            addonBefore,
	            children,
	            addonAfter
	        );
	    };

	    Input.prototype.renderLabeledIcon = function renderLabeledIcon(children) {
	        var props = this.props;

	        if (props.type === 'textarea' || !('prefix' in props || 'suffix' in props)) {
	            return children;
	        }
	        var prefix = props.prefix ? _react2["default"].createElement(
	            'span',
	            { className: props.prefixCls + '-prefix' },
	            props.prefix
	        ) : null;
	        var suffix = props.suffix ? _react2["default"].createElement(
	            'span',
	            { className: props.prefixCls + '-suffix' },
	            props.suffix
	        ) : null;
	        return _react2["default"].createElement(
	            'span',
	            { className: props.prefixCls + '-affix-wrapper', style: props.style },
	            prefix,
	            (0, _react.cloneElement)(children, { style: null }),
	            suffix
	        );
	    };

	    Input.prototype.renderInput = function renderInput() {
	        var _classNames2;

	        var props = (0, _objectAssign2["default"])({}, this.props);
	        // Fix https://fb.me/react-unknown-prop
	        var otherProps = (0, _omit2["default"])(this.props, ['prefixCls', 'onPressEnter', 'autosize', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
	        var prefixCls = props.prefixCls;
	        if (!props.type) {
	            return props.children;
	        }
	        var inputClassName = (0, _classnames2["default"])(prefixCls, (_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-lg', props.size === 'large'), _classNames2), props.className);
	        if ('value' in props) {
	            otherProps.value = fixControlledValue(props.value);
	            // Input elements must be either controlled or uncontrolled,
	            // specify either the value prop, or the defaultValue prop, but not both.
	            delete otherProps.defaultValue;
	        }
	        switch (props.type) {
	            case 'textarea':
	                return _react2["default"].createElement('textarea', (0, _extends3["default"])({}, otherProps, { style: (0, _objectAssign2["default"])({}, props.style, this.state.textareaStyles), className: inputClassName, onKeyDown: this.handleKeyDown, onChange: this.handleTextareaChange, ref: 'input' }));
	            default:
	                return this.renderLabeledIcon(_react2["default"].createElement('input', (0, _extends3["default"])({}, otherProps, { className: inputClassName, onKeyDown: this.handleKeyDown, ref: 'input' })));
	        }
	    };

	    Input.prototype.render = function render() {
	        return this.renderLabeledInput(this.renderInput());
	    };

	    return Input;
	}(_react.Component);

	exports["default"] = Input;

	Input.defaultProps = {
	    disabled: false,
	    prefixCls: 'ant-input',
	    type: 'text',
	    autosize: false
	};
	Input.propTypes = {
	    type: _react.PropTypes.string,
	    id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    size: _react.PropTypes.oneOf(['small', 'default', 'large']),
	    disabled: _react.PropTypes.bool,
	    value: _react.PropTypes.any,
	    defaultValue: _react.PropTypes.any,
	    className: _react.PropTypes.string,
	    addonBefore: _react.PropTypes.node,
	    addonAfter: _react.PropTypes.node,
	    prefixCls: _react.PropTypes.string,
	    autosize: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	    onPressEnter: _react.PropTypes.func,
	    onKeyDown: _react.PropTypes.func,
	    onFocus: _react.PropTypes.func,
	    onBlur: _react.PropTypes.func,
	    prefix: _react.PropTypes.node,
	    suffix: _react.PropTypes.node
	};
	module.exports = exports['default'];

/***/ },

/***/ 365:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = calculateNodeHeight;
	// Thanks to https://github.com/andreypopp/react-textarea-autosize/
	/**
	 * calculateNodeHeight(uiTextNode, useCache = false)
	 */
	var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
	var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
	var computedStyleCache = {};
	var hiddenTextarea = void 0;
	function calculateNodeStyling(node) {
	    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
	    if (useCache && computedStyleCache[nodeRef]) {
	        return computedStyleCache[nodeRef];
	    }
	    var style = window.getComputedStyle(node);
	    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
	    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
	    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
	    var sizingStyle = SIZING_STYLE.map(function (name) {
	        return name + ':' + style.getPropertyValue(name);
	    }).join(';');
	    var nodeInfo = {
	        sizingStyle: sizingStyle,
	        paddingSize: paddingSize,
	        borderSize: borderSize,
	        boxSizing: boxSizing
	    };
	    if (useCache && nodeRef) {
	        computedStyleCache[nodeRef] = nodeInfo;
	    }
	    return nodeInfo;
	}
	function calculateNodeHeight(uiTextNode) {
	    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	    if (!hiddenTextarea) {
	        hiddenTextarea = document.createElement('textarea');
	        document.body.appendChild(hiddenTextarea);
	    }
	    // Copy all CSS properties that have an impact on the height of the content in
	    // the textbox

	    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
	        paddingSize = _calculateNodeStyling.paddingSize,
	        borderSize = _calculateNodeStyling.borderSize,
	        boxSizing = _calculateNodeStyling.boxSizing,
	        sizingStyle = _calculateNodeStyling.sizingStyle;
	    // Need to have the overflow attribute to hide the scrollbar otherwise
	    // text-lines will not calculated properly as the shadow will technically be
	    // narrower for content


	    hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
	    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
	    var minHeight = -Infinity;
	    var maxHeight = Infinity;
	    var height = hiddenTextarea.scrollHeight;
	    if (boxSizing === 'border-box') {
	        // border-box: add border, since height = content + padding + border
	        height = height + borderSize;
	    } else if (boxSizing === 'content-box') {
	        // remove padding, since height = content
	        height = height - paddingSize;
	    }
	    if (minRows !== null || maxRows !== null) {
	        // measure height of a textarea with a single row
	        hiddenTextarea.value = '';
	        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	        if (minRows !== null) {
	            minHeight = singleRowHeight * minRows;
	            if (boxSizing === 'border-box') {
	                minHeight = minHeight + paddingSize + borderSize;
	            }
	            height = Math.max(minHeight, height);
	        }
	        if (maxRows !== null) {
	            maxHeight = singleRowHeight * maxRows;
	            if (boxSizing === 'border-box') {
	                maxHeight = maxHeight + paddingSize + borderSize;
	            }
	            height = Math.min(maxHeight, height);
	        }
	    }
	    return { height: height, minHeight: minHeight, maxHeight: maxHeight };
	}
	module.exports = exports['default'];

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(240);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Group = function Group(props) {
	    var _classNames;

	    var _props$prefixCls = props.prefixCls,
	        prefixCls = _props$prefixCls === undefined ? 'ant-input-group' : _props$prefixCls,
	        _props$className = props.className,
	        className = _props$className === undefined ? '' : _props$className;

	    var cls = (0, _classnames2["default"])(prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-lg', props.size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-compact', props.compact), _classNames), className);
	    return _react2["default"].createElement(
	        'span',
	        { className: cls, style: props.style },
	        props.children
	    );
	};
	exports["default"] = Group;
	module.exports = exports['default'];

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(184);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(171);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(173);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(174);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(240);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Input = __webpack_require__(364);

	var _Input2 = _interopRequireDefault(_Input);

	var _icon = __webpack_require__(244);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};

	var Search = function (_React$Component) {
	    (0, _inherits3["default"])(Search, _React$Component);

	    function Search() {
	        (0, _classCallCheck3["default"])(this, Search);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

	        _this.onSearch = function () {
	            var onSearch = _this.props.onSearch;

	            if (onSearch) {
	                onSearch(_this.input.refs.input.value);
	            }
	            _this.input.refs.input.focus();
	        };
	        return _this;
	    }

	    Search.prototype.render = function render() {
	        var _this2 = this;

	        var _a = this.props,
	            className = _a.className,
	            prefixCls = _a.prefixCls,
	            others = __rest(_a, ["className", "prefixCls"]);
	        delete others.onSearch;
	        var searchSuffix = _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-icon', onClick: this.onSearch, type: 'search' });
	        return _react2["default"].createElement(_Input2["default"], (0, _extends3["default"])({ className: (0, _classnames2["default"])(prefixCls, className), onPressEnter: this.onSearch, ref: function ref(node) {
	                return _this2.input = node;
	            }, suffix: searchSuffix }, others));
	    };

	    return Search;
	}(_react2["default"].Component);

	exports["default"] = Search;

	Search.defaultProps = {
	    prefixCls: 'ant-input-search',
	    onSearch: function onSearch() {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 368:
185,

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(341);

	var _modal = __webpack_require__(344);

	var _modal2 = _interopRequireDefault(_modal);

	var _style6 = __webpack_require__(360);

	var _input = __webpack_require__(363);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(190);

	var _dropdown = __webpack_require__(200);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style8 = __webpack_require__(247);

	var _menu = __webpack_require__(250);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _device = __webpack_require__(370);

	var _device2 = _interopRequireDefault(_device);

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	__webpack_require__(371);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var deviceList = _react2.default.createClass({
	    displayName: 'deviceList',

	    getInitialState: function getInitialState() {
	        return {
	            deviceList: [],
	            deviceListVisible: false,
	            deviceLogoutVisible: false,
	            deviceLogoutInfo: {
	                sn: '',
	                imei: '',
	                status: ''
	            },
	            deviceLogoutPassword: '',
	            deviceLogoutTip: '',
	            sendLogoutSmsVisible: false
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.getDeviceInfo();
	    },
	    getDeviceInfo: function getDeviceInfo() {
	        var self = this;
	        _utilDom2.default.ajax({
	            url: _interface2.default.apiUrl.getUserDeviceList,
	            success: function success(result) {
	                self.setState({
	                    deviceList: result
	                });
	            }
	        }, _reqwest2.default, _index2.default);
	    },
	    handleMenuClick: function handleMenuClick(e) {
	        console.log(e);
	    },
	    passwordChange: function passwordChange(e) {
	        var value = e.currentTarget.value;
	        if (value === '') {
	            this.setState({
	                deviceLogoutTip: '密码不能为空',
	                deviceLogoutPassword: e.currentTarget.value
	            });
	        } else {
	            this.setState({
	                deviceLogoutTip: '',
	                deviceLogoutPassword: e.currentTarget.value
	            });
	        }
	    },
	    handleVisibleChange: function handleVisibleChange(flag) {
	        this.setState({ deviceListVisible: flag });
	    },
	    setDeviceLogoutVisible: function setDeviceLogoutVisible(flag, info) {
	        this.setState({
	            deviceLogoutVisible: flag,
	            deviceLogoutInfo: info,
	            deviceLogoutPassword: '',
	            deviceLogoutTip: ''
	        });
	    },
	    setSendLogoutSmsVisible: function setSendLogoutSmsVisible(flag) {
	        this.setState({
	            deviceLogoutVisible: false,
	            sendLogoutSmsVisible: flag
	        });
	    },
	    sendLogoutSms: function sendLogoutSms() {
	        var self = this;
	        var password = this.state.deviceLogoutPassword;
	        if (password !== '') {
	            var sn = this.state.deviceLogoutInfo.sn;
	            var imei = this.state.deviceLogoutInfo.imei;
	            if (imei === '') {
	                this.setState({
	                    deviceLogoutTip: '非法请求'
	                });
	            } else {
	                _utilDom2.default.ajax({
	                    url: _interface2.default.apiUrl.remotelogout,
	                    data: {
	                        sn: sn,
	                        device: imei,
	                        password: password
	                    },
	                    success: function success(result) {
	                        self.setSendLogoutSmsVisible(true);
	                    }
	                }, _reqwest2.default, _index2.default);
	            }
	        } else {
	            this.setState({
	                deviceLogoutTip: '密码不能为空'
	            });
	        }
	    },
	    render: function render() {
	        var _this = this;

	        var devicelist = this.state.deviceList;
	        var self = this;
	        var menu = _react2.default.createElement(_menu2.default, { onClick: this.handleMenuClick });
	        var tip = '连接中，请稍候...';
	        if (devicelist && devicelist.length > 0) {
	            var list = [];
	            devicelist.forEach(function (item, k) {
	                list.push(_react2.default.createElement(_menu2.default.Item, { key: k }, _react2.default.createElement(_device2.default, { key: k, data: item, logout: self.setDeviceLogoutVisible, closedrop: self.handleVisibleChange })));
	            });
	            menu = _react2.default.createElement(_menu2.default, null, list);
	            tip = _react2.default.createElement('div', { className: 'animated fadeIn time02' }, _react2.default.createElement('div', { className: 'tip' }, '\u4F60\u8FDE\u63A5\u4E86', devicelist.length, '\u53F0\u624B\u673A'), _react2.default.createElement('div', { className: 'arrow' }));
	        }
	        return _react2.default.createElement('div', { id: 'deviceSwitch', className: 'device-node' }, _react2.default.createElement(_dropdown2.default, { overlay: menu, trigger: ['click'], visible: this.state.deviceListVisible, onVisibleChange: this.handleVisibleChange, placement: 'bottomCenter', getPopupContainer: function getPopupContainer() {
	                return document.getElementById('deviceSwitch');
	            } }, _react2.default.createElement('div', { className: 'device-switch' }, tip)), _react2.default.createElement(_modal2.default, {
	            width: '460px',
	            title: '\u8FDC\u7A0B\u9000\u51FA',
	            wrapClassName: 'vertical-center-modal pd-left-right',
	            visible: this.state.deviceLogoutVisible,
	            onOk: function onOk() {
	                return _this.sendLogoutSms(true);
	            },
	            onCancel: function onCancel() {
	                return _this.setDeviceLogoutVisible(false);
	            },
	            closable: false
	        }, _react2.default.createElement('div', { className: 'dialog' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'dialog-tip' }, '\u9000\u51FA\u6B64\u8BBE\u5907\u7684\u9B45\u65CF\u8D26\u53F7\uFF0C\u6B64\u6B21\u64CD\u4F5C\u5C06\u6E05\u9664\u8BE5\u8BBE\u5907\u4E2D\u7684\u4E2A\u4EBA\u6570\u636E\uFF0C\u4F46\u4E0D\u4F1A\u5F71\u54CD\u5B58\u50A8\u5361\u548CFlyme\u4E91\u7AEF\u6570\u636E'), _react2.default.createElement('div', { className: 'dialog-pwd' }, _react2.default.createElement(_input2.default, { type: 'password', id: 'rlPassword', name: 'rlPassword', value: this.state.deviceLogoutPassword, onChange: this.passwordChange, size: 'large', maxLength: '32', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801' }), _react2.default.createElement('p', { className: 'dialog-pwd-tip', id: 'rlPsswordTip' }, this.state.deviceLogoutTip))))), _react2.default.createElement(_modal2.default, {
	            width: '460px',
	            wrapClassName: 'vertical-center-modal single-button',
	            visible: this.state.sendLogoutSmsVisible,
	            onOk: function onOk() {
	                return _this.setSendLogoutSmsVisible(false);
	            },
	            onCancel: function onCancel() {
	                return _this.setSendLogoutSmsVisible(false);
	            },
	            closable: false,
	            okText: '\u6211\u77E5\u9053\u4E86'
	        }, _react2.default.createElement('div', { className: 'dialog' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'dialog-tip' }, _react2.default.createElement('img', { src: 'images/send.png' }), _react2.default.createElement('p', { className: 'dt' }, '\u8FDC\u7A0B\u9000\u51FA\u8BF7\u6C42\u5DF2\u53D1\u51FA'), _react2.default.createElement('p', null, '\u5728 2017/4/7 \u524D\uFF0C\u5F53\u6B64\u8BBE\u5907\u8FDE\u63A5\u5230\u7F51\u7EDC\u65F6\uFF0C\u5C06\u81EA\u52A8\u9000\u51FA\u9B45\u65CF\u8D26\u53F7'))))));
	    }
	});
	module.exports = deviceList;

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var device = _react2.default.createClass({
	    displayName: 'device',

	    getInitialState: function getInitialState() {
	        var props = this.props;
	        return {
	            oldname: props.data.name,
	            newname: props.data.name
	        };
	    },
	    logout: function logout() {
	        var props = this.props;
	        var data = props.data;
	        props.logout(true, {
	            sn: data.sn,
	            imei: data.imei,
	            status: data.status
	        });
	        //关闭设备下拉框
	        props.closedrop(false);
	    },
	    changeName: function changeName(e) {
	        this.setState({
	            newname: e.currentTarget.value
	        });
	    },
	    submitErr: function submitErr(msg) {
	        _index2.default.error(msg);
	        this.setState({
	            newname: this.state.oldname
	        });
	    },
	    submitName: function submitName(e) {
	        var self = this;
	        var device = e.currentTarget.getAttribute('data-imei');
	        var sn = e.currentTarget.getAttribute('data-sn');
	        var oldVal = e.currentTarget.getAttribute('data-old');
	        var val = this.state.newname;
	        var regx = new RegExp("[\|\\\\/\:\*\?\"\<\>]"); //设备名称输入框正则表达式
	        if (val === "") {
	            this.submitErr('不能保存空姓名');
	        } else if (regx.test(val)) {
	            this.submitErr("不能输入 | V ： * ？ “ < >特殊字符");
	        } else if (oldVal != val) {
	            _utilDom2.default.ajax({
	                url: _interface2.default.apiUrl.flushdevicename,
	                data: {
	                    device: device,
	                    deviceName: val,
	                    sn: sn
	                },
	                success: function success(result) {
	                    if (data == 1) {
	                        self.setState({
	                            oldname: this.state.newname
	                        });
	                    } else {
	                        self.submitErr("保存失败！");
	                    }
	                },
	                error: function error() {
	                    self.submitErr("保存失败！");
	                }
	            }, _reqwest2.default, _index2.default);
	        }
	    },
	    render: function render() {
	        var props = this.props;
	        var classn = void 0,
	            src = void 0,
	            status = void 0;
	        if (props.data.status == 0) {
	            classn = 'offline';
	            status = '离线';
	        } else {
	            classn = 'online';
	            status = '在线';
	        }
	        classn += ' device-list clearfix';

	        return _react2.default.createElement('div', { className: classn, key: props.k }, _react2.default.createElement('div', { className: 'phone' }), _react2.default.createElement('div', { className: 'device-info' }, _react2.default.createElement('div', { className: 'device-name' }, _react2.default.createElement('input', { type: 'text', 'data-old': this.state.oldname, onChange: this.changeName, onBlur: this.submitName, className: 'J-device-name', maxLength: '20', value: this.state.newname, 'data-imei': props.data.imei, 'data-sn': props.data.sn }), _react2.default.createElement('span', { className: 'status offline-btn' }, '\u79BB\u7EBF')), _react2.default.createElement('div', { className: 'device-desc' }, _react2.default.createElement('span', { className: 'device-model' }, 'sss'), _react2.default.createElement('span', { className: 'device-sn' }, '\u5E8F\u5217\u53F7\u540E\u56DB\u4F4D\uFF1A34221'))), _react2.default.createElement('a', { className: 'device-handle J-device-handle', onClick: this.logout, 'data-logout': 'true', 'data-imei': props.data.imei, 'data-sn': props.data.sn, 'data-status': props.data.status, href: 'javascript:void(0);' }, '\u8FDC\u7A0B\u9000\u51FA'));
	    }
	});
	module.exports = device;

/***/ },

/***/ 371:
185,

/***/ 372:
185,

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {
	  var getReactFCInitializer = function (React) {
	    return function initializeReactFastclick () {
	      var originalCreateElement = React.createElement;

	      // Moved if Math.abs(downX - upX) > MOVE_THRESHOLD;
	      var MOVE_THRESHOLD = 8;
	      var TOUCH_DELAY = 1000;

	      var touchKeysToStore = [
	        'clientX',
	        'clientY',
	        'pageX',
	        'pageY',
	        'screenX',
	        'screenY',
	        'radiusX',
	        'radiusY'
	      ];

	      var touchEvents = {
	        downPos: {},
	        lastPos: {}
	      };

	      var isDisabled = function (element) {
	        if (!element) {
	          return false;
	        }
	        var disabled = element.getAttribute('disabled');

	        return disabled !== false && disabled !== null;
	      };

	      var focus = function (event, target) {
	        var myTarget = target || event.currentTarget;

	        if (!myTarget || isDisabled(myTarget)) {
	          return;
	        }

	        myTarget.focus();
	      };

	      var handleType = {
	        input: function (event) {
	          focus(event);
	          event.stopPropagation();
	        },
	        textarea: function (event) {
	          focus(event);
	          event.stopPropagation();
	        },
	        select: function (event) {
	          focus(event);
	          event.stopPropagation();
	        },
	        label: function (event) {
	          var input;

	          var forTarget = event.currentTarget.getAttribute('for');

	          if (forTarget) {
	            input = document.getElementById(forTarget);
	          } else {
	            input = event.currentTarget.querySelectorAll('input, textarea, select')[0];
	          }

	          if (input) {
	            focus(event, input);
	          }
	        }
	      };

	      var fakeClickEvent = function (event) {
	        if (typeof event.persist === 'function') {
	          event.persist();
	        }

	        event.fastclick = true;
	        event.type = 'click';
	        event.button = 0;
	      };

	      var copyTouchKeys = function (touch, target) {
	        if (typeof target.persist === 'function') {
	          target.persist();
	        }

	        if (touch) {
	          for (var i = 0; i < touchKeysToStore.length; i += 1) {
	            var key = touchKeysToStore[i];
	            target[key] = touch[key];
	          }
	        }
	      };

	      var noTouchHappened = function () {
	        return !touchEvents.touched && (
	          !touchEvents.lastTouchDate || new Date().getTime() > touchEvents.lastTouchDate + TOUCH_DELAY
	        );
	      };

	      var invalidateIfMoreThanOneTouch = function (event) {
	        touchEvents.invalid = event.touches && event.touches.length > 1 || touchEvents.invalid;
	      };

	      var onMouseEvent = function (callback, event) {
	        // Prevent any mouse events if we touched recently
	        if (typeof callback === 'function' && noTouchHappened()) {
	          callback(event);
	        }
	        if (event.type === 'click') {
	          touchEvents.invalid = false;
	          touchEvents.touched = false;
	          touchEvents.moved = false;
	        }
	      };

	      var onTouchStart = function (callback, event) {
	        touchEvents.invalid = false;
	        touchEvents.moved = false;
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();

	        copyTouchKeys(event.touches[0], touchEvents.downPos);
	        copyTouchKeys(event.touches[0], touchEvents.lastPos);

	        invalidateIfMoreThanOneTouch(event);

	        if (typeof callback === 'function') {
	          callback(event);
	        }
	      };

	      var onTouchMove = function (callback, event) {
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();

	        copyTouchKeys(event.touches[0], touchEvents.lastPos);

	        invalidateIfMoreThanOneTouch(event);

	        if (Math.abs(touchEvents.downPos.clientX - touchEvents.lastPos.clientX) > MOVE_THRESHOLD ||
	          Math.abs(touchEvents.downPos.clientY - touchEvents.lastPos.clientY) > MOVE_THRESHOLD) {
	          touchEvents.moved = true;
	        }

	        if (typeof callback === 'function') {
	          callback(event);
	        }
	      };

	      var onTouchEnd = function (callback, onClick, type, event) {
	        touchEvents.touched = true;
	        touchEvents.lastTouchDate = new Date().getTime();

	        invalidateIfMoreThanOneTouch(event);

	        if (typeof callback === 'function') {
	          callback(event);
	        }

	        if (!touchEvents.invalid && !touchEvents.moved) {
	          var box = event.currentTarget.getBoundingClientRect();

	          if (touchEvents.lastPos.clientX - (touchEvents.lastPos.radiusX || 0) <= box.right &&
	            touchEvents.lastPos.clientX + (touchEvents.lastPos.radiusX || 0) >= box.left &&
	            touchEvents.lastPos.clientY - (touchEvents.lastPos.radiusY || 0) <= box.bottom &&
	            touchEvents.lastPos.clientY + (touchEvents.lastPos.radiusY || 0) >= box.top) {

	            if (!isDisabled(event.currentTarget)) {
	              if (typeof onClick === 'function') {
	                copyTouchKeys(touchEvents.lastPos, event);
	                fakeClickEvent(event);
	                onClick(event);
	              }

	              if (!event.defaultPrevented && handleType[type]) {
	                handleType[type](event);
	              }
	            }
	          }
	        }
	      };

	      var propsWithFastclickEvents = function (type, props) {
	        var newProps = {};

	        // Loop over props
	        for (var key in props) {
	          // Copy props to newProps
	          newProps[key] = props[key];
	        }

	        // Apply our wrapped mouse and touch handlers
	        newProps.onClick = onMouseEvent.bind(null, props.onClick);
	        newProps.onMouseDown = onMouseEvent.bind(null, props.onMouseDown);
	        newProps.onMouseMove = onMouseEvent.bind(null, props.onMouseMove);
	        newProps.onMouseUp = onMouseEvent.bind(null, props.onMouseUp);
	        newProps.onTouchStart = onTouchStart.bind(null, props.onTouchStart);
	        newProps.onTouchMove = onTouchMove.bind(null, props.onTouchMove);
	        newProps.onTouchEnd = onTouchEnd.bind(null, props.onTouchEnd, props.onClick, type);

	        if (typeof Object.freeze === 'function') {
	          Object.freeze(newProps);
	        }

	        return newProps;
	      };

	      React.createElement = function () {
	        // Convert arguments to array
	        var args = Array.prototype.slice.call(arguments);

	        var type = args[0];
	        var props = args[1];

	        // Check if basic element & has onClick prop
	        if (type && typeof type === 'string' && (
	          (props && typeof props.onClick === 'function') || handleType[type]
	        )) {
	          // Add our own events to props
	          args[1] = propsWithFastclickEvents(type, props || {});
	        }

	        // Apply args to original createElement function
	        return originalCreateElement.apply(null, args);
	      };

	      if (typeof React.DOM === 'object') {
	        for (var key in React.DOM) {
	          React.DOM[key] = React.createElement.bind(null, key);
	        }
	      }
	    };
	  };

	  /* istanbul ignore next */
	  // Export for commonjs / browserify
	  if (true) {
	    var React = __webpack_require__(1);
	    module.exports = getReactFCInitializer(React);
	  // Export for amd / require
	  } else if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
	    define(['react'], function (ReactAMD) { // eslint-disable-line no-undef
	      return getReactFCInitializer(ReactAMD);
	    });
	  // Export globally
	  } else {
	    var root;

	    if (typeof window !== 'undefined') {
	      root = window;
	    } else if (typeof global !== 'undefined') {
	      root = global;
	    } else if (typeof self !== 'undefined') {
	      root = self;
	    } else {
	      root = this;
	    }

	    root.Reorder = getReactFCInitializer(root.React);
	  }
	})();


/***/ }

});