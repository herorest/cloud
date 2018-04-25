webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(374);


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
/* 22 */,
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
/* 60 */,
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
/* 68 */,
/* 69 */,
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
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
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
/* 165 */,
/* 166 */,
/* 167 */,
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
/* 279 */,
/* 280 */,
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
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
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
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
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
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
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
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
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
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */
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
/* 347 */
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
/* 348 */
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
/* 349 */
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
/* 350 */
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
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */
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
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(23);

	var _store = __webpack_require__(375);

	var _store2 = _interopRequireDefault(_store);

	var _app = __webpack_require__(392);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var store = (0, _store2.default)();
	_reactDom2.default.render(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_app2.default, null)), document.getElementById('root'));

/***/ },
/* 375 */
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

	var _reducers = __webpack_require__(376);

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
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(34);

	var _list = __webpack_require__(377);

	var _list2 = _interopRequireDefault(_list);

	var _detail = __webpack_require__(386);

	var _detail2 = _interopRequireDefault(_detail);

	var _modal = __webpack_require__(388);

	var _modal2 = _interopRequireDefault(_modal);

	var _group = __webpack_require__(390);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var rootReducer = (0, _redux.combineReducers)({
	    list: _list2.default,
	    detail: _detail2.default,
	    modal: _modal2.default,
	    group: _group2.default
	});

	exports.default = rootReducer;
	module.exports = exports['default'];

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _toConsumableArray2 = __webpack_require__(358);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	exports.default = list;

	var _list = __webpack_require__(378);

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var initState = {
	    list: [],
	    choseAll: false,
	    choseAllBtn: false,
	    currentItem: null,
	    multiItem: [],
	    start: 0,
	    length: 10,
	    isFetching: false,
	    firstFetch: null, //主要用来控制初次自动加载detail以及loading
	    count: 0,
	    dataType: 'origin',
	    isSearch: false,
	    searchContent: '',
	    isAddNewItem: false
	};

	function list() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	    var action = arguments[1];

	    switch (action.type) {
	        case _list.ADD_NEW_ITEM:
	            var time = new Date().getTime();
	            var addnewlist = [{
	                body: "",
	                createTime: time,
	                desktop: 0,
	                encrypt: 0,
	                fileList: "",
	                files: {},
	                firstImg: "",
	                firstImgSrc: null,
	                firstRecord: "",
	                firstRecordSrc: null,
	                fontSize: 0,
	                groupStatus: null,
	                lastUpdate: time,
	                modifyTime: time,
	                nuuid: null,
	                paper: 0,
	                status: "U",
	                title: "",
	                topdate: 0,
	                types: [0],
	                userId: 0,
	                uuid: ""
	            }].concat((0, _toConsumableArray3.default)(state.list));
	            return (0, _assign2.default)({}, state, {
	                list: addnewlist,
	                multiItem: [],
	                start: 0,
	                choseAll: false,
	                choseAllBtn: false,
	                currentItem: 0,
	                isAddNewItem: true
	            });
	        case _list.CANCEL_NEW_ITEM:
	            var removeNewList = [].concat((0, _toConsumableArray3.default)(state.list));
	            removeNewList.shift();
	            return (0, _assign2.default)({}, state, {
	                list: removeNewList,
	                isAddNewItem: false
	            });
	        case _list.QUERY_LIST:
	            return state;
	        case _list.QUERY_LIST_SUCCESS:
	            var data = action.data;
	            var dataType = 'origin';
	            if (data.next) {
	                var newList = [].concat((0, _toConsumableArray3.default)(state.list), (0, _toConsumableArray3.default)(data.content));
	                if (state.choseAll) {
	                    var _l = newList.length;
	                    var _a = [];
	                    for (var i = 0; i < _l; i++) {
	                        _a.push(i);
	                    }
	                    return (0, _assign2.default)({}, state, {
	                        multiItem: _a,
	                        list: newList,
	                        start: data.start,
	                        count: data.count
	                    });
	                }
	                dataType = 'next';
	                return (0, _assign2.default)({}, state, {
	                    list: newList,
	                    start: data.start,
	                    count: data.count,
	                    dataType: dataType
	                });
	            } else {
	                return (0, _assign2.default)({}, state, {
	                    list: data.content,
	                    start: data.start,
	                    count: data.count,
	                    choseAll: false,
	                    choseAllBtn: false,
	                    currentItem: 0,
	                    firstFetch: true,
	                    multiItem: [],
	                    isSearch: data.isSearch,
	                    searchContent: data.searchContent || ''
	                });
	            }
	        case _list.QUERY_LIST_FAILURE:
	            return state;
	        case _list.QUERY_LIST_FETCHING:
	            return (0, _assign2.default)({}, state, {
	                isFetching: true
	            });
	        case _list.QUERY_LIST_FETCHOVER:
	            return (0, _assign2.default)({}, state, {
	                isFetching: false
	            });
	        case _list.CHANGE_CURRENT_ITEM:
	            if (state.isAddNewItem) {
	                _index2.default.alert('您之前创建的便签尚未保存/取消');
	                return state;
	            }
	            return (0, _assign2.default)({}, state, {
	                currentItem: action.index
	            });
	        case _list.LIST_FIRSTFETCH_CLOSE:
	            return (0, _assign2.default)({}, state, {
	                firstFetch: false
	            });
	        case _list.RESET_FIRSTFETCH:
	            return (0, _assign2.default)({}, state, {
	                firstFetch: null,
	                list: [],
	                currentItem: null,
	                multiItem: []
	            });
	        case _list.ADD_CHECK_ITEM:
	            var addarr = [].concat((0, _toConsumableArray3.default)(state.multiItem), [action.index]);
	            var choseAllBtn = false;
	            if (addarr.length == state.list.length) {
	                choseAllBtn = true;
	            }
	            return (0, _assign2.default)({}, state, {
	                multiItem: addarr,
	                choseAllBtn: choseAllBtn
	            });
	        case _list.REMOVE_CHECK_ITEM:
	            var arr = [].concat((0, _toConsumableArray3.default)(state.multiItem));
	            arr.splice(action.index, 1);

	            return (0, _assign2.default)({}, state, {
	                multiItem: arr,
	                choseAllBtn: false
	            });
	        case _list.CHECK_ALL_ITEM:
	            var l = state.list.length;
	            var a = [];
	            for (var _i = 0; _i < l; _i++) {
	                a.push(_i);
	            }
	            return (0, _assign2.default)({}, state, {
	                multiItem: a,
	                choseAll: true,
	                choseAllBtn: true
	            });

	        case _list.UNCHECK_ALL_ITEM:
	            return (0, _assign2.default)({}, state, {
	                multiItem: [],
	                choseAll: false,
	                choseAllBtn: false
	            });
	        case _list.DEL_LIST_SUCCESS:
	            return (0, _assign2.default)({}, state, {
	                multiItem: [],
	                choseAll: false,
	                choseAllBtn: false,
	                list: action.list
	            });
	        case _list.DEL_LIST_FAILURE:
	            return state;
	        case _list.CHANGE_DATA_TYPE:
	            return (0, _assign2.default)({}, state, {
	                dataType: action.value
	            });
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CANCEL_NEW_ITEM = exports.ADD_NEW_ITEM = exports.CHANGE_SEARCH_FLAG = exports.SEARCH_CHANGE_RESET = exports.RESET_FIRSTFETCH = exports.CHANGE_DATA_TYPE = exports.DEL_LIST_FAILURE = exports.DEL_LIST_SUCCESS = exports.UNCHECK_ALL_ITEM = exports.CHECK_ALL_ITEM = exports.REMOVE_CHECK_ITEM = exports.ADD_CHECK_ITEM = exports.LIST_FIRSTFETCH_CLOSE = exports.CHANGE_CURRENT_ITEM = exports.QUERY_LIST_FETCHOVER = exports.QUERY_LIST_FETCHING = exports.QUERY_LIST_FAILURE = exports.QUERY_LIST_SUCCESS = exports.QUERY_LIST = undefined;

	var _extends2 = __webpack_require__(184);

	var _extends3 = _interopRequireDefault(_extends2);

	var _promise = __webpack_require__(379);

	var _promise2 = _interopRequireDefault(_promise);

	exports.queryList = queryList;
	exports.delList = delList;
	exports.resetFirstFetch = resetFirstFetch;
	exports.changeDataType = changeDataType;
	exports.delListSuccess = delListSuccess;
	exports.delListFailure = delListFailure;
	exports.unCheckAllItem = unCheckAllItem;
	exports.checkAllItem = checkAllItem;
	exports.addCheckItem = addCheckItem;
	exports.removeLastItem = removeLastItem;
	exports.removeCheckItem = removeCheckItem;
	exports.changeCurrentItem = changeCurrentItem;
	exports.queryListFetching = queryListFetching;
	exports.queryListFetchOver = queryListFetchOver;
	exports.queryListSuccess = queryListSuccess;
	exports.queryListFaliure = queryListFaliure;
	exports.firstFetchClose = firstFetchClose;
	exports.searchChangeReset = searchChangeReset;
	exports.changeSearchFlag = changeSearchFlag;
	exports.addNewItem = addNewItem;
	exports.cancelNewItem = cancelNewItem;

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var QUERY_LIST = exports.QUERY_LIST = 'QUERY_LIST'; //查询详情
	var QUERY_LIST_SUCCESS = exports.QUERY_LIST_SUCCESS = 'QUERY_LIST_SUCCESS'; //查询详情成功
	var QUERY_LIST_FAILURE = exports.QUERY_LIST_FAILURE = 'QUERY_LIST_FAILURE'; //查询详情失败
	var QUERY_LIST_FETCHING = exports.QUERY_LIST_FETCHING = 'QUERY_LIST_FETCHING'; //开始加载
	var QUERY_LIST_FETCHOVER = exports.QUERY_LIST_FETCHOVER = 'QUERY_LIST_FETCHOVER'; //加载结束
	var CHANGE_CURRENT_ITEM = exports.CHANGE_CURRENT_ITEM = 'CHANGE_CURRENT_ITEM'; //点击
	var LIST_FIRSTFETCH_CLOSE = exports.LIST_FIRSTFETCH_CLOSE = 'LIST_FIRSTFETCH_CLOSE'; //第一次查询
	var ADD_CHECK_ITEM = exports.ADD_CHECK_ITEM = 'ADD_CHECK_ITEM'; //单选
	var REMOVE_CHECK_ITEM = exports.REMOVE_CHECK_ITEM = 'REMOVE_CHECK_ITEM'; //去除单选
	var CHECK_ALL_ITEM = exports.CHECK_ALL_ITEM = 'CHECK_ALL_ITEM'; //全选
	var UNCHECK_ALL_ITEM = exports.UNCHECK_ALL_ITEM = 'UNCHECK_ALL_ITEM'; //取消全选
	var DEL_LIST_SUCCESS = exports.DEL_LIST_SUCCESS = 'DEL_LIST_SUCCESS'; //删除所选短信组
	var DEL_LIST_FAILURE = exports.DEL_LIST_FAILURE = 'DEL_LIST_FAILURE';
	var CHANGE_DATA_TYPE = exports.CHANGE_DATA_TYPE = 'CHANGE_DATA_TYPE'; //修改datatype，让滚动条回滚
	var RESET_FIRSTFETCH = exports.RESET_FIRSTFETCH = 'RESET_FIRSTFETCH';
	var SEARCH_CHANGE_RESET = exports.SEARCH_CHANGE_RESET = 'SEARCH_CHANGE_RESET';
	var CHANGE_SEARCH_FLAG = exports.CHANGE_SEARCH_FLAG = 'CHANGE_SEARCH_FLAG';
	var ADD_NEW_ITEM = exports.ADD_NEW_ITEM = 'ADD_NEW_ITEM';
	var CANCEL_NEW_ITEM = exports.CANCEL_NEW_ITEM = 'CANCEL_NEW_ITEM';

	function queryList(content, length, type) {
	    //获取便签列表
	    return function (dispatch, getState) {
	        var group = getState().group;
	        var state = getState().list;
	        if (state.isFetching) {
	            return false;
	        }
	        dispatch(queryListFetching());
	        length = length ? length : 20;
	        var url = _interface2.default.apiUrl.getnotegroups,
	            isSearch = false;
	        if (content && content !== '') {
	            url = _interface2.default.apiUrl.getnotebycontent;
	            isSearch = true;
	        }
	        var p = new _promise2.default(function (resolve, reject) {
	            (0, _reqwest2.default)({
	                url: url,
	                method: 'get',
	                type: 'json',
	                data: {
	                    groupUuid: group.curGroupId || -1,
	                    start: state.start,
	                    length: length,
	                    randnum: Math.random(),
	                    content: content
	                },
	                success: function success(result) {
	                    resolve(result);
	                },
	                error: function error(result) {
	                    dispatch(queryListFetchOver());
	                }
	            });
	        });

	        var response = function response(result) {
	            if (result.returnCode === 200) {
	                var value = (0, _extends3.default)({}, result.returnValue, {
	                    next: type,
	                    searchContent: content,
	                    isSearch: isSearch
	                });
	                dispatch(queryListSuccess(value));
	            }
	            dispatch(queryListFetchOver());
	        };

	        p.then(function (result) {
	            if (state.firstFetch == null && !window.browser.lowie10) {
	                setTimeout(function () {
	                    response(result);
	                }, 500);
	            } else {
	                response(result);
	            }
	        });
	    };
	}

	function delList() {
	    return function (dispatch, getState) {
	        var state = getState().list,
	            data = {},
	            id = [],
	            leftList = [],
	            that = this;
	        var group = getState().group;
	        var length = state.multiItem.length;
	        if (length == 0) {
	            data = {
	                groupUuid: group.curGroupId,
	                uuidList: state.list[state.currentItem].uuid,
	                randnum: Math.random()
	            };
	        } else {
	            if (state.choseAll) {
	                state.list.forEach(function (value, key) {
	                    if (state.multiItem.indexOf(key) < 0) {
	                        id.push(value.uuid);
	                        leftList.push(value);
	                    }
	                });
	                data = {
	                    groupUuid: group.curGroupId,
	                    uuidList: [],
	                    unchooseUuidList: id.join(','),
	                    randnum: Math.random()
	                };
	            } else {
	                state.list.forEach(function (value, key) {
	                    if (state.multiItem.indexOf(key) >= 0) {
	                        id.push(value.uuid);
	                    } else {
	                        leftList.push(value);
	                    }
	                });
	                data = {
	                    groupUuid: group.curGroupId,
	                    uuidList: id.join(','),
	                    unchooseUuidList: [],
	                    randnum: Math.random()
	                };
	            }
	        }
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.recyclenote,
	            method: 'get',
	            type: 'json',
	            data: data,
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    dispatch(delListSuccess(leftList));
	                    //补上删除数量的数据
	                    if (!state.choseAll) {
	                        dispatch(queryList(length, 'next'));
	                    }
	                }
	            },
	            error: function error(result) {
	                dispatch(delListFailure());
	            }
	        });
	    };
	}

	function resetFirstFetch() {
	    return {
	        type: RESET_FIRSTFETCH
	    };
	}

	function changeDataType(value) {
	    //取消选择
	    return {
	        type: CHANGE_DATA_TYPE,
	        value: value
	    };
	}

	function delListSuccess(list) {
	    return {
	        type: DEL_LIST_SUCCESS,
	        list: list
	    };
	}

	function delListFailure() {
	    return {
	        type: DEL_LIST_FAILURE
	    };
	}

	function unCheckAllItem() {
	    return {
	        type: UNCHECK_ALL_ITEM
	    };
	}

	function checkAllItem(done) {
	    return {
	        type: CHECK_ALL_ITEM,
	        done: done
	    };
	}

	function addCheckItem(index) {
	    return {
	        type: ADD_CHECK_ITEM,
	        index: index
	    };
	}

	function removeLastItem(index) {
	    return function (dispatch, getState) {
	        var state = getState().list;
	        dispatch(removeCheckItem(index));
	        dispatch(queryDetail(0));
	    };
	}

	function removeCheckItem(index) {
	    return {
	        type: REMOVE_CHECK_ITEM,
	        index: index
	    };
	}

	function changeCurrentItem(index) {
	    //点击
	    return {
	        type: CHANGE_CURRENT_ITEM,
	        index: index
	    };
	}

	function queryListFetching() {
	    //开始查询
	    return {
	        type: QUERY_LIST_FETCHING
	    };
	}

	function queryListFetchOver() {
	    //查询结束
	    return {
	        type: QUERY_LIST_FETCHOVER
	    };
	}

	function queryListSuccess(data, content) {
	    //查询详情成功
	    return {
	        type: QUERY_LIST_SUCCESS,
	        data: data,
	        content: content
	    };
	}

	function queryListFaliure(payload) {
	    //查询详情失败
	    return {
	        type: QUERY_LIST_FAILURE,
	        payload: payload
	    };
	}

	function firstFetchClose() {
	    //每次第一次查询
	    return {
	        type: LIST_FIRSTFETCH_CLOSE
	    };
	}

	function searchChangeReset(payload) {
	    return {
	        type: SEARCH_CHANGE_RESET,
	        payload: payload
	    };
	}

	function changeSearchFlag(payload) {
	    return {
	        type: CHANGE_SEARCH_FLAG,
	        payload: payload
	    };
	}

	function addNewItem() {
	    return {
	        type: ADD_NEW_ITEM
	    };
	}

	function cancelNewItem() {
	    return {
	        type: CANCEL_NEW_ITEM
	    };
	}

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(380), __esModule: true };

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(158);
	__webpack_require__(72);
	__webpack_require__(142);
	__webpack_require__(381);
	module.exports = __webpack_require__(80).Promise;

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(77)
	  , global             = __webpack_require__(79)
	  , ctx                = __webpack_require__(81)
	  , classof            = __webpack_require__(121)
	  , $export            = __webpack_require__(78)
	  , isObject           = __webpack_require__(86)
	  , aFunction          = __webpack_require__(82)
	  , anInstance         = __webpack_require__(305)
	  , forOf              = __webpack_require__(306)
	  , speciesConstructor = __webpack_require__(382)
	  , task               = __webpack_require__(383).set
	  , microtask          = __webpack_require__(385)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(113)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(304)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(112)($Promise, PROMISE);
	__webpack_require__(307)(PROMISE);
	Wrapper = __webpack_require__(80)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(122)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(85)
	  , aFunction = __webpack_require__(82)
	  , SPECIES   = __webpack_require__(113)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(81)
	  , invoke             = __webpack_require__(384)
	  , html               = __webpack_require__(111)
	  , cel                = __webpack_require__(90)
	  , global             = __webpack_require__(79)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(103)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 384 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(79)
	  , macrotask = __webpack_require__(383).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(103)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(358);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _extends2 = __webpack_require__(184);

	var _extends3 = _interopRequireDefault(_extends2);

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	exports.default = detail;

	var _detail = __webpack_require__(387);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var initState = {
	    body: '',
	    lastUpdate: '',
	    desktop: 0,
	    encrypt: 0,
	    fileList: "",
	    files: {},
	    firstImg: "",
	    firstImgSrc: null,
	    firstRecord: "",
	    firstRecordSrc: null,
	    fontSize: 18,
	    paper: 0,
	    status: "U",
	    topdate: 0,
	    types: null,
	    uuid: "",
	    groupStatus: "",
	    isFetching: false,
	    firstFetch: false, //主要控制第一次加载的loading
	    editModel: false

	};

	function detail() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	    var action = arguments[1];

	    switch (action.type) {
	        case _detail.CREATE_NEW_ITEM:
	            var time = new Date().getTime();
	            return {
	                body: '',
	                lastUpdate: time,
	                desktop: 0,
	                encrypt: 0,
	                fileList: "",
	                files: {},
	                firstImg: "",
	                firstImgSrc: null,
	                firstRecord: "",
	                firstRecordSrc: null,
	                fontSize: 18,
	                paper: 0,
	                status: "U",
	                topdate: 0,
	                types: null,
	                uuid: "",
	                groupStatus: "",
	                isFetching: false,
	                firstFetch: true, //主要控制第一次加载的loading
	                editModel: true
	            };
	        case _detail.ENTER_EDIT_MODEL:
	            return (0, _assign2.default)({}, state, {
	                editModel: true
	            });
	        case _detail.EXIT_EDIT_MODEL:
	            return (0, _assign2.default)({}, state, {
	                editModel: false
	            });
	        case _detail.QUERY_DETAIL:
	            return action.data;

	        case _detail.QUERY_DETAIL_SUCCESS:
	            var data = action.data;
	            return (0, _assign2.default)({}, state, (0, _extends3.default)({}, data, {
	                firstFetch: true
	            }));

	        case _detail.QUERY_DETAIL_FAILURE:
	            return state;

	        case _detail.QUERY_DETAIL_FETCHING:
	            return (0, _assign2.default)({}, state, {
	                isFetching: true
	            });

	        case _detail.QUERY_DETAIL_FETCHOVER:
	            return (0, _assign2.default)({}, state, {
	                isFetching: false
	            });

	        case _detail.DEL_SMS_SUCCESS:
	            var list = [].concat((0, _toConsumableArray3.default)(state.list));
	            var index = void 0;
	            list.forEach(function (value, key) {
	                if (value.uuId == action.id) {
	                    index = key;
	                    return false;
	                }
	            });
	            list.splice(index, 1);
	            return (0, _assign2.default)({}, state, {
	                list: list
	            });

	        case _detail.DEL_SMS_FAILURE:
	            return state;

	        case _detail.RESET_FIRSTFETCH:
	            return (0, _assign2.default)({}, state, {
	                firstFetch: false
	            });
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CREATE_NEW_ITEM = exports.EXIT_EDIT_MODEL = exports.ENTER_EDIT_MODEL = exports.RESET_FIRSTFETCH = exports.DEL_SMS_FAILURE = exports.DEL_SMS_SUCCESS = exports.QUERY_DETAIL_FETCHOVER = exports.QUERY_DETAIL_FETCHING = exports.QUERY_DETAIL_FAILURE = exports.QUERY_DETAIL_SUCCESS = exports.QUERY_DETAIL = undefined;

	var _extends2 = __webpack_require__(184);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.queryDetail = queryDetail;
	exports.delSms = delSms;
	exports.enterEditModel = enterEditModel;
	exports.exitEditModel = exitEditModel;
	exports.resetDetailFirstFetch = resetDetailFirstFetch;
	exports.delSmsSuccess = delSmsSuccess;
	exports.delSmsFailure = delSmsFailure;
	exports.queryDetailSuccess = queryDetailSuccess;
	exports.queryDetailFailure = queryDetailFailure;
	exports.queryDetailFetching = queryDetailFetching;
	exports.queryDetailFetchOver = queryDetailFetchOver;
	exports.createNewItem = createNewItem;

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var QUERY_DETAIL = exports.QUERY_DETAIL = 'QUERY_DETAIL'; //查询详情
	var QUERY_DETAIL_SUCCESS = exports.QUERY_DETAIL_SUCCESS = 'QUERY_DETAIL_SUCCESS'; //查询详情成功
	var QUERY_DETAIL_FAILURE = exports.QUERY_DETAIL_FAILURE = 'QUERY_DETAIL_FAILURE'; //查询详情失败
	var QUERY_DETAIL_FETCHING = exports.QUERY_DETAIL_FETCHING = 'QUERY_DETAIL_FETCHING'; //开始加载
	var QUERY_DETAIL_FETCHOVER = exports.QUERY_DETAIL_FETCHOVER = 'QUERY_DETAIL_FETCHOVER'; //加载结束
	var DEL_SMS_SUCCESS = exports.DEL_SMS_SUCCESS = 'DEL_SMS_SUCCESS';
	var DEL_SMS_FAILURE = exports.DEL_SMS_FAILURE = 'DEL_SMS_FAILURE';
	var RESET_FIRSTFETCH = exports.RESET_FIRSTFETCH = 'RESET_FIRSTFETCH';
	var ENTER_EDIT_MODEL = exports.ENTER_EDIT_MODEL = 'ENTER_EDIT_MODEL';
	var EXIT_EDIT_MODEL = exports.EXIT_EDIT_MODEL = 'EXIT_EDIT_MODEL';
	var CREATE_NEW_ITEM = exports.CREATE_NEW_ITEM = 'CREATE_NEW_ITEM';

	function queryDetail(id) {
	    //获取详情列表
	    return function (dispatch, getState) {
	        var state = getState().detail;
	        var list = getState().list;
	        var uuid = id;
	        if (state.isFetching) {
	            return false;
	        }
	        dispatch(queryDetailFetching());

	        if ((id || id == 0) && !isNaN(id)) {
	            uuid = list.list[id].uuid;
	        }
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.getnote,
	            method: 'get',
	            type: 'json',
	            data: {
	                uuid: uuid,
	                randnum: Math.random()
	            },
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    dispatch(queryDetailSuccess((0, _extends3.default)({}, result.returnValue)));
	                }
	                dispatch(queryDetailFetchOver());
	            },
	            error: function error(result) {
	                dispatch(queryDetailFetchOver());
	            }
	        });
	    };
	}

	function delSms(id) {
	    //删除单条短信
	    if (!id) {
	        return false;
	    }
	    return function (dispatch, getState) {
	        var state = getState().detail;
	        var list = getState().list;
	        (0, _reqwest2.default)({
	            url: _interface2.default.apiUrl.deletesmstorecycle,
	            method: 'get',
	            type: 'json',
	            data: {
	                idsStr: id,
	                mode: 0,
	                type: 0,
	                randnum: Math.random()
	            },
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    dispatch(delSmsSuccess(id));
	                    dispatch(queryDetail(list.list[list.currentItem].uniformNumber, 1, 'next'));
	                }
	            },
	            error: function error(result) {
	                dispatch(delSmsFailure());
	            }
	        });
	    };
	}

	function enterEditModel() {
	    return {
	        type: ENTER_EDIT_MODEL
	    };
	}

	function exitEditModel() {
	    return {
	        type: EXIT_EDIT_MODEL
	    };
	}

	function resetDetailFirstFetch() {
	    return {
	        type: RESET_FIRSTFETCH
	    };
	}

	function delSmsSuccess(id) {
	    //删除成功
	    return {
	        type: DEL_SMS_SUCCESS,
	        id: id
	    };
	}

	function delSmsFailure() {
	    //删除失败
	    return {
	        type: DEL_SMS_FAILURE
	    };
	}

	function queryDetailSuccess(data) {
	    //查询详情成功
	    return {
	        type: QUERY_DETAIL_SUCCESS,
	        data: data
	    };
	}

	function queryDetailFailure(payload) {
	    //查询详情失败
	    return {
	        type: QUERY_DETAIL_FAILURE,
	        payload: payload
	    };
	}

	function queryDetailFetching() {
	    //开始查询
	    return {
	        type: QUERY_DETAIL_FETCHING
	    };
	}

	function queryDetailFetchOver() {
	    //查询结束
	    return {
	        type: QUERY_DETAIL_FETCHOVER
	    };
	}

	function createNewItem() {
	    return {
	        type: CREATE_NEW_ITEM
	    };
	}

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	exports.default = modal;

	var _modal = __webpack_require__(389);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var initState = {
	    multiDel: false,
	    singleDel: false,
	    singleDelId: ''
	};

	function modal() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	    var action = arguments[1];

	    switch (action.type) {
	        case _modal.MULTI_DEL_VISIBLE:
	            return (0, _assign2.default)({}, state, {
	                multiDel: true
	            });
	        case _modal.MULTI_DEL_HIDDEN:
	            return (0, _assign2.default)({}, state, {
	                multiDel: false
	            });
	        case _modal.SINGLE_DEL_VISIBLE:
	            return (0, _assign2.default)({}, state, {
	                singleDel: true,
	                singleDelId: action.id
	            });
	        case _modal.SINGLE_DEL_HIDDEN:
	            return (0, _assign2.default)({}, state, {
	                singleDel: false,
	                singleDelId: ''
	            });
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SINGLE_DEL_HIDDEN = exports.SINGLE_DEL_VISIBLE = exports.MULTI_DEL_HIDDEN = exports.MULTI_DEL_VISIBLE = undefined;
	exports.multiDelVisible = multiDelVisible;
	exports.multiDelHidden = multiDelHidden;
	exports.singleDelVisible = singleDelVisible;
	exports.singleDelHidden = singleDelHidden;

	var _reqwest = __webpack_require__(3);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	var _interface = __webpack_require__(130);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var MULTI_DEL_VISIBLE = exports.MULTI_DEL_VISIBLE = 'MULTI_DEL_VISIBLE';
	var MULTI_DEL_HIDDEN = exports.MULTI_DEL_HIDDEN = 'MULTI_DEL_HIDDEN';
	var SINGLE_DEL_VISIBLE = exports.SINGLE_DEL_VISIBLE = 'SINGLE_DEL_VISIBLE';
	var SINGLE_DEL_HIDDEN = exports.SINGLE_DEL_HIDDEN = 'SINGLE_DEL_HIDDEN';

	function multiDelVisible() {
	    return {
	        type: MULTI_DEL_VISIBLE
	    };
	}

	function multiDelHidden() {
	    return {
	        type: MULTI_DEL_HIDDEN
	    };
	}

	function singleDelVisible(id) {
	    return {
	        type: SINGLE_DEL_VISIBLE,
	        id: id
	    };
	}

	function singleDelHidden() {
	    return {
	        type: SINGLE_DEL_HIDDEN
	    };
	}

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _group = __webpack_require__(391);

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
/* 391 */
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
	            url: _interface2.default.apiUrl.gettags,
	            method: 'get',
	            type: 'json',
	            data: {},
	            success: function success(result) {
	                if (result.returnCode === 200) {
	                    var len = result.returnValue.data.length;
	                    var userId = result.returnValue.userId;
	                    var value = result.returnValue.data;
	                    if (len > 2) {
	                        value = value.slice(0, len - 2);
	                    }
	                    var index = 0;
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
/* 392 */
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

	var _head = __webpack_require__(182);

	var _head2 = _interopRequireDefault(_head);

	var _foot = __webpack_require__(277);

	var _foot2 = _interopRequireDefault(_foot);

	var _container = __webpack_require__(393);

	var _container2 = _interopRequireDefault(_container);

	var _list = __webpack_require__(378);

	var listAction = _interopRequireWildcard(_list);

	var _detail = __webpack_require__(387);

	var detailAction = _interopRequireWildcard(_detail);

	var _modal = __webpack_require__(389);

	var modalAction = _interopRequireWildcard(_modal);

	var _group = __webpack_require__(391);

	var groupAction = _interopRequireWildcard(_group);

	var _nZepto = __webpack_require__(410);

	var _nZepto2 = _interopRequireDefault(_nZepto);

	__webpack_require__(333);

	__webpack_require__(412);

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
	                list = _props.list,
	                detail = _props.detail,
	                actions = _props.actions,
	                modal = _props.modal,
	                group = _props.group;

	            return _react2.default.createElement('div', { className: 'container note' }, _react2.default.createElement(_head2.default, null), _react2.default.createElement(_container2.default, { list: list, detail: detail, group: group, actions: actions, modal: modal }), _react2.default.createElement(_foot2.default, null));
	        }
	    }]);
	    return App;
	}(_react.Component);

	function mapStateToProps(state) {
	    return {
	        list: state.list,
	        detail: state.detail,
	        modal: state.modal,
	        group: state.group
	    };
	}

	function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)((0, _assign2.default)({}, listAction, detailAction, modalAction, groupAction), dispatch)
	    };
	}

	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 393 */
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

	var _leftWrap = __webpack_require__(394);

	var _leftWrap2 = _interopRequireDefault(_leftWrap);

	var _rightWrap = __webpack_require__(404);

	var _rightWrap2 = _interopRequireDefault(_rightWrap);

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
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                list = _props.list,
	                detail = _props.detail,
	                modal = _props.modal,
	                group = _props.group,
	                actions = _props.actions;

	            return _react2.default.createElement('div', { className: 'flyme-content clearfix', id: 'flymeContent' }, _react2.default.createElement('div', { className: 'flyme-content-body' }, _react2.default.createElement(_index2.default, { type: 'note' }), _react2.default.createElement(_leftWrap2.default, { list: list, detail: detail, actions: actions, group: group }), _react2.default.createElement(_rightWrap2.default, { detail: detail, list: list, modal: modal, actions: actions, group: group })));
	        }
	    }]);
	    return Container;
	}(_react.Component);

	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 394 */
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

	var _listLi = __webpack_require__(395);

	var _listLi2 = _interopRequireDefault(_listLi);

	var _index = __webpack_require__(281);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(282);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(396);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(398);

	var _index8 = _interopRequireDefault(_index7);

	var _index9 = __webpack_require__(284);

	var _index10 = _interopRequireDefault(_index9);

	var _filterWrap = __webpack_require__(400);

	var _filterWrap2 = _interopRequireDefault(_filterWrap);

	var _utilDom = __webpack_require__(138);

	var _index11 = __webpack_require__(183);

	var _index12 = _interopRequireDefault(_index11);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var LeftWrap = function (_Component) {
	    (0, _inherits3.default)(LeftWrap, _Component);

	    function LeftWrap(props) {
	        (0, _classCallCheck3.default)(this, LeftWrap);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (LeftWrap.__proto__ || (0, _getPrototypeOf2.default)(LeftWrap)).call(this, props));

	        _this.checkCallback = function (index) {
	            var i = -1;
	            _this.props.list.multiItem.forEach(function (value, key) {
	                if (value === index) {
	                    i = key;
	                    return false;
	                }
	            });
	            if (i == -1) {
	                _this.props.actions.addCheckItem(index);
	            } else {
	                _this.props.actions.removeCheckItem(i);
	            }
	        };

	        _this.checkAllCallback = function () {
	            if (_this.props.list.multiItem.length < _this.props.list.list.length) {
	                _this.props.actions.checkAllItem();
	            } else {
	                _this.props.actions.unCheckAllItem();
	            }
	        };

	        _this.showDetail = function (index) {
	            if (_this.props.list.currentItem !== index) {
	                _this.props.actions.changeCurrentItem(index);
	                _this.props.actions.queryDetail(index);
	            }
	        };

	        _this.loadNext = function (length) {
	            _this.props.actions.queryList(null, length, 'next');
	        };

	        _this.onScroll = function () {
	            _this.loadNext();
	        };

	        _this.addNewItem = function () {
	            if (_this.props.list.isAddNewItem) {
	                _index12.default.alert('您之前创建的便签尚未保存/取消');
	                return false;
	            }
	            _this.props.actions.createNewItem();
	            _this.props.actions.addNewItem();
	        };

	        _this.state = {
	            searchActive: false
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(LeftWrap, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.actions.getGroupData();
	            this.props.actions.queryList();
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            if ((0, _stringify2.default)(nextProps.list) != (0, _stringify2.default)(this.props.list) || nextProps.curGroupId == this.props.curGroupId) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.list.firstFetch) {
	                this.props.actions.queryDetail(nextProps.list.currentItem);
	                this.props.actions.firstFetchClose();
	            }
	        }
	    }, {
	        key: 'activeChange',
	        value: function activeChange(flag) {
	            this.setState({ searchActive: flag });
	        }
	        //单选

	        //全选

	        //详情

	        //新增

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                list = _props.list,
	                group = _props.group,
	                column = _props.column,
	                actions = _props.actions,
	                detail = _props.detail;

	            //group

	            var listDom = null;
	            var listli = [];
	            var leftBodyClass = 'left-body';
	            var choseAllDom = _react2.default.createElement('div', { className: 'left-chose' }, _react2.default.createElement('div', { className: 'c-choseall' }, _react2.default.createElement(_index2.default, { type: "choseall", checkCallback: this.checkAllCallback, id: 'choseall', checked: list.choseAllBtn })), _react2.default.createElement('div', { className: 'c-tip' }, '\u5168\u9009'));
	            if (list && list.list.length > 0) {
	                list.list.map(function (d, i) {
	                    var active = false,
	                        checked = false;
	                    if (list.currentItem || list.currentItem == 0) {
	                        if (list.list[list.currentItem].uuid === d.uuid) {
	                            active = true;
	                        }
	                    }
	                    if (list.multiItem.indexOf(i) >= 0) {
	                        checked = true;
	                    }
	                    listli.push(_react2.default.createElement(_listLi2.default, { key: i, data: d, index: i, active: active, detail: detail, checked: checked, showDetail: _this2.showDetail, checkCallback: _this2.checkCallback, list: list }));
	                });
	                leftBodyClass += list.isSearch ? ' left-body-search' : '';
	                listDom = _react2.default.createElement(_index4.default, { onScroll: this.onScroll, dataType: this.props.list.dataType, name: '1' }, _react2.default.createElement('ul', null, listli));
	            } else {
	                leftBodyClass += ' no-data';
	                choseAllDom = null;
	                if (list.firstFetch == null) {
	                    listDom = _react2.default.createElement(_index8.default, null);
	                } else {
	                    listDom = _react2.default.createElement(_index6.default, null);
	                }
	            }

	            return _react2.default.createElement('div', { className: 'left-wrap', id: 'leftWrap' }, _react2.default.createElement('div', { className: 'left-header' }, _react2.default.createElement('span', null, '\u4FBF\u7B7E'), _react2.default.createElement('a', { href: 'javascript:void(0);', title: '\u65B0\u5EFA', className: 'add', onClick: this.addNewItem })), _react2.default.createElement(_filterWrap2.default, {
	                searchInfo: { count: list.count, content: list.searchContent },
	                actions: actions,
	                group: group,
	                list: list
	            }), _react2.default.createElement('div', { className: 'left-search-result', style: { display: list.isSearch ? 'block' : 'none' } }, '\u641C\u7D22\u201C', _react2.default.createElement('span', { title: list.searchContent }, (0, _utilDom.subStringLen)(list.searchContent, 16)), '\u201D', _react2.default.createElement('i', null, list.count), '\u4E2A\u7ED3\u679C'), _react2.default.createElement('div', { className: leftBodyClass, ref: 'ul' }, listDom), choseAllDom);
	        }
	    }]);
	    return LeftWrap;
	}(_react.Component);

	exports.default = LeftWrap;
	module.exports = exports['default'];

