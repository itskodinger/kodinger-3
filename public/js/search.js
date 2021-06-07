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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

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
    }
    /******/
    ])
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

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
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
  USER: {
    template: 'user',
    shimmer: 'user'
  },
  POST: {
    template: 'post',
    shimmer: 'post'
  },
  MARKDOWN: {
    template: 'markdown',
    shimmer: 'post'
  },
  DISCOVER: {
    template: 'post',
    shimmer: 'discover'
  }
};
/**
 * Private API
 * @type {Object}
 */

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
      icon: '<svg class="w-4 fill-current mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>',
      name: 'Telegram',
      "class": 'bg-telegram'
    }, {
      uri: 'https://api.whatsapp.com/?text=',
      icon: '<svg class="w-4 fill-current mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg>',
      name: 'WhatsApp',
      "class": 'bg-whatsapp'
    }, {
      action: 'copy',
      icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g></svg>',
      name: 'Copy Link',
      "class": 'text-gray-600 border border-gray-400 hover:bg-gray-200 cursor-pointer',
      rm_class: 'shadow-md mb-3'
    }]
  },

  /**
   * Element Interaction APIs
   * @type {Object}
   */
  interactions: {
    syntax: function syntax(element) {
      if (window.hljs) {
        element.querySelectorAll('pre code').forEach(function (block) {
          hljs.highlightBlock(block);
        });
      }
    },

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
        image.style = 'filter: blur(20px);';
        image.addEventListener('load', function (e) {
          image = Object(_utils_wrap_node__WEBPACK_IMPORTED_MODULE_1__["default"])({
            tag: 'div',
            attrs: {
              className: 'overflow-hidden'
            }
          }, image);
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
        var cr = new window.tns({
          container: Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.carousel'),
          controls: false,
          nav: true,
          items: 1,
          autoHeight: true,
          loop: false,
          mouseDrag: true
        });
        var firstImg = Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.carousel img:first-child');
        firstImg.addEventListener('load', function () {
          // just make sure
          setTimeout(function () {
            return cr.updateSliderHeight();
          }, 500);
        });
        cr.events.on('indexChanged', function () {
          var currentSlide = cr.getInfo().index;
          var captions = Object(_utils_finds__WEBPACK_IMPORTED_MODULE_8__["default"])(element, '[data-index]');

          if (captions.length > 0) {
            captions.forEach(function (el) {
              return el.classList.add('hidden');
            });
            Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '[data-index="' + currentSlide + '"]').classList.remove('hidden');
          }
        });
        Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.prev').addEventListener('click', function () {
          return cr.goTo('prev');
        });
        Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.next').addEventListener('click', function () {
          return cr.goTo('next');
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
        var calc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span svg')) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, ' span svg').remove();

        if (is_saved) {
          Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_unsave));
          if (calc) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-save-count').innerText = parseInt(Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-save-count').innerText) + 1;
        } else {
          Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_save));
          if (calc) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-save-count').innerText = parseInt(Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-save-count').innerText) - 1;
        }
      }

      Object(_utils_finds__WEBPACK_IMPORTED_MODULE_8__["default"])(parent, '[data-save]').forEach(function (item) {
        var is_saved = typeof item.dataset.saved == 'string' ? true : false;
        toggle_icon_save(is_saved, item);
        item.addEventListener('click', function (e) {
          toggle_icon_save(is_saved, item);
          item.classList.add('pointer-events-none');
          if (Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span svg')) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span svg').remove();
          Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_spin));

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
            Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span svg').remove();
            item.classList.remove('pointer-events-none');
          }).then(function (res) {
            is_saved = res.saved;
            item.dataset.saved = res.saved;
            toggle_icon_save(is_saved, item, true);
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
          ic_spin = '<svg class="stroke-current spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

      function toggle_icon_love(is_loved, item) {
        var calc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (is_loved) {
          Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_unlove));
          if (calc) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-love-count').innerText = parseInt(Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-love-count').innerText) + 1;
        } else {
          Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, 'span').append(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_2__["default"])(ic_love));
          if (calc) Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-love-count').innerText = parseInt(Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(item, '.post-love-count').innerText) - 1;
        }
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
            toggle_icon_love(is_loved, item, true);
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
        var share_btn = '<a href="" target="_blank" class="text-white shadow-md mb-3 py-3 px-4 flex justify-center items-center rounded"></a>'; // show all the buttons from the `uris` key (see the uris var form destructuring object above)

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
          if (cjs) cjs.destroy(); // let share-modal-dialog sleep

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
      var tpl = "\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<svg width=\"300\" class=\"inline-block\" id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\"><defs><style>.cls-1{fill:#e2e2e2;}.cls-2{fill:#f3f3f3;}.cls-3{fill:#d37c59;}.cls-4{fill:#de8e68;}.cls-5{fill:#56cad8;}.cls-6{fill:#74d5de;}.cls-7{fill:#fed385;}.cls-8{fill:#dc8e6c;}.cls-9{fill:#fb836d;}.cls-10{fill:#d3d3d3;}.cls-11,.cls-13,.cls-14,.cls-15,.cls-16{fill:none;}.cls-11{stroke:#d3d3d3;stroke-miterlimit:10;}.cls-11,.cls-14,.cls-15{stroke-width:3.69px;}.cls-12{fill:#fed892;}.cls-13,.cls-14,.cls-16{stroke:#fed385;}.cls-13,.cls-14,.cls-15,.cls-16{stroke-linecap:round;stroke-linejoin:round;}.cls-13{stroke-width:3.84px;}.cls-15{stroke:#74d5de;}.cls-16{stroke-width:2.39px;}</style></defs><path class=\"cls-1\" d=\"M711.1,528.1c0-21.86-47-74.85-84.67-74.85-28.93,0-29.4,15.3-57.59,15.3-43.46,0-75.71-72.66-159.29-72.66-89.05,0-205.41,83.58-205.41,149.14C204.14,638.91,711.1,661.41,711.1,528.1Z\"/><path class=\"cls-2\" d=\"M935.51,849.68c1-102,2.6-265.85,2.6-290.1,0-35.58-52.84-142.15-145.27-142.15-101.26,0-151.3,116.21-217.58,116.21-60.75,0-65.54-30.76-140.74-30.76-49,0-149.82,62.8-149.82,127l67.11,219.75Z\"/><ellipse class=\"cls-3\" cx=\"602.59\" cy=\"679.96\" rx=\"11.73\" ry=\"5.25\" transform=\"translate(-105.6 1249.11) rotate(-87.24)\"/><path class=\"cls-3\" d=\"M590.19,739.68c-.2-1.94,4.32-42.23,7.92-55a16,16,0,0,1,6.71-.94l-.34,39.7-5,18.67Z\"/><polygon points=\"620.7 683.58 589.26 686.18 588.26 679.96 618.52 670.39 620.7 683.58\"/><rect class=\"cls-4\" x=\"544.3\" y=\"999.24\" width=\"13.77\" height=\"11.65\"/><rect class=\"cls-4\" x=\"586.9\" y=\"1001.06\" width=\"13.77\" height=\"11.65\"/><path class=\"cls-5\" d=\"M542.87,805V999.88H559l18.54-104.26S580.09,839.22,542.87,805Z\"/><path class=\"cls-6\" d=\"M596,801.16c.45,5.62,6.06,107.88,6.06,107.88v93.11l-16.55,1.77-10.64-99-32-99.92C547.71,802.34,583.16,797.33,596,801.16Z\"/><path class=\"cls-7\" d=\"M566.51,715.47c31.79,0,33.3,80.83,29.52,85.69s-49,8.17-53.16,3.83S526.9,715.47,566.51,715.47Z\"/><ellipse class=\"cls-4\" cx=\"607.86\" cy=\"679.96\" rx=\"11.73\" ry=\"5.25\" transform=\"translate(-100.59 1254.37) rotate(-87.24)\"/><polygon points=\"585.61 1010.89 585.61 1022.54 618.35 1022.54 618.35 1018.3 601.32 1010.89 585.61 1010.89\"/><polygon points=\"543.87 1009.05 543.87 1020.7 576.61 1020.7 576.61 1016.46 559.58 1009.05 543.87 1009.05\"/><rect x=\"585.55\" y=\"681.34\" width=\"3.86\" height=\"3.86\" transform=\"translate(-98.87 99.39) rotate(-8.92)\"/><path class=\"cls-3\" d=\"M568.84,722.5c0,2.67-12.41,3-12.41,0V696h12.41Z\"/><ellipse class=\"cls-8\" cx=\"568.46\" cy=\"688.32\" rx=\"13.03\" ry=\"19.89\"/><path class=\"cls-9\" d=\"M545.77,680.12c0-6.13,2.67-10,4.84-11.23,4.19-2.4,5.94-1.33,10.16-3.2,4.57-2,8.49-7.84,13.84-7.84,5,0,4.55,2.84,7.94,3.68,2,.49,13.36-2.12,13.36,5.23,0,11.32-12.57,12.24-15.48,13.69a37.43,37.43,0,0,0-1.52-3.83c-2.29,2.36-10.58,4-11.92,4.53-3.1,1.28-4.58,6.13-4.58,9.3s-2.87,3.18-3.59,3.18C552.19,693.63,545.77,689.38,545.77,680.12Z\"/><circle class=\"cls-8\" cx=\"556.67\" cy=\"691.67\" r=\"4.33\"/><rect class=\"cls-10\" x=\"512.81\" y=\"718.34\" width=\"25.14\" height=\"84.61\" rx=\"12.57\" ry=\"12.57\"/><ellipse class=\"cls-11\" cx=\"544.89\" cy=\"751.24\" rx=\"30.38\" ry=\"32.89\"/><path class=\"cls-4\" d=\"M576.84,736.83c2.53,0,15.29.53,20.48,2.4.4-2.53,2.66-38.77,6.51-50.91,1.47-1.62,7.45-1.43,7.45,0s8.51,60.88,0,67.93-37.37-2.4-38.56-3.33S576.84,736.83,576.84,736.83Z\"/><path class=\"cls-12\" d=\"M549.66,734.69c2.82-11.48,28.36-1.93,30.67.69,2.77,3.14-2.18,20.84-6,21.66C568.1,758.39,546,749.58,549.66,734.69Z\"/><polygon class=\"cls-12\" points=\"266.38 341.65 142.64 849.68 390.13 849.68 266.38 341.65\"/><polygon class=\"cls-5\" points=\"169.62 341.65 45.87 893.9 293.36 893.9 169.62 341.65\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"891.44\" x2=\"170.29\" y2=\"395.36\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"558.95\" x2=\"197.18\" y2=\"529.72\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"698.94\" x2=\"210.7\" y2=\"655.02\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"844.98\" x2=\"233.14\" y2=\"776.66\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"558.95\" x2=\"143.4\" y2=\"529.72\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"698.94\" x2=\"129.89\" y2=\"655.02\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"844.98\" x2=\"107.44\" y2=\"776.66\"/><rect class=\"cls-6\" x=\"190.5\" y=\"734.34\" width=\"135.39\" height=\"197.16\" rx=\"67.69\" ry=\"67.69\"/><line class=\"cls-14\" x1=\"258.19\" y1=\"982.94\" x2=\"258.19\" y2=\"795.85\"/><path class=\"cls-14\" d=\"M258.19,875.41c37,0,37-22.28,37-56\"/><path class=\"cls-14\" d=\"M258.19,841.33c-25.65,0-25.65-15.47-25.65-38.84\"/><path class=\"cls-7\" d=\"M1152.37,849.68V667.57a81.52,81.52,0,0,0-81.28-81.28h0a81.65,81.65,0,0,0-13.07,1.06V377.78a55.64,55.64,0,0,0-55.63-55.64h0a55.64,55.64,0,0,0-55.64,55.64v44.86a80.64,80.64,0,0,0-26-4.31h0a81.52,81.52,0,0,0-81.28,81.29V649H804.08a55.7,55.7,0,0,0-55.53,55.53V833.86a55.18,55.18,0,0,0,2.32,15.82Z\"/><path class=\"cls-15\" d=\"M1000.16,740.85c91.61,0,91.61-41,91.61-103\"/><path class=\"cls-15\" d=\"M1000.25,795.48c-50.4,0-50.4-22.56-50.4-56.67\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"849.68\" x2=\"1000.16\" y2=\"364.17\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"637.85\" x2=\"949.94\" y2=\"587.62\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"534.21\" x2=\"1030.55\" y2=\"503.83\"/><path class=\"cls-2\" d=\"M750.49,341.65a47.18,47.18,0,0,0-86.25-35.55,37.43,37.43,0,0,0-52.84,34.1c0,.49,0,1,0,1.45Z\"/><path class=\"cls-2\" d=\"M291.91,268.28a47.18,47.18,0,0,1,86.25-35.55A37.4,37.4,0,0,1,431,266.83c0,.48,0,1,0,1.45Z\"/><path class=\"cls-6\" d=\"M924.33,936.06c-50.28,0-91,21.47-91,48h182.05C1015.35,957.53,974.6,936.06,924.33,936.06Z\"/><path class=\"cls-9\" d=\"M502.76,1006.93c-12.55,0-22.73,8.76-22.73,19.57H525.5C525.5,1015.69,515.32,1006.93,502.76,1006.93Z\"/><path class=\"cls-9\" d=\"M833.3,902.44c-12.56,0-22.73,13-22.73,29.06H856C856,915.45,845.85,902.44,833.3,902.44Z\"/><path class=\"cls-9\" d=\"M120.87,974.57c-20,0-36.16,6.51-36.16,14.53H157C157,981.08,140.84,974.57,120.87,974.57Z\"/><path class=\"cls-9\" d=\"M1030.55,974.57c-20,0-36.16,6.51-36.16,14.53h72.31C1066.7,981.08,1050.52,974.57,1030.55,974.57Z\"/><rect class=\"cls-6\" x=\"838.22\" y=\"746.55\" width=\"87.67\" height=\"127.66\" rx=\"43.83\" ry=\"43.83\"/><line class=\"cls-16\" x1=\"882.06\" y1=\"907.53\" x2=\"882.06\" y2=\"786.38\"/><path class=\"cls-16\" d=\"M882.06,837.9C906,837.9,906,823.47,906,801.64\"/><path class=\"cls-16\" d=\"M882.06,815.83c-16.61,0-16.61-10-16.61-25.16\"/><line class=\"cls-14\" x1=\"331.71\" y1=\"947.65\" x2=\"412.75\" y2=\"947.65\"/><line class=\"cls-14\" x1=\"668.4\" y1=\"893.9\" x2=\"722.14\" y2=\"893.9\"/><line class=\"cls-14\" x1=\"627.87\" y1=\"907.53\" x2=\"681.62\" y2=\"907.53\"/><line class=\"cls-14\" x1=\"116.88\" y1=\"918.64\" x2=\"170.63\" y2=\"918.64\"/><line class=\"cls-14\" x1=\"748.55\" y1=\"999.24\" x2=\"824.1\" y2=\"999.24\"/></svg>\n\t\t\t\t\t<h2 class=\"text-xl font-semibold\">Ya ampun! Data tidak ditemukan</h2>\n\t\t\t\t\t<p class=\"mt-2 leading-loose text-gray-600\">Apa yang kamu cari sehingga data tidak ditemukan? Tapi, sepertinya ini salah kami memiliki konten yang terlalu sedikit \uD83D\uDE3F.</p>\n\t\t\t\t</div>\n\t\t\t";
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
      var tpl = "\n\t    \t\t<div class=\"bg-white rounded border border-gray-200 w-full\">\n\t    \t\t\t<div class=\"pb-8 pt-6 px-6\">\n\t    \t\t\t\t<div class=\"float-right\">\n\t    \t\t\t\t\t<a target=\"_blank\" ".concat(_community.website ? "href=\"".concat(_community.website, "\" ") : '', "class=\"").concat(!_community.website ? 'pointer-events-none opacity-50 ' : '', "flex leading-relaxed items-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 border border-gray-200 uppercase text-sm font-semibold tracking-wider py-1 px-3 rounded-full\">\n\t    \t\t\t\t\t\tWebsite\n\t    \t\t\t\t\t\t<svg class=\"ml-1 w-3 fill-current\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"arrow-forward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z\"/></g></g></svg>\n\t    \t\t\t\t\t</a>\n\t    \t\t\t\t</div>\n\t    \t\t\t\t<div class=\"rounded p-2 w-16 h-16 flex-shrink-0 flex items-center justify-center border\" ").concat(_community.logo_bg ? 'style="background-color: ' + _community.logo_bg + ';"' : '', ">\n\t    \t\t\t\t\t<img src=\"").concat(_community.logo, "\" alt=\"").concat(_community.name, "\" class=\"w-full\">\n\t    \t\t\t\t</div>\n\t        \t\t\t<h2 class=\"font-bold text-lg mt-4 truncate\">").concat(_community.name, "</h2>\n\t        \t\t\t<p class=\"mt-1 text-gray-600 font-light leading-relaxed h-12\">").concat(_community.short_description, "</p>\n\t    \t\t\t</div>\n\t    \t\t\t<div class=\"flex px-6 pb-6\">\n\t    \t\t\t\t<div class=\"flex items-center\">\n\t    \t\t\t\t\t<svg class=\"w-5 mr-1 fill-current text-gray-600\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"person\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z\"/></g></g></svg>\n\t    \t\t\t\t\t").concat(_community.formatted_member, "+\n\t    \t\t\t\t</div>\n\t        \t\t\t<div class=\"inline-flex ml-auto\">\n\t        \t\t\t\t").concat(_community.facebook ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.facebook, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"facebook\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z\"/></g></g></svg>\n\t        \t\t\t\t</a>") : '', "\n\n\t        \t\t\t\t").concat(_community.twitter ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.twitter, "\">\n\t\t\t\t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"twitter\"><polyline points=\"0 0 24 0 24 24 0 24\" opacity=\"0\"/><path d=\"M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20\"/></g></g></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\n\t\t\t\t\t\t\t").concat(_community.github ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.github, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1\" data-name=\"github\"/></g></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\n\t\t\t\t\t\t\t").concat(_community.telegram ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.telegram, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z\"/></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\t        \t\t\t</div>\n\t        \t\t</div>\n\t    \t\t</div>\n\t    \t");
      return tpl;
    },
    user: function user(_ref6) {
      var _user = _ref6.post,
          options = _ref6.options;
      var tpl = "\n\t    \t\t<div class=\"bg-white rounded border border-gray-200 w-full\">\n\t    \t\t\t<div class=\"py-6 px-6\">\n\t    \t\t\t\t<div class=\"flex\">\n\t    \t\t\t\t\t<img src=\"".concat(_user.the_avatar, "\" alt=\"").concat(_user.name, "\" class=\"rounded w-16 h-16 border flex-shrink-0\">\n\t\t    \t\t\t\t<div class=\"ml-4 overflow-hidden\">\n\t\t\t        \t\t\t<h2 class=\"font-bold truncate text-lg\">").concat(_user.name, "</h2>\n\t\t\t        \t\t\t<p class=\"mt-1 text-gray-600\">@").concat(_user.username, "</p>\n\t\t        \t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t<div class=\"flex -mx-2 mt-6 border-t border-b border-gray-200 py-2\">\n\t        \t\t\t\t<div class=\"w-6/12 text-center px-2\">\n\t        \t\t\t\t\t<div class=\"text-xs uppercase tracking-wider font-semibold text-gray-600\">Posts</div>\n\t        \t\t\t\t\t<div class=\"text-xl\">").concat(_user.posts.length, "</div>\n\t        \t\t\t\t</div>\n\t        \t\t\t\t<div class=\"w-6/12 text-center px-2\">\n\t        \t\t\t\t\t<div class=\"text-xs uppercase tracking-wider font-semibold text-gray-600\">Diskusi</div>\n\t        \t\t\t\t\t<div class=\"text-xl\">").concat(_user.comments.length, "</div>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\n\t        \t\t\t<a class=\"block text-center mt-4 rounded py-2 text-white bg-indigo-600 hover:bg-indigo-700\" href=\"").concat(routes.single + _user.username, "\">Lihat Profile</a>\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t    \t");
      return tpl;
    },

    /**
     * Community shimmer template
     * @return {String}           Interpolated template string
     */
    communityShimmer: function communityShimmer() {
      var tpl = "\n\t\t    \t<div class=\"w-full\">\n\t\t    \t\t<div class=\"bg-white rounded border border-gray-200\">\n\t\t    \t\t\t<div class=\"pb-8 pt-6 px-6\">\n\t\t    \t\t\t\t<div class=\"float-right\">\n\t\t    \t\t\t\t\t<div class=\"flex py-1 px-3 rounded-full bg-gray-200 w-16 h-6\">\n\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<div class=\"rounded p-2 w-16 h-16 flex-shrink-0 bg-gray-100\"></div>\n\t\t        \t\t\t<h2 class=\"mt-4 w-32 h-6 bg-gray-200 rounded\"></h2>\n\t\t        \t\t\t<div class=\"mt-3 bg-gray-100 h-3 rounded w-full\"></div>\n\t\t        \t\t\t<div class=\"mt-2 bg-gray-100 h-3 rounded w-20\"></div>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div class=\"flex px-6 pb-6\">\n\t\t    \t\t\t\t<div class=\"flex items-center\">\n\t\t\t    \t\t\t\t<div class=\"rounded w-16 h-4 bg-gray-200\"></div>\n\t\t    \t\t\t\t</div>\n\t\t        \t\t\t<div class=\"inline-flex ml-auto\">\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100\"></div>\n\t\t        \t\t\t</div>\n\t\t        \t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t";
      return tpl;
    },
    userShimmer: function userShimmer() {
      var tpl = "\n\t\t    \t<div class=\"w-full\">\n\t\t    \t\t<div class=\"bg-white rounded border border-gray-200\">\n\t\t    \t\t\t<div class=\"pb-8 pt-6 px-6\">\n\t\t    \t\t\t\t<div class=\"flex\">\n\t\t\t    \t\t\t\t<div class=\"rounded p-2 w-16 h-16 flex-shrink-0 bg-gray-100\"></div>\n\t\t\t    \t\t\t\t<div class=\"ml-4\">\n\t\t\t\t        \t\t\t<div class=\"mt-2 w-32 h-6 bg-gray-200 rounded\"></div>\n\t\t\t\t        \t\t\t<div class=\"mt-3 bg-gray-100 h-3 rounded w-full\"></div>\n\t\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t</div>\n\t\t\t    \t\t\t<div class=\"flex -mx-2 mt-6 border-t border-b border-gray-100 py-2\">\n\t\t\t    \t\t\t\t<div class=\"w-6/12 px-2 text-center flex items-center flex-col\">\n\t\t\t    \t\t\t\t\t<div class=\"inline-block mb-2 w-20 h-4 bg-gray-100 rounded\"></div>\n\t\t\t    \t\t\t\t\t<div class=\"inline-block\"><div class=\"w-10 h-6 bg-gray-200 rounded\"></div></div>\n\t\t\t    \t\t\t\t</div>\n\t\t\t    \t\t\t\t<div class=\"w-6/12 px-2 text-center flex items-center flex-col\">\n\t\t\t    \t\t\t\t\t<div class=\"inline-block mb-2 w-20 h-4 bg-gray-100 rounded\"></div>\n\t\t\t    \t\t\t\t\t<div class=\"inline-block\"><div class=\"w-10 h-6 bg-gray-200 rounded\"></div></div>\n\t\t\t    \t\t\t\t</div>\n\t\t\t    \t\t\t</div>\n\t\t    \t\t\t\t<div class=\"mt-4 rounded w-full h-10 bg-gray-200\"></div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t";
      return tpl;
    },
    compTags: function compTags(_ref7) {
      var post = _ref7.post;
      var tpl = "\n\t\t        <div class=\"flex flex-wrap\">\n\t\t        ".concat(post.tags.map(function (tag) {
        if (tag.tag !== null) {
          return "<a class=\"mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3\" href=\"".concat(routes.search + Object(_utils_full_url_with_query__WEBPACK_IMPORTED_MODULE_7__["default"])({
            tag: tag.tag.name
          }), "\">\n\t                        #").concat(tag.tag.name, "\n\t                    </a>");
        } else {
          return '';
        }
      }).join(''), "\n\t\t        </div>\n\t\t\t");
      return tpl;
    },
    compCtas: function compCtas(_ref8) {
      var post = _ref8.post;
      var tpl = "\n\t\t\t\t<div class=\"border-t border-gray-200\">\n\t\t\t\t    <div class=\"flex w-full items-center\">\n\t\t\t\t        <a data-love ".concat(post.is_post_loved ? 'data-loved' : '', " class=\"py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" href=\"#\">\n\t\t\t\t            <span></span>\n\t\t\t\t            <div class=\"ml-2 inline-block post-love-count\">").concat(post.total_loves, "</div>\n\t\t\t\t        </a>\n\t\t\t\t        ").concat(post.type !== 'link' ? "<a class=\"py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" href=\"".concat(routes.post_single.replace(/username/g, post.user.username).replace(/slug/g, post.slug) + '#comments', "\">\n\t\t\t\t            <svg class=\"stroke-current\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg>\n\t\t\t\t            <div class=\"ml-2 inline-block post-comment-count\">").concat(post.total_comments, "</div>\n\t\t\t\t        </a>") : '', "\n\t\t\t\t        <a class=\"py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" data-save ").concat(post.is_post_saved ? 'data-saved' : '', " href=\"#\">\n\t\t\t\t        \t<span></span>\n\t\t\t\t            <div class=\"ml-2 inline-block post-save-count\">").concat(post.total_saves, "</div>\n\t\t\t\t        </a>\n\t\t\t\t        <a data-url=\"").concat(routes.post_single.replace(/username/g, post.user.username).replace(/slug/g, post.slug), "\" class=\"share-button py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" href=\"#\">\n\t\t\t\t            <svg class=\"stroke-current\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line></svg>\n\t\t\t\t        </a>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t");
      return tpl;
    },

    /**
     * General post template
     * @param  {Object} options.post    Post data
     * @param  {Object} options.options Instance options
     * @return {String}                 Interpolated template string
     */
    post: function post(_ref9) {
      var _post = _ref9.post,
          options = _ref9.options;
      var tpl = "\n\t\t\t<div class=\"bg-white rounded border border-gray-200 mb-10\">\n\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t        <a href=\"".concat(routes.single + _post.user.username, "\">\n\t\t\t            <img class=\"rounded w-12 rounded border\" src=\"").concat(_post.user.the_avatar_sm, "\">\n\t\t\t        </a>\n\t\t\t        <div class=\"ml-3\">\n\t\t\t            <h4 class=\"font-semibold\">\n\t\t\t                <a class=\"text-lg\" href=\"").concat(routes.single + _post.user.username, "\">\n\t\t\t                    ").concat(_post.user.name, "\n\t\t\t                </a>\n\t\t\t            </h4>\n\t\t\t            <div class=\"-mx-1 flex items-center text-sm text-gray-500\">\n\t\t\t                <p class=\"mx-1\">@").concat(_post.user.username, "</p>\n\t\t\t                <p class=\"mx-1\">&bull;</p>\n\t\t\t                <p class=\"mx-1 font-semibold\">").concat(_post.time, "</p>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t    </div>\n\n\t\t\t    ").concat(_post.type == 'link' ? "\n\t\t\t\t    <div class=\"md:border border-b border-t md:rounded md:mx-6\">\n\n\t\t\t\t        ".concat(_post.post_card.has_embeddable_code ? "\n\n\t\t\t\t            <div class=\"embeddable-frame\">\n\t\t\t\t                ".concat(_post.post_card.embeddable_code, "\n\t\t\t\t            </div>") : // else
      "\n\t\t\t\t        \t<a href=\"".concat(_post.post_card.url, "\" target=\"_blank\">\n\t\t\t\t        \t").concat(_post.post_card.thumbnail !== null ? "<img src=\"".concat(_post.post_card.thumbnail, "\" class=\"w-full h-64 object-cover\">") : // else
      "<img src=\"".concat(_post.post_card.default_thumbnail, "\" class=\"w-full h-64 object-scale-down\">"), "\n\t\t\t\t\t        </a>\n\t\t\t\t        "), "\n\n\t\t\t\t        <div class=\"p-4 border-t bg-gray-100\">\n\n\t\t\t\t            <h2 class=\"md:text-xl mb-2 text-base font-semibold hover:text-indigo-600\"><a target=\"_blank\" href=\"").concat(_post.post_card.url, "\">").concat(_post.post_card.title, "</a></h2>\n\n\t\t\t\t            ").concat(_post.post_card.description ? "\n\t\t\t\t                <p class=\"text-gray-600 break-all\"><a target=\"_blank\" href=\"".concat(_post.post_card.url, "\">").concat(_post.post_card.description.substr(0, 200), "</a></p>\n\t\t\t\t            ") : '', "\n\t\t\t\t            <div class=\"uppercase tracking-wider text-sm mt-3 text-teal-500 font-semibold\">").concat(_post.post_card.hostname, "</div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t    ") : "", "\n\n\t\t\t    ").concat(_post.type !== 'link' ? "\n\n\t\t\t    <div class=\"relative".concat(_post.content_object.length > 1 && options.carousel ? ' carousel-outer w-full' : '', "\">\n\t\t\t        <div class=\"").concat(_post.content_object.length > 1 && options.carousel ? 'carousel w-full' : '', "\">\n\n\t\t\t            ").concat('carousel' in options && options.carousel == false ? "<a href=\"".concat(routes.post_single.replace(/username/g, _post.user.username).replace(/slug/g, _post.slug), "\">\n\t\t\t                    <div data-blurry=\"").concat(_post.blurry_image, "\" data-src=\"").concat(!_post.is_markdown ? _post.first_slide_media : _post.cover, "\" class=\"lazy-image w-full bg-gray-200 bg-cover h-40 sm:h-64\"></div>\n\t\t\t                </a>") : // else
      _post.content_object.map(function (slide) {
        var img = slide.url;

        if (Object(_utils_is_video__WEBPACK_IMPORTED_MODULE_4__["default"])(slide.type.replace(/video\//g, ''))) {
          return "<video controls=\"\" poster=\"".concat(slide.video_thumbnail_url, "\">\n\t\t\t\t                        <source src=\"").concat(img, "\" type=\"").concat(slide.type, "\">\n\t\t\t\t                    </video>");
        } else {
          return "<img src=\"".concat(img, "\" alt=\"image\">");
        }
      }).join(""), "\n\t\t\t        </div>\n\n\t\t\t        ").concat(_post.content_object.length > 1 && options.carousel !== false ? "\n\t\t\t\t        <button class=\"prev\">&lsaquo;</button>\n\t\t\t\t        <button class=\"next\">&rsaquo;</button>" : '', "\n\t\t\t    </div>\n\t\t\t    ") : '', "\n\n\t\t\t    <div class=\"p-6 text-gray-700 leading-relaxed\">\n\t\t\t        ").concat(_post.title ? "<h2 class=\"text-2xl mb-2 text-black font-bold\"><a class=\"text-indigo-600\" href=\"".concat(routes.post_single.replace(/username/g, _post.user.username).replace(/slug/g, _post.slug), "\">\n\t\t\t\t            ").concat(_post.title, "\n\t\t\t\t        </a></h2>") : '', "\n\n\t\t\t        ").concat(!options.discover && _post.type !== 'link' && (options.truncate_content || !options.truncate_content && _post.is_single_caption) ? "<div class=\"mb-3 ".concat(options.first ? 'markdowned' : '', "\">").concat(options.truncate_content ? _post.is_markdown ? _post.content_markdown_truncated : _post.first_slide_caption_truncated : _post.first_slide_caption, "</div>") : '', "\n\n\t\t\t        ").concat(!options.discover && !options.truncate_content && !_post.is_single_caption ? _post.content_object.map(function (slide, index) {
        return "<div data-index=\"".concat(index, "\" class=\"mb-3 markdowned ").concat(index != 0 ? 'hidden' : '', "\">").concat(slide.caption || '<i>Tidak ada keterangan</i>', "</div>");
      }).join('') : '', "\n\n\t\t        \t").concat(this.compTags({
        post: _post
      }), "\n\t\t\t    </div>\n\n\t\t\t    ").concat(this.compCtas({
        post: _post
      }), "\n\t\t\t</div>");
      return tpl;
    },
    markdown: function markdown(_ref10) {
      var post = _ref10.post,
          options = _ref10.options;
      var tpl = "\n\t\t\t\t<div class=\"mb-10\">\n\t\t\t\t\t<img src=\"".concat(post.cover, "\" class=\"rounded-tl rounded-tr\" />\n\n\t\t\t\t\t<div class=\"border border-gray-200 rounded-bl rounded-br\">\n\t\t\t\t\t\t<div class=\"lg:p-10 p-6\">\n\t\t\t\t\t\t\t<h1 class=\"text-4xl font-bold\">").concat(post.title, "</h1>\n\t\t\t\t\t\t\t<div class=\"flex items-center text-gray-600 -mx-2 mt-4 mb-8 border-t border-b border-gray-200 py-4\">\n\t\t\t\t\t\t\t\t<div class=\"px-2 flex items-center\">\n\t\t\t\t\t\t\t\t\t<img class=\"w-8 h-8 rounded-full\" src=\"").concat(post.user.the_avatar, "\">\n\t\t\t\t\t\t\t\t\t<div class=\"ml-2\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"text-indigo-600 hover:text-indigo-800 font-semibold\" href=\"").concat(routes.single + post.user.username, "\">").concat(post.user.name, "</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"px-2\">&bull;</div>\n\t\t\t\t\t\t\t\t<div class=\"px-2\">").concat(post.time, "</div>\n\t\t\t\t\t\t\t\t<div class=\"px-2\">&bull;</div>\n\t\t\t\t\t\t\t\t<div class=\"px-2\">").concat(post.ert, " baca</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"prose prose-lg max-w-full mb-4\">\n\t\t\t\t\t\t\t\t").concat(post.content_markdown, "\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t        \t").concat(this.compTags({
        post: post
      }), "\n\t\t\t        \t</div>\n\t\t\t\t\t    ").concat(this.compCtas({
        post: post
      }), "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
      return tpl;
    },

    /**
     * Post shimmer template
     * @param  {String} shi_class Generated unique shimmer class
     * @return {String}           Interpolated template string
     */
    postShimmer: function postShimmer(shi_class) {
      var tpl = "\n\t\t\t\t<div class=\"".concat(shi_class, " bg-white rounded border border-gray-200 mb-10\">\n\t\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t\t\t    <div class=\"w-12 h-12 bg-gray-200 rounded\"></div>\n\t\t\t\t        <div class=\"ml-3\">\n\t\t\t\t            <div class=\"mb-3 w-32 h-4 bg-gray-200 rounded\"></div>\n\t\t\t\t            <div class=\"-mx-1 flex items-center\">\n\t\t\t\t                <div class=\"mx-1 h-2 w-12 bg-gray-100 rounded\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"bg-gray-100 w-full\" style=\"height: 470px;\">\n\t\t\t\t    </div>\n\n\n\t\t\t\t    <div class=\"p-6\">\n\t\t\t\t        <div class=\"mb-4 bg-gray-200 w-64 h-8 rounded-lg\"></div>\n\n\t\t\t\t        <div class=\"mb-3 bg-gray-100 w-full h-3 rounded\"></div>\n\t\t\t\t        <div class=\"bg-gray-100 w-40 h-3 rounded\"></div>\n\n\t\t\t\t        <div class=\"flex\">\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 mt-6 rounded-full\"></div>\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 mt-6 rounded-full ml-2\"></div>\n\t\t\t\t        </div>\n\n\t\t\t\t        <div class=\"mt-8\">\n\t\t\t\t            <div class=\"flex w-full\">\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t");
      return tpl;
    },

    /**
     * Discover shimmer template
     * @param  {String} shi_class Generated unique shimmer class
     * @return {String}           Interpolated template string
     */
    discoverShimmer: function discoverShimmer(shi_class) {
      var tpl = "\n\t\t\t\t<div class=\"".concat(shi_class, " bg-white rounded border border-gray-200 mb-10\">\n\t\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t\t\t    <div class=\"w-12 h-12 bg-gray-200 rounded\"></div>\n\t\t\t\t        <div class=\"ml-3\">\n\t\t\t\t            <div class=\"mb-3 w-32 h-4 bg-gray-200 rounded\"></div>\n\t\t\t\t            <div class=\"-mx-1 flex items-center\">\n\t\t\t\t                <div class=\"mx-1 h-2 w-12 bg-gray-100 rounded\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"mx-6 border border-gray-200 rounded\">\n\t\t\t\t\t    <div class=\"bg-gray-100 w-full h-64\">\n\t\t\t\t\t    </div>\n\t\t\t\t        <div class=\"p-4 border-t\">\n\t\t\t\t            <h2 class=\"w-64 h-6 rounded bg-gray-300 mb-4\"></h2>\n\t\t\t                <p class=\"h-3 w-full rounded bg-gray-200 mb-3\"></p>\n\t\t\t                <p class=\"h-3 w-40 rounded bg-gray-200\"></p>\n\t\t\t\t            <div class=\"rounded bg-gray-200 h-4 w-20 bg-gray-300 mt-10\"></div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"p-6\">\n\t\t\t\t        <div class=\"flex\">\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 rounded-full\"></div>\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 rounded-full ml-2\"></div>\n\t\t\t\t        </div>\n\n\t\t\t\t        <div class=\"mt-8\">\n\t\t\t\t            <div class=\"flex w-full\">\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t");
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
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref11, init) {
      var page, queryPending, url, buildParams, objParams, params, http;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = _ref11.page, queryPending = _ref11.queryPending, url = _ref11.url, buildParams = _ref11.buildParams;

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
    syntax: false,
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
            var target = entry.target.querySelector('img');
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
    attach: function attach(_ref12) {
      var data = _ref12.post,
          element = _ref12.element,
          interactions = _ref12.interactions,
          options = _ref12.options;
      var types = post.types; // if post type is discover or post

      if (options.type == types.POST || options.type == types.DISCOVER || options.type == types.MARKDOWN) {
        interactions.love(element, data.id);
        interactions.save(element, data.id);
        interactions.share(element);
        if (options.carousel && Object(_utils_find__WEBPACK_IMPORTED_MODULE_9__["default"])(element, '.carousel')) interactions.carousel(element);
        if (options.lazyimage !== false) interactions.lazyimage(element);
        if (options.syntax !== false) interactions.syntax(element);
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
  templating: function templating(_ref13) {
    var res = _ref13.data,
        direct = _ref13.direct,
        prepend = _ref13.prepend,
        render = _ref13.render,
        options = _ref13.options,
        templates = _ref13.templates,
        interactions = _ref13.interactions,
        events = _ref13.events,
        args = _objectWithoutProperties(_ref13, ["data", "direct", "prepend", "render", "options", "templates", "interactions", "events"]);

    var posts = res.data;
    var wrapper = document.createDocumentFragment();
    var adsSlot = 1; // append post element to the wrapper

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
  render: function render(_ref14) {
    var elem = _ref14.elem,
        dom = _ref14.dom,
        prepend = _ref14.prepend,
        args = _objectWithoutProperties(_ref14, ["elem", "dom", "prepend"]);

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
  loadMore: function loadMore(_ref15) {
    var run = _ref15.run,
        endOfPage = _ref15.endOfPage,
        args = _objectWithoutProperties(_ref15, ["run", "endOfPage"]); // do more stuff here


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
    empty: function empty(_ref16) {
      var elem = _ref16.elem,
          templates = _ref16.templates;
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
  run: function run(_ref17) {
    var elem = _ref17.elem,
        end = _ref17.end,
        options = _ref17.options,
        lastData = _ref17.lastData,
        buildParams = _ref17.buildParams,
        shimmer = _ref17.shimmer,
        queryPending = _ref17.queryPending,
        query = _ref17.query,
        args = _objectWithoutProperties(_ref17, ["elem", "end", "options", "lastData", "buildParams", "shimmer", "queryPending", "query"]); // get new page (don't retrieve from the argument)


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
          (function (_ref18) {
            var templating = _ref18.templating,
                args = _objectWithoutProperties(_ref18, ["templating"]); // i promise you <3


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
          .then(function (_ref19) {
            var render = _ref19.render,
                args = _objectWithoutProperties(_ref19, ["render"]);

            return render(_objectSpread({}, args));
          }) // 4. rendered
          .then(function (_ref20) {
            var lifecycle = _ref20.lifecycle,
                elem = _ref20.elem,
                args = _objectWithoutProperties(_ref20, ["lifecycle", "elem"]);

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
};
/**
 * Public Object
 * @type {Object}
 */

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
      }, args))["catch"](function (error) {});
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

/***/ "./resources/js/search.js":
/*!********************************!*\
  !*** ./resources/js/search.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/post */ "./resources/js/libs/post.js");
/* harmony import */ var _utils_str2dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/str2dom */ "./resources/js/utils/str2dom.js");
/* harmony import */ var _utils_finds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/finds */ "./resources/js/utils/finds.js");
/* harmony import */ var _utils_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/find */ "./resources/js/utils/find.js");
/* harmony import */ var _utils_removes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/removes */ "./resources/js/utils/removes.js");
/* harmony import */ var _utils_adds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/adds */ "./resources/js/utils/adds.js");
/* harmony import */ var _utils_full_url_with_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/full-url-with-query */ "./resources/js/utils/full-url-with-query.js");
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
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
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








var posts = _libs_post__WEBPACK_IMPORTED_MODULE_0__["post"].init('.posts', {
  url: url,
  carousel: false,
  truncate_content: true,
  discover: discover,
  type: _libs_post__WEBPACK_IMPORTED_MODULE_0__["types"][type],
  lazyimage: lazyimage,
  params: function params(_params) {
    return _objectSpread({}, _params, {
      search: search,
      tag: tag,
      type: postType,
      sort: sort
    });
  },
  wrap: wrap
});
/**
 * Toggle tag search input
 */

var tagSearch = function tagSearch() {
  $('.tag-search').classList.toggle('hidden');
};
/**
 * Hide search button
 * @return {[type]} [description]
 */


var tagSearchButton = function tagSearchButton() {
  $('.tags a[href^="#search"]').classList.toggle('hidden');
};
/**
 * Tag search collection DOM
 * @param  {Node} search Tag search element
 */


var tagSearchCollection = function tagSearchCollection(search) {
  if ($('.tag-search-collection')) return;
  var this_height = search.clientHeight,
      tpl = "\n\t\t<div class=\"absolute z-10 left-0 w-full bg-white tag-search-collection shadow-lg rounded\" style=\"top: ".concat(this_height + 10, "px;\">\n\t\t\t<div class=\"px-4 py-2\">Ketik min. 3 huruf</div>\n\t\t</div>");
  tpl = Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_1__["default"])(tpl);
  search.appendChild(tpl);
};
/**
 * Add tags to the collection
 * @param {Object} collection Tags data
 */


var addTagToCollection = function addTagToCollection(collection) {
  var target = $('.tag-search-collection');

  var tagFunction = function tagFunction(e) {
    var tag = this.dataset.name;
    window.location.href = routes.search + Object(_utils_full_url_with_query__WEBPACK_IMPORTED_MODULE_6__["default"])({
      tag: tag
    });
  }; // reset


  $$('.tag-search-item').forEach(function (tag) {
    tag.removeEventListener('click', tagFunction);
  });
  target.innerHTML = '';

  if (collection.length < 1) {
    collection = [];
    collection.push({
      value: 'Tidak ditemukan',
      id: -1
    });
  }

  collection.forEach(function (item) {
    target.appendChild(Object(_utils_str2dom__WEBPACK_IMPORTED_MODULE_1__["default"])("\n\t\t\t\t<div class=\"px-4 py-2 border-b border-gray-100 ".concat(item.id !== -1 ? 'tag-search-item' : '', "\" data-name=\"").concat(item.value, "\">\n\t\t\t\t\t").concat(item.id !== -1 ? '#' + item.value : item.value, "\n\t\t\t\t</div>\n\t\t\t")));
  });

  if (collection.length > 0) {
    $$('.tag-search-item').forEach(function (tag) {
      tag.addEventListener('click', tagFunction);
    });
  }
};
/**
 * Tag input interaction (up/dowm)
 * @param  {String} key Keyword (up/down)
 */


var tagSearchCollectionMove = function tagSearchCollectionMove(key) {
  var collection = $('.tag-search-collection'),
      first_item = Object(_utils_find__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, '.tag-search-item'),
      selected_classes = 'tag-selected bg-gray-200';
  if (collection && Object(_utils_finds__WEBPACK_IMPORTED_MODULE_2__["default"])(collection, '.tag-search-item').length < 1) return;

  if (!Object(_utils_find__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, '.tag-selected')) {
    return Object(_utils_adds__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_find__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, '.tag-search-item').classList, selected_classes);
  }

  var selected = Object(_utils_find__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, '.tag-selected');
  Object(_utils_removes__WEBPACK_IMPORTED_MODULE_4__["default"])(selected.classList, selected_classes);

  if (key == 'up') {
    var previous = selected.previousElementSibling;
    if (previous) Object(_utils_adds__WEBPACK_IMPORTED_MODULE_5__["default"])(previous.classList, selected_classes);else Object(_utils_adds__WEBPACK_IMPORTED_MODULE_5__["default"])(collection.lastChild.classList, selected_classes);
  } else if (key == 'down') {
    var next = selected.nextElementSibling;
    if (next) Object(_utils_adds__WEBPACK_IMPORTED_MODULE_5__["default"])(next.classList, selected_classes);else Object(_utils_adds__WEBPACK_IMPORTED_MODULE_5__["default"])(collection.firstChild.classList, selected_classes);
  }
};

$('.tags a[href^="#search"]').addEventListener('click', function (e) {
  var self = this;
  tagSearchButton();
  tagSearch();
  var search_input = $('.tag-search input');
  search_input.focus();
  tagSearchCollection($('.tag-search'));
  e.preventDefault();
});
var controller;
$('.tag-search input').addEventListener('keydown', function (e) {
  if (e.code == 'ArrowDown') {
    tagSearchCollectionMove('down');
    return e.preventDefault();
  }

  if (e.code == 'ArrowUp') {
    tagSearchCollectionMove('up');
    return e.preventDefault();
  }

  if (e.code == 'Enter') {
    if ($('.tag-selected')) $('.tag-selected').click();
    return e.preventDefault();
  }
});
$('.tag-search input').addEventListener('keyup', function (e) {
  var self = this,
      value = self.value;
  if (e.code == 'ArrowUp' || e.code == 'ArrowDown') return;
  if (value.trim().length <= 2) return;
  controller && controller.abort();
  controller = new AbortController();
  fetch(routes.post_tags + '?value=' + value, {
    signal: controller.signal
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    addTagToCollection(data.slice(0, 5));
  });
});
$('.tag-search input').addEventListener('blur', function (e) {
  setTimeout(function () {
    tagSearchButton();
    tagSearch();
    tagSearchCollection(false);
  }, 500);
});
if ($('.dispose-tag')) $('.dispose-tag').addEventListener('click', function () {
  window.location.href = Object(_utils_full_url_with_query__WEBPACK_IMPORTED_MODULE_6__["default"])(['tag'], true);
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
  var baseurl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // get current URL params

  var params = window.location.search;
  if (params.substr(0, 1) === '?') params = params.substr(1, params.length);
  if (params) params = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');else params = {};

  if (newQuery) {
    // if object given
    if (_typeof(newQuery) === 'object' && Object.prototype.toString.call(newQuery) !== '[object Array]') {
      // then extend with current URL params
      params = Object.assign(params, newQuery);
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
  var prependUrl = window.location.origin + window.location.pathname;
  return (baseurl ? prependUrl : '') + (params ? '?' + params : '');
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
  var videos = ['mp4', 'webm', 'ogg'];
  return videos.includes(str) ? true : false;
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

/***/ 12:
/*!**************************************!*\
  !*** multi ./resources/js/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rizalfakhri/Kodinger/kodinger-3/resources/js/search.js */"./resources/js/search.js");


/***/ })

/******/ });