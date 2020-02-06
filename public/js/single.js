/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _clipboardAction = __webpack_require__(1);

      var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

      var _tinyEmitter = __webpack_require__(3);

      var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

      var _goodListener = __webpack_require__(4);

      var _goodListener2 = _interopRequireDefault(_goodListener);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (_typeof2(call) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + _typeof2(superClass));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      /**
       * Base class which takes one or more elements, adds event listeners to them,
       * and instantiates a new `ClipboardAction` on each click.
       */


      var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);
        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */


        function Clipboard(trigger, options) {
          _classCallCheck(this, Clipboard);

          var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

          _this.resolveOptions(options);

          _this.listenClick(trigger);

          return _this;
        }
        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
          key: 'resolveOptions',
          value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
          }
          /**
           * Adds a click event listener to the passed trigger.
           * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
           */

        }, {
          key: 'listenClick',
          value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2["default"])(trigger, 'click', function (e) {
              return _this2.onClick(e);
            });
          }
          /**
           * Defines a new `ClipboardAction` on each click event.
           * @param {Event} e
           */

        }, {
          key: 'onClick',
          value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
              this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2["default"]({
              action: this.action(trigger),
              target: this.target(trigger),
              text: this.text(trigger),
              container: this.container,
              trigger: trigger,
              emitter: this
            });
          }
          /**
           * Default `action` lookup function.
           * @param {Element} trigger
           */

        }, {
          key: 'defaultAction',
          value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
          }
          /**
           * Default `target` lookup function.
           * @param {Element} trigger
           */

        }, {
          key: 'defaultTarget',
          value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
              return document.querySelector(selector);
            }
          }
          /**
           * Returns the support of the given action, or all actions if no action is
           * given.
           * @param {String} [action]
           */

        }, {
          key: 'defaultText',

          /**
           * Default `text` lookup function.
           * @param {Element} trigger
           */
          value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
          }
          /**
           * Destroy lifecycle.
           */

        }, {
          key: 'destroy',
          value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
              this.clipboardAction.destroy();
              this.clipboardAction = null;
            }
          }
        }], [{
          key: 'isSupported',
          value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;
            actions.forEach(function (action) {
              support = support && !!document.queryCommandSupported(action);
            });
            return support;
          }
        }]);

        return Clipboard;
      }(_tinyEmitter2["default"]);
      /**
       * Helper function to retrieve attribute value.
       * @param {String} suffix
       * @param {Element} element
       */


      function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
          return;
        }

        return element.getAttribute(attribute);
      }

      module.exports = Clipboard;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _select = __webpack_require__(2);

      var _select2 = _interopRequireDefault(_select);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /**
       * Inner class which performs selection from either `text` or `target`
       * properties and then executes copy or cut operations.
       */


      var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
          _classCallCheck(this, ClipboardAction);

          this.resolveOptions(options);
          this.initSelection();
        }
        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
          key: 'resolveOptions',
          value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;
            this.selectedText = '';
          }
          /**
           * Decides which selection strategy is going to be applied based
           * on the existence of `text` and `target` properties.
           */

        }, {
          key: 'initSelection',
          value: function initSelection() {
            if (this.text) {
              this.selectFake();
            } else if (this.target) {
              this.selectTarget();
            }
          }
          /**
           * Creates a fake textarea element, sets its value from `text` property,
           * and makes a selection on it.
           */

        }, {
          key: 'selectFake',
          value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
            this.removeFake();

            this.fakeHandlerCallback = function () {
              return _this.removeFake();
            };

            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
            this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

            this.fakeElem.style.fontSize = '12pt'; // Reset box model

            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';
            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;
            this.container.appendChild(this.fakeElem);
            this.selectedText = (0, _select2["default"])(this.fakeElem);
            this.copyText();
          }
          /**
           * Only removes the fake element after another click event, that way
           * a user can hit `Ctrl+C` to copy because selection still exists.
           */

        }, {
          key: 'removeFake',
          value: function removeFake() {
            if (this.fakeHandler) {
              this.container.removeEventListener('click', this.fakeHandlerCallback);
              this.fakeHandler = null;
              this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
              this.container.removeChild(this.fakeElem);
              this.fakeElem = null;
            }
          }
          /**
           * Selects the content from element passed on `target` property.
           */

        }, {
          key: 'selectTarget',
          value: function selectTarget() {
            this.selectedText = (0, _select2["default"])(this.target);
            this.copyText();
          }
          /**
           * Executes the copy operation based on the current selection.
           */

        }, {
          key: 'copyText',
          value: function copyText() {
            var succeeded = void 0;

            try {
              succeeded = document.execCommand(this.action);
            } catch (err) {
              succeeded = false;
            }

            this.handleResult(succeeded);
          }
          /**
           * Fires an event based on the copy operation result.
           * @param {Boolean} succeeded
           */

        }, {
          key: 'handleResult',
          value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            });
          }
          /**
           * Moves focus away from `target` and back to the trigger, removes current selection.
           */

        }, {
          key: 'clearSelection',
          value: function clearSelection() {
            if (this.trigger) {
              this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
          }
          /**
           * Sets the `action` to be performed which can be either 'copy' or 'cut'.
           * @param {String} action
           */

        }, {
          key: 'destroy',

          /**
           * Destroy lifecycle.
           */
          value: function destroy() {
            this.removeFake();
          }
        }, {
          key: 'action',
          set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
              throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
          }
          /**
           * Gets the `action` property.
           * @return {String}
           */
          ,
          get: function get() {
            return this._action;
          }
          /**
           * Sets the `target` property using an element
           * that will be have its content copied.
           * @param {Element} target
           */

        }, {
          key: 'target',
          set: function set(target) {
            if (target !== undefined) {
              if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                if (this.action === 'copy' && target.hasAttribute('disabled')) {
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                }

                if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                  throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                }

                this._target = target;
              } else {
                throw new Error('Invalid "target" value, use a valid Element');
              }
            }
          }
          /**
           * Gets the `target` property.
           * @return {String|HTMLElement}
           */
          ,
          get: function get() {
            return this._target;
          }
        }]);

        return ClipboardAction;
      }();

      module.exports = ClipboardAction;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      function select(element) {
        var selectedText;

        if (element.nodeName === 'SELECT') {
          element.focus();
          selectedText = element.value;
        } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
          var isReadOnly = element.hasAttribute('readonly');

          if (!isReadOnly) {
            element.setAttribute('readonly', '');
          }

          element.select();
          element.setSelectionRange(0, element.value.length);

          if (!isReadOnly) {
            element.removeAttribute('readonly');
          }

          selectedText = element.value;
        } else {
          if (element.hasAttribute('contenteditable')) {
            element.focus();
          }

          var selection = window.getSelection();
          var range = document.createRange();
          range.selectNodeContents(element);
          selection.removeAllRanges();
          selection.addRange(range);
          selectedText = selection.toString();
        }

        return selectedText;
      }

      module.exports = select;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports) {
      function E() {// Keep this empty so it's easier to inherit from
        // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
      }

      E.prototype = {
        on: function on(name, callback, ctx) {
          var e = this.e || (this.e = {});
          (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
          });
          return this;
        },
        once: function once(name, callback, ctx) {
          var self = this;

          function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
          }

          ;
          listener._ = callback;
          return this.on(name, listener, ctx);
        },
        emit: function emit(name) {
          var data = [].slice.call(arguments, 1);
          var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
          var i = 0;
          var len = evtArr.length;

          for (i; i < len; i++) {
            evtArr[i].fn.apply(evtArr[i].ctx, data);
          }

          return this;
        },
        off: function off(name, callback) {
          var e = this.e || (this.e = {});
          var evts = e[name];
          var liveEvents = [];

          if (evts && callback) {
            for (var i = 0, len = evts.length; i < len; i++) {
              if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
            }
          } // Remove event from queue to prevent memory leak
          // Suggested by https://github.com/lazd
          // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


          liveEvents.length ? e[name] = liveEvents : delete e[name];
          return this;
        }
      };
      module.exports = E;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      var is = __webpack_require__(5);

      var delegate = __webpack_require__(6);
      /**
       * Validates all params and calls the right
       * listener function based on its target type.
       *
       * @param {String|HTMLElement|HTMLCollection|NodeList} target
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listen(target, type, callback) {
        if (!target && !type && !callback) {
          throw new Error('Missing required arguments');
        }

        if (!is.string(type)) {
          throw new TypeError('Second argument must be a String');
        }

        if (!is.fn(callback)) {
          throw new TypeError('Third argument must be a Function');
        }

        if (is.node(target)) {
          return listenNode(target, type, callback);
        } else if (is.nodeList(target)) {
          return listenNodeList(target, type, callback);
        } else if (is.string(target)) {
          return listenSelector(target, type, callback);
        } else {
          throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
        }
      }
      /**
       * Adds an event listener to a HTML element
       * and returns a remove listener function.
       *
       * @param {HTMLElement} node
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listenNode(node, type, callback) {
        node.addEventListener(type, callback);
        return {
          destroy: function destroy() {
            node.removeEventListener(type, callback);
          }
        };
      }
      /**
       * Add an event listener to a list of HTML elements
       * and returns a remove listener function.
       *
       * @param {NodeList|HTMLCollection} nodeList
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listenNodeList(nodeList, type, callback) {
        Array.prototype.forEach.call(nodeList, function (node) {
          node.addEventListener(type, callback);
        });
        return {
          destroy: function destroy() {
            Array.prototype.forEach.call(nodeList, function (node) {
              node.removeEventListener(type, callback);
            });
          }
        };
      }
      /**
       * Add an event listener to a selector
       * and returns a remove listener function.
       *
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listenSelector(selector, type, callback) {
        return delegate(document.body, selector, type, callback);
      }

      module.exports = listen;
      /***/
    },
    /* 5 */

    /***/
    function (module, exports) {
      /**
       * Check if argument is a HTML element.
       *
       * @param {Object} value
       * @return {Boolean}
       */
      exports.node = function (value) {
        return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
      };
      /**
       * Check if argument is a list of HTML elements.
       *
       * @param {Object} value
       * @return {Boolean}
       */


      exports.nodeList = function (value) {
        var type = Object.prototype.toString.call(value);
        return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
      };
      /**
       * Check if argument is a string.
       *
       * @param {Object} value
       * @return {Boolean}
       */


      exports.string = function (value) {
        return typeof value === 'string' || value instanceof String;
      };
      /**
       * Check if argument is a function.
       *
       * @param {Object} value
       * @return {Boolean}
       */


      exports.fn = function (value) {
        var type = Object.prototype.toString.call(value);
        return type === '[object Function]';
      };
      /***/

    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      var closest = __webpack_require__(7);
      /**
       * Delegates event to a selector.
       *
       * @param {Element} element
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @param {Boolean} useCapture
       * @return {Object}
       */


      function _delegate(element, selector, type, callback, useCapture) {
        var listenerFn = listener.apply(this, arguments);
        element.addEventListener(type, listenerFn, useCapture);
        return {
          destroy: function destroy() {
            element.removeEventListener(type, listenerFn, useCapture);
          }
        };
      }
      /**
       * Delegates event to a selector.
       *
       * @param {Element|String|Array} [elements]
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @param {Boolean} useCapture
       * @return {Object}
       */


      function delegate(elements, selector, type, callback, useCapture) {
        // Handle the regular Element usage
        if (typeof elements.addEventListener === 'function') {
          return _delegate.apply(null, arguments);
        } // Handle Element-less usage, it defaults to global delegation


        if (typeof type === 'function') {
          // Use `document` as the first parameter, then apply arguments
          // This is a short way to .unshift `arguments` without running into deoptimizations
          return _delegate.bind(null, document).apply(null, arguments);
        } // Handle Selector-based usage


        if (typeof elements === 'string') {
          elements = document.querySelectorAll(elements);
        } // Handle Array-like based usage


        return Array.prototype.map.call(elements, function (element) {
          return _delegate(element, selector, type, callback, useCapture);
        });
      }
      /**
       * Finds closest match and invokes callback.
       *
       * @param {Element} element
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @return {Function}
       */


      function listener(element, selector, type, callback) {
        return function (e) {
          e.delegateTarget = closest(e.target, selector);

          if (e.delegateTarget) {
            callback.call(element, e);
          }
        };
      }

      module.exports = delegate;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports) {
      var DOCUMENT_NODE_TYPE = 9;
      /**
       * A polyfill for Element.matches()
       */

      if (typeof Element !== 'undefined' && !Element.prototype.matches) {
        var proto = Element.prototype;
        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
      }
      /**
       * Finds the closest parent that matches a selector.
       *
       * @param {Element} element
       * @param {String} selector
       * @return {Function}
       */


      function closest(element, selector) {
        while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
          if (typeof element.matches === 'function' && element.matches(selector)) {
            return element;
          }

          element = element.parentNode;
        }
      }

      module.exports = closest;
      /***/
    }])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/siema/dist/siema.min.js":
/*!**********************************************!*\
  !*** ./node_modules/siema/dist/siema.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    function t(r) {
      if (i[r]) return i[r].exports;
      var n = i[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
    }

    var i = {};
    return t.m = e, t.c = i, t.d = function (e, i, r) {
      t.o(e, i) || Object.defineProperty(e, i, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, t.n = function (e) {
      var i = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return t.d(i, "a", i), i;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
  }([function (e, t, i) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        s = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      return function (t, i, r) {
        return i && e(t.prototype, i), r && e(t, r), t;
      };
    }(),
        l = function () {
      function e(t) {
        var i = this;
        if (r(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
        this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function (e) {
          i[e] = i[e].bind(i);
        }), this.init();
      }

      return s(e, [{
        key: "attachEvents",
        value: function value() {
          window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null,
            preventClick: !1
          }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler));
        }
      }, {
        key: "detachEvents",
        value: function value() {
          window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler);
        }
      }, {
        key: "init",
        value: function value() {
          this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this);
        }
      }, {
        key: "buildSliderFrame",
        value: function value() {
          var e = this.selectorWidth / this.perPage,
              t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
          this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
          var i = document.createDocumentFragment();
          if (this.config.loop) for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
            var n = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
            i.appendChild(n);
          }

          for (var s = 0; s < this.innerElements.length; s++) {
            var l = this.buildSliderFrameItem(this.innerElements[s]);
            i.appendChild(l);
          }

          if (this.config.loop) for (var o = 0; o < this.perPage; o++) {
            var a = this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));
            i.appendChild(a);
          }
          this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
        }
      }, {
        key: "buildSliderFrameItem",
        value: function value(e) {
          var t = document.createElement("div");
          return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style["float"] = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t;
        }
      }, {
        key: "resolveSlidesNumber",
        value: function value() {
          if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === n(this.config.perPage)) {
            this.perPage = 1;

            for (var e in this.config.perPage) {
              window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
            }
          }
        }
      }, {
        key: "prev",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];

          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;

            if (this.config.loop) {
              if (this.currentSlide - e < 0) {
                this.disableTransition();
                var r = this.currentSlide + this.innerElements.length,
                    n = this.perPage,
                    s = r + n,
                    l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                    o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r - e;
              } else this.currentSlide = this.currentSlide - e;
            } else this.currentSlide = Math.max(this.currentSlide - e, 0);

            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "next",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1];

          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;

            if (this.config.loop) {
              if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                this.disableTransition();
                var r = this.currentSlide - this.innerElements.length,
                    n = this.perPage,
                    s = r + n,
                    l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                    o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r + e;
              } else this.currentSlide = this.currentSlide + e;
            } else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);

            i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "disableTransition",
        value: function value() {
          this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
        }
      }, {
        key: "enableTransition",
        value: function value() {
          this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing;
        }
      }, {
        key: "goTo",
        value: function value(e, t) {
          if (!(this.innerElements.length <= this.perPage)) {
            var i = this.currentSlide;
            this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
          }
        }
      }, {
        key: "slideToCurrent",
        value: function value(e) {
          var t = this,
              i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
              r = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
          e ? requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)";
            });
          }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)";
        }
      }, {
        key: "updateAfterDrag",
        value: function value() {
          var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
              t = Math.abs(e),
              i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
              r = e > 0 && this.currentSlide - i < 0,
              n = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
          e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(r || n);
        }
      }, {
        key: "resizeHandler",
        value: function value() {
          this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame();
        }
      }, {
        key: "clearDrag",
        value: function value() {
          this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null,
            preventClick: this.drag.preventClick
          };
        }
      }, {
        key: "touchstartHandler",
        value: function value(e) {
          -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY);
        }
      }, {
        key: "touchendHandler",
        value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        }
      }, {
        key: "touchmoveHandler",
        value: function value(e) {
          if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
            e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
            var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                i = t * (this.selectorWidth / this.perPage),
                r = this.drag.endX - this.drag.startX,
                n = this.config.rtl ? i + r : i - r;
            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
          }
        }
      }, {
        key: "mousedownHandler",
        value: function value(e) {
          -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX);
        }
      }, {
        key: "mouseupHandler",
        value: function value(e) {
          e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
        }
      }, {
        key: "mousemoveHandler",
        value: function value(e) {
          if (e.preventDefault(), this.pointerDown) {
            "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
            var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                i = t * (this.selectorWidth / this.perPage),
                r = this.drag.endX - this.drag.startX,
                n = this.config.rtl ? i + r : i - r;
            this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
          }
        }
      }, {
        key: "mouseleaveHandler",
        value: function value(e) {
          this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag());
        }
      }, {
        key: "clickHandler",
        value: function value(e) {
          this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1;
        }
      }, {
        key: "remove",
        value: function value(e, t) {
          if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
          var i = e < this.currentSlide,
              r = this.currentSlide + this.perPage - 1 === e;
          (i || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this);
        }
      }, {
        key: "insert",
        value: function value(e, t, i) {
          if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
          if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
          var r = t <= this.currentSlide > 0 && this.innerElements.length;
          this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this);
        }
      }, {
        key: "prepend",
        value: function value(e, t) {
          this.insert(e, 0), t && t.call(this);
        }
      }, {
        key: "append",
        value: function value(e, t) {
          this.insert(e, this.innerElements.length + 1), t && t.call(this);
        }
      }, {
        key: "destroy",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments[1];

          if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
            for (var i = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++) {
              i.appendChild(this.innerElements[r]);
            }

            this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
          }

          t && t.call(this);
        }
      }], [{
        key: "mergeSettings",
        value: function value(e) {
          var t = {
            selector: ".siema",
            duration: 200,
            easing: "ease-out",
            perPage: 1,
            startIndex: 0,
            draggable: !0,
            multipleDrag: !0,
            threshold: 20,
            loop: !1,
            rtl: !1,
            onInit: function onInit() {},
            onChange: function onChange() {}
          },
              i = e;

          for (var r in i) {
            t[r] = i[r];
          }

          return t;
        }
      }, {
        key: "webkitOrNot",
        value: function value() {
          return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
        }
      }]), e;
    }();

    t["default"] = l, e.exports = t["default"];
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./resources/js/comps/comment.js":
/*!***************************************!*\
  !*** ./resources/js/comps/comment.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_str2dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/str2dom */ "./resources/js/utils/str2dom.js");
