webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(22);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(23);

	var _store = __webpack_require__(60);

	var _store2 = _interopRequireDefault(_store);

	var _app = __webpack_require__(167);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var store = (0, _store2.default)();
	_reactDom2.default.render(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_app2.default, null)), document.getElementById('root'));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.Provider = undefined;

	var _Provider = __webpack_require__(24);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connectAdvanced = __webpack_require__(27);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _connect = __webpack_require__(31);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Provider = _Provider2.default;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var _PropTypes = __webpack_require__(25);

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store, storeSubscription: null };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports.default = Provider;


	if (true) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  storeSubscription: _PropTypes.subscriptionShape
	};
	Provider.displayName = 'Provider';

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;

	var _react = __webpack_require__(1);

	var subscriptionShape = exports.subscriptionShape = _react.PropTypes.shape({
	  trySubscribe: _react.PropTypes.func.isRequired,
	  tryUnsubscribe: _react.PropTypes.func.isRequired,
	  notifyNestedSubs: _react.PropTypes.func.isRequired,
	  isSubscribed: _react.PropTypes.func.isRequired
	});

	var storeShape = exports.storeShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = connectAdvanced;

	var _hoistNonReactStatics = __webpack_require__(28);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(29);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _Subscription = __webpack_require__(30);

	var _Subscription2 = _interopRequireDefault(_Subscription);

	var _PropTypes = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };

	  return selector;
	}

	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;

	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }

	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;

	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;

	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };

	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };

	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;

	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };

	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);

	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };

	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };

	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    if (true) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();

	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }

	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];

	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;

	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);

	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

	      this.listeners = createListenerCollection();
	    }
	  };

	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	exports.default = Subscription;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createConnect = createConnect;

	var _connectAdvanced = __webpack_require__(27);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _shallowEqual = __webpack_require__(32);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _mapDispatchToProps = __webpack_require__(33);

	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

	var _mapStateToProps = __webpack_require__(56);

	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

	var _mergeProps = __webpack_require__(57);

	var _mergeProps2 = _interopRequireDefault(_mergeProps);

	var _selectorFactory = __webpack_require__(58);

	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	}

	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',

	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },

	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),

	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual

	    }, extraOptions));
	  };
	}

	exports.default = createConnect();

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

	var _redux = __webpack_require__(34);

	var _wrapMapToProps = __webpack_require__(54);

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}

	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}

	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}

	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(35);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(49);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(51);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(52);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(53);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(36);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(46);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(37),
	    getPrototype = __webpack_require__(43),
	    isObjectLike = __webpack_require__(45);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(38),
	    getRawTag = __webpack_require__(41),
	    objectToString = __webpack_require__(42);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(39);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(40);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(38);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(44);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(48);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(9)(module)))

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(35);

	var _isPlainObject = __webpack_require__(36);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (true) {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(53);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

	var _verifyPlainObject = __webpack_require__(55);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}

	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}

	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };

	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      if (true) (0, _verifyPlainObject2.default)(props, displayName, methodName);

	      return props;
	    };

	    return proxy;
	  };
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifyPlainObject;

	var _isPlainObject = __webpack_require__(36);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

	var _wrapMapToProps = __webpack_require__(54);

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}

	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}

	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

	var _verifyPlainObject = __webpack_require__(55);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}

	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;

	    var hasRunOnce = false;
	    var mergedProps = void 0;

	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;

	        if (true) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}

	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}

	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}

	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;

	var _verifySubselectors = __webpack_require__(59);

	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}

	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;

	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;

	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;

	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}

	// TODO: Add more comments

	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  if (true) {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifySubselectors;

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(34);

	var _reduxThunk = __webpack_require__(61);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(62);

	var _reducers = __webpack_require__(68);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var logger = (0, _reduxLogger.createLogger)({
	    timestamp: false,
	    diff: true,
	    collapsed: true
	});

	var finalCreateStore = (0, _redux.applyMiddleware)(logger, _reduxThunk2.default)(_redux.createStore);
	function configureStore(initialState) {
	    var store = finalCreateStore(_reducers2.default, initialState);
	    return store;
	}
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logger = exports.createLogger = exports.defaults = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _core = __webpack_require__(63);

	var _helpers = __webpack_require__(64);

	var _defaults = __webpack_require__(67);

	var _defaults2 = _interopRequireDefault(_defaults);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var loggerOptions = _extends({}, _defaults2.default, options);

	  var logger = loggerOptions.logger,
	      stateTransformer = loggerOptions.stateTransformer,
	      errorTransformer = loggerOptions.errorTransformer,
	      predicate = loggerOptions.predicate,
	      logErrors = loggerOptions.logErrors,
	      diffPredicate = loggerOptions.diffPredicate;

	  // Return if 'console' object is not defined

	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
	  if (options.getState && options.dispatch) {
	    // eslint-disable-next-line no-console
	    console.error('[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from \'redux-logger\'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from \'redux-logger\'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n');

	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  var logBuffer = [];

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};

	        logBuffer.push(logEntry);

	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = void 0;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	var defaultLogger = function defaultLogger() {
	  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      dispatch = _ref2.dispatch,
	      getState = _ref2.getState;

	  if (typeof dispatch === 'function' || typeof getState === 'function') {
	    return createLogger()({ dispatch: dispatch, getState: getState });
	  } else {
	    // eslint-disable-next-line no-console
	    console.error('\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from \'redux-logger\'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from \'redux-logger\'\n');
	  }
	};

	exports.defaults = _defaults2.default;
	exports.createLogger = createLogger;
	exports.logger = defaultLogger;
	exports.default = defaultLogger;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.printBuffer = printBuffer;

	var _helpers = __webpack_require__(64);

	var _diff = __webpack_require__(65);

	var _diff2 = _interopRequireDefault(_diff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}

	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp,
	      duration = options.duration;


	  return function (action, time, took) {
	    var parts = ['action'];

	    parts.push('%c' + String(action.type));
	    if (timestamp) parts.push('%c@ ' + time);
	    if (duration) parts.push('%c(in ' + took.toFixed(2) + ' ms)');

	    return parts.join(' ');
	  };
	}

	function printBuffer(buffer, options) {
	  var logger = options.logger,
	      actionTransformer = options.actionTransformer,
	      _options$titleFormatt = options.titleFormatter,
	      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
	      collapsed = options.collapsed,
	      colors = options.colors,
	      level = options.level,
	      diff = options.diff;


	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started,
	        startedTime = logEntry.startedTime,
	        action = logEntry.action,
	        prevState = logEntry.prevState,
	        error = logEntry.error;
	    var took = logEntry.took,
	        nextState = logEntry.nextState;

	    var nextEntry = buffer[key + 1];

	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }

	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action, logEntry) : collapsed;

	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : '';
	    var headerCSS = ['color: gray; font-weight: lighter;'];
	    headerCSS.push(titleCSS);
	    if (options.timestamp) headerCSS.push('color: gray; font-weight: lighter;');
	    if (options.duration) headerCSS.push('color: gray; font-weight: lighter;');
	    var title = titleFormatter(formattedAction, formattedTime, took);

	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed.apply(logger, ['%c ' + title].concat(headerCSS));else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group.apply(logger, ['%c ' + title].concat(headerCSS));else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }

	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }

	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action    ', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action    ', formattedAction);
	    }

	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error     ', 'color: ' + colors.error(error, prevState) + '; font-weight: bold;', error);else logger[errorLevel]('error     ', error);
	    }

	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }

	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }

	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('\u2014\u2014 log end \u2014\u2014');
	    }
	  });
	}

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};

	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};

	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;

	var _deepDiff = __webpack_require__(66);

	var _deepDiff2 = _interopRequireDefault(_deepDiff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};

	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}

	function render(diff) {
	  var kind = diff.kind,
	      path = diff.path,
	      lhs = diff.lhs,
	      rhs = diff.rhs,
	      index = diff.index,
	      item = diff.item;


	  switch (kind) {
	    case 'E':
	      return [path.join('.'), lhs, '\u2192', rhs];
	    case 'N':
	      return [path.join('.'), rhs];
	    case 'D':
	      return [path.join('.')];
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return [];
	  }
	}

	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);

	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }

	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;

	      var output = render(elem);

	      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
	    });
	  } else {
	    logger.log('\u2014\u2014 no diff \u2014\u2014');
	  }

	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';

	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }

	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }

	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }

	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);

	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);

	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);

	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);

	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }

	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }

	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }

	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }

	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }

	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }

	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }

	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }

	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }

	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }

	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }

	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }

	  Object.defineProperties(accumulateDiff, {

	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });

	  return accumulateDiff;
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,

	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports["default"];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(34);

	var _contactList = __webpack_require__(69);

	var _contactList2 = _interopRequireDefault(_contactList);

	var _contact = __webpack_require__(135);

	var _contact2 = _interopRequireDefault(_contact);

	var _group = __webpack_require__(165);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var rootReducer = (0, _redux.combineReducers)({
	    contactList: _contactList2.default,
	    group: _group2.default,
	    contact: _contact2.default
	});

	exports.default = rootReducer;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _from = __webpack_require__(70);

	var _from2 = _interopRequireDefault(_from);

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _contactList = __webpack_require__(129);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var initState = {
	    showLoading: false,
	    loading: false,
	    loadingSuccess: false,
	    data: [{
	        id: '',
	        displayName: '',
	        addr: '',
	        photo_type: 0,
	        sortkey: '',
	        star: 0,
	        userId: '',
	        check: false
	    }],
	    checkAll: false,
	    checkAllShow: false,
	    checkList: [],
	    idList: [],
	    activeId: '',
	    dataType: 'origin',
	    start: 0,
	    allData: false, // 是否将数据全部拉取完成
	    isSearch: false,
	    searchCount: '',
	    searchContent: ''
	};

	module.exports = function contactList() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	    var action = arguments[1];

	    var newState = void 0;
	    switch (action.type) {
	        case _contactList.SHOW_LIST_LOADING:
	            newState = (0, _assign2.default)({}, state, {
	                showLoading: true
	            });
	            return newState;
	        case _contactList.START_LOADING:
	            newState = (0, _assign2.default)({}, state, {
	                loading: true
	            });
	            return newState;
	        case _contactList.GET_CONTACT_LIST_SUCCESS:
	            var data = action.payload.data,
	                idArray = data.map(function (v, i) {
	                return v.id;
	            });
	            newState = (0, _assign2.default)({}, state, {
	                showLoading: false,
	                loading: false,
	                loadingSuccess: true,
	                data: action.payload.append ? state.data.concat(data) : data,
	                idList: action.payload.append ? state.idList.concat(idArray) : idArray,
	                dataType: action.payload.append ? 'next' : 'origin',
	                start: action.payload.start,
	                allData: data.length < action.payload.limit ? true : false,
	                checkList: state.checkAll ? state.checkList.concat(idArray) : state.checkList
	            });
	            return newState;
	        case _contactList.GET_CONTACT_LIST_FAILURE:
	            newState = (0, _assign2.default)({}, state, {
	                showLoading: false,
	                loading: false,
	                loadingSuccess: false
	            });
	            return newState;
	        case _contactList.CHECKALL_CLICK:
	            var check = action.payload.check;
	            newState = (0, _assign2.default)({}, state, {
	                checkList: check ? (0, _from2.default)(state.idList) : [],
	                checkAll: check,
	                checkAllShow: check
	            });
	            return newState;
	        case _contactList.CHECK_ITEM:
	            var _action$payload = action.payload,
	                id = _action$payload.id,
	                checkFlag = _action$payload.checkFlag;

	            var checkList = state.checkList;
	            if (checkFlag) {
	                checkList.push(id);
	            } else {
	                checkList.splice(checkList.indexOf(id), 1);
	            }
	            var checkAll = state.checkAll;
	            if (!checkAll && checkList.length === state.idList.length) {
	                checkAll = true;
	            }
	            if (checkAll && checkList.length === 0) {
	                checkAll = false;
	            }
	            newState = (0, _assign2.default)({}, state, {
	                checkList: checkList,
	                checkAllShow: checkList.length === state.idList.length ? true : false,
	                checkAll: checkAll
	            });
	            return newState;
	        case _contactList.CLICK_ITEM:
	            newState = (0, _assign2.default)({}, state, {
	                activeId: action.payload.id
	            });
	            return newState;
	        case _contactList.RESET_CHECK_STATUS:
	            newState = (0, _assign2.default)({}, state, {
	                checkAll: false,
	                checkAllShow: false,
	                checkList: []
	            });
	            return newState;
	        case _contactList.SEARCH_CONTATCLIST_SUCCESS:
	            var searchData = action.payload.data,
	                searchIdList = searchData.map(function (v, i) {
	                return v.id;
	            });
	            newState = (0, _assign2.default)({}, state, {
	                showLoading: false,
	                loading: false,
	                loadingSuccess: true,
	                data: action.payload.append ? state.data.concat(searchData) : searchData,
	                idList: action.payload.append ? state.idList.concat(searchIdList) : searchIdList,
	                dataType: action.payload.append ? 'next' : 'origin',
	                start: action.payload.start,
	                allData: searchData.length < action.payload.limit ? true : false,
	                checkList: state.checkAll ? state.checkList.concat(searchIdList) : state.checkList
	            });
	            return newState;
	        case _contactList.SEARCH_CONTACTLIST_FAILURE:
	            newState = (0, _assign2.default)({}, state, {
	                showLoading: false,
	                loading: false,
	                loadingSuccess: false
	            });
	            return newState;
	        case _contactList.SEARCH_COUNT_SUCCESS:
	            newState = (0, _assign2.default)({}, state, {
	                searchContent: action.payload.content,
	                searchCount: action.payload.count
	            });
	            return newState;
	        case _contactList.SEARCH_COUNT_FAILURE:
	            newState = (0, _assign2.default)({}, state, {});
	            return newState;
	        case _contactList.CHANGE_SEARCH_FLAG:
	            newState = (0, _assign2.default)({}, state, {
	                isSearch: action.payload.isSearch
	            });
	            return newState;
	        case _contactList.SEARCH_CHANGE_RESET:
	            newState = (0, _assign2.default)({}, state, {
	                showLoading: false,
	                loading: false,
	                loadingSuccess: false,
	                data: [{
	                    id: '',
	                    displayName: '',
	                    addr: '',
	                    photo_type: 0,
	                    sortkey: '',
	                    star: 0,
	                    userId: '',
	                    check: false
	                }],
	                checkAll: false,
	                checkAllShow: false,
	                checkList: [],
	                idList: [],
	                activeId: '',
	                dataType: 'origin',
	                start: 0,
	                allData: false, // 是否将数据全部拉取完成
	                isSearch: false,
	                searchCount: '',
	                searchContent: ''
	            });
	            return newState;
	        default:
	            return state;
	    }
	};