/***/ },
/* 395 */
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

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _index = __webpack_require__(281);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(183);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var SmsLi = function (_Component) {
	    (0, _inherits3.default)(SmsLi, _Component);

	    function SmsLi(props) {
	        (0, _classCallCheck3.default)(this, SmsLi);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (SmsLi.__proto__ || (0, _getPrototypeOf2.default)(SmsLi)).call(this, props));

	        _this.showDetail = function (e) {
	            if (_this.props.list.multiItem.length > 0) {
	                return false;
	            }
	            if (_this.props.detail.editModel) {
	                _index4.default.alert('您之前创建的便签尚未保存/取消');
	                return false;
	            }
	            _this.props.showDetail(_this.props.index);
	            e.stopPropagation();
	        };

	        _this.checkCallback = function () {
	            _this.props.checkCallback(_this.props.index);
	        };

	        return _this;
	    }

	    (0, _createClass3.default)(SmsLi, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            if ((0, _stringify2.default)(this.props.data) !== (0, _stringify2.default)(nextProps.data) || this.props.checked !== nextProps.checked || this.props.active !== nextProps.active) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                group = _props.group,
	                data = _props.data,
	                active = _props.active,
	                checked = _props.checked;

	            var nameClass = 'i-name bold';
	            var time = _utilDom2.default.compareDate(data.modifyTime);
	            var itemClass = 'item clearfix';
	            if (active) {
	                itemClass += ' active';
	            }
	            if (checked) {
	                itemClass += ' multi';
	            }
	            return _react2.default.createElement('li', { className: itemClass, 'data-index': this.props.index, onTouchEnd: this.showDetail, onClick: this.showDetail }, _react2.default.createElement('div', { className: 'i-detail' }, _react2.default.createElement('div', { className: 'i-content', ref: 'content' }, _react2.default.createElement('div', { className: nameClass }, data.title), _react2.default.createElement('div', { className: 'list-item clearfix' }, _react2.default.createElement('div', { className: 'time' }, time), _react2.default.createElement('div', { className: 'img clearfix' }, data.firstImg ? _react2.default.createElement('i', { className: 'i-img' }) : null, data.firstRecord ? _react2.default.createElement('i', { className: 'i-record' }) : null, data.topdate ? _react2.default.createElement('i', { className: 'i-topdate' }) : null)))), _react2.default.createElement(_index2.default, { checkCallback: this.checkCallback, id: data.uniformNumber, checked: checked }));
	        }
	    }]);
	    return SmsLi;
	}(_react.Component);

	exports.default = SmsLi;
	module.exports = exports['default'];

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(397);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _react2.default.createClass({
	    displayName: 'App',
	    render: function render() {
	        var emptyTip = "没有数据";

	        return _react2.default.createElement(
	            'div',
	            { className: 'nodata' },
	            _react2.default.createElement(
	                'span',
	                { className: 'nodata-tip' },
	                emptyTip
	            )
	        );
	    }
	});

	module.exports = App;

/***/ },
/* 397 */
185,
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(399);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _react2.default.createClass({
	    displayName: 'App',
	    render: function render() {
	        var gif = _react2.default.createElement(
	            'svg',
	            { className: 'spinner', width: '26px', height: '26px', viewBox: '0 0 66 66', xmlns: 'http://www.w3.org/2000/svg' },
	            _react2.default.createElement('circle', { className: 'path', fill: 'none', strokeWidth: '6', strokeLinecap: 'round', cx: '33', cy: '33', r: '30', style: { stroke: '#4288ed' } })
	        );
	        return _react2.default.createElement(
	            'div',
	            { className: 'waiting' },
	            _react2.default.createElement(
	                'div',
	                { className: 'waiting-pic' },
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    gif
	                )
	            )
	        );
	    }
	});

	module.exports = App;

/***/ },
/* 399 */
185,
/* 400 */
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

	var _LeftGroupWrap = __webpack_require__(401);

	var _LeftGroupWrap2 = _interopRequireDefault(_LeftGroupWrap);

	var _Search = __webpack_require__(403);

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
	            // this.props.activeChange(flag);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                list = _props.list,
	                group = _props.group,
	                searchInfo = _props.searchInfo,
	                actions = _props.actions;

	            return _react2.default.createElement('div', { className: this.state.active ? 'left-filter-wrap active clearfix' : 'left-filter-wrap clearfix' }, _react2.default.createElement(_Search2.default, { searchInfo: searchInfo, actions: actions, list: list, activeChange: this.activeChange.bind(this) }), _react2.default.createElement('div', { className: 'left-group clearfix' }, _react2.default.createElement(_LeftGroupWrap2.default, { group: group, actions: actions, list: list })));
	        }
	    }]);
	    return FilterWrap;
	}(_react.Component);

	exports.default = FilterWrap;
	module.exports = exports['default'];