/* harmony import */ var _utils_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/find */ "./resources/js/utils/find.js");
/* harmony import */ var _utils_adds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/adds */ "./resources/js/utils/adds.js");
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}




/**
 * Comment template
 * @param  {Object} data Comment data
 * @return {String}      Interpolated template
 */

var commentTemplate = function commentTemplate(data) {
  return "\n        <div id=\"discuss-".concat(data.id, "\" class=\"group px-6 py-3 rounded-bl rounded-br cmt-").concat(data.id, "\">\n            <div class=\"flex\">\n                <img class=\"rounded-full w-10 h-10 flex-shrink-0\" src=\"").concat(data.avatar, "\">\n                <div class=\"ml-3 w-full\">\n                    <p class=\"mx-1 text-blue-500 text-xs font-semibold float-right cmt-time\">").concat(data.time, "</p>\n                    <h4 class=\"mb-1 font-bold text-sm\"><a class=\"text-indigo-600 cmt-name\" href=\"").concat(routes.base_url + '/' + data.username, "\">").concat(data.name, "</a> <span class=\"text-gray-600 font-normal\">(").concat(data.username, ")</span></h4>\n                    <div class=\"text-sm text-gray-700\">\n                        <div class=\"quoted-cmt-wrapper\"></div>\n                        <div class=\"cmt-content mb-2 text-base break-all\">").concat(data.content, "</div>\n                    </div>\n                    <div class=\"cmt-actions opacity-25 group-hover:opacity-100\"></div>\n                </div>\n            </div>\n        </div>\n    ");
};
/**
 * Comment action buttons
 * @type {Object}
 */


var commentActions = {
  /**
   * Delete button
   * @type {Object}
   */
  "delete": {
    markup: function markup() {
      return "\n                <a class=\"mt-5 text-red-600 cursor-pointer text-xs mr-3\">Delete</a>\n            ";
    },
    auth: true,
    listener: {
      on: 'click',
      handler: function handler(obj, event) {
        var c = confirm('are you sure?');
        if (c) commentRemove(obj.id, event);
      }
    }
  },

  /**
   * Permalink button
   * @return {[type]} [description]
   */
  permalink: function permalink() {
    return "\n            <a class=\"text-xs mr-3\" href=\"".concat(window.location.href, "#discuss-").concat(this.id, "\">Permalink</a>\n        ");
  },

  /**
   * Quote button
   * @type {Object}
   */
  quote: {
    markup: function markup() {
      return "\n                <a class=\"mt-5 hover:text-indigo-600 cursor-pointer text-xs mr-3\">Quote</a>\n            ";
    },
    auth: true,
    listener: {
      on: 'click',
      handler: function handler(obj, event) {
        quote(obj.id, event);
      }
    }
    /**
     * Quote comment template
     * @param  {Object} data Quote data
     * @return {Object}      Interpolated template
     */

  }
};

var quoteTemplate = function quoteTemplate(data) {
  return "\n        <div class=\"quoted-cmt cursor-pointer hover:bg-teal-200 bg-teal-100 border border-teal-200 mb-2 py-2 px-4 text-sm rounded\">\n            <div class=\"text-xs text-teal-600\">Original by <span class=\"font-bold\">".concat(data.name, "</span></div>\n            <div class=\"overflow-hidden h-22 break-all\" style=\"max-height: 40px;\">").concat(data.content, "</div>\n        </div>\n    ");
};
/**
 * Quote template action buttons
 * @type {Object}
 */


var quoteTemplateActions = {
  /**
   * Cancel button
   * @type {Object}
   */
  cancel: {
    markup: function markup() {
      return "\n                <a class=\"quote-remove cursor-pointer text-red-600 text-xs mt-2 inline-block\">Batalkan</a>\n            ";
    },
    listener: {
      on: 'click',
      handler: function handler(event) {
        quoteRemove(event);
      }
    }
    /**
     * Comment wrapper
     * @type {[type]}
     */

  }
};
var comments = $('#comments');
/**
 * Add a comment method
 * @param  {Object} obj     Comment data
 * @param  {String} classes Classes
 * @param  {String} method  Appending method
 * @param  {Node}   target  Temporary comment node
 * @return {Node}           Appended element
 */

function commentAdd(obj, classes, method, target) {
  if (!method) method = 'append';
  var item = commentTemplate(obj);
  item = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
  Object.keys(commentActions).forEach(function (action) {
    action = commentActions[action];

    if (('auth' in action && action.auth) == auth || !('auth' in action)) {
      var act = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_0__["default"])(_typeof(action) == 'object' ? action.markup.call(obj) : action.call(obj));
      if (action.listener) act.addEventListener(action.listener.on, action.listener.handler.bind(this, obj));
      Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(item, '.cmt-actions').prepend(act);
    }
  }); // if has reply

  if ("reply" in obj && obj.reply) {
    var quote_template = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_0__["default"])(quoteTemplate(_objectSpread({
      name: obj.reply.user.name
    }, obj.reply)));
    quote_template.addEventListener('click', function () {
      commentGo(obj.reply.id);
    });
    Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(item, '.quoted-cmt-wrapper').appendChild(quote_template); // item = findRemove(str2dom(item), '.quote-remove');
  } else {
    Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(item, '.quoted-cmt-wrapper').remove();
  }

  if (typeof classes == 'function') classes.call(this, item);

  if (typeof classes == 'string') {
    classes = classes.split(' ');
    classes.forEach(function (cl) {
      item.classList.add(cl);
    });
  }

  if ($('.no-comment')) $('.no-comment').remove();
  if (method == 'after') target.parentNode.insertBefore(item, target);else comments[method](item);
  return item;
}
/**
 * Quote comment method
 * @param  {Integer}    id  Comment ID
 * @param  {Object}     e   Event
 */


function quote(id, e) {
  var the_form = $('.comment-form'),
      quoted = $('#discuss-' + id);
  var form_pos = the_form.offsetTop - 150;
  window.scrollTo(0, form_pos);
  $('.reply-id').value = id;
  var data = {
    id: id,
    name: Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(quoted, '.cmt-name').innerText,
    content: Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(quoted, '.cmt-content').innerHTML
  };
  var the_template = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_0__["default"])(quoteTemplate(data));
  Object.keys(quoteTemplateActions).forEach(function (action) {
    action = quoteTemplateActions[action];
    var act = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_0__["default"])(_typeof(action) == 'object' ? action.markup.call(data) : action.call(data));
    if (action.listener) act.addEventListener(action.listener.on, action.listener.handler.bind(this, data));
    the_template.appendChild(act);
  });
  the_template.addEventListener('click', function (e) {
    if (e.target.className.indexOf('quote-remove') == -1) commentGo(id);
  }); // remove first

  if (Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(the_form, '.quoted-cmt')) Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(the_form, '.quoted-cmt').remove();
  Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(the_form, 'textarea').parentNode.prepend(the_template);
  Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(the_form, 'textarea').focus();
}
/**
 * Remove quote method
 * @param  {Object} e Event
 */


function quoteRemove(e) {
  $('.quoted-cmt').remove();
  $('.reply-id').value = '';
}
/**
 * Remove a comment method
 * @param  {Integer}    id    Comment ID
 * @param  {Object}     event Event
 */


function commentRemove(id, event) {
  var cmt = $('.cmt-' + id);
  Object(_utils_adds__WEBPACK_IMPORTED_MODULE_2__["default"])(cmt.classList, 'opacity-50 pointer-events-none');
  fetch(routes.comment_delete, {
    headers: {
      'X-CSRF-TOKEN': token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      id: id
    }),
    method: 'DELETE'
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    if (res.status) cmt.remove();else cmt.classList.removes('opacity-50 pointer-events-none');
  });
}
/**
 * Add a load more button
 */


function addLoadMore() {
  var tpl = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_0__["default"])('\
    <div class="comment-load px-6 py-2 text-sm text-center cursor-pointer bg-gray-200 hover:bg-gray-300">\
        Load More\
    </div>');
  tpl.addEventListener('click', function () {
    Object(_utils_adds__WEBPACK_IMPORTED_MODULE_2__["default"])($('.comment-load').classList, 'pointer-events-none opacity-50');
    commentLoad(function () {
      if ($('.comment-load')) $('.comment-load').classList.removes('pointer-events-none opacity-50');
    });
  });
  comments.append(tpl);
}
/**
 * Remove a load more button
 */


function removeLoadMore() {
  if ($('.comment-load')) $('.comment-load').remove();
}
/**
 * Generate random string
 * @return {String}         Generated random string
 */


var id = function id() {
  return Math.random().toString(36).substr(2, 9);
};
/**
 * Go to a comment method
 * @param  {Integer} id     Comment ID target
 */


function commentGo(id) {
  if (typeof id == 'number') id = '#discuss-' + id;

  function please_go() {
    var el = $(id);

    if (el) {
      window.scrollTo(0, el.offsetTop - 80);
      el.classList.add('bg-yellow-200');
      setTimeout(function () {
        el.classList.remove('bg-yellow-200');
      }, 2000);
    }
  }

  if (!$(id) && $('.comment-load')) {
    return commentLoad(function () {
      please_go();
    });
  }

  please_go();
}
/**
 * Post a new comment
 * @param  {String} content Comment message
 */


function comment(content) {
  if (content.trim().length < 1) return;
  var temp_id = id();
  var reply_id = $('.reply-id').value;
  var item = commentAdd({
    name: user.name,
    username: user.the_username,
    avatar: user.the_avatar_sm,
    id: temp_id,
    is_mine: false,
    content: '<i>Mengirim ...</i>',
    time: 'Baru Saja'
  }, 'opacity-50 pointer-events-none', 'prepend');
  fetch(routes.comment_store, {
    method: 'POST',
    headers: {
      'X-CSRF-TOKEN': token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      reply_id: reply_id,
      content: content,
      post_id: post_id
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    commentAdd({
      name: res.data.user.name,
      username: res.data.user.the_username,
      avatar: res.data.user.the_avatar_sm,
      id: res.data.id,
      is_mine: res.data.is_mine,
      time: res.data.time,
      content: res.data.markdown,
      reply: res.data.reply
    }, false, 'after', $('.cmt-' + temp_id));
    $('.cmt-' + temp_id).remove();
    quoteRemove();
  });
}
/**
 * Init pagination
 * @type {Number}
 */


var take = 10,
    offset = 0;
/**
 * Load a comment
 * @param  {Function} done Done callback
 */

function commentLoad(done) {
  fetch(routes.comment_ajax + post_id + '?take=' + take + '&offset=' + offset).then(function (res) {
    return res.json();
  }).then(function (res) {
    removeLoadMore();
    res.data.forEach(function (item) {
      commentAdd({
        id: item.id,
        name: item.user.name,
        username: item.user.the_username,
        avatar: item.user.the_avatar_sm,
        content: item.markdown,
        time: item.time,
        is_mine: item.is_mine,
        reply: item.reply
      }, false, 'append');
    });
    if (res.total > 10) addLoadMore();
    offset += res.count;
    if (res.count <= 10 && offset >= res.total) removeLoadMore();
    if (done) done.call(this, res);
  });
}

commentLoad(function (res) {
  if (res.count == 0) comments.innerHTML = '<div class="text-center p-2 text-sm no-comment"><i>Belum ada diskusi, jadilah yang pertama.</i></div>';
  var hash = window.location.hash;
  setTimeout(function () {
    if (hash) window.scrollTo(0, document.querySelector(hash).offsetTop - 80);
  }, 50);
});
var message = $('.comment-message');

if (message) {
  message.addEventListener('keydown', function (event) {
    if (event.keyCode == 13 && !event.shiftKey) {
      event.preventDefault();
      comment(this.value);
      this.value = '';
      return false;
    }
  });
  message.addEventListener('keyup', function (event) {
    if (event.shiftKey && event.keyCode == 13 || event.keyCode == 8) {
      this.style.height = '5px';
      this.style.height = this.scrollHeight + 'px';
    }
  });
}

/***/ }),

/***/ "./resources/js/comps/show-login-alert.js":
/*!************************************************!*\
  !*** ./resources/js/comps/show-login-alert.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/find */ "./resources/js/utils/find.js");

/**
 * Show login element
 */

function showLoginAlert() {
  var el = $('.login-alert');

  if (el) {
    el.classList.remove('hidden');
    Object(_utils_find__WEBPACK_IMPORTED_MODULE_0__["default"])(el, '.login-alert-close').addEventListener('click', function (e) {
      el.classList.add('hidden');
      e.preventDefault();
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (showLoginAlert);

/***/ }),

/***/ "./resources/js/libs/post.js":
/*!***********************************!*\
  !*** ./resources/js/libs/post.js ***!
  \***********************************/
/*! exports provided: post, types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_wrap_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wrap-node */ "./resources/js/utils/wrap-node.js");
/* harmony import */ var _utils_str2dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/str2dom */ "./resources/js/utils/str2dom.js");
/* harmony import */ var _utils_obj_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/obj-extend */ "./resources/js/utils/obj-extend.js");
/* harmony import */ var _utils_is_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-video */ "./resources/js/utils/is-video.js");
/* harmony import */ var _utils_adds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/adds */ "./resources/js/utils/adds.js");
/* harmony import */ var _utils_removes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/removes */ "./resources/js/utils/removes.js");
/* harmony import */ var _utils_full_url_with_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/full-url-with-query */ "./resources/js/utils/full-url-with-query.js");
/* harmony import */ var _utils_finds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/finds */ "./resources/js/utils/finds.js");
/* harmony import */ var _utils_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/find */ "./resources/js/utils/find.js");
/* harmony import */ var _utils_get_hostname__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/get-hostname */ "./resources/js/utils/get-hostname.js");
/* harmony import */ var _comps_show_login_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comps/show-login-alert */ "./resources/js/comps/show-login-alert.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_12__);
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }



function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}













/**
 * Post API with IIFE
 *
 * Flow: init -> run -> fetching -> templating (& attach event) -> append -> rendered
 */

/**
 * Post types constant
 * @type {Object}
 */

var types = {
  COMMUNITY: {
    template: 'community',
    shimmer: 'community'
  },
  POST: {
    template: 'post',
    shimmer: 'post'
  },
  DISCOVER: {
    template: 'post',
    shimmer: 'discover'
    /**
     * Private API
     * @type {Object}
     */

  }
};
var api = {
  vars: {
    /**
     * Share URIs
     * @type {Array}
     */
    uris: [{
      uri: 'https://www.facebook.com/sharer.php?u=',
      icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g></svg>',
      name: 'Facebook',
      "class": 'bg-facebook'
    }, {
      uri: 'https://twitter.com/share?url=',
      icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g></svg>',
      name: 'Twitter',
      "class": 'bg-twitter'
    }, {
      uri: 'https://telegram.me/share/url?url=',
      icon: '<svg class="w-4 fill-current mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>',
      name: 'Telegram',
      "class": 'bg-telegram'
    }, {
      uri: 'https://api.whatsapp.com/?text=',
      icon: '<svg class="w-4 fill-current mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg>',
      name: 'WhatsApp',
      "class": 'bg-whatsapp'
    }, {
      action: 'copy',
      icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g></svg>',
      name: 'Copy Link',
      "class": 'text-gray-600 border-2 border-gray-400 hover:bg-gray-200 cursor-pointer',
      rm_class: 'shadow-md mb-3'
    }]
  },

  /**
   * Element Interaction APIs
   * @type {Object}
   */
  interactions: {
    /**
     * Lazy-load Image Using Intersection Observer
     * @param  {Node} element Target element
     */
    lazyimage: function lazyimage(element) {
      var io = api.io;
      var the_image = Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.lazy-image');

      if (the_image) {
        var image = new Image();
        image.src = the_image.dataset.blurry;
        image.dataset.src = the_image.dataset.src;
        image.className = 'w-full';
        image.addEventListener('load', function (e) {
          the_image.parentNode.appendChild(image);
          the_image.remove();
          io.observe(image);
        });
        image.addEventListener('error', function (e) {});
      }
    },

    /**
     * Attach carousel (Siema) to the element
     * @param  {Node} element Target element
     */
    carousel: function carousel(element) {
      try {
        var cr = new window.Siema({
          selector: Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.carousel'),
          perPage: {
            0: 1
          }
        });
        Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.prev').addEventListener('click', function () {
          return cr.prev();
        });
        Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.next').addEventListener('click', function () {
          return cr.next();
        });
      } catch (e) {
        console.warn('Failed when attaching carousel: ', e);
      }
    },

    /**
     * Save buttons
     * @param  {Node} parent Target element
     */
    save: function save(parent, post_id) {
      var ic_save = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>',
          ic_unsave = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g></svg>',
          ic_spin = '<svg class="fill-current spin" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

      function toggle_icon_save(is_saved, item) {
        if (Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'svg')) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'svg').remove();
        if (is_saved) item.append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_unsave));else item.append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_save));
      }

      Object(_utils_finds__WEBPACK_IMPORTED_MODULE_8__["default"])(parent, '[data-save]').forEach(function (item) {
        var is_saved = typeof item.dataset.saved == 'string' ? true : false;
        toggle_icon_save(is_saved, item);
        item.addEventListener('click', function (e) {
          toggle_icon_save(is_saved, item);
          item.classList.add('pointer-events-none');
          if (Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'svg')) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'svg').remove();
          item.append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_spin));

          var saving = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var res, json;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(routes.save, {
                      method: 'POST',
                      headers: {
                        'X-CSRF-TOKEN': token,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify({
                        row_id: post_id,
                        method: 'save',
                        model: 'Post'
                      })
                    });

                  case 2:
                    res = _context.sent;

                    if (res.ok) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return", Promise.reject(res));

                  case 5:
                    _context.next = 7;
                    return res.json();

                  case 7:
                    json = _context.sent;
                    return _context.abrupt("return", Promise.resolve(json));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))()["finally"](function () {
            Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'svg').remove();
            item.classList.remove('pointer-events-none');
          }).then(function (res) {
            is_saved = res.saved;
            item.dataset.saved = res.saved;
            toggle_icon_save(is_saved, item);
          })["catch"](function (error) {
            toggle_icon_save(false, item);
            if (error.status == 401) Object(_comps_show_login_alert__WEBPACK_IMPORTED_MODULE_11__["default"])();
          });

          e.preventDefault();
        });
      });
    },

    /**
     * Love buttons
     * @param  {Node} parent Target element
     */
    love: function love(parent, post_id) {
      var ic_love = '<svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
          ic_unlove = '<svg class="fill-current text-red-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
          ic_spin = '<svg class="w-6 stroke-current spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

      function toggle_icon_love(is_loved, item) {
        if (is_loved) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_unlove));else Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_love));
      }

      Object(_utils_finds__WEBPACK_IMPORTED_MODULE_8__["default"])(parent, '[data-love]').forEach(function (item) {
        var is_loved = typeof item.dataset.loved == 'string' ? true : false;
        toggle_icon_love(is_loved, item);
        item.addEventListener('click', function (e) {
          item.classList.add('pointer-events-none');
          if (Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span svg')) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span svg').remove();
          Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_spin));

          var saving = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            var res, json;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return fetch(routes.save, {
                      method: 'POST',
                      headers: {
                        'X-CSRF-TOKEN': token,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify({
                        row_id: post_id,
                        method: 'love',
                        model: 'Post'
                      })
                    });

                  case 2:
                    res = _context2.sent;

                    if (res.ok) {
                      _context2.next = 5;
                      break;
                    }

                    return _context2.abrupt("return", Promise.reject(res));

                  case 5:
                    _context2.next = 7;
                    return res.json();

                  case 7:
                    json = _context2.sent;
                    return _context2.abrupt("return", Promise.resolve(json));

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }))()["finally"](function () {
            Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span svg').remove();
            item.classList.remove('pointer-events-none');
          }).then(function (res) {
            is_loved = res.saved;
            item.dataset.loved = res.saved;
            toggle_icon_love(is_loved, item);
          })["catch"](function (error) {
            toggle_icon_love(false, item);
            if (error.status == 401) Object(_comps_show_login_alert__WEBPACK_IMPORTED_MODULE_11__["default"])();
          });

          e.preventDefault();
        });
      });
    },

    /**
     * Share button
     * @param  {Node} parent Target element
     */
    share: function share(parent) {
      var uris = api.vars.uris;
      var cjs; // if modal not initialized yet
      // then append all buttons to the modal element

      if ($$('.share-buttons a').length < 1) {
        // this is share button template
        var share_btn = '<a href="" class="text-white shadow-md mb-3 py-3 px-4 flex justify-center items-center rounded text-sm"></a>'; // show all the buttons from the `uris` key (see the uris var form destructuring object above)

        for (var i = 0; i < uris.length; i++) {
          var key = uris[i],
              // the "button"
          btn = ''; // button wrapper
          // convert share_btn template to DOM

          btn = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(share_btn);
          if (key["class"].split(' ').length > 1) Object(_utils_adds__WEBPACK_IMPORTED_MODULE_5__["default"])(btn.classList, key["class"]);else btn.classList.add(key["class"]);
          if (key.rm_class) Object(_utils_removes__WEBPACK_IMPORTED_MODULE_6__["default"])(btn.classList, key.rm_class); // adding the button icon

          btn.appendChild(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(key.icon)); // adding the button text

          btn.appendChild(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])('<span>' + key.name + '</span>')); // let's append the button to the list

          $('.share-buttons').appendChild(btn);
        } // adding click event to the close button element


        $('.share-modal .share-modal-close').addEventListener('click', function () {
          // yes, destroy the cjs instance
          cjs.destroy(); // let share-modal-dialog sleep

          $('.share-modal').classList.add('hidden'); // bring back the overflow behavior to the body element

          $("body").classList.remove('overflow-hidden');
        });
      } // find element with `share-button` class inside parent element


      Object(_utils_finds__WEBPACK_IMPORTED_MODULE_8__["default"])(parent, '.share-button').forEach(function (item) {
        item.addEventListener('click', function (e) {
          var url = item.dataset.url; // retrieve the url
          // show the modal by removing the `hidden` class

          $('.share-modal').classList.remove('hidden');

          var _loop = function _loop(_i) {
            // when the button has uri value
            if (uris[_i].uri) // set the href attribute to the value of the uri property 
              $$('.share-buttons a')[_i].setAttribute('href', uris[_i].uri + url); // when the button is has copy action

            if (uris[_i].action == 'copy') {
              // select the button
              the_btn = $$('.share-buttons a')[_i]; // set data-clipboard-text to the url variable

              the_btn.dataset.clipboardText = url; // remove the href attribute

              the_btn.removeAttribute('href'); // adding `copy-btn` class

              the_btn.classList.add('copy-btn'); // cjs means clipboard js (clipboard instance)

              cjs = new clipboard__WEBPACK_IMPORTED_MODULE_12___default.a('.copy-btn'); // when cjs success copying text to a clipboard

              cjs.on('success', function () {
                // change the text
                Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(the_btn, 'span').innerHTML = 'Copied'; // disable button

                the_btn.classList.add('pointer-events-none'); // revert text to the original one after 1500ms

                setTimeout(function () {
                  Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(the_btn, 'span').innerHTML = uris[_i].name;
                  the_btn.classList.remove('pointer-events-none');
                }, 1500);
              });
            }
          };

          for (var _i = 0; _i < uris.length; _i++) {
            var the_btn;

            _loop(_i);
          } // hide overflow behavior in the body element


          $("body").classList.add('overflow-hidden'); // ok, i think you already knew this one

          e.preventDefault();
        });
      });
    }
  },

  /**
   * API Lifecycle
   * @type {Object}
   */
  lifecycle: {
    onStartImplementing: function onStartImplementing(_ref3) {
      var io = _ref3.io; // init observer

      io.init();
    },
    onContentCollected: function onContentCollected(_ref4) {
      // do stuff here
      var dom = _ref4.dom,
          interactions = _ref4.interactions;
    },
    onContentLoaded: function onContentLoaded() {// do stuff here
    },
    firstContentLoaded: function firstContentLoaded() {
      var loadMore = api.loadMore,
          options = api.options;

      if (!options.first) {
        var scrollReachBottom = function scrollReachBottom(reach) {
          window.addEventListener('scroll', function (e) {
            if (window.innerHeight + window.scrollY >= $('#app').offsetHeight) {
              reach.call(this);
            }
          });
        };

        scrollReachBottom(function () {
          loadMore.call(this, api);
        });
      }
    }
  },

  /**
   * Template collection
   * @type {Object}
   */
  templates: {
    /**
     * Empty state template
     * @return {String}				Interpolated template string
     */
    empty: function empty() {
      var tpl = "\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<svg width=\"300\" class=\"inline-block\" id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\"><defs><style>.cls-1{fill:#e2e2e2;}.cls-2{fill:#f3f3f3;}.cls-3{fill:#d37c59;}.cls-4{fill:#de8e68;}.cls-5{fill:#56cad8;}.cls-6{fill:#74d5de;}.cls-7{fill:#fed385;}.cls-8{fill:#dc8e6c;}.cls-9{fill:#fb836d;}.cls-10{fill:#d3d3d3;}.cls-11,.cls-13,.cls-14,.cls-15,.cls-16{fill:none;}.cls-11{stroke:#d3d3d3;stroke-miterlimit:10;}.cls-11,.cls-14,.cls-15{stroke-width:3.69px;}.cls-12{fill:#fed892;}.cls-13,.cls-14,.cls-16{stroke:#fed385;}.cls-13,.cls-14,.cls-15,.cls-16{stroke-linecap:round;stroke-linejoin:round;}.cls-13{stroke-width:3.84px;}.cls-15{stroke:#74d5de;}.cls-16{stroke-width:2.39px;}</style></defs><title>Artboard 1</title><path class=\"cls-1\" d=\"M711.1,528.1c0-21.86-47-74.85-84.67-74.85-28.93,0-29.4,15.3-57.59,15.3-43.46,0-75.71-72.66-159.29-72.66-89.05,0-205.41,83.58-205.41,149.14C204.14,638.91,711.1,661.41,711.1,528.1Z\"/><path class=\"cls-2\" d=\"M935.51,849.68c1-102,2.6-265.85,2.6-290.1,0-35.58-52.84-142.15-145.27-142.15-101.26,0-151.3,116.21-217.58,116.21-60.75,0-65.54-30.76-140.74-30.76-49,0-149.82,62.8-149.82,127l67.11,219.75Z\"/><ellipse class=\"cls-3\" cx=\"602.59\" cy=\"679.96\" rx=\"11.73\" ry=\"5.25\" transform=\"translate(-105.6 1249.11) rotate(-87.24)\"/><path class=\"cls-3\" d=\"M590.19,739.68c-.2-1.94,4.32-42.23,7.92-55a16,16,0,0,1,6.71-.94l-.34,39.7-5,18.67Z\"/><polygon points=\"620.7 683.58 589.26 686.18 588.26 679.96 618.52 670.39 620.7 683.58\"/><rect class=\"cls-4\" x=\"544.3\" y=\"999.24\" width=\"13.77\" height=\"11.65\"/><rect class=\"cls-4\" x=\"586.9\" y=\"1001.06\" width=\"13.77\" height=\"11.65\"/><path class=\"cls-5\" d=\"M542.87,805V999.88H559l18.54-104.26S580.09,839.22,542.87,805Z\"/><path class=\"cls-6\" d=\"M596,801.16c.45,5.62,6.06,107.88,6.06,107.88v93.11l-16.55,1.77-10.64-99-32-99.92C547.71,802.34,583.16,797.33,596,801.16Z\"/><path class=\"cls-7\" d=\"M566.51,715.47c31.79,0,33.3,80.83,29.52,85.69s-49,8.17-53.16,3.83S526.9,715.47,566.51,715.47Z\"/><ellipse class=\"cls-4\" cx=\"607.86\" cy=\"679.96\" rx=\"11.73\" ry=\"5.25\" transform=\"translate(-100.59 1254.37) rotate(-87.24)\"/><polygon points=\"585.61 1010.89 585.61 1022.54 618.35 1022.54 618.35 1018.3 601.32 1010.89 585.61 1010.89\"/><polygon points=\"543.87 1009.05 543.87 1020.7 576.61 1020.7 576.61 1016.46 559.58 1009.05 543.87 1009.05\"/><rect x=\"585.55\" y=\"681.34\" width=\"3.86\" height=\"3.86\" transform=\"translate(-98.87 99.39) rotate(-8.92)\"/><path class=\"cls-3\" d=\"M568.84,722.5c0,2.67-12.41,3-12.41,0V696h12.41Z\"/><ellipse class=\"cls-8\" cx=\"568.46\" cy=\"688.32\" rx=\"13.03\" ry=\"19.89\"/><path class=\"cls-9\" d=\"M545.77,680.12c0-6.13,2.67-10,4.84-11.23,4.19-2.4,5.94-1.33,10.16-3.2,4.57-2,8.49-7.84,13.84-7.84,5,0,4.55,2.84,7.94,3.68,2,.49,13.36-2.12,13.36,5.23,0,11.32-12.57,12.24-15.48,13.69a37.43,37.43,0,0,0-1.52-3.83c-2.29,2.36-10.58,4-11.92,4.53-3.1,1.28-4.58,6.13-4.58,9.3s-2.87,3.18-3.59,3.18C552.19,693.63,545.77,689.38,545.77,680.12Z\"/><circle class=\"cls-8\" cx=\"556.67\" cy=\"691.67\" r=\"4.33\"/><rect class=\"cls-10\" x=\"512.81\" y=\"718.34\" width=\"25.14\" height=\"84.61\" rx=\"12.57\" ry=\"12.57\"/><ellipse class=\"cls-11\" cx=\"544.89\" cy=\"751.24\" rx=\"30.38\" ry=\"32.89\"/><path class=\"cls-4\" d=\"M576.84,736.83c2.53,0,15.29.53,20.48,2.4.4-2.53,2.66-38.77,6.51-50.91,1.47-1.62,7.45-1.43,7.45,0s8.51,60.88,0,67.93-37.37-2.4-38.56-3.33S576.84,736.83,576.84,736.83Z\"/><path class=\"cls-12\" d=\"M549.66,734.69c2.82-11.48,28.36-1.93,30.67.69,2.77,3.14-2.18,20.84-6,21.66C568.1,758.39,546,749.58,549.66,734.69Z\"/><polygon class=\"cls-12\" points=\"266.38 341.65 142.64 849.68 390.13 849.68 266.38 341.65\"/><polygon class=\"cls-5\" points=\"169.62 341.65 45.87 893.9 293.36 893.9 169.62 341.65\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"891.44\" x2=\"170.29\" y2=\"395.36\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"558.95\" x2=\"197.18\" y2=\"529.72\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"698.94\" x2=\"210.7\" y2=\"655.02\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"844.98\" x2=\"233.14\" y2=\"776.66\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"558.95\" x2=\"143.4\" y2=\"529.72\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"698.94\" x2=\"129.89\" y2=\"655.02\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"844.98\" x2=\"107.44\" y2=\"776.66\"/><rect class=\"cls-6\" x=\"190.5\" y=\"734.34\" width=\"135.39\" height=\"197.16\" rx=\"67.69\" ry=\"67.69\"/><line class=\"cls-14\" x1=\"258.19\" y1=\"982.94\" x2=\"258.19\" y2=\"795.85\"/><path class=\"cls-14\" d=\"M258.19,875.41c37,0,37-22.28,37-56\"/><path class=\"cls-14\" d=\"M258.19,841.33c-25.65,0-25.65-15.47-25.65-38.84\"/><path class=\"cls-7\" d=\"M1152.37,849.68V667.57a81.52,81.52,0,0,0-81.28-81.28h0a81.65,81.65,0,0,0-13.07,1.06V377.78a55.64,55.64,0,0,0-55.63-55.64h0a55.64,55.64,0,0,0-55.64,55.64v44.86a80.64,80.64,0,0,0-26-4.31h0a81.52,81.52,0,0,0-81.28,81.29V649H804.08a55.7,55.7,0,0,0-55.53,55.53V833.86a55.18,55.18,0,0,0,2.32,15.82Z\"/><path class=\"cls-15\" d=\"M1000.16,740.85c91.61,0,91.61-41,91.61-103\"/><path class=\"cls-15\" d=\"M1000.25,795.48c-50.4,0-50.4-22.56-50.4-56.67\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"849.68\" x2=\"1000.16\" y2=\"364.17\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"637.85\" x2=\"949.94\" y2=\"587.62\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"534.21\" x2=\"1030.55\" y2=\"503.83\"/><path class=\"cls-2\" d=\"M750.49,341.65a47.18,47.18,0,0,0-86.25-35.55,37.43,37.43,0,0,0-52.84,34.1c0,.49,0,1,0,1.45Z\"/><path class=\"cls-2\" d=\"M291.91,268.28a47.18,47.18,0,0,1,86.25-35.55A37.4,37.4,0,0,1,431,266.83c0,.48,0,1,0,1.45Z\"/><path class=\"cls-6\" d=\"M924.33,936.06c-50.28,0-91,21.47-91,48h182.05C1015.35,957.53,974.6,936.06,924.33,936.06Z\"/><path class=\"cls-9\" d=\"M502.76,1006.93c-12.55,0-22.73,8.76-22.73,19.57H525.5C525.5,1015.69,515.32,1006.93,502.76,1006.93Z\"/><path class=\"cls-9\" d=\"M833.3,902.44c-12.56,0-22.73,13-22.73,29.06H856C856,915.45,845.85,902.44,833.3,902.44Z\"/><path class=\"cls-9\" d=\"M120.87,974.57c-20,0-36.16,6.51-36.16,14.53H157C157,981.08,140.84,974.57,120.87,974.57Z\"/><path class=\"cls-9\" d=\"M1030.55,974.57c-20,0-36.16,6.51-36.16,14.53h72.31C1066.7,981.08,1050.52,974.57,1030.55,974.57Z\"/><rect class=\"cls-6\" x=\"838.22\" y=\"746.55\" width=\"87.67\" height=\"127.66\" rx=\"43.83\" ry=\"43.83\"/><line class=\"cls-16\" x1=\"882.06\" y1=\"907.53\" x2=\"882.06\" y2=\"786.38\"/><path class=\"cls-16\" d=\"M882.06,837.9C906,837.9,906,823.47,906,801.64\"/><path class=\"cls-16\" d=\"M882.06,815.83c-16.61,0-16.61-10-16.61-25.16\"/><line class=\"cls-14\" x1=\"331.71\" y1=\"947.65\" x2=\"412.75\" y2=\"947.65\"/><line class=\"cls-14\" x1=\"668.4\" y1=\"893.9\" x2=\"722.14\" y2=\"893.9\"/><line class=\"cls-14\" x1=\"627.87\" y1=\"907.53\" x2=\"681.62\" y2=\"907.53\"/><line class=\"cls-14\" x1=\"116.88\" y1=\"918.64\" x2=\"170.63\" y2=\"918.64\"/><line class=\"cls-14\" x1=\"748.55\" y1=\"999.24\" x2=\"824.1\" y2=\"999.24\"/></svg>\n\t\t\t\t\t<h2 class=\"text-xl font-semibold\">Ya ampun! Data tidak ditemukan</h2>\n\t\t\t\t\t<p class=\"mt-2 leading-loose text-gray-600 text-sm\">Apa yang kamu cari sehingga data tidak ditemukan? Tapi, sepertinya ini salah kami memiliki konten yang terlalu sedikit \uD83D\uDE3F.</p>\n\t\t\t\t</div>\n\t\t\t";
      return tpl;
    },

    /**
     * Community template
     * @param  {Object} options.post:   community     Post data
     * @param  {Object} options.options Instance options
     * @return {String}                 Interpolated template string
     */
    community: function community(_ref5) {
      var _community = _ref5.post,
          options = _ref5.options;
      var tpl = "\n\t    \t\t<div class=\"bg-white rounded border-2 border-gray-200 w-full\">\n\t    \t\t\t<div class=\"pb-8 pt-6 px-6\">\n\t    \t\t\t\t<div class=\"float-right\">\n\t    \t\t\t\t\t<a target=\"_blank\" ".concat(_community.website ? "href=\"".concat(_community.website, "\" ") : '', "class=\"").concat(!_community.website ? 'pointer-events-none opacity-50 ' : '', "flex leading-relaxed items-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 border-2 border-gray-200 uppercase text-xs font-semibold tracking-wider py-1 px-3 rounded-full\">\n\t    \t\t\t\t\t\tView\n\t    \t\t\t\t\t\t<svg class=\"ml-1 w-3 fill-current\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"arrow-forward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z\"/></g></g></svg>\n\t    \t\t\t\t\t</a>\n\t    \t\t\t\t</div>\n\t    \t\t\t\t<div class=\"rounded p-2 w-16 h-16 flex-shrink-0 flex items-center justify-center border\" ").concat(_community.logo_bg ? 'style="background-color: ' + _community.logo_bg + ';"' : '', ">\n\t    \t\t\t\t\t<img src=\"").concat(_community.logo, "\" alt=\"").concat(_community.name, "\" class=\"w-full\">\n\t    \t\t\t\t</div>\n\t        \t\t\t<h2 class=\"font-bold text-lg mt-4 truncate\">").concat(_community.name, "</h2>\n\t        \t\t\t<p class=\"mt-1 text-sm text-gray-600 font-light leading-relaxed h-12\">").concat(_community.short_description, "</p>\n\t    \t\t\t</div>\n\t    \t\t\t<div class=\"flex px-6 pb-6\">\n\t    \t\t\t\t<div class=\"flex text-sm items-center\">\n\t    \t\t\t\t\t<svg class=\"w-5 mr-1 fill-current text-gray-600\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"person\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z\"/></g></g></svg>\n\t    \t\t\t\t\t").concat(_community.formatted_member, "+\n\t    \t\t\t\t</div>\n\t        \t\t\t<div class=\"inline-flex ml-auto\">\n\t        \t\t\t\t").concat(_community.facebook ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.facebook, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"facebook\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z\"/></g></g></svg>\n\t        \t\t\t\t</a>") : '', "\n\n\t        \t\t\t\t").concat(_community.twitter ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.twitter, "\">\n\t\t\t\t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"twitter\"><polyline points=\"0 0 24 0 24 24 0 24\" opacity=\"0\"/><path d=\"M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20\"/></g></g></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\n\t\t\t\t\t\t\t").concat(_community.github ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.github, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1\" data-name=\"github\"/></g></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\n\t\t\t\t\t\t\t").concat(_community.telegram ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.telegram, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>Telegram icon</title><path d=\"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z\"/></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\t        \t\t\t</div>\n\t        \t\t</div>\n\t    \t\t</div>\n\t    \t");
      return tpl;
    },

    /**
     * Community shimmer template
     * @return {String}           Interpolated template string
     */
    communityShimmer: function communityShimmer() {
      var tpl = "\n\t\t    \t<div class=\"w-full\">\n\t\t    \t\t<div class=\"bg-white rounded border-2 border-gray-200\">\n\t\t    \t\t\t<div class=\"pb-8 pt-6 px-6\">\n\t\t    \t\t\t\t<div class=\"float-right\">\n\t\t    \t\t\t\t\t<div class=\"flex py-1 px-3 rounded-full bg-gray-200 w-16 h-6\">\n\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<div class=\"rounded p-2 w-16 h-16 flex-shrink-0 bg-gray-100\"></div>\n\t\t        \t\t\t<h2 class=\"mt-4 w-32 h-6 bg-gray-200 rounded\"></h2>\n\t\t        \t\t\t<div class=\"mt-3 bg-gray-100 h-3 rounded w-full\"></div>\n\t\t        \t\t\t<div class=\"mt-2 bg-gray-100 h-3 rounded w-20\"></div>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div class=\"flex px-6 pb-6\">\n\t\t    \t\t\t\t<div class=\"flex text-sm items-center\">\n\t\t\t    \t\t\t\t<div class=\"rounded w-16 h-4 bg-gray-200\"></div>\n\t\t    \t\t\t\t</div>\n\t\t        \t\t\t<div class=\"inline-flex ml-auto\">\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100\"></div>\n\t\t        \t\t\t</div>\n\t\t        \t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t";
      return tpl;
    },

    /**
     * Post template
     * @param  {Object} options.post    Post data
     * @param  {Object} options.options Instance options
     * @return {String}                 Interpolated template string
     */
    post: function post(_ref6) {
      var _post = _ref6.post,
          options = _ref6.options;
      var tpl = "\n\t\t\t<div class=\"bg-white rounded border-2 border-gray-200 mb-10\">\n\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t        <a href=\"".concat(routes.single + _post.user.the_username, "\">\n\t\t\t            <img class=\"rounded w-12 rounded border\" src=\"").concat(_post.user.the_avatar_sm, "\">\n\t\t\t        </a>\n\t\t\t        <div class=\"ml-3\">\n\t\t\t            <h4 class=\"mb-1 font-bold\">\n\t\t\t                <a class=\"text-indigo-600\" href=\"").concat(routes.single + _post.user.the_username, "\">\n\t\t\t                    ").concat(_post.user.name, "\n\t\t\t                </a>\n\t\t\t            </h4>\n\t\t\t            <div class=\"-mx-1 flex items-center text-xs text-gray-500\">\n\t\t\t                <p class=\"mx-1\">").concat(_post.user.the_username, "</p>\n\t\t\t                <p class=\"mx-1\">&bull;</p>\n\t\t\t                <p class=\"mx-1 text-blue-500 font-semibold\">").concat(_post.time, "</p>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t    </div>\n\n\t\t\t    ").concat(_post.type == 'link' ? "\n\t\t\t\t    <div class=\"px-6 text-sm text-gray-700 leading-loose\">\n\t\t\t\t        ".concat(_post.status == 'CONTAINS_PORNOGRAPHIC' ? "\n\t\t\t\t            <div class=\"bg-orange-100 border-l-4 border-orange-500 text-orange-700 px-4 py-2 mb-4\" role=\"alert\">\n\t\t\t\t                <p class=\"font-bold\">Hati-hati</p>\n\t\t\t\t                <p>Post ini mungkin mengandung konten ponografi</p>\n\t\t\t\t            </div>\n\t\t\t\t        " : '', "\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"shimmer border rounded mx-6\">\n\n\t\t\t\t        ").concat(_post.post_card.has_embeddable_code ? "\n\n\t\t\t\t            <div class=\"embeddable-frame\">\n\t\t\t\t                ".concat(_post.post_card.embeddable_code, "\n\t\t\t\t            </div>") : // else
      "\n\t\t\t\t        \t".concat(_post.post_card.thumbnail !== null ? "<img src=\"".concat(_post.post_card.thumbnail, "\" class=\"w-full h-64 object-cover\">") : // else
      "<img src=\"".concat(_post.post_card.default_thumbnail, "\" class=\"w-full h-64 object-scale-down\">"), "\n\t\t\t\t        "), "\n\n\t\t\t\t        <div class=\"p-4 border-t bg-gray-100\">\n\t\t\t\t        \n\t\t\t\t            <h2 class=\"text-lg font-semibold hover:text-indigo-600\"><a href=\"").concat(_post.post_card.url, "\">").concat(_post.post_card.title, "</a></h2>\n\n\t\t\t\t            ").concat(_post.post_card.description ? "\n\t\t\t\t                <p class=\"text-gray-600 text-sm break-all\">".concat(_post.post_card.description.substr(0, 200), "</p>\n\t\t\t\t            ") : '', "\n\t\t\t\t            <div class=\"uppercase tracking-wider text-xs mt-3 text-teal-500 font-semibold\">").concat(Object(_utils_get_hostname__WEBPACK_IMPORTED_MODULE_10__["default"])(_post.post_card.url), "</div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t    ") : "", "\n\n\t\t\t    ").concat(_post.type !== 'link' ? "\n\t\t\t    \n\t\t\t    <div class=\"relative".concat(_post.images.length > 1 && options.carousel ? ' carousel-outer w-full' : '', "\"> \n\t\t\t        <div class=\"").concat(_post.images.length > 1 && options.carousel ? 'carousel w-full' : '', "\">\n\t\t\t            \n\t\t\t            ").concat('carousel' in options && options.carousel == false ? Object(_utils_is_video__WEBPACK_IMPORTED_MODULE_4__["default"])(_post.images[0]) ? "<video controls=\"\">\n\t\t\t                        <source src=\"".concat(_post.images[0], "\" type=\"video/mp4\">\n\t\t\t                    </video>") : "<a href=\"".concat(routes.single + _post.slug, "\">\n\t\t\t\t                    <div data-blurry=\"").concat(_post.blurry_image, "\" data-src=\"").concat(_post.images[0], "\" class=\"lazy-image w-full bg-gray-200 bg-cover h-40 sm:h-64\"></div>\n\t\t\t\t                </a>") : // else
      _post.images.map(function (img) {
        if (Object(_utils_is_video__WEBPACK_IMPORTED_MODULE_4__["default"])(img)) {
          return "<video controls=\"\">\n\t\t\t\t                        <source src=\"".concat(img, "\" type=\"video/mp4\">\n\t\t\t\t                    </video>");
        } else {
          return "<img src=\"".concat(img, "\" alt=\"image\">");
        }
      }).join(""), "\n\t\t\t        </div>\n\n\t\t\t        ").concat(_post.images.length > 1 && options.carousel !== false ? "\n\t\t\t\t        <button class=\"prev\">&lsaquo;</button>\n\t\t\t\t        <button class=\"next\">&rsaquo;</button>" : '', "\n\t\t\t    </div>\n\t\t\t    ") : '', "\n\n\t\t\t    <div class=\"p-6 text-sm text-gray-700 leading-relaxed\">\n\t\t\t        ").concat(_post.title ? "<h4 class=\"text-lg mb-2 text-black font-bold\"><a class=\"text-indigo-700\" href=\"".concat(routes.single + _post.slug, "\">\n\t\t\t\t            ").concat(_post.title, "\n\t\t\t\t        </a></h4>") : '', "\n\n\t\t\t        ").concat(!options.discover && (_post.markdown_truncate || _post.markdown) ? "<div class=\"mb-5\">".concat(options.truncate_content ? _post.markdown_truncate : _post.markdown, "</div>") : '', "\n\n\t\t\t        <div class=\"flex flex-wrap\">\n\t\t\t        ").concat(_post.tags.map(function (tag) {
        if (tag.tag !== null) {
          return "<a class=\"border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded-full py-2 px-4 text-xs\" href=\"".concat(routes.search + Object(_utils_full_url_with_query__WEBPACK_IMPORTED_MODULE_7__["default"])({
            tag: tag.tag.name
          }), "\">\n\t\t                        #").concat(tag.tag.name, "\n\t\t                    </a>");
        } else {
          return '';
        }
      }).join(''), "\n\t\t\t        </div>\n\n\t\t\t        <div class=\"mt-8\">\n\t\t\t            <div class=\"flex w-full items-center\">\n\t\t\t                <a data-love ").concat(_post.is_post_loved ? 'data-loved' : '', " class=\"w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200\" href=\"#\">\n\t\t\t                    <span></span>\n\t\t\t                </a>\n\t\t\t                <a class=\"ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200\" href=\"").concat(routes.single + _post.slug + '#comments', "\">\n\t\t\t                    <svg class=\"stroke-current\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg> \n\t\t\t                </a>\n\t\t\t                <a data-url=\"").concat(routes.single + _post.slug, "\" class=\"share-button ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200\" href=\"#\">\n\t\t\t                    <svg class=\"stroke-current\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line></svg>\n\t\t\t                </a>\n\t\t\t                <a class=\"ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200\" data-save ").concat(_post.is_post_saved ? 'data-saved' : '', " href=\"#\"></a>\n\n\t\t                \t").concat(_post.is_mine ? "<div class=\"ml-auto\">\n\t\t\t\t                \t<a href=\"".concat(routes.delete_post.replace(/slug/g, _post.slug), "\" class=\"text-red-600\">Delete</a>\n\t\t\t\t                </div>") : '', "\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>");
      return tpl;
    },

    /**
     * Post shimmer template
     * @param  {String} shi_class Generated unique shimmer class
     * @return {String}           Interpolated template string
     */
    postShimmer: function postShimmer(shi_class) {
      var tpl = "\n\t\t\t\t<div class=\"".concat(shi_class, " bg-white rounded border-2 border-gray-200 mb-10\">\n\t\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t\t\t    <div class=\"w-12 h-12 bg-gray-200 rounded\"></div>\n\t\t\t\t        <div class=\"ml-3\">\n\t\t\t\t            <div class=\"mb-3 w-32 h-4 bg-gray-200 rounded\"></div>\n\t\t\t\t            <div class=\"-mx-1 flex items-center\">\n\t\t\t\t                <div class=\"mx-1 h-2 w-12 bg-gray-100 rounded\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"bg-gray-100 w-full\" style=\"height: 470px;\">\n\t\t\t\t    </div>\n\t\t\t\t    \n\n\t\t\t\t    <div class=\"p-6\">\n\t\t\t\t        <div class=\"mb-4 bg-gray-200 w-64 h-8 rounded-lg\"></div>\n\n\t\t\t\t        <div class=\"mb-3 bg-gray-100 w-full h-3 rounded\"></div>\n\t\t\t\t        <div class=\"bg-gray-100 w-40 h-3 rounded\"></div>\n\n\t\t\t\t        <div class=\"flex\">\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 mt-6 rounded-full\"></div>\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 mt-6 rounded-full ml-2\"></div>\n\t\t\t\t        </div>\n\n\t\t\t\t        <div class=\"mt-8\">\n\t\t\t\t            <div class=\"flex w-full\">\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t");
      return tpl;
    },

    /**
     * Discover shimmer template
     * @param  {String} shi_class Generated unique shimmer class
     * @return {String}           Interpolated template string
     */
    discoverShimmer: function discoverShimmer(shi_class) {
      var tpl = "\n\t\t\t\t<div class=\"".concat(shi_class, " bg-white rounded border-2 border-gray-200 mb-10\">\n\t\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t\t\t    <div class=\"w-12 h-12 bg-gray-200 rounded\"></div>\n\t\t\t\t        <div class=\"ml-3\">\n\t\t\t\t            <div class=\"mb-3 w-32 h-4 bg-gray-200 rounded\"></div>\n\t\t\t\t            <div class=\"-mx-1 flex items-center\">\n\t\t\t\t                <div class=\"mx-1 h-2 w-12 bg-gray-100 rounded\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"mx-6 border border-gray-200 rounded\">\n\t\t\t\t\t    <div class=\"bg-gray-100 w-full h-64\">\n\t\t\t\t\t    </div>\n\t\t\t\t        <div class=\"p-4 border-t\">\n\t\t\t\t            <h2 class=\"w-64 h-6 rounded bg-gray-300 mb-4\"></h2>\n\t\t\t                <p class=\"h-3 w-full rounded bg-gray-200 mb-3\"></p>\n\t\t\t                <p class=\"h-3 w-40 rounded bg-gray-200\"></p>\n\t\t\t\t            <div class=\"rounded bg-gray-200 h-4 w-20 bg-gray-300 mt-10\"></div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"p-6\">\n\t\t\t\t        <div class=\"flex\">\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 rounded-full\"></div>\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 rounded-full ml-2\"></div>\n\t\t\t\t        </div>\n\n\t\t\t\t        <div class=\"mt-8\">\n\t\t\t\t            <div class=\"flex w-full\">\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t");
      return tpl;
    }
  },

  /**
   * Target element instance
   * @type Node
   * @default Undefined
   */
  elem: undefined,

  /**
   * Set element target method
   * @param  {String} elem Target selector
   * @return {Node}      	 Target element node
   */
  set target(elem) {
    if ($(elem) !== null) {
      return this.elem = $(elem);
    }

    return this.elem = false;
  },

  /**
   * Init page number for query
   * @param  {Number} num Number of a page
   */
  set initPage(num) {
    api.vars.__page__ = num;
  },

  /**
   * Increment page method
   * @return {Number} Current page number
   */
  incrementPage: function incrementPage() {
    api.vars.__page__ += 1;
    return api.page;
  },

  /**
   * Get current page
   * @return {Number} Current page number
   */
  get page() {
    return api.vars.__page__;
  },

  /**
   * Build parameters method
   * @param  {Object} defParams Default parameters object
   * @return {String}           Generated URL parameter string
   */
  buildParams: function buildParams(defParams) {
    var params = api.options.params;
    var parameters;

    if (params) {
      parameters = params.call(this, defParams);
    } else {
      parameters = defParams;
    }

    Object.keys(parameters).forEach(function (key) {
      if (parameters[key] == "" || parameters[key] == null) delete parameters[key];
    });
    var url = new URLSearchParams(parameters).toString();
    return url ? '?' + url : '';
  },

  /**
   * Query/Fetch method
   * @param  {Number} options.page         	Current page number
   * @param  {Object} options.queryPending 	Query pending object
   * @param  {String} options.url          	Target URL endpoint
   * @param  {Function} options.buildParams  	Build params method
   * @param  {Function} init                 	Function callback
   * @return {Promise}                      	Resolve or reject; idk
   */
  query: function () {
    var _query = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref7, init) {
      var page, queryPending, url, buildParams, objParams, params, http;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = _ref7.page, queryPending = _ref7.queryPending, url = _ref7.url, buildParams = _ref7.buildParams;

              if (!(queryPending.status == true)) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return", false);

            case 3:
              /** Calling init callback */
              if (init) init.call(this);
              /** Init query pending */

              queryPending.init();
              objParams = _objectSpread({}, page ? {
                page: page
              } : {});
              params = buildParams(objParams);
              _context3.next = 9;
              return fetch(url + params, {
                headers: {
                  'Accept': 'application/json'
                }
              });

            case 9:
              http = _context3.sent;

              if (http) {
                queryPending.dispose();
              }

              if (!http.ok) {
                _context3.next = 15;
                break;
              }

              return _context3.abrupt("return", Promise.resolve(http.json()));

            case 15:
              return _context3.abrupt("return", Promise.reject(http));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function query(_x, _x2) {
      return _query.apply(this, arguments);
    }

    return query;
  }(),

  /**
   * Query pending is an object to check if there is a current request
   * @type {Object}
   */
  queryPending: {
    /** Start query pending */
    init: function init() {
      api.vars.__queryPending__ = true;
    },

    /** Stop query pending; when the HTTP request is complete (failed or success) */
    dispose: function dispose() {
      api.vars.__queryPending__ = false;
    },

    /** Current query pending status */
    get status() {
      return api.vars.__queryPending__;
    }

  },

  /**
   * Default instance options
   * @type {Object}
   */
  defOptions: {
    first: false,
    carousel: false,
    truncate_content: false,
    discover: false,
    page: 1,
    params: null,
    url: undefined,
    type: types.POST,
    lazyimage: true,
    shimmer: 1,
    wrap: ''
  },

  /**
   * Instance Options
   * @type {Object}
   */
  options: {},

  /**
   * Set options method
   * @param  {Object} options Object to be set
   */
  set opts(options) {
    this.options = Object(_utils_obj_extend__WEBPACK_IMPORTED_MODULE_3__["default"])(this.defOptions, options);
  },

  /**
   * Intersection observer
   * @type {Object}
   */
  io: {
    /**
     * Initialize IO
     */
    init: function init() {
      api.vars.io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var target = entry.target;
            var image = new Image();
            image.src = target.dataset.src;
            image.className = 'w-full';
            image.addEventListener('load', function () {
              setTimeout(function () {
                target.parentNode.appendChild(image);
                api.vars.io.unobserve(target);
                target.remove();
              });
            });
          }
        });
      });
      $$('.lazy-image').forEach(function (image) {
        io.observe(image);
      });
    },

    /**
     * Observe element
     * @param  {Node} element Target element to be observe
     * @return {IntersectionObserver}
     */
    observe: function observe(element) {
      if (!element) return false;
      return api.vars.io.observe(element);
    }
  },

  /**
   * Events method
   * @type {Object}
   */
  events: {
    /**
     * Attach a few events before the target element to be appended
     * @param  {Node} options.element      		Target element
     * @param  {Object} options.interactions 	List of interactions we have
     * @param  {Object} options.options      	Instance Options
     */
    attach: function attach(_ref8) {
      var data = _ref8.post,
          element = _ref8.element,
          interactions = _ref8.interactions,
          options = _ref8.options;
      var types = post.types; // if post type is discover or post

      if (options.type == types.POST || options.type == types.DISCOVER) {
        interactions.love(element, data.id);
        interactions.save(element, data.id);
        interactions.share(element);
        if (options.carousel && Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.carousel')) interactions.carousel(element);
        if (options.lazyimage !== false) interactions.lazyimage(element);
      }
    }
  },

  /**
   * Templating method; get template string, pass an object to it; 
   * attach a few events 
   * @param  {Object}    data:res     		Post data
   * @param  {Object}    options.options      Instance options
   * @param  {Object}    options.templates    List of template literal we have
   * @param  {Object}    options.interactions List of interaction we have
   * @param  {Object}    options.events       Call the event object
   * @param  {Object}    options.args         Spread operator
   * @return {Promise}                        Resolve or Reject
   */
  templating: function templating(_ref9) {
    var res = _ref9.data,
        direct = _ref9.direct,
        prepend = _ref9.prepend,
        render = _ref9.render,
        options = _ref9.options,
        templates = _ref9.templates,
        interactions = _ref9.interactions,
        events = _ref9.events,
        args = _objectWithoutProperties(_ref9, ["data", "direct", "prepend", "render", "options", "templates", "interactions", "events"]);

    var posts = res.data;
    var wrapper = document.createDocumentFragment(); // append post element to the wrapper

    var appendingTemplate = function appendingTemplate(post) {
      if (!(options.type.template in templates)) return Promise.reject('Template not found: ' + options.type.template); // selecting template literal

      var element = templates[options.type.template]({
        post: post,
        options: options
      }); // converting to dom

      element = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(element); // if wrap option defined

      var wrap = options.wrap;

      if (wrap && _typeof(wrap) == 'object') {
        // then wrap the element template
        element = Object(_utils_wrap_node__WEBPACK_IMPORTED_MODULE_1__["default"])(wrap, element);
      } // just to make sure


      setTimeout(function () {
        // attaching events
        events.attach({
          post: post,
          element: element,
          interactions: interactions,
          options: options
        });
      }); // appending

      wrapper.appendChild(element);
      return element;
    };

    var checkPost = function checkPost(post) {
      if ("post" in post) {
        return true;
      }

      return false;
    };

    return new Promise(function (resolve, reject) {
      // if `posts`` has only one data 
      if (options.first || direct) {
        appendingTemplate(posts);
      } else {
        if (!posts.length) return reject(_objectSpread({
          templates: templates,
          empty: true
        }, args)); // if `posts` has many post data
        // then iterate it

        posts.forEach(function (post) {
          if (checkPost(post)) {
            post = post.post;
          }

          appendingTemplate(post);
        });
      }

      if (direct) {
        render(_objectSpread({
          dom: wrapper
        }, args, {
          prepend: prepend
        }))["catch"](function (error) {
          console.log(error);
        });
      }

      return resolve(_objectSpread({
        dom: wrapper,
        render: render,
        templates: templates,
        interactions: interactions
      }, args));
    });
  },

  /**
   * Last data from query method
   * @type {Object}
   */
  lastData: {
    /** Set the data */
    set function(value) {
      api.vars.__lastData__ = value;
    },

    /** Get current data */
    get function() {
      return api.vars.__lastData__;
    },

    /** Remove the data */
    dispose: function dispose() {
      api.vars.__lastData__ = '';
    }
  },

  /**
   * Called when element has been appended
   * @param  {Node}    options.elem 	Target element
   * @param  {Node}    options.dom  	Current element to be appended
   * @param  {Object}  options.args 	More args
   * @return {Promise}                Resolve or reject
   */
  render: function render(_ref10) {
    var elem = _ref10.elem,
        dom = _ref10.dom,
        prepend = _ref10.prepend,
        args = _objectWithoutProperties(_ref10, ["elem", "dom", "prepend"]);

    return new Promise(function (resolve, reject) {
      if (prepend) {
        elem.prepend(dom);
      } else {
        elem.appendChild(dom);
      }

      return resolve(_objectSpread({
        elem: elem
      }, args));
    });
  },

  /**
   * Load more method
   * @param  {Function}    options.run       	Run method
   * @param  {Object}    	 options.endOfPage 	EndOfPage method
   * @param  {Object} 	 options.args      	More args
   */
  loadMore: function loadMore(_ref11) {
    var run = _ref11.run,
        endOfPage = _ref11.endOfPage,
        args = _objectWithoutProperties(_ref11, ["run", "endOfPage"]); // do more stuff here


    if (endOfPage.status == false) run(_objectSpread({}, args));
  },

  /**
   * Shimmer method
   * @type {Object}
   */
  shimmer: {
    /**
     * Add shimmer element to the target element instance
     * @param {Node} 	options.elem      		Target element instance
     * @param {Object} 	options.templates 		List of template literal we have
     * @param {Object} 	options.options   		Instance options
     */
    add: function add() {
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'appendChild';
      var elem = api.elem,
          templates = api.templates,
          options = api.options;
      var shi_class = 'shimmer-' + new Date().valueOf();
      var tpl = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(templates[options.type.shimmer + 'Shimmer'](shi_class)); // if wrap option defined

      var wrap = options.shimmerWrap;

      if (wrap && _typeof(wrap) == 'object') {
        // then wrap the element template					
        tpl = Object(_utils_wrap_node__WEBPACK_IMPORTED_MODULE_1__["default"])(wrap, tpl);
      }

      tpl.classList.add(shi_class);

      for (var i = 0; i < options.shimmer; i++) {
        elem[method](tpl.cloneNode(true));
      }

      return {
        dispose: function dispose() {
          $$('.' + shi_class).forEach(function (shimmer) {
            shimmer.remove();
          });
        }
      };
    },
    dispose: function dispose(target) {
      $(target).remove();
    }
  },

  /**
   * End of page is an object to check whether the last page
   * @type {Object}
   */
  endOfPage: {
    /**
     * Set end of page to false
     */
    start: function start() {
      api.vars.__endOfPage__ = false;
    },

    /**
     * Init method
     */
    init: function init() {
      api.vars.__endOfPage__ = true;
    },

    /**
     * Delete value
     */
    dispose: function dispose() {
      api.vars.__endOfPage__ = false;
    },

    /**
     * Get current status
     * @return {Boolean}
     */
    get status() {
      return api.vars.__endOfPage__;
    }

  },

  /**
   * End method; start end of page
   */
  end: function end() {
    var endOfPage = api.endOfPage;
    endOfPage.init();
  },

  /**
   * List of exception or error handler
   * @type {Object}
   */
  exception: {
    /**
     * When data is empty
     * @param  {Node} options.elem Target element
     */
    empty: function empty(_ref12) {
      var elem = _ref12.elem,
          templates = _ref12.templates;
      var tpl = templates.empty();
      elem.insertAdjacentHTML('beforeEnd', tpl);
    }
  },

  /**
   * Run instance (fetching, templating, attaching events, appending, rendering)
   * @param  {Node}    	options.elem         Target element
   * @param  {Function} 	options.end          End function
   * @param  {Object}    	options.options      Instance options
   * @param  {Object}    	options.lastData     Lastdata object
   * @param  {Function}   options.buildParams  BuildParams method
   * @param  {Object}    	options.shimmer      Shimmer object
   * @param  {Object}    	options.queryPending QueryPending object
   * @param  {Function}   options.query        Query method
   * @param  {Object} 	options.args         More args
   * @return {Promise}                         Resolve or reject
   */
  run: function run(_ref13) {
    var elem = _ref13.elem,
        end = _ref13.end,
        options = _ref13.options,
        lastData = _ref13.lastData,
        buildParams = _ref13.buildParams,
        shimmer = _ref13.shimmer,
        queryPending = _ref13.queryPending,
        query = _ref13.query,
        args = _objectWithoutProperties(_ref13, ["elem", "end", "options", "lastData", "buildParams", "shimmer", "queryPending", "query"]); // get new page (don't retrieve from the argument)


    var page = api.page,
        incrementPage = api.incrementPage;
    return new Promise(function (resolve, reject) {
      // init the shimmer
      var shi; // 0. start fetching

      query({
        page: page,
        queryPending: queryPending,
        url: options.url,
        buildParams: buildParams,
        options: options
      }, function () {
        // init query callback
        // show the shimmer
        shi = shimmer.add();
      })["finally"](function () {
        // dispose shimmer
        if (shi) shi.dispose();
      }) // 1. collecting post data
      .then(function (data) {
        if (data == false) return; // page++

        incrementPage();
        lastData = data;
        var last_page = data.last_page; // end of page or stop fetching

        if (page == last_page || options.first) {
          end();
        }

        if (options.first || !options.first && page <= last_page) {
          // 2. templating & listen (event listener)
          (function (_ref14) {
            var templating = _ref14.templating,
                args = _objectWithoutProperties(_ref14, ["templating"]); // i promise you <3


            return new Promise(function (resolve) {
              templating(_objectSpread({}, args)).then(function (res) {
                // templating success
                return resolve(res);
              })["catch"](function (error) {
                console.log(error);

                if (_typeof(error) == 'object') {
                  var empty = error.empty,
                      exception = error.exception,
                      _args4 = _objectWithoutProperties(error, ["empty", "exception"]); // if empty data


                  if (empty) {
                    exception.empty(_objectSpread({}, _args4));
                  }
                }
              });
            });
          })(_objectSpread({
            data: data,
            lastData: lastData,
            elem: elem,
            options: options
          }, args)) // 3. appending element
          .then(function (_ref15) {
            var render = _ref15.render,
                args = _objectWithoutProperties(_ref15, ["render"]);

            return render(_objectSpread({}, args));
          }) // 4. rendered
          .then(function (_ref16) {
            var lifecycle = _ref16.lifecycle,
                elem = _ref16.elem,
                args = _objectWithoutProperties(_ref16, ["lifecycle", "elem"]);

            lifecycle.onContentLoaded();
            return resolve({
              elem: elem,
              lastData: lastData
            });
          });
        }
      }) // oh, shit! there was an error! reject, reject, reject!
      ["catch"](function (error) {
        // do more stuff here
        return reject(error);
      });
    });
  }
  /**
   * Public Object
   * @type {Object}
   */

};
var post = {
  /**
   * Post types
   * @type {Object}
   */
  types: types,

  /**
   * Initialize 
   * @param  {Node} 	target Target element
   * @param  {Object} opts   Options given
   * @return {Object}        Public API
   */
  init: function init(target, opts) {
    // set target element
    api.target = target;

    if (!api.elem) {
      return console.error('Oh, sh!t. Target element couldn\'t be found. 😭');
    } // set options


    api.opts = opts; // set page

    if (!api.options.first) api.initPage = api.options.page; // set end of page

    api.endOfPage.start(); // destructuring

    var elem = api.elem,
        options = api.options,
        query = api.query,
        templates = api.templates,
        templating = api.templating,
        exception = api.exception,
        lifecycle = api.lifecycle,
        loadMore = api.loadMore,
        shimmer = api.shimmer,
        io = api.io,
        events = api.events,
        page = api.page,
        incrementPage = api.incrementPage,
        queryPending = api.queryPending,
        interactions = api.interactions,
        end = api.end,
        endOfPage = api.endOfPage,
        buildParams = api.buildParams,
        lastData = api.lastData,
        onrendered = api.onrendered,
        render = api.render; // start implementing

    var args = {
      elem: elem,
      options: options,
      query: query,
      templates: templates,
      templating: templating,
      exception: exception,
      lifecycle: lifecycle,
      loadMore: loadMore,
      shimmer: shimmer,
      io: io,
      events: events,
      page: page,
      incrementPage: incrementPage,
      queryPending: queryPending,
      interactions: interactions,
      end: end,
      endOfPage: endOfPage,
      buildParams: buildParams,
      lastData: lastData,
      onrendered: onrendered,
      render: render
    };
    lifecycle.onStartImplementing.call(this, args);
    var instance = api.run(args);
    instance.then(function () {
      lifecycle.firstContentLoaded.call(this, args);
    });

    var append = function append(data, prepend) {
      templating(_objectSpread({
        data: data,
        direct: true,
        prepend: prepend
      }, args))["catch"](function (error) {
        console.log(error);
      });
    };

    var output = {
      onRender: instance,
      shimmer: shimmer,
      elem: elem,
      append: append
    };
    return output;
  }
};


/***/ }),

/***/ "./resources/js/single.js":
/*!********************************!*\
  !*** ./resources/js/single.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! siema */ "./node_modules/siema/dist/siema.min.js");
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(siema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/post */ "./resources/js/libs/post.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

 // needs better solution; error when using dynamic import

window.Siema = siema__WEBPACK_IMPORTED_MODULE_1___default.a;


__webpack_require__(/*! ./comps/comment */ "./resources/js/comps/comment.js");

var mypost = _libs_post__WEBPACK_IMPORTED_MODULE_2__["post"].init('.post', {
  url: routes.post_show.replace(/slug/g, post_data.slug),
  carousel: true,
  lazyimage: false,
  first: true
});
mypost.onRender.then(function (_ref) {
  var data = _ref.lastData.data;
  $('#comment-box').classList.remove('hidden');
  /**
   * Links
   */

  var link_tpl = function link_tpl(_ref2) {
    var originalName = _ref2.originalName,
        name = _ref2.name,
        links = _ref2.links;
    return "\n            <div class=\"mb-12\">\n            \t<h2 class=\"pb-3 font-bold text-indigo-600\">".concat(name, "</h2>\n            \t<div class=\"bg-white rounded border-2 border-gray-200\">\n            \t").concat(links.length > 0 ? links.map(function (page) {
      return "\n                \t\t<a data-fetch=\"".concat(page, "\" target=\"_blank\" class=\"flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100\" href=\"").concat(page, "\">\n\t                \t\t<img class=\"w-8 flex-shrink-0\" src=\"https://s2.googleusercontent.com/s2/favicons?domain_url=").concat(page, "\">\n\t                \t\t<div class=\"ml-4 overflow-hidden\">\n\t                \t\t\t<div class=\"text-indigo-600 font-semibold title truncate\"></div>\n\t\t                \t\t<span class=\"text-xs text-gray-700 truncate\">").concat(page, "</span>\n\t                \t\t</div>\n\t                \t</a>");
    }).join('') : // else
    "\n\t            <div class=\"px-5 py-4 border-b border-gray-100 text-center text-sm\">\n                \t<h4>Tidak ada link ".concat(name, "</h4>\n            \t</div>\n\t            "), "\n                \t<div class=\"flex items-center text-sm justify-center px-2 py-2 border-b border-gray-100\">\n\t                \t<a href=\"").concat(routes.contribute_create.replace(/slug/g, post_data.slug), "?col=").concat(originalName, "\" class=\"inline-block text-sm bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 text-white rounded py-1 px-4\">Rekomendasikan</a>\n                \t</div>\n                </div>\n            </div>\n        ");
  };

  var el = $('.links');
  var link_names = ['pages', 'tutorials', 'helps', 'examples'];
  el.innerHTML = '';
  link_names.forEach(function (name) {
    el.insertAdjacentHTML('beforeEnd', link_tpl({
      name: key2str[name],
      links: data[name],
      originalName: name
    }));
  });
  setTimeout(function () {
    $$('[data-fetch]').forEach(function (item) {
      var url = item.dataset.fetch;

      if (url) {
        _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(routes.post_link_info, {
                    method: 'POST',
                    headers: {
                      'X-CSRF-TOKEN': token,
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                      url: url
                    })
                  });

                case 2:
                  res = _context.sent;

                  if (!res.ok) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return", Promise.resolve(res.json()));

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))().then(function (data) {
          if (data) {
            var title = data.title;
            item.querySelector('.title').innerText = title;
          }
        });
      }
    });
  }, 500);
  /**
   * Inspiration
   */

  var inspi_tpl = function inspi_tpl(_ref4) {
    var keyword = _ref4.keyword;
    return "<div class=\"mb-12\">\n                \t<h2 class=\"pb-3 font-bold text-indigo-600\">Cari Inspirasi Desain</h2>\n                \t<div class=\"flex flex-wrap border-2 border-gray-200 bg-white rounded\">\n\t                \t<a href=\"https://dribbble.com/search/".concat(keyword, "\" class=\"flex items-center w-1/3 border-r hover:bg-gray-100 rounded p-4\">\n\t\t\t\t\t\t\t<svg class=\"h-4\" viewBox=\"0 0 512 126\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\"> <g> <path d=\"M156.433566,50.3217928 C162.293279,50.3217928 167.043422,45.5700082 167.043422,39.7086531 C167.043422,33.847298 162.293279,29.0955133 156.433566,29.0955133 C150.573305,29.0955133 145.823161,33.847298 145.823161,39.7086531 C145.823161,45.5700082 150.573305,50.3217928 156.433566,50.3217928 L156.433566,50.3217928 Z M506.593862,86.5830801 C504.979842,85.4477947 503.73349,85.2601307 502.69997,87.4644992 C484.879547,126.059824 454.849472,106.80046 457.833494,108.495455 C464.494199,105.447966 482.01261,91.3977841 479.365069,71.9983566 C477.756521,60.1421478 467.581081,54.8831778 456.77973,56.7663837 C437.926334,60.0529663 430.989877,80.3885256 434.521025,98.3933303 C435.139277,101.484589 436.243376,104.035288 437.345834,106.532916 C416.040221,123.858738 407.579473,91.0224561 406.619268,87.0990194 C406.580969,86.8894703 423.070236,73.1451315 427.656242,40.3936542 C432.462739,6.06864392 421.513117,-0.180623125 410.3151,0.0141535402 C389.595459,0.375256346 383.997271,43.6660115 391.518605,79.7456531 C390.889411,79.9097908 387.956818,81.5336592 383.246068,81.7153048 C379.855531,71.0490939 365.371479,61.6992668 361.5799,65.3015409 C352.09165,74.3154329 363.881109,91.9356085 372.175531,93.3181945 C367.19286,124.009197 336.030235,116.407436 341.831406,77.9565529 C351.979489,59.1124576 359.697241,31.091427 358.319579,14.1754019 C357.83209,8.18601947 353.404204,0.161877415 343.389072,0.558543377 C324.128614,1.32123627 322.034765,44.6240282 324.293299,75.3577069 C324.180591,74.6010324 323.10932,79.0918382 315.216488,81.3252044 C313.349149,70.9615538 296.662916,60.5596045 292.734555,65.5608784 C285.382283,74.9211008 298.124288,91.6095217 304.160724,92.7743518 C299.178052,123.464808 268.015974,115.863046 273.817145,77.412163 C283.964681,58.5680678 291.682433,30.5470372 290.304771,13.6310121 C289.817282,7.64162963 285.389943,-0.382512421 275.374264,0.0141535402 C256.113807,0.777393562 254.019957,44.0796384 256.278491,74.8133171 C256.164689,74.0451529 255.06825,78.6831355 246.853161,80.8803914 C246.577957,67.4353302 229.830994,61.2708676 225.80798,65.5608784 C218.638448,73.2069567 227.449904,88.8974208 235.602073,92.7743518 C230.619401,123.464808 199.457323,115.863046 205.258495,77.412163 C215.406031,58.5680678 223.123783,30.5470372 221.746121,13.6310121 C221.258632,7.64162963 216.831293,-0.382512421 206.815614,0.0141535402 C187.555156,0.777393562 186.005697,46.2566506 188.264231,76.9903293 C181.920311,104.170975 160.645337,138.115186 163.408868,70.1178864 C163.681884,65.3485937 163.980067,63.5365141 161.60226,61.7512438 C159.819725,60.3626393 155.767714,61.0301324 153.553497,61.0859392 C150.861093,61.1937229 150.18594,62.7694442 149.591214,65.1499871 C148.204799,71.298036 147.956404,77.2578737 147.758344,85.3897994 C147.628128,89.1939628 147.322832,90.9688378 145.858725,96.1555872 C144.394617,101.342337 136.048765,110.820738 131.478079,109.23681 C125.138536,107.055421 127.217066,89.1583996 128.405969,76.8612077 C129.396266,67.1426181 126.226769,62.7792925 118.104144,61.1920815 C113.349077,60.2006902 110.459707,60.3533382 105.508222,58.7923892 C100.825375,57.3162447 99.7655927,48.4577364 89.7789116,51.4100254 C84.3147696,53.0256869 87.826768,64.6012203 86.514214,73.1806947 C80.0592278,115.381029 66.6278447,116.539841 60.3966328,96.0395966 C88.4597921,27.3102429 68.5148805,0.21440146 56.8414116,0.21440146 C44.681001,0.21440146 30.7807315,8.58979806 36.6667072,62.1818315 C33.8046939,61.346918 32.9249162,60.8971809 29.7920758,60.8971809 C12.0728705,60.8971809 0,75.2214727 0,92.8914367 C0,110.561401 12.0728705,124.885692 29.7920758,124.885692 C40.2525675,124.885692 47.5955384,120.128984 53.1581629,112.769599 C56.786699,117.966744 61.2058314,124.96612 69.2868745,124.650976 C93.3735259,123.713203 100.379467,74.3039433 101.205627,71.5480723 C103.780946,71.9447383 106.217296,72.6959415 108.594556,73.0926075 C112.556839,73.68788 112.84408,75.2559416 112.754898,79.2412035 C111.705512,112.844555 117.906085,124.610488 131.971586,124.610488 C139.808611,124.610488 146.794309,116.911339 151.606278,111.405068 C155.200345,118.822995 160.927107,124.383978 168.609843,124.610488 C187.227428,125.072809 194.354831,95.400554 193.705393,99.3053885 C193.195473,102.369291 199.745111,124.443068 218.910916,124.523495 C242.652332,124.622525 247.064899,98.5147922 247.59178,94.1416183 C247.657435,93.2711417 247.685886,93.3625117 247.59178,94.1416183 C247.585762,94.2225929 247.579197,94.3090387 247.572631,94.4069742 C255.109831,93.0052388 258.999346,88.9641701 258.999346,88.9641701 C258.999346,88.9641701 265.051101,124.929462 287.469567,124.523495 C310.748114,124.101662 315.138249,100.502499 315.715466,95.9000796 C315.790969,94.8080172 315.836381,94.9360445 315.715466,95.9000796 C315.712183,95.945491 315.709448,95.9854312 315.706165,96.0352196 C324.659326,92.7776346 327.013607,89.5085599 327.013607,89.5085599 C327.013607,89.5085599 331.824481,124.758759 355.483828,125.067338 C376.568402,125.342542 384.3819,103.752424 384.427859,94.7150058 C387.984174,94.7527575 394.561717,92.6058372 394.407427,92.4827339 C394.407427,92.4827339 402.13065,123.302858 423.697242,124.885692 C433.823987,125.628689 441.41973,119.188475 445.749681,116.249864 C455.926215,124.491215 489.811336,135.016815 511.206677,98.7418492 C514.226263,93.5359505 507.733525,87.3857131 506.593862,86.5830801 L506.593862,86.5830801 Z M28.9369187,112.918964 C18.598983,112.918964 11.9700109,103.360135 11.9700109,93.0533858 C11.9700109,82.7466363 18.0545932,73.1878073 28.3925288,73.1878073 C33.0452838,73.1878073 35.632093,73.6999168 39.2557049,76.8513594 C39.9133497,79.43981 41.7746705,85.4122316 42.6812574,88.1243325 C43.8947817,91.7528686 45.3386458,94.8419389 46.7950938,98.2040249 C44.7143757,106.827269 37.8960981,112.918964 28.9369187,112.918964 L28.9369187,112.918964 Z M54.1287635,77.1544669 C53.69927,76.4694659 53.7884515,76.8902053 53.3075282,76.2429559 C51.4128327,71.0884869 47.7607702,59.5818913 47.3378423,46.5121582 C46.8596546,31.7288282 49.3239077,14.4002705 56.5880925,14.4002705 C61.5100332,14.4002705 66.7410997,49.5197069 54.1287635,77.1544669 L54.1287635,77.1544669 Z M199.690399,61.7512438 C198.523927,52.9780869 198.463197,13.8679174 207.852417,14.9446603 C213.035883,17.0445279 204.565287,53.9503289 199.690399,61.7512438 L199.690399,61.7512438 Z M268.249049,61.7512438 C267.082578,52.9780869 267.021847,13.8679174 276.411067,14.9446603 C281.594534,17.0445279 273.123937,53.9503289 268.249049,61.7512438 L268.249049,61.7512438 Z M336.263857,62.2956336 C335.096839,53.5224768 335.036655,14.4123072 344.425328,15.4890502 C349.609342,17.5889177 341.138198,54.4947187 336.263857,62.2956336 L336.263857,62.2956336 Z M411.351903,12.6554874 C419.936302,11.7658614 419.581764,49.2521625 402.351689,72.9175273 C400.13036,64.364315 396.723409,15.593004 411.351903,12.6554874 L411.351903,12.6554874 Z M447.432639,93.3181945 C444.675127,79.3911158 451.799247,70.2437252 459.143312,69.2408442 C461.709878,68.8305001 465.429784,70.4937615 466.171686,73.6025284 C467.391776,79.461695 465.994964,88.1522359 449.557674,99.1795496 C449.582295,99.2736552 448.046514,96.4193017 447.432639,93.3181945 L447.432639,93.3181945 Z\" fill=\"#000000\"></path> </g> </svg>\n\t\t\t\t\t\t</a>\n\t                \t<a href=\"https://www.uplabs.com/search?q=").concat(keyword, "\" class=\"flex items-center w-1/3 border-r hover:bg-gray-100 rounded p-4\">\n\t                \t\t<svg class=\"h-4\" viewBox=\"0 0 306 71\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><linearGradient id=\"a\"><stop offset=\"0\" stop-color=\"#6a11cb\"/><stop offset=\"1\" stop-color=\"#2575fc\"/></linearGradient><linearGradient id=\"b\" x1=\"-16.826117%\" x2=\"219.3%\" xlink:href=\"#a\" y1=\"68.255184%\" y2=\"-19.959866%\"/><linearGradient id=\"c\" x1=\"-104.295098%\" x2=\"112.418627%\" xlink:href=\"#a\" y1=\"86.9491%\" y2=\"21.510283%\"/><g fill=\"none\" transform=\"\"><path d=\"m36.3090909 2.5875v26.0475c0 4.3125-.8636364 7.4175-2.5909091 9.315s-4.4909091 2.9325-8.2909091 2.9325-6.5636363-.8625-8.2909091-2.76c-1.7272727-1.8975-2.5909091-5.0025-2.5909091-9.4875v-26.0475h-14.33636359v26.0475c0 7.7625 1.55454545 13.455 4.66363636 17.595.51818182.5175.86363637 1.2075 1.38181818 1.725 4.14545455 4.14 10.53636365 6.21 19.17272725 6.21 8.4636364 0 14.8545455-2.07 19-6.21.5181818-.5175.8636364-1.035 1.3818182-1.725 3.1090909-4.14 4.6636364-10.005 4.6636364-17.595v-26.0475z\" fill=\"url(#b)\"/><path d=\"m59.4545455 67.7925v-65.3775h13.8181818v8.1075c1.9-3.2775 4.1454545-5.6925 6.9090909-7.4175 2.7636363-1.5525 5.8727273-2.415 9.5-2.415 7.0818182 0 12.6090908 2.415 16.5818178 7.0725 3.972728 4.6575 6.045455 11.2125 6.045455 19.4925 0 8.1075-2.072727 14.49-6.045455 19.32-3.972727 4.83-9.3272724 7.245-15.8909087 7.245-3.9727273 0-7.2545455-.69-10.0181818-2.2425-2.7636364-1.38-5.1818182-3.795-7.0818182-6.9.1727272 1.2075.3454545 2.5875.3454545 4.14 0 1.38.1727273 3.105.1727273 5.0025v13.8h-14.3363636zm13.1272727-40.5375c0 4.485 1.0363636 7.935 3.2818182 10.5225 2.2454545 2.415 5.3545454 3.795 9.1545454 3.795 3.9727273 0 7.0818182-1.2075 9.1545455-3.795 2.2454545-2.415 3.2818182-6.0375 3.2818182-10.5225s-1.0363637-7.935-3.2818182-10.5225c-2.2454546-2.5875-5.3545455-3.795-9.3272728-3.795-3.8 0-6.9090909 1.38-9.1545454 3.9675-2.0727273 2.2425-3.1090909 5.865-3.1090909 10.35z\" fill=\"url(#c)\"/><g fill=\"#3a3a3a\"><path d=\"m124 68v-65h14v65z\"/><path d=\"m46 68c-.5189873-.5217391-.8649789-1.2173913-1.3839662-1.7391304-4.1518988-4.1739131-10.5527427-6.2608696-19.2025317-6.2608696-8.4767932 0-14.8776371 2.0869565-19.02953586 6.2608696-.51898734.5217391-.8649789 1.0434782-1.38396624 1.7391304z\"/><path d=\"m198 67.9350649h-14.029412l.173203-7.0551948c-1.905229 3.0974026-4.330066 5.3344156-7.101307 6.8831169-2.771242 1.3766234-6.062092 2.237013-10.045752 2.237013-6.581699 0-11.95098-2.4090909-15.93464-7.2272727-3.983661-4.8181818-6.062092-11.3571429-6.062092-19.2727273 0-8.2597403 1.905229-14.7987013 5.888889-19.4448052s9.526144-7.0551948 16.627451-7.0551948c3.637255 0 6.928104.8603896 9.699346 2.4090909 2.771242 1.7207792 5.196079 4.1298701 7.101307 7.3993507v-8.0876624h13.683007zm-13.163399-24.7792207c0-4.474026-1.039215-7.9155845-3.290849-10.4967533s-5.196079-3.9577922-9.179739-3.9577922-6.928105 1.2045455-9.179738 3.7857143c-2.251634 2.5811688-3.29085 6.0227273-3.29085 10.4967532 0 4.474026 1.039216 7.9155844 3.29085 10.4967533 2.251633 2.4090909 5.196078 3.7857143 9.179738 3.7857143s7.101307-1.2045455 9.352941-3.7857143c1.905229-2.4090909 3.117647-5.8506494 3.117647-10.3246753z\"/><path d=\"m206 67.9170984v-64.9170984h13.901639v14.5803109c0 1.5621761 0 3.1243523-.17377 4.6865285-.173771 1.5621761-.347541 3.1243523-.521312 4.5129533 2.432787-3.6450777 4.865574-6.2487046 7.645902-7.8108808 2.780328-1.5621761 5.908197-2.4300518 9.557377-2.4300518 7.12459 0 12.685246 2.4300518 16.681967 7.1165803 3.996722 4.6865285 5.908197 11.2823834 5.908197 19.6139897 0 8.158031-2.085246 14.5803108-6.081967 19.4404145-3.996722 4.8601036-9.383607 7.2901554-15.986885 7.2901554-3.996722 0-7.298361-.6943005-10.078689-2.2564767-2.780328-1.388601-5.213115-3.8186528-7.12459-6.9430052l.17377 7.1165803zm13.206557-24.9948186c0 4.5129534 1.042623 7.984456 3.30164 10.5880829 2.259016 2.4300518 5.386885 3.8186528 9.209836 3.8186528 3.996721 0 7.12459-1.2150259 9.209836-3.8186528 2.259016-2.4300518 3.301639-6.0751295 3.301639-10.5880829s-1.042623-7.984456-3.301639-10.5880829c-2.259017-2.603627-5.386885-3.8186529-9.383607-3.8186529-3.822951 0-6.950819 1.3886011-9.209836 3.992228-1.911475 2.2564767-3.127869 5.9015544-3.127869 10.4145078z\"/><path d=\"m264 59.8874598 11.153527-5.7299035c.348548 1.9099678 1.394191 3.4726688 2.962656 4.5144694 1.568464 1.0418007 3.659751 1.7363344 6.099585 1.7363344s4.182572-.3472669 5.576763-1.2154341 2.091286-2.0836012 2.091286-3.6463022c0-2.4308682-2.439834-4.340836-7.319502-6.0771704-1.568464-.5209003-2.614108-.8681672-3.485477-1.2154341-5.925311-2.2572347-9.93361-4.340836-12.19917-6.5980707-2.26556-2.2572348-3.311203-5.0353698-3.311203-8.3344052 0-4.8617363 1.917012-8.8553055 5.751037-11.8070739 3.834025-2.9517685 8.887967-4.5144695 15.161826-4.5144695 4.53112 0 8.365145.8681672 11.676348 2.778135 3.311204 1.7363345 5.751038 4.3408361 7.145229 7.6398714l-10.630706 5.2090032c-.522821-1.9099678-1.568465-3.2990353-2.962655-4.1672025-1.394191-1.0418007-3.13693-1.3890676-5.40249-1.3890676-2.091286 0-3.834025.5209004-5.228216 1.3890676s-1.917012 2.0836013-1.917012 3.4726688c0 2.4308682 3.311203 4.8617363 9.93361 6.9453376.697095.1736334 1.394191.3472669 1.742738.5209003 5.40249 1.7363344 9.410789 3.8199357 11.676349 6.2508039s3.485477 5.3826366 3.485477 9.2025723c0 4.8617364-1.917012 8.8553055-5.751037 11.807074s-9.062241 4.340836-15.510374 4.340836c-5.228216 0-9.585062-1.0418006-13.244813-2.9517685-3.834025-2.2572347-6.273859-4.8617363-7.493776-8.1607717z\"/></g></g></svg>\n\t\t\t\t\t\t</a>\n\t                \t<a href=\"https://www.behance.net/search?search=").concat(keyword, "\" class=\"flex items-center w-1/3 hover:bg-gray-100 rounded p-4\">\n\t\t\t\t\t\t\t<svg class=\"h-4\" viewBox=\"0 0 512 95\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\"> <g fill=\"#0A0B09\"> <path d=\"M42.3830069,77.1622621 C44.4027586,77.1622621 46.3201103,76.9821793 48.124469,76.5796414 C49.9535448,76.1771034 51.5778207,75.5450483 52.9478621,74.6057931 C54.3179034,73.7053793 55.4513655,72.4695172 56.2776276,70.8946759 C57.1038897,69.3374897 57.4993655,67.3142069 57.4993655,64.8672 C57.4993655,60.0755862 56.1505103,56.671669 53.4704552,54.6060138 C50.7833379,52.5686069 47.1993379,51.5552 42.7926069,51.5552 L20.5329655,51.5552 L20.5329655,77.1622621 L42.3830069,77.1622621 L42.3830069,77.1622621 Z M41.2530759,37.5793655 C44.8794483,37.5793655 47.8808276,36.7177931 50.2607448,34.969931 C52.6159448,33.2538483 53.76,30.4113655 53.76,26.5131034 C53.76,24.3521103 53.3786483,22.5618759 52.6159448,21.1741793 C51.8285241,19.7864828 50.7833379,18.6989241 49.462731,17.9397517 C48.1527172,17.1488 46.6732138,16.6014897 44.9536,16.3084138 C43.2692966,15.9764966 41.5002483,15.8493793 39.6888276,15.8493793 L20.5329655,15.8493793 L20.5329655,37.5793655 L41.2530759,37.5793655 L41.2530759,37.5793655 Z M43.9013517,0.00915862069 C48.3469241,0.00915862069 52.3617103,0.394041379 56.0304552,1.18852414 C59.6780138,1.96182069 62.7923862,3.25417931 65.4230069,5.02675862 C68.0147862,6.7958069 70.0416,9.1510069 71.4928552,12.1170759 C72.9088,15.0407724 73.622069,18.6989241 73.622069,23.0279724 C73.622069,27.7101241 72.5592276,31.6189793 70.4335448,34.7439448 C68.2937379,37.8653793 65.1475862,40.4253793 60.9456552,42.4133517 C66.6694621,44.0588138 70.9067034,46.9577931 73.7174069,51.0749793 C76.5422345,55.2204138 77.922869,60.1850483 77.922869,66.0006621 C77.922869,70.7181241 77.0189241,74.7752828 75.2180966,78.1897931 C73.3960828,81.6466759 70.9172966,84.4503172 67.8629517,86.6113103 C64.7838897,88.7934897 61.2457931,90.3930483 57.2839724,91.4347034 C53.3645241,92.4763586 49.2967724,92.9989517 45.1301517,92.9989517 L0.0600275862,92.9989517 L0.0600275862,0.00915862069 L43.9013517,0.00915862069 L43.9013517,0.00915862069 Z\"></path> <path d=\"M128.360166,41.4776276 C126.160331,39.0447448 122.438621,37.727669 117.89771,37.727669 C114.942234,37.727669 112.495228,38.2255448 110.539034,39.2389517 C108.625214,40.2382345 107.053903,41.4846897 105.856883,42.950069 C104.663393,44.4401655 103.847724,46.0114759 103.374566,47.6922483 C102.901407,49.3306483 102.618924,50.8172138 102.530648,52.1307586 L132.622124,52.1307586 C132.180745,47.4132966 130.567062,43.9281655 128.360166,41.4776276 L128.360166,41.4776276 Z M107.1104,76.851531 C109.878731,79.5563034 113.882924,80.9192828 119.070014,80.9192828 C122.798786,80.9192828 126.022621,79.9764966 128.727393,78.0944552 C131.407448,76.2194759 133.038786,74.2103172 133.670841,72.1270069 L149.955972,72.1270069 C147.339476,80.230731 143.367062,86.0180966 137.946924,89.4996966 C132.593876,92.9989517 126.061462,94.7432828 118.452083,94.7432828 C113.148469,94.7432828 108.37451,93.8817103 104.091366,92.1938759 C99.8082207,90.4813241 96.2277517,88.0802207 93.2157793,84.9517241 C90.2814897,81.8091034 88.0039724,78.0944552 86.3796966,73.7336276 C84.7730759,69.3939862 83.9609379,64.5882483 83.9609379,59.3799724 C83.9609379,54.3447172 84.8048552,49.6413793 86.4467862,45.2946759 C88.1275586,40.9338483 90.4474483,37.1697655 93.4982621,34.0130207 C96.559669,30.8386207 100.186041,28.3351172 104.409159,26.5060414 C108.635807,24.6804966 113.293241,23.7659586 118.452083,23.7659586 C124.147641,23.7659586 129.136993,24.8605793 133.413076,27.0957241 C137.675034,29.2955586 141.167228,32.2792828 143.914372,36.0151172 C146.657986,39.7474207 148.610648,44.0129103 149.832386,48.793931 C151.04,53.5714207 151.467255,58.5607724 151.117683,63.7867034 L102.530648,63.7867034 C102.530648,69.1079724 104.331476,74.1467586 107.1104,76.851531 L107.1104,76.851531 Z\"></path> <path d=\"M177.385048,0.00915862069 L177.385048,35.072331 L177.808772,35.072331 C180.15691,31.1705379 183.12651,28.3351172 186.7776,26.5766621 C190.421628,24.8040828 193.977379,23.9283862 197.441324,23.9283862 C202.381241,23.9283862 206.427807,24.5780966 209.588083,25.9163586 C212.75189,27.2793379 215.255393,29.1225379 217.088,31.5201103 C218.885297,33.9070897 220.156469,36.8201931 220.901517,40.2523586 C221.632441,43.6774621 222.010262,47.455669 222.010262,51.6222897 L222.010262,92.9989517 L203.426428,92.9989517 L203.426428,54.9803034 C203.426428,49.4365793 202.561324,45.2699586 200.838179,42.544 C199.111503,39.8145103 196.046566,38.444469 191.62571,38.444469 C186.625766,38.444469 183.009986,39.9592828 180.77131,42.950069 C178.490262,45.9408552 177.385048,50.8631172 177.385048,57.7133241 L177.385048,92.9989517 L158.808276,92.9989517 L158.808276,0.00915862069 L177.385048,0.00915862069\"></path> <path d=\"M271.614234,61.7210483 C270.463117,62.1024 269.188414,62.4237241 267.874869,62.7026759 C266.518952,62.9604414 265.103007,63.1687724 263.634097,63.3523862 C262.17931,63.5289379 260.682152,63.7302069 259.230897,63.9915034 C257.846731,64.2633931 256.462566,64.6023724 255.14549,65.0437517 C253.803697,65.4816 252.627862,66.0642207 251.660359,66.7986759 C250.657545,67.5437241 249.859531,68.4759172 249.248662,69.5952552 C248.655448,70.7181241 248.337655,72.1764414 248.337655,73.8995862 C248.337655,75.5450483 248.655448,76.9327448 249.248662,78.073269 C249.859531,79.2032 250.657545,80.0859586 251.706262,80.7392 C252.751448,81.3924414 253.976717,81.8514759 255.339697,82.1057103 C256.723862,82.381131 258.153931,82.483531 259.61931,82.483531 C263.256276,82.483531 266.059917,81.8797241 268.058483,80.6685793 C270.046455,79.4503724 271.543614,77.9955862 272.479338,76.3006897 C273.432717,74.6057931 274.008276,72.8967724 274.195421,71.1736276 C274.439062,69.4398897 274.548524,68.0416 274.548524,66.9928828 L274.548524,60.0755862 C273.746979,60.7853241 272.804193,61.3326345 271.614234,61.7210483 L271.614234,61.7210483 Z M235.2128,35.5207724 C237.094841,32.6571034 239.520662,30.3372138 242.472607,28.6034759 C245.424552,26.8520828 248.722538,25.6197517 252.430124,24.8817655 C256.123586,24.1225931 259.817048,23.7659586 263.567007,23.7659586 C266.939145,23.7659586 270.350124,23.9990069 273.863503,24.4792276 C277.320386,24.9559172 280.480662,25.8916414 283.347862,27.2864 C286.211531,28.6882207 288.545545,30.6055724 290.353434,33.1090759 C292.186041,35.5490207 293.114703,38.854069 293.114703,42.950069 L293.114703,78.0414897 C293.114703,81.0923034 293.298317,83.9912828 293.623172,86.7666759 C293.9904,89.5667862 294.940248,91.6677517 295.837131,93.0448552 L276.946097,92.9989517 C276.391724,92.1938759 275.93269,90.9332966 275.717297,89.8351448 C275.498372,88.7617103 275.346538,87.6564966 275.261793,86.5230345 C272.320441,89.5667862 268.870621,91.7065931 264.852303,92.928331 C260.865766,94.1324138 256.801545,94.7432828 252.627862,94.7432828 C249.428745,94.7432828 246.448552,94.3372138 243.659034,93.5533241 C240.91189,92.7694345 238.471945,91.5547586 236.392166,89.9128276 C234.301793,88.2391172 232.695172,86.162869 231.522869,83.6487724 C230.357628,81.1205517 229.757352,78.1121103 229.757352,74.6375724 C229.757352,70.802869 230.445903,67.6461241 231.805352,65.1744 C233.12949,62.7026759 234.849103,60.7147034 236.999503,59.2422621 C239.114593,57.7592276 241.543945,56.6434207 244.294621,55.9160276 C247.020579,55.1815724 249.78891,54.5742345 252.532524,54.1469793 C255.31851,53.7197241 258.030345,53.3736828 260.738648,53.1053241 C263.454014,52.8404966 265.805683,52.4626759 267.906648,51.9330207 C269.979366,51.4174897 271.638952,50.6336 272.857159,49.6413793 C274.054179,48.6456276 274.629738,47.1979034 274.548524,45.2699586 C274.548524,43.2784552 274.195421,41.6894897 273.556303,40.5030621 C272.913655,39.3342897 272.045021,38.4338759 270.982179,37.7771034 C269.89109,37.120331 268.66229,36.6895448 267.246345,36.4600276 C265.805683,36.2516966 264.280276,36.1351724 262.652469,36.1351724 C259.033159,36.1351724 256.16949,36.9402483 254.139145,38.4868414 C252.052303,40.0793379 250.851752,42.6993655 250.480993,46.3575172 L231.928938,46.3575172 C232.197297,41.9896276 233.270731,38.3844414 235.2128,35.5207724 L235.2128,35.5207724 Z\"></path> <path d=\"M320.850979,25.6868414 L320.850979,35.072331 L321.26411,35.072331 C323.605186,31.1705379 326.624221,28.3351172 330.374179,26.5766621 C334.092359,24.8040828 337.944717,23.9283862 341.850041,23.9283862 C346.811145,23.9283862 350.882428,24.5780966 354.028579,25.9163586 C357.231228,27.2793379 359.720607,29.1225379 361.524966,31.5201103 C363.375228,33.9070897 364.6464,36.8201931 365.387917,40.2523586 C366.136497,43.6774621 366.507255,47.455669 366.507255,51.6222897 L366.507255,92.9989517 L347.916359,92.9989517 L347.916359,54.9803034 C347.916359,49.4365793 347.044193,45.2699586 345.310455,42.544 C343.552,39.8145103 340.518841,38.0631172 336.066207,38.0631172 C331.034483,38.0631172 327.369269,39.9592828 325.116469,42.950069 C322.849545,45.9408552 321.726676,50.8631172 321.726676,57.7133241 L321.726676,92.9989517 L303.337048,92.9989517 L303.337048,25.6868414 L320.850979,25.6868414\"></path> <path d=\"M407.657931,37.727669 C404.6848,37.727669 402.230731,38.3844414 400.256883,39.7474207 C398.240662,41.106869 396.5952,42.8300138 395.338152,44.9662897 C394.077572,47.0884414 393.205407,49.4365793 392.665159,52.0071724 C392.160221,54.5742345 391.877738,57.1165793 391.877738,59.6448 C391.877738,62.0882759 392.160221,64.563531 392.665159,67.0917517 C393.205407,69.6058483 394.0352,71.8763034 395.207503,73.9454897 C396.397462,75.9723034 397.979366,77.6389517 399.977931,78.9560276 C401.965903,80.2660414 404.384662,80.9192828 407.255393,80.9192828 C411.708028,80.9192828 415.119007,79.6763586 417.509517,77.2152276 C419.889434,74.7399724 421.361876,71.4137379 421.983338,67.2471172 L439.84331,67.2471172 C438.618041,76.1771034 435.143503,82.9990621 429.426759,87.7024 C423.688828,92.3739586 416.340745,94.7432828 407.393103,94.7432828 C402.336662,94.7432828 397.742786,93.8817103 393.505545,92.1938759 C389.275366,90.4813241 385.684303,88.1225931 382.725297,85.0788414 C379.76629,82.0280276 377.471117,78.4016552 375.790345,74.1856 C374.148414,69.9624828 373.322152,65.3262345 373.322152,60.2945103 C373.322152,55.0827034 374.088386,50.227531 375.610262,45.7395862 C377.125076,41.2692966 379.363752,37.3957517 382.347476,34.1472 C385.302952,30.8774621 388.918731,28.3351172 393.194814,26.5060414 C397.453241,24.6804966 402.319007,23.7659586 407.781517,23.7659586 C411.778648,23.7659586 415.616883,24.3062069 419.324469,25.3160828 C423.003807,26.3471448 426.312386,27.9396414 429.214897,30.0759172 C432.124469,32.198069 434.507917,34.8428138 436.333462,37.9960276 C438.137821,41.1492414 439.168883,44.9274483 439.454897,49.2459034 L421.319503,49.2459034 C420.118952,41.5623724 415.563917,37.727669 407.657931,37.727669\"></path> <path d=\"M98.7489103,6.24849655 L136.442703,6.24849655 L136.442703,15.4256552 L98.7489103,15.4256552 L98.7489103,6.24849655 Z\"></path> <path d=\"M489.12949,41.4776276 C486.901407,39.0447448 483.151448,37.727669 478.667034,37.727669 C475.71509,37.727669 473.261021,38.2255448 471.269517,39.2389517 C469.352166,40.2382345 467.600772,41.4846897 466.424938,42.950069 C465.249103,44.4401655 464.405186,46.0114759 463.914372,47.6922483 C463.476524,49.3306483 463.169324,50.8172138 463.08811,52.1307586 L493.405572,52.1307586 C492.911228,47.4132966 491.336386,43.9281655 489.12949,41.4776276 L489.12949,41.4776276 Z M467.650207,76.851531 C470.429131,79.5563034 474.624,80.9192828 479.849931,80.9192828 C483.571641,80.9192828 486.788414,79.9764966 489.475531,78.0944552 C492.162648,76.2194759 493.829297,74.2103172 494.42251,72.1270069 L510.707641,72.1270069 C508.105269,80.230731 504.108138,86.0180966 498.72331,89.4996966 C493.349076,92.9989517 486.84491,94.7432828 479.207283,94.7432828 C473.889545,94.7432828 469.097931,93.8817103 464.846566,92.1938759 C460.570483,90.4813241 456.986483,88.0802207 453.988634,84.9517241 C451.022566,81.8091034 448.748579,78.0944552 447.131366,73.7336276 C445.524745,69.3939862 444.726731,64.5882483 444.726731,59.3799724 C444.726731,54.3447172 445.552993,49.6413793 447.198455,45.2946759 C448.865103,40.9338483 451.234428,37.1697655 454.267586,34.0130207 C457.343117,30.8386207 460.93771,28.3351172 465.150234,26.5060414 C469.380414,24.6804966 474.07669,23.7659586 479.207283,23.7659586 C484.895779,23.7659586 489.906317,24.8605793 494.140028,27.0957241 C498.412579,29.2955586 501.922428,32.2792828 504.648386,36.0151172 C507.392,39.7474207 509.365848,44.0129103 510.576993,48.793931 C511.770483,53.5714207 512.229517,58.5607724 511.887007,63.7867034 L463.08811,63.7867034 C463.08811,69.1079724 464.864221,74.1467586 467.650207,76.851531 L467.650207,76.851531 Z\"></path> </g> </svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>");
  };

  if (data.keyword) {
    el.insertAdjacentHTML('beforeEnd', inspi_tpl({
      keyword: data.keyword
    }));
  }
});

/***/ }),

/***/ "./resources/js/utils/adds.js":
/*!************************************!*\
  !*** ./resources/js/utils/adds.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Alternative to the `.add` method. 
 * You can add multiple string at once
 * @param  {Object} me  Target
 * @param  {String} str String you want to add
 * @return {String}     
 */
function adds(me, str) {
  str = str.split(' ');
  str.forEach(function (item) {
    me.add(item);
  });
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (adds);

/***/ }),

/***/ "./resources/js/utils/find.js":
/*!************************************!*\
  !*** ./resources/js/utils/find.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Equivalent to jQuery's $.fn.find()
 * @param  {Node} 	parent 	Parent Node
 * @param  {String} query  	Query string
 * @return {Node}        	DOM Node
 */
function find(parent, query) {
  return parent.querySelector(query);
}

/* harmony default export */ __webpack_exports__["default"] = (find);

/***/ }),

/***/ "./resources/js/utils/finds.js":
/*!*************************************!*\
  !*** ./resources/js/utils/finds.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Equivalent to jQuery's $.fn.find()
 * @param  {Node} 	parent 	Parent Node
 * @param  {String} query  	Query string
 * @return {Node}        	DOM Node
 */
function finds(parent, query) {
  return parent.querySelectorAll(query);
}

/* harmony default export */ __webpack_exports__["default"] = (finds);

/***/ }),

/***/ "./resources/js/utils/full-url-with-query.js":
/*!***************************************************!*\
  !*** ./resources/js/utils/full-url-with-query.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obj_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj-extend */ "./resources/js/utils/obj-extend.js");
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}


/**
 * Laravel-like Request's fullUrlWithQuery method
 * @param  {Object} newQuery New query
 * @return {String}          Generated URL
 */

function fullUrlWithQuery(newQuery) {
  // get current URL params
  var params = window.location.search;
  if (params.substr(0, 1) === '?') params = params.substr(1, params.length);
  if (params) params = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');else params = {};

  if (newQuery) {
    // if object given
    if (_typeof(newQuery) === 'object' && Object.prototype.toString.call(newQuery) !== '[object Array]') {
      // then extend with current URL params
      params = Object(_obj_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(params, newQuery);
    } else {
      // if array given
      if (Object.prototype.toString.call(newQuery) === '[object Array]') {
        // then delete keys from object
        newQuery.forEach(function (q) {
          delete params[q];
        });
      } else {
        return console.warn('Not valid datatype; value given:', newQuery);
      }
    }
  }

  params = new URLSearchParams(params).toString();
  return params ? '?' + params : '';
}

/* harmony default export */ __webpack_exports__["default"] = (fullUrlWithQuery);

/***/ }),

/***/ "./resources/js/utils/get-hostname.js":
/*!********************************************!*\
  !*** ./resources/js/utils/get-hostname.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get hostname from the URL string
 * @param  {String} url Target string
 * @return {String}     The hostname
 */
function getHostname(url) {
  var a = document.createElement('a');
  a.href = url;
  return a.hostname;
}

/* harmony default export */ __webpack_exports__["default"] = (getHostname);

/***/ }),

/***/ "./resources/js/utils/is-video.js":
/*!****************************************!*\
  !*** ./resources/js/utils/is-video.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Is this video?
 * @param  {String}  str The string to be tested
 * @return {Boolean}     
 */
function isVideo(str) {
  return str.indexOf('.mp4') > -1 ? true : false;
}

/* harmony default export */ __webpack_exports__["default"] = (isVideo);

/***/ }),

/***/ "./resources/js/utils/obj-extend.js":
/*!******************************************!*\
  !*** ./resources/js/utils/obj-extend.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Equvalent to jQuery's $.extends()
 * @param  {Object} out Object you want to extend
 * @return {Object}     Extended object
 */
function objExtend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i]) continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
    }
  }

  return out;
}

;
/* harmony default export */ __webpack_exports__["default"] = (objExtend);

/***/ }),

/***/ "./resources/js/utils/removes.js":
/*!***************************************!*\
  !*** ./resources/js/utils/removes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Alternative to the `.remove` method. 
 * You can remove multiple string at once
 * @param  {Object} me  Target
 * @param  {String} str String you want to remove
 * @return {String}     
 */
function removes(me, str) {
  str = str.split(' ');
  str.forEach(function (item) {
    me.remove(item);
  });
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (removes);

/***/ }),

/***/ "./resources/js/utils/str2dom.js":
/*!***************************************!*\
  !*** ./resources/js/utils/str2dom.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert HTML string to DOM node
 * @param  {String} str Raw HTML string
 * @return {Node}     DOM Node
 */
function str2dom(str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  return div.children[0];
}

/* harmony default export */ __webpack_exports__["default"] = (str2dom);

/***/ }),

/***/ "./resources/js/utils/wrap-node.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/wrap-node.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Wrap element
 * @param {Object} 	wrap  	Parent object
 * @param {Node} 	element Child element
 * @return {Node} 			Wrapped element
 */
function wrapNode(wrap, element) {
  var wrapping = document.createElement(wrap.tag);
  Object.keys(wrap.attrs).forEach(function (key) {
    wrapping[key] = wrap.attrs[key];
  });
  wrapping.appendChild(element);
  return wrapping;
}

/* harmony default export */ __webpack_exports__["default"] = (wrapNode);

/***/ }),

/***/ 10:
/*!**************************************!*\
  !*** multi ./resources/js/single.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rizalfakhri/Code/kd3/resources/js/single.js */"./resources/js/single.js");


/***/ })

/******/ });