/***/ },
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SEARCH_CHANGE_RESET = exports.SEARCH_COUNT = exports.SEARCH_COUNT_FAILURE = exports.SEARCH_COUNT_SUCCESS = exports.SEARCH_CONTACTLIST = exports.SEARCH_CONTACTLIST_FAILURE = exports.SEARCH_CONTATCLIST_SUCCESS = exports.CHANGE_SEARCH_FLAG = exports.RESET_CHECK_STATUS = exports.CLICK_ITEM = exports.CHECK_ITEM = exports.CHECKALL_CLICK = exports.GET_CONTACT_LIST_FAILURE = exports.GET_CONTACT_LIST_SUCCESS = exports.GET_CONTACT_LIST = exports.START_LOADING = exports.SHOW_LIST_LOADING = undefined;
	exports.showListLoading = showListLoading;
	exports.startLoading = startLoading;
	exports.getContactList = getContactList;
	exports.getContactListSuccess = getContactListSuccess;
	exports.getContactListFailure = getContactListFailure;
	exports.checkAllClick = checkAllClick;
	exports.checkItem = checkItem;
	exports.clickItem = clickItem;
	exports.resetCheckStatus = resetCheckStatus;
	exports.changeSearchFlag = changeSearchFlag;
	exports.searchContactListSuccess = searchContactListSuccess;
	exports.searchContactListFailure = searchContactListFailure;
	exports.searchContactList = searchContactList;
	exports.searchCountSuccess = searchCountSuccess;
	exports.searchCountFaliure = searchCountFaliure;
	exports.searchCount = searchCount;
	exports.searchChangeReset = searchChangeReset;

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var SHOW_LIST_LOADING = exports.SHOW_LIST_LOADING = 'SHOW_LIST_LOADING';
	var START_LOADING = exports.START_LOADING = 'START_LOADING';

	function showListLoading(payload) {
	    return {
	        type: SHOW_LIST_LOADING,
	        payload: payload
	    };
	}

	function startLoading(payload) {
	    return {
	        type: START_LOADING,
	        payload: payload
	    };
	}

	var GET_CONTACT_LIST = exports.GET_CONTACT_LIST = 'GET_CONTACT_LIST';
	var GET_CONTACT_LIST_SUCCESS = exports.GET_CONTACT_LIST_SUCCESS = 'GET_CONTACT_LIST_SUCCESS';
	var GET_CONTACT_LIST_FAILURE = exports.GET_CONTACT_LIST_FAILURE = 'GET_CONTACT_LIST_FAILURE';

	function getContactList(payload) {
	    return function (dispatch, getState) {
	        var start = payload.start || 0,
	            limit = payload.limit || 20;
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.searchsimplecontact,
	            type: 'json',
	            method: 'get',
	            data: {
	                group: payload.group || '全部联系人',
	                start: start,
	                limit: limit
	            },
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    var value = result.returnValue;
	                    dispatch(getContactListSuccess({ append: payload.append || false, data: result.returnValue, start: start + limit, limit: limit }));
	                } else {
	                    dispatch(getContactListFailure({ errorTip: result.returnMessage }));
	                }
	            },
	            error: function error(err) {
	                dispatch(getContactListFailure({ errorTip: '网络请求错误，请稍后重试' }));
	            }
	        });
	    };
	}

	function getContactListSuccess(payload) {
	    return {
	        type: GET_CONTACT_LIST_SUCCESS,
	        payload: payload
	    };
	}

	function getContactListFailure(payload) {
	    return {
	        type: GET_CONTACT_LIST_FAILURE,
	        payload: payload
	    };
	}

	var CHECKALL_CLICK = exports.CHECKALL_CLICK = 'CHECKALL_CLICK';
	var CHECK_ITEM = exports.CHECK_ITEM = 'CHECK_ITEM';

	function checkAllClick(payload) {
	    return {
	        type: CHECKALL_CLICK,
	        payload: payload
	    };
	}

	function checkItem(payload) {
	    return {
	        type: CHECK_ITEM,
	        payload: payload
	    };
	}

	var CLICK_ITEM = exports.CLICK_ITEM = 'CLICK_ITEM';

	function clickItem(payload) {
	    return {
	        type: CLICK_ITEM,
	        payload: payload
	    };
	}

	var RESET_CHECK_STATUS = exports.RESET_CHECK_STATUS = 'RESET_CHECK_STATUS';

	function resetCheckStatus(payload) {
	    return {
	        type: RESET_CHECK_STATUS,
	        payload: payload
	    };
	}

	var CHANGE_SEARCH_FLAG = exports.CHANGE_SEARCH_FLAG = 'CHANGE_SEARCH_FLAG';

	function changeSearchFlag(payload) {
	    return {
	        type: CHANGE_SEARCH_FLAG,
	        payload: payload
	    };
	}

	var SEARCH_CONTATCLIST_SUCCESS = exports.SEARCH_CONTATCLIST_SUCCESS = 'SEARCH_CONTATCLIST_SUCCESS';
	var SEARCH_CONTACTLIST_FAILURE = exports.SEARCH_CONTACTLIST_FAILURE = 'SEARCH_CONTACTLIST_FAILURE';
	var SEARCH_CONTACTLIST = exports.SEARCH_CONTACTLIST = 'SEARCH_CONTACTLIST';

	function searchContactListSuccess(payload) {
	    return {
	        type: SEARCH_CONTATCLIST_SUCCESS,
	        payload: payload
	    };
	}

	function searchContactListFailure(payload) {
	    return {
	        type: SEARCH_CONTACTLIST_FAILURE,
	        payload: payload
	    };
	}

	function searchContactList(payload) {
	    return function (dispatch, getState) {
	        var start = payload.start || 0,
	            limit = payload.limit || 20;
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.searchContactByContent,
	            type: 'json',
	            method: 'get',
	            data: {
	                isRecycle: 0,
	                start: start,
	                limit: limit,
	                content: payload.content
	            },
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    var value = result.returnValue;
	                    dispatch(searchContactListSuccess({ data: value, append: payload.append || false, limit: limit, start: start + limit }));
	                } else {
	                    dispatch(searchContactListFailure({ errorTip: result.returnMessage }));
	                }
	            },
	            error: function error(result) {
	                dispatch(searchContactListFailure({ errorTip: '网络请求错误，请稍后重试' }));
	            }
	        });
	    };
	}

	var SEARCH_COUNT_SUCCESS = exports.SEARCH_COUNT_SUCCESS = 'SEARCH_COUNT_SUCCESS';
	var SEARCH_COUNT_FAILURE = exports.SEARCH_COUNT_FAILURE = 'SEARCH_COUNT_FAILURE';
	var SEARCH_COUNT = exports.SEARCH_COUNT = 'SEARCH_COUNT';

	function searchCountSuccess(payload) {
	    return {
	        type: SEARCH_COUNT_SUCCESS,
	        payload: payload
	    };
	}

	function searchCountFaliure(payload) {
	    return {
	        type: SEARCH_COUNT_FAILURE,
	        payload: payload
	    };
	}

	function searchCount(payload) {
	    return function (dispatch, getState) {
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.searchCount,
	            type: 'json',
	            method: 'get',
	            data: {
	                content: payload.content
	            },
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    dispatch(searchCountSuccess({ content: payload.content, count: result.returnValue }));
	                } else {
	                    dispatch(searchCountFaliure({ errorTip: result.returnMessage }));
	                }
	            },
	            error: function error(result) {
	                dispatch(searchCountFaliure({ errorTip: '网络错误，请稍后再试' }));
	            }
	        });
	    };
	}

	var SEARCH_CHANGE_RESET = exports.SEARCH_CHANGE_RESET = 'SEARCH_CHANGE_RESET';

	function searchChangeReset(payload) {
	    return {
	        type: SEARCH_CHANGE_RESET,
	        payload: payload
	    };
	}

/***/ },
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _contact = __webpack_require__(136);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var initState = {
	    data: {
	        displayName: '',
	        uuid: '',
	        id: '',
	        company: '',
	        addrList: [],
	        emailList: [],
	        telList: [],
	        eventList: [],
	        webList: [],
	        imList: [],
	        groupList: [],
	        star: 0,
	        remark: ''
	    },
	    loadingSuccess: false,
	    isEdit: false
	};

	module.exports = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	    var action = arguments[1];

	    var newState = void 0;
	    switch (action.type) {
	        case _contact.SEARCH_CONTACT_FALIURE:
	            newState = (0, _assign2.default)({}, state, {
	                loadingSuccess: false
	            });
	            return newState;
	        case _contact.SEARCH_CONTACT_SUCCESS:
	            newState = (0, _assign2.default)({}, state, {
	                loadingSuccess: true,
	                data: action.payload.data
	            });
	            return newState;
	        case _contact.CHANGE_EDIT_MODEL:
	            newState = (0, _assign2.default)({}, state, {
	                isEdit: action.payload.isEdit
	            });
	            return newState;
	        case _contact.RESET_CONTACT_DATA:
	            return initState;
	        default:
	            return state;
	    }
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RESET_CONTACT_DATA = exports.CHANGE_EDIT_MODEL = exports.SEARCH_CONTACT = exports.SEARCH_CONTACT_FALIURE = exports.SEARCH_CONTACT_SUCCESS = exports.SEARCH_CONTACT_LOADING = undefined;
	exports.searchContactLoading = searchContactLoading;
	exports.searchContactSuccess = searchContactSuccess;
	exports.searchContactFailure = searchContactFailure;
	exports.searchContact = searchContact;
	exports.changeEditModel = changeEditModel;
	exports.resetContactData = resetContactData;

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	var _util = __webpack_require__(137);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var SEARCH_CONTACT_LOADING = exports.SEARCH_CONTACT_LOADING = 'SEARCH_CONTACT_LOADING';

	function searchContactLoading(payload) {
	    return {
	        type: SEARCH_CONTACT_LOADING,
	        payload: payload
	    };
	}

	var SEARCH_CONTACT_SUCCESS = exports.SEARCH_CONTACT_SUCCESS = 'SEARCH_CONTACT_SUCCESS';
	var SEARCH_CONTACT_FALIURE = exports.SEARCH_CONTACT_FALIURE = 'SEARCH_CONTACT_FALIURE';
	var SEARCH_CONTACT = exports.SEARCH_CONTACT = 'SEARCH_CONTACT';

	function searchContactSuccess(payload) {
	    return {
	        type: SEARCH_CONTACT_SUCCESS,
	        payload: payload
	    };
	}

	function searchContactFailure(payload) {
	    return {
	        type: SEARCH_CONTACT_FALIURE,
	        payload: payload
	    };
	}

	function searchContact(payload) {
	    return function (dispatch, getState) {
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.searchContact,
	            type: 'json',
	            method: 'get',
	            data: {
	                contactId: payload.id
	            },
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    var value = (0, _util.getContactInfo)(result.returnValue);
	                    dispatch(searchContactSuccess({ data: value }));
	                } else {
	                    dispatch(searchContactFailure({ errorTip: result.returnMessage }));
	                }
	            },
	            error: function error(result) {
	                dispatch(searchContactFailure({ errorTip: '网络请求错误，请稍后重试' }));
	            }
	        });
	    };
	}

	var CHANGE_EDIT_MODEL = exports.CHANGE_EDIT_MODEL = 'CHANGE_EDIT_MODEL';

	function changeEditModel(payload) {
	    return {
	        type: CHANGE_EDIT_MODEL,
	        payload: payload
	    };
	}

	var RESET_CONTACT_DATA = exports.RESET_CONTACT_DATA = 'RESET_CONTACT_DATA';

	function resetContactData(payload) {
	    return {
	        type: RESET_CONTACT_DATA,
	        payload: payload
	    };
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var photoUrlPrefix = 'https://cloud.flyme.cn/c/browser/download/common/contact/filename/';

	// 是否含有中文
	var hasChinese = function hasChinese() {
	    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    var reg = /[^\u0000-\u00FF]/;
	    return reg.test(str);
	};
	// 是否含有全角字符
	var hasFullWidthChar = function hasFullWidthChar() {
	    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    var reg = /[\uFF00-\uFFEF]/;
	    return reg.test(str);
	};
	// 处理无中文字符
	var getNoneChineseText = function getNoneChineseText() {
	    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    switch (str.length) {
	        case 0:
	            return '';
	        case 1:
	            return str;
	        case 2:
	            return str;
	        default:
	            return str.substring(0, 2);
	    }
	};
	// 处理含有中文的默认文本
	var getHasChineseText = function getHasChineseText() {
	    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    var chineseArray = str.match(/[^\u0000-\u00FF]/g); // 获取该字符串中所有的中文字符
	    if (chineseArray.length === 0 || chineseArray.length === 1) {
	        return getNoneChineseText(str);
	    }
	    var continuous = true; // 判断中文是否连续
	    for (var i = 0, len = chineseArray.length; i < len - 1; i++) {
	        if (chineseArray[i] === chineseArray[i + 1]) {
	            continue;
	        }
	        var i1 = str.indexOf(chineseArray[i]);
	        var i2 = str.indexOf(chineseArray[i + 1]);
	        if (i2 - i1 !== 1) {
	            continuous = false;
	            break;
	        }
	    }
	    if (!continuous) {
	        return getNoneChineseText(str);
	    }
	    var complexSurname = '欧阳、太史、端木、上官、司马、东方、独孤、南宫、万俟、闻人、夏侯、诸葛、尉迟、公羊、赫连、澹台、皇甫、宗政、濮阳、公冶、太叔、申屠、公孙、慕容、仲孙、钟离、长孙、宇文、司徒、鲜于、司空、闾丘、子车、亓官、司寇、巫马、公西、颛孙、壤驷、公良、漆雕、乐正、宰父、谷梁、拓跋、夹谷、轩辕、令狐、段干、百里、呼延、东郭、南门、羊舌、微生、公户、公玉、公仪、梁丘、公仲、公上、公门、公山、公坚、左丘、公伯、西门、公祖、第五、公乘、贯丘、公皙、南荣、东里、东宫、仲长、子书、子桑、即墨、达奚、褚师 、吴铭'.split('、');
	    switch (chineseArray.length) {
	        case 2:
	            return chineseArray.join('');
	        case 3:
	            var temp = chineseArray.slice(0, 2).join('');
	            if (complexSurname.indexOf(temp) > -1) {
	                return temp;
	            } else {
	                return chineseArray.slice(1).join('');
	            }
	        default:
	            return chineseArray.slice(0, 2).join('');
	    }
	};

	var getDefaultColor = function getDefaultColor() {
	    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var colorTypeNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;

	    return _utilDom2.default.getColorType(str, colorTypeNumber);
	};

	var getDefaultText = function getDefaultText() {
	    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    var flag = hasChinese(str);
	    return flag ? getHasChineseText(str) : getNoneChineseText(str);
	};

	var getSortArray = function getSortArray() {
	    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	    var sortArray = [{ "★": [] }, { "＃": [] }, { "A": [] }, { "B": [] }, { "C": [] }, { "D": [] }, { "E": [] }, { "F": [] }, { "G": [] }, { "H": [] }, { "I": [] }, { "J": [] }, { "K": [] }, { "L": [] }, { "M": [] }, { "N": [] }, { "O": [] }, { "P": [] }, { "Q": [] }, { "R": [] }, { "S": [] }, { "T": [] }, { "U": [] }, { "V": [] }, { "W": [] }, { "X": [] }, { "Y": [] }, { "Z": [] }];
	    var getObjKey = function getObjKey(obj) {
	        for (var x in obj) {
	            return x;
	        }
	    };
	    var mapArray = '★＃ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	    var tempArray = data.map(function (v, i) {
	        var sortKey = '#';
	        if (v.star == 1) {
	            sortKey = getObjKey(sortArray[0]);
	        } else {
	            for (var j = 2, len = sortArray.length; j < len; j++) {
	                var key = getObjKey(sortArray[j]);
	                var dataKey = (v.sortkey ? v.sortkey[0] : '').toUpperCase();
	                if (key === dataKey) {
	                    sortKey = key;
	                    break;
	                }
	            }
	        }
	        return (0, _assign2.default)({}, v, {
	            sortKey: sortKey
	        });
	    });
	    tempArray.forEach(function (v, i) {
	        var index = mapArray.indexOf(v.sortKey);
	        if (index > -1) {
	            sortArray[index][v.sortKey].push(v);
	        }
	    });
	    return sortArray;
	};

	// 获取联系人信息的项目类型
	var getTypeCustomValue = function getTypeCustomValue(type) {
	    var result = '';
	    switch (type) {
	        case 21:
	        case 3:
	            result = "手机";
	            break; // 电话
	        case 1:
	        case 22:
	            result = "住宅";
	            break;
	        case 10:
	        case 12:
	        case 31:
	            result = "公司";
	            break;
	        case 2:
	        case 11:
	        case 29:
	            result = "传真";
	            break;
	        case 13:
	        case 15:
	        case 20:
	        case 27:
	        case 28:
	        case 30:
	            result = "其他";
	            break;

	        case 16:
	            result = "个人";
	            break; // 邮件
	        case 42:
	        case 23:
	            result = "公司";
	            break;
	        case 8:
	        case 41:
	        case 4:
	            result = "其他";
	            break;

	        case 51: // 即时消息
	        case 52:
	        case 53:
	            result = "QQ";
	            break;
	        case 61:
	        case 62:
	        case 63:
	            result = "MSN";
	            break;
	        case 71:
	            result = "Yahoo";
	            break;
	        case 81:
	            result = "Skype";
	            break;
	        case 91:
	            result = "Gtalk";
	            break;
	        case 101:
	            result = "ICQ";
	            break;
	        case 111:
	            result = "其他";
	            break;

	        case 6:
	            result = "个人";
	            break; // 网站
	        case 7:
	            result = "公司";
	            break;
	        case 14:
	        case 5:
	            result = "其他";
	            break;

	        default:
	            result = "";
	            break;
	    }
	    return result;
	};

	module.exports = {
	    // 获取处理后的数据数组
	    getShowDataArray: function getShowDataArray() {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        if (!Array.isArray(data)) {
	            return [];
	        }
	        var _this = this;
	        var resultArray = data.map(function (v, i) {
	            var colorType = getDefaultColor(v.displayName[0]);
	            v.photo_type = 0;
	            return {
	                id: v.id,
	                hasPhoto: v.photo_type,
	                displayName: v.displayName,
	                portrait: v.photo_type ? photoUrlPrefix + v.id + '?' + new Date().getTime() : '',
	                colorType: colorType,
	                defaultText: getDefaultText(v.displayName),
	                nopicClass: 'i-avata color' + colorType,
	                sortkey: v.sortkey
	            };
	        });
	        return resultArray;
	    },

	    // 获取排序好列表展示的数组
	    getSortListData: function getSortListData() {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        var resultArray = [],
	            mapArray = '★＃ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	        var sortArray = getSortArray(data);
	        sortArray.forEach(function (v, i) {
	            if (v[mapArray[i]].length > 0) {
	                resultArray.push({ key: mapArray[i] });
	                resultArray = resultArray.concat(v[mapArray[i]]);
	            }
	        });
	        return resultArray;
	    },

	    // 获取排序后的纯数据展示数组
	    getSortPureData: function getSortPureData() {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        var resultArray = [],
	            mapArray = '★＃ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	        var sortArray = getSortArray(data);
	        sortArray.forEach(function (v, i) {
	            if (v[mapArray[i]].length > 0) {
	                resultArray = resultArray.concat(v[mapArray[i]]);
	            }
	        });
	        return resultArray;
	    },

	    // 获取联系人的信息详情
	    getContactInfo: function getContactInfo() {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var addrList = data.addrList,
	            emailList = data.emailList,
	            telList = data.telList,
	            eventList = data.eventList,
	            imList = data.imList,
	            webList = data.webList,
	            contact = data.contact;

	        addrList = addrList.map(function (v, i) {
	            return {
	                contact: v.contact,
	                id: v.id,
	                userId: v.userId,
	                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
	                value: v.street
	            };
	        });
	        emailList = emailList.map(function (v, i) {
	            return {
	                contact: v.contact,
	                id: v.id,
	                userId: v.userId,
	                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
	                value: v.value
	            };
	        }), telList = telList.map(function (v, i) {
	            return {
	                contact: v.contact,
	                id: v.id,
	                userId: v.userId,
	                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
	                value: v.value
	            };
	        });
	        eventList = eventList.map(function (v, i) {
	            return {
	                contact: v.contactId,
	                id: v.id,
	                userId: v.userId,
	                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
	                value: v.data
	            };
	        });
	        webList = webList.map(function (v, i) {
	            return {
	                contact: v.contact,
	                id: v.id,
	                userId: v.userId,
	                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
	                value: v.value
	            };
	        });
	        imList = imList.map(function (v, i) {
	            return {
	                contact: v.contact,
	                id: v.id,
	                userId: v.userId,
	                custom: v.custom ? v.custom : getTypeCustomValue(v.type),
	                value: v.value
	            };
	        });
	        var colorType = getDefaultColor(contact.displayName[0]);
	        var result = {
	            displayName: contact.displayName,
	            uuid: contact.uuid,
	            id: contact.id,
	            company: contact.company,
	            addrList: addrList,
	            emailList: emailList,
	            telList: telList,
	            eventList: eventList,
	            webList: webList,
	            imList: imList,
	            groupList: contact.categories === '' ? [] : contact.categories.split(';'),
	            star: contact.star,
	            remark: contact.body
	        };
	        return result;
	    },
	    getTypeCustomList: function getTypeCustomList(type) {
	        switch (type) {
	            case 'tel':
	                return ['手机', '住宅', '公司', '传真', '自定义'];
	            case 'email':
	                return ['个人', '公司', '自定义'];
	            case 'addr':
	                return ['住宅', '公司', '自定义'];
	            case 'im':
	                return ['QQ', 'MSN', 'Yahoo', 'Skype', 'Gtalk', 'ICQ', '自定义'];
	            case 'web':
	                return ['个人', '公司', '自定义'];
	            case 'social':
	                return ['新浪微博'];
	            case 'event':
	                return ['生日', '周年纪念', '农历生日', '其他', '自定义'];
	            default:
	                return ['自定义'];
	        }
	    },
	    getDefaultValue: function getDefaultValue(type) {
	        switch (type) {
	            case 'tel':
	                return '电话号码';
	            case 'email':
	                return '电子邮件';
	            case 'addr':
	                return '地址';
	            case 'im':
	                return '即时消息';
	            case 'web':
	                return '网站';
	            case 'social':
	                return '昵称';
	            case 'event':
	                return '日期';
	            default:
	                return '';
	        }
	    }
	};