/***/ },
/* 401 */
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

	var _leftGroupItem = __webpack_require__(402);

	var _leftGroupItem2 = _interopRequireDefault(_leftGroupItem);

	var _index = __webpack_require__(284);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(282);

	var _index4 = _interopRequireDefault(_index3);

	var _utilDom = __webpack_require__(138);

	var _index5 = __webpack_require__(183);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var LeftGroupWrap = function (_Component) {
	    (0, _inherits3.default)(LeftGroupWrap, _Component);

	    function LeftGroupWrap(props) {
	        (0, _classCallCheck3.default)(this, LeftGroupWrap);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (LeftGroupWrap.__proto__ || (0, _getPrototypeOf2.default)(LeftGroupWrap)).call(this, props));

	        _this.itemChange = function (data) {
	            if (_this.props.list.isAddNewItem) {
	                _index6.default.alert('您之前创建的便签尚未保存/取消');
	                return false;
	            }
	            _this.props.actions.groupChange(data);
	            _this.props.actions.searchChangeReset();
	            _this.props.actions.queryList();
	        };

	        return _this;
	    }

	    (0, _createClass3.default)(LeftGroupWrap, [{
	        key: 'newGroup',
	        value: function newGroup(e) {
	            e.nativeEvent.stopImmediatePropagation();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var group = this.props.group;
	            var groupList = group.data.map(function (v, i) {
	                return _react2.default.createElement(_leftGroupItem2.default, { data: v, key: v.id, selected: v.id === group.curGroupId, canEdit: false, group: group, itemChange: _this2.itemChange });
	            });
	            return _react2.default.createElement(_index2.default, {
	                style: { width: 200 },
	                align: 'left',
	                hasAngle: true,
	                menu: groupList,
	                trigger: 'click'
	            }, _react2.default.createElement('div', { className: 'list-header-left' }, _react2.default.createElement('i', null), _react2.default.createElement('span', { className: 'sel-input' }, (0, _utilDom.subStringLen)(group.curGroupName, 16), '(', group.count, ')')));
	        }
	    }]);
	    return LeftGroupWrap;
	}(_react.Component);

	exports.default = LeftGroupWrap;
	module.exports = exports['default'];

/***/ },
/* 402 */
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
	            this.props.itemChange(data);
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
/* 403 */
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

	var _index = __webpack_require__(183);

	var _index2 = _interopRequireDefault(_index);

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
	            var _this3 = this;

	            var _this = this;
	            setTimeout(function () {
	                var value = _this3.state.value;
	                if (value === '') {
	                    if (_this3.props.searchInfo.content !== '') {
	                        if (!_this3.clear) {
	                            _this3.setState({ tip: '搜索' });
	                            _this3.props.actions.searchChangeReset();
	                            _this3.props.actions.changeSearchFlag({ isSearch: false });
	                            _this3.props.actions.queryList();
	                            _this.props.activeChange(false);
	                        } else {
	                            _this3.clear = false;
	                            _this3.refs.input.focus();
	                        }
	                    } else {
	                        if (!_this3.clear) {
	                            _this3.setState({ tip: '搜索' });
	                            _this.props.activeChange(false);
	                        } else {
	                            _this3.clear = false;
	                        }
	                    }
	                    return;
	                }
	                if (value === _this3.props.searchInfo.content) {
	                    return;
	                }
	                _this3.props.actions.searchChangeReset();
	                _this3.props.actions.changeSearchFlag({ isSearch: true });
	                _this3.props.actions.queryList(value);
	            }, 100);
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus(e) {
	            if (this.props.list.isAddNewItem) {
	                _index2.default.alert('您之前创建的便签尚未保存/取消');
	                e.target.blur();
	                return false;
	            }
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
	            var _this4 = this;

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
	                    _this4.refs.input.focus();
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
/* 404 */
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

	var _multiList = __webpack_require__(405);

	var _multiList2 = _interopRequireDefault(_multiList);

	var _index = __webpack_require__(407);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(396);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(398);

	var _index6 = _interopRequireDefault(_index5);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _rightGroupWrap = __webpack_require__(409);

	var _rightGroupWrap2 = _interopRequireDefault(_rightGroupWrap);

	var _index7 = __webpack_require__(183);

	var _index8 = _interopRequireDefault(_index7);

	var _nZepto = __webpack_require__(410);

	var _nZepto2 = _interopRequireDefault(_nZepto);

	var _editor = __webpack_require__(411);

	var _editor2 = _interopRequireDefault(_editor);

	var _index9 = __webpack_require__(282);

	var _index10 = _interopRequireDefault(_index9);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	window.editorObj = null;

	var RightWrap = function (_Component) {
	    (0, _inherits3.default)(RightWrap, _Component);

	    function RightWrap(props) {
	        (0, _classCallCheck3.default)(this, RightWrap);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (RightWrap.__proto__ || (0, _getPrototypeOf2.default)(RightWrap)).call(this, props));

	        _this.loadNext = function (num) {
	            _this.props.actions.queryDetail(null, num, 'next');
	        };

	        _this.onScroll = function () {
	            _this.loadNext();
	        };

	        _this.finish = function () {};

	        _this.cancel = function () {
	            if (_this.props.list.isAddNewItem) {
	                _this.props.actions.cancelNewItem();
	                _this.props.actions.changeCurrentItem(0);
	                _this.props.actions.queryDetail(0);
	            }
	            _this.props.actions.exitEditModel();
	            _this.props.actions.unCheckAllItem();
	        };

	        _this.delmulti = function () {
	            _this.props.actions.multiDelVisible();
	        };

	        _this.delsingle = function (id) {
	            _this.props.actions.singleDelVisible(id);
	        };

	        _this.edit = function () {
	            if (_this.props.list.isAddNewItem) {
	                _index8.default.alert('您之前创建的便签尚未保存/取消');
	                return false;
	            }
	            _this.props.actions.enterEditModel();
	        };

	        _this.deleteAll = function () {
	            _this.props.actions.delList();
	            _this.props.actions.multiDelHidden();
	            //判断是否需要重新获取详情数据
	            if (_this.props.list.multiItem.indexOf(_this.props.list.currentItem) >= 0) {
	                _this.props.actions.changeCurrentItem(0);
	                _this.props.actions.queryDetail(0);
	            }
	        };

	        _this.deleteSingle = function () {
	            _this.props.actions.delList(_this.props.modal.singleDelId);
	            _this.props.actions.singleDelHidden();
	        };

	        _this.insertList = function () {
	            (0, _nZepto2.default)(editorObj.editorInfo.focusObj[0]).htmlarea('addList');
	        };

	        _this.setEditModel = function () {
	            return {
	                listbtns: _react2.default.createElement('div', { className: 'right-header-info clearfix' }, _react2.default.createElement('div', { className: 'editmode clearfix' }, _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'cancel', onClick: _this.cancel }, '\u53D6\u6D88'), _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'finish', onClick: _this.finish }, '\u5B8C\u6210'))),
	                listbody: _react2.default.createElement('div', { className: 'right-body' }, _react2.default.createElement('div', { className: 'right-body-info' }, _react2.default.createElement('span', { className: 'time' }, _utilDom2.default.compareDate(_this.props.detail.lastUpdate)), _react2.default.createElement('span', { className: 'text' }, '\u517110\u5B57'), _react2.default.createElement(_rightGroupWrap2.default, { curGroupId: _this.props.detail.groupStatus, group: _this.props.group, detail: _this.props.detail, actions: _this.props.actions }), _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'insert-btn insert-pic' }), _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'insert-btn insert-list', onClick: _this.insertList })), _react2.default.createElement('div', { className: 'right-body-content' }, _react2.default.createElement(_index10.default, { name: 'r2' }, _react2.default.createElement('div', { id: 'dialogContent' }))))
	            };
	        };

	        _this.setPreviewModel = function () {
	            var groupName = '';
	            _this.props.group.data.forEach(function (v, i) {
	                if (v.id == _this.props.detail.groupStatus) {
	                    groupName = v.name;
	                }
	            });
	            return {
	                listbtns: _react2.default.createElement('div', { className: 'right-header-info clearfix' }, _react2.default.createElement('div', { className: 'preview clearfix' }, _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'edit', onClick: _this.edit }, '\u7F16\u8F91'), _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'delete', onClick: _this.delsingle }, '\u5220\u9664'))),
	                listbody: _react2.default.createElement('div', { className: 'right-body' }, _react2.default.createElement('div', { className: 'right-body-info' }, _react2.default.createElement('span', { className: 'time' }, _utilDom2.default.compareDate(_this.props.detail.lastUpdate)), _react2.default.createElement('span', { className: 'text' }, '\u517110\u5B57'), _react2.default.createElement('span', { className: 'group' }, groupName)), _react2.default.createElement('div', { className: 'right-body-content' }, _react2.default.createElement(_index10.default, { name: 'r1' }, _react2.default.createElement('div', { id: 'dialogContent' }), _react2.default.createElement('div', { className: 'right-body-cover' }))))
	            };
	        };

	        _this.state = {
	            refresh: null
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(RightWrap, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var self = this;
	            editorObj = new _editor2.default(this.props.detail, function () {
	                self.setState({
	                    refresh: true
	                });
	            }, function () {
	                self.setState({
	                    refresh: true
	                });
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            var self = this;
	            if (prevProps.detail.body != this.props.detail.body) {
	                editorObj = new _editor2.default(this.props.detail, function () {
	                    self.setState({
	                        refresh: true
	                    });
	                }, function () {
	                    self.setState({
	                        refresh: true
	                    });
	                });
	            } else if (prevProps.list.multiItem.length != this.props.list.multiItem.length) {
	                editorObj = new _editor2.default(this.props.detail, function () {
	                    self.setState({
	                        refresh: true
	                    });
	                }, function () {
	                    self.setState({
	                        refresh: true
	                    });
	                });
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.detail.body != nextProps.detail.body) {}
	        }
	        //确定删除

	        //确定删除短信

	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                list = _props.list,
	                detail = _props.detail,
	                modal = _props.modal,
	                actions = _props.actions,
	                group = _props.group;

	            var content = '';

	            var modalDiv = _react2.default.createElement('div', null, _react2.default.createElement(_index2.default, {
	                visible: modal.singleDel,
	                animation: 'slide-fade',
	                maskAnimation: 'fade',
	                prefixCls: 'modal',
	                style: { width: 450 },
	                footer: [{
	                    name: '取消',
	                    className: 'btn btn-primary',
	                    onClick: actions.singleDelHidden
	                }, {
	                    name: '确定',
	                    className: 'btn btn-primary',
	                    onClick: this.deleteSingle
	                }]
	            }, _react2.default.createElement('div', { className: 'dialog' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'dialog-tip' }, _react2.default.createElement('p', { className: 'dt' }, '\u786E\u5B9A\u5220\u9664\u6B64\u4FBF\u7B7E\u5417?'))))), _react2.default.createElement(_index2.default, {
	                visible: modal.multiDel,
	                animation: 'slide-fade',
	                maskAnimation: 'fade',
	                prefixCls: 'modal',
	                style: { width: 450 },
	                footer: [{
	                    name: '取消',
	                    className: 'btn btn-primary',
	                    onClick: actions.multiDelHidden
	                }, {
	                    name: '确定',
	                    className: 'btn btn-primary',
	                    onClick: this.deleteAll
	                }]
	            }, _react2.default.createElement('div', { className: 'dialog' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'dialog-tip' }, _react2.default.createElement('p', { className: 'dt' }, '\u786E\u5B9A\u5220\u9664\u6240\u6709\u4FBF\u7B7E\u5417?'), _react2.default.createElement('p', { className: 'red' }, '\uFF08\u9009\u4E2D\u7684\u6570\u636E\u5728\u624B\u673A\u7AEF\u4E5F\u4F1A\u88AB\u5220\u9664\uFF09'))))));

	            var listbtns = _react2.default.createElement('div', { className: 'right-header-info clearfix' });
	            var listbody = _react2.default.createElement('div', { className: 'right-body' });

	            if (list.multiItem.length == 0) {
	                var data = void 0,
	                    name = void 0,
	                    nameO = void 0,
	                    num = detail.count || 0;
	                if (list.isAddNewItem) {
	                    var editDom = this.setEditModel();
	                    listbtns = editDom.listbtns;
	                    listbody = editDom.listbody;
	                } else {
	                    if (!detail.firstFetch) {
	                        listbody = _react2.default.createElement('div', { className: 'right-body' }, _react2.default.createElement(_index6.default, null));
	                    } else {
	                        var _editDom = void 0;
	                        if (detail.editModel) {
	                            _editDom = this.setEditModel();
	                            listbtns = _editDom.listbtns;
	                            listbody = _editDom.listbody;
	                        } else {
	                            _editDom = this.setPreviewModel();
	                            listbtns = _editDom.listbtns;
	                            listbody = _editDom.listbody;
	                        }
	                    }
	                }
	            } else {
	                listbtns = _react2.default.createElement('div', { className: 'right-header-info clearfix' }, _react2.default.createElement('div', { className: 'r-btns clearfix' }, _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'cancel', onClick: this.cancel }, '\u53D6\u6D88'), _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'delete', onClick: this.delmulti }, '\u5220\u9664')));
	                listbody = _react2.default.createElement('div', { className: 'right-body' }, _react2.default.createElement(_multiList2.default, { list: list }));
	            }
	            return _react2.default.createElement('div', { className: 'right-wrap', id: 'rightWrap' }, _react2.default.createElement('div', { className: 'right-header' }, listbtns), listbody, modalDiv);
	        }
	    }]);
	    return RightWrap;
	}(_react.Component);

	exports.default = RightWrap;
	module.exports = exports['default'];

/***/ },
/* 405 */
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

	var _index = __webpack_require__(282);

	var _index2 = _interopRequireDefault(_index);

	var _multiLi = __webpack_require__(406);

	var _multiLi2 = _interopRequireDefault(_multiLi);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var MultiList = function (_Component) {
	    (0, _inherits3.default)(MultiList, _Component);

	    function MultiList(props) {
	        (0, _classCallCheck3.default)(this, MultiList);
	        return (0, _possibleConstructorReturn3.default)(this, (MultiList.__proto__ || (0, _getPrototypeOf2.default)(MultiList)).call(this, props));
	    }

	    (0, _createClass3.default)(MultiList, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            if ((0, _stringify2.default)(nextProps.list) == (0, _stringify2.default)(this.props.list)) {
	                return false;
	            }
	            return true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var list = this.props.list;

	            var data = void 0,
	                multiList = [];

	            if (list && list.list && list.list.length > 0) {
	                list.multiItem.forEach(function (value, key) {
	                    multiList.push(_react2.default.createElement(_multiLi2.default, { data: list.list[value], key: key }));
	                });
	            }

	            return _react2.default.createElement(_index2.default, { onScroll: this.onScroll, name: '3' }, _react2.default.createElement('div', { className: 'right-body-list clearfix' }, multiList));
	        }
	    }]);
	    return MultiList;
	}(_react.Component);

	exports.default = MultiList;
	module.exports = exports['default'];

/***/ },
/* 406 */
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

	var _index = __webpack_require__(282);

	var _index2 = _interopRequireDefault(_index);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var MultiList = function (_Component) {
	    (0, _inherits3.default)(MultiList, _Component);

	    function MultiList(props) {
	        (0, _classCallCheck3.default)(this, MultiList);
	        return (0, _possibleConstructorReturn3.default)(this, (MultiList.__proto__ || (0, _getPrototypeOf2.default)(MultiList)).call(this, props));
	    }

	    (0, _createClass3.default)(MultiList, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var data = this.props.data;

	            return _react2.default.createElement('div', { className: 'list-item' }, _react2.default.createElement('div', { className: 'title' }, _utilDom2.default.compareDate(data.modifyTime)), _react2.default.createElement('div', { className: 'content' }, data.title), _react2.default.createElement('div', { className: 'img' }, data.firstImg ? _react2.default.createElement('i', { className: 'i-img' }) : null, data.firstRecord ? _react2.default.createElement('i', { className: 'i-record' }) : null, data.topdate ? _react2.default.createElement('i', { className: 'i-topdate' }) : null));
	        }
	    }]);
	    return MultiList;
	}(_react.Component);

	exports.default = MultiList;
	module.exports = exports['default'];

/***/ },
/* 407 */
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

	var _rcDialog = __webpack_require__(346);

	var _rcDialog2 = _interopRequireDefault(_rcDialog);

	var _utilDom = __webpack_require__(138);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	__webpack_require__(408);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Modal = function (_Component) {
	    (0, _inherits3.default)(Modal, _Component);

	    function Modal(props) {
	        (0, _classCallCheck3.default)(this, Modal);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

	        _this.onClose = function () {
	            _this.props.onClose();
	        };

	        _this.onShow = function () {
	            _this.props.onShow();
	        };

	        _this.buildFooter = function () {
	            var footer = [];
	            if (_this.props.footer) {
	                if (_this.props.footer.length > 0) {
	                    var length = _this.props.footer.length;
	                    _this.props.footer.forEach(function (value, key) {
	                        footer.push(_react2.default.createElement(
	                            'a',
	                            { href: 'javascript:void(0);', key: key, className: value.className + ' btn-size' + length, onClick: value.onClick },
	                            value.name
	                        ));
	                    });
	                } else {
	                    footer = [{
	                        name: '确定',
	                        className: 'btn btn-primary',
	                        onClick: _this.onClose
	                    }];
	                }
	            } else {
	                footer = false;
	            }

	            return footer;
	        };

	        var style = props.style;
	        return _this;
	    }

	    (0, _createClass3.default)(Modal, [{
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            var footer = this.buildFooter();
	            var style = props.style;
	            if (!props.style || !props.style.width) {
	                style['width'] = '450';
	            }
	            var closeable = props.closable ? true : false;
	            return _react2.default.createElement(
	                _rcDialog2.default,
	                {
	                    wrapClassName: props.wrapClassName,
	                    visible: props.visible,
	                    animation: props.animation || 'slide-fade',
	                    maskAnimation: props.maskAnimation || 'fade',
	                    prefixCls: props.prefixCls || 'modal',
	                    style: style,
	                    title: props.title,
	                    closable: closeable,
	                    onClose: props.onClose,
	                    footer: footer
	                },
	                this.props.children
	            );
	        }
	    }]);
	    return Modal;
	}(_react.Component);

	exports.default = Modal;
	module.exports = exports['default'];

/***/ },
/* 408 */
185,
/* 409 */
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

	var _leftGroupItem = __webpack_require__(402);

	var _leftGroupItem2 = _interopRequireDefault(_leftGroupItem);

	var _index = __webpack_require__(284);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(282);

	var _index4 = _interopRequireDefault(_index3);

	var _utilDom = __webpack_require__(138);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var RightGroupWrap = function (_Component) {
	    (0, _inherits3.default)(RightGroupWrap, _Component);

	    function RightGroupWrap(props) {
	        (0, _classCallCheck3.default)(this, RightGroupWrap);
	        return (0, _possibleConstructorReturn3.default)(this, (RightGroupWrap.__proto__ || (0, _getPrototypeOf2.default)(RightGroupWrap)).call(this, props));
	    }

	    (0, _createClass3.default)(RightGroupWrap, [{
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
	            var _props = this.props,
	                detail = _props.detail,
	                group = _props.group;

	            var selectKey = group.curGroupId + '|' + group.curGroupName;
	            var gid = detail.groupStatus;
	            var groupName = '';
	            var groupList = group.data.map(function (v, i) {
	                var select = false;
	                if (gid == '') {
	                    gid = v.id;
	                }
	                if (v.id === gid) {
	                    select = true;
	                    groupName = v.name;
	                }
	                return _react2.default.createElement(_leftGroupItem2.default, { data: v, key: v.id, selected: select, canEdit: false });
	            });
	            return _react2.default.createElement(_index2.default, {
	                style: { width: 200 },
	                align: 'right',
	                hasAngle: true,
	                menu: groupList,
	                trigger: 'click'
	            }, _react2.default.createElement('span', { className: 'group' }, groupName));
	        }
	    }]);
	    return RightGroupWrap;
	}(_react.Component);

	exports.default = RightGroupWrap;
	module.exports = exports['default'];

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
	(function(global, factory) {
	    if(exports === 'object' && typeof module !== 'undefined')
	        module.exports = factory(global)
	    if (true)
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return factory(global) }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	    else
	        factory(global)
	}( typeof window !== "undefined" ? window : this, function(window) {
	    var Zepto = (function() {
	        var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,
	            document = window.document,
	            elementDisplay = {}, classCache = {},
	            cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	            fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	            singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	            tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	            rootNodeRE = /^(?:body|html)$/i,
	            capitalRE = /([A-Z])/g,

	            // special attributes that should be get/set via method calls
	            methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

	            adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	            table = document.createElement('table'),
	            tableRow = document.createElement('tr'),
	            containers = {
	                'tr': document.createElement('tbody'),
	                'tbody': table, 'thead': table, 'tfoot': table,
	                'td': tableRow, 'th': tableRow,
	                '*': document.createElement('div')
	            },
	            readyRE = /complete|loaded|interactive/,
	            simpleSelectorRE = /^[\w-]*$/,
	            class2type = {},
	            toString = class2type.toString,
	            zepto = {},
	            camelize, uniq,
	            tempParent = document.createElement('div'),
	            propMap = {
	                'tabindex': 'tabIndex',
	                'readonly': 'readOnly',
	                'for': 'htmlFor',
	                'class': 'className',
	                'maxlength': 'maxLength',
	                'cellspacing': 'cellSpacing',
	                'cellpadding': 'cellPadding',
	                'rowspan': 'rowSpan',
	                'colspan': 'colSpan',
	                'usemap': 'useMap',
	                'frameborder': 'frameBorder',
	                'contenteditable': 'contentEditable'
	            },
	            isArray = Array.isArray ||
	                function(object){ return object instanceof Array }

	        zepto.matches = function(element, selector) {
	            if (!selector || !element || element.nodeType !== 1) return false
	            var matchesSelector = element.matches || element.webkitMatchesSelector ||
	                element.mozMatchesSelector || element.oMatchesSelector ||
	                element.matchesSelector
	            if (matchesSelector) return matchesSelector.call(element, selector)
	            // fall back to performing a selector:
	            var match, parent = element.parentNode, temp = !parent
	            if (temp) (parent = tempParent).appendChild(element)
	            match = ~zepto.qsa(parent, selector).indexOf(element)
	            temp && tempParent.removeChild(element)
	            return match
	        }

	        function type(obj) {
	            return obj == null ? String(obj) :
	            class2type[toString.call(obj)] || "object"
	        }

	        function isFunction(value) { return type(value) == "function" }
	        function isWindow(obj)     { return obj != null && obj == obj.window }
	        function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	        function isObject(obj)     { return type(obj) == "object" }
	        function isPlainObject(obj) {
	            return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	        }

	        function likeArray(obj) {
	            var length = !!obj && 'length' in obj && obj.length,
	                type = $.type(obj)

	            return 'function' != type && !isWindow(obj) && (
	                    'array' == type || length === 0 ||
	                    (typeof length == 'number' && length > 0 && (length - 1) in obj)
	                )
	        }

	        function compact(array) { return filter.call(array, function(item){ return item != null }) }
	        function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	        camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	        function dasherize(str) {
	            return str.replace(/::/g, '/')
	                .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	                .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	                .replace(/_/g, '-')
	                .toLowerCase()
	        }
	        uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

	        function classRE(name) {
	            return name in classCache ?
	                classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	        }

	        function maybeAddPx(name, value) {
	            return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	        }

	        function defaultDisplay(nodeName) {
	            var element, display
	            if (!elementDisplay[nodeName]) {
	                element = document.createElement(nodeName)
	                document.body.appendChild(element)
	                display = getComputedStyle(element, '').getPropertyValue("display")
	                element.parentNode.removeChild(element)
	                display == "none" && (display = "block")
	                elementDisplay[nodeName] = display
	            }
	            return elementDisplay[nodeName]
	        }

	        function children(element) {
	            return 'children' in element ?
	                slice.call(element.children) :
	                $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	        }

	        function Z(dom, selector) {
	            var i, len = dom ? dom.length : 0
	            for (i = 0; i < len; i++) this[i] = dom[i]
	            this.length = len
	            this.selector = selector || ''
	        }

	        // `$.zepto.fragment` takes a html string and an optional tag name
	        // to generate DOM nodes from the given html string.
	        // The generated DOM nodes are returned as an array.
	        // This function can be overridden in plugins for example to make
	        // it compatible with browsers that don't support the DOM fully.
	        zepto.fragment = function(html, name, properties) {
	            var dom, nodes, container

	            // A special case optimization for a single tag
	            if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

	            if (!dom) {
	                if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	                if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	                if (!(name in containers)) name = '*'

	                container = containers[name]
	                container.innerHTML = '' + html
	                dom = $.each(slice.call(container.childNodes), function(){
	                    container.removeChild(this)
	                })
	            }

	            if (isPlainObject(properties)) {
	                nodes = $(dom)
	                $.each(properties, function(key, value) {
	                    if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	                    else nodes.attr(key, value)
	                })
	            }

	            return dom
	        }

	        // `$.zepto.Z` swaps out the prototype of the given `dom` array
	        // of nodes with `$.fn` and thus supplying all the Zepto functions
	        // to the array. This method can be overridden in plugins.
	        zepto.Z = function(dom, selector) {
	            return new Z(dom, selector)
	        }

	        // `$.zepto.isZ` should return `true` if the given object is a Zepto
	        // collection. This method can be overridden in plugins.
	        zepto.isZ = function(object) {
	            return object instanceof zepto.Z
	        }

	        // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	        // takes a CSS selector and an optional context (and handles various
	        // special cases).
	        // This method can be overridden in plugins.
	        zepto.init = function(selector, context) {
	            var dom
	            // If nothing given, return an empty Zepto collection
	            if (!selector) return zepto.Z()
	            // Optimize for string selectors
	            else if (typeof selector == 'string') {
	                selector = selector.trim()
	                // If it's a html fragment, create nodes from it
	                // Note: In both Chrome 21 and Firefox 15, DOM error 12
	                // is thrown if the fragment doesn't begin with <
	                if (selector[0] == '<' && fragmentRE.test(selector))
	                    dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	                // If there's a context, create a collection on that context first, and select
	                // nodes from there
	                else if (context !== undefined) return $(context).find(selector)
	                // If it's a CSS selector, use it to select nodes.
	                else dom = zepto.qsa(document, selector)
	            }
	            // If a function is given, call it when the DOM is ready
	            else if (isFunction(selector)) return $(document).ready(selector)
	            // If a Zepto collection is given, just return it
	            else if (zepto.isZ(selector)) return selector
	            else {
	                // normalize array if an array of nodes is given
	                if (isArray(selector)) dom = compact(selector)
	                // Wrap DOM nodes.
	                else if (isObject(selector))
	                    dom = [selector], selector = null
	                // If it's a html fragment, create nodes from it
	                else if (fragmentRE.test(selector))
	                    dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	                // If there's a context, create a collection on that context first, and select
	                // nodes from there
	                else if (context !== undefined) return $(context).find(selector)
	                // And last but no least, if it's a CSS selector, use it to select nodes.
	                else dom = zepto.qsa(document, selector)
	            }
	            // create a new Zepto collection from the nodes found
	            return zepto.Z(dom, selector)
	        }

	        // `$` will be the base `Zepto` object. When calling this
	        // function just call `$.zepto.init, which makes the implementation
	        // details of selecting nodes and creating Zepto collections
	        // patchable in plugins.
	        $ = function(selector, context){
	            return zepto.init(selector, context)
	        }

	        function extend(target, source, deep) {
	            for (key in source)
	                if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	                    if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	                        target[key] = {}
	                    if (isArray(source[key]) && !isArray(target[key]))
	                        target[key] = []
	                    extend(target[key], source[key], deep)
	                }
	                else if (source[key] !== undefined) target[key] = source[key]
	        }

	        // Copy all but undefined properties from one or more
	        // objects to the `target` object.
	        $.extend = function(target){
	            var deep, args = slice.call(arguments, 1)
	            if (typeof target == 'boolean') {
	                deep = target
	                target = args.shift()
	            }
	            args.forEach(function(arg){ extend(target, arg, deep) })
	            return target
	        }

	        // `$.zepto.qsa` is Zepto's CSS selector implementation which
	        // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	        // This method can be overridden in plugins.
	        zepto.qsa = function(element, selector){
	            var found,
	                maybeID = selector[0] == '#',
	                maybeClass = !maybeID && selector[0] == '.',
	                nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	                isSimple = simpleSelectorRE.test(nameOnly)
	            return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById
	                ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	                (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :
	                    slice.call(
	                        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
	                            maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	                                element.getElementsByTagName(selector) : // Or a tag
	                            element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	                    )
	        }

	        function filtered(nodes, selector) {
	            return selector == null ? $(nodes) : $(nodes).filter(selector)
	        }

	        $.contains = document.documentElement.contains ?
	            function(parent, node) {
	                return parent !== node && parent.contains(node)
	            } :
	            function(parent, node) {
	                while (node && (node = node.parentNode))
	                    if (node === parent) return true
	                return false
	            }

	        function funcArg(context, arg, idx, payload) {
	            return isFunction(arg) ? arg.call(context, idx, payload) : arg
	        }

	        function setAttribute(node, name, value) {
	            value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	        }

	        // access className property while respecting SVGAnimatedString
	        function className(node, value){
	            var klass = node.className || '',
	                svg   = klass && klass.baseVal !== undefined

	            if (value === undefined) return svg ? klass.baseVal : klass
	            svg ? (klass.baseVal = value) : (node.className = value)
	        }

	        // "true"  => true
	        // "false" => false
	        // "null"  => null
	        // "42"    => 42
	        // "42.5"  => 42.5
	        // "08"    => "08"
	        // JSON    => parse if valid
	        // String  => self
	        function deserializeValue(value) {
	            try {
	                return value ?
	                value == "true" ||
	                ( value == "false" ? false :
	                    value == "null" ? null :
	                        +value + "" == value ? +value :
	                            /^[\[\{]/.test(value) ? $.parseJSON(value) :
	                                value )
	                    : value
	            } catch(e) {
	                return value
	            }
	        }

	        $.type = type
	        $.isFunction = isFunction
	        $.isWindow = isWindow
	        $.isArray = isArray
	        $.isPlainObject = isPlainObject

	        $.isEmptyObject = function(obj) {
	            var name
	            for (name in obj) return false
	            return true
	        }

	        $.isNumeric = function(val) {
	            var num = Number(val), type = typeof val
	            return val != null && type != 'boolean' &&
	                (type != 'string' || val.length) &&
	                !isNaN(num) && isFinite(num) || false
	        }

	        $.inArray = function(elem, array, i){
	            return emptyArray.indexOf.call(array, elem, i)
	        }

	        $.camelCase = camelize
	        $.trim = function(str) {
	            return str == null ? "" : String.prototype.trim.call(str)
	        }

	        // plugin compatibility
	        $.uuid = 0
	        $.support = { }
	        $.expr = { }
	        $.noop = function() {}

	        $.map = function(elements, callback){
	            var value, values = [], i, key
	            if (likeArray(elements))
	                for (i = 0; i < elements.length; i++) {
	                    value = callback(elements[i], i)
	                    if (value != null) values.push(value)
	                }
	            else
	                for (key in elements) {
	                    value = callback(elements[key], key)
	                    if (value != null) values.push(value)
	                }
	            return flatten(values)
	        }

	        $.each = function(elements, callback){
	            var i, key
	            if (likeArray(elements)) {
	                for (i = 0; i < elements.length; i++)
	                    if (callback.call(elements[i], i, elements[i]) === false) return elements
	            } else {
	                for (key in elements)
	                    if (callback.call(elements[key], key, elements[key]) === false) return elements
	            }

	            return elements
	        }

	        $.grep = function(elements, callback){
	            return filter.call(elements, callback)
	        }

	        if (window.JSON) $.parseJSON = JSON.parse

	        // Populate the class2type map
	        $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	            class2type[ "[object " + name + "]" ] = name.toLowerCase()
	        })

	        // Define methods that will be available on all
	        // Zepto collections
	        $.fn = {
	            constructor: zepto.Z,
	            length: 0,

	            // Because a collection acts like an array
	            // copy over these useful array functions.
	            forEach: emptyArray.forEach,
	            reduce: emptyArray.reduce,
	            push: emptyArray.push,
	            sort: emptyArray.sort,
	            splice: emptyArray.splice,
	            indexOf: emptyArray.indexOf,
	            concat: function(){
	                var i, value, args = []
	                for (i = 0; i < arguments.length; i++) {
	                    value = arguments[i]
	                    args[i] = zepto.isZ(value) ? value.toArray() : value
	                }
	                return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
	            },

	            // `map` and `slice` in the jQuery API work differently
	            // from their array counterparts
	            map: function(fn){
	                return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	            },
	            slice: function(){
	                return $(slice.apply(this, arguments))
	            },

	            ready: function(callback){
	                // need to check if document.body exists for IE as that browser reports
	                // document ready when it hasn't yet created the body element
	                if (readyRE.test(document.readyState) && document.body) callback($)
	                else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	                return this
	            },
	            get: function(idx){
	                return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	            },
	            toArray: function(){ return this.get() },
	            size: function(){
	                return this.length
	            },
	            remove: function(){
	                return this.each(function(){
	                    if (this.parentNode != null)
	                        this.parentNode.removeChild(this)
	                })
	            },
	            each: function(callback){
	                emptyArray.every.call(this, function(el, idx){
	                    return callback.call(el, idx, el) !== false
	                })
	                return this
	            },
	            filter: function(selector){
	                if (isFunction(selector)) return this.not(this.not(selector))
	                return $(filter.call(this, function(element){
	                    return zepto.matches(element, selector)
	                }))
	            },
	            add: function(selector,context){
	                return $(uniq(this.concat($(selector,context))))
	            },
	            is: function(selector){
	                return this.length > 0 && zepto.matches(this[0], selector)
	            },
	            not: function(selector){
	                var nodes=[]
	                if (isFunction(selector) && selector.call !== undefined)
	                    this.each(function(idx){
	                        if (!selector.call(this,idx)) nodes.push(this)
	                    })
	                else {
	                    var excludes = typeof selector == 'string' ? this.filter(selector) :
	                        (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	                    this.forEach(function(el){
	                        if (excludes.indexOf(el) < 0) nodes.push(el)
	                    })
	                }
	                return $(nodes)
	            },
	            has: function(selector){
	                return this.filter(function(){
	                    return isObject(selector) ?
	                        $.contains(this, selector) :
	                        $(this).find(selector).size()
	                })
	            },
	            eq: function(idx){
	                return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	            },
	            first: function(){
	                var el = this[0]
	                return el && !isObject(el) ? el : $(el)
	            },
	            last: function(){
	                var el = this[this.length - 1]
	                return el && !isObject(el) ? el : $(el)
	            },
	            find: function(selector){
	                var result, $this = this
	                if (!selector) result = $()
	                else if (typeof selector == 'object')
	                    result = $(selector).filter(function(){
	                        var node = this
	                        return emptyArray.some.call($this, function(parent){
	                            return $.contains(parent, node)
	                        })
	                    })
	                else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	                else result = this.map(function(){ return zepto.qsa(this, selector) })
	                return result
	            },
	            closest: function(selector, context){
	                var nodes = [], collection = typeof selector == 'object' && $(selector)
	                this.each(function(_, node){
	                    while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	                        node = node !== context && !isDocument(node) && node.parentNode
	                    if (node && nodes.indexOf(node) < 0) nodes.push(node)
	                })
	                return $(nodes)
	            },
	            parents: function(selector){
	                var ancestors = [], nodes = this
	                while (nodes.length > 0)
	                    nodes = $.map(nodes, function(node){
	                        if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	                            ancestors.push(node)
	                            return node
	                        }
	                    })
	                return filtered(ancestors, selector)
	            },
	            parent: function(selector){
	                return filtered(uniq(this.pluck('parentNode')), selector)
	            },
	            children: function(selector){
	                return filtered(this.map(function(){ return children(this) }), selector)
	            },
	            contents: function() {
	                return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })
	            },
	            siblings: function(selector){
	                return filtered(this.map(function(i, el){
	                    return filter.call(children(el.parentNode), function(child){ return child!==el })
	                }), selector)
	            },
	            empty: function(){
	                return this.each(function(){ this.innerHTML = '' })
	            },
	            // `pluck` is borrowed from Prototype.js
	            pluck: function(property){
	                return $.map(this, function(el){ return el[property] })
	            },
	            show: function(){
	                return this.each(function(){
	                    this.style.display == "none" && (this.style.display = '')
	                    if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	                        this.style.display = defaultDisplay(this.nodeName)
	                })
	            },
	            replaceWith: function(newContent){
	                return this.before(newContent).remove()
	            },
	            wrap: function(structure){
	                var func = isFunction(structure)
	                if (this[0] && !func)
	                    var dom   = $(structure).get(0),
	                        clone = dom.parentNode || this.length > 1

	                return this.each(function(index){
	                    $(this).wrapAll(
	                        func ? structure.call(this, index) :
	                            clone ? dom.cloneNode(true) : dom
	                    )
	                })
	            },
	            wrapAll: function(structure){
	                if (this[0]) {
	                    $(this[0]).before(structure = $(structure))
	                    var children
	                    // drill down to the inmost element
	                    while ((children = structure.children()).length) structure = children.first()
	                    $(structure).append(this)
	                }
	                return this
	            },
	            wrapInner: function(structure){
	                var func = isFunction(structure)
	                return this.each(function(index){
	                    var self = $(this), contents = self.contents(),
	                        dom  = func ? structure.call(this, index) : structure
	                    contents.length ? contents.wrapAll(dom) : self.append(dom)
	                })
	            },
	            unwrap: function(){
	                this.parent().each(function(){
	                    $(this).replaceWith($(this).children())
	                })
	                return this
	            },
	            clone: function(){
	                return this.map(function(){ return this.cloneNode(true) })
	            },
	            hide: function(){
	                return this.css("display", "none")
	            },
	            toggle: function(setting){
	                return this.each(function(){
	                    var el = $(this)
	                        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	                })
	            },
	            prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	            next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	            html: function(html){
	                return 0 in arguments ?
	                    this.each(function(idx){
	                        var originHtml = this.innerHTML
	                        $(this).empty().append( funcArg(this, html, idx, originHtml) )
	                    }) :
	                    (0 in this ? this[0].innerHTML : null)
	            },
	            text: function(text){
	                return 0 in arguments ?
	                    this.each(function(idx){
	                        var newText = funcArg(this, text, idx, this.textContent)
	                        this.textContent = newText == null ? '' : ''+newText
	                    }) :
	                    (0 in this ? this.pluck('textContent').join("") : null)
	            },
	            attr: function(name, value){
	                var result
	                return (typeof name == 'string' && !(1 in arguments)) ?
	                    (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :
	                    this.each(function(idx){
	                        if (this.nodeType !== 1) return
	                        if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	                        else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	                    })
	            },
	            removeAttr: function(name){
	                return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	                    setAttribute(this, attribute)
	                }, this)})
	            },
	            prop: function(name, value){
	                name = propMap[name] || name
	                return (1 in arguments) ?
	                    this.each(function(idx){
	                        this[name] = funcArg(this, value, idx, this[name])
	                    }) :
	                    (this[0] && this[0][name])
	            },
	            removeProp: function(name){
	                name = propMap[name] || name
	                return this.each(function(){ delete this[name] })
	            },
	            data: function(name, value){
	                var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

	                var data = (1 in arguments) ?
	                    this.attr(attrName, value) :
	                    this.attr(attrName)

	                return data !== null ? deserializeValue(data) : undefined
	            },
	            val: function(value){
	                if (0 in arguments) {
	                    if (value == null) value = ""
	                    return this.each(function(idx){
	                        this.value = funcArg(this, value, idx, this.value)
	                    })
	                } else {
	                    return this[0] && (this[0].multiple ?
	                            $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	                            this[0].value)
	                }
	            },
	            offset: function(coordinates){
	                if (coordinates) return this.each(function(index){
	                    var $this = $(this),
	                        coords = funcArg(this, coordinates, index, $this.offset()),
	                        parentOffset = $this.offsetParent().offset(),
	                        props = {
	                            top:  coords.top  - parentOffset.top,
	                            left: coords.left - parentOffset.left
	                        }

	                    if ($this.css('position') == 'static') props['position'] = 'relative'
	                    $this.css(props)
	                })
	                if (!this.length) return null
	                if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))
	                    return {top: 0, left: 0}
	                var obj = this[0].getBoundingClientRect()
	                return {
	                    left: obj.left + window.pageXOffset,
	                    top: obj.top + window.pageYOffset,
	                    width: Math.round(obj.width),
	                    height: Math.round(obj.height)
	                }
	            },
	            css: function(property, value){
	                if (arguments.length < 2) {
	                    var element = this[0]
	                    if (typeof property == 'string') {
	                        if (!element) return
	                        return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)
	                    } else if (isArray(property)) {
	                        if (!element) return
	                        var props = {}
	                        var computedStyle = getComputedStyle(element, '')
	                        $.each(property, function(_, prop){
	                            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	                        })
	                        return props
	                    }
	                }

	                var css = ''
	                if (type(property) == 'string') {
	                    if (!value && value !== 0)
	                        this.each(function(){ this.style.removeProperty(dasherize(property)) })
	                    else
	                        css = dasherize(property) + ":" + maybeAddPx(property, value)
	                } else {
	                    for (key in property)
	                        if (!property[key] && property[key] !== 0)
	                            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	                        else
	                            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	                }

	                return this.each(function(){ this.style.cssText += ';' + css })
	            },
	            index: function(element){
	                return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	            },
	            hasClass: function(name){
	                if (!name) return false
	                return emptyArray.some.call(this, function(el){
	                    return this.test(className(el))
	                }, classRE(name))
	            },
	            addClass: function(name){
	                if (!name) return this
	                return this.each(function(idx){
	                    if (!('className' in this)) return
	                    classList = []
	                    var cls = className(this), newName = funcArg(this, name, idx, cls)
	                    newName.split(/\s+/g).forEach(function(klass){
	                        if (!$(this).hasClass(klass)) classList.push(klass)
	                    }, this)
	                    classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	                })
	            },
	            removeClass: function(name){
	                return this.each(function(idx){
	                    if (!('className' in this)) return
	                    if (name === undefined) return className(this, '')
	                    classList = className(this)
	                    funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	                        classList = classList.replace(classRE(klass), " ")
	                    })
	                    className(this, classList.trim())
	                })
	            },
	            toggleClass: function(name, when){
	                if (!name) return this
	                return this.each(function(idx){
	                    var $this = $(this), names = funcArg(this, name, idx, className(this))
	                    names.split(/\s+/g).forEach(function(klass){
	                        (when === undefined ? !$this.hasClass(klass) : when) ?
	                            $this.addClass(klass) : $this.removeClass(klass)
	                    })
	                })
	            },
	            scrollTop: function(value){
	                if (!this.length) return
	                var hasScrollTop = 'scrollTop' in this[0]
	                if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	                return this.each(hasScrollTop ?
	                    function(){ this.scrollTop = value } :
	                    function(){ this.scrollTo(this.scrollX, value) })
	            },
	            scrollLeft: function(value){
	                if (!this.length) return
	                var hasScrollLeft = 'scrollLeft' in this[0]
	                if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	                return this.each(hasScrollLeft ?
	                    function(){ this.scrollLeft = value } :
	                    function(){ this.scrollTo(value, this.scrollY) })
	            },
	            position: function() {
	                if (!this.length) return

	                var elem = this[0],
	                    // Get *real* offsetParent
	                    offsetParent = this.offsetParent(),
	                    // Get correct offsets
	                    offset       = this.offset(),
	                    parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

	                // Subtract element margins
	                // note: when an element has margin: auto the offsetLeft and marginLeft
	                // are the same in Safari causing offset.left to incorrectly be 0
	                offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	                offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

	                // Add offsetParent borders
	                parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	                parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

	                // Subtract the two offsets
	                return {
	                    top:  offset.top  - parentOffset.top,
	                    left: offset.left - parentOffset.left
	                }
	            },
	            offsetParent: function() {
	                return this.map(function(){
	                    var parent = this.offsetParent || document.body
	                    while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	                        parent = parent.offsetParent
	                    return parent
	                })
	            }
	        }

	        // for now
	        $.fn.detach = $.fn.remove

	        // Generate the `width` and `height` functions
	        ;['width', 'height'].forEach(function(dimension){
	            var dimensionProperty =
	                dimension.replace(/./, function(m){ return m[0].toUpperCase() })

	            $.fn[dimension] = function(value){
	                var offset, el = this[0]
	                if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	                    isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	                    (offset = this.offset()) && offset[dimension]
	                else return this.each(function(idx){
	                    el = $(this)
	                    el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	                })
	            }
	        })

	        function traverseNode(node, fun) {
	            fun(node)
	            for (var i = 0, len = node.childNodes.length; i < len; i++)
	                traverseNode(node.childNodes[i], fun)
	        }

	        // Generate the `after`, `prepend`, `before`, `append`,
	        // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	        adjacencyOperators.forEach(function(operator, operatorIndex) {
	            var inside = operatorIndex % 2 //=> prepend, append

	            $.fn[operator] = function(){
	                // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	                var argType, nodes = $.map(arguments, function(arg) {
	                        var arr = []
	                        argType = type(arg)
	                        if (argType == "array") {
	                            arg.forEach(function(el) {
	                                if (el.nodeType !== undefined) return arr.push(el)
	                                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())
	                                arr = arr.concat(zepto.fragment(el))
	                            })
	                            return arr
	                        }
	                        return argType == "object" || arg == null ?
	                            arg : zepto.fragment(arg)
	                    }),
	                    parent, copyByClone = this.length > 1
	                if (nodes.length < 1) return this

	                return this.each(function(_, target){
	                    parent = inside ? target : target.parentNode

	                    // convert all methods to a "before" operation
	                    target = operatorIndex == 0 ? target.nextSibling :
	                        operatorIndex == 1 ? target.firstChild :
	                            operatorIndex == 2 ? target :
	                                null

	                    var parentInDocument = $.contains(document.documentElement, parent)

	                    nodes.forEach(function(node){
	                        if (copyByClone) node = node.cloneNode(true)
	                        else if (!parent) return $(node).remove()

	                        parent.insertBefore(node, target)
	                        if (parentInDocument) traverseNode(node, function(el){
	                            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	                                (!el.type || el.type === 'text/javascript') && !el.src){
	                                var target = el.ownerDocument ? el.ownerDocument.defaultView : window
	                                target['eval'].call(target, el.innerHTML)
	                            }
	                        })
	                    })
	                })
	            }

	            // after    => insertAfter
	            // prepend  => prependTo
	            // before   => insertBefore
	            // append   => appendTo
	            $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	                $(html)[operator](this)
	                return this
	            }
	        })

	        zepto.Z.prototype = Z.prototype = $.fn

	        // Export internal API functions in the `$.zepto` namespace
	        zepto.uniq = uniq
	        zepto.deserializeValue = deserializeValue
	        $.zepto = zepto

	        return $
	    })()

	    window.Zepto = Zepto
	    window.$ === undefined && (window.$ = Zepto)

	    ;(function($){
	        var _zid = 1, undefined,
	            slice = Array.prototype.slice,
	            isFunction = $.isFunction,
	            isString = function(obj){ return typeof obj == 'string' },
	            handlers = {},
	            specialEvents={},
	            focusinSupported = 'onfocusin' in window,
	            focus = { focus: 'focusin', blur: 'focusout' },
	            hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

	        specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

	        function zid(element) {
	            return element._zid || (element._zid = _zid++)
	        }
	        function findHandlers(element, event, fn, selector) {
	            event = parse(event)
	            if (event.ns) var matcher = matcherFor(event.ns)
	            return (handlers[zid(element)] || []).filter(function(handler) {
	                return handler
	                    && (!event.e  || handler.e == event.e)
	                    && (!event.ns || matcher.test(handler.ns))
	                    && (!fn       || zid(handler.fn) === zid(fn))
	                    && (!selector || handler.sel == selector)
	            })
	        }
	        function parse(event) {
	            var parts = ('' + event).split('.')
	            return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	        }
	        function matcherFor(ns) {
	            return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	        }

	        function eventCapture(handler, captureSetting) {
	            return handler.del &&
	                (!focusinSupported && (handler.e in focus)) ||
	                !!captureSetting
	        }

	        function realEvent(type) {
	            return hover[type] || (focusinSupported && focus[type]) || type
	        }

	        function add(element, events, fn, data, selector, delegator, capture){
	            var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	            events.split(/\s/).forEach(function(event){
	                if (event == 'ready') return $(document).ready(fn)
	                var handler   = parse(event)
	                handler.fn    = fn
	                handler.sel   = selector
	                // emulate mouseenter, mouseleave
	                if (handler.e in hover) fn = function(e){
	                    var related = e.relatedTarget
	                    if (!related || (related !== this && !$.contains(this, related)))
	                        return handler.fn.apply(this, arguments)
	                }
	                handler.del   = delegator
	                var callback  = delegator || fn
	                handler.proxy = function(e){
	                    e = compatible(e)
	                    if (e.isImmediatePropagationStopped()) return
	                    e.data = data
	                    var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	                    if (result === false) e.preventDefault(), e.stopPropagation()
	                    return result
	                }
	                handler.i = set.length
	                set.push(handler)
	                if ('addEventListener' in element)
	                    element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	            })
	        }
	        function remove(element, events, fn, selector, capture){
	            var id = zid(element)
	                ;(events || '').split(/\s/).forEach(function(event){
	                findHandlers(element, event, fn, selector).forEach(function(handler){
	                    delete handlers[id][handler.i]
	                    if ('removeEventListener' in element)
	                        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	                })
	            })
	        }

	        $.event = { add: add, remove: remove }

	        $.proxy = function(fn, context) {
	            var args = (2 in arguments) && slice.call(arguments, 2)
	            if (isFunction(fn)) {
	                var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	                proxyFn._zid = zid(fn)
	                return proxyFn
	            } else if (isString(context)) {
	                if (args) {
	                    args.unshift(fn[context], fn)
	                    return $.proxy.apply(null, args)
	                } else {
	                    return $.proxy(fn[context], fn)
	                }
	            } else {
	                throw new TypeError("expected function")
	            }
	        }

	        $.fn.bind = function(event, data, callback){
	            return this.on(event, data, callback)
	        }
	        $.fn.unbind = function(event, callback){
	            return this.off(event, callback)
	        }
	        $.fn.one = function(event, selector, data, callback){
	            return this.on(event, selector, data, callback, 1)
	        }

	        var returnTrue = function(){return true},
	            returnFalse = function(){return false},
	            ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
	            eventMethods = {
	                preventDefault: 'isDefaultPrevented',
	                stopImmediatePropagation: 'isImmediatePropagationStopped',
	                stopPropagation: 'isPropagationStopped'
	            }

	        function compatible(event, source) {
	            if (source || !event.isDefaultPrevented) {
	                source || (source = event)

	                $.each(eventMethods, function(name, predicate) {
	                    var sourceMethod = source[name]
	                    event[name] = function(){
	                        this[predicate] = returnTrue
	                        return sourceMethod && sourceMethod.apply(source, arguments)
	                    }
	                    event[predicate] = returnFalse
	                })

	                event.timeStamp || (event.timeStamp = Date.now())

	                if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	                        'returnValue' in source ? source.returnValue === false :
	                        source.getPreventDefault && source.getPreventDefault())
	                    event.isDefaultPrevented = returnTrue
	            }
	            return event
	        }

	        function createProxy(event) {
	            var key, proxy = { originalEvent: event }
	            for (key in event)
	                if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

	            return compatible(proxy, event)
	        }

	        $.fn.delegate = function(selector, event, callback){
	            return this.on(event, selector, callback)
	        }
	        $.fn.undelegate = function(selector, event, callback){
	            return this.off(event, selector, callback)
	        }

	        $.fn.live = function(event, callback){
	            $(document.body).delegate(this.selector, event, callback)
	            return this
	        }
	        $.fn.die = function(event, callback){
	            $(document.body).undelegate(this.selector, event, callback)
	            return this
	        }

	        $.fn.on = function(event, selector, data, callback, one){
	            var autoRemove, delegator, $this = this
	            if (event && !isString(event)) {
	                $.each(event, function(type, fn){
	                    $this.on(type, selector, data, fn, one)
	                })
	                return $this
	            }

	            if (!isString(selector) && !isFunction(callback) && callback !== false)
	                callback = data, data = selector, selector = undefined
	            if (callback === undefined || data === false)
	                callback = data, data = undefined

	            if (callback === false) callback = returnFalse

	            return $this.each(function(_, element){
	                if (one) autoRemove = function(e){
	                    remove(element, e.type, callback)
	                    return callback.apply(this, arguments)
	                }

	                if (selector) delegator = function(e){
	                    var evt, match = $(e.target).closest(selector, element).get(0)
	                    if (match && match !== element) {
	                        evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	                        return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	                    }
	                }

	                add(element, event, callback, data, selector, delegator || autoRemove)
	            })
	        }
	        $.fn.off = function(event, selector, callback){
	            var $this = this
	            if (event && !isString(event)) {
	                $.each(event, function(type, fn){
	                    $this.off(type, selector, fn)
	                })
	                return $this
	            }

	            if (!isString(selector) && !isFunction(callback) && callback !== false)
	                callback = selector, selector = undefined

	            if (callback === false) callback = returnFalse

	            return $this.each(function(){
	                remove(this, event, callback, selector)
	            })
	        }

	        $.fn.trigger = function(event, args){
	            event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	            event._args = args
	            return this.each(function(){
	                // handle focus(), blur() by calling them directly
	                if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	                // items in the collection might not be DOM elements
	                else if ('dispatchEvent' in this) this.dispatchEvent(event)
	                else $(this).triggerHandler(event, args)
	            })
	        }

	        // triggers event handlers on current element just as if an event occurred,
	        // doesn't trigger an actual event, doesn't bubble
	        $.fn.triggerHandler = function(event, args){
	            var e, result
	            this.each(function(i, element){
	                e = createProxy(isString(event) ? $.Event(event) : event)
	                e._args = args
	                e.target = element
	                $.each(findHandlers(element, event.type || event), function(i, handler){
	                    result = handler.proxy(e)
	                    if (e.isImmediatePropagationStopped()) return false
	                })
	            })
	            return result
	        }

	        // shortcut methods for `.bind(event, fn)` for each event type
	        ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	        'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	        'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	            $.fn[event] = function(callback) {
	                return (0 in arguments) ?
	                    this.bind(event, callback) :
	                    this.trigger(event)
	            }
	        })

	        $.Event = function(type, props) {
	            if (!isString(type)) props = type, type = props.type
	            var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	            if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	            event.initEvent(type, bubbles, true)
	            return compatible(event)
	        }

	    })(Zepto)

	    ;(function($){
	        var jsonpID = +new Date(),
	            document = window.document,
	            key,
	            name,
	            rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	            scriptTypeRE = /^(?:text|application)\/javascript/i,
	            xmlTypeRE = /^(?:text|application)\/xml/i,
	            jsonType = 'application/json',
	            htmlType = 'text/html',
	            blankRE = /^\s*$/,
	            originAnchor = document.createElement('a')

	        originAnchor.href = window.location.href

	        // trigger a custom event and return false if it was cancelled
	        function triggerAndReturn(context, eventName, data) {
	            var event = $.Event(eventName)
	            $(context).trigger(event, data)
	            return !event.isDefaultPrevented()
	        }

	        // trigger an Ajax "global" event
	        function triggerGlobal(settings, context, eventName, data) {
	            if (settings.global) return triggerAndReturn(context || document, eventName, data)
	        }

	        // Number of active Ajax requests
	        $.active = 0

	        function ajaxStart(settings) {
	            if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	        }
	        function ajaxStop(settings) {
	            if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	        }

	        // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	        function ajaxBeforeSend(xhr, settings) {
	            var context = settings.context
	            if (settings.beforeSend.call(context, xhr, settings) === false ||
	                triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	                return false

	            triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	        }
	        function ajaxSuccess(data, xhr, settings, deferred) {
	            var context = settings.context, status = 'success'
	            settings.success.call(context, data, status, xhr)
	            if (deferred) deferred.resolveWith(context, [data, status, xhr])
	            triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	            ajaxComplete(status, xhr, settings)
	        }
	        // type: "timeout", "error", "abort", "parsererror"
	        function ajaxError(error, type, xhr, settings, deferred) {
	            var context = settings.context
	            settings.error.call(context, xhr, type, error)
	            if (deferred) deferred.rejectWith(context, [xhr, type, error])
	            triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	            ajaxComplete(type, xhr, settings)
	        }
	        // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	        function ajaxComplete(status, xhr, settings) {
	            var context = settings.context
	            settings.complete.call(context, xhr, status)
	            triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	            ajaxStop(settings)
	        }

	        function ajaxDataFilter(data, type, settings) {
	            if (settings.dataFilter == empty) return data
	            var context = settings.context
	            return settings.dataFilter.call(context, data, type)
	        }

	        // Empty function, used as default callback
	        function empty() {}

	        $.ajaxJSONP = function(options, deferred){
	            if (!('type' in options)) return $.ajax(options)

	            var _callbackName = options.jsonpCallback,
	                callbackName = ($.isFunction(_callbackName) ?
	                        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),
	                script = document.createElement('script'),
	                originalCallback = window[callbackName],
	                responseData,
	                abort = function(errorType) {
	                    $(script).triggerHandler('error', errorType || 'abort')
	                },
	                xhr = { abort: abort }, abortTimeout

	            if (deferred) deferred.promise(xhr)

	            $(script).on('load error', function(e, errorType){
	                clearTimeout(abortTimeout)
	                $(script).off().remove()

	                if (e.type == 'error' || !responseData) {
	                    ajaxError(null, errorType || 'error', xhr, options, deferred)
	                } else {
	                    ajaxSuccess(responseData[0], xhr, options, deferred)
	                }

	                window[callbackName] = originalCallback
	                if (responseData && $.isFunction(originalCallback))
	                    originalCallback(responseData[0])

	                originalCallback = responseData = undefined
	            })

	            if (ajaxBeforeSend(xhr, options) === false) {
	                abort('abort')
	                return xhr
	            }

	            window[callbackName] = function(){
	                responseData = arguments
	            }

	            script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	            document.head.appendChild(script)

	            if (options.timeout > 0) abortTimeout = setTimeout(function(){
	                abort('timeout')
	            }, options.timeout)

	            return xhr
	        }

	        $.ajaxSettings = {
	            // Default type of request
	            type: 'GET',
	            // Callback that is executed before request
	            beforeSend: empty,
	            // Callback that is executed if the request succeeds
	            success: empty,
	            // Callback that is executed the the server drops error
	            error: empty,
	            // Callback that is executed on request complete (both: error and success)
	            complete: empty,
	            // The context for the callbacks
	            context: null,
	            // Whether to trigger "global" Ajax events
	            global: true,
	            // Transport
	            xhr: function () {
	                return new window.XMLHttpRequest()
	            },
	            // MIME types mapping
	            // IIS returns Javascript as "application/x-javascript"
	            accepts: {
	                script: 'text/javascript, application/javascript, application/x-javascript',
	                json:   jsonType,
	                xml:    'application/xml, text/xml',
	                html:   htmlType,
	                text:   'text/plain'
	            },
	            // Whether the request is to another domain
	            crossDomain: false,
	            // Default timeout
	            timeout: 0,
	            // Whether data should be serialized to string
	            processData: true,
	            // Whether the browser should be allowed to cache GET responses
	            cache: true,
	            //Used to handle the raw response data of XMLHttpRequest.
	            //This is a pre-filtering function to sanitize the response.
	            //The sanitized response should be returned
	            dataFilter: empty
	        }

	        function mimeToDataType(mime) {
	            if (mime) mime = mime.split(';', 2)[0]
	            return mime && ( mime == htmlType ? 'html' :
	                    mime == jsonType ? 'json' :
	                        scriptTypeRE.test(mime) ? 'script' :
	                        xmlTypeRE.test(mime) && 'xml' ) || 'text'
	        }

	        function appendQuery(url, query) {
	            if (query == '') return url
	            return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	        }

	        // serialize payload and append it to the URL for GET requests
	        function serializeData(options) {
	            if (options.processData && options.data && $.type(options.data) != "string")
	                options.data = $.param(options.data, options.traditional)
	            if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))
	                options.url = appendQuery(options.url, options.data), options.data = undefined
	        }

	        $.ajax = function(options){
	            var settings = $.extend({}, options || {}),
	                deferred = $.Deferred && $.Deferred(),
	                urlAnchor, hashIndex
	            for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

	            ajaxStart(settings)

	            if (!settings.crossDomain) {
	                urlAnchor = document.createElement('a')
	                urlAnchor.href = settings.url
	                // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
	                urlAnchor.href = urlAnchor.href
	                settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	            }

	            if (!settings.url) settings.url = window.location.toString()
	            if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)
	            serializeData(settings)

	            var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	            if (hasPlaceholder) dataType = 'jsonp'

	            if (settings.cache === false || (
	                    (!options || options.cache !== true) &&
	                    ('script' == dataType || 'jsonp' == dataType)
	                ))
	                settings.url = appendQuery(settings.url, '_=' + Date.now())

	            if ('jsonp' == dataType) {
	                if (!hasPlaceholder)
	                    settings.url = appendQuery(settings.url,
	                        settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	                return $.ajaxJSONP(settings, deferred)
	            }

	            var mime = settings.accepts[dataType],
	                headers = { },
	                setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	                protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	                xhr = settings.xhr(),
	                nativeSetHeader = xhr.setRequestHeader,
	                abortTimeout

	            if (deferred) deferred.promise(xhr)

	            if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	            setHeader('Accept', mime || '*/*')
	            if (mime = settings.mimeType || mime) {
	                if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	                xhr.overrideMimeType && xhr.overrideMimeType(mime)
	            }
	            if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	                setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

	            if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	            xhr.setRequestHeader = setHeader

	            xhr.onreadystatechange = function(){
	                if (xhr.readyState == 4) {
	                    xhr.onreadystatechange = empty
	                    clearTimeout(abortTimeout)
	                    var result, error = false
	                    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	                        dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))

	                        if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')
	                            result = xhr.response
	                        else {
	                            result = xhr.responseText

	                            try {
	                                // http://perfectionkills.com/global-eval-what-are-the-options/
	                                // sanitize response accordingly if data filter callback provided
	                                result = ajaxDataFilter(result, dataType, settings)
	                                if (dataType == 'script')    (1,eval)(result)
	                                else if (dataType == 'xml')  result = xhr.responseXML
	                                else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	                            } catch (e) { error = e }

	                            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)
	                        }

	                        ajaxSuccess(result, xhr, settings, deferred)
	                    } else {
	                        ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	                    }
	                }
	            }

	            if (ajaxBeforeSend(xhr, settings) === false) {
	                xhr.abort()
	                ajaxError(null, 'abort', xhr, settings, deferred)
	                return xhr
	            }

	            var async = 'async' in settings ? settings.async : true
	            xhr.open(settings.type, settings.url, async, settings.username, settings.password)

	            if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

	            for (name in headers) nativeSetHeader.apply(xhr, headers[name])

	            if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	                xhr.onreadystatechange = empty
	                xhr.abort()
	                ajaxError(null, 'timeout', xhr, settings, deferred)
	            }, settings.timeout)

	            // avoid sending empty string (#319)
	            xhr.send(settings.data ? settings.data : null)
	            return xhr
	        }

	        // handle optional data/success arguments
	        function parseArguments(url, data, success, dataType) {
	            if ($.isFunction(data)) dataType = success, success = data, data = undefined
	            if (!$.isFunction(success)) dataType = success, success = undefined
	            return {
	                url: url
	                , data: data
	                , success: success
	                , dataType: dataType
	            }
	        }

	        $.get = function(/* url, data, success, dataType */){
	            return $.ajax(parseArguments.apply(null, arguments))
	        }

	        $.post = function(/* url, data, success, dataType */){
	            var options = parseArguments.apply(null, arguments)
	            options.type = 'POST'
	            return $.ajax(options)
	        }

	        $.getJSON = function(/* url, data, success */){
	            var options = parseArguments.apply(null, arguments)
	            options.dataType = 'json'
	            return $.ajax(options)
	        }

	        $.fn.load = function(url, data, success){
	            if (!this.length) return this
	            var self = this, parts = url.split(/\s/), selector,
	                options = parseArguments(url, data, success),
	                callback = options.success
	            if (parts.length > 1) options.url = parts[0], selector = parts[1]
	            options.success = function(response){
	                self.html(selector ?
	                    $('<div>').html(response.replace(rscript, "")).find(selector)
	                    : response)
	                callback && callback.apply(self, arguments)
	            }
	            $.ajax(options)
	            return this
	        }

	        var escape = encodeURIComponent

	        function serialize(params, obj, traditional, scope){
	            var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	            $.each(obj, function(key, value) {
	                type = $.type(value)
	                if (scope) key = traditional ? scope :
	                scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	                // handle data in serializeArray() format
	                if (!scope && array) params.add(value.name, value.value)
	                // recurse into nested objects
	                else if (type == "array" || (!traditional && type == "object"))
	                    serialize(params, value, traditional, key)
	                else params.add(key, value)
	            })
	        }

	        $.param = function(obj, traditional){
	            var params = []
	            params.add = function(key, value) {
	                if ($.isFunction(value)) value = value()
	                if (value == null) value = ""
	                this.push(escape(key) + '=' + escape(value))
	            }
	            serialize(params, obj, traditional)
	            return params.join('&').replace(/%20/g, '+')
	        }
	    })(Zepto)

	    ;(function($){
	        $.fn.serializeArray = function() {
	            var name, type, result = [],
	                add = function(value) {
	                    if (value.forEach) return value.forEach(add)
	                    result.push({ name: name, value: value })
	                }
	            if (this[0]) $.each(this[0].elements, function(_, field){
	                type = field.type, name = field.name
	                if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	                    !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	                    ((type != 'radio' && type != 'checkbox') || field.checked))
	                    add($(field).val())
	            })
	            return result
	        }

	        $.fn.serialize = function(){
	            var result = []
	            this.serializeArray().forEach(function(elm){
	                result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	            })
	            return result.join('&')
	        }

	        $.fn.submit = function(callback) {
	            if (0 in arguments) this.bind('submit', callback)
	            else if (this.length) {
	                var event = $.Event('submit')
	                this.eq(0).trigger(event)
	                if (!event.isDefaultPrevented()) this.get(0).submit()
	            }
	            return this
	        }

	    })(Zepto)

	    ;(function(){
	        // getComputedStyle shouldn't freak out when called
	        // without a valid element as argument
	        try {
	            getComputedStyle(undefined)
	        } catch(e) {
	            var nativeGetComputedStyle = getComputedStyle
	            window.getComputedStyle = function(element, pseudoElement){
	                try {
	                    return nativeGetComputedStyle(element, pseudoElement)
	                } catch(e) {
	                    return null
	                }
	            }
	        }
	    })()
	    return Zepto
	}))

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = __webpack_require__(139);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _stringify = __webpack_require__(319);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var util = {
	    encodeHtml: function encodeHtml(str) {
	        return util.formatHtml(str, 'en');
	    },
	    decodeHtml: function decodeHtml(str) {
	        return util.formatHtml(str, 'de');
	    },
	    allDecodeHtml: function allDecodeHtml(str) {
	        var r = util.formatHtml(str, 'de');
	        return r.replace(new RegExp('<br/?>|<BR/?>', 'g'), '\\n');
	    },
	    formatHtml: function formatHtml(str, type) {
	        //\n这个比较复杂，不在此处处理
	        var spes = ['&', '<', '>', ' ', '\'', '\"', '￠', '£', '¥', '€'];
	        var htmls = ['&amp;', '&lt;', '&gt;', '&nbsp;', '&#39;', '&quot;', '&cent;', '&pound;', '&yen;', '&euro'];
	        if (!str || str.length == 0) return "";
	        if (type == 'en') {
	            for (var i = 0, ilen = spes.length; i < ilen; i++) {
	                str = str.replace(new RegExp(spes[i], 'g'), htmls[i]);
	            }
	        } else {
	            for (var i = 0, ilen = htmls.length; i < ilen; i++) {
	                str = str.replace(new RegExp(htmls[i], 'g'), spes[i]);
	            }
	        }
	        return str;
	    },
	    getUrl: function getUrl(url) {
	        var tks = document.getElementById('mz_csrf_tks');
	        if (url && url.indexOf('tkscsrf') === -1 && url.indexOf('/c/browser') >= 0 && tks && tks.value) {
	            return url += (url.indexOf('?') > 0 ? '&tkscsrf=' : '?tkscsrf=') + tks.value;
	        }
	        return url;
	    }
	};

	function checkbox(opt) {
	    var defaults = {
	        chkCls: "active",
	        unChkCls: "",
	        spanCls: "checkbox clearfix",
	        click: null,
	        host: null,
	        serverInit: false,
	        rule: null,
	        html: '<span class="checkbox-pic"><i class="i_icon"></i></span>'
	    };
	    this.options = $.extend(defaults, opt);
	    var proto = this,
	        host = this.options.host,
	        all = host.length;
	    if (!all) return;
	    if (this.options.serverInit) {
	        this._fastBind2();
	    } else if (all > 15) {
	        this._fastBind1();
	    } else {
	        for (var i = 0; i < all; i++) {
	            this.bind($(host[i]), false);
	        }
	    }
	}

	checkbox.prototype = {
	    chose: function chose(cbox, _chose, nochose) {
	        var opt = this.options,
	            pic = $(cbox.parent().find("span")[0]);
	        if (!nochose && (_chose || !pic.hasClass(opt.chkCls))) {
	            pic.removeClass(opt.unChkCls).addClass(opt.chkCls);
	            cbox.attr("checked", "checked");
	        } else {
	            pic.removeClass(opt.chkCls).addClass(opt.unChkCls);
	            cbox.removeAttr("checked");
	        }
	    },
	    _fastBind1: function _fastBind1() {
	        var _self = this,
	            opt = _self.options,
	            host = opt.host,
	            all = host.length;
	        for (var i = 0; i < all; i++) {
	            var cbox = $(host[i]),
	                pic = $(this.options.html);
	            cbox.hide().parent().prepend(pic);
	            _self._oBind(cbox, pic, opt.chkCls, opt.unChkCls);
	        }
	        setTimeout(function () {
	            for (var j = 0; j < all; j++) {
	                var cbox = $(host[j]),
	                    span = cbox.parent();
	                _self._eBind(cbox, span, false, opt.spanCls);
	            }
	        }, 10);
	    },
	    _fastBind2: function _fastBind2() {
	        var _self = this,
	            host = _self.options.host,
	            spanCls = _self.options.spanCls,
	            all = host.length;
	        for (var j = 0; j < all; j++) {
	            var cbox = $(host[j]),
	                span = cbox.parent();
	            _self._eBind(cbox, span, false, spanCls);
	        }
	    },
	    _eBind: function _eBind(cbox, span, isnew, spanCls) {
	        var proto = this;
	        if (isnew) proto.options.host.push(cbox[0]);
	        var _click = function _click(e) {
	            var rs = true;
	            if (proto.options.rule) {
	                rs = proto.options.rule.call(cbox[0]);
	            }
	            if (!rs) {
	                nAlert('你之前新建的联系人还未进行编辑', '提示');
	                return;
	            }
	            proto.chose(cbox);
	            return proto.options.click && proto.options.click.call(cbox[0], {
	                value: cbox.val(),
	                checked: cbox.attr("checked")
	            }, e);
	        };
	        span.click(_click).addClass(spanCls);
	    },
	    _oBind: function _oBind(cbox, pic, chkCls, unChkCls) {
	        if (cbox.get(0).checked) {
	            pic.addClass(chkCls);
	        } else {
	            pic.addClass(unChkCls);
	        }
	    },
	    bind: function bind(cbox, isnew) {
	        var pic = $(this.options.html),
	            span = cbox.hide().parent().prepend(pic),
	            opt = this.options,
	            host = opt.host;
	        this._oBind(cbox, pic, this.options.chkCls, this.options.unChkCls);
	        this._eBind(cbox, span, isnew, opt.spanCls);
	    },
	    val: function val(j) {
	        if (j && j.length) {
	            this.setVal(j);
	        } else {
	            return this.getVal();
	        }
	    },
	    setVal: function setVal(j) {
	        if (!j || !j.length) return;
	        var host = this.options.host;
	        for (var i = 0, k = j.length; i < k; i++) {
	            for (var ci = 0, ck = host.length; ci < ck; ci++) {
	                if (host[ci].value == j[i]) this.chose($(host[ci]), true);
	            }
	        }
	    },
	    getVal: function getVal() {
	        var host = this.options.host,
	            ay = [];
	        for (var i = 0, j = host.length; i < j; i++) {
	            if (host[i].checked) ay.push(host[i].value);
	        }
	        return ay;
	    },
	    getUncheckVal: function getUncheckVal() {
	        var host = this.options.host,
	            ay = [];
	        for (var i = 0, j = host.length; i < j; i++) {
	            if (!host[i].checked) ay.push(host[i].value);
	        }
	        return ay;
	    },
	    checkAll: function checkAll() {
	        var host = this.options.host;
	        for (var i = 0, j = host.length; i < j; i++) {
	            this.chose($(host[i]), true);
	        }
	    },
	    uncheckAll: function uncheckAll() {
	        var host = this.options.host;
	        for (var i = 0, j = host.length; i < j; i++) {
	            this.chose($(host[i]), true, true);
	        }
	    },
	    uncheck: function uncheck(val) {
	        if (!val) return;
	        var host = this.options.host;
	        for (var i = 0, j = host.length; i < j; i++) {
	            if (host[i].value == val) {
	                this.chose($(host[i]), true, true);
	                return;
	            }
	        }
	    },
	    size: function size() {
	        return this.options.host.length;
	    }
	};

	var ua = navigator.userAgent.toLowerCase();
	var isIe = !!window.ActiveXObject || "ActiveXObject" in window;
	var isIe6 = /msie 6/i.test(ua);
	var isIe7 = /msie 7/i.test(ua);
	var isIe7 = /msie 7/i.test(ua);
	var isIe8 = /msie 8/i.test(ua);
	var isIe9 = /msie 9/i.test(ua);
	var isIe10 = /msie 10/i.test(ua);
	var isIe11 = /rv:11/i.test(ua);
	var isIe12 = /rv:12/i.test(ua);
	var isMozilla = /firefox/.test(ua);
	var isWebkit = ua.indexOf(' applewebkit/') > -1;
	isIe = !isIe11 && isIe;

	(function ($) {
	    var ua = navigator.userAgent.toLowerCase(),
	        toListCount = 0,
	        maxToListCount = 10000,
	        isIe = !!window.ActiveXObject || "ActiveXObject" in window;

	    function _getValue(n) {
	        switch (n.nodeName.toLowerCase()) {
	            case '#text':
	                return n.nodeValue;
	            case 'img':
	                return $(n).attr("src");
	            default:
	                return $(n).text();
	        }
	    }
	    var Json = function Json() {};
	    Json.prototype = {
	        concat2Text: function concat2Text(prev, current) {
	            prev.text += current.text;
	            prev.span = [];
	            return prev;
	        },
	        concatText: function concatText(list) {
	            //整体合并优化
	            var prev = null,
	                one = null;
	            for (var i = 0, ilen = list.length; i < ilen; i++) {
	                one = list[i];
	                if (one.state == 0) {
	                    if (prev) {
	                        //进行合并
	                        one = this.concat2Text(prev, one);
	                        prev = one;
	                        i -= 1;
	                        ilen -= 1;
	                        list.splice(i, 2, one);
	                    } else {
	                        prev = one;
	                    }
	                } else {
	                    prev = null;
	                }
	            }
	        },
	        toList: function toList(n) {
	            if (toListCount > maxToListCount) {
	                alert('数据解析出错');
	                return [];
	            }
	            toListCount++;
	            var list = [];
	            var _recursion = function _recursion(n) {
	                var _list = [];
	                var ns = n.childNodes;
	                if (ns != null) {
	                    for (var i = 0, ilen = ns.length; i < ilen; i++) {
	                        _list = _list.concat(this.toList(ns[i]));
	                    }
	                }
	                return _list;
	            };
	            var _dealBlock = function _dealBlock(n) {
	                var text = '',
	                    nodeName = '';
	                if (n.previousSibling) {
	                    nodeName = n.previousSibling.nodeName.toLowerCase();
	                    if (nodeName == '#text') {
	                        if (isIe || $(n).text() != '') {
	                            list.push({
	                                state: 0,
	                                text: '\n'
	                            });
	                        }
	                    }
	                }
	                list = list.concat(_recursion.call(this, n));
	                if (n.nextSibling) {
	                    nodeName = n.nextSibling.nodeName.toLowerCase();
	                    if (nodeName != 'img' && nodeName != 'input' && !$(n.nextSibling).attr('data-type') && $(n.nextSibling).text() != '' || nodeName == '#text') {
	                        //下一个节点为文本
	                        list.push({
	                            state: 0,
	                            text: '\n'
	                        });
	                    }
	                }
	                this.concatText(list);
	            };
	            switch (n.nodeName.toLowerCase()) {
	                case '#text':
	                    //文本
	                    if (n.previousSibling && n.previousSibling.nodeName.toLowerCase() == 'input' && $(n.previousSibling).attr('type') == 'checkbox') {
	                        //清单复选框后面的节点
	                        break;
	                    }
	                    var val = _getValue(n);
	                    if (val == '') {
	                        return list;
	                    }
	                    list.push({
	                        state: 0,
	                        text: val
	                    });
	                    break;
	                case 'img':
	                    var val = _getValue(n);
	                    if (val == '') {
	                        return list;
	                    }
	                    var o = {
	                        state: 3,
	                        name: val
	                    };
	                    var w = $(n).attr('data-width');
	                    var h = $(n).attr('data-height');
	                    if (w) {
	                        o.width = parseInt(w);
	                    }
	                    if (h) {
	                        o.height = parseInt(h);
	                    }
	                    list.push(o);
	                    break;
	                case 'p':
	                    _dealBlock.call(this, n);
	                    break;
	                case 'div':
	                    if ($(n).attr("data-type") == 'list') {
	                        //清单
	                        var tempList = _recursion.call(this, n);
	                        var $checkbox = $(n).find('input[type="checkbox"]');
	                        if ($checkbox.length == 0) {
	                            //清单结构不正确，当做普通div处理
	                            list.concat(tempList);
	                            return list;
	                        }
	                        this.concatText(tempList);

	                        var one = tempList[0];
	                        if (tempList.length > 1) {
	                            one.text += tempList[1].text;
	                        }
	                        if ($checkbox.prop('checked') == true) {
	                            //勾选了的清单
	                            one.state = 2;
	                        } else {
	                            //未勾选
	                            one.state = 1;
	                        }
	                        list.push(one);
	                    } else if ($(n).attr("data-type") == 'title') {
	                        //do nothing
	                    } else if ($(n).attr("data-type") == 'audio') {
	                        //录音
	                        list.push({
	                            state: 4,
	                            name: $(n).attr("data-audio")
	                        });
	                    } else {
	                        // list = list.concat(_recursion.call(this, n));
	                        // list.push({state: 0, text: '\n'});
	                        _dealBlock.call(this, n);
	                    }
	                    break;
	                case 'span':
	                    list = list.concat(_recursion.call(this, n));
	                    break;
	                case 'br':
	                    list.push({
	                        state: 0,
	                        text: '\n'
	                    });
	                    break;
	                case 'input':
	                    if ($(n).attr('type') == 'checkbox') {
	                        //清单
	                        var text = "";
	                        if (n.nextSibling) {
	                            var nodeName = n.nextSibling.nodeName.toLowerCase();
	                            if (nodeName == '#text' || nodeName == 'big' || nodeName == 'small') {
	                                text = _getValue(n.nextSibling);
	                            }
	                        }
	                        if ($(n).prop('checked') == true) {
	                            //勾选了的清单
	                            list.push({
	                                state: 2,
	                                text: text
	                            });
	                        } else {
	                            list.push({
	                                state: 1,
	                                text: text
	                            });
	                        }
	                    }
	                    break;
	                default:
	                    return list;
	            }
	            return list;
	        }
	    };
	    var Html = function Html() {};
	    Html.prototype = {
	        toHtml: function toHtml(json) {
	            if (!json) return '';
	            var list = null,
	                one = null,
	                str = '';
	            try {
	                list = JSON.parse(json);
	            } catch (e) {
	                alert('数据格式不正确');
	            }
	            if (!list) return '格式不正确';
	            for (var i = 0, ilen = list.length; i < ilen; i++) {
	                one = list[i];
	                str += this.dealLinSkip(one, this.fromItem(list[i]));
	            }
	            return str;
	        },
	        dealLinSkip: function dealLinSkip(item, str) {
	            if (str.indexOf("\n") != -1) {
	                var input = '',
	                    div = '';
	                if (item['state'] == 1 || item['state'] == 2) {
	                    if (str.indexOf(div) != -1) {
	                        div = '<div data-type="list">';
	                        str = str.replace(div, '');
	                        str = str.substring(0, str.length - 6);
	                    }
	                }
	                var strs = str.replace(/\n/g, "<br />");
	                return div + input + strs + (div ? '</div>' : '');
	            } else {
	                return str;
	            }
	        },
	        fromItem: function fromItem(item) {
	            switch (item['state']) {//0是普通的文本；1是清单项，没有勾选；2是勾选过的清单；3是图片；4是录音
	                case 0:
	                    return this.fromState0(item);
	                case 1:
	                case 2:
	                    return this.fromState12(item);
	                case 3:
	                    return this.fromState3(item);
	                case 4:
	                    return this.fromState4(item);
	            }
	            return "";
	        },
	        encodeHtml: function encodeHtml(text) {
	            return util.encodeHtml(text);
	        },
	        fromState0: function fromState0(item) {
	            //文本
	            return this.encodeHtml(item['text']);
	        },
	        fromState12: function fromState12(item) {
	            //清单
	            var text = util.encodeHtml(this.fromState0(item));
	            var checked = '';
	            if (item['state'] == 1) {
	                //没有勾选的清单
	                checked = '';
	            } else {
	                checked = ' checked="checked"';
	            }
	            return '<div data-type="list"><input type="checkbox"' + checked + '/>' + text + '</div>';
	        },
	        fromState3: function fromState3(item) {
	            //图片
	            var w = item['width'],
	                h = item['height'],
	                wstr = '',
	                hstr = '',
	                imgTk = isIe && $.browser.version != 8.0 ? 'style="display:inline-block"' : '';

	            if (w) {
	                wstr = 'data-width=' + w + ' ';
	            }
	            if (h) {
	                hstr = 'data-height=' + h + ' ';
	            }
	            var url = G.cFiles && G.cFiles[item['name']];
	            if (!url) {
	                url = cdnPath + '/images/wait.gif';
	            }
	            return '<img ' + imgTk + wstr + hstr + 'src="' + url + '"/>';
	        },
	        fromState4: function fromState4(item) {
	            //录音
	            var audio = G.cFiles ? G.cFiles[item['name']] : item['name'];
	            return '<div class="audio" tabindex="-1" data-type="audio" data-audio="' + audio + '"><div class="audioShow"></div><div class="audioPause"></div><div class="audioSeekBar"><div class="audioPlayBar"></div></div><span class="audioTime"></span><a href="' + audio + '" class="audioSave">保存</a></div>';
	        }
	    };
	    window.HJson = function () {
	        this.json = new Json();
	        this.html = new Html();
	    };
	    HJson.prototype = {
	        isEmpty: function isEmpty($o) {
	            var text = isIe ? $o.text().replace(/\s/, "") : $o.text();
	            if (!text && !$o.find('img').length && !$o.find('div[data-type=list]').length && !$o.find('div[data-type=audio]').length) {
	                return true;
	            }
	            return false;
	        },
	        toJson: function toJson(html) {
	            var $h = $(html),
	                list = [];
	            if (this.isEmpty($h)) {
	                return '';
	            }
	            for (var i = 0, ilen = $h.length; i < ilen; i++) {
	                toListCount = 0;
	                list = list.concat(this.json.toList($h[i]));
	            }
	            this.json.concatText(list);
	            var one = null;
	            for (var i = 0, ilen = list.length; i < ilen; i++) {
	                one = list[i];
	                if (one.span) {
	                    one.span = (0, _stringify2.default)(one.span);
	                }
	            }
	            return list;
	        },
	        toJsonStr: function toJsonStr(html) {
	            var jsonStr = '';
	            var json = this.toJson(html);
	            if (json) {
	                jsonStr = (0, _stringify2.default)(json);
	            }
	            if (!jsonStr || jsonStr == '[]' || jsonStr == '[{"state":0,"text":"\n"}]') {
	                jsonStr = '[{"state":0,"text":""}]';
	            }
	            return jsonStr;
	        },
	        toHtml: function toHtml(json) {
	            return this.html.toHtml(json);
	        }
	    };
	})(Zepto);

	var G = {
	    'memoStatus': -1, //分组类型
	    'memoStatus_save': -1, //分组类型
	    'currGId': null, //当前选中分组
	    'statusValue': 'L', //页面状态 L:列表/D:详情
	    'statusSelect': {},
	    'initStatus': false,
	    'initGroup': false,
	    'interval': null,
	    'hJson': new HJson(),
	    'oldJson': {},
	    'isIe': !!window.ActiveXObject || "ActiveXObject" in window,
	    'cFiles': {},
	    'fontSize': 0,
	    'oldFontSize': 0,
	    'rSly': {},
	    'focusNow': false,
	    'namespace': 'plugin_sly',
	    'nowDate': new Date(),
	    'status': [{
	        id: -1,
	        name: '全部'
	    }, {
	        id: -3,
	        name: '加密'
	    }, {
	        id: -2,
	        name: '回收站'
	    }]
	};

	var Editor = function Editor(data, callback, refresh) {
	    this.editorInfo = {
	        editting: false,
	        preview: true,
	        focusObj: null,
	        canBlur: true
	    };
	    this.callback = callback;
	    this.refresh = refresh;
	    this.init(data);
	};

	Editor.prototype = {
	    init: function init(data) {
	        $('#dialogContent').html('');
	        this.getMemoDialogs(data);
	    },
	    getMemoDialogs: function getMemoDialogs(data) {
	        var _this = this,
	            temp = null;
	        var _fill = function _fill(data) {
	            var rvalue = data,
	                status = rvalue.groupStatus;
	            G.cFiles = rvalue.files;
	            for (var p in G.cFiles) {
	                if (G.cFiles.hasOwnProperty(p)) {
	                    G.cFiles[p] = util.getUrl(G.cFiles[p], true);
	                }
	            }
	            if (!rvalue) {
	                return;
	            }

	            var body = G.hJson.toHtml(rvalue.body),
	                title = rvalue.title;
	            if (!rvalue.fontSize) {
	                temp = 18;
	            } else {
	                temp = rvalue.fontSize;
	            }
	            G.oldFontSize = G.fontSize = temp;
	            _this.createEditors(body, ['audio', 'list']);

	            console.log(body);

	            if (G.isIe) {
	                //ie8有延迟问题
	                setTimeout(function () {
	                    _this.createAudio();
	                }, 300);
	            } else {
	                _this.createAudio();
	            }
	            // if (!$('#dialogContent .wrap-edit').length) {//保证内容为空时，还是可以进行录入编辑
	            //     _this.createEditor();
	            // }
	            // if (!$('#dialogContent>div:last').hasClass('jHtmlArea')) {//保证最后面永远可以进行录入编辑
	            //     _this.createEditor();
	            // }

	            _this.initHtmlAreaEvent();
	            _this.createLayout(data.uuid);

	            var Json = _this.toJson();
	            setTimeout(function () {
	                G.oldJson = Json;
	                if (_this.callback) _this.callback.call(this);
	            }, 100);
	        };
	        _fill(data);
	    },

	    createEditor: function createEditor(callBack, dealPos) {
	        var _this = this;
	        var $textArea = $('<textArea id="' + this.createId() + '"></textArea>').hide();
	        if ($.isFunction(dealPos)) {
	            dealPos.call(_this, $textArea);
	        } else {
	            $('#dialogContent').append($textArea);
	        }
	        $textArea.htmlarea({
	            loaded: function loaded() {
	                if ($.isFunction(callBack)) callBack.call(this, arguments);
	            },
	            focus: function focus() {
	                $('.insert-btn').show();
	                _this.focusHArea($textArea);
	            },
	            refresh: function refresh() {
	                _this.refresh();
	            }
	        });
	        $textArea.htmlarea('initEditor');
	        $textArea.htmlarea('initEvent');
	        $textArea.htmlarea('callback');
	        return $textArea;
	    },
	    createEditors: function createEditors(body, typeArr) {
	        var r = [{ html: body, type: 'all' }],
	            one = null,
	            eCount = 0,
	            editor = null,
	            $editor = null,
	            $con = null,
	            $input = null;
	        var _fillText = function _fillText(html) {
	            editor = this.createEditor(function () {
	                this.html(html, true);
	            });
	            eCount++;
	        };
	        if (!body) {
	            _fillText.call(this, "");
	        } else {
	            for (var i = 0, ilen = typeArr.length; i < ilen; i++) {
	                one = typeArr[i];
	                r = this.split(r, one);
	            }
	            for (var n = 0, nlen = r.length; n < nlen; n++) {
	                one = r[n];
	                if (one.type == 'all') {
	                    _fillText.call(this, one.html);
	                } else if (one.type == 'list') {
	                    $con = $('<div>').html(one.html);
	                    $input = $con.find('input[type=checkbox]').clone();
	                    _fillText.call(this, $con.text());
	                    $editor = $(editor[0].jhtmlareaObject.container).find(".wrap-edit");
	                    var listWidth = !isWebkit ? 52 : 45;
	                    $editor.css({ width: $editor.width() - listWidth });
	                    $input.insertBefore($editor);
	                    new checkbox($.extend({}, {
	                        click: function click() {
	                            return false;
	                        }
	                    }, {
	                        host: $input
	                    }));
	                } else {
	                    $('#dialogContent').append($(one.html));
	                }
	            }
	        }
	    },
	    createList: function createList(item, $o) {
	        var checked = '';
	        if (item['state'] == 1) {
	            //没有勾选的清单
	            checked = '';
	        } else {
	            checked = ' checked="checked"';
	        }
	        var $input = $('<input type="checkbox"' + checked + '/>');
	        var editor = this.createEditor(function () {
	            this.html(item.text, true);
	            $(this.getDoc()).focus();
	        }, function ($textArea) {
	            $textArea.insertAfter($o);
	        });
	        var $editor = $(editor[0].jhtmlareaObject.container).find(".wrap-edit");
	        $input.insertBefore($editor);
	        var listWidth = !isWebkit ? 52 : 45;
	        $editor.css({ width: $editor.width() - listWidth });
	        new checkbox($.extend({}, {
	            click: function click() {
	                return false;
	            }
	        }, {
	            host: $input
	        }));
	        return editor;
	    },
	    createAudio: function createAudio() {
	        var _this = this;
	        _this.players = [];
	        $('.audio').each(function (index, e) {
	            _this.players.push(new Player($(this)));
	        });
	    },
	    createId: function () {
	        var index = 0;
	        return function () {
	            return 'textArea_' + index++;
	        };
	    }(),
	    createLayout: function createLayout(id) {},
	    toJson: function toJson() {
	        var body = '',
	            temp = null,
	            oldBody = null,
	            $eContainer = $('#dialogContent');

	        $eContainer.find('div').each(function () {
	            if ($(this).hasClass('jHtmlArea')) {
	                //含编辑器的
	                temp = $(this).find('input[type=checkbox]');
	                if (temp.length) {
	                    //清单
	                    if (!temp.prop('checked')) {
	                        //没有勾选
	                        temp = '';
	                    } else {
	                        temp = ' checked="checked"';
	                    }
	                    body += '<div data-type="list"><input type="checkbox"' + temp + '/>' + $(this).find('textArea').htmlarea('html') + '</div>';
	                } else {
	                    //普通文本和图片
	                    body += $(this).find('textArea').htmlarea('toHtmlString');
	                }
	            } else if ($(this).hasClass('audio')) {
	                //录音
	                body += this.outerHTML;
	            }
	        });
	        oldBody = body;
	        temp = $('<div>').html(body);
	        if ($('.audio', temp).length > 100) {
	            return '录音数量超过100个';
	        }
	        var $tInput = $('#dialogTitleInput');
	        var fontSize = G.fontSize;
	        var r = {
	            title: $tInput.hasClass('emptyInput') ? '' : $tInput.val(),
	            bodyHtml: oldBody,
	            body: G.hJson.toJsonStr(temp),
	            uuid: !G.currGId || G.currGId == 'undefined' ? '' : G.currGId,
	            firstImg: temp.find('img'),
	            firstRecord: temp.find('.audio'),
	            fontSize: fontSize,
	            groupUuid: ''
	        };
	        $('.audio', temp).remove();

	        //TODO 列表如果要加入清单的话，需要修改这个方法的bodyText值
	        r.bodyText = temp.text();
	        return r;
	    },
	    initHtmlAreaEvent: function initHtmlAreaEvent() {
	        var $eContainer = $('#dialogContent');
	        var $audio = $('.audio', $eContainer),
	            _this = this;
	        if (G.isIe) {
	            this.addFAndBEvent($eContainer.find('.checkboxPic '));
	        }
	        $audio.on('keydown', function (e) {
	            var $this = $(this);
	            if (!$this.is(':focus')) {
	                return false;
	            }
	            var _focus = function _focus($o, type) {
	                if (!$o.length) {
	                    return;
	                }
	                if ($o.attr('data-type') == 'audio') {
	                    $o.focus();
	                    $o.addClass('audioSelected');
	                } else {
	                    var $textArea = $o.find('textArea');
	                    $($textArea.htmlarea('getDoc')).focus();
	                    var range = $textArea.htmlarea('getRange');
	                    var selection = $textArea.htmlarea('getSelection');
	                    var o = null;
	                    if (type == 'b') {
	                        $textArea.htmlarea('html', $textArea.htmlarea('toHtmlString') + '<span id="_editor_id_temp_audio"></span>');
	                        o = document.getElementById('_editor_id_temp_audio');
	                        $.htmlarea.move(o, range, selection);
	                    } else {
	                        $textArea.htmlarea('html', '<span id="_editor_id_temp_audio"></span>' + $textArea.htmlarea('toHtmlString'));
	                        o = document.getElementById('_editor_id_temp_audio');
	                        $.htmlarea.move(o, range, selection);
	                    }
	                    $(o).remove();
	                }
	            };
	            switch (e.keyCode) {
	                case 8:
	                    //backspace
	                    _this.editorInfo.canBlur = false;
	                    _focus($this.prev(), 'b');
	                    $this.remove();
	                    _this.editorInfo.canBlur = true;
	                    return false;
	                case 46:
	                    //delete
	                    _this.editorInfo.canBlur = false;
	                    _focus($this.next(), 'd');
	                    $this.remove();
	                    _this.editorInfo.canBlur = true;
	                    break;
	            }
	        });
	        this.addFAndBEvent($audio);
	        if (!G.isIe || $.browser.version != '8.0') {
	            $audio.click(function () {
	                return false;
	            });
	        }
	    },
	    addFAndBEvent: function addFAndBEvent($o) {
	        var _this = this;
	        $o.focus(function () {
	            //focus
	            if (this.id == "dialogTitleInput") {
	                _this.focusHArea(undefined, true);
	            }
	        });
	    },
	    focusHArea: function focusHArea(me, hideBtn) {
	        var _this = this;
	        _this.editorInfo.focusObj = me;
	        _this.editorInfo.preview = false;
	    },
	    split: function split(arr, type) {
	        var r = [],
	            one = null,
	            $container = null,
	            next = null,
	            temp = null,
	            outerHTML = null,
	            _this = this,
	            regexp = null;
	        for (var i = 0, ilen = arr.length; i < ilen; i++) {
	            one = arr[i];
	            if (one.type != 'all') {
	                r.push(one);
	                continue;
	            }
	            next = one.html;
	            if (type == 'audio') {
	                regexp = new RegExp('<div[^<>]*data-type=\\"' + type + '\\"[^<>]*>.*?保存<\/a><\/div>', 'g');
	            } else {
	                regexp = new RegExp('<div[^<>]*data-type=\\"' + type + '\\"[^<>]*>.*?<\/div>', 'g');
	            }
	            temp = one.html.match(regexp);
	            if (temp) {
	                $.each(temp, function (index, outerHTML) {
	                    if (!next) return;
	                    temp = next.indexOf(outerHTML);
	                    if (temp > 0) {
	                        r.push({ html: next.substring(0, temp), type: 'all' });
	                    }
	                    r.push({ html: outerHTML, type: type });
	                    next = next.substring(temp + outerHTML.length);
	                });
	            }
	            if (next) {
	                r.push({ html: next, type: 'all' });
	            }
	        }
	        return r;
	    }
	};

	function cloneObj(oldObj) {
	    //复制对象方法
	    if ((typeof oldObj === 'undefined' ? 'undefined' : (0, _typeof3.default)(oldObj)) != 'object') return oldObj;
	    if (oldObj == null) return oldObj;
	    var newObj = new Object();
	    for (var i in oldObj) {
	        newObj[i] = cloneObj(oldObj[i]);
	    }return newObj;
	}
	function extendObj() {
	    //扩展对象
	    var args = arguments;
	    if (args.length < 2) return;
	    var temp = cloneObj(args[0]); //调用复制对象方法
	    for (var n = 1; n < args.length; n++) {
	        for (var i in args[n]) {
	            temp[i] = args[n][i];
	        }
	    }
	    return temp;
	}
	;
	(function ($) {
	    $.htmlarea = {};
	    $.htmlarea.move = function (o, range, selection, remove) {
	        if (isIe11 && remove) {
	            range.collapse(false);
	            range.setEndBefore(o);
	            range.setStartBefore(o);
	            selection.removeAllRanges();
	            selection.addRange(range);
	        } else if (isMozilla && remove) {
	            range.collapse(true);
	            range.setEndBefore(o);
	            range.setStartBefore(o);
	            range.select(); // 火狐有报错，但是可以正常使用
	        } else if (isIe) {
	            range.moveToElementText(o);
	            range.select();
	        } else {
	            range.selectNode(o);
	            selection.removeAllRanges();
	            selection.addRange(range);
	        }
	    };
	    $.fn.htmlarea = function (opts) {
	        if (opts && typeof opts === "string") {
	            var args = [];
	            for (var i = 1; i < arguments.length; i++) {
	                args.push(arguments[i]);
	            }
	            var htmlarea = jHtmlArea(this[0]);
	            var f = htmlarea[opts];
	            if (f) {
	                return f.apply(htmlarea, args);
	            }
	        }
	        return this.each(function () {
	            jHtmlArea(this, opts);
	        });
	    };
	    var jHtmlArea = window.jHtmlArea = function (elem, options) {
	        if (!elem) {
	            return false;
	        }
	        if (elem.jquery) {
	            return jHtmlArea(elem[0]);
	        }
	        if (elem.jhtmlareaObject) {
	            return elem.jhtmlareaObject;
	        } else {
	            return new jHtmlArea.fn.init(elem, options);
	        }
	    };
	    jHtmlArea.fn = jHtmlArea.prototype = {

	        jhtmlarea: "0.7.5",

	        init: function init(elem, options) {
	            if (elem.nodeName.toLowerCase() === "textarea") {
	                var opts = this.opts = $.extend({}, jHtmlArea.defaultOptions, options);
	                elem.jhtmlareaObject = this;

	                var textarea = this.textarea = $(elem);
	                var container = this.container = $("<div/>").addClass("jHtmlArea").insertAfter(textarea);
	                this.callback = opts.loaded || function () {};
	                this.refresh = opts.refresh;
	                var style = '';
	                if (G.fontSize) {
	                    style = "style='font-size:" + G.fontSize + "px;'";
	                }

	                var id = this.textarea.attr('id');
	                var $wrap = this.wrap = $('<div class="wrap-edit" id="wrap_' + id + '"></div>');
	                var htmlarea = this.htmlarea = $("<div/>").append($wrap);
	                container.append(htmlarea).append(textarea.hide());
	            }
	        },
	        height: 0,
	        initEditor: function initEditor() {
	            priv.initEditor.call(this, this.opts);
	        },
	        initEvent: function initEvent() {
	            var _this = this;
	            priv.attachEditorEvents.call(this);
	            var textarea = this.textarea,
	                container = this.container;
	            this.addListener('keyup', function () {});

	            this.addListener('focus', function () {
	                console.log(2);
	                var focus = _this.opts.focus;
	                if (focus && $.isFunction(focus)) {
	                    focus.call(this);
	                }
	            });
	            this.addListener('blur', function () {
	                var blur = _this.opts.blur;
	                if (blur && $.isFunction(blur)) {
	                    blur.call(this);
	                }
	            });
	            this.addListener('paste', function (e) {
	                var clipboardData = null,
	                    oe = e.originalEvent,
	                    text = '',
	                    $div = $('<div>'),
	                    b = false;
	                clipboardData = window.clipboardData || oe.clipboardData;
	                if (!clipboardData) {
	                    alert('该浏览器暂时不支持该粘贴功能');
	                    return false;
	                }
	                text = clipboardData.getData('text');
	                text = util.encodeHtml(text);
	                text = $('<p>').html(text).text();
	                text = util.encodeHtml(text);

	                var tempText = '';
	                $('#innerDlgs textarea').each(function (index, e) {
	                    tempText += $(e).htmlarea('toString');
	                });
	                tempText += text;
	                var superWordsCallback = function superWordsCallback() {
	                    //传给dialog的回调函数，处理超过2万字的bug
	                    $('#innerDlgs .wrap-edit').attr('contenteditable', 'true');
	                };
	                if (tempText.length >= 20000) {
	                    nAlert('便签字数不能超过20000', '提示', superWordsCallback);
	                    $('#innerDlgs .wrap-edit').attr('contenteditable', 'false');
	                } else {
	                    textarea.htmlarea('pasteHTML', text, 0);
	                }
	                if (_this.refresh) _this.refresh();
	                return false;
	            });

	            this.addListener('mousedown', function (e) {
	                if (e.target.nodeName.toLowerCase() == 'img') {
	                    return false;
	                }
	            });
	            this.addListener('keydown', function (e) {
	                _this.o;
	                var range = textarea.htmlarea('getRange'),
	                    prev = null,
	                    pTextarea = null,
	                    len = 0,
	                    pHtml = null,
	                    html = null,
	                    pRange = null,
	                    body = null,
	                    pDoc = null,
	                    temp = null,
	                    next = null,
	                    nTextarea = null;
	                var _isList = function _isList($list) {
	                    return $list.find('input[type=checkbox]').length > 0;
	                };
	                var _isAudio = function _isAudio($audio) {
	                    return $audio.attr('data-type') == 'audio';
	                };
	                var _deleteList = function _deleteList($list) {
	                    $list.find('div').removeClass('mzchkbox');
	                    $list.find('.checkboxPic').remove();
	                    $list.find('input').remove();
	                    $(_this.getDoc()).focus(); //ie
	                };
	                var _deleteAudio = function _deleteAudio($audio) {
	                    $audio.addClass('audioSelected');
	                    $audio.focus();
	                };
	                var _move = $.htmlarea.move;
	                var _contact = function _contact(src, target, type) {
	                    var $tTextarea = target.find('textarea'),
	                        $sTextarea = src.find('textarea'),
	                        tHtml = $tTextarea.htmlarea('toHtmlString'),
	                        shtml = $sTextarea.htmlarea('toHtmlString'),
	                        body,
	                        $img,
	                        index,
	                        id = '_editor_id_temp_contact',
	                        sep = '<span id="_editor_id_temp_contact"></span>',
	                        range = null,
	                        selection = null,
	                        temp = null;
	                    if (_isList(target)) {
	                        // todo ie11删到一个编辑区域最前面的时候backspace时没反应的代码
	                        body = $sTextarea.htmlarea('getDoc');
	                        $img = $(body).find('img');
	                        if ($img.length > 0) {
	                            index = shtml.indexOf($img[0].outerHTML);
	                            $sTextarea.htmlarea('html', shtml.substring(index));
	                            shtml = shtml.substring(0, index);
	                        } else {
	                            src.remove();
	                        }
	                    } else {
	                        src.remove();
	                    }
	                    if (isIe || isIe11) {
	                        var $shtml = $(shtml);
	                        if (($shtml.text().trim() == '' || $shtml.text() == '&nbsp;') && !$shtml.find('img').length) {
	                            shtml = '';
	                        }
	                    }

	                    $tTextarea.htmlarea('html', tHtml + sep + shtml, false, type != 'd');
	                    temp = $('#_editor_id_temp_contact', $tTextarea.htmlarea('getDoc'));
	                    $($tTextarea.htmlarea('getDoc')).focus();
	                    range = $tTextarea.htmlarea('getRange');
	                    selection = $tTextarea.htmlarea('getSelection');
	                    _move(temp[0], range, selection, true);
	                    temp.remove();
	                };
	                switch (e.keyCode) {
	                    case 8:
	                        //backspace
	                        if (!isIe11) {
	                            var _id = _this.createId(),
	                                _temp = '<span id="' + _id + '"></span>',
	                                _html = null;
	                            if (isIe8) {
	                                _temp = '<span id=' + _id + '></span>';
	                            }
	                            _this.pasteHTML(_temp);
	                            _html = _this.toHtmlString();
	                            $('#' + _id, _this.getDoc()).remove();
	                            // todo 删除到一个编辑区域的最前面做的处理，存在优化点
	                        }

	                        var _checkStart = function _checkStart() {
	                            if (isIe11) {
	                                if (!range) {
	                                    return false;
	                                }
	                                return range.startOffset == 0;
	                            } else {
	                                var v = _html.replace(new RegExp('</p>|<p>|<br>', 'ig'), '');
	                                return v.toLowerCase().indexOf(_temp) == 0;
	                            }
	                        };
	                        if (!_checkStart()) {
	                            return true;
	                        }
	                        if (_isList(container)) {
	                            //清单
	                            _deleteList(container);
	                        } else {
	                            prev = container.prev();
	                            if (!prev.length) {
	                                // return false;//honggj ie11
	                                return true;
	                            }
	                            if (_isAudio(prev)) {
	                                //录音
	                                _deleteAudio(prev);
	                                return false;
	                            } else if (prev.find('.wrap-edit').length > 0) {
	                                //内容合并到上一个编辑区域上
	                                _contact(container, prev);
	                                return false;
	                            }
	                        }
	                        break;
	                    case 46:
	                        //delete
	                        if (!isIe11) {
	                            var _id = _this.createId(),
	                                _temp = '<span id="' + _id + '"></span>',
	                                _html = null;
	                            _this.pasteHTML(_temp);
	                            _html = _this.toHtmlString();
	                        }
	                        var _checkEnd = function _checkEnd() {
	                            if (isIe11) {
	                                _html = _this.toString();
	                                return range.startOffset == _html.length && range.endOffset == _html.length;
	                            } else {
	                                var v = _html.replace(new RegExp('</p>|<p>', 'g'), '');
	                                return v.toLowerCase().indexOf(_temp) + _temp.length == v.length || new RegExp(_temp + '<br/?>$').test(v);
	                            }
	                        };

	                        $('#' + _id, _this.getDoc()).remove();
	                        if (!_checkEnd()) {
	                            return;
	                        }

	                        next = container.next();
	                        if (_isList(next)) {
	                            //清单
	                            _deleteList(next);
	                            _contact(next, container);
	                            return false;
	                        } else if (_isAudio(next)) {
	                            //录音
	                            _deleteAudio(next);
	                        } else {
	                            if (next.find('.wrap-edit').length > 0) {
	                                //内容合并到上一个iframe
	                                nTextarea = next.find('textarea');
	                                html = nTextarea.htmlarea('toHtmlString');
	                                html = html.replace(new RegExp('^<img[^>]*>'), '');
	                                nTextarea.htmlarea('html', html);
	                                _contact(next, container, 'd');
	                                return false;
	                            }
	                        }
	                        break;
	                    case 13:
	                        if (_isList(container)) {
	                            //清单
	                            _this.addList();
	                            return false;
	                        }
	                        break;
	                    default:
	                }
	                _this.dealText();
	                if (_this.refresh) _this.refresh();
	                if (_this.toHtmlString() == '') {
	                    _this.html('<p><br /></p>');
	                }
	            });
	        },
	        dealText: function dealText() {
	            //字数统计
	            var _this = this;
	            var oldHtml = _this.toHtmlString();
	            return setTimeout(function () {
	                var text = '';
	                $('#innerDlgs textarea').each(function (index, e) {
	                    text += $(e).htmlarea('toString');
	                });
	                if (text.length >= 20000) {
	                    _this.html(oldHtml);
	                    nAlert('便签字数不能超过20000', '提示', function () {
	                        $('#innerDlgs .wrap-edit').attr('contenteditable', 'true');
	                    });
	                    $('#innerDlgs .wrap-edit').attr('contenteditable', 'false');
	                    return false;
	                }
	            }, 0);
	        },
	        changeHeight: function changeHeight(h) {
	            if (this.height != h) {
	                $(this.wrap).height(h);
	                this.height = h;
	            }
	        },
	        createId: function () {
	            var index = 0;
	            return function () {
	                console.log(index);
	                return '_editor_id_' + index++;
	            };
	        }(),
	        dealTag: function dealTag(html) {
	            //标签补全
	            var prefix = '',
	                suffix = '',
	                $all = $('<div id="_editor_temp_0">').html(html),
	                $sep = $all.find('#_editor_sep_0'),
	                $parent = $sep.parent(),
	                temp = null,
	                temp1 = null;
	            while ($parent.length && $parent.attr('id') != '_editor_temp_0') {
	                //标签补全
	                temp = $parent[0].outerHTML;
	                if (isIe8) {
	                    temp = temp.replace(/\r\n/, '');
	                }
	                temp1 = temp.match('</[^>]+>$');
	                if (temp1) {
	                    suffix += temp1;
	                    prefix = temp.match('^<[^>/]+>') + prefix;
	                }
	                $parent = $parent.parent();
	            }
	            return [prefix, suffix];
	        },
	        isEmpty: function isEmpty(str) {
	            var $str = $('<div>').html(str);
	            return ($str.text().trim() == '' || $str.text() == '&nbsp;') && !$str.find('img').length;
	        },
	        addImg: function addImg(url, sizeFlag, callback) {
	            var _this = this,
	                imgId = '_img_XXXX_' + this.createId(),
	                imgTk = isIe && !isIe8 || isIe11 ? 'style="display:inline-block"' : '',
	                img = '<img ' + imgTk + ' id="' + imgId + '"/>',
	                $img = null,
	                _move = $.htmlarea.move,
	                span = '<span id="_editor_id_temp_addImg"></span>',
	                ieDeal = function ieDeal() {
	                // if(isIe){
	                $(this.getDoc()).focus();
	                _move(document.getElementById('_editor_id_temp_addImg'), this.getRange(), this.getSelection());
	                $('#_editor_id_temp_addImg', this.getDoc()).remove();
	                // }
	            };

	            if (this.container.find('input[type=checkbox]').length > 0) {
	                //清单
	                var sep = '<span id="_editor_sep_0">&nbsp;</span>',
	                    html = '',
	                    temp = null,
	                    range = this.getRange(),
	                    container = this.container,
	                    prefix = '',
	                    suffix = '';
	                this.pasteHTML(sep);
	                html = this.toHtmlString();
	                temp = sep;
	                temp = this.dealTag(html, temp);
	                prefix = temp[0];
	                suffix = temp[1];
	                temp = html.toLowerCase().indexOf(sep);
	                if (temp == -1) {
	                    //ie兼容
	                    sep = '<span id=_editor_sep_0>&nbsp;</span>';
	                    temp = html.toLowerCase().indexOf(sep);
	                }
	                var tempHtml = html.substring(0, temp) + suffix;
	                if (_this.isEmpty(tempHtml)) {
	                    tempHtml = '<p></br></p>';
	                }
	                this.html(tempHtml, true);
	                var end = prefix + html.substring(temp + sep.length);
	                if (_this.isEmpty(end)) {
	                    end = '';
	                }
	                html = img + span + end;
	                editorObj.createEditor(function () {
	                    this.html(html, true);
	                    $img = $('#' + imgId);
	                    $img[0].onload = function () {};
	                    $img.attr('src', url);
	                    ieDeal.call(this);
	                }, function ($o) {
	                    $o.insertAfter(_this.container);
	                });
	                $('#_editor_sep_0').remove();
	                return false;
	            } else {
	                this.pasteHTML(img);
	                img = $('<div>').html(img).html(); //浏览器兼容
	                html = this.toHtmlString();
	                temp = this.dealTag(html, img);
	                prefix = temp[0];
	                suffix = temp[1];
	                if (prefix || isIe) {
	                    temp = html.indexOf(img);
	                    this.html(html.substring(0, temp) + suffix + img + span + prefix + html.substring(temp + img.length));
	                    ieDeal.call(this);
	                }
	                $img = $('#' + imgId);
	                $img[0].onload = function () {};
	                $img.attr('src', url).attr('sizeFlag', sizeFlag);
	            }
	        },
	        addList: function addList() {
	            //插入清单
	            if ($('#innerDlgs input[type=checkbox]').length >= 100) {
	                nAlert('清单不能超过100个', '提示');
	                return;
	            }
	            var sep = '<span id="_editor_sep_0">&nbsp;</span>',
	                html = '',
	                temp = null,
	                editor,
	                temp1 = null,
	                range = this.getRange(),
	                container = this.container,
	                prefix = '',
	                suffix = '',
	                $img;
	            //
	            this.pasteHTML(sep);
	            html = this.toHtmlString();
	            if (isIe8) {
	                sep = '<SPAN id=_editor_sep_0>&nbsp;</SPAN>'; //大写的SPAN为了兼容ie8
	            }
	            temp = sep;
	            temp = this.dealTag(html, temp);
	            prefix = temp[0];
	            suffix = temp[1];
	            temp = html.indexOf(sep);
	            temp1 = html.substring(0, temp) + suffix;
	            this.html(temp1, true);
	            html = prefix + html.substring(temp + sep.length);
	            temp = $('<div />').html(html);
	            $img = temp.find('img');
	            if ($img.length) {
	                html = temp.html(); //浏览器兼容
	                temp = html.indexOf($img[0].outerHTML);
	                editor = editorObj.createList({ text: html.substring(0, temp), state: 1 }, container);
	                editorObj.createEditor(function () {
	                    this.html(html.substring(temp));
	                }, function ($o) {
	                    $o.insertAfter(editor[0].jhtmlareaObject.container);
	                });
	            } else {
	                temp = { text: html, state: 1 };
	                editorObj.createList(temp, container);
	            }
	            if (temp1 == '' || temp1.toLowerCase() == '<p></p>' || temp1.toLowerCase() == '<p><br /></p>' || temp1.toLowerCase() == '<p><br></p>') {
	                this.container.remove();
	            }
	        },
	        dispose: function dispose() {
	            this.textarea.show().insertAfter(this.container);
	            this.container.remove();
	            this.textarea[0].jhtmlareaObject = null;
	        },
	        execCommand: function execCommand(a, b, c) {
	            this.wrap[0].focus();
	            document.execCommand(a, b || false, c || null);
	            this.updateTextArea();
	        },
	        ec: function ec(a, b, c) {
	            var _this = this;
	            this.execCommand(a, b, c);
	        },
	        queryCommandValue: function queryCommandValue(a) {
	            this.wrap[0].focus();
	            return this.editor.queryCommandValue(a);
	        },
	        qc: function qc(a) {
	            return this.queryCommandValue(a);
	        },
	        getSelectedHTML: function getSelectedHTML() {
	            if (isIe) {
	                return this.getRange().htmlText;
	            } else {
	                var elem = this.getRange().cloneContents();
	                return $("<p/>").append($(elem)).html();
	            }
	        },
	        getSelection: function getSelection() {
	            if (isIe) {
	                return document.selection;
	            } else {
	                return window.getSelection();
	            }
	        },
	        getRange: function getRange(b) {
	            var sel,
	                range,
	                doc = this.editor;
	            try {
	                if (!b) {
	                    sel = this.getSelection();
	                    range = sel.createRange ? sel.createRange() : sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
	                }
	                if (!range) {
	                    range = doc.createTextRange ? doc.createTextRange() : doc.createRange();
	                }
	            } catch (err) {}
	            return range;
	        },
	        html: function html(v, isBody) {
	            var _this = this;
	            if (v !== undefined) {
	                if (v == '') {
	                    v = '<p>' + (!isWebkit ? "<br />" : "") + '</p>';
	                }
	                if (v.toLowerCase().indexOf('<p>') != 0) {
	                    //保证内容都在p标签里面
	                    v = '<p>' + v + '</p>';
	                }

	                var $imgs = $('<div>' + v + '</div>').find('img');
	                var len = $imgs.length;
	                var oldH = 0;
	                var isFinishHeight = false; //是否初始化了高度，专门针对ie11做出的优化
	                if (len) {
	                    $imgs.each(function (index) {
	                        if (isIe11 && this.height) {
	                            len--;
	                            return;
	                        }
	                        this.onload = function () {
	                            len--;
	                            if (len === 0) {
	                                isFinishHeight = true;
	                                setTimeout(function () {//解决部分浏览器，包括某些版本的chrome，图片下面的文字不出来的bug
	                                }, 100);
	                            }
	                        };
	                    });
	                }
	                this.textarea.val(v);
	                this.updateHtmlArea();
	                if (!len) {
	                    setTimeout(function () {
	                        if (!isFinishHeight) {}
	                    }, 0);
	                } else {}
	            } else {
	                return this.toHtmlString();
	            }
	        },
	        pasteHTML: function pasteHTML(html, q, position) {
	            var html = html.replace(/\n/g, "<br />");
	            var doc = this.editor;
	            doc.focus();
	            var selection1 = this.getSelection(),
	                range = this.getRange();
	            if (!isIe) {}
	            if (q !== undefined) {
	                if (range.item) {
	                    var item = range.item(0);
	                    range = this.getRange(true);
	                    range.moveToElementText(item);
	                    range.select();
	                }
	                range.collapse(q);
	            }
	            if (!position) {
	                html += "<" + (isIe ? "img" : "span") + ' id="_xm_temp" width="0" height="0" ' + (isIe ? "/>" : "></span>");
	            } else {
	                html = "<" + (isIe ? "img" : "span") + ' id="_xm_temp" width="0" height="0" ' + (isIe ? "/>" : "></span>") + html;
	            }
	            if (range.insertNode) {
	                if ($(range.startContainer).closest("style,script").length > 0) {
	                    return false;
	                }
	                range.deleteContents();
	                range.insertNode(range.createContextualFragment(html));
	            } else {
	                if (selection1.type.toLowerCase() === "control") {
	                    selection1.clear();
	                    range = this.getRange();
	                }
	                range.pasteHTML(html);
	            }
	            var $g = $("#_xm_temp"),
	                o = $g[0];
	            if (isIe) {
	                range.moveToElementText(o);
	                range.select();
	            } else {
	                range.selectNode(o);
	                selection1.removeAllRanges();
	                selection1.addRange(range);
	            }
	            $g.remove();
	        },
	        cut: function cut() {
	            this.ec("cut");
	        },
	        copy: function copy() {
	            this.ec("copy");
	        },
	        paste: function paste() {
	            this.ec("paste");
	        },
	        bodyFontSize: function bodyFontSize(c) {},

	        addListener: function addListener(e, func) {
	            $(this.getDoc()).on(e, func);
	        },

	        getDoc: function getDoc() {
	            return this.wrap[0];
	        },

	        showHTMLView: function showHTMLView() {
	            this.updateTextArea();
	            this.textarea.show();
	            this.htmlarea.hide();
	        },
	        hideHTMLView: function hideHTMLView() {
	            this.updateHtmlArea();
	            this.textarea.hide();
	            this.htmlarea.show();
	        },
	        toggleHTMLView: function toggleHTMLView() {
	            this.textarea.is(":hidden") ? this.showHTMLView() : this.hideHTMLView();
	        },

	        toHtmlString: function toHtmlString() {
	            if (!this.editor) {
	                return '';
	            }
	            return this.editor.innerHTML;
	        },
	        toString: function toString() {
	            return $(this.editor).text();
	        },

	        updateTextArea: function updateTextArea() {
	            this.textarea.val(this.toHtmlString());
	        },
	        updateHtmlArea: function updateHtmlArea() {
	            this.editor.innerHTML = this.textarea.val();
	        }
	    };
	    jHtmlArea.fn.init.prototype = jHtmlArea.fn;

	    var priv = {
	        initEditor: function initEditor(options) {
	            var doc = this.editor = this.getDoc();
	            doc.spellcheck = false;
	            if (isIe) {
	                doc.disabled = true;
	                doc.contentEditable = true;
	                doc.disabled = false;
	            } else {
	                doc.contentEditable = true;
	            }
	            if (isMozilla && !isIe11) {
	                document.execCommand('enableObjectResizing', false, 'false'); // only firefox support
	            }
	        },
	        attachEditorEvents: function attachEditorEvents() {
	            var t = this;
	            var fnHA = function fnHA() {
	                t.updateHtmlArea();
	            };
	            this.textarea.click(fnHA).keyup(fnHA).keydown(fnHA).mousedown(fnHA).blur(fnHA);
	            var fnTA = function fnTA(e) {
	                t.updateTextArea();
	                if (e.type == "click") {
	                    return false;
	                }
	            };
	            $(this.editor).click(fnTA).keyup(fnTA).keydown(fnTA).mousedown(fnTA).blur(fnTA);
	            $('form').submit(function () {
	                t.toggleHTMLView();
	                t.toggleHTMLView();
	            });
	            if (window.__doPostBack) {
	                var old__doPostBack = __doPostBack;
	                window.__doPostBack = function () {
	                    if (t) {
	                        if (t.toggleHTMLView) {
	                            t.toggleHTMLView();
	                            t.toggleHTMLView();
	                        }
	                    }
	                    return old__doPostBack.apply(window, arguments);
	                };
	            }
	        },
	        isArray: function isArray(v) {
	            return v && (typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === 'object' && typeof v.length === 'number' && typeof v.splice === 'function' && !v.propertyIsEnumerable('length');
	        }
	    };
	})(Zepto);

	function Player(el) {
	    this.el = el;
	    this.isPlay = false;
	    this.playbtn = el.find('.audioShow');
	    this.pausebtn = el.find('.audioPause');
	    this.process = el.find('.audioPlayBar');
	    this.time = el.find('.audioTime');
	    this.countDown = null;
	    this.init();
	}
	Player.prototype = {
	    init: function init() {
	        var _this = this,
	            attr = { loop: false, preload: "auto", src: this.el.attr("data-audio") };
	        this._audio = new Audio();
	        for (var i in attr) {
	            attr.hasOwnProperty(i) && i in this._audio && (this._audio[i] = attr[i]);
	        }
	        this._audio.load();
	        this._audio.volume = 0.8;
	        this.playbtn.unbind('click').on('click', function () {
	            _this._playOn();
	            return false;
	        });
	        this.pausebtn.unbind('click').on('click', function () {
	            clearInterval(_this.countDown);
	            _this.countDown = null;
	            _this._playOff();
	            return false;
	        });
	        this._audio.addEventListener('ended', function () {
	            _this._reset();
	        }, false);

	        this.process.parent().unbind('click').on('click', function (e) {
	            _this._audioSeek(e);
	            return false;
	        });

	        this.time.html('00:00');
	        this._setCountDown();
	    },
	    _setTime: function _setTime() {
	        var time = this._audio.currentTime;
	        var minute = parseInt(time / 60);
	        if (minute < 10) {
	            minute = "0" + minute;
	        }
	        //秒
	        var second = parseInt(time % 60);
	        if (second < 10) {
	            second = "0" + second;
	        }
	        var allTime = minute + ":" + second;
	        return allTime;
	    },
	    _setCountDown: function _setCountDown() {
	        var _this = this;
	        this.countDown = setInterval(function () {
	            var allTime = _this._setTime();
	            _this.time.html(allTime);
	            _this._setProgress();
	        }, 1000);
	    },
	    _setProgress: function _setProgress() {
	        var percent = this._audio.currentTime / this._audio.duration;
	        this.process.width((percent * 100).toFixed(1) + "%");
	    },
	    _audioSeek: function _audioSeek(e) {
	        if (this._audio.paused || this._audio.ended) {
	            this._playOn();
	            this._enhanceAudioSeek(e);
	        } else {
	            this._enhanceAudioSeek(e);
	        }
	    },
	    _enhanceAudioSeek: function _enhanceAudioSeek(e) {
	        clearInterval(this.countDown);
	        this.countDown = null;
	        var length = e.pageX - this.process.offset().left;
	        var percent = length / this.process.parent().offset().width;
	        this.process.width((percent * 100).toFixed(1) + "%");
	        this._audio.currentTime = percent * this._audio.duration;
	        this.time.html(this._setTime());
	        this._setCountDown();
	    },

	    _reset: function _reset() {
	        this.time.html('00:00');
	        clearInterval(this.countDown);
	        this.countDown = null;
	        this._audio.currentTime = 0;
	        this.process.width('0px');
	        this._playOff();
	    },

	    _getState: function _getState() {
	        return this.isPlay;
	    },

	    _playOn: function _playOn() {
	        this._audio.play();
	        this.playbtn.hide();
	        this.pausebtn.css('display', 'inline-block');
	        this.isPlay = true;
	    },

	    _playOff: function _playOff() {
	        this._audio.pause();
	        this.playbtn.css('display', 'inline-block');
	        this.pausebtn.hide();
	        this.isPlay = false;
	    }
	};

	module.exports = Editor;

/***/ },
/* 412 */
185
]);