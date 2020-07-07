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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tiny-slider/dist/tiny-slider.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/tiny-slider/dist/tiny-slider.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tns-outer{\n  padding:0 !important\n}\n\n.tns-outer [hidden]{\n  display:none !important\n}\n\n.tns-outer [aria-controls],.tns-outer [data-action]{\n  cursor:pointer\n}\n\n.tns-slider{\n  transition:all 0s\n}\n\n.tns-slider>.tns-item{\n  box-sizing:border-box\n}\n\n.tns-horizontal.tns-subpixel{\n  white-space:nowrap\n}\n\n.tns-horizontal.tns-subpixel>.tns-item{\n  display:inline-block;\n  vertical-align:top;\n  white-space:normal\n}\n\n.tns-horizontal.tns-no-subpixel:after{\n  content:'';\n  display:table;\n  clear:both\n}\n\n.tns-horizontal.tns-no-subpixel>.tns-item{\n  float:left\n}\n\n.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{\n  margin-right:-100%\n}\n\n.tns-no-calc{\n  position:relative;\n  left:0\n}\n\n.tns-gallery{\n  position:relative;\n  left:0;\n  min-height:1px\n}\n\n.tns-gallery>.tns-item{\n  position:absolute;\n  left:-100%;\n  transition:transform 0s, opacity 0s\n}\n\n.tns-gallery>.tns-slide-active{\n  position:relative;\n  left:auto !important\n}\n\n.tns-gallery>.tns-moving{\n  transition:all 0.25s\n}\n\n.tns-autowidth{\n  display:inline-block\n}\n\n.tns-lazy-img{\n  transition:opacity 0.6s;\n  opacity:0.6\n}\n\n.tns-lazy-img.tns-complete{\n  opacity:1\n}\n\n.tns-ah{\n  transition:height 0s\n}\n\n.tns-ovh{\n  overflow:hidden\n}\n\n.tns-visually-hidden{\n  position:absolute;\n  left:-10000em\n}\n\n.tns-transparent{\n  opacity:0;\n  visibility:hidden\n}\n\n.tns-fadeIn{\n  opacity:1;\n  filter:alpha(opacity=100);\n  z-index:0\n}\n\n.tns-normal,.tns-fadeOut{\n  opacity:0;\n  filter:alpha(opacity=0);\n  z-index:-1\n}\n\n.tns-vpfix{\n  white-space:nowrap\n}\n\n.tns-vpfix>div,.tns-vpfix>li{\n  display:inline-block\n}\n\n.tns-t-subp2{\n  margin:0 auto;\n  width:310px;\n  position:relative;\n  height:10px;\n  overflow:hidden\n}\n\n.tns-t-ct{\n  width:2333.3333333%;\n  width:calc(100% * 70 / 3);\n  position:absolute;\n  right:0\n}\n\n.tns-t-ct:after{\n  content:'';\n  display:table;\n  clear:both\n}\n\n.tns-t-ct>div{\n  width:1.4285714%;\n  width:calc(100% / 70);\n  height:10px;\n  float:left\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/tiny-slider/dist/tiny-slider.css":
/*!*******************************************************!*\
  !*** ./node_modules/tiny-slider/dist/tiny-slider.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./tiny-slider.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tiny-slider/dist/tiny-slider.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/Object.keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/Object.keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Object.keys
if (!Object.keys) {
  Object.keys = function (object) {
    var keys = [];

    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }

    return keys;
  };
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addCSSRule.js ***!
  \************************************************************/
/*! exports provided: addCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCSSRule", function() { return addCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
  'insertRule' in sheet ? sheet.insertRule(selector + '{' + rules + '}', index) : sheet.addRule(selector, rules, index); // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addClass.js ***!
  \**********************************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.classList.add(str);
  }
} : function (el, str) {
  if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.className += ' ' + str;
  }
};


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addEvents.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addEvents.js ***!
  \***********************************************************/
/*! exports provided: addEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvents", function() { return addEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");

function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js ***!
  \*******************************************************************/
/*! exports provided: arrayFromNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromNodeList", function() { return arrayFromNodeList; });
function arrayFromNodeList(nl) {
  var arr = [];

  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }

  return arr;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/caf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/caf.js ***!
  \*****************************************************/
/*! exports provided: caf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });
var win = window;
var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function (id) {
  clearTimeout(id);
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/calc.js":
/*!******************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/calc.js ***!
  \******************************************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 



function calc() {
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      result = false;
  body.appendChild(div);

  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;

    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;

      if (div.offsetWidth === 100) {
        result = val.replace(str, '');
        break;
      }
    }
  } catch (e) {}

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();
  return result;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/checkStorageValue.js ***!
  \*******************************************************************/
/*! exports provided: checkStorageValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStorageValue", function() { return checkStorageValue; });
function checkStorageValue(value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/childNode.remove.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/childNode.remove.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ChildNode.remove
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/classListSupport.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/classListSupport.js ***!
  \******************************************************************/
/*! exports provided: classListSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/createStyleSheet.js ***!
  \******************************************************************/
/*! exports provided: createStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleSheet", function() { return createStyleSheet; });
// create and append style sheet
function createStyleSheet(media) {
  // Create the <style> tag
  var style = document.createElement("style"); // style.setAttribute("type", "text/css");
  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")

  if (media) {
    style.setAttribute("media", media);
  } // WebKit hack :(
  // style.appendChild(document.createTextNode(""));
  // Add the <style> element to the page


  document.querySelector('head').appendChild(style);
  return style.sheet ? style.sheet : style.styleSheet;
}
;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/docElement.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/docElement.js ***!
  \************************************************************/
/*! exports provided: docElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docElement", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/events.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/events.js ***!
  \********************************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
function Events() {
  return {
    topics: {},
    on: function on(eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function off(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function emit(eventName, data) {
      data.type = eventName;

      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function (fn) {
          fn(data, eventName);
        });
      }
    }
  };
}
;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/extend.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/extend.js ***!
  \********************************************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function extend() {
  var obj,
      name,
      copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/forEach.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/forEach.js ***!
  \*********************************************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach(arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getAttr.js ***!
  \*********************************************************/
/*! exports provided: getAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getBody.js ***!
  \*********************************************************/
/*! exports provided: getBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBody", function() { return getBody; });
function getBody() {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js ***!
  \*******************************************************************/
/*! exports provided: getCssRulesLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRulesLength", function() { return getCssRulesLength; });
function getCssRulesLength(sheet) {
  var rule = 'insertRule' in sheet ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getEndProperty.js ***!
  \****************************************************************/
/*! exports provided: getEndProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndProperty", function() { return getEndProperty; });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;

  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }

  return endProp;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getSlideId.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getSlideId.js ***!
  \************************************************************/
/*! exports provided: getSlideId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideId", function() { return getSlideId; });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getTouchDirection.js ***!
  \*******************************************************************/
/*! exports provided: getTouchDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchDirection", function() { return getTouchDirection; });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));

  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/has3DTransforms.js ***!
  \*****************************************************************/
/*! exports provided: has3DTransforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has3DTransforms", function() { return has3DTransforms; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");



function has3DTransforms(tf) {
  if (!tf) {
    return false;
  }

  if (!window.getComputedStyle) {
    return false;
  }

  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';
  cssTF += 'transform'; // Add it to the body to get the computed style

  body.insertBefore(el, null);
  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : el.remove();
  return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasAttr.js ***!
  \*********************************************************/
/*! exports provided: hasAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasClass.js ***!
  \**********************************************************/
/*! exports provided: classListSupport, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ "./node_modules/tiny-slider/src/helpers/classListSupport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"]; });


var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  return el.classList.contains(str);
} : function (el, str) {
  return el.className.indexOf(str) >= 0;
};


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hideElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hideElement.js ***!
  \*************************************************************/
/*! exports provided: hideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideElement", function() { return hideElement; });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') {
    el.style.display = 'none';
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isNodeList.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isNodeList.js ***!
  \************************************************************/
/*! exports provided: isNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeList", function() { return isNodeList; });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined";
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isVisible.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isVisible.js ***!
  \***********************************************************/
/*! exports provided: isVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/jsTransform.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/jsTransform.js ***!
  \*************************************************************/
/*! exports provided: jsTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsTransform", function() { return jsTransform; });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = to.indexOf('%') >= 0 ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;
  setTimeout(moveElement, tick);

  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;

    if (duration > 0) {
      setTimeout(moveElement, tick);
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js ***!
  \*******************************************************************/
/*! exports provided: mediaquerySupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaquerySupport", function() { return mediaquerySupport; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");



function mediaquerySupport() {
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;
  style.type = 'text/css';
  div.className = 'tns-mq-test';
  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();
  return position === "absolute";
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/passiveOption.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/passiveOption.js ***!
  \***************************************************************/
/*! exports provided: passiveOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveOption", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

var passiveOption = supportsPassive ? {
  passive: true
} : false;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/percentageLayout.js ***!
  \******************************************************************/
/*! exports provided: percentageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageLayout", function() { return percentageLayout; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean



function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;
  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);
  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : wrapper.remove();
  return supported;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/raf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/raf.js ***!
  \*****************************************************/
/*! exports provided: raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
var win = window;
var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
  return setTimeout(cb, 16);
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeAttrs.js ***!
  \*************************************************************/
/*! exports provided: removeAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttrs", function() { return removeAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");

function removeAttrs(els, attrs) {
  els = Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];
  var attrLength = attrs.length;

  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeCSSRule.js ***!
  \***************************************************************/
/*! exports provided: removeCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCSSRule", function() { return removeCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
  'deleteRule' in sheet ? sheet.deleteRule(index) : sheet.removeRule(index); // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeClass.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeClass.js ***!
  \*************************************************************/
/*! exports provided: removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ? function (el, str) {
  if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.classList.remove(str);
  }
} : function (el, str) {
  if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) {
    el.className = el.className.replace(str, '');
  }
};


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeEvents.js":
/*!**************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeEvents.js ***!
  \**************************************************************/
/*! exports provided: removeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvents", function() { return removeEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");

function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/resetFakeBody.js ***!
  \***************************************************************/
/*! exports provided: resetFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFakeBody", function() { return resetFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");

function resetFakeBody(body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = docOverflow; // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line

    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].offsetHeight;
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setAttrs.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setAttrs.js ***!
  \**********************************************************/
/*! exports provided: setAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");

function setAttrs(els, attrs) {
  els = Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array ? els : [els];

  if (Object.prototype.toString.call(attrs) !== '[object Object]') {
    return;
  }

  for (var i = els.length; i--;) {
    for (var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setFakeBody.js ***!
  \*************************************************************/
/*! exports provided: setFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFakeBody", function() { return setFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");

function setFakeBody(body) {
  var docOverflow = '';

  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow; //avoid crashing IE8, if background image is used

    body.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setLocalStorage.js ***!
  \*****************************************************************/
/*! exports provided: setLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try {
      storage.setItem(key, value);
    } catch (e) {}
  }

  return value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/showElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/showElement.js ***!
  \*************************************************************/
/*! exports provided: showElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showElement", function() { return showElement; });
function showElement(el, forceHide) {
  if (el.style.display === 'none') {
    el.style.display = '';
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/toDegree.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/toDegree.js ***!
  \**********************************************************/
/*! exports provided: toDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return toDegree; });
function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/whichProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/whichProperty.js ***!
  \***************************************************************/
/*! exports provided: whichProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whichProperty", function() { return whichProperty; });
function whichProperty(props) {
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
    prefixes.forEach(function (prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });
    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;

  for (var i = 0; i < props.length; i++) {
    var prop = props[i];

    if (el.style[prop] !== undefined) {
      return prop;
    }
  }

  return false; // explicit for ie9-
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/tiny-slider.js ***!
  \*****************************************************/
/*! exports provided: tns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
/* harmony import */ var _helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Object.keys */ "./node_modules/tiny-slider/src/helpers/Object.keys.js");
/* harmony import */ var _helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/childNode.remove */ "./node_modules/tiny-slider/src/helpers/childNode.remove.js");
/* harmony import */ var _helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/caf.js */ "./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/extend.js */ "./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/getSlideId.js */ "./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/calc.js */ "./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ "./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ "./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/toDegree.js */ "./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/forEach.js */ "./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/addClass.js */ "./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/removeClass.js */ "./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/hasAttr.js */ "./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/getAttr.js */ "./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/setAttrs.js */ "./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ "./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/hideElement.js */ "./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/showElement.js */ "./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/isVisible.js */ "./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/whichProperty.js */ "./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ "./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/addEvents.js */ "./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/removeEvents.js */ "./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./helpers/events.js */ "./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./helpers/jsTransform.js */ "./node_modules/tiny-slider/src/helpers/jsTransform.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





