/***/ },
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _group = __webpack_require__(166);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var initState = {
	    data: [{
	        id: '',
	        count: 0,
	        name: ''
	    }],
	    groupAllId: [],
	    groupSomeId: [],
	    loadSuccess: false,
	    userId: '',
	    errorTip: '',
	    curGroupId: '',
	    curGroupName: '',
	    count: ''
	};

	module.exports = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	    var action = arguments[1];

	    var newState = void 0;
	    switch (action.type) {
	        case _group.GET_GROUP_SUCCESS:
	            newState = (0, _assign2.default)({}, state, {
	                loadSuccess: true,
	                data: action.payload.data,
	                userId: action.payload.userId,
	                curGroupId: state.curGroupId === '' ? action.payload.data[0].id : state.curGroupId,
	                curGroupName: state.curGroupId === '' ? action.payload.data[0].name : state.curGroupName,
	                count: state.count === '' ? action.payload.data[0].count : state.count
	            });
	            return newState;
	        case _group.GET_GROUP_FAILURE:
	            newState = (0, _assign2.default)({}, state, {
	                loadSuccess: false,
	                errorTip: action.payload.errorTip
	            });
	        case _group.GROUP_CHANGE:
	            newState = (0, _assign2.default)({}, state, {
	                curGroupId: action.payload.id,
	                curGroupName: action.payload.name,
	                count: action.payload.count
	            });
	            return newState;
	        default:
	            return state;
	    }
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GROUP_CHANGE = exports.GET_GROUP_DATA = exports.GET_GROUP_FAILURE = exports.GET_GROUP_SUCCESS = undefined;
	exports.getGroupSuccess = getGroupSuccess;
	exports.getGroupFailure = getGroupFailure;
	exports.getGroupData = getGroupData;
	exports.groupChange = groupChange;

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var GET_GROUP_SUCCESS = exports.GET_GROUP_SUCCESS = 'GET_GROUP_SUCCESS';
	var GET_GROUP_FAILURE = exports.GET_GROUP_FAILURE = 'GET_GROUP_FAILURE';
	var GET_GROUP_DATA = exports.GET_GROUP_DATA = 'GET_GROUP_DATA';
	var GROUP_CHANGE = exports.GROUP_CHANGE = 'GROUP_CHANGE';

	function getGroupSuccess(payload) {
	    return {
	        type: GET_GROUP_SUCCESS,
	        payload: payload
	    };
	}

	function getGroupFailure(payload) {
	    return {
	        type: GET_GROUP_FAILURE,
	        payload: payload
	    };
	}

	function getGroupData(payload) {
	    return function (dispatch, getState) {
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.getContactGroup,
	            method: 'get',
	            type: 'json',
	            data: {},
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    var len = result.returnValue.length;
	                    var userId = result.returnValue[len - 1].userId;
	                    var value = result.returnValue.slice(0, len - 2);
	                    var index = 0;
	                    value.forEach(function (v, i) {
	                        if (v.name === '未分组') {
	                            index = i;
	                        }
	                    });
	                    value.splice(index, 1);
	                    dispatch(getGroupSuccess({ data: value, userId: userId }));
	                } else {
	                    dispatch(getGroupFailure({ errorTip: result.returnMessage }));
	                }
	            },
	            error: function error(success) {
	                dispatch(getGroupFailure({ errorTip: '网络请求错误，请稍后重试' }));
	            }
	        });
	    };
	}

	function groupChange(payload) {
	    return {
	        type: GROUP_CHANGE,
	        payload: payload
	    };
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _reactRedux = __webpack_require__(23);

	var _redux = __webpack_require__(34);

	var _contactList = __webpack_require__(129);

	var listAction = _interopRequireWildcard(_contactList);

	var _group = __webpack_require__(166);

	var groupAction = _interopRequireWildcard(_group);

	var _contact = __webpack_require__(136);

	var contactAction = _interopRequireWildcard(_contact);

	var _head = __webpack_require__(182);

	var _head2 = _interopRequireDefault(_head);

	var _foot = __webpack_require__(277);

	var _foot2 = _interopRequireDefault(_foot);

	var _container = __webpack_require__(279);

	var _container2 = _interopRequireDefault(_container);

	__webpack_require__(333);

	__webpack_require__(334);

	__webpack_require__(276);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var App = function (_Component) {
	    (0, _inherits3.default)(App, _Component);

	    function App(props) {
	        (0, _classCallCheck3.default)(this, App);
	        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
	    }

	    (0, _createClass3.default)(App, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                actions = _props.actions,
	                list = _props.list,
	                group = _props.group,
	                contact = _props.contact;

	            return _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_head2.default, null), _react2.default.createElement(_container2.default, { actions: actions, list: list, group: group, contact: contact }), _react2.default.createElement(_foot2.default, null));
	        }
	    }]);
	    return App;
	}(_react.Component);

	function mapStateToProps(state) {
	    return {
	        list: state.contactList,
	        group: state.group,
	        contact: state.contact
	    };
	}

	function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)((0, _assign2.default)({}, listAction, groupAction, contactAction), dispatch)
	    };
	}

	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */
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

	var _leftWrap = __webpack_require__(280);

	var _leftWrap2 = _interopRequireDefault(_leftWrap);

	var _rightWrap = __webpack_require__(298);

	var _rightWrap2 = _interopRequireDefault(_rightWrap);

	var _checkListPanel = __webpack_require__(326);

	var _checkListPanel2 = _interopRequireDefault(_checkListPanel);

	var _index = __webpack_require__(329);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Container = function (_Component) {
	    (0, _inherits3.default)(Container, _Component);

	    function Container(props) {
	        (0, _classCallCheck3.default)(this, Container);
	        return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));
	    }

	    (0, _createClass3.default)(Container, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                actions = _props.actions,
	                list = _props.list,
	                group = _props.group,
	                contact = _props.contact;

	            var checkFlag = list.checkList.length === 0 ? false : true;
	            return _react2.default.createElement('div', { className: 'flyme-content clearfix', id: 'flymeContent' }, _react2.default.createElement('div', { className: 'flyme-content-body' }, _react2.default.createElement(_index2.default, { type: 'contact' }), _react2.default.createElement(_leftWrap2.default, { actions: actions, list: list, group: group }), _react2.default.createElement(_rightWrap2.default, { checkFlag: checkFlag, contact: contact, list: list, actions: actions, group: group }), _react2.default.createElement(_checkListPanel2.default, { dataType: list.dataType, actions: actions, list: list, checkFlag: checkFlag, group: group })));
	        }
	    }]);
	    return Container;
	}(_react.Component);

	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _index = __webpack_require__(281);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(282);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(284);

	var _index6 = _interopRequireDefault(_index5);

	var _filterWrap = __webpack_require__(288);

	var _filterWrap2 = _interopRequireDefault(_filterWrap);

	var _listItem = __webpack_require__(296);

	var _listItem2 = _interopRequireDefault(_listItem);

	var _util = __webpack_require__(137);

	var _utilDom = __webpack_require__(138);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var LeftWrap = function (_Component) {
	    (0, _inherits3.default)(LeftWrap, _Component);

	    function LeftWrap(props) {
	        (0, _classCallCheck3.default)(this, LeftWrap);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (LeftWrap.__proto__ || (0, _getPrototypeOf2.default)(LeftWrap)).call(this, props));

	        _this2.state = {
	            searchActive: false
	        };
	        return _this2;
	    }

	    (0, _createClass3.default)(LeftWrap, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.actions.getGroupData();
	            this.props.actions.getContactList({
	                group: '全部联系人',
	                start: 0,
	                limit: 20
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (!this.props.list.activeId && this.firstId) {
	                this.props.actions.clickItem({ id: this.firstId });
	                this.props.actions.searchContact({ id: this.firstId });
	            }
	            this.firstId = '';
	        }
	        // 获取排序后的数组

	    }, {
	        key: 'getSortData',
	        value: function getSortData() {
	            var _this = this;
	            var _props$list = this.props.list,
	                data = _props$list.data,
	                checkList = _props$list.checkList,
	                activeId = _props$list.activeId,
	                loadingSuccess = _props$list.loadingSuccess;

	            var showData = (0, _util.getShowDataArray)(data);
	            var tempArray = showData.map(function (v, i) {
	                return (0, _assign2.default)({}, v, {
	                    checked: checkList.indexOf(v.id) > -1,
	                    active: v.id === activeId ? true : false
	                });
	            });
	            var hasActive = tempArray.map(function (v) {
	                return v.active;
	            }).length === tempArray.length ? false : true;
	            var resultArray = (0, _util.getSortListData)(tempArray);
	            if (!hasActive && resultArray.length > 1 && loadingSuccess) {
	                this.firstId = resultArray[1].id;
	            }
	            return resultArray;
	        }
	    }, {
	        key: 'getSearchDataList',
	        value: function getSearchDataList() {
	            var _this = this;
	            var _props$list2 = this.props.list,
	                data = _props$list2.data,
	                checkList = _props$list2.checkList,
	                activeId = _props$list2.activeId,
	                loadingSuccess = _props$list2.loadingSuccess;

	            var showData = (0, _util.getShowDataArray)(data);
	            var resultArray = showData.map(function (v, i) {
	                return (0, _assign2.default)({}, v, {
	                    checked: checkList.indexOf(v.id) > -1,
	                    active: v.id === activeId ? true : false
	                });
	            });
	            var hasActive = resultArray.map(function (v) {
	                return v.active;
	            }).length === resultArray.length ? false : true;
	            if (!hasActive && resultArray.length > 0 && loadingSuccess) {
	                this.firstId = resultArray[0].id;
	            }
	            return resultArray;
	        }
	    }, {
	        key: 'checkAllCallback',
	        value: function checkAllCallback() {
	            this.props.actions.checkAllClick({ check: !this.props.list.checkAll });
	        }
	    }, {
	        key: 'handleScroll',
	        value: function handleScroll() {
	            var _props$list3 = this.props.list,
	                start = _props$list3.start,
	                loading = _props$list3.loading,
	                allData = _props$list3.allData,
	                isSearch = _props$list3.isSearch,
	                searchContent = _props$list3.searchContent;

	            var curGroupName = this.props.group.curGroupName;
	            if (!loading && !allData) {
	                this.props.actions.startLoading();
	                if (isSearch) {
	                    this.props.actions.searchContactList({ append: true, start: start, content: searchContent });
	                } else {
	                    this.props.actions.getContactList({ append: true, start: start, group: curGroupName });
	                }
	            }
	        }
	    }, {
	        key: 'addContact',
	        value: function addContact() {}
	    }, {
	        key: 'activeChange',
	        value: function activeChange(flag) {
	            this.setState({ searchActive: flag });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                actions = _props.actions,
	                list = _props.list,
	                group = _props.group,
	                _this = this;

	            var sortArray = list.isSearch ? this.getSearchDataList() : this.getSortData();
	            var listArray = sortArray.map(function (v, i) {
	                var checkFlag = list.checkList.length > 0 ? true : false;
	                if (v.key) {
	                    return _react2.default.createElement('li', { className: 'sort-key', key: v.key }, v.key);
	                } else {
	                    return _react2.default.createElement(_listItem2.default, { key: v.id, actions: actions, data: v, checkFlag: checkFlag });
	                }
	            });
	            return _react2.default.createElement('div', { className: 'left-wrap' }, _react2.default.createElement('div', { className: 'left-header' }, _react2.default.createElement('span', null, '\u8054\u7CFB\u4EBA'), _react2.default.createElement(_index6.default, {
	                width: 160,
	                hasAngle: true,
	                align: 'left',
	                trigger: 'click',
	                data: [{
	                    value: '导入联系人',
	                    onClick: this.addContact.bind(this)
	                }, {
	                    value: '导出联系人'
	                }, {
	                    value: '刷新'
	                }]
	            }, _react2.default.createElement('a', { className: 'import-contact', href: 'javascript:void(0);', title: '\u66F4\u591A' })), _react2.default.createElement('a', { style: { display: this.state.searchActive ? 'none' : 'block' }, href: 'javascript:void(0);', onClick: this.addContact.bind(this), title: '\u65B0\u5EFA', className: 'add-contact' })), _react2.default.createElement(_filterWrap2.default, {
	                searchInfo: { count: list.searchCount, content: list.searchContent },
	                actions: actions,
	                group: group,
	                activeChange: this.activeChange.bind(this)
	            }), _react2.default.createElement('div', { className: 'left-search-result', style: { display: list.isSearch ? 'block' : 'none' } }, '\u641C\u7D22\u201C', _react2.default.createElement('span', { title: list.searchContent }, (0, _utilDom.subStringLen)(list.searchContent, 16)), '\u201D', _react2.default.createElement('i', null, list.searchCount), '\u4E2A\u7ED3\u679C'), _react2.default.createElement('div', { className: list.isSearch ? 'left-body isSearch' : 'left-body' }, _react2.default.createElement(_index4.default, { dataType: this.props.list.dataType, name: '1', onScroll: this.handleScroll.bind(this) }, _react2.default.createElement('ul', null, listArray))), _react2.default.createElement('div', { className: 'left-chose' }, _react2.default.createElement('div', { className: 'c-choseall' }, _react2.default.createElement(_index2.default, { type: "choseall", checkCallback: this.checkAllCallback.bind(this), id: 'choseall', checked: list.checkAllShow })), _react2.default.createElement('div', { className: 'c-tip' }, '\u5168\u9009')));
	        }
	    }]);
	    return LeftWrap;
	}(_react.Component);

	exports.default = LeftWrap;
	module.exports = exports['default'];

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Checkbox = _react2.default.createClass({
	    displayName: 'Checkbox',

	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        if (this.props.checked != nextProps.checked) {
	            return true;
	        }
	        return false;
	    },
	    checkCallback: function checkCallback(e) {
	        this.props.checkCallback(this.props.id);
	        //冒泡
	        e.stopPropagation();
	    },
	    render: function render() {
	        var classn = 'i-checkbox';
	        if (this.props.checked) {
	            classn += ' checked';
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: classn, ref: 'checkbox', 'data-id': this.props.id, onClick: this.checkCallback, onTouchEnd: this.checkCallback },
	            _react2.default.createElement('i', null)
	        );
	    }
	});

	module.exports = Checkbox;

/***/ },
/* 282 */
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

	__webpack_require__(283);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScrollHelp = function (_Component) {
	    (0, _inherits3.default)(ScrollHelp, _Component);

	    function ScrollHelp(props) {
	        (0, _classCallCheck3.default)(this, ScrollHelp);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollHelp.__proto__ || (0, _getPrototypeOf2.default)(ScrollHelp)).call(this, props));

	        _this.componentDidMount = function () {
	            var scrollContentWrap = _this.refs.scrollContentWrap;
	            _this.opt.scrollBarWidth = scrollContentWrap.offsetWidth - scrollContentWrap.clientWidth;
	            _this.setState({
	                realScrollBarWidth: _this.opt.scrollBarWidth
	            });
	            if (_this.props.botFixed) {
	                _this.opt.botFixed = _this.props.botFixed === "true";
	            }
	            document.addEventListener("mouseup", _this.handleMouseUp.bind(_this));
	            document.addEventListener("mousemove", _this.handleMouseMove.bind(_this));
	        };

	        _this.scrollBarStateChange = function () {
	            var scrollContentWrap = _this.refs.scrollContentWrap;
	            var scrollContent = _this.refs.scrollContent;

	            if (scrollContent.clientHeight < scrollContentWrap.clientHeight) {
	                _this.setState({
	                    needScrollBar: false
	                });
	                return;
	            }

	            _this.opt.wrapHeight = scrollContentWrap.clientHeight;
	            _this.opt.contentHeight = scrollContent.clientHeight;

	            _this.opt.scrollHeight = (_this.opt.wrapHeight / _this.opt.contentHeight * 100).toFixed(2);
	            _this.opt.scrollTop = (scrollContentWrap.scrollTop / _this.opt.contentHeight * 100).toFixed(2);
	            if (parseInt(_this.state.scrollBarBot) == 0 && _this.opt.botFixed == true) {
	                _this.refs.scrollContentWrap.scrollTop = _this.opt.contentHeight;
	                var scrollBarTop = 100 - parseFloat(_this.opt.scrollHeight);
	                var scrollBarBot = 0;
	                _this.setState({
	                    scrollBarTop: scrollBarTop,
	                    scrollBarBot: scrollBarBot,
	                    needScrollBar: true
	                });
	            } else {
	                var _scrollBarTop = parseFloat(_this.opt.scrollTop);
	                var _scrollBarBot = 100 - (parseFloat(_this.opt.scrollHeight) + parseFloat(_this.opt.scrollTop));
	                _this.setState({
	                    scrollBarTop: _scrollBarTop,
	                    scrollBarBot: _scrollBarBot,
	                    needScrollBar: true
	                });
	            }
	        };

	        _this.handleScroll = function () {
	            var scrollTop = _this.refs.scrollContentWrap.scrollTop;
	            var offsetHeight = _this.refs.scrollContentWrap.offsetHeight;
	            var scrollBarTop = _this.refs.scrollContentWrap.scrollTop / _this.opt.contentHeight * 100;
	            var scrollBarBot = 100 - (parseFloat(_this.opt.scrollHeight) + parseFloat(scrollBarTop));
	            if (scrollTop + offsetHeight >= _this.opt.contentHeight - offsetHeight / 4) {
	                if (_this.props.onScroll) _this.props.onScroll();
	            }
	            _this.setState({
	                scrollBarTop: scrollBarTop.toFixed(2),
	                scrollBarBot: scrollBarBot.toFixed(2)
	            });
	        };

	        _this.state = {
	            needScrollBar: false,
	            scrollBarTop: 0,
	            scrollBarBot: 0,
	            realScrollBarWidth: 0,
	            scrollBarWidth: 6,
	            scrollWrapColor: "transparent",
	            scrollBarColor: "rgba(193,193,193,0.6)"
	        };
	        _this.opt = {
	            scrollBarWidth: 0,
	            shouldUpdate: true,
	            wrapHeight: 0,
	            contentHeight: 0,
	            scrollHeight: 0,
	            scrollTop: 0,
	            mouseDown: false,
	            startPos: 0,
	            changePos: 0,
	            botFixed: false
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(ScrollHelp, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (nextProps.isFetching !== this.props.isFetching && this.props.name !== nextProps.name) {
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.opt.shouldUpdate = true;

	            //过滤掉特殊形态
	            if (nextProps.dataType == 'origin' && nextProps.isFetching === this.props.isFetching) {
	                this.refs.scrollContentWrap.scrollTop = 0;
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (!this.opt.shouldUpdate) return;
	            this.scrollBarStateChange();
	            this.opt.shouldUpdate = false;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            document.removeEventListener("mouseup", this.handleMouseUp.bind(this));
	            document.removeEventListener("mousemove", this.handleMouseMove.bind(this));
	        }
	    }, {
	        key: 'getScrollTop',
	        value: function getScrollTop() {
	            return this.refs.scrollContentWrap.scrollTop;
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            this.opt.mouseDown = true;
	            this.opt.startPos = e.clientY;
	        }
	    }, {
	        key: 'handleMouseMove',
	        value: function handleMouseMove(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            if (!this.opt.mouseDown) return;
	            this.opt.changePos = this.opt.startPos - e.clientY;
	            this.opt.startPos = e.clientY;
	            this.refs.scrollContentWrap.scrollTop -= this.opt.changePos * this.opt.contentHeight / this.opt.wrapHeight;
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp() {
	            if (!this.opt.mouseDown) return;
	            this.opt.mouseDown = false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var scrollBar = "";
	            if (this.state.needScrollBar) {
	                scrollBar = _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'scrollBarWrap',
	                        style: {
	                            width: this.state.scrollBarWidth + "px",
	                            borderRadius: this.state.scrollBarWidth / 2 + "px",
	                            backgroundColor: this.state.scrollWrapColor
	                        }
	                    },
	                    _react2.default.createElement('div', {
	                        className: 'scrollBar',
	                        style: {
	                            top: this.state.scrollBarTop + "%",
	                            bottom: this.state.scrollBarBot + "%",
	                            backgroundColor: this.state.scrollBarColor
	                        },
	                        onMouseDown: this.handleMouseDown.bind(this)
	                    })
	                );
	            } else {
	                scrollBar = _react2.default.createElement('div', {
	                    className: 'scrollBarWrap',
	                    style: {
	                        width: "8px",
	                        backgroundColor: this.state.scrollWrapColor
	                    }
	                });
	            }
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: 'scrollBoxWrap', ref: 'scrollWrap'
	                },
	                scrollBar,
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'scrollContentWrap',
	                        ref: 'scrollContentWrap',
	                        onScroll: this.handleScroll.bind(this),
	                        style: {
	                            right: "-" + this.state.realScrollBarWidth + "px"
	                        }
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            className: 'scrollContent',
	                            ref: 'scrollContent'
	                        },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);
	    return ScrollHelp;
	}(_react.Component);

	exports.default = ScrollHelp;
	module.exports = exports['default'];

/***/ },
/* 283 */
185,
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _drop = __webpack_require__(285);

	var _drop2 = _interopRequireDefault(_drop);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SimpleDropdown = function (_Component) {
	    (0, _inherits3.default)(SimpleDropdown, _Component);

	    function SimpleDropdown(props) {
	        (0, _classCallCheck3.default)(this, SimpleDropdown);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (SimpleDropdown.__proto__ || (0, _getPrototypeOf2.default)(SimpleDropdown)).call(this, props));

	        _this2.bindEvent = function (e) {
	            if (e.target === _this2.refs.children || _this2.refs.children.contains(e.target)) {
	                return;
	            }
	            if (_this2.show) {
	                _this2.show = false;
	                _this2.renderDropdown(false);
	            }
	        };

	        _this2.state = {
	            data: [],
	            isSelect: false,
	            menu: null,
	            trigger: 'click',
	            align: 'left',
	            hasAngle: false,
	            style: { width: 160 },
	            btns: []
	        };
	        _this2.show = false;
	        return _this2;
	    }

	    (0, _createClass3.default)(SimpleDropdown, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var obj = {};
	            for (var k in this.state) {
	                if (this.props[k]) {
	                    this.state[k] = this.props[k];
	                }
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var o = {},
	                _this = this;
	            for (var k in this.props) {
	                if (k !== 'children' && k !== 'menu') {
	                    if (nextProps[k] !== this.props[k]) {
	                        o[k] = nextProps[k];
	                    }
	                }
	            }
	            if (this.props.menu && nextProps.menu) {
	                o['menu'] = nextProps['menu'];
	            }
	            this.setState(o, function () {
	                if (_this.show) {
	                    _this.renderDropdown(true);
	                }
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.show = false;
	            this.initEvent();
	            this.popup = document.createElement('div');
	            if (!this.popupId) {
	                this.popupId = this.getRandomKey();
	                this.popup.id = this.popupId;
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var dom = document.getElementById(this.popupId);
	            if (dom) {
	                _reactDom2.default.unmountComponentAtNode(this.popup);
	                document.body.removeChild(this.popup);
	                this.popupId = null;
	            }
	            _utilDom2.default.offEvent(document, 'click', this.bindEvent);
	        }
	    }, {
	        key: 'getRandomKey',
	        value: function getRandomKey() {
	            var array = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
	            var result = [];
	            for (var i = 0; i < 15; i++) {
	                var index = parseInt(Math.random() * 35);
	                result.push(array[index]);
	            }
	            return result.join('');
	        }
	    }, {
	        key: 'initEvent',
	        value: function initEvent() {
	            var _this = this;
	            _utilDom2.default.onEvent(window, 'resize', function () {
	                if (_this.show) {
	                    _this.renderDropdown(true);
	                }
	            });

	            if (this.state.trigger === 'click' || this.state.trigger === 'click|hover' || this.state.trigger === 'hover|click') {
	                _utilDom2.default.onEvent(document, 'click', this.bindEvent);
	            }
	        }
	    }, {
	        key: 'getDropStyle',
	        value: function getDropStyle() {
	            var childOffset = _utilDom2.default.getOffset(this.refs.children);
	            var childSize = {
	                width: _utilDom2.default.outerWidth(this.refs.children),
	                height: _utilDom2.default.outerHeight(this.refs.children)
	            };
	            var left = childOffset.left;
	            var alignHash = {
	                left: 10,
	                center: parseInt(this.state.style.width) / 2 - childSize.width / 2,
	                // right: parseInt(this.state.style.width) + childSize.width + 10,
	                right: parseInt(this.state.style.width) - childSize.width
	            };
	            left -= alignHash[this.state.align];
	            var style = this.state.style;
	            return (0, _assign2.default)({}, style, {
	                top: childOffset.top + childSize.height + (this.state.hasAngle ? 10 : 7),
	                left: left
	            });
	        }
	    }, {
	        key: 'renderDropdown',
	        value: function renderDropdown(visible) {
	            document.body.appendChild(this.popup);
	            var offset = _utilDom2.default.getOffset(this.refs.children);
	            _reactDom2.default.render(_react2.default.createElement(_drop2.default, {
	                visible: visible,
	                id: this.popupId,
	                changeVisible: this.changeShow.bind(this),
	                style: this.getDropStyle(),
	                hasAngle: this.state.hasAngle,
	                align: this.state.align,
	                data: this.state.data,
	                menu: this.state.menu,
	                trigger: this.state.trigger,
	                isSelect: this.state.isSelect,
	                parent: {
	                    width: _utilDom2.default.outerWidth(this.refs.children),
	                    height: _utilDom2.default.outerHeight(this.refs.children),
	                    top: offset.top,
	                    left: offset.left
	                },
	                btns: this.state.btns
	            }), this.popup);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(e) {
	            if (this.state.trigger.indexOf('click') < 0) {
	                return;
	            }
	            this.show = !this.show;
	            this.renderDropdown(this.show);
	        }
	    }, {
	        key: 'handleMouseEnter',
	        value: function handleMouseEnter(e) {
	            if (this.state.trigger.indexOf('click') > -1) {
	                return;
	            }
	            if (!this.show) {
	                this.show = true;
	                this.renderDropdown(this.show);
	            }
	        }
	    }, {
	        key: 'changeShow',
	        value: function changeShow(flag) {
	            this.show = flag;
	            this.renderDropdown(this.show);
	        }
	    }, {
	        key: 'handleMouseLeave',
	        value: function handleMouseLeave(e) {
	            if (this.state.trigger.indexOf('hover') < 0) {
	                return;
	            }
	            var movePointY = e.pageY;
	            var bottomTop = _utilDom2.default.getOffset(e.target).top + _utilDom2.default.height(e.target);
	            if (movePointY < bottomTop && this.show) {
	                this.show = false;
	                this.renderDropdown(this.show);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var id = this.getRandomKey();
	            return (0, _react.cloneElement)(this.props.children, {
	                onClick: this.handleClick.bind(this),
	                onMouseLeave: this.handleMouseLeave.bind(this),
	                onMouseEnter: this.handleMouseEnter.bind(this),
	                ref: 'children',
	                id: id
	            });
	        }
	    }]);
	    return SimpleDropdown;
	}(_react.Component);

	exports.default = SimpleDropdown;
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _index = __webpack_require__(282);

	var _index2 = _interopRequireDefault(_index);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	__webpack_require__(286);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dropdown = function (_Component) {
	    (0, _inherits3.default)(Dropdown, _Component);

	    function Dropdown(props) {
	        (0, _classCallCheck3.default)(this, Dropdown);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(this, props));

	        _this2.state = {
	            show: false,
	            height: 0
	        };
	        _this2.scrollTop = 0;
	        return _this2;
	    }

	    (0, _createClass3.default)(Dropdown, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.state.height = this.props.menu ? this.props.menu.length > 10 ? 400 : this.props.menu.length * 40 + 3 : this.getDropdownHeight(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var height = nextProps.menu ? nextProps.menu.length > 10 ? 400 : nextProps.menu.length * 40 + 3 : this.getDropdownHeight(nextProps);
	            this.setState({ height: height });
	            this.refs.scroll.refs.scrollContentWrap.scrollTop = this.scrollTop;
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (!this.props.visible && this.state.show) {
	                this.scrollTop = 0;
	            }
	        }
	    }, {
	        key: 'getDropdownHeight',
	        value: function getDropdownHeight(props) {
	            var _props$style = props.style,
	                height = _props$style.height,
	                maxHeight = _props$style.maxHeight;
	            var menu = props.menu,
	                data = props.data;

	            var arr = menu ? menu : data,
	                len = arr.length;
	            if (height) {
	                return height;
	            }
	            if (maxHeight > 402) {
	                return len > 10 ? 402 : len * 40 + 3;
	            } else {
	                return len * 40 > maxHeight ? maxHeight : len * 40 + 1;
	            }
	        }
	    }, {
	        key: 'handleAnimationEnd',
	        value: function handleAnimationEnd() {
	            this.setState({ show: this.props.visible });
	        }
	    }, {
	        key: 'handleMouseLeave',
	        value: function handleMouseLeave(e) {
	            if (this.props.trigger === 'click') {
	                return;
	            }
	            var _this = this,
	                movePointY = e.pageY,
	                top = this.props.style.top;
	            if (movePointY > top) {
	                setTimeout(function () {
	                    _this.props.changeVisible(false);
	                }, 200);
	            } else {
	                var movePointX = e.pageX;
	                var parentW = this.props.parent.width;
	                var parentL = this.props.parent.left;
	                if (movePointX > parentL + parentW || movePointX < parentL) {
	                    setTimeout(function () {
	                        _this.props.changeVisible(false);
	                    }, 200);
	                }
	            }
	        }
	    }, {
	        key: 'getContent',
	        value: function getContent() {
	            var _props = this.props,
	                menu = _props.menu,
	                data = _props.data;

	            if (menu) {
	                return menu;
	            }
	            var array = data.map(function (v, i) {
	                return _react2.default.createElement(
	                    'li',
	                    { className: v.className || 'sync-dropdown-item', onClick: v.onClick || null, style: v.style || {}, key: i },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        v.value
	                    )
	                );
	            });
	            return array;
	        }
	    }, {
	        key: 'getClassName',
	        value: function getClassName() {
	            var visible = this.props.visible,
	                show = this.state.show;
	            var preCls = 'sync',
	                dropdownClass = '';
	            if (visible) {
	                return show ? preCls + '-dropdown ' + dropdownClass : preCls + '-dropdown ' + dropdownClass + ' animated time02 fade-in-min-down';
	            } else {
	                return preCls + '-dropdown ' + dropdownClass + ' animated time02 fade-in-min-downOut';
	            }
	        }
	    }, {
	        key: 'handleScroll',
	        value: function handleScroll(d) {
	            this.scrollTop = d;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props,
	                hasAngle = _props2.hasAngle,
	                align = _props2.align,
	                visible = _props2.visible,
	                style = _props2.style,
	                id = _props2.id,
	                btns = _props2.btns,
	                show = this.state.show;

	            var classn = this.getClassName();
	            var dropStyle = (0, _assign2.default)({}, style, { display: visible ? 'block' : this.state.show ? 'block' : 'none' });
	            var content = this.getContent();
	            if (btns && btns.length > 0) {
	                return _react2.default.createElement(
	                    'div',
	                    { ref: 'dropdown', className: classn, style: dropStyle, onMouseLeave: this.handleMouseLeave.bind(this), onAnimationEnd: this.handleAnimationEnd.bind(this) },
	                    _react2.default.createElement('i', { className: "sync-dropdown-icon " + align }),
	                    _react2.default.createElement(
	                        'div',
	                        { ref: 'menuWrap', style: { height: this.state.height } },
	                        _react2.default.createElement(
	                            _index2.default,
	                            { ref: 'scroll', name: 'dropdown' + id, realTimeScroll: this.handleScroll.bind(this) },
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                content
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { ref: 'btnWrap', className: 'sync-btn-wrap' },
	                        btns.map(function (v, i) {
	                            return _react2.default.createElement(
	                                'span',
	                                { key: i, style: v.style || {}, className: v.className || '', onClick: v.onClick },
	                                v.value
	                            );
	                        })
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { ref: 'dropdown', className: classn, style: dropStyle, onMouseLeave: this.handleMouseLeave.bind(this), onAnimationEnd: this.handleAnimationEnd.bind(this) },
	                    _react2.default.createElement('i', { className: "sync-dropdown-icon " + align }),
	                    _react2.default.createElement(
	                        'div',
	                        { ref: 'menuWrap', style: { height: this.state.height } },
	                        _react2.default.createElement(
	                            _index2.default,
	                            { ref: 'scroll', name: 'dropdown' + id, realTimeScroll: this.handleScroll.bind(this) },
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                content
	                            )
	                        )
	                    )
	                );
	            }
	        }
	    }]);
	    return Dropdown;
	}(_react.Component);

	exports.default = Dropdown;
	module.exports = exports['default'];

/***/ },
/* 286 */
185,
/* 287 */,
/* 288 */
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

	var _LeftGroupWrap = __webpack_require__(289);

	var _LeftGroupWrap2 = _interopRequireDefault(_LeftGroupWrap);

	var _Search = __webpack_require__(291);

	var _Search2 = _interopRequireDefault(_Search);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var FilterWrap = function (_Component) {
	    (0, _inherits3.default)(FilterWrap, _Component);

	    function FilterWrap(props) {
	        (0, _classCallCheck3.default)(this, FilterWrap);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (FilterWrap.__proto__ || (0, _getPrototypeOf2.default)(FilterWrap)).call(this, props));

	        _this.state = {
	            active: false
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(FilterWrap, [{
	        key: 'activeChange',
	        value: function activeChange(flag) {
	            this.setState({ active: flag });
	            this.props.activeChange(flag);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                group = _props.group,
	                searchInfo = _props.searchInfo,
	                actions = _props.actions;

	            return _react2.default.createElement('div', { className: this.state.active ? 'left-filter-wrap active clearfix' : 'left-filter-wrap clearfix' }, _react2.default.createElement(_Search2.default, { searchInfo: searchInfo, actions: actions, activeChange: this.activeChange.bind(this) }), _react2.default.createElement('div', { className: 'left-group clearfix' }, _react2.default.createElement(_LeftGroupWrap2.default, { group: group, actions: actions })));
	        }
	    }]);
	    return FilterWrap;
	}(_react.Component);

	exports.default = FilterWrap;
	module.exports = exports['default'];

/***/ },
/* 289 */
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

	var _leftGroupItem = __webpack_require__(290);

	var _leftGroupItem2 = _interopRequireDefault(_leftGroupItem);

	var _index = __webpack_require__(284);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(282);

	var _index4 = _interopRequireDefault(_index3);

	var _utilDom = __webpack_require__(138);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var LeftGroupWrap = function (_Component) {
	    (0, _inherits3.default)(LeftGroupWrap, _Component);

	    function LeftGroupWrap(props) {
	        (0, _classCallCheck3.default)(this, LeftGroupWrap);
	        return (0, _possibleConstructorReturn3.default)(this, (LeftGroupWrap.__proto__ || (0, _getPrototypeOf2.default)(LeftGroupWrap)).call(this, props));
	    }

	    (0, _createClass3.default)(LeftGroupWrap, [{
	        key: 'itemChange',
	        value: function itemChange(group) {
	            var groupInfo = group[0].split('|'),
	                groupId = groupInfo[0],
	                groupName = groupInfo[1],
	                groupCount = groupInfo[2];
	            this.props.actions.groupChange({ name: groupName, count: groupCount, id: groupId });
	            this.props.actions.searchChangeReset();
	            this.props.actions.getContactList({ start: 0, limit: 20, group: groupName });
	        }
	    }, {
	        key: 'newGroup',
	        value: function newGroup(e) {
	            e.nativeEvent.stopImmediatePropagation();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var group = this.props.group;
	            var selectKey = group.curGroupId + '|' + group.curGroupName;
	            var groupList = group.data.map(function (v, i) {
	                return _react2.default.createElement(_leftGroupItem2.default, { data: v, key: v.id, selected: v.id === group.curGroupId, canEdit: i == 0 || i == 1 || i == group.data.length - 1 ? false : true });
	            });
	            var menu = _react2.default.createElement('div', { className: 'left-group-content', style: { height: (groupList.length < 10 ? 40 * groupList.length : 400) + 50 } }, _react2.default.createElement('div', { className: 'left-group-list' }, _react2.default.createElement(_index4.default, { dataType: 'origin', name: '1' }, _react2.default.createElement('ul', null, groupList))), _react2.default.createElement('div', { className: 'drop-btn-wrap' }, _react2.default.createElement('span', { className: 'drop-btn new-group', onClick: this.newGroup.bind(this) }, '\u65B0\u5EFA\u7FA4\u7EC4')));
	            return _react2.default.createElement('div', { className: 'list-header-left' }, _react2.default.createElement('i', null), _react2.default.createElement(_index2.default, {
	                width: 220,
	                align: 'left',
	                hasAngle: true,
	                menu: menu
	            }, _react2.default.createElement('span', { className: 'sel-input' }, (0, _utilDom.subStringLen)(group.curGroupName, 16), '(', group.count, ')')));
	        }
	    }]);
	    return LeftGroupWrap;
	}(_react.Component);

	exports.default = LeftGroupWrap;
	module.exports = exports['default'];

/***/ },
/* 290 */
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

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var LeftGroupItem = function (_Component) {
	    (0, _inherits3.default)(LeftGroupItem, _Component);

	    function LeftGroupItem(props) {
	        (0, _classCallCheck3.default)(this, LeftGroupItem);
	        return (0, _possibleConstructorReturn3.default)(this, (LeftGroupItem.__proto__ || (0, _getPrototypeOf2.default)(LeftGroupItem)).call(this, props));
	    }

	    (0, _createClass3.default)(LeftGroupItem, [{
	        key: 'handleEdit',
	        value: function handleEdit(e) {
	            e.nativeEvent.stopImmediatePropagation();
	            (0, _utilDom.stopPropagation)(e);
	        }
	    }, {
	        key: 'handleDel',
	        value: function handleDel(e) {
	            e.nativeEvent.stopImmediatePropagation();
	            (0, _utilDom.stopPropagation)(e);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(data) {
	            console.log(data);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                data = _props.data,
	                canEdit = _props.canEdit,
	                selected = _props.selected;

	            var classn = 'group-item';
	            if (canEdit) {
	                classn += ' edit';
	            }
	            if (selected) {
	                classn += ' selected';
	            }
	            return _react2.default.createElement('li', { className: classn, onClick: this.handleClick.bind(this, data) }, _react2.default.createElement('span', { title: data.name }, (0, _utilDom.subStringLen)(data.name, 10)), _react2.default.createElement('span', { title: data.count }, '(', data.count, ')'), _react2.default.createElement('i', { className: 'check-group-icon' }), _react2.default.createElement('i', { className: 'edit-group-icon', onClick: this.handleEdit.bind(this) }), _react2.default.createElement('i', { className: 'del-group-icon', onClick: this.handleDel.bind(this) }));
	        }
	    }]);
	    return LeftGroupItem;
	}(_react.Component);

	exports.default = LeftGroupItem;
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _is = __webpack_require__(292);

	var _is2 = _interopRequireDefault(_is);

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

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var SearchComponent = function (_Component) {
	    (0, _inherits3.default)(SearchComponent, _Component);

	    function SearchComponent(props) {
	        (0, _classCallCheck3.default)(this, SearchComponent);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (SearchComponent.__proto__ || (0, _getPrototypeOf2.default)(SearchComponent)).call(this, props));

	        _this2.state = {
	            tip: '搜索',
	            value: ''
	        };
	        return _this2;
	    }

	    (0, _createClass3.default)(SearchComponent, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (!(0, _is2.default)(this.state, nextState)) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(e) {
	            var _this = this;
	            setTimeout(function () {
	                if (_this.state.value === '') {
	                    if (_this.props.searchInfo.content !== '') {
	                        if (!_this.clear) {
	                            _this.setState({ tip: '搜索' });
	                            _this.props.actions.searchChangeReset();
	                            _this.props.actions.changeSearchFlag({ isSearch: false });
	                            _this.props.actions.getContactList({ group: '全部联系人', start: 0, limit: 20 });
	                            _this.props.activeChange(false);
	                        } else {
	                            _this.clear = false;
	                            _this.refs.input.focus();
	                        }
	                    } else {
	                        if (!_this.clear) {
	                            _this.setState({ tip: '搜索' });
	                            _this.props.activeChange(false);
	                        } else {
	                            _this.clear = false;
	                        }
	                    }
	                    return;
	                }
	                var value = _this.state.value;
	                if (value === _this.props.searchInfo.content) {
	                    return;
	                }
	                _this.props.actions.searchChangeReset();
	                _this.props.actions.changeSearchFlag({ isSearch: true });
	                _this.props.actions.searchContactList({ content: value, start: 0, limit: 20 });
	                _this.props.actions.searchCount({ content: value });
	            }, 100);
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus(e) {
	            this.setState({
	                tip: this.state.value === '' ? '请输入搜索内容' : ''
	            });
	            this.props.activeChange(true);
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            var value = e.target.value;
	            if (value !== '') {
	                this.setState({
	                    tip: '',
	                    value: value
	                });
	            } else {
	                this.setState({
	                    tip: '请输入搜索内容',
	                    value: value
	                });
	            }
	            if (this.props.searchInfo.content === '') {
	                this.clear = false;
	            }
	        }
	    }, {
	        key: 'handleClear',
	        value: function handleClear() {
	            var _this3 = this;

	            this.clear = true;
	            if (this.state.value === '') {
	                this.setState({ tip: '搜索', value: '' });
	                this.props.activeChange(false);
	                this.clear = false;
	                return;
	            } else {
	                this.setState({
	                    tip: '请输入搜索内容',
	                    value: ''
	                }, function () {
	                    _this3.refs.input.focus();
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { className: 'left-search' }, _react2.default.createElement('div', { className: 'search-wrap clearfix' }, _react2.default.createElement('i', { className: 'search-exec', title: '\u641C\u7D22' }), _react2.default.createElement('input', { ref: 'input', className: 'search-input', value: this.state.value, autoComplete: 'off', type: 'text', maxLength: '100', onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this), onFocus: this.handleFocus.bind(this) }), _react2.default.createElement('i', { className: 'search-clear', title: '\u6E05\u7A7A\u641C\u7D22', onClick: this.handleClear.bind(this) }), _react2.default.createElement('span', { className: 'input-default-tip' }, this.state.tip)));
	        }
	    }]);
	    return SearchComponent;
	}(_react.Component);

	exports.default = SearchComponent;
	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(293), __esModule: true };

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(294);
	module.exports = __webpack_require__(80).Object.is;

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(78);
	$export($export.S, 'Object', {is: __webpack_require__(295)});

/***/ },
/* 295 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 296 */
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

	var _index = __webpack_require__(281);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(297);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var ListItem = function (_Component) {
	    (0, _inherits3.default)(ListItem, _Component);

	    function ListItem(props) {
	        (0, _classCallCheck3.default)(this, ListItem);
	        return (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call(this, props));
	    }

	    (0, _createClass3.default)(ListItem, [{
	        key: 'checkCallback',
	        value: function checkCallback(id) {
	            this.props.actions.checkItem({
	                id: id,
	                checkFlag: !this.props.data.checked
	            });
	        }
	    }, {
	        key: 'showDetail',
	        value: function showDetail(id) {
	            if (!this.props.checkFlag && !this.props.data.active) {
	                this.props.actions.clickItem({ id: id });
	                this.props.actions.searchContact({ id: id });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var data = this.props.data;
	            var itemClass = 'item';
	            if (data.checked) {
	                itemClass += ' multi';
	            }
	            if (data.active) {
	                itemClass += ' active';
	            }
	            return _react2.default.createElement('li', { className: itemClass, onClick: this.showDetail.bind(this, data.id) }, _react2.default.createElement(_index4.default, { type: data.hasPhoto, id: data.id, name: data.defaultText }), _react2.default.createElement('span', { className: 'contact-item-name' }, data.displayName), _react2.default.createElement(_index2.default, { checkCallback: this.checkCallback.bind(this), id: data.id, checked: data.checked }));
	        }
	    }]);
	    return ListItem;
	}(_react.Component);

	exports.default = ListItem;
	module.exports = exports['default'];

/***/ },
/* 297 */
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
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _editField = __webpack_require__(299);

	var _editField2 = _interopRequireDefault(_editField);

	var _util = __webpack_require__(137);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var RightWrap = function (_Component) {
	    (0, _inherits3.default)(RightWrap, _Component);

	    function RightWrap(props) {
	        (0, _classCallCheck3.default)(this, RightWrap);
	        return (0, _possibleConstructorReturn3.default)(this, (RightWrap.__proto__ || (0, _getPrototypeOf2.default)(RightWrap)).call(this, props));
	    }

	    (0, _createClass3.default)(RightWrap, [{
	        key: 'getContactDetail',
	        value: function getContactDetail() {
	            var idList = this.props.list.idList;
	            var data = this.props.contact.data;
	            var index = idList.indexOf(data.uuid);
	            var selectOne = index > -1 ? (0, _util.getShowDataArray)([].concat(this.props.list.data[index]))[0] : {};
	            var result = (0, _assign2.default)({}, data, {
	                defaultText: selectOne.defaultText || ' ',
	                hasPhoto: selectOne.hasPhoto || false,
	                nopicClass: selectOne.nopicClass || 'i-avata color' + parseInt(Math.random() * 7 + 1),
	                portrait: selectOne.portrait || ''
	            });
	            return result;
	        }
	    }, {
	        key: 'saveContact',
	        value: function saveContact() {}
	    }, {
	        key: 'editContact',
	        value: function editContact() {
	            this.props.actions.changeEditModel({ isEdit: true });
	        }
	    }, {
	        key: 'cancelEdit',
	        value: function cancelEdit() {
	            this.props.actions.changeEditModel({ isEdit: false });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var data = this.getContactDetail();
	            var isEdit = this.props.contact.isEdit;
	            var rightBody = data.id !== '' ? _react2.default.createElement(_editField2.default, { group: this.props.group, actions: this.props.actions, data: data, isEdit: isEdit }) : _react2.default.createElement('div', { className: 'right-body' });
	            return _react2.default.createElement('div', { className: isEdit ? 'right-wrap edit' : 'right-wrap', style: { display: this.props.checkFlag ? 'none' : 'block' } }, _react2.default.createElement('div', { className: 'right-header clearfix' }, _react2.default.createElement('a', { className: 'c-btn cancel-btn', href: 'javascript:void(0);', onClick: this.cancelEdit.bind(this), style: { display: isEdit ? 'block' : 'none' } }, '\u53D6\u6D88'), _react2.default.createElement('a', { className: 'c-btn save-btn', href: 'javascript:void(0);', onClick: this.saveContact.bind(this), style: { display: isEdit ? 'block' : 'none' } }, '\u4FDD\u5B58'), _react2.default.createElement('a', { className: 'c-btn edit-btn', href: 'javascript:void(0);', onClick: this.editContact.bind(this), style: { display: isEdit ? 'none' : 'block' } }, '\u7F16\u8F91')), rightBody);
	        }
	    }]);
	    return RightWrap;
	}(_react.Component);

	exports.default = RightWrap;
	module.exports = exports['default'];

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _set = __webpack_require__(300);

	var _set2 = _interopRequireDefault(_set);

	var _from = __webpack_require__(70);

	var _from2 = _interopRequireDefault(_from);

	var _getIterator2 = __webpack_require__(315);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

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

	var _index = __webpack_require__(282);

	var _index2 = _interopRequireDefault(_index);

	var _detailHead = __webpack_require__(318);

	var _detailHead2 = _interopRequireDefault(_detailHead);

	var _companyGroup = __webpack_require__(321);

	var _companyGroup2 = _interopRequireDefault(_companyGroup);

	var _detailList = __webpack_require__(323);

	var _detailList2 = _interopRequireDefault(_detailList);

	var _addProject = __webpack_require__(325);

	var _addProject2 = _interopRequireDefault(_addProject);

	var _util = __webpack_require__(137);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var EditField = function (_Component) {
	    (0, _inherits3.default)(EditField, _Component);

	    function EditField(props) {
	        (0, _classCallCheck3.default)(this, EditField);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (EditField.__proto__ || (0, _getPrototypeOf2.default)(EditField)).call(this, props));

	        _this.state = {
	            data: {},
	            project: []
	        };
	        return _this;
	    }
	    // 初始化


	    (0, _createClass3.default)(EditField, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var data = this.props.data;
	            var typeArray = ['tel', 'email', 'addr', 'im', 'web', 'event'];
	            var allProject = ['手机', '邮件', '地址', '即时信息', '网站', '日期', '备注'];
	            var newData = {};
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(typeArray), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var i = _step.value;

	                    var list = this.props.data[i + 'List'];
	                    newData[i + 'List'] = list.length > 0 ? this.getNewTypeList(i, list) : list;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            if (newData.telList.length === 0) {
	                newData.telList = this.getNewTypeList('tel', newData.telList);
	            }
	            this.state.data = (0, _assign2.default)({}, data, newData);
	        }
	        // 更新state

	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var data = nextProps.data;
	            var typeArray = ['tel', 'email', 'im', 'event', 'addr', 'web'];
	            var allProject = ['手机', '邮件', '地址', '即时信息', '网站', '社交账号', '日期', '备注'];
	            var newData = {};
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = (0, _getIterator3.default)(typeArray), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var i = _step2.value;

	                    var list = this.props.data[i + 'List'];
	                    newData[i + 'List'] = list.length > 0 ? this.getNewTypeList(i, list) : list;
	                    if (list.length > 0) {
	                        var index = allProject.indexOf(i);
	                        allProject.splice(index, 1);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            if (newData.telList.length === 0) {
	                newData.telList = this.getNewTypeList('tel', newData.telList);
	            }
	            if (allProject[0] === '手机') {
	                allProject.shift();
	            }
	            this.setState({
	                data: (0, _assign2.default)({}, data, newData),
	                project: allProject
	            });
	        }
	        // 辅助函数，获取新的state中的各项列表

	    }, {
	        key: 'getNewTypeList',
	        value: function getNewTypeList(type, list) {
	            var array = (0, _from2.default)(list); // 复制一份
	            var customList = (0, _util.getTypeCustomList)(type),
	                defaultValue = (0, _util.getDefaultValue)(type);
	            var set = new _set2.default(customList);
	            list.forEach(function (v, i) {
	                set.delete(v.custom);
	            });
	            var arr = (0, _from2.default)(set);
	            if (arr.length === 0) {
	                array.push({
	                    custom: '自定义',
	                    value: defaultValue
	                });
	            } else {
	                array.push({
	                    custom: arr[0],
	                    value: defaultValue
	                });
	            }
	            return array;
	        }
	        // value和custom变化时改变state内容

	    }, {
	        key: 'changeValue',
	        value: function changeValue(key, value) {
	            // 改变data的内容
	            var changePart = {};
	            changePart[key] = value;
	            var newData = (0, _assign2.default)({}, this.state.data, changePart);
	            this.setState({
	                data: newData
	            });
	        }
	        // 项目置顶

	    }, {
	        key: 'topItem',
	        value: function topItem(type, index) {
	            var data = this.state.data,
	                changePart = {};
	            var list = data[type + 'List'];
	            var temp = list[index];
	            list.splice(index, 1);
	            list.unshift(temp);
	            changePart[type + 'List'] = list;
	            this.setState({
	                data: (0, _assign2.default)({}, this.state.data, changePart)
	            });
	        }
	        // 自动增加某个类型的列表项

	    }, {
	        key: 'addItem',
	        value: function addItem(type) {
	            var data = this.state.data,
	                changePart = {};
	            var list = data[type + 'List'];
	            var newList = this.getNewTypeList(type, list);
	            changePart[type + 'List'] = newList;
	            this.setState({
	                data: (0, _assign2.default)({}, data, changePart)
	            });
	        }
	        // 删除某个类型的列表项

	    }, {
	        key: 'delItem',
	        value: function delItem(type, index) {
	            var data = this.state.data,
	                changePart = {};
	            var list = data[type + 'List'];
	            var temp = list.splice(index, 1)[0];
	            if (list.length === 0) {
	                var customData = (0, _util.getTypeCustomList)(type);
	                list.push({
	                    custom: customData[0],
	                    value: (0, _util.getDefaultValue)(type)
	                });
	            }
	            changePart[type + 'List'] = list;

	            this.setState({
	                data: (0, _assign2.default)({}, data, changePart)
	            });
	        }
	        // 获取列表渲染结果

	    }, {
	        key: 'getDetailList',
	        value: function getDetailList() {
	            var _state$data = this.state.data,
	                telList = _state$data.telList,
	                emailList = _state$data.emailList,
	                addrList = _state$data.addrList,
	                imList = _state$data.imList,
	                eventList = _state$data.eventList,
	                webList = _state$data.webList;

	            var detailArray = [];
	            var typeArray = ['tel', 'email', 'addr', 'im', 'web', 'event'];
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = (0, _getIterator3.default)(typeArray), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var i = _step3.value;

	                    var list = this.state.data[i + 'List'];
	                    if (list.length > 0) {
	                        detailArray.push(_react2.default.createElement(_detailList2.default, { data: list, addItem: this.addItem.bind(this), topItem: this.topItem.bind(this), delItem: this.delItem.bind(this), changeValue: this.changeValue.bind(this), isEdit: this.props.isEdit, key: i, type: i }));
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            return detailArray;
	        }
	        // 添加某一项

	    }, {
	        key: 'addProject',
	        value: function addProject(type, name) {
	            var _state = this.state,
	                data = _state.data,
	                project = _state.project;

	            if (type !== 'remark') {
	                data[type + 'List'] = this.getNewTypeList(type, data[type + 'List']);
	                project.splice(project.indexOf(name), 1);
	            }
	            this.setState({
	                data: data,
	                project: project
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                isEdit = _props.isEdit,
	                group = _props.group,
	                data = this.state.data;

	            var detailArray = this.getDetailList();
	            return _react2.default.createElement('div', { className: isEdit ? 'right-body edit-mode' : 'right-body' }, _react2.default.createElement(_index2.default, null, _react2.default.createElement(_detailHead2.default, { changeValue: this.changeValue.bind(this), displayName: data.displayName, isEdit: isEdit, hasPhoto: data.hasPhoto, id: data.id, defaultText: data.defaultText, star: data.star }), _react2.default.createElement(_companyGroup2.default, { isEdit: isEdit, group: group, changeValue: this.changeValue.bind(this), company: data.company, groupList: data.groupList }), detailArray, _react2.default.createElement(_addProject2.default, { addProject: this.addProject.bind(this), isEdit: isEdit, data: this.state.project })));
	        }
	    }]);
	    return EditField;
	}(_react.Component);

	exports.default = EditField;
	module.exports = exports['default'];

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(301), __esModule: true };

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(158);
	__webpack_require__(72);
	__webpack_require__(142);
	__webpack_require__(302);
	__webpack_require__(312);
	module.exports = __webpack_require__(80).Set;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(303);

	// 23.2 Set Objects
	module.exports = __webpack_require__(308)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(84).f
	  , create      = __webpack_require__(97)
	  , redefineAll = __webpack_require__(304)
	  , ctx         = __webpack_require__(81)
	  , anInstance  = __webpack_require__(305)
	  , defined     = __webpack_require__(75)
	  , forOf       = __webpack_require__(306)
	  , $iterDefine = __webpack_require__(76)
	  , step        = __webpack_require__(145)
	  , setSpecies  = __webpack_require__(307)
	  , DESCRIPTORS = __webpack_require__(88)
	  , fastKey     = __webpack_require__(150).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(83);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(81)
	  , call        = __webpack_require__(117)
	  , isArrayIter = __webpack_require__(118)
	  , anObject    = __webpack_require__(85)
	  , toLength    = __webpack_require__(105)
	  , getIterFn   = __webpack_require__(120)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(79)
	  , core        = __webpack_require__(80)
	  , dP          = __webpack_require__(84)
	  , DESCRIPTORS = __webpack_require__(88)
	  , SPECIES     = __webpack_require__(113)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(79)
	  , $export        = __webpack_require__(78)
	  , meta           = __webpack_require__(150)
	  , fails          = __webpack_require__(89)
	  , hide           = __webpack_require__(83)
	  , redefineAll    = __webpack_require__(304)
	  , forOf          = __webpack_require__(306)
	  , anInstance     = __webpack_require__(305)
	  , isObject       = __webpack_require__(86)
	  , setToStringTag = __webpack_require__(112)
	  , dP             = __webpack_require__(84).f
	  , each           = __webpack_require__(309)(0)
	  , DESCRIPTORS    = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(81)
	  , IObject  = __webpack_require__(102)
	  , toObject = __webpack_require__(115)
	  , toLength = __webpack_require__(105)
	  , asc      = __webpack_require__(310);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(311);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(86)
	  , isArray  = __webpack_require__(154)
	  , SPECIES  = __webpack_require__(113)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(78);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(313)('Set')});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(121)
	  , from    = __webpack_require__(314);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(306);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(316), __esModule: true };

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	__webpack_require__(72);
	module.exports = __webpack_require__(317);

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(85)
	  , get      = __webpack_require__(120);
	module.exports = __webpack_require__(80).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(319);

	var _stringify2 = _interopRequireDefault(_stringify);

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

	var _index = __webpack_require__(297);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var DetailHead = function (_Component) {
	    (0, _inherits3.default)(DetailHead, _Component);

	    function DetailHead(props) {
	        (0, _classCallCheck3.default)(this, DetailHead);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (DetailHead.__proto__ || (0, _getPrototypeOf2.default)(DetailHead)).call(this, props));

	        _this.state = {
	            displayName: '',
	            tip: '请输入联系人的姓名',
	            star: 0
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(DetailHead, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var displayName = this.props.displayName,
	                star = this.props.star;
	            this.state = {
	                displayName: displayName,
	                tip: displayName === '' ? '请输入联系人的姓名' : '',
	                star: star
	            };
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var displayName = nextProps.displayName,
	                star = nextProps.star;
	            this.setState({
	                displayName: displayName,
	                star: star,
	                tip: displayName === '' ? '请输入联系人的姓名' : ''
	            });
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if ((0, _stringify2.default)(nextProps) !== (0, _stringify2.default)(this.props) || (0, _stringify2.default)(nextState) !== (0, _stringify2.default)(this.state)) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            var value = e.target.value;
	            this.props.changeValue('displayName', value);
	        }
	    }, {
	        key: 'starClick',
	        value: function starClick() {
	            if (!this.props.isEdit) {
	                return;
	            }
	            var star = this.state.star;
	            this.props.changeValue('star', !star);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                hasPhoto = _props.hasPhoto,
	                id = _props.id,
	                defaultText = _props.defaultText,
	                isEdit = _props.isEdit;

	            return _react2.default.createElement('div', { className: 'detail-head clearfix' }, _react2.default.createElement(_index2.default, { type: hasPhoto, id: id, name: defaultText }), _react2.default.createElement('p', null, _react2.default.createElement('input', { type: 'text', onChange: this.handleChange.bind(this), value: this.state.displayName, className: 'contact-name', readOnly: isEdit ? '' : 'readonly' }), _react2.default.createElement('i', { className: this.state.star ? 'star active' : 'star', onClick: this.starClick.bind(this) }), _react2.default.createElement('span', { className: 'default-tip' }, this.state.tip)));
	        }
	    }]);
	    return DetailHead;
	}(_react.Component);

	exports.default = DetailHead;
	module.exports = exports['default'];

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(320), __esModule: true };

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(80)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(319);

	var _stringify2 = _interopRequireDefault(_stringify);

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

	var _rightDropItem = __webpack_require__(322);

	var _rightDropItem2 = _interopRequireDefault(_rightDropItem);

	var _index = __webpack_require__(284);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(282);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var CompanyGroup = function (_Component) {
	    (0, _inherits3.default)(CompanyGroup, _Component);

	    function CompanyGroup(props) {
	        (0, _classCallCheck3.default)(this, CompanyGroup);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (CompanyGroup.__proto__ || (0, _getPrototypeOf2.default)(CompanyGroup)).call(this, props));

	        _this2.state = {
	            company: '',
	            groupList: [],
	            groupValue: '',
	            companyValue: ''
	        };
	        return _this2;
	    }

	    (0, _createClass3.default)(CompanyGroup, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if ((0, _stringify2.default)(nextProps) !== (0, _stringify2.default)(this.props) || (0, _stringify2.default)(nextState) !== (0, _stringify2.default)(this.state)) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.state = {
	                company: this.props.company,
	                groupList: this.props.groupList,
	                companyValue: this.props.company ? this.props.company : '公司或标签',
	                groupValue: this.props.groupList.length > 0 ? this.props.groupList.join(' ') : '未分组'
	            };
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                company: nextProps.company,
	                groupList: nextProps.groupList,
	                companyValue: nextProps.company ? nextProps.company : this.isFocus ? '' : '公司或标签',
	                groupValue: nextProps.groupList.length > 0 ? nextProps.groupList.join(' ') : '未分组'
	            });
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            var value = e.target.value;
	            this.isFocus = true;
	            this.props.changeValue('company', value);
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(e) {
	            this.isFocus = false;
	            if (this.state.companyValue === '') {
	                this.setState({ companyValue: '公司或标签' });
	            }
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus(e) {
	            if (!this.props.isEdit) {
	                return;
	            }
	            this.isFocus = true;
	            if (this.state.companyValue === '公司或标签') {
	                this.setState({ companyValue: '' });
	            }
	        }
	    }, {
	        key: 'itemClick',
	        value: function itemClick(data) {
	            var clickName = data.name,
	                groupList = this.state.groupList,
	                index = groupList.indexOf(clickName);
	            if (index > -1) {
	                groupList.splice(index, 1);
	            } else {
	                groupList.push(clickName);
	            }
	            this.props.changeValue('groupList', groupList);
	        }
	    }, {
	        key: 'getGroupMenu',
	        value: function getGroupMenu() {
	            var group = this.props.group.data.slice(1),
	                groupList = this.state.groupList,
	                _this = this;
	            var groupArray = group.map(function (v, i) {
	                return _react2.default.createElement(_rightDropItem2.default, { itemClick: _this.itemClick.bind(_this), key: v.id, data: v, checkType: 'circle', checked: groupList.indexOf(v.name) > -1 ? true : false });
	            });
	            return _react2.default.createElement('div', { className: 'right-group-wrap', style: { height: groupArray.length < 9 ? groupArray.length * 38 : 342, overflow: 'hidden' } }, _react2.default.createElement(_index4.default, { dataType: 'next', ref: 'test', name: '2' }, _react2.default.createElement('ul', null, groupArray)));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var menu = this.getGroupMenu();
	            var isEdit = this.props.isEdit;

	            var _this = this;
	            var groupListArray = this.state.groupList.map(function (v, i) {
	                return _react2.default.createElement('span', { key: i }, v);
	            });
	            return _react2.default.createElement('div', { className: 'detail-list noline' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', { className: 'detail-item clearfix' }, _react2.default.createElement('div', { className: 'detail-item-name' }, _react2.default.createElement('input', { type: 'text', value: '\u516C\u53F8', readOnly: 'readonly' })), _react2.default.createElement('div', { className: 'detail-item-value' }, _react2.default.createElement('input', { type: 'text', value: this.state.companyValue, onBlur: this.handleBlur.bind(this), onFocus: this.handleFocus.bind(this), onChange: this.handleChange.bind(this), readOnly: isEdit ? '' : 'readonly' }))), _react2.default.createElement('li', { className: 'detail-item clearfix' }, _react2.default.createElement('div', { className: 'detail-item-name' }, _react2.default.createElement('input', { type: 'text', value: '\u7FA4\u7EC4', readOnly: 'readOnly' })), _react2.default.createElement('div', { className: 'detail-item-value' }, _react2.default.createElement(_index2.default, {
	                hasAngle: true,
	                align: 'left',
	                width: 260,
	                menu: menu,
	                dropdownStyle: { marginLeft: '10px' }
	            }, _react2.default.createElement('div', { className: 'group-choose' }, groupListArray.length > 0 ? groupListArray : _react2.default.createElement('span', null, '\u672A\u5206\u7EC4'))), _react2.default.createElement('span', { className: 'group-cover' })))));
	        }
	    }]);
	    return CompanyGroup;
	}(_react.Component);

	exports.default = CompanyGroup;
	module.exports = exports['default'];

/***/ },
/* 322 */
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

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var RightDropItem = function (_Component) {
	    (0, _inherits3.default)(RightDropItem, _Component);

	    function RightDropItem(props) {
	        (0, _classCallCheck3.default)(this, RightDropItem);
	        return (0, _possibleConstructorReturn3.default)(this, (RightDropItem.__proto__ || (0, _getPrototypeOf2.default)(RightDropItem)).call(this, props));
	    }

	    (0, _createClass3.default)(RightDropItem, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            e.nativeEvent.stopImmediatePropagation();
	            _utilDom2.default.stopPropagation(e);
	            this.props.itemClick && this.props.itemClick(this.props.data);
	        }
	    }, {
	        key: 'getCheckClassName',
	        value: function getCheckClassName(type, checked) {
	            if (type === 'circle') {
	                return "check-icon circle " + (checked ? 'checked' : 'unchecked');
	            } else {
	                return checked === undefined || checked === null || checked === 'normal' ? 'check-icon square' : checked === false ? 'check-icon square unchecked' : 'check-icon square checked';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var data = this.props.data,
	                checkType = this.props.checkType || 'square';
	            if (['square', 'circle'].indexOf(checkType.toLowerCase()) < 0) {
	                checkType = 'square';
	            }
	            var iconClass = this.getCheckClassName(checkType, this.props.checked);
	            return _react2.default.createElement('li', { className: 'right-group-item', onClick: this.handleClick.bind(this) }, _react2.default.createElement('i', { className: iconClass }), _react2.default.createElement('span', { title: data.name }, _utilDom2.default.subStringLen(data.name, 16)));
	        }
	    }]);
	    return RightDropItem;
	}(_react.Component);

	exports.default = RightDropItem;
	module.exports = exports['default'];

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(319);

	var _stringify2 = _interopRequireDefault(_stringify);

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

	var _detailItem = __webpack_require__(324);

	var _detailItem2 = _interopRequireDefault(_detailItem);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var DetailList = function (_Component) {
	    (0, _inherits3.default)(DetailList, _Component);

	    function DetailList(props) {
	        (0, _classCallCheck3.default)(this, DetailList);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (DetailList.__proto__ || (0, _getPrototypeOf2.default)(DetailList)).call(this, props));

	        _this.state = {
	            data: []
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(DetailList, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.state = {
	                data: this.props.data
	            };
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ data: nextProps.data });
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	        // 两个数组是否有差别

	    }, {
	        key: 'diffArray',
	        value: function diffArray(a1, a2) {
	            if (a1.length !== a2.length) {
	                return true;
	            }
	            var result = false,
	                len = a1.length;
	            for (var i = 0; i < len; i++) {
	                var s1 = (0, _stringify2.default)(a1[i]);
	                var s2 = (0, _stringify2.default)(a2[i]);
	                if (s1 !== s2) {
	                    result = true;
	                    break;
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'changeValue',
	        value: function changeValue(i, d) {
	            var newData = this.state.data;
	            newData[i] = d;
	            this.props.changeValue(this.props.type + 'List', newData);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var len = this.state.data.length,
	                classn = 'detail-list list';
	            var array = this.state.data.map(function (v, i) {
	                return _react2.default.createElement(_detailItem2.default, { topItem: _this2.props.topItem, addItem: _this2.props.addItem, delItem: _this2.props.delItem, type: _this2.props.type, index: i, changeValue: _this2.changeValue.bind(_this2), isEdit: _this2.props.isEdit, key: i, data: v, isFirst: i === 0 ? true : false, isLast: i === len - 1 ? true : false });
	            });
	            if (this.props.type == 'tel' && this.state.data[0].value == '电话号码' && !this.props.isEdit) {
	                classn += ' noline';
	            }
	            return _react2.default.createElement('div', { className: classn }, _react2.default.createElement('ul', null, array));
	        }
	    }]);
	    return DetailList;
	}(_react.Component);

	exports.default = DetailList;
	module.exports = exports['default'];

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _stringify = __webpack_require__(319);

	var _stringify2 = _interopRequireDefault(_stringify);

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

	var _index = __webpack_require__(284);

	var _index2 = _interopRequireDefault(_index);

	var _util = __webpack_require__(137);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var DetailItem = function (_Component) {
	    (0, _inherits3.default)(DetailItem, _Component);

	    function DetailItem(props) {
	        (0, _classCallCheck3.default)(this, DetailItem);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (DetailItem.__proto__ || (0, _getPrototypeOf2.default)(DetailItem)).call(this, props));

	        _this2.state = {
	            custom: '',
	            value: '',
	            showTip: false
	        };
	        return _this2;
	    }

	    (0, _createClass3.default)(DetailItem, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if ((0, _stringify2.default)(nextProps) !== (0, _stringify2.default)(this.props) || (0, _stringify2.default)(nextState) !== (0, _stringify2.default)(this.state)) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.state = {
	                custom: this.props.data.custom,
	                value: this.props.data.value
	            };
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                custom: nextProps.data.custom,
	                value: nextProps.data.value
	            });
	        }
	    }, {
	        key: 'customChange',
	        value: function customChange(e) {
	            var value = e.target.value,
	                index = this.props.index,
	                data = this.props.data;
	        }
	    }, {
	        key: 'customSelect',
	        value: function customSelect(d) {
	            var name = d.value;
	            if (name !== this.state.custom) {
	                var newData = (0, _assign2.default)({}, this.props.data, { custom: name }),
	                    index = this.props.index;
	                this.props.changeValue(index, newData);
	            }
	        }
	    }, {
	        key: 'valueChange',
	        value: function valueChange(e) {
	            if (this.state.showTip) {
	                this.setState({ showTip: false });
	            }
	            var value = e.target.value,
	                index = this.props.index,
	                data = this.props.data;
	            var newData = (0, _assign2.default)({}, data, { value: value });
	            this.props.changeValue(index, newData);
	        }
	    }, {
	        key: 'valueBlur',
	        value: function valueBlur(e) {
	            var _this3 = this;

	            var value = e.target.value,
	                data = this.props.data,
	                _this = this;
	            if (value === '') {
	                if (this.props.isLast) {
	                    this.setState({ value: (0, _util.getDefaultValue)(this.props.type) });
	                } else {
	                    this.props.delItem(this.props.type, this.props.index);
	                }
	                return;
	            }
	            var checkInfo = this.checkInputValue(value);
	            if (checkInfo.check) {
	                //成功调用接口
	                if (this.state.showTip) {
	                    this.setState({ showTip: false });
	                }
	                if (this.props.isLast) {
	                    this.props.addItem(this.props.type);
	                }
	            } else {
	                this.refs.valueInput.focus();
	                this.setState({ showTip: true }, function () {
	                    var newData = (0, _assign2.default)({}, data, { value: checkInfo.success });
	                    _this.props.changeValue(_this3.props.index, newData);
	                });
	            }
	        }
	    }, {
	        key: 'valueFocus',
	        value: function valueFocus(e) {
	            var value = e.target.value,
	                defaultValue = (0, _util.getDefaultValue)(this.props.type);
	            if (value === defaultValue) {
	                this.props.changeValue(this.props.index, (0, _assign2.default)({}, this.props.data, { value: '' }));
	            }
	        }
	    }, {
	        key: 'handleTop',
	        value: function handleTop() {
	            this.props.topItem(this.props.type, this.props.index);
	        }
	    }, {
	        key: 'handleDel',
	        value: function handleDel() {
	            this.props.delItem(this.props.type, this.props.index);
	        }
	    }, {
	        key: 'checkInputValue',
	        value: function checkInputValue(d) {
	            var custom = this.state.custom,
	                type = this.props.type;
	            var result = { check: true, success: d };
	            switch (type) {
	                case 'tel':
	                    if (custom === '手机') {
	                        result = this.checkPhone(d);
	                    } else {
	                        var _reg = /^\d+$/;
	                        if (!_reg.test(d)) {
	                            var arr = d.match(/\d+/g);
	                            if (arr && arr.length > 0) {
	                                result = { check: false, success: arr.join('') };
	                            } else {
	                                result = { check: false, success: '' };
	                            }
	                        }
	                    }
	                    break;
	                case 'email':
	                    var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	                    if (!reg.test(d)) {
	                        result = { check: false, success: d };
	                    }
	                    break;
	                case 'address':
	                case 'im':
	                case 'web':
	                default:
	                    break;
	            }
	            return result;
	        }
	        // 手机号码验证

	    }, {
	        key: 'checkPhone',
	        value: function checkPhone(d) {
	            var reg = /^1[34578]\d{9}$/;
	            if (reg.test(d)) {
	                return {
	                    check: true,
	                    success: d
	                };
	            } else {
	                var success = d.match(/1[34578]\d{9}/g);
	                if (success) {
	                    //在正确的手机号前面或后面追加的情况
	                    return {
	                        check: false,
	                        success: success[0]
	                    };
	                } else {
	                    //删除，或者在中间插入非法字符的情况
	                    var array = d.match(/\d+/g);
	                    if (array && array.length > 0) {
	                        var str = array.join('');
	                        return {
	                            check: false,
	                            success: str.length > 11 ? str.slice(0, 11) : str
	                        };
	                    } else {
	                        return {
	                            success: '',
	                            check: false
	                        };
	                    }
	                }
	            }
	        }
	        // 固定电话的验证
	        // checkTelephone(d) {
	        //     let array = d.split('-');
	        //     let result = {};
	        //     // 普通电话号码的检验
	        //     const checkNormalPhone = (d) => {
	        //         let result;
	        //         if(/^\d{7,8}$/.test(d)) {
	        //             result = { check: true, success: d }
	        //         } else {
	        //             let arr = d.match(/\d+/g);
	        //             if(arr && arr.length > 0) {
	        //                 let str = arr.join('');
	        //                 result = { check: false, success: str.length > 8 ? str.slice(0, 8) : str }
	        //             } else {
	        //                 result = { check: false, success: '' }
	        //             }
	        //         }
	        //         return result;
	        //     }
	        //     // 检验区号
	        //     const checkAreaCode = (d) => {
	        //         let result = {};
	        //         if(/^0\d{2,3}$/.test(d)) {
	        //             result = { check: true, success: d }
	        //         } else {
	        //             let arr = d.match(/\d+/g);
	        //             if(arr && arr.length > 0) {
	        //                 let str = arr.join('');
	        //                 if(str[0] === '0') {
	        //                     result = { check: false, success: str.length > 4 ? str.slice(0, 4) : str }
	        //                 } else {
	        //                     result = { check: false, success: '0' + (str.length > 3 ? str.slice(0, 3) : str) }
	        //                 }
	        //             } else {
	        //                 result = { check: false, success: '0' }
	        //             }
	        //         }
	        //         return result;
	        //     }
	        //     // 检验分机号
	        //     const checkExtCode = (d) => {
	        //         let result = {};
	        //         if(/^\d{1,6}$/.test(d)) {
	        //             result = { check: true, success: d }
	        //         } else {
	        //             let arr = d.match(/\d+/g);
	        //             if(arr && arr.length > 0) {
	        //                 let str = arr.join('');
	        //                 result = { check: false, success: str.length > 6 ? str.slice(0, 6) : str }
	        //             } else {
	        //                 result = { check: false, success: '' }
	        //             }
	        //         }
	        //         return result;
	        //     }
	        //
	        //     switch (array.length) {
	        //         case 1: // 电话
	        //             result = checkNormalPhone(d);
	        //             break;
	        //         case 2: { // 区号加电话
	        //             let temp1 = checkAreaCode(array[0]), temp2 = checkNormalPhone(array[1]);
	        //             if(temp1.check && temp2.check) {
	        //                 result = { check: true, success: d }
	        //             } else {
	        //                 result = { check: false, success: temp1.success + '-' + temp2.success }
	        //             }
	        //         }
	        //             break;
	        //         case 3:
	        //         default: {
	        //             let temp1 = checkAreaCode(array[0]), temp2 = checkNormalPhone(array[1]), temp3 = checkExtCode(array[2]);
	        //             if(temp1.check && temp2.check && temp3.check) {
	        //                 result = { check: true, success: d }
	        //             } else  {
	        //                 result = { check: false, success: temp1.success + '-' + temp2.success + '-' + temp3.success }
	        //             }
	        //         }
	        //             break;
	        //     }
	        //     return result;
	        // }

	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                isFirst = _props.isFirst,
	                isLast = _props.isLast,
	                type = _props.type,
	                isEdit = _props.isEdit;

	            var itemDefaultValue = (0, _util.getDefaultValue)(type),
	                data = (0, _util.getTypeCustomList)(type),
	                _this = this;
	            var itemClass = 'detail-item clearfix';
	            if (isFirst) {
	                itemClass += ' first';
	            }
	            if (isLast) {
	                itemClass += ' last';
	            }
	            return _react2.default.createElement('li', { className: itemClass }, _react2.default.createElement('div', { className: 'detail-item-name' }, _react2.default.createElement(_index2.default, {
	                hasAngle: true,
	                trigger: 'click|hover',
	                dropdownClass: 'detail-dropdown',
	                data: data.map(function (v, i) {
	                    return {
	                        value: v,
	                        onClick: _this.customSelect.bind(_this)
	                    };
	                })
	            }, _react2.default.createElement('input', { disabled: isEdit ? '' : 'disabled', type: 'text', value: this.state.custom, onChange: this.customChange.bind(this) })), _react2.default.createElement('i', { className: 'drop-icon' })), _react2.default.createElement('div', { className: 'detail-item-value' }, _react2.default.createElement('input', { type: 'text', ref: 'valueInput', onFocus: this.valueFocus.bind(this), value: this.state.value, onBlur: this.valueBlur.bind(this), onChange: this.valueChange.bind(this), readOnly: isEdit ? '' : 'readonly' }), _react2.default.createElement('i', { className: isLast ? 'top-icon last' : 'top-icon', onClick: this.handleTop.bind(this) }), _react2.default.createElement('i', { className: isLast ? 'del-icon last' : 'del-icon', onClick: this.handleDel.bind(this) }), _react2.default.createElement('span', { className: 'error-tip', style: { display: this.state.showTip ? 'block' : 'none' } }, '\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165')));
	        }
	    }]);
	    return DetailItem;
	}(_react.Component);

	exports.default = DetailItem;
	module.exports = exports['default'];

/***/ },
/* 325 */
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

	var _index = __webpack_require__(284);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var AddProject = function (_Component) {
	    (0, _inherits3.default)(AddProject, _Component);

	    function AddProject(props) {
	        (0, _classCallCheck3.default)(this, AddProject);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (AddProject.__proto__ || (0, _getPrototypeOf2.default)(AddProject)).call(this, props));

	        _this2.state = {
	            data: []
	        };
	        return _this2;
	    }

	    (0, _createClass3.default)(AddProject, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.state = {
	                data: this.props.data
	            };
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            console.log(nextProps.data, this.state.data);
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: 'addProject',
	        value: function addProject(d) {
	            var typeArray = ['tel', 'email', 'addr', 'im', 'web', 'social', 'event', 'remark'];
	            var allProject = ['手机', '邮件', '地址', '即时信息', '网站', '社交账号', '日期', '备注'];
	            var index = allProject.indexOf(d);
	            if (index > -1) {
	                this.props.addProject && this.props.addProject(typeArray[index], d);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            console.log(1);
	            var _this = this;
	            var array = this.state.data.map(function (v, i) {
	                return {
	                    value: v,
	                    onClick: _this.addProject.bind(_this3, v)
	                };
	            });
	            return _react2.default.createElement('div', { className: 'add-project-wrap' }, _react2.default.createElement(_index2.default, {
	                trigger: 'click|hover',
	                hasAngle: true,
	                data: array,
	                width: 174,
	                dropdownStyle: { height: '120px' }
	            }, _react2.default.createElement('span', { className: 'add-project' }, '\u6DFB\u52A0\u9879\u76EE')));
	        }
	    }]);
	    return AddProject;
	}(_react.Component);

	exports.default = AddProject;
	module.exports = exports['default'];

/***/ },
/* 326 */
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

	var _BatchListItem = __webpack_require__(327);

	var _BatchListItem2 = _interopRequireDefault(_BatchListItem);

	var _rightGroupDrop = __webpack_require__(328);

	var _rightGroupDrop2 = _interopRequireDefault(_rightGroupDrop);

	var _index = __webpack_require__(297);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(282);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(284);

	var _index6 = _interopRequireDefault(_index5);

	var _util = __webpack_require__(137);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var CheckListPanel = function (_Component) {
	    (0, _inherits3.default)(CheckListPanel, _Component);

	    function CheckListPanel(props) {
	        (0, _classCallCheck3.default)(this, CheckListPanel);
	        return (0, _possibleConstructorReturn3.default)(this, (CheckListPanel.__proto__ || (0, _getPrototypeOf2.default)(CheckListPanel)).call(this, props));
	    }

	    (0, _createClass3.default)(CheckListPanel, [{
	        key: 'getCheckInfo',
	        value: function getCheckInfo() {
	            var _props$list = this.props.list,
	                data = _props$list.data,
	                checkList = _props$list.checkList,
	                idList = _props$list.idList,
	                checkAll = _props$list.checkAll;

	            var result = [],
	                showData = (0, _util.getShowDataArray)(data);
	            checkList.forEach(function (v, i) {
	                var index = idList.indexOf(v);
	                result.push(showData[index]);
	            });
	            var num = 0;
	            if (!checkAll) {
	                num = checkList.length;
	            } else {
	                num = checkList.length === idList.length ? 'all' : checkList.length;
	            }
	            return {
	                list: result,
	                num: num
	            };
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel() {
	            this.props.actions.resetCheckStatus();
	        }
	    }, {
	        key: 'handleDel',
	        value: function handleDel() {}
	    }, {
	        key: 'handleMove',
	        value: function handleMove() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var checkInfo = this.getCheckInfo();
	            var listArray = checkInfo.list.map(function (v, i) {
	                return _react2.default.createElement(_BatchListItem2.default, { key: v.id, data: v });
	            });
	            var menu = _react2.default.createElement(_rightGroupDrop2.default, { group: this.props.group });
	            return _react2.default.createElement('div', { className: 'right-wrap', style: { display: this.props.checkFlag ? 'block' : 'none' } }, _react2.default.createElement('div', { className: 'right-header select clearfix' }, _react2.default.createElement('a', { className: 'c-btn cancel-btn', href: 'javascript:void(0);', onClick: this.handleCancel.bind(this) }, '\u53D6\u6D88'), _react2.default.createElement('span', { className: 'check-num' }, checkInfo.num === 'all' ? '全部联系人' : checkInfo.num + '个联系人'), _react2.default.createElement('a', { className: 'c-btn del-btn', href: 'javascript:void(0);', onClick: this.handleDel.bind(this) }, '\u5220\u9664'), _react2.default.createElement(_index6.default, {
	                ref: 'dropdown',
	                menu: menu,
	                hasAngle: true,
	                trigger: 'click',
	                clickFun: this.handleMove.bind(this),
	                align: 'center',
	                width: 222,
	                dropdownStyle: { marginTop: '-5px' }
	            }, _react2.default.createElement('a', { className: 'c-btn move-btn', href: 'javascript:void(0);' }, '\u79FB\u52A8\u5230'))), _react2.default.createElement('div', { className: 'right-body' }, _react2.default.createElement(_index4.default, { name: '1', dataType: this.props.dataType }, _react2.default.createElement('ul', { className: 'batch-list clearfix' }, listArray))));
	        }
	    }]);
	    return CheckListPanel;
	}(_react.Component);

	exports.default = CheckListPanel;
	module.exports = exports['default'];

/***/ },
/* 327 */
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

	var _index = __webpack_require__(297);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var BatchListItem = function (_Component) {
	    (0, _inherits3.default)(BatchListItem, _Component);

	    function BatchListItem(props) {
	        (0, _classCallCheck3.default)(this, BatchListItem);
	        return (0, _possibleConstructorReturn3.default)(this, (BatchListItem.__proto__ || (0, _getPrototypeOf2.default)(BatchListItem)).call(this, props));
	    }

	    (0, _createClass3.default)(BatchListItem, [{
	        key: 'render',
	        value: function render() {
	            var data = this.props.data;
	            return _react2.default.createElement('li', { className: 'batch-list-item clearfix', key: data.id }, _react2.default.createElement(_index2.default, { type: data.hasPhoto, id: data.id, name: data.defaultText }), _react2.default.createElement('span', { className: 'batch-item-name', title: data.displayName }, data.displayName));
	        }
	    }]);
	    return BatchListItem;
	}(_react.Component);

	exports.default = BatchListItem;
	module.exports = exports['default'];

/***/ },
/* 328 */
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

	var _rightDropItem = __webpack_require__(322);

	var _rightDropItem2 = _interopRequireDefault(_rightDropItem);

	var _index = __webpack_require__(282);

	var _index2 = _interopRequireDefault(_index);

	var _utilDom = __webpack_require__(138);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var RightGroupDrop = function (_Component) {
	    (0, _inherits3.default)(RightGroupDrop, _Component);

	    function RightGroupDrop(props) {
	        (0, _classCallCheck3.default)(this, RightGroupDrop);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (RightGroupDrop.__proto__ || (0, _getPrototypeOf2.default)(RightGroupDrop)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    (0, _createClass3.default)(RightGroupDrop, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            return true;
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel(e) {
	            e.nativeEvent.stopImmediatePropagation();
	            (0, _utilDom.stopPropagation)(e);
	        }
	    }, {
	        key: 'handleSure',
	        value: function handleSure(e) {
	            e.nativeEvent.stopImmediatePropagation();
	            (0, _utilDom.stopPropagation)(e);
	        }
	    }, {
	        key: 'addGroup',
	        value: function addGroup(e) {
	            e.nativeEvent.stopImmediatePropagation();
	            (0, _utilDom.stopPropagation)(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props$group = this.props.group,
	                data = _props$group.data,
	                groupAllId = _props$group.groupAllId,
	                groupSomeId = _props$group.groupSomeId;

	            var array = data.slice(1).map(function (v, i) {
	                return _react2.default.createElement(_rightDropItem2.default, { key: v.id, data: v, inGroupAllId: groupAllId.indexOf(v.id) > -1 ? true : false, inGroupSomeId: groupSomeId.indexOf(v.id) > -1 ? true : false });
	            });
	            return _react2.default.createElement('div', { className: 'right-group-wrap', style: { height: array.length < 10 ? array.length * 40 + 51 : 451 } }, _react2.default.createElement('div', { className: 'right-group-list' }, _react2.default.createElement(_index2.default, { dataType: 'origin' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', { className: 'right-group-item', onClick: this.addGroup.bind(this) }, _react2.default.createElement('i', { className: 'add-group-icon' }), _react2.default.createElement('span', null, '\u65B0\u5EFA\u7FA4\u7EC4')), array))), _react2.default.createElement('div', { className: 'drop-btn-wrap' }, _react2.default.createElement('span', { className: 'drop-btn cancel-btn', onClick: this.handleCancel.bind(this) }, '\u53D6\u6D88'), _react2.default.createElement('span', { className: 'drop-btn sure-btn', onClick: this.handleSure.bind(this) }, '\u786E\u5B9A')));
	        }
	    }]);
	    return RightGroupDrop;
	}(_react.Component);

	exports.default = RightGroupDrop;
	module.exports = exports['default'];

/***/ },
/* 329 */
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

	var _iconItem = __webpack_require__(330);

	var _iconItem2 = _interopRequireDefault(_iconItem);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	__webpack_require__(331);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sidebar = function (_Component) {
	    (0, _inherits3.default)(Sidebar, _Component);

	    function Sidebar(props) {
	        (0, _classCallCheck3.default)(this, Sidebar);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

	        _this.state = {
	            data: [{
	                type: 'contact',
	                title: '联系人',
	                url: '/contact.html'
	            }, {
	                type: 'sms',
	                title: '短信',
	                url: '/sms.html'
	            }, {
	                type: 'note',
	                title: '便签',
	                url: '/note.html'
	            }, {
	                type: 'photo',
	                title: '图库',
	                url: '/photo.html'
	            }, {
	                type: 'find',
	                title: '查找手机',
	                url: '/findPhone.html'
	            }, {
	                type: 'recycle',
	                title: '回收站',
	                url: '/recycle.html'
	            }]
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(Sidebar, [{
	        key: 'render',
	        value: function render() {
	            var selectType = this.props.type;
	            var array = this.state.data.map(function (v) {
	                if (selectType === v.type) {
	                    v.select = true;
	                    return _react2.default.createElement(_iconItem2.default, { data: v, key: v.type, type: v.type, title: v.title });
	                } else {
	                    v.select = false;
	                    return _react2.default.createElement(_iconItem2.default, { data: v, key: v.type, type: v.type, title: v.title });
	                }
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'sidebar-wrap', ref: 'wrap' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'sidebar-header', ref: 'header' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'icon-wrap' },
	                        _react2.default.createElement(
	                            'svg',
	                            { className: 'icon-logo' },
	                            _react2.default.createElement(
	                                'switch',
	                                null,
	                                _react2.default.createElement('use', { xlinkHref: '#iconFlymeLogo' })
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'sidebar-content', ref: 'body' },
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'side-list' },
	                        array
	                    )
	                )
	            );
	        }
	    }]);
	    return Sidebar;
	}(_react.Component);

	exports.default = Sidebar;
	module.exports = exports['default'];

/***/ },
/* 330 */
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IconItem = function (_Component) {
	    (0, _inherits3.default)(IconItem, _Component);

	    function IconItem(props) {
	        (0, _classCallCheck3.default)(this, IconItem);
	        return (0, _possibleConstructorReturn3.default)(this, (IconItem.__proto__ || (0, _getPrototypeOf2.default)(IconItem)).call(this, props));
	    }

	    (0, _createClass3.default)(IconItem, [{
	        key: 'handleClick',
	        value: function handleClick(data) {
	            if (data.select) {
	                return;
	            }
	            window.location.href = data.url;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var data = this.props.data;
	            var itemClass = data.select ? 'active ' + data.type : data.type;
	            return _react2.default.createElement(
	                'li',
	                { className: itemClass, onClick: this.handleClick.bind(this, data) },
	                _react2.default.createElement('a', { href: 'javascript:void(0)', 'data-type': data.type }),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    data.title
	                )
	            );
	        }
	    }]);
	    return IconItem;
	}(_react.Component);

	exports.default = IconItem;
	module.exports = exports['default'];

/***/ },
/* 331 */
185,
/* 332 */,
/* 333 */
185,
/* 334 */
185
]);