var tns = function tns(options) {
  options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  var doc = document,
      win = window,
      KEYS = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date();

    try {
      tnsStorage = win.localStorage;

      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }

      if (!localStorageAccess) {
        tnsStorage = {};
      }
    } catch (e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function (item) {
          tnsStorage.removeItem(item);
        });
      } // update browserInfo


      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tC']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tC', Object(_helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__["calc"])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tPL']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tPL', Object(_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__["percentageLayout"])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tMQ']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tMQ', Object(_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__["mediaquerySupport"])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTf']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTf', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['t3D']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 't3D', Object(_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__["has3DTransforms"])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tAE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tAE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(ANIMATIONDURATION, 'Animation'), localStorageAccess); // get element nodes from selectors

  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};
  tnsList.forEach(function (item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) {
          console.warn('Can\'t find', options[item]);
        }

        return;
      }
    }
  }); // make sure at least 1 slide

  if (options.container.children.length < 1) {
    if (supportConsoleWarn) {
      console.warn('No slides found in', options.container);
    }

    return;
  } // update options


  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};

    for (var key in responsive) {
      var val = responsive[key]; // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 

      val = typeof val === 'number' ? {
        items: val
      } : val;
      responsiveTem[key] = val;
    }

    responsive = responsiveTem;
    responsiveTem = null;
  } // update options


  function updateOptions(obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') {
          obj[key] = 'page';
        }

        if (key === 'edgePadding') {
          obj[key] = false;
        }

        if (key === 'autoHeight') {
          obj[key] = false;
        }
      } // update responsive options


      if (key === 'responsive') {
        updateOptions(obj[key]);
      }
    }
  }

  if (!carousel) {
    updateOptions(options);
  } // === define and set variables ===


  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;
    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;

  if (responsive) {
    setBreakpointZone();
  }

  if (carousel) {
    container.className += ' tns-vpfix';
  } // fixedWidth: viewport > rightBoundary > indexMax


  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__["createStyleSheet"])(),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions,
      // collection of slide positions
  slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = !carousel || !loop ? true : false,
      // transform
  transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
  getIndexMax = function () {
    if (fixedWidth) {
      return function () {
        return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
      };
    } else if (autoWidth) {
      return function () {
        for (var i = slideCountNew; i--;) {
          if (slidePositions[i] >= -rightBoundary) {
            return i;
          }
        }
      };
    } else {
      return function () {
        if (center && carousel && !loop) {
          return slideCount - 1;
        } else {
          return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        }
      };
    }
  }(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
  resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_34__["Events"](),
      // id, class
  newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__["getSlideId"])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
    'click': onControlsClick,
    'keydown': onControlsKeydown
  },
      navEvents = {
    'click': onNavClick,
    'keydown': onNavKeydown
  },
      hoverEvents = {
    'mouseover': mouseoverPause,
    'mouseout': mouseoutRestart
  },
      visibilityEvent = {
    'visibilitychange': onVisibilityChange
  },
      docmentKeydownEvent = {
    'keydown': onDocumentKeydown
  },
      touchEvents = {
    'touchstart': onPanStart,
    'touchmove': onPanMove,
    'touchend': onPanEnd,
    'touchcancel': onPanEnd
  },
      dragEvents = {
    'mousedown': onPanStart,
    'mousemove': onPanMove,
    'mouseup': onPanEnd,
    'mouseleave': onPanEnd
  },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
    'load': onImgLoaded,
    'error': onImgFailed
  },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false; // controls


  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  } // nav


  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  } // autoplay


  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ? function (a, b) {
      return a.x - b.x;
    } : function (a, b) {
      return a.y - b.y;
    };
  } // disable slider when slidecount <= items


  if (!autoWidth) {
    resetVariblesWhenDisable(disable || freeze);
  }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }
  }

  if (carousel) {
    container.className = container.className.replace('tns-vpfix', '');
  }

  initStructure();
  initSheet();
  initSliderTransform(); // === COMMON FUNCTIONS === //

  function resetVariblesWhenDisable(condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide() {
    var tem = carousel ? index - cloneCount : index;

    while (tem < 0) {
      tem += slideCount;
    }

    return tem % slideCount + 1;
  }

  function getStartIndex(ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex(i) {
    if (i == null) {
      i = index;
    }

    if (carousel) {
      i -= cloneCount;
    }

    while (i < 0) {
      i += slideCount;
    }

    return Math.floor(i % slideCount);
  }

  function getCurrentNavIndex() {
    var absIndex = getAbsIndex(),
        result;
    result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items); // set active nav to the last one when reaches the right edge

    if (!loop && carousel && index === indexMax) {
      result = pages - 1;
    }

    return result;
  }

  function getItemsMax() {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || fixedWidth && !viewportMax) {
      return slideCount - 1; // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) {
        arr.push(options[str]);
      }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];

          if (tem && (fixedWidth || tem < slideCount)) {
            arr.push(tem);
          }
        }
      }

      if (!arr.length) {
        arr.push(0);
      }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop() {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
    result = Math.max(itemsMax, result);
    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth() {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition(pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth(el) {
    var div = doc.createElement('div'),
        rect,
        width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth() {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption(item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) {
            return true;
          }
        }
      }

      return false;
    }
  } // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy


  function getOption(item, ww) {
    if (ww == null) {
      ww = windowWidth;
    }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) {
              result = responsive[bp][item];
            }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') {
        result = getOption('items');
      }

      if (!carousel && (item === 'slideBy' || item === 'items')) {
        result = Math.floor(result);
      }

      return result;
    }
  }

  function getSlideMarginLeft(i) {
    return CALC ? CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;

      if (gutterTem) {
        gap -= gutterTem;
      }

      str = horizontal ? 'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' : 'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';';
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
      str += getTransitionDurationStyle(speedTem);
    }

    return str;
  }

  function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ? CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' : slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = fixedWidthTem + gutterTem + 'px';
    } else {
      if (!carousel) {
        itemsTem = Math.floor(itemsTem);
      }

      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? CALC + '(100% / ' + dividend + ')' : 100 / dividend + '%';
    }

    width = 'width:' + width; // inner slider: overwrite outer slider styles

    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle(gutterTem) {
    var str = ''; // gutter maybe interger || 0
    // so can't use 'if (gutter)'

    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop + dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix(name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();

    if (prefix) {
      prefix = '-' + prefix + '-';
    }

    return prefix;
  }

  function getTransitionDurationStyle(speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle(speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure() {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');
    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw'; // set container properties

    if (container.id === '') {
      container.id = slideId;
    }

    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';

    if (autoWidth) {
      newContainerClasses += ' tns-autowidth';
    }

    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses; // add constrain layer for carousel

    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';
      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container); // add id, class, aria attributes 
    // before clone slides

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-item');

      if (!item.id) {
        item.id = slideId + '-item' + i;
      }

      if (!carousel && animateNormal) {
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
      }

      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }); // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n

    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j % slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }
  }

  function initSliderTransform() {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img'); // add complete class if all images are loaded/failed

      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(imgs, function (img) {
        var src = img.src;

        if (src && src.indexOf('data:image') < 0) {
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents);
          img.src = '';
          img.src = src;
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        } else if (!lazyload) {
          imgLoaded(img);
        }
      }); // All imgs are completed

      Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), function () {
          imgsComplete = true;
        });
      }); // Check imgs in window only for auto height

      if (!autoWidth && horizontal) {
        imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
      }

      lazyload ? initSliderTransformStyleCheck() : Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), initSliderTransformStyleCheck);
      });
    } else {
      // set container transform property
      if (carousel) {
        doContainerTransformSilent();
      } // update slider tools and events


      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck() {
    if (autoWidth) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ? initSliderTransformCore() : setTimeout(function () {
          stylesApplicationCheck();
        }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }

  function initSliderTransformCore() {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();

        if (freezable) {
          freeze = getFreeze();
        }

        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=

        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    } // set container transform property


    if (carousel) {
      doContainerTransformSilent();
    } // update slider tools and events


    initTools();
    initEvents();
  }

  function initSheet() {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    } // #### LAYOUT
    // ## INLINE-BLOCK VS FLOAT
    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0
    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~
    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing


    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, 'font-size:0;', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } else if (carousel) {
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    } // ## BASIC STYLES


    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-mw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // inner wrapper styles


      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-iw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet)); // container styles

      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';

        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }

        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // slide styles


      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';

      if (options.gutter) {
        str += getSlideGutterStyle(options.gutter);
      } // set gallery items transition-duration


      if (!carousel) {
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }

        if (ANIMATIONDURATION) {
          str += getAnimationDurationStyle(speed);
        }
      }

      if (str) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } // non CSS mediaqueries: IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)

    } else {
      // middle wrapper styles
      update_carousel_transition_duration(); // inner wrapper styles

      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight); // container styles

      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      } // slide styles


      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';

      if (gutter) {
        str += getSlideGutterStyle(gutter);
      } // append to the last line


      if (str) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }
    } // ## MEDIAQUERIES


    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);
        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp); // middle wrapper string

        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        } // inner wrapper string


        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        } // container string


        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || fixedWidth && 'gutter' in opts)) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }

        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }

        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        } // slide string


        if ('fixedWidth' in opts || fixedWidth && 'gutter' in opts || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }

        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        } // set gallery items transition-duration


        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) {
            slideStr += getTransitionDurationStyle(speedBP);
          }

          if (ANIMATIONDURATION) {
            slideStr += getAnimationDurationStyle(speedBP);
          }
        }

        if (slideStr) {
          slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}';
        } // add up


        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools() {
    // == slides ==
    updateSlideStatus(); // == live region ==

    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current'); // == autoplayInit ==

    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';

      if (autoplayButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {
          'data-action': txt
        });
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      } // add event


      if (autoplayButton) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(autoplayButton, {
          'click': toggleAutoplay
        });
      }

      if (autoplay) {
        startAutoplay();

        if (autoplayHoverPause) {
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents);
        }

        if (autoplayResetOnVisibility) {
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, visibilityEvent);
        }
      }
    } // == navInit ==


    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount; // customized nav
      // will not hide the navs in case they're thumbnails

      if (navContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navContainer, {
          'aria-label': 'Carousel Pagination'
        });
        navItems = navContainer.children;
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(navItems, function (item, i) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId
          });
        }); // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';

        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
        }

        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility(); // add transition

      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }

      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navItems[navCurrentIndex], {
        'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
      });
      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navItems[navCurrentIndex], 'tabindex');
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navItems[navCurrentIndex], navActiveClass); // add events

      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(navContainer, navEvents);
    } // == controlsInit ==


    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + '</button></div>');
        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1'
        });
      }

      if (options.controlsContainer || options.prevButton && options.nextButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(prevButton, {
          'data-controls': 'prev'
        });
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(nextButton, {
          'data-controls': 'next'
        });
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);
      updateControlsStatus(); // add events

      if (controlsContainer) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(controlsContainer, controlsEvents);
      } else {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(prevButton, controlsEvents);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(nextButton, controlsEvents);
      }
    } // hide tools if needed


    disableUI();
  }

  function initEvents() {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, eve);
    }

    if (touch) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch);
    }

    if (mouseDrag) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents);
    }

    if (arrowKeys) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent);
    }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(win, {
        'resize': onResize
      });
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) {
        doAutoHeight();
      }
    }

    doLazyLoad();

    if (disable) {
      disableSlider();
    } else if (freeze) {
      freezeSlider();
    }

    events.on('indexChanged', additionalUpdates);

    if (nested === 'inner') {
      events.emit('innerLoaded', info());
    }

    if (typeof onInit === 'function') {
      onInit(info());
    }

    isOn = true;
  }

  function destroy() {
    // sheet
    sheet.disabled = true;

    if (sheet.ownerNode) {
      sheet.ownerNode.remove();
    } // remove win event listeners


    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(win, {
      'resize': onResize
    }); // arrowKeys, controls, nav

    if (arrowKeys) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent);
    }

    if (controlsContainer) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(controlsContainer, controlsEvents);
    }

    if (navContainer) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(navContainer, navEvents);
    } // autoplay


    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, visibilityEvent);

    if (autoplayButton) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(autoplayButton, {
        'click': toggleAutoplay
      });
    }

    if (autoplay) {
      clearInterval(autoplayTimer);
    } // container


    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, eve);
    }

    if (touch) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents);
    }

    if (mouseDrag) {
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents);
    } // cache Object values in options && reset HTML


    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
    tnsList.forEach(function (item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (_typeof(el) === 'object') {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    }); // reset variables

    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null; // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') {
        this[a] = null;
      }
    }

    isOn = false;
  } // === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal


  function onResize(e) {
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      resizeTasks(getEvent(e));
    });
  }

  function resizeTasks(e) {
    if (!isOn) {
      return;
    }

    if (nested === 'outer') {
      events.emit('outerResized', info(e));
    }

    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone; // if (hasRightDeadZone) { needContainerTransform = true; } // *?

      if (bpChanged) {
        events.emit('newBreakpointStart', info(e));
      }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    } // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy


    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    } // update options


    resetVariblesWhenDisable(disable);
    viewport = getViewportWidth(); // <= edgePadding, gutter

    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();

      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions

        needContainerTransform = true;
      }
    }

    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
      // fixedWidth: <= viewport, fixedWidth, gutter

      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
      // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) {
          indexMax = getIndexMax();
        } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger


        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
      // <= fixedWidth: fixedWidth, gutter, rightBoundary
      // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility

    if (!autoplay) {
      autoplayHoverPause = autoplayResetOnVisibility = false;
    }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent);
    }

    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
        } else {
          if (prevButton) {
            Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton);
          }

          if (nextButton) {
            Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton);
          }
        }
      } else {
        if (controlsContainer) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
        } else {
          if (prevButton) {
            Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton);
          }

          if (nextButton) {
            Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton);
          }
        }
      }
    }

    if (nav !== navTem) {
      nav ? Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer) : Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer);
    }

    if (touch !== touchTem) {
      touch ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents);
    }

    if (mouseDrag !== mouseDragTem) {
      mouseDrag ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents);
    }

    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton);
        }

        if (!animating && !autoplayUserPaused) {
          startAutoplay();
        }
      } else {
        if (autoplayButton) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton);
        }

        if (animating) {
          stopAutoplay();
        }
      }
    }

    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    }

    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ? Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, visibilityEvent) : Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) {
        needContainerTransform = true;
      }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) {
          innerWrapper.style.height = '';
        }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;

        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) {
        needContainerTransform = true;
      }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;

    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) {
        additionalUpdates();
      }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) {
      updateGallerySlidePositions();
    }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles
        if (autoHeight !== autoheightTem || speed !== speedTem) {
          update_carousel_transition_duration();
        } // inner wrapper styles


        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          } // slide styles


          var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter); // remove the last line and
          // add new styles

          Object(_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__["removeCSSRule"])(sheet, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet) - 1);
          Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        }
      } // auto height


      if (autoHeight) {
        doAutoHeight();
      }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) {
      events.emit('newBreakpointEnd', info(e));
    }
  } // === INITIALIZATION FUNCTIONS === //


  function getFreeze() {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone() {
    breakpointZone = 0;

    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number

      if (windowWidth >= bp) {
        breakpointZone = bp;
      }
    }
  } // (slideBy, indexMin, indexMax) => index


  var updateIndex = function () {
    return loop ? carousel ? // loop + carousel
    function () {
      var leftEdge = indexMin,
          rightEdge = indexMax;
      leftEdge += slideBy;
      rightEdge -= slideBy; // adjust edges when has edge paddings
      // or fixed-width slider with extra space on the right side

      if (edgePadding) {
        leftEdge += 1;
        rightEdge -= 1;
      } else if (fixedWidth) {
        if ((viewport + gutter) % (fixedWidth + gutter)) {
          rightEdge -= 1;
        }
      }

      if (cloneCount) {
        if (index > rightEdge) {
          index -= slideCount;
        } else if (index < leftEdge) {
          index += slideCount;
        }
      }
    } : // loop + gallery
    function () {
      if (index > indexMax) {
        while (index >= indexMin + slideCount) {
          index -= slideCount;
        }
      } else if (index < indexMin) {
        while (index <= indexMax - slideCount) {
          index += slideCount;
        }
      }
    } : // non-loop
    function () {
      index = Math.max(indexMin, Math.min(indexMax, index));
    };
  }();

  function disableUI() {
    if (!autoplay && autoplayButton) {
      Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton);
    }

    if (!nav && navContainer) {
      Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer);
    }

    if (!controls) {
      if (controlsContainer) {
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
      } else {
        if (prevButton) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton);
        }

        if (nextButton) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton);
        }
      }
    }
  }

  function enableUI() {
    if (autoplay && autoplayButton) {
      Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton);
    }

    if (nav && navContainer) {
      Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer);
    }

    if (controls) {
      if (controlsContainer) {
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
      } else {
        if (prevButton) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton);
        }

        if (nextButton) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton);
        }
      }
    }
  }

  function freezeSlider() {
    if (frozen) {
      return;
    } // remove edge padding from inner wrapper


    if (edgePadding) {
      innerWrapper.style.margin = '0px';
    } // add class tns-transparent to cloned slides


    if (cloneCount) {
      var str = 'tns-transparent';

      for (var i = cloneCount; i--;) {
        if (carousel) {
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[i], str);
        }

        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[slideCountNew - i - 1], str);
      }
    } // update tools


    disableUI();
    frozen = true;
  }

  function unfreezeSlider() {
    if (!frozen) {
      return;
    } // restore edge padding for inner wrapper
    // for mordern browsers


    if (edgePadding && CSSMQ) {
      innerWrapper.style.margin = '';
    } // remove class tns-transparent to cloned slides


    if (cloneCount) {
      var str = 'tns-transparent';

      for (var i = cloneCount; i--;) {
        if (carousel) {
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[i], str);
        }

        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[slideCountNew - i - 1], str);
      }
    } // update tools


    enableUI();
    frozen = false;
  }

  function disableSlider() {
    if (disabled) {
      return;
    }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(container, ['style']);

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[j]);
        }

        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[slideCountNew - j - 1]);
      }
    } // vertical slider


    if (!horizontal || !carousel) {
      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(innerWrapper, ['style']);
    } // gallery


    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['style']);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    } // update tools


    disableUI();
    disabled = true;
  }

  function enableSlider() {
    if (!disabled) {
      return;
    }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[j]);
        }

        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[slideCountNew - j - 1]);
      }
    } // gallery


    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classN);
      }
    } // update tools


    enableUI();
    disabled = false;
  }

  function updateLiveRegion() {
    var str = getLiveRegionStr();

    if (liveregionCurrent.innerHTML !== str) {
      liveregionCurrent.innerHTML = str;
    }
  }

  function getLiveRegionStr() {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }

    var start = index,
        end,
        rangestart,
        rangeend; // get range start, range end for autoWidth and fixedWidth

    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = -(parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    } // get start, end
    // - check auto width


    if (autoWidth) {
      slidePositions.forEach(function (point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) {
            start = i;
          }

          if (rangeend - point >= 0.5) {
            end = i;
          }
        }
      }); // - check percentage width, fixed width
    } else {
      if (fixedWidth) {
        var cell = fixedWidth + gutter;

        if (center || edgePadding) {
          start = Math.floor(rangestart / cell);
          end = Math.ceil(rangeend / cell - 1);
        } else {
          end = start + Math.ceil(viewport / cell) - 1;
        }
      } else {
        if (center || edgePadding) {
          var a = items - 1;

          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad() {
    if (lazyload && !disable) {
      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
        if (!Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};

          eve[TRANSITIONEND] = function (e) {
            e.stopPropagation();
          };

          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, eve);
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents); // update src

          img.src = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-src'); // update srcset

          var srcset = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-srcset');

          if (srcset) {
            img.srcset = srcset;
          }

          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded(e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed(e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded(img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed(img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted(img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'tns-complete');
    Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(img, 'loading');
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(img, imgEvents);
  }

  function getImageArray(start, end) {
    var imgs = [];

    while (start <= end) {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems[start].querySelectorAll('img'), function (img) {
        imgs.push(img);
      });
      start++;
    }

    return imgs;
  } // check if all visible images are loaded
  // and update container height if it's done


  function doAutoHeight() {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      imgsLoadedCheck(imgs, updateInnerWrapperHeight);
    });
  }

  function imgsLoadedCheck(imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) {
      return cb();
    } // check selected image classes otherwise


    imgs.forEach(function (img, index) {
      if (Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) {
        imgs.splice(index, 1);
      }
    }); // execute callback function if selected images are all complete

    if (!imgs.length) {
      return cb();
    } // otherwise execute this functiona again


    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
      imgsLoadedCheck(imgs, cb);
    });
  }

  function additionalUpdates() {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }

  function update_carousel_transition_duration() {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight(slideStart, slideRange) {
    var heights = [];

    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  } // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done


  function updateInnerWrapperHeight() {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) {
      wp.style.height = maxHeight + 'px';
    }
  } // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions


  function setSlidePositions() {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];
    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      // skip the first slide
      if (i) {
        slidePositions.push(item.getBoundingClientRect()[attr] - base);
      } // add the end edge


      if (i === slideCountNew - 1) {
        slidePositions.push(item.getBoundingClientRect()[attr2] - base);
      }
    });
  } // update slide


  function updateSlideStatus() {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];
    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['aria-hidden', 'tabindex']);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, slideActiveClass);
        } // hide slides

      } else {
        if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, slideActiveClass);
        }
      }
    });
  } // gallery: update slide position


  function updateGallerySlidePositions() {
    var l = index + Math.min(slideCount, items);

    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-moving');
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
      } // remove outlet animation


      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
    } // removing '.tns-moving'


    setTimeout(function () {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (el) {
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(el, 'tns-moving');
      });
    }, 300);
  } // set tabindex on Nav


  function updateNavStatus() {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(navPrev, navActiveClass);
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navCurrent, {
          'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent
        });
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navCurrent, 'tabindex');
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navCurrent, navActiveClass);
        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName(el) {
    return el.nodeName.toLowerCase();
  }

  function isButton(el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled(el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement(isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  } // set 'disabled' to true on controls when reach the edges


  function updateControlsStatus() {
    if (!controls || rewind || loop) {
      return;
    }

    var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = index <= indexMin ? true : false,
        disableNext = !rewind && index >= indexMax ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }

    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }

    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }

    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  } // set duration


  function resetDuration(el, str) {
    if (TRANSITIONDURATION) {
      el.style[TRANSITIONDURATION] = str;
    }
  }

  function getSliderWidth() {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap(num) {
    if (num == null) {
      num = index;
    }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
  }

  function getRightBoundary() {
    var gap = edgePadding ? gutter : 0,
        result = viewport + gap - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }

    if (result > 0) {
      result = 0;
    }

    return result;
  }

  function getContainerTransformValue(num) {
    if (num == null) {
      num = index;
    }

    var val;

    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = -(fixedWidth + gutter) * num;

        if (center) {
          val += getCenterGap();
        }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;

        if (center) {
          num -= getCenterGap();
        }

        val = -num * 100 / denominator;
      }
    } else {
      val = -slidePositions[num];

      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) {
      val = Math.max(val, rightBoundary);
    }

    val += horizontal && !autoWidth && !fixedWidth ? '%' : 'px';
    return val;
  }

  function doContainerTransformSilent(val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform(val) {
    if (val == null) {
      val = getContainerTransformValue();
    }

    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide(number, classOut, classIn, isOut) {
    var l = number + items;

    if (!loop) {
      l = Math.min(l, slideCountNew);
    }

    for (var i = number; i < l; i++) {
      var item = slideItems[i]; // set item positions

      if (!isOut) {
        item.style.left = (i - index) * 100 / items + '%';
      }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }

      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, classOut);
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classIn);

      if (isOut) {
        slideItemsOut.push(item);
      }
    }
  } // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers


  var transformCore = function () {
    return carousel ? function () {
      resetDuration(container, '');

      if (TRANSITIONDURATION || !speed) {
        // for morden browsers with non-zero duration or 
        // zero duration for all browsers
        doContainerTransform(); // run fallback function manually 
        // when duration is 0 / container is hidden

        if (!speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) {
          onTransitionEnd();
        }
      } else {
        // for old browser with non-zero duration
        Object(_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__["jsTransform"])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
      }

      if (!horizontal) {
        updateContentWrapperHeight();
      }
    } : function () {
      slideItemsOut = [];
      var eve = {};
      eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(slideItems[indexCached], eve);
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(slideItems[index], eve);
      animateSlide(indexCached, animateIn, animateOut, true);
      animateSlide(index, animateNormal, animateIn); // run fallback function manually 
      // when transition or animation not supported / duration is 0

      if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) {
        onTransitionEnd();
      }
    };
  }();

  function render(e, sliderMoved) {
    if (updateIndexBeforeTransform) {
      updateIndex();
    } // render when slider was moved (touch or drag) even though index may not change


    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());

      if (autoHeight) {
        doAutoHeight();
      } // pause autoplay when click or keydown from user


      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) {
        stopAutoplay();
      }

      running = true;
      transformCore();
    }
  }
  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */


  function strTrans(str) {
    return str.toLowerCase().replace(/-/g, '');
  } // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height


  function onTransitionEnd(event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i]; // set item positions

          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }

          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        }
      }
      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */


      if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();

          if (index !== indexTem) {
            events.emit('indexChanged', info());
            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') {
          events.emit('innerLoaded', info());
        }

        running = false;
        indexCached = index;
      }
    }
  } // # ACTIONS


  function goTo(targetIndex, e) {
    if (freeze) {
      return;
    } // prev slideBy


    if (targetIndex === 'prev') {
      onControlsClick(e, -1); // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1); // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) {
          return;
        } else {
          onTransitionEnd();
        }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = -absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') {
          targetIndex = parseInt(targetIndex);
        }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) {
            targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
          }

          indexGap = targetIndex - absIndex;
        }
      } // gallery: make sure new page won't overlap with current page


      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap; // make sure index is in range

      if (carousel && loop) {
        if (index < indexMin) {
          index += slideCount;
        }

        if (index > indexMax) {
          index -= slideCount;
        }
      } // if index is changed, start rendering


      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }
    }
  } // on controls click


  function onControlsClick(e, dir) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
        target = target.parentNode;
      }

      var targetIn = [prevButton, nextButton].indexOf(target);

      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;

      if (autoWidth) {
        index = Math.floor(index);
      } // pass e when click control buttons or keydown


      render(passEventObject || e && e.type === 'keydown' ? e : null);
    }
  } // on nav click


  function onNavClick(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    e = getEvent(e);
    var target = getTarget(e),
        navIndex; // find the clicked nav item

    while (target !== navContainer && !Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) {
      target = target.parentNode;
    }

    if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) {
          stopAutoplay();
        }

        navClicked = -1; // reset navClicked
      }
    }
  } // autoplay functions


  function setAutoplayTimer() {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);
    animating = true;
  }

  function stopAutoplayTimer() {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton(action, txt) {
    Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {
      'data-action': action
    });
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay() {
    setAutoplayTimer();

    if (autoplayButton) {
      updateAutoplayButton('stop', autoplayText[1]);
    }
  }

  function stopAutoplay() {
    stopAutoplayTimer();

    if (autoplayButton) {
      updateAutoplayButton('start', autoplayText[0]);
    }
  } // programaitcally play/pause the slider


  function play() {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function pause() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay() {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange() {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause() {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart() {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  } // keydown events on document 


  function onDocumentKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  } // on key control


  function onControlsKeydown(e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) {
          onControlsClick(e, -1);
        }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  } // set focus


  function setFocus(el) {
    el.focus();
  } // on key nav


  function onNavKeydown(e) {
    e = getEvent(e);
    var curElement = doc.activeElement;

    if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(curElement, 'data-nav')) {
      return;
    } // var code = e.keyCode,


    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) {
          setFocus(navItems[navIndex - 1]);
        }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) {
          setFocus(navItems[navIndex + 1]);
        }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent(e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }

  function getTarget(e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent(e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected() {
    return Object(_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__["getTouchDirection"])(Object(_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__["toDegree"])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart(e) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }

    if (autoplay && animating) {
      stopAutoplayTimer();
    }

    panStart = true;

    if (rafIndex) {
      Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;

    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove(e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) {
          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
            panUpdate(e);
          });
        }
      } else {
        if (moveDirectionExpected === '?') {
          moveDirectionExpected = getMoveDirectionExpected();
        }

        if (moveDirectionExpected) {
          preventScroll = true;
        }
      }

      if (preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate(e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }

    Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);

    if (panStart) {
      rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
        panUpdate(e);
      });
    }

    if (moveDirectionExpected === '?') {
      moveDirectionExpected = getMoveDirectionExpected();
    }

    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) {
        preventScroll = true;
      }

      try {
        if (e.type) {
          events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e));
        }
      } catch (err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);

      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd(e) {
    if (panStart) {
      if (rafIndex) {
        Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
        rafIndex = null;
      }

      if (carousel) {
        resetDuration(container, '');
      }

      panStart = false;
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(target, {
            'click': function preventClick(e) {
              preventDefaultBehavior(e);
              Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(target, {
                'click': preventClick
              });
            }
          });
        }

        if (carousel) {
          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function () {
            if (horizontal && !autoWidth) {
              var indexMoved = -dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = -(translateInit + dist);

              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;

                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;

                  if (moved > slidePositions[i] && dist < 0) {
                    index += 1;
                  }

                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    } // reset


    if (options.preventScrollOnTouch === 'auto') {
      preventScroll = false;
    }

    if (swipeAngle) {
      moveDirectionExpected = '?';
    }

    if (autoplay && !animating) {
      setAutoplayTimer();
    }
  } // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height


  function updateContentWrapperHeight() {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages() {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */


  function updateNavVisibility() {
    if (!nav || navAsThumbnails) {
      return;
    }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      } // cache pages


      pagesCached = pages;
    }
  }

  function info(e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {}
    };
  }

  return {
    version: '2.9.2',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function rebuild() {
      return tns(Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, optionsElements));
    }
  };
};

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
 * Comment template
 * @param  {Object} data Comment data
 * @return {String}      Interpolated template
 */

var commentTemplate = function commentTemplate(data) {
  return "\n        <div id=\"discuss-".concat(data.id, "\" class=\"group bg-white rounded border border-gray-200 mb-6 p-6 cmt-").concat(data.id, "\">\n            <div class=\"flex\">\n                <img class=\"rounded w-10 h-10 flex-shrink-0\" src=\"").concat(data.avatar, "\">\n                <div class=\"ml-5 w-full\">\n                    <p class=\"mx-1 text-blue-500 text-xs font-semibold float-right cmt-time\">").concat(data.time, "</p>\n                    <h4 class=\"mb-1 font-bold\"><a class=\"text-indigo-600 cmt-name\" href=\"").concat(routes.base_url + '/' + data.username, "\">").concat(data.name, "</a> <span class=\"text-gray-600 font-normal\">(").concat(data.username, ")</span></h4>\n                    <div class=\"text-sm text-gray-700\">\n                        <div class=\"quoted-cmt-wrapper my-2\"></div>\n                        <div class=\"cmt-content mb-2 text-base break-all markdowned\">").concat(data.content, "</div>\n                    </div>\n                    <div class=\"cmt-actions opacity-25 group-hover:opacity-100\"></div>\n                </div>\n            </div>\n        </div>\n    ");
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
    isMine: true,
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
  }
};
/**
 * Quote comment template
 * @param  {Object} data Quote data
 * @return {Object}      Interpolated template
 */

var quoteTemplate = function quoteTemplate(data) {
  return "\n        <div class=\"quoted-cmt cursor-pointer hover:bg-teal-200 bg-teal-100 border border-teal-200 mb-2 py-2 px-4 text-sm rounded\">\n            <div class=\"text-xs text-teal-600\">Oleh <span class=\"font-bold\">".concat(data.name, "</span></div>\n            <div class=\"overflow-hidden h-22 break-all markdowned\" style=\"max-height: 40px;\">").concat(data.content, "</div>\n        </div>\n    ");
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
  }
};
/**
 * Comment wrapper
 * @type {[type]}
 */

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
  Object.keys(commentActions).forEach(function (actionKey) {
    var action = commentActions[actionKey];

    if (('auth' in action && action.auth) == auth && !('isMine' in action) || ('isMine' in action && action.isMine) == obj.is_mine || !('auth' in action) && !('isMine' in action)) {
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
  var content = Object(_utils_find__WEBPACK_IMPORTED_MODULE_1__["default"])(item, '.cmt-content');

  if (content.clientHeight > 200) {
    content.classList.add('comment-truncate');
    content.parentNode.insertAdjacentHTML('afterend', '<p class="text-center text-sm text-indigo-600 read-more-wrapper"><a class="read-more cursor-pointer">Tampilkan Semuanya</a></p>');
    var readMoreWrapper = content.parentNode.parentNode.querySelector('.read-more-wrapper');
    readMoreWrapper.addEventListener('click', function () {
      content.classList.remove('comment-truncate');
      readMoreWrapper.remove();
    });
  }

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
    $('.single-post .post-comment-count').innerText = parseInt($('.single-post .post-comment-count').innerText) - 1;
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
    $('.single-post .post-comment-count').innerText = parseInt($('.single-post .post-comment-count').innerText) + 1;
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
  POST: {
    template: 'post',
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
        var share_btn = '<a href="" target="_blank" class="text-white shadow-md mb-3 py-3 px-4 flex justify-center items-center rounded text-sm"></a>'; // show all the buttons from the `uris` key (see the uris var form destructuring object above)

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
      var tpl = "\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<svg width=\"300\" class=\"inline-block\" id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\"><defs><style>.cls-1{fill:#e2e2e2;}.cls-2{fill:#f3f3f3;}.cls-3{fill:#d37c59;}.cls-4{fill:#de8e68;}.cls-5{fill:#56cad8;}.cls-6{fill:#74d5de;}.cls-7{fill:#fed385;}.cls-8{fill:#dc8e6c;}.cls-9{fill:#fb836d;}.cls-10{fill:#d3d3d3;}.cls-11,.cls-13,.cls-14,.cls-15,.cls-16{fill:none;}.cls-11{stroke:#d3d3d3;stroke-miterlimit:10;}.cls-11,.cls-14,.cls-15{stroke-width:3.69px;}.cls-12{fill:#fed892;}.cls-13,.cls-14,.cls-16{stroke:#fed385;}.cls-13,.cls-14,.cls-15,.cls-16{stroke-linecap:round;stroke-linejoin:round;}.cls-13{stroke-width:3.84px;}.cls-15{stroke:#74d5de;}.cls-16{stroke-width:2.39px;}</style></defs><path class=\"cls-1\" d=\"M711.1,528.1c0-21.86-47-74.85-84.67-74.85-28.93,0-29.4,15.3-57.59,15.3-43.46,0-75.71-72.66-159.29-72.66-89.05,0-205.41,83.58-205.41,149.14C204.14,638.91,711.1,661.41,711.1,528.1Z\"/><path class=\"cls-2\" d=\"M935.51,849.68c1-102,2.6-265.85,2.6-290.1,0-35.58-52.84-142.15-145.27-142.15-101.26,0-151.3,116.21-217.58,116.21-60.75,0-65.54-30.76-140.74-30.76-49,0-149.82,62.8-149.82,127l67.11,219.75Z\"/><ellipse class=\"cls-3\" cx=\"602.59\" cy=\"679.96\" rx=\"11.73\" ry=\"5.25\" transform=\"translate(-105.6 1249.11) rotate(-87.24)\"/><path class=\"cls-3\" d=\"M590.19,739.68c-.2-1.94,4.32-42.23,7.92-55a16,16,0,0,1,6.71-.94l-.34,39.7-5,18.67Z\"/><polygon points=\"620.7 683.58 589.26 686.18 588.26 679.96 618.52 670.39 620.7 683.58\"/><rect class=\"cls-4\" x=\"544.3\" y=\"999.24\" width=\"13.77\" height=\"11.65\"/><rect class=\"cls-4\" x=\"586.9\" y=\"1001.06\" width=\"13.77\" height=\"11.65\"/><path class=\"cls-5\" d=\"M542.87,805V999.88H559l18.54-104.26S580.09,839.22,542.87,805Z\"/><path class=\"cls-6\" d=\"M596,801.16c.45,5.62,6.06,107.88,6.06,107.88v93.11l-16.55,1.77-10.64-99-32-99.92C547.71,802.34,583.16,797.33,596,801.16Z\"/><path class=\"cls-7\" d=\"M566.51,715.47c31.79,0,33.3,80.83,29.52,85.69s-49,8.17-53.16,3.83S526.9,715.47,566.51,715.47Z\"/><ellipse class=\"cls-4\" cx=\"607.86\" cy=\"679.96\" rx=\"11.73\" ry=\"5.25\" transform=\"translate(-100.59 1254.37) rotate(-87.24)\"/><polygon points=\"585.61 1010.89 585.61 1022.54 618.35 1022.54 618.35 1018.3 601.32 1010.89 585.61 1010.89\"/><polygon points=\"543.87 1009.05 543.87 1020.7 576.61 1020.7 576.61 1016.46 559.58 1009.05 543.87 1009.05\"/><rect x=\"585.55\" y=\"681.34\" width=\"3.86\" height=\"3.86\" transform=\"translate(-98.87 99.39) rotate(-8.92)\"/><path class=\"cls-3\" d=\"M568.84,722.5c0,2.67-12.41,3-12.41,0V696h12.41Z\"/><ellipse class=\"cls-8\" cx=\"568.46\" cy=\"688.32\" rx=\"13.03\" ry=\"19.89\"/><path class=\"cls-9\" d=\"M545.77,680.12c0-6.13,2.67-10,4.84-11.23,4.19-2.4,5.94-1.33,10.16-3.2,4.57-2,8.49-7.84,13.84-7.84,5,0,4.55,2.84,7.94,3.68,2,.49,13.36-2.12,13.36,5.23,0,11.32-12.57,12.24-15.48,13.69a37.43,37.43,0,0,0-1.52-3.83c-2.29,2.36-10.58,4-11.92,4.53-3.1,1.28-4.58,6.13-4.58,9.3s-2.87,3.18-3.59,3.18C552.19,693.63,545.77,689.38,545.77,680.12Z\"/><circle class=\"cls-8\" cx=\"556.67\" cy=\"691.67\" r=\"4.33\"/><rect class=\"cls-10\" x=\"512.81\" y=\"718.34\" width=\"25.14\" height=\"84.61\" rx=\"12.57\" ry=\"12.57\"/><ellipse class=\"cls-11\" cx=\"544.89\" cy=\"751.24\" rx=\"30.38\" ry=\"32.89\"/><path class=\"cls-4\" d=\"M576.84,736.83c2.53,0,15.29.53,20.48,2.4.4-2.53,2.66-38.77,6.51-50.91,1.47-1.62,7.45-1.43,7.45,0s8.51,60.88,0,67.93-37.37-2.4-38.56-3.33S576.84,736.83,576.84,736.83Z\"/><path class=\"cls-12\" d=\"M549.66,734.69c2.82-11.48,28.36-1.93,30.67.69,2.77,3.14-2.18,20.84-6,21.66C568.1,758.39,546,749.58,549.66,734.69Z\"/><polygon class=\"cls-12\" points=\"266.38 341.65 142.64 849.68 390.13 849.68 266.38 341.65\"/><polygon class=\"cls-5\" points=\"169.62 341.65 45.87 893.9 293.36 893.9 169.62 341.65\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"891.44\" x2=\"170.29\" y2=\"395.36\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"558.95\" x2=\"197.18\" y2=\"529.72\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"698.94\" x2=\"210.7\" y2=\"655.02\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"844.98\" x2=\"233.14\" y2=\"776.66\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"558.95\" x2=\"143.4\" y2=\"529.72\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"698.94\" x2=\"129.89\" y2=\"655.02\"/><line class=\"cls-13\" x1=\"170.29\" y1=\"844.98\" x2=\"107.44\" y2=\"776.66\"/><rect class=\"cls-6\" x=\"190.5\" y=\"734.34\" width=\"135.39\" height=\"197.16\" rx=\"67.69\" ry=\"67.69\"/><line class=\"cls-14\" x1=\"258.19\" y1=\"982.94\" x2=\"258.19\" y2=\"795.85\"/><path class=\"cls-14\" d=\"M258.19,875.41c37,0,37-22.28,37-56\"/><path class=\"cls-14\" d=\"M258.19,841.33c-25.65,0-25.65-15.47-25.65-38.84\"/><path class=\"cls-7\" d=\"M1152.37,849.68V667.57a81.52,81.52,0,0,0-81.28-81.28h0a81.65,81.65,0,0,0-13.07,1.06V377.78a55.64,55.64,0,0,0-55.63-55.64h0a55.64,55.64,0,0,0-55.64,55.64v44.86a80.64,80.64,0,0,0-26-4.31h0a81.52,81.52,0,0,0-81.28,81.29V649H804.08a55.7,55.7,0,0,0-55.53,55.53V833.86a55.18,55.18,0,0,0,2.32,15.82Z\"/><path class=\"cls-15\" d=\"M1000.16,740.85c91.61,0,91.61-41,91.61-103\"/><path class=\"cls-15\" d=\"M1000.25,795.48c-50.4,0-50.4-22.56-50.4-56.67\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"849.68\" x2=\"1000.16\" y2=\"364.17\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"637.85\" x2=\"949.94\" y2=\"587.62\"/><line class=\"cls-15\" x1=\"1000.16\" y1=\"534.21\" x2=\"1030.55\" y2=\"503.83\"/><path class=\"cls-2\" d=\"M750.49,341.65a47.18,47.18,0,0,0-86.25-35.55,37.43,37.43,0,0,0-52.84,34.1c0,.49,0,1,0,1.45Z\"/><path class=\"cls-2\" d=\"M291.91,268.28a47.18,47.18,0,0,1,86.25-35.55A37.4,37.4,0,0,1,431,266.83c0,.48,0,1,0,1.45Z\"/><path class=\"cls-6\" d=\"M924.33,936.06c-50.28,0-91,21.47-91,48h182.05C1015.35,957.53,974.6,936.06,924.33,936.06Z\"/><path class=\"cls-9\" d=\"M502.76,1006.93c-12.55,0-22.73,8.76-22.73,19.57H525.5C525.5,1015.69,515.32,1006.93,502.76,1006.93Z\"/><path class=\"cls-9\" d=\"M833.3,902.44c-12.56,0-22.73,13-22.73,29.06H856C856,915.45,845.85,902.44,833.3,902.44Z\"/><path class=\"cls-9\" d=\"M120.87,974.57c-20,0-36.16,6.51-36.16,14.53H157C157,981.08,140.84,974.57,120.87,974.57Z\"/><path class=\"cls-9\" d=\"M1030.55,974.57c-20,0-36.16,6.51-36.16,14.53h72.31C1066.7,981.08,1050.52,974.57,1030.55,974.57Z\"/><rect class=\"cls-6\" x=\"838.22\" y=\"746.55\" width=\"87.67\" height=\"127.66\" rx=\"43.83\" ry=\"43.83\"/><line class=\"cls-16\" x1=\"882.06\" y1=\"907.53\" x2=\"882.06\" y2=\"786.38\"/><path class=\"cls-16\" d=\"M882.06,837.9C906,837.9,906,823.47,906,801.64\"/><path class=\"cls-16\" d=\"M882.06,815.83c-16.61,0-16.61-10-16.61-25.16\"/><line class=\"cls-14\" x1=\"331.71\" y1=\"947.65\" x2=\"412.75\" y2=\"947.65\"/><line class=\"cls-14\" x1=\"668.4\" y1=\"893.9\" x2=\"722.14\" y2=\"893.9\"/><line class=\"cls-14\" x1=\"627.87\" y1=\"907.53\" x2=\"681.62\" y2=\"907.53\"/><line class=\"cls-14\" x1=\"116.88\" y1=\"918.64\" x2=\"170.63\" y2=\"918.64\"/><line class=\"cls-14\" x1=\"748.55\" y1=\"999.24\" x2=\"824.1\" y2=\"999.24\"/></svg>\n\t\t\t\t\t<h2 class=\"text-xl font-semibold\">Ya ampun! Data tidak ditemukan</h2>\n\t\t\t\t\t<p class=\"mt-2 leading-loose text-gray-600 text-sm\">Apa yang kamu cari sehingga data tidak ditemukan? Tapi, sepertinya ini salah kami memiliki konten yang terlalu sedikit \uD83D\uDE3F.</p>\n\t\t\t\t</div>\n\t\t\t";
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
      var tpl = "\n\t    \t\t<div class=\"bg-white rounded border border-gray-200 w-full\">\n\t    \t\t\t<div class=\"pb-8 pt-6 px-6\">\n\t    \t\t\t\t<div class=\"float-right\">\n\t    \t\t\t\t\t<a target=\"_blank\" ".concat(_community.website ? "href=\"".concat(_community.website, "\" ") : '', "class=\"").concat(!_community.website ? 'pointer-events-none opacity-50 ' : '', "flex leading-relaxed items-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 border border-gray-200 uppercase text-xs font-semibold tracking-wider py-1 px-3 rounded-full\">\n\t    \t\t\t\t\t\tWebsite\n\t    \t\t\t\t\t\t<svg class=\"ml-1 w-3 fill-current\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"arrow-forward\"><rect width=\"24\" height=\"24\" transform=\"rotate(-90 12 12)\" opacity=\"0\"/><path d=\"M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z\"/></g></g></svg>\n\t    \t\t\t\t\t</a>\n\t    \t\t\t\t</div>\n\t    \t\t\t\t<div class=\"rounded p-2 w-16 h-16 flex-shrink-0 flex items-center justify-center border\" ").concat(_community.logo_bg ? 'style="background-color: ' + _community.logo_bg + ';"' : '', ">\n\t    \t\t\t\t\t<img src=\"").concat(_community.logo, "\" alt=\"").concat(_community.name, "\" class=\"w-full\">\n\t    \t\t\t\t</div>\n\t        \t\t\t<h2 class=\"font-bold text-lg mt-4 truncate\">").concat(_community.name, "</h2>\n\t        \t\t\t<p class=\"mt-1 text-sm text-gray-600 font-light leading-relaxed h-12\">").concat(_community.short_description, "</p>\n\t    \t\t\t</div>\n\t    \t\t\t<div class=\"flex px-6 pb-6\">\n\t    \t\t\t\t<div class=\"flex text-sm items-center\">\n\t    \t\t\t\t\t<svg class=\"w-5 mr-1 fill-current text-gray-600\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"person\"><rect width=\"24\" height=\"24\" opacity=\"0\"/><path d=\"M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z\"/><path d=\"M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z\"/></g></g></svg>\n\t    \t\t\t\t\t").concat(_community.formatted_member, "+\n\t    \t\t\t\t</div>\n\t        \t\t\t<div class=\"inline-flex ml-auto\">\n\t        \t\t\t\t").concat(_community.facebook ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.facebook, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"facebook\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z\"/></g></g></svg>\n\t        \t\t\t\t</a>") : '', "\n\n\t        \t\t\t\t").concat(_community.twitter ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.twitter, "\">\n\t\t\t\t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><g data-name=\"twitter\"><polyline points=\"0 0 24 0 24 24 0 24\" opacity=\"0\"/><path d=\"M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20\"/></g></g></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\n\t\t\t\t\t\t\t").concat(_community.github ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.github, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g data-name=\"Layer 2\"><rect width=\"24\" height=\"24\" transform=\"rotate(180 12 12)\" opacity=\"0\"/><path d=\"M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1\" data-name=\"github\"/></g></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\n\t\t\t\t\t\t\t").concat(_community.telegram ? "\n\t        \t\t\t\t<a target=\"_blank\" href=\"".concat(_community.telegram, "\">\n\t        \t\t\t\t\t<svg class=\"fill-current text-gray-600 hover:text-indigo-600 w-5\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z\"/></svg>\n\t\t\t\t\t\t\t</a>") : '', "\n\t        \t\t\t</div>\n\t        \t\t</div>\n\t    \t\t</div>\n\t    \t");
      return tpl;
    },

    /**
     * Community shimmer template
     * @return {String}           Interpolated template string
     */
    communityShimmer: function communityShimmer() {
      var tpl = "\n\t\t    \t<div class=\"w-full\">\n\t\t    \t\t<div class=\"bg-white rounded border border-gray-200\">\n\t\t    \t\t\t<div class=\"pb-8 pt-6 px-6\">\n\t\t    \t\t\t\t<div class=\"float-right\">\n\t\t    \t\t\t\t\t<div class=\"flex py-1 px-3 rounded-full bg-gray-200 w-16 h-6\">\n\t\t    \t\t\t\t\t</div>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<div class=\"rounded p-2 w-16 h-16 flex-shrink-0 bg-gray-100\"></div>\n\t\t        \t\t\t<h2 class=\"mt-4 w-32 h-6 bg-gray-200 rounded\"></h2>\n\t\t        \t\t\t<div class=\"mt-3 bg-gray-100 h-3 rounded w-full\"></div>\n\t\t        \t\t\t<div class=\"mt-2 bg-gray-100 h-3 rounded w-20\"></div>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<div class=\"flex px-6 pb-6\">\n\t\t    \t\t\t\t<div class=\"flex text-sm items-center\">\n\t\t\t    \t\t\t\t<div class=\"rounded w-16 h-4 bg-gray-200\"></div>\n\t\t    \t\t\t\t</div>\n\t\t        \t\t\t<div class=\"inline-flex ml-auto\">\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100 mr-2\"></div>\n\t\t\t    \t\t\t\t<div class=\"rounded h-4 w-4 bg-gray-100\"></div>\n\t\t        \t\t\t</div>\n\t\t        \t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t";
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
      var tpl = "\n\t\t\t<div class=\"bg-white rounded border border-gray-200 mb-10\">\n\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t        <a href=\"".concat(routes.single + _post.user.the_username, "\">\n\t\t\t            <img class=\"rounded w-12 rounded border\" src=\"").concat(_post.user.the_avatar_sm, "\">\n\t\t\t        </a>\n\t\t\t        <div class=\"ml-3\">\n\t\t\t            <h4 class=\"mb-1 font-bold\">\n\t\t\t                <a class=\"text-indigo-600\" href=\"").concat(routes.single + _post.user.the_username, "\">\n\t\t\t                    ").concat(_post.user.name, "\n\t\t\t                </a>\n\t\t\t            </h4>\n\t\t\t            <div class=\"-mx-1 flex items-center text-xs text-gray-500\">\n\t\t\t                <p class=\"mx-1\">").concat(_post.user.the_username, "</p>\n\t\t\t                <p class=\"mx-1\">&bull;</p>\n\t\t\t                <p class=\"mx-1 text-blue-500 font-semibold\">").concat(_post.time, "</p>\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t    </div>\n\n\t\t\t    ").concat(_post.type == 'link' ? "\n\t\t\t\t    <div class=\"md:border border-b border-t md:rounded md:mx-6\">\n\n\t\t\t\t        ".concat(_post.post_card.has_embeddable_code ? "\n\n\t\t\t\t            <div class=\"embeddable-frame\">\n\t\t\t\t                ".concat(_post.post_card.embeddable_code, "\n\t\t\t\t            </div>") : // else
      "\n\t\t\t\t        \t<a href=\"".concat(_post.post_card.url, "\" target=\"_blank\">\n\t\t\t\t        \t").concat(_post.post_card.thumbnail !== null ? "<img src=\"".concat(_post.post_card.thumbnail, "\" class=\"w-full h-64 object-cover\">") : // else
      "<img src=\"".concat(_post.post_card.default_thumbnail, "\" class=\"w-full h-64 object-scale-down\">"), "\n\t\t\t\t\t        </a>\n\t\t\t\t        "), "\n\n\t\t\t\t        <div class=\"p-4 border-t bg-gray-100\">\n\t\t\t\t        \n\t\t\t\t            <h2 class=\"md:text-lg mb-2 text-base font-semibold hover:text-indigo-600\"><a target=\"_blank\" href=\"").concat(_post.post_card.url, "\">").concat(_post.post_card.title, "</a></h2>\n\n\t\t\t\t            ").concat(_post.post_card.description ? "\n\t\t\t\t                <p class=\"text-gray-600 text-sm break-all\"><a target=\"_blank\" href=\"".concat(_post.post_card.url, "\">").concat(_post.post_card.description.substr(0, 200), "</a></p>\n\t\t\t\t            ") : '', "\n\t\t\t\t            <div class=\"uppercase tracking-wider text-xs mt-3 text-teal-500 font-semibold\"><a target=\"_blank\" href=\"//").concat(Object(_utils_get_hostname__WEBPACK_IMPORTED_MODULE_10__["default"])(_post.post_card.url), "\">").concat(Object(_utils_get_hostname__WEBPACK_IMPORTED_MODULE_10__["default"])(_post.post_card.url), "</a></div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t    ") : "", "\n\n\t\t\t    ").concat(_post.type !== 'link' ? "\n\t\t\t    \n\t\t\t    <div class=\"relative".concat(_post.content_object.length > 1 && options.carousel ? ' carousel-outer w-full' : '', "\"> \n\t\t\t        <div class=\"").concat(_post.content_object.length > 1 && options.carousel ? 'carousel w-full' : '', "\">\n\t\t\t            \n\t\t\t            ").concat('carousel' in options && options.carousel == false ? "<a href=\"".concat(routes.single + _post.slug, "\">\n\t\t\t                    <div data-blurry=\"").concat(_post.blurry_image, "\" data-src=\"").concat(_post.first_slide_media, "\" class=\"lazy-image w-full bg-gray-200 bg-cover h-40 sm:h-64\"></div>\n\t\t\t                </a>") : // else
      _post.content_object.map(function (slide) {
        var img = slide.url;

        if (Object(_utils_is_video__WEBPACK_IMPORTED_MODULE_4__["default"])(slide.type.replace(/video\//g, ''))) {
          return "<video controls=\"\" poster=\"".concat(slide.video_thumbnail_url, "\">\n\t\t\t\t                        <source src=\"").concat(img, "\" type=\"").concat(slide.type, "\">\n\t\t\t\t                    </video>");
        } else {
          return "<img src=\"".concat(img, "\" alt=\"image\">");
        }
      }).join(""), "\n\t\t\t        </div>\n\n\t\t\t        ").concat(_post.content_object.length > 1 && options.carousel !== false ? "\n\t\t\t\t        <button class=\"prev\">&lsaquo;</button>\n\t\t\t\t        <button class=\"next\">&rsaquo;</button>" : '', "\n\t\t\t    </div>\n\t\t\t    ") : '', "\n\n\t\t\t    <div class=\"p-6 text-gray-700 text-sm leading-relaxed\">\n\t\t\t        ").concat(_post.title ? "<h2 class=\"text-xl mb-2 text-black font-bold\"><a class=\"text-indigo-600\" href=\"".concat(routes.single + _post.slug, "\">\n\t\t\t\t            ").concat(_post.title, "\n\t\t\t\t        </a></h2>") : '', "\n\n\t\t\t        ").concat(!options.discover && _post.type !== 'link' && (options.truncate_content || !options.truncate_content && _post.is_single_caption) ? "<div class=\"mb-3\">".concat(options.truncate_content ? _post.first_slide_caption_truncated : _post.first_slide_caption, "</div>") : '', "\n\n\t\t\t        ").concat(!options.discover && !options.truncate_content && !_post.is_single_caption ? _post.content_object.map(function (slide, index) {
        return "<div data-index=\"".concat(index, "\" class=\"mb-3 markdowned ").concat(index != 0 ? 'hidden' : '', "\">").concat(slide.caption || '<i>Tidak ada keterangan</i>', "</div>");
      }).join('') : '', "\n\n\t\t\t        <div class=\"flex flex-wrap\">\n\t\t\t        ").concat(_post.tags.map(function (tag) {
        if (tag.tag !== null) {
          return "<a class=\"mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3 text-xs\" href=\"".concat(routes.search + Object(_utils_full_url_with_query__WEBPACK_IMPORTED_MODULE_7__["default"])({
            tag: tag.tag.name
          }), "\">\n\t\t                        #").concat(tag.tag.name, "\n\t\t                    </a>");
        } else {
          return '';
        }
      }).join(''), "\n\t\t\t        </div>\n\n\t\t\t    </div>\n\t\t        <div class=\"border-t border-gray-200\">\n\t\t            <div class=\"flex w-full items-center\">\n\t\t                <a data-love ").concat(_post.is_post_loved ? 'data-loved' : '', " class=\"py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" href=\"#\">\n\t\t                    <span></span> \n\t\t                    <div class=\"ml-2 inline-block post-love-count\">").concat(_post.total_loves, "</div>\n\t\t                </a>\n\t\t                <a class=\"py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" href=\"").concat(routes.single + _post.slug + '#comments', "\">\n\t\t                    <svg class=\"stroke-current\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg> \n\t\t                    <div class=\"ml-2 inline-block post-comment-count\">").concat(_post.total_comments, "</div>\n\t\t                </a>\n\t\t                <a class=\"py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" data-save ").concat(_post.is_post_saved ? 'data-saved' : '', " href=\"#\">\n\t\t                \t<span></span>\n\t\t                    <div class=\"ml-2 inline-block post-save-count\">").concat(_post.total_saves, "</div>\n\t\t                </a>\n\t\t                <a data-url=\"").concat(routes.single + _post.slug, "\" class=\"share-button py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200\" href=\"#\">\n\t\t                    <svg class=\"stroke-current\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line></svg>\n\t\t                </a>\n\t\t            </div>\n\t\t        </div>\n\t\t\t</div>");
      return tpl;
    },

    /**
     * Post shimmer template
     * @param  {String} shi_class Generated unique shimmer class
     * @return {String}           Interpolated template string
     */
    postShimmer: function postShimmer(shi_class) {
      var tpl = "\n\t\t\t\t<div class=\"".concat(shi_class, " bg-white rounded border border-gray-200 mb-10\">\n\t\t\t\t    <div class=\"flex p-6 items-center\">\n\t\t\t\t\t    <div class=\"w-12 h-12 bg-gray-200 rounded\"></div>\n\t\t\t\t        <div class=\"ml-3\">\n\t\t\t\t            <div class=\"mb-3 w-32 h-4 bg-gray-200 rounded\"></div>\n\t\t\t\t            <div class=\"-mx-1 flex items-center\">\n\t\t\t\t                <div class=\"mx-1 h-2 w-12 bg-gray-100 rounded\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class=\"bg-gray-100 w-full\" style=\"height: 470px;\">\n\t\t\t\t    </div>\n\t\t\t\t    \n\n\t\t\t\t    <div class=\"p-6\">\n\t\t\t\t        <div class=\"mb-4 bg-gray-200 w-64 h-8 rounded-lg\"></div>\n\n\t\t\t\t        <div class=\"mb-3 bg-gray-100 w-full h-3 rounded\"></div>\n\t\t\t\t        <div class=\"bg-gray-100 w-40 h-3 rounded\"></div>\n\n\t\t\t\t        <div class=\"flex\">\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 mt-6 rounded-full\"></div>\n\t\t\t\t\t        <div class=\"border border-gray-200 w-20 h-8 mt-6 rounded-full ml-2\"></div>\n\t\t\t\t        </div>\n\n\t\t\t\t        <div class=\"mt-8\">\n\t\t\t\t            <div class=\"flex w-full\">\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t\t            <div class=\"w-12 h-12 rounded-full bg-gray-200 mr-2\"></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t");
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
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-slider/dist/tiny-slider.css */ "./node_modules/tiny-slider/dist/tiny-slider.css");
/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/post */ "./resources/js/libs/post.js");


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

window.tns = tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_1__["tns"];


__webpack_require__(/*! ./comps/comment */ "./resources/js/comps/comment.js");

var mypost = _libs_post__WEBPACK_IMPORTED_MODULE_3__["post"].init('.post', {
  url: routes.post_show.replace(/slug/g, post_data.slug),
  carousel: true,
  lazyimage: false,
  first: true
});
mypost.onRender.then(function (_ref) {
  var data = _ref.lastData.data;
  $('#comment-box').classList.remove('hidden');
  if (window.outerWidth < 640) $('#links-info-alert').classList.remove('hidden');
  /**
   * Links
   */

  var link_tpl = function link_tpl(_ref2) {
    var originalName = _ref2.originalName,
        name = _ref2.name,
        links = _ref2.links;
    return "\n            <div class=\"mb-12\">\n            \t<h2 class=\"pb-3 font-bold text-indigo-600\">".concat(name, "</h2>\n            \t<div class=\"bg-white rounded border border-gray-200\">\n            \t").concat(links.length > 0 ? links.map(function (page) {
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
    sidebarSticky();
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
    return "<div class=\"mb-12\">\n                \t<h2 class=\"pb-3 font-bold text-indigo-600\">Cari Inspirasi Desain</h2>\n                \t<div class=\"flex flex-wrap border border-gray-200 bg-white rounded\">\n\t                \t<a href=\"https://dribbble.com/search/".concat(keyword, "\" class=\"flex items-center w-1/3 border-r hover:bg-gray-100 rounded p-4\">\n\t\t\t\t\t\t\t<svg class=\"h-4\" viewBox=\"0 0 512 126\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\"> <g> <path d=\"M156.433566,50.3217928 C162.293279,50.3217928 167.043422,45.5700082 167.043422,39.7086531 C167.043422,33.847298 162.293279,29.0955133 156.433566,29.0955133 C150.573305,29.0955133 145.823161,33.847298 145.823161,39.7086531 C145.823161,45.5700082 150.573305,50.3217928 156.433566,50.3217928 L156.433566,50.3217928 Z M506.593862,86.5830801 C504.979842,85.4477947 503.73349,85.2601307 502.69997,87.4644992 C484.879547,126.059824 454.849472,106.80046 457.833494,108.495455 C464.494199,105.447966 482.01261,91.3977841 479.365069,71.9983566 C477.756521,60.1421478 467.581081,54.8831778 456.77973,56.7663837 C437.926334,60.0529663 430.989877,80.3885256 434.521025,98.3933303 C435.139277,101.484589 436.243376,104.035288 437.345834,106.532916 C416.040221,123.858738 407.579473,91.0224561 406.619268,87.0990194 C406.580969,86.8894703 423.070236,73.1451315 427.656242,40.3936542 C432.462739,6.06864392 421.513117,-0.180623125 410.3151,0.0141535402 C389.595459,0.375256346 383.997271,43.6660115 391.518605,79.7456531 C390.889411,79.9097908 387.956818,81.5336592 383.246068,81.7153048 C379.855531,71.0490939 365.371479,61.6992668 361.5799,65.3015409 C352.09165,74.3154329 363.881109,91.9356085 372.175531,93.3181945 C367.19286,124.009197 336.030235,116.407436 341.831406,77.9565529 C351.979489,59.1124576 359.697241,31.091427 358.319579,14.1754019 C357.83209,8.18601947 353.404204,0.161877415 343.389072,0.558543377 C324.128614,1.32123627 322.034765,44.6240282 324.293299,75.3577069 C324.180591,74.6010324 323.10932,79.0918382 315.216488,81.3252044 C313.349149,70.9615538 296.662916,60.5596045 292.734555,65.5608784 C285.382283,74.9211008 298.124288,91.6095217 304.160724,92.7743518 C299.178052,123.464808 268.015974,115.863046 273.817145,77.412163 C283.964681,58.5680678 291.682433,30.5470372 290.304771,13.6310121 C289.817282,7.64162963 285.389943,-0.382512421 275.374264,0.0141535402 C256.113807,0.777393562 254.019957,44.0796384 256.278491,74.8133171 C256.164689,74.0451529 255.06825,78.6831355 246.853161,80.8803914 C246.577957,67.4353302 229.830994,61.2708676 225.80798,65.5608784 C218.638448,73.2069567 227.449904,88.8974208 235.602073,92.7743518 C230.619401,123.464808 199.457323,115.863046 205.258495,77.412163 C215.406031,58.5680678 223.123783,30.5470372 221.746121,13.6310121 C221.258632,7.64162963 216.831293,-0.382512421 206.815614,0.0141535402 C187.555156,0.777393562 186.005697,46.2566506 188.264231,76.9903293 C181.920311,104.170975 160.645337,138.115186 163.408868,70.1178864 C163.681884,65.3485937 163.980067,63.5365141 161.60226,61.7512438 C159.819725,60.3626393 155.767714,61.0301324 153.553497,61.0859392 C150.861093,61.1937229 150.18594,62.7694442 149.591214,65.1499871 C148.204799,71.298036 147.956404,77.2578737 147.758344,85.3897994 C147.628128,89.1939628 147.322832,90.9688378 145.858725,96.1555872 C144.394617,101.342337 136.048765,110.820738 131.478079,109.23681 C125.138536,107.055421 127.217066,89.1583996 128.405969,76.8612077 C129.396266,67.1426181 126.226769,62.7792925 118.104144,61.1920815 C113.349077,60.2006902 110.459707,60.3533382 105.508222,58.7923892 C100.825375,57.3162447 99.7655927,48.4577364 89.7789116,51.4100254 C84.3147696,53.0256869 87.826768,64.6012203 86.514214,73.1806947 C80.0592278,115.381029 66.6278447,116.539841 60.3966328,96.0395966 C88.4597921,27.3102429 68.5148805,0.21440146 56.8414116,0.21440146 C44.681001,0.21440146 30.7807315,8.58979806 36.6667072,62.1818315 C33.8046939,61.346918 32.9249162,60.8971809 29.7920758,60.8971809 C12.0728705,60.8971809 0,75.2214727 0,92.8914367 C0,110.561401 12.0728705,124.885692 29.7920758,124.885692 C40.2525675,124.885692 47.5955384,120.128984 53.1581629,112.769599 C56.786699,117.966744 61.2058314,124.96612 69.2868745,124.650976 C93.3735259,123.713203 100.379467,74.3039433 101.205627,71.5480723 C103.780946,71.9447383 106.217296,72.6959415 108.594556,73.0926075 C112.556839,73.68788 112.84408,75.2559416 112.754898,79.2412035 C111.705512,112.844555 117.906085,124.610488 131.971586,124.610488 C139.808611,124.610488 146.794309,116.911339 151.606278,111.405068 C155.200345,118.822995 160.927107,124.383978 168.609843,124.610488 C187.227428,125.072809 194.354831,95.400554 193.705393,99.3053885 C193.195473,102.369291 199.745111,124.443068 218.910916,124.523495 C242.652332,124.622525 247.064899,98.5147922 247.59178,94.1416183 C247.657435,93.2711417 247.685886,93.3625117 247.59178,94.1416183 C247.585762,94.2225929 247.579197,94.3090387 247.572631,94.4069742 C255.109831,93.0052388 258.999346,88.9641701 258.999346,88.9641701 C258.999346,88.9641701 265.051101,124.929462 287.469567,124.523495 C310.748114,124.101662 315.138249,100.502499 315.715466,95.9000796 C315.790969,94.8080172 315.836381,94.9360445 315.715466,95.9000796 C315.712183,95.945491 315.709448,95.9854312 315.706165,96.0352196 C324.659326,92.7776346 327.013607,89.5085599 327.013607,89.5085599 C327.013607,89.5085599 331.824481,124.758759 355.483828,125.067338 C376.568402,125.342542 384.3819,103.752424 384.427859,94.7150058 C387.984174,94.7527575 394.561717,92.6058372 394.407427,92.4827339 C394.407427,92.4827339 402.13065,123.302858 423.697242,124.885692 C433.823987,125.628689 441.41973,119.188475 445.749681,116.249864 C455.926215,124.491215 489.811336,135.016815 511.206677,98.7418492 C514.226263,93.5359505 507.733525,87.3857131 506.593862,86.5830801 L506.593862,86.5830801 Z M28.9369187,112.918964 C18.598983,112.918964 11.9700109,103.360135 11.9700109,93.0533858 C11.9700109,82.7466363 18.0545932,73.1878073 28.3925288,73.1878073 C33.0452838,73.1878073 35.632093,73.6999168 39.2557049,76.8513594 C39.9133497,79.43981 41.7746705,85.4122316 42.6812574,88.1243325 C43.8947817,91.7528686 45.3386458,94.8419389 46.7950938,98.2040249 C44.7143757,106.827269 37.8960981,112.918964 28.9369187,112.918964 L28.9369187,112.918964 Z M54.1287635,77.1544669 C53.69927,76.4694659 53.7884515,76.8902053 53.3075282,76.2429559 C51.4128327,71.0884869 47.7607702,59.5818913 47.3378423,46.5121582 C46.8596546,31.7288282 49.3239077,14.4002705 56.5880925,14.4002705 C61.5100332,14.4002705 66.7410997,49.5197069 54.1287635,77.1544669 L54.1287635,77.1544669 Z M199.690399,61.7512438 C198.523927,52.9780869 198.463197,13.8679174 207.852417,14.9446603 C213.035883,17.0445279 204.565287,53.9503289 199.690399,61.7512438 L199.690399,61.7512438 Z M268.249049,61.7512438 C267.082578,52.9780869 267.021847,13.8679174 276.411067,14.9446603 C281.594534,17.0445279 273.123937,53.9503289 268.249049,61.7512438 L268.249049,61.7512438 Z M336.263857,62.2956336 C335.096839,53.5224768 335.036655,14.4123072 344.425328,15.4890502 C349.609342,17.5889177 341.138198,54.4947187 336.263857,62.2956336 L336.263857,62.2956336 Z M411.351903,12.6554874 C419.936302,11.7658614 419.581764,49.2521625 402.351689,72.9175273 C400.13036,64.364315 396.723409,15.593004 411.351903,12.6554874 L411.351903,12.6554874 Z M447.432639,93.3181945 C444.675127,79.3911158 451.799247,70.2437252 459.143312,69.2408442 C461.709878,68.8305001 465.429784,70.4937615 466.171686,73.6025284 C467.391776,79.461695 465.994964,88.1522359 449.557674,99.1795496 C449.582295,99.2736552 448.046514,96.4193017 447.432639,93.3181945 L447.432639,93.3181945 Z\" fill=\"#000000\"></path> </g> </svg>\n\t\t\t\t\t\t</a>\n\t                \t<a href=\"https://www.uplabs.com/search?q=").concat(keyword, "\" class=\"flex items-center w-1/3 border-r hover:bg-gray-100 rounded p-4\">\n\t                \t\t<svg class=\"h-4\" viewBox=\"0 0 306 71\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><linearGradient id=\"a\"><stop offset=\"0\" stop-color=\"#6a11cb\"/><stop offset=\"1\" stop-color=\"#2575fc\"/></linearGradient><linearGradient id=\"b\" x1=\"-16.826117%\" x2=\"219.3%\" xlink:href=\"#a\" y1=\"68.255184%\" y2=\"-19.959866%\"/><linearGradient id=\"c\" x1=\"-104.295098%\" x2=\"112.418627%\" xlink:href=\"#a\" y1=\"86.9491%\" y2=\"21.510283%\"/><g fill=\"none\" transform=\"\"><path d=\"m36.3090909 2.5875v26.0475c0 4.3125-.8636364 7.4175-2.5909091 9.315s-4.4909091 2.9325-8.2909091 2.9325-6.5636363-.8625-8.2909091-2.76c-1.7272727-1.8975-2.5909091-5.0025-2.5909091-9.4875v-26.0475h-14.33636359v26.0475c0 7.7625 1.55454545 13.455 4.66363636 17.595.51818182.5175.86363637 1.2075 1.38181818 1.725 4.14545455 4.14 10.53636365 6.21 19.17272725 6.21 8.4636364 0 14.8545455-2.07 19-6.21.5181818-.5175.8636364-1.035 1.3818182-1.725 3.1090909-4.14 4.6636364-10.005 4.6636364-17.595v-26.0475z\" fill=\"url(#b)\"/><path d=\"m59.4545455 67.7925v-65.3775h13.8181818v8.1075c1.9-3.2775 4.1454545-5.6925 6.9090909-7.4175 2.7636363-1.5525 5.8727273-2.415 9.5-2.415 7.0818182 0 12.6090908 2.415 16.5818178 7.0725 3.972728 4.6575 6.045455 11.2125 6.045455 19.4925 0 8.1075-2.072727 14.49-6.045455 19.32-3.972727 4.83-9.3272724 7.245-15.8909087 7.245-3.9727273 0-7.2545455-.69-10.0181818-2.2425-2.7636364-1.38-5.1818182-3.795-7.0818182-6.9.1727272 1.2075.3454545 2.5875.3454545 4.14 0 1.38.1727273 3.105.1727273 5.0025v13.8h-14.3363636zm13.1272727-40.5375c0 4.485 1.0363636 7.935 3.2818182 10.5225 2.2454545 2.415 5.3545454 3.795 9.1545454 3.795 3.9727273 0 7.0818182-1.2075 9.1545455-3.795 2.2454545-2.415 3.2818182-6.0375 3.2818182-10.5225s-1.0363637-7.935-3.2818182-10.5225c-2.2454546-2.5875-5.3545455-3.795-9.3272728-3.795-3.8 0-6.9090909 1.38-9.1545454 3.9675-2.0727273 2.2425-3.1090909 5.865-3.1090909 10.35z\" fill=\"url(#c)\"/><g fill=\"#3a3a3a\"><path d=\"m124 68v-65h14v65z\"/><path d=\"m46 68c-.5189873-.5217391-.8649789-1.2173913-1.3839662-1.7391304-4.1518988-4.1739131-10.5527427-6.2608696-19.2025317-6.2608696-8.4767932 0-14.8776371 2.0869565-19.02953586 6.2608696-.51898734.5217391-.8649789 1.0434782-1.38396624 1.7391304z\"/><path d=\"m198 67.9350649h-14.029412l.173203-7.0551948c-1.905229 3.0974026-4.330066 5.3344156-7.101307 6.8831169-2.771242 1.3766234-6.062092 2.237013-10.045752 2.237013-6.581699 0-11.95098-2.4090909-15.93464-7.2272727-3.983661-4.8181818-6.062092-11.3571429-6.062092-19.2727273 0-8.2597403 1.905229-14.7987013 5.888889-19.4448052s9.526144-7.0551948 16.627451-7.0551948c3.637255 0 6.928104.8603896 9.699346 2.4090909 2.771242 1.7207792 5.196079 4.1298701 7.101307 7.3993507v-8.0876624h13.683007zm-13.163399-24.7792207c0-4.474026-1.039215-7.9155845-3.290849-10.4967533s-5.196079-3.9577922-9.179739-3.9577922-6.928105 1.2045455-9.179738 3.7857143c-2.251634 2.5811688-3.29085 6.0227273-3.29085 10.4967532 0 4.474026 1.039216 7.9155844 3.29085 10.4967533 2.251633 2.4090909 5.196078 3.7857143 9.179738 3.7857143s7.101307-1.2045455 9.352941-3.7857143c1.905229-2.4090909 3.117647-5.8506494 3.117647-10.3246753z\"/><path d=\"m206 67.9170984v-64.9170984h13.901639v14.5803109c0 1.5621761 0 3.1243523-.17377 4.6865285-.173771 1.5621761-.347541 3.1243523-.521312 4.5129533 2.432787-3.6450777 4.865574-6.2487046 7.645902-7.8108808 2.780328-1.5621761 5.908197-2.4300518 9.557377-2.4300518 7.12459 0 12.685246 2.4300518 16.681967 7.1165803 3.996722 4.6865285 5.908197 11.2823834 5.908197 19.6139897 0 8.158031-2.085246 14.5803108-6.081967 19.4404145-3.996722 4.8601036-9.383607 7.2901554-15.986885 7.2901554-3.996722 0-7.298361-.6943005-10.078689-2.2564767-2.780328-1.388601-5.213115-3.8186528-7.12459-6.9430052l.17377 7.1165803zm13.206557-24.9948186c0 4.5129534 1.042623 7.984456 3.30164 10.5880829 2.259016 2.4300518 5.386885 3.8186528 9.209836 3.8186528 3.996721 0 7.12459-1.2150259 9.209836-3.8186528 2.259016-2.4300518 3.301639-6.0751295 3.301639-10.5880829s-1.042623-7.984456-3.301639-10.5880829c-2.259017-2.603627-5.386885-3.8186529-9.383607-3.8186529-3.822951 0-6.950819 1.3886011-9.209836 3.992228-1.911475 2.2564767-3.127869 5.9015544-3.127869 10.4145078z\"/><path d=\"m264 59.8874598 11.153527-5.7299035c.348548 1.9099678 1.394191 3.4726688 2.962656 4.5144694 1.568464 1.0418007 3.659751 1.7363344 6.099585 1.7363344s4.182572-.3472669 5.576763-1.2154341 2.091286-2.0836012 2.091286-3.6463022c0-2.4308682-2.439834-4.340836-7.319502-6.0771704-1.568464-.5209003-2.614108-.8681672-3.485477-1.2154341-5.925311-2.2572347-9.93361-4.340836-12.19917-6.5980707-2.26556-2.2572348-3.311203-5.0353698-3.311203-8.3344052 0-4.8617363 1.917012-8.8553055 5.751037-11.8070739 3.834025-2.9517685 8.887967-4.5144695 15.161826-4.5144695 4.53112 0 8.365145.8681672 11.676348 2.778135 3.311204 1.7363345 5.751038 4.3408361 7.145229 7.6398714l-10.630706 5.2090032c-.522821-1.9099678-1.568465-3.2990353-2.962655-4.1672025-1.394191-1.0418007-3.13693-1.3890676-5.40249-1.3890676-2.091286 0-3.834025.5209004-5.228216 1.3890676s-1.917012 2.0836013-1.917012 3.4726688c0 2.4308682 3.311203 4.8617363 9.93361 6.9453376.697095.1736334 1.394191.3472669 1.742738.5209003 5.40249 1.7363344 9.410789 3.8199357 11.676349 6.2508039s3.485477 5.3826366 3.485477 9.2025723c0 4.8617364-1.917012 8.8553055-5.751037 11.807074s-9.062241 4.340836-15.510374 4.340836c-5.228216 0-9.585062-1.0418006-13.244813-2.9517685-3.834025-2.2572347-6.273859-4.8617363-7.493776-8.1607717z\"/></g></g></svg>\n\t\t\t\t\t\t</a>\n\t                \t<a href=\"https://www.behance.net/search?search=").concat(keyword, "\" class=\"flex items-center w-1/3 hover:bg-gray-100 rounded p-4\">\n\t\t\t\t\t\t\t<svg class=\"h-4\" viewBox=\"0 0 512 95\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\"> <g fill=\"#0A0B09\"> <path d=\"M42.3830069,77.1622621 C44.4027586,77.1622621 46.3201103,76.9821793 48.124469,76.5796414 C49.9535448,76.1771034 51.5778207,75.5450483 52.9478621,74.6057931 C54.3179034,73.7053793 55.4513655,72.4695172 56.2776276,70.8946759 C57.1038897,69.3374897 57.4993655,67.3142069 57.4993655,64.8672 C57.4993655,60.0755862 56.1505103,56.671669 53.4704552,54.6060138 C50.7833379,52.5686069 47.1993379,51.5552 42.7926069,51.5552 L20.5329655,51.5552 L20.5329655,77.1622621 L42.3830069,77.1622621 L42.3830069,77.1622621 Z M41.2530759,37.5793655 C44.8794483,37.5793655 47.8808276,36.7177931 50.2607448,34.969931 C52.6159448,33.2538483 53.76,30.4113655 53.76,26.5131034 C53.76,24.3521103 53.3786483,22.5618759 52.6159448,21.1741793 C51.8285241,19.7864828 50.7833379,18.6989241 49.462731,17.9397517 C48.1527172,17.1488 46.6732138,16.6014897 44.9536,16.3084138 C43.2692966,15.9764966 41.5002483,15.8493793 39.6888276,15.8493793 L20.5329655,15.8493793 L20.5329655,37.5793655 L41.2530759,37.5793655 L41.2530759,37.5793655 Z M43.9013517,0.00915862069 C48.3469241,0.00915862069 52.3617103,0.394041379 56.0304552,1.18852414 C59.6780138,1.96182069 62.7923862,3.25417931 65.4230069,5.02675862 C68.0147862,6.7958069 70.0416,9.1510069 71.4928552,12.1170759 C72.9088,15.0407724 73.622069,18.6989241 73.622069,23.0279724 C73.622069,27.7101241 72.5592276,31.6189793 70.4335448,34.7439448 C68.2937379,37.8653793 65.1475862,40.4253793 60.9456552,42.4133517 C66.6694621,44.0588138 70.9067034,46.9577931 73.7174069,51.0749793 C76.5422345,55.2204138 77.922869,60.1850483 77.922869,66.0006621 C77.922869,70.7181241 77.0189241,74.7752828 75.2180966,78.1897931 C73.3960828,81.6466759 70.9172966,84.4503172 67.8629517,86.6113103 C64.7838897,88.7934897 61.2457931,90.3930483 57.2839724,91.4347034 C53.3645241,92.4763586 49.2967724,92.9989517 45.1301517,92.9989517 L0.0600275862,92.9989517 L0.0600275862,0.00915862069 L43.9013517,0.00915862069 L43.9013517,0.00915862069 Z\"></path> <path d=\"M128.360166,41.4776276 C126.160331,39.0447448 122.438621,37.727669 117.89771,37.727669 C114.942234,37.727669 112.495228,38.2255448 110.539034,39.2389517 C108.625214,40.2382345 107.053903,41.4846897 105.856883,42.950069 C104.663393,44.4401655 103.847724,46.0114759 103.374566,47.6922483 C102.901407,49.3306483 102.618924,50.8172138 102.530648,52.1307586 L132.622124,52.1307586 C132.180745,47.4132966 130.567062,43.9281655 128.360166,41.4776276 L128.360166,41.4776276 Z M107.1104,76.851531 C109.878731,79.5563034 113.882924,80.9192828 119.070014,80.9192828 C122.798786,80.9192828 126.022621,79.9764966 128.727393,78.0944552 C131.407448,76.2194759 133.038786,74.2103172 133.670841,72.1270069 L149.955972,72.1270069 C147.339476,80.230731 143.367062,86.0180966 137.946924,89.4996966 C132.593876,92.9989517 126.061462,94.7432828 118.452083,94.7432828 C113.148469,94.7432828 108.37451,93.8817103 104.091366,92.1938759 C99.8082207,90.4813241 96.2277517,88.0802207 93.2157793,84.9517241 C90.2814897,81.8091034 88.0039724,78.0944552 86.3796966,73.7336276 C84.7730759,69.3939862 83.9609379,64.5882483 83.9609379,59.3799724 C83.9609379,54.3447172 84.8048552,49.6413793 86.4467862,45.2946759 C88.1275586,40.9338483 90.4474483,37.1697655 93.4982621,34.0130207 C96.559669,30.8386207 100.186041,28.3351172 104.409159,26.5060414 C108.635807,24.6804966 113.293241,23.7659586 118.452083,23.7659586 C124.147641,23.7659586 129.136993,24.8605793 133.413076,27.0957241 C137.675034,29.2955586 141.167228,32.2792828 143.914372,36.0151172 C146.657986,39.7474207 148.610648,44.0129103 149.832386,48.793931 C151.04,53.5714207 151.467255,58.5607724 151.117683,63.7867034 L102.530648,63.7867034 C102.530648,69.1079724 104.331476,74.1467586 107.1104,76.851531 L107.1104,76.851531 Z\"></path> <path d=\"M177.385048,0.00915862069 L177.385048,35.072331 L177.808772,35.072331 C180.15691,31.1705379 183.12651,28.3351172 186.7776,26.5766621 C190.421628,24.8040828 193.977379,23.9283862 197.441324,23.9283862 C202.381241,23.9283862 206.427807,24.5780966 209.588083,25.9163586 C212.75189,27.2793379 215.255393,29.1225379 217.088,31.5201103 C218.885297,33.9070897 220.156469,36.8201931 220.901517,40.2523586 C221.632441,43.6774621 222.010262,47.455669 222.010262,51.6222897 L222.010262,92.9989517 L203.426428,92.9989517 L203.426428,54.9803034 C203.426428,49.4365793 202.561324,45.2699586 200.838179,42.544 C199.111503,39.8145103 196.046566,38.444469 191.62571,38.444469 C186.625766,38.444469 183.009986,39.9592828 180.77131,42.950069 C178.490262,45.9408552 177.385048,50.8631172 177.385048,57.7133241 L177.385048,92.9989517 L158.808276,92.9989517 L158.808276,0.00915862069 L177.385048,0.00915862069\"></path> <path d=\"M271.614234,61.7210483 C270.463117,62.1024 269.188414,62.4237241 267.874869,62.7026759 C266.518952,62.9604414 265.103007,63.1687724 263.634097,63.3523862 C262.17931,63.5289379 260.682152,63.7302069 259.230897,63.9915034 C257.846731,64.2633931 256.462566,64.6023724 255.14549,65.0437517 C253.803697,65.4816 252.627862,66.0642207 251.660359,66.7986759 C250.657545,67.5437241 249.859531,68.4759172 249.248662,69.5952552 C248.655448,70.7181241 248.337655,72.1764414 248.337655,73.8995862 C248.337655,75.5450483 248.655448,76.9327448 249.248662,78.073269 C249.859531,79.2032 250.657545,80.0859586 251.706262,80.7392 C252.751448,81.3924414 253.976717,81.8514759 255.339697,82.1057103 C256.723862,82.381131 258.153931,82.483531 259.61931,82.483531 C263.256276,82.483531 266.059917,81.8797241 268.058483,80.6685793 C270.046455,79.4503724 271.543614,77.9955862 272.479338,76.3006897 C273.432717,74.6057931 274.008276,72.8967724 274.195421,71.1736276 C274.439062,69.4398897 274.548524,68.0416 274.548524,66.9928828 L274.548524,60.0755862 C273.746979,60.7853241 272.804193,61.3326345 271.614234,61.7210483 L271.614234,61.7210483 Z M235.2128,35.5207724 C237.094841,32.6571034 239.520662,30.3372138 242.472607,28.6034759 C245.424552,26.8520828 248.722538,25.6197517 252.430124,24.8817655 C256.123586,24.1225931 259.817048,23.7659586 263.567007,23.7659586 C266.939145,23.7659586 270.350124,23.9990069 273.863503,24.4792276 C277.320386,24.9559172 280.480662,25.8916414 283.347862,27.2864 C286.211531,28.6882207 288.545545,30.6055724 290.353434,33.1090759 C292.186041,35.5490207 293.114703,38.854069 293.114703,42.950069 L293.114703,78.0414897 C293.114703,81.0923034 293.298317,83.9912828 293.623172,86.7666759 C293.9904,89.5667862 294.940248,91.6677517 295.837131,93.0448552 L276.946097,92.9989517 C276.391724,92.1938759 275.93269,90.9332966 275.717297,89.8351448 C275.498372,88.7617103 275.346538,87.6564966 275.261793,86.5230345 C272.320441,89.5667862 268.870621,91.7065931 264.852303,92.928331 C260.865766,94.1324138 256.801545,94.7432828 252.627862,94.7432828 C249.428745,94.7432828 246.448552,94.3372138 243.659034,93.5533241 C240.91189,92.7694345 238.471945,91.5547586 236.392166,89.9128276 C234.301793,88.2391172 232.695172,86.162869 231.522869,83.6487724 C230.357628,81.1205517 229.757352,78.1121103 229.757352,74.6375724 C229.757352,70.802869 230.445903,67.6461241 231.805352,65.1744 C233.12949,62.7026759 234.849103,60.7147034 236.999503,59.2422621 C239.114593,57.7592276 241.543945,56.6434207 244.294621,55.9160276 C247.020579,55.1815724 249.78891,54.5742345 252.532524,54.1469793 C255.31851,53.7197241 258.030345,53.3736828 260.738648,53.1053241 C263.454014,52.8404966 265.805683,52.4626759 267.906648,51.9330207 C269.979366,51.4174897 271.638952,50.6336 272.857159,49.6413793 C274.054179,48.6456276 274.629738,47.1979034 274.548524,45.2699586 C274.548524,43.2784552 274.195421,41.6894897 273.556303,40.5030621 C272.913655,39.3342897 272.045021,38.4338759 270.982179,37.7771034 C269.89109,37.120331 268.66229,36.6895448 267.246345,36.4600276 C265.805683,36.2516966 264.280276,36.1351724 262.652469,36.1351724 C259.033159,36.1351724 256.16949,36.9402483 254.139145,38.4868414 C252.052303,40.0793379 250.851752,42.6993655 250.480993,46.3575172 L231.928938,46.3575172 C232.197297,41.9896276 233.270731,38.3844414 235.2128,35.5207724 L235.2128,35.5207724 Z\"></path> <path d=\"M320.850979,25.6868414 L320.850979,35.072331 L321.26411,35.072331 C323.605186,31.1705379 326.624221,28.3351172 330.374179,26.5766621 C334.092359,24.8040828 337.944717,23.9283862 341.850041,23.9283862 C346.811145,23.9283862 350.882428,24.5780966 354.028579,25.9163586 C357.231228,27.2793379 359.720607,29.1225379 361.524966,31.5201103 C363.375228,33.9070897 364.6464,36.8201931 365.387917,40.2523586 C366.136497,43.6774621 366.507255,47.455669 366.507255,51.6222897 L366.507255,92.9989517 L347.916359,92.9989517 L347.916359,54.9803034 C347.916359,49.4365793 347.044193,45.2699586 345.310455,42.544 C343.552,39.8145103 340.518841,38.0631172 336.066207,38.0631172 C331.034483,38.0631172 327.369269,39.9592828 325.116469,42.950069 C322.849545,45.9408552 321.726676,50.8631172 321.726676,57.7133241 L321.726676,92.9989517 L303.337048,92.9989517 L303.337048,25.6868414 L320.850979,25.6868414\"></path> <path d=\"M407.657931,37.727669 C404.6848,37.727669 402.230731,38.3844414 400.256883,39.7474207 C398.240662,41.106869 396.5952,42.8300138 395.338152,44.9662897 C394.077572,47.0884414 393.205407,49.4365793 392.665159,52.0071724 C392.160221,54.5742345 391.877738,57.1165793 391.877738,59.6448 C391.877738,62.0882759 392.160221,64.563531 392.665159,67.0917517 C393.205407,69.6058483 394.0352,71.8763034 395.207503,73.9454897 C396.397462,75.9723034 397.979366,77.6389517 399.977931,78.9560276 C401.965903,80.2660414 404.384662,80.9192828 407.255393,80.9192828 C411.708028,80.9192828 415.119007,79.6763586 417.509517,77.2152276 C419.889434,74.7399724 421.361876,71.4137379 421.983338,67.2471172 L439.84331,67.2471172 C438.618041,76.1771034 435.143503,82.9990621 429.426759,87.7024 C423.688828,92.3739586 416.340745,94.7432828 407.393103,94.7432828 C402.336662,94.7432828 397.742786,93.8817103 393.505545,92.1938759 C389.275366,90.4813241 385.684303,88.1225931 382.725297,85.0788414 C379.76629,82.0280276 377.471117,78.4016552 375.790345,74.1856 C374.148414,69.9624828 373.322152,65.3262345 373.322152,60.2945103 C373.322152,55.0827034 374.088386,50.227531 375.610262,45.7395862 C377.125076,41.2692966 379.363752,37.3957517 382.347476,34.1472 C385.302952,30.8774621 388.918731,28.3351172 393.194814,26.5060414 C397.453241,24.6804966 402.319007,23.7659586 407.781517,23.7659586 C411.778648,23.7659586 415.616883,24.3062069 419.324469,25.3160828 C423.003807,26.3471448 426.312386,27.9396414 429.214897,30.0759172 C432.124469,32.198069 434.507917,34.8428138 436.333462,37.9960276 C438.137821,41.1492414 439.168883,44.9274483 439.454897,49.2459034 L421.319503,49.2459034 C420.118952,41.5623724 415.563917,37.727669 407.657931,37.727669\"></path> <path d=\"M98.7489103,6.24849655 L136.442703,6.24849655 L136.442703,15.4256552 L98.7489103,15.4256552 L98.7489103,6.24849655 Z\"></path> <path d=\"M489.12949,41.4776276 C486.901407,39.0447448 483.151448,37.727669 478.667034,37.727669 C475.71509,37.727669 473.261021,38.2255448 471.269517,39.2389517 C469.352166,40.2382345 467.600772,41.4846897 466.424938,42.950069 C465.249103,44.4401655 464.405186,46.0114759 463.914372,47.6922483 C463.476524,49.3306483 463.169324,50.8172138 463.08811,52.1307586 L493.405572,52.1307586 C492.911228,47.4132966 491.336386,43.9281655 489.12949,41.4776276 L489.12949,41.4776276 Z M467.650207,76.851531 C470.429131,79.5563034 474.624,80.9192828 479.849931,80.9192828 C483.571641,80.9192828 486.788414,79.9764966 489.475531,78.0944552 C492.162648,76.2194759 493.829297,74.2103172 494.42251,72.1270069 L510.707641,72.1270069 C508.105269,80.230731 504.108138,86.0180966 498.72331,89.4996966 C493.349076,92.9989517 486.84491,94.7432828 479.207283,94.7432828 C473.889545,94.7432828 469.097931,93.8817103 464.846566,92.1938759 C460.570483,90.4813241 456.986483,88.0802207 453.988634,84.9517241 C451.022566,81.8091034 448.748579,78.0944552 447.131366,73.7336276 C445.524745,69.3939862 444.726731,64.5882483 444.726731,59.3799724 C444.726731,54.3447172 445.552993,49.6413793 447.198455,45.2946759 C448.865103,40.9338483 451.234428,37.1697655 454.267586,34.0130207 C457.343117,30.8386207 460.93771,28.3351172 465.150234,26.5060414 C469.380414,24.6804966 474.07669,23.7659586 479.207283,23.7659586 C484.895779,23.7659586 489.906317,24.8605793 494.140028,27.0957241 C498.412579,29.2955586 501.922428,32.2792828 504.648386,36.0151172 C507.392,39.7474207 509.365848,44.0129103 510.576993,48.793931 C511.770483,53.5714207 512.229517,58.5607724 511.887007,63.7867034 L463.08811,63.7867034 C463.08811,69.1079724 464.864221,74.1467586 467.650207,76.851531 L467.650207,76.851531 Z\"></path> </g> </svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>");
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
  !*** multi ./resources/js/single.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\server\www\kdgr\resources\js\single.js */"./resources/js/single.js");


/***/ })

/******/ });