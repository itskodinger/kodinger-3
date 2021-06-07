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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/@yaireo/tagify/dist/tagify.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@yaireo/tagify/dist/tagify.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Tagify (v 3.4.0)- tags input component
 * By Yair Even-Or
 * Don't sell this code. (c)
 * https://github.com/yairEO/tagify
 */
!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function u(t) {
    return function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = new Array(t.length); e < t.length; e++) {
          i[e] = t[e];
        }

        return i;
      }
    }(t) || function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  function s(e, t) {
    var i = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t && (s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, s);
    }

    return i;
  }

  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(i, !0).forEach(function (t) {
        n(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(i).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }

    return e;
  }

  function n(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = i, t;
  }

  function h() {
    return (new Date().getTime() + Math.floor(1e4 * Math.random() + 1)).toString(16);
  }

  var o = "undefined" != typeof InstallTrigger;

  function r(t) {
    var e = document.createElement("div");
    return t.replace(/\&#?[0-9a-z]+;/gi, function (t) {
      return e.innerHTML = t, e.innerText;
    });
  }

  function t(t, e) {
    if (!t) return console.warn("Tagify: ", "invalid input element ", t), this;
    this.applySettings(t, e || {}), this.state = {
      editing: {},
      actions: {},
      dropdown: {}
    }, this.value = [], this.tagsDataById = {}, this.listeners = {}, this.DOM = {}, this.extend(this, new this.EventDispatcher(this)), this.build(t), this.getCSSVars(), this.loadOriginalValues(), this.events.customBinding.call(this), this.events.binding.call(this), t.autofocus && this.DOM.input.focus();
  }

  return t.prototype = {
    isIE: window.document.documentMode,
    TEXTS: {
      empty: "empty",
      exceed: "number of tags exceeded",
      pattern: "pattern mismatch",
      duplicate: "already exists",
      notAllowed: "not allowed"
    },
    DEFAULTS: {
      delimiters: ",",
      pattern: null,
      maxTags: 1 / 0,
      callbacks: {},
      addTagOnBlur: !0,
      duplicates: !1,
      whitelist: [],
      blacklist: [],
      enforceWhitelist: !1,
      keepInvalidTags: !1,
      mixTagsAllowedAfter: /,|\.|\:|\s/,
      mixTagsInterpolator: ["[[", "]]"],
      backspace: !0,
      skipInvalid: !1,
      editTags: 2,
      transformTag: function transformTag() {},
      autoComplete: {
        enabled: !0,
        rightKey: !1
      },
      dropdown: {
        classname: "",
        enabled: 2,
        maxItems: 10,
        searchKeys: [],
        fuzzySearch: !0,
        highlightFirst: !1,
        closeOnSelect: !0,
        position: "all"
      }
    },
    templates: {
      wrapper: function wrapper(t, e) {
        return '<tags class="tagify '.concat(e.mode ? "tagify--" + e.mode : "", " ").concat(t.className, '"\n                        ').concat(e.readonly ? 'readonly aria-readonly="true"' : 'aria-haspopup="listbox" aria-expanded="false"', '\n                        role="tagslist"\n                        tabIndex="-1">\n                <span contenteditable data-placeholder="').concat(e.placeholder || "&#8203;", '" aria-placeholder="').concat(e.placeholder || "", '"\n                    class="tagify__input"\n                    role="textbox"\n                    aria-autocomplete="both"\n                    aria-multiline="').concat("mix" == e.mode, '"></span>\n            </tags>');
      },
      tag: function tag(t, e) {
        return '<tag title="'.concat(e.title || t, "\"\n                        contenteditable='false'\n                        spellcheck='false'\n                        tabIndex=\"-1\"\n                        class=\"tagify__tag ").concat(e["class"] ? e["class"] : "", '"\n                        ').concat(this.getAttributes(e), ">\n                <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>\n                <div>\n                    <span class='tagify__tag-text'>").concat(t, "</span>\n                </div>\n            </tag>");
      },
      dropdownItem: function dropdownItem(t) {
        var e = this.settings.dropdown.mapValueTo,
            i = ((e ? "function" == typeof e ? e(t) : t[e] : t.value) || t.value || t).replace(/`|'/g, "&#39;");
        return "<div ".concat(this.getAttributes(t), "\n                        class='tagify__dropdown__item ").concat(t["class"] ? t["class"] : "", '\'\n                        tabindex="0"\n                        role="option">').concat(i, "</div>");
      }
    },
    customEventsList: ["add", "remove", "invalid", "input", "click", "keydown", "focus", "blur", "edit:input", "edit:updated", "edit:start", "edit:keydown", "dropdown:show", "dropdown:hide", "dropdown:select"],
    applySettings: function applySettings(i, t) {
      var s = this;
      if (this.DEFAULTS.templates = this.templates, this.settings = this.extend({}, this.DEFAULTS, t), this.settings.readonly = i.hasAttribute("readonly"), this.settings.placeholder = i.getAttribute("placeholder") || this.settings.placeholder || "", this.isIE && (this.settings.autoComplete = !1), ["whitelist", "blacklist"].forEach(function (t) {
        var e = i.getAttribute("data-" + t);
        e && (e = e.split(s.settings.delimiters)) instanceof Array && (s.settings[t] = e);
      }), "autoComplete" in t && !this.isObject(t.autoComplete) && (this.settings.autoComplete = this.DEFAULTS.autoComplete, this.settings.autoComplete.enabled = t.autoComplete), i.pattern) try {
        this.settings.pattern = new RegExp(i.pattern);
      } catch (t) {}
      if (this.settings.delimiters) try {
        this.settings.delimiters = new RegExp(this.settings.delimiters, "g");
      } catch (t) {}
      "select" == this.settings.mode && (this.settings.dropdown.enabled = 0), "mix" == this.settings.mode && (this.settings.autoComplete.rightKey = !0);
    },
    getAttributes: function getAttributes(t) {
      if ("[object Object]" != Object.prototype.toString.call(t)) return "";
      var e,
          i,
          s = Object.keys(t),
          n = "";

      for (i = s.length; i--;) {
        "class" != (e = s[i]) && t.hasOwnProperty(e) && t[e] && (n += " " + e + (t[e] ? '="'.concat(t[e], '"') : ""));
      }

      return n;
    },
    parseHTML: function parseHTML(t) {
      return new DOMParser().parseFromString(t.trim(), "text/html").body.firstElementChild;
    },
    getCaretGlobalPosition: function getCaretGlobalPosition() {
      var t = document.getSelection();

      if (t.rangeCount) {
        var e,
            i,
            s = t.getRangeAt(0),
            n = s.startContainer,
            a = s.startOffset;
        if (0 < a) return (i = document.createRange()).setStart(n, a - 1), i.setEnd(n, a), {
          left: (e = i.getBoundingClientRect()).right,
          top: e.top,
          bottom: e.bottom
        };
      }

      return {
        left: -9999,
        top: -9999
      };
    },
    getCSSVars: function getCSSVars() {
      var t,
          e,
          i,
          s = getComputedStyle(this.DOM.scope, null);
      this.CSSVars = {
        tagHideTransition: (t = function (t) {
          if (!t) return {};
          var e = (t = t.trim().split(" ")[0]).split(/\d+/g).filter(function (t) {
            return t;
          }).pop().trim();
          return {
            value: +t.split(e).filter(function (t) {
              return t;
            })[0].trim(),
            unit: e
          };
        }((i = "tag-hide-transition", s.getPropertyValue("--" + i))), e = t.value, "s" == t.unit ? 1e3 * e : e)
      };
    },
    build: function build(t) {
      var e = this.DOM,
          i = this.settings.templates.wrapper(t, this.settings);
      e.originalInput = t, e.scope = this.parseHTML(i), e.input = e.scope.querySelector("[contenteditable]"), t.parentNode.insertBefore(e.scope, t), 0 <= this.settings.dropdown.enabled && this.dropdown.init.call(this);
    },
    destroy: function destroy() {
      this.DOM.scope.parentNode.removeChild(this.DOM.scope), this.dropdown.hide.call(this, !0);
    },
    loadOriginalValues: function loadOriginalValues(t) {
      if (t = t || this.DOM.originalInput.value) if (this.removeAllTags(), "mix" == this.settings.mode) this.parseMixTags(t.trim());else {
        try {
          "string" != typeof JSON.parse(t) && (t = JSON.parse(t));
        } catch (t) {}

        this.addTags(t).forEach(function (t) {
          return t && t.classList.add("tagify--noAnim");
        });
      }
    },
    isObject: function isObject(t) {
      var e = Object.prototype.toString.call(t).split(" ")[1].slice(0, -1);
      return t === Object(t) && "Array" != e && "Function" != e && "RegExp" != e && "HTMLUnknownElement" != e;
    },
    extend: function extend(t, e, i) {
      var s = this;

      function n(t, e) {
        for (var i in e) {
          e.hasOwnProperty(i) && (s.isObject(e[i]) ? s.isObject(t[i]) ? n(t[i], e[i]) : t[i] = Object.assign({}, e[i]) : t[i] = e[i]);
        }
      }

      return t instanceof Object || (t = {}), n(t, e), i && n(t, i), t;
    },
    cloneEvent: function cloneEvent(t) {
      var e = {};

      for (var i in t) {
        e[i] = t[i];
      }

      return e;
    },
    EventDispatcher: function EventDispatcher(s) {
      var n = document.createTextNode("");

      function i(e, t, i) {
        i && t.split(/\s+/g).forEach(function (t) {
          return n[e + "EventListener"].call(n, t, i);
        });
      }

      this.off = function (t, e) {
        return i("remove", t, e), this;
      }, this.on = function (t, e) {
        return e && "function" == typeof e && i("add", t, e), this;
      }, this.trigger = function (t, e) {
        var i;
        if (t) if (s.settings.isJQueryPlugin) "remove" == t && (t = "removeTag"), jQuery(s.DOM.originalInput).triggerHandler(t, [e]);else {
          try {
            i = new CustomEvent(t, {
              detail: this.extend({}, e, {
                tagify: this
              })
            });
          } catch (t) {
            console.warn(t);
          }

          n.dispatchEvent(i);
        }
      };
    },
    loading: function loading(t) {
      return this.DOM.scope.classList[t ? "add" : "remove"]("tagify--loading"), this;
    },
    toggleFocusClass: function toggleFocusClass(t) {
      this.DOM.scope.classList.toggle("tagify--focus", !!t);
    },
    events: {
      customBinding: function customBinding() {
        var e = this;
        this.customEventsList.forEach(function (t) {
          e.on(t, e.settings.callbacks[t]);
        });
      },
      binding: function binding(t) {
        var e,
            i = !(0 < arguments.length && void 0 !== t) || t,
            s = this.events.callbacks,
            n = i ? "addEventListener" : "removeEventListener";
        if (!this.state.mainEvents || !i) for (var a in (this.state.mainEvents = i) && !this.listeners.main && (this.DOM.input.addEventListener(this.isIE ? "keydown" : "input", s[this.isIE ? "onInputIE" : "onInput"].bind(this)), this.settings.isJQueryPlugin && jQuery(this.DOM.originalInput).on("tagify.removeAllTags", this.removeAllTags.bind(this))), e = this.listeners.main = this.listeners.main || {
          focus: ["input", s.onFocusBlur.bind(this)],
          blur: ["input", s.onFocusBlur.bind(this)],
          keydown: ["input", s.onKeydown.bind(this)],
          click: ["scope", s.onClickScope.bind(this)],
          dblclick: ["scope", s.onDoubleClickScope.bind(this)]
        }) {
          if ("blur" == a && !i) return;
          this.DOM[e[a][0]][n](a, e[a][1]);
        }
      },
      callbacks: {
        onFocusBlur: function onFocusBlur(t) {
          var e = t.target ? t.target.textContent.trim() : "",
              i = this.settings,
              s = t.type;

          if (!(t.relatedTarget && t.relatedTarget.classList.contains("tagify__tag") && this.DOM.scope.contains(t.relatedTarget))) {
            if ("blur" == s && t.relatedTarget === this.DOM.scope) return this.dropdown.hide.call(this), void this.DOM.input.focus();
            if (!this.state.actions.selectOption || !i.dropdown.enabled && i.dropdown.closeOnSelect) if (this.state.hasFocus = "focus" == s && +new Date(), this.toggleFocusClass(this.state.hasFocus), this.setRangeAtStartEnd(!1), "mix" != i.mode) {
              if ("focus" == s) return this.trigger("focus", {
                relatedTarget: t.relatedTarget
              }), void (0 === i.dropdown.enabled && "select" != i.mode && this.dropdown.show.call(this));
              "blur" == s && (this.trigger("blur", {
                relatedTarget: t.relatedTarget
              }), this.loading(!1), ("select" == this.settings.mode ? !this.value.length || this.value[0].value != e : e && !this.state.actions.selectOption && i.addTagOnBlur) && this.addTags(e, !0)), this.DOM.input.removeAttribute("style"), this.dropdown.hide.call(this);
            } else "blur" == t.type && this.dropdown.hide.call(this);
          }
        },
        onKeydown: function onKeydown(t) {
          var e = this,
              i = t.target.textContent.trim();

          if (this.trigger("keydown", {
            originalEvent: this.cloneEvent(t)
          }), "mix" == this.settings.mode) {
            switch (t.key) {
              case "Left":
              case "ArrowLeft":
                this.state.actions.ArrowLeft = !0;
                break;

              case "Delete":
              case "Backspace":
                var s = document.getSelection(),
                    n = [],
                    a = r(this.DOM.input.innerHTML);
                setTimeout(function () {
                  if (r(e.DOM.input.innerHTML).length >= a.length && (e.removeTag(s.anchorNode.previousElementSibling), 2 == e.DOM.input.children.length && "BR" == e.DOM.input.children[1].tagName)) return e.DOM.input.innerHTML = "", !(e.value.length = 0);
                  var t = e.DOM.input.querySelectorAll(".tagify__tag");
                  [].forEach.call(t, function (t) {
                    return n.push(t.getAttribute("value"));
                  }), e.value = e.value.filter(function (t) {
                    return -1 != n.indexOf(t.value);
                  });
                }, 50);
            }

            return !0;
          }

          switch (t.key) {
            case "Backspace":
              this.state.dropdown.visible || "" != i && 8203 != i.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTag() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0));
              break;

            case "Esc":
            case "Escape":
              if (this.state.dropdown.visible) return;
              t.target.blur();
              break;

            case "Down":
            case "ArrowDown":
              this.state.dropdown.visible || this.dropdown.show.call(this);
              break;

            case "ArrowRight":
              var o = this.state.inputSuggestion || this.state.ddItemData;
              if (o && this.settings.autoComplete.rightKey) return void this.addTags([o], !0);
              break;

            case "Tab":
              if (!i || "select" == this.settings.mode) return !0;

            case "Enter":
              t.preventDefault(), setTimeout(function () {
                e.state.actions.selectOption || e.addTags(i, !0);
              });
          }
        },
        onInput: function onInput(t) {
          var e = "mix" == this.settings.mode ? this.DOM.input.textContent : this.input.normalize.call(this),
              i = e.length >= this.settings.dropdown.enabled,
              s = {
            value: e,
            inputElm: this.DOM.input
          };
          if ("mix" == this.settings.mode) return this.events.callbacks.onMixTagsInput.call(this, t);
          e ? this.input.value != e && (s.isValid = this.validateTag(e), this.trigger("input", s), this.input.set.call(this, e, !1), -1 != e.search(this.settings.delimiters) ? this.addTags(e) && this.input.set.call(this) : 0 <= this.settings.dropdown.enabled && this.dropdown[i ? "show" : "hide"].call(this, e)) : this.input.set.call(this, "");
        },
        onMixTagsInput: function onMixTagsInput() {
          var t,
              e,
              i,
              s,
              n,
              a = this,
              o = this.settings;
          if (this.hasMaxTags()) return !0;
          window.getSelection && 0 < (t = window.getSelection()).rangeCount && ((e = t.getRangeAt(0).cloneRange()).collapse(!0), e.setStart(window.getSelection().focusNode, 0), (s = (i = e.toString().split(o.mixTagsAllowedAfter))[i.length - 1].match(o.pattern)) && (this.state.actions.ArrowLeft = !1, this.state.tag = {
            prefix: s[0],
            value: s.input.split(s[0])[1]
          }, n = this.state.tag.value.length >= o.dropdown.enabled)), setTimeout(function () {
            a.update(), a.trigger("input", a.extend({}, a.state.tag, {
              textContent: a.DOM.input.textContent
            })), a.state.tag && a.dropdown[n ? "show" : "hide"].call(a, a.state.tag.value);
          }, 10);
        },
        onInputIE: function onInputIE(t) {
          var e = this;
          setTimeout(function () {
            e.events.callbacks.onInput.call(e, t);
          });
        },
        onClickScope: function onClickScope(t) {
          var e,
              i = t.target.closest(".tagify__tag"),
              s = this.settings,
              n = new Date() - this.state.hasFocus;

          if (t.target != this.DOM.scope) {
            if (!t.target.classList.contains("tagify__tag__removeBtn")) return i ? (e = this.getNodeIndex(i), this.trigger("click", {
              tag: i,
              index: e,
              data: this.value[e],
              originalEvent: this.cloneEvent(t)
            }), void (1 == this.settings.editTags && this.events.callbacks.onDoubleClickScope.call(this, t))) : void (t.target == this.DOM.input && 500 < n ? this.state.dropdown.visible ? this.dropdown.hide.call(this) : 0 === s.dropdown.enabled && "mix" != s.mode && this.dropdown.show.call(this) : "select" == s.mode && (this.state.dropdown.visible || this.dropdown.show.call(this)));
            this.removeTag(t.target.parentNode);
          } else this.DOM.input.focus();
        },
        onEditTagInput: function onEditTagInput(t, e) {
          var i = t.closest("tag"),
              s = this.getNodeIndex(i),
              n = this.input.normalize.call(this, t),
              a = n.toLowerCase() == t.originalValue.toLowerCase() || this.validateTag(n);
          i.classList.toggle("tagify--invalid", !0 !== a), i.isValid = !0 === a, n.length >= this.settings.dropdown.enabled && (this.state.editing.value = n, this.dropdown.show.call(this, n)), this.trigger("edit:input", {
            tag: i,
            index: s,
            data: this.extend({}, this.value[s], {
              newValue: n
            }),
            originalEvent: this.cloneEvent(e)
          });
        },
        onEditTagBlur: function onEditTagBlur(t) {
          if (this.state.hasFocus || this.toggleFocusClass(), this.DOM.scope.contains(t)) {
            var e = t.closest(".tagify__tag"),
                i = this.input.normalize.call(this, t),
                s = i || t.originalValue,
                n = s != t.originalValue,
                a = (e.isValid, g({}, this.tagsDataById[e.__tagifyId], {
              value: s
            }));
            if (!i) return this.removeTag(e), void this.onEditTagDone();
            n ? (this.settings.transformTag.call(this, a), !0 === (!0 === this.validateTag(a.value)) && this.onEditTagDone(e, a)) : this.onEditTagDone(e);
          }
        },
        onEditTagkeydown: function onEditTagkeydown(t) {
          switch (this.trigger("edit:keydown", {
            originalEvent: this.cloneEvent(t)
          }), t.key) {
            case "Esc":
            case "Escape":
              t.target.textContent = t.target.originalValue;

            case "Enter":
            case "Tab":
              t.preventDefault(), t.target.blur();
          }
        },
        onDoubleClickScope: function onDoubleClickScope(t) {
          var e,
              i,
              s = t.target.closest("tag"),
              n = this.settings;
          s && (e = s.classList.contains("tagify__tag--editable"), i = s.hasAttribute("readonly"), "select" == n.mode || n.readonly || e || i || !this.settings.editTags || this.editTag(s), this.toggleFocusClass(!0));
        }
      }
    },
    editTag: function editTag(t, e) {
      var i = this;
      e = e || {};
      var s = (t = t || this.getLastTag()).querySelector(".tagify__tag-text"),
          n = this.getNodeIndex(t),
          a = this.tagsDataById[t.__tagifyId],
          o = this.events.callbacks,
          r = this,
          l = !0;

      if (s) {
        if (!(a instanceof Object && "editable" in a) || a.editable) return t.classList.add("tagify__tag--editable"), s.originalValue = s.textContent, s.setAttribute("contenteditable", !0), s.addEventListener("blur", function () {
          setTimeout(o.onEditTagBlur.bind(r), 0, s);
        }), s.addEventListener("input", o.onEditTagInput.bind(this, s)), s.addEventListener("keydown", function (t) {
          return o.onEditTagkeydown.call(i, t);
        }), s.focus(), this.setRangeAtStartEnd(!1, s), e.skipValidation || (l = this.editTagToggleValidity(t, a.value)), this.state.editing = {
          scope: t,
          input: t.querySelector("[contenteditable]")
        }, this.trigger("edit:start", {
          tag: t,
          index: n,
          data: a,
          isValid: l
        }), this;
      } else console.warn("Cannot find element in Tag template: ", ".tagify__tag-text");
    },
    editTagToggleValidity: function editTagToggleValidity(t, e) {
      var i = this.validateTag(e, t.__tagifyId);
      return t.classList.toggle("tagify--invalid", !0 !== i), t.isValid = i;
    },
    onEditTagDone: function onEditTagDone(t, e) {
      var i = {
        tag: t,
        index: this.getNodeIndex(t),
        data: e
      };
      this.trigger("edit:beforeUpdate", i), t && this.replaceTag(t, e), this.trigger("edit:updated", i), this.dropdown.hide.call(this);
    },
    replaceTag: function replaceTag(t, e) {
      var i = this;
      e && e.value || (e = this.tagsDataById[t.__tagifyId]), e = !0 === t.isValid ? e : this.extend(e, this.getInvaildTagParams(e, e));
      var s = this.createTagElem(e);
      this.state.editing.locked || (this.state.editing = {
        locked: !0
      }, setTimeout(function () {
        return delete i.state.editing.locked;
      }, 500), s.__tagifyId = t.__tagifyId, t.parentNode.replaceChild(s, t), this.tagsDataById[t.__tagifyId] = e, this.updateValueByDOMTags());
    },
    updateValueByDOMTags: function updateValueByDOMTags() {
      var e = this;
      this.value = [], [].forEach.call(this.getTagElms(), function (t) {
        t.classList.contains("tagify--notAllowed") || e.value.push(e.tagsDataById[t.__tagifyId]);
      }), this.update();
    },
    setRangeAtStartEnd: function setRangeAtStartEnd(e, i) {
      i = (i = i || this.DOM.input).lastChild || i;
      var s = document.getSelection();
      s.rangeCount && ["Start", "End"].forEach(function (t) {
        return s.getRangeAt(0)["set" + t](i, e ? 0 : i.length);
      });
    },
    input: {
      value: "",
      set: function set(t, e) {
        var i = 0 < arguments.length && void 0 !== t ? t : "",
            s = !(1 < arguments.length && void 0 !== e) || e,
            n = this.settings.dropdown.closeOnSelect;
        this.input.value = i, s && (this.DOM.input.innerHTML = i), !i && n && setTimeout(this.dropdown.hide.bind(this), 20), this.input.autocomplete.suggest.call(this), this.input.validate.call(this);
      },
      validate: function validate() {
        var t = !this.input.value || this.validateTag(this.input.value);
        "select" == this.settings.mode ? this.DOM.scope.classList.toggle("tagify--invalid", !0 !== t) : this.DOM.input.classList.toggle("tagify__input--invalid", !0 !== t);
      },
      normalize: function normalize(t) {
        var e = t || this.DOM.input,
            i = [];
        e.childNodes.forEach(function (t) {
          return 3 == t.nodeType && i.push(t.nodeValue);
        }), i = i.join("\n");

        try {
          i = i.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0));
        } catch (t) {}

        return i = i.replace(/\s/g, " ").replace(/^\s+/, "");
      },
      autocomplete: {
        suggest: function suggest(t) {
          if (this.settings.autoComplete.enabled) {
            "string" == typeof (t = t || {}) && (t = {
              value: t
            });
            var e = t.value || "",
                i = e.substr(0, this.input.value.length).toLowerCase(),
                s = e.substring(this.input.value.length);
            e && this.input.value && i == this.input.value.toLowerCase() ? (this.DOM.input.setAttribute("data-suggest", s), this.state.inputSuggestion = t) : (this.DOM.input.removeAttribute("data-suggest"), delete this.state.inputSuggestion);
          }
        },
        set: function set(t) {
          var e = this.DOM.input.getAttribute("data-suggest"),
              i = t || (e ? this.input.value + e : null);
          return !!i && ("mix" == this.settings.mode ? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + i)) : (this.input.set.call(this, i), this.setRangeAtStartEnd()), this.input.autocomplete.suggest.call(this), this.dropdown.hide.call(this), !0);
        }
      }
    },
    getNodeIndex: function getNodeIndex(t) {
      var e = 0;
      if (t) for (; t = t.previousElementSibling;) {
        e++;
      }
      return e;
    },
    getTagElms: function getTagElms() {
      return this.DOM.scope.querySelectorAll(".tagify__tag");
    },
    getLastTag: function getLastTag() {
      var t = this.DOM.scope.querySelectorAll("tag:not(.tagify--hide):not([readonly])");
      return t[t.length - 1];
    },
    isTagDuplicate: function isTagDuplicate(e, i) {
      var s = this;
      return "select" != this.settings.mode && this.value.some(function (t) {
        return t.__tagifyId != i && (s.isObject(e) ? JSON.stringify(t).toLowerCase() === JSON.stringify(e).toLowerCase() : e.trim().toLowerCase() === t.value.toLowerCase());
      });
    },
    getTagIndexByValue: function getTagIndexByValue(i) {
      var s = [];
      return this.getTagElms().forEach(function (t, e) {
        t.textContent.trim().toLowerCase() == i.toLowerCase() && s.push(e);
      }), s;
    },
    getTagElmByValue: function getTagElmByValue(t) {
      var e = this.getTagIndexByValue(t)[0];
      return this.getTagElms()[e];
    },
    markTagByValue: function markTagByValue(t, e) {
      return !!(e = e || this.getTagElmByValue(t)) && (e.classList.add("tagify--mark"), setTimeout(function () {
        e.classList.remove("tagify--mark");
      }, 100), e);
    },
    isTagBlacklisted: function isTagBlacklisted(e) {
      return e = e.toLowerCase().trim(), this.settings.blacklist.filter(function (t) {
        return e == t.toLowerCase();
      }).length;
    },
    isTagWhitelisted: function isTagWhitelisted(e) {
      return this.settings.whitelist.some(function (t) {
        return "string" == typeof e ? e.trim().toLowerCase() === (t.value || t).toLowerCase() : JSON.stringify(t).toLowerCase() === JSON.stringify(e).toLowerCase();
      });
    },
    validateTag: function validateTag(t, e) {
      var i = t.trim(),
          s = this.settings,
          n = !0;
      return i ? s.pattern && !s.pattern.test(i) ? n = this.TEXTS.pattern : !s.duplicates && this.isTagDuplicate(i, e) ? n = this.TEXTS.duplicate : (this.isTagBlacklisted(i) || s.enforceWhitelist && !this.isTagWhitelisted(i)) && (n = this.TEXTS.notAllowed) : n = this.TEXTS.empty, n;
    },
    getInvaildTagParams: function getInvaildTagParams(t, e) {
      return {
        "aria-invalid": !0,
        "class": (t["class"] || "") + " tagify--notAllowed",
        title: e
      };
    },
    hasMaxTags: function hasMaxTags() {
      return this.value.length >= this.settings.maxTags && this.TEXTS.exceed;
    },
    normalizeTags: function normalizeTags(t) {
      function i(t) {
        return (t + "").split(a).filter(function (t) {
          return t;
        }).map(function (t) {
          return {
            value: t.trim()
          };
        });
      }

      var e,
          s = this.settings,
          n = s.whitelist,
          a = s.delimiters,
          o = s.mode,
          r = !!n && n[0] instanceof Object,
          l = t instanceof Array,
          d = l && t[0] instanceof Object && "value" in t[0],
          c = [];
      if (d) return t = (e = []).concat.apply(e, u(t.map(function (e) {
        return i(e.value).map(function (t) {
          return g({}, e, {}, t);
        });
      })));

      if ("number" == typeof t && (t = t.toString()), "string" == typeof t) {
        if (!t.trim()) return [];
        t = i(t);
      } else if (l) {
        var h;
        t = (h = []).concat.apply(h, u(t.map(function (t) {
          return i(t);
        })));
      }

      return r && (t.forEach(function (e) {
        var t = n.filter(function (t) {
          return t.value.toLowerCase() == e.value.toLowerCase();
        });
        t[0] ? c.push(t[0]) : "mix" != o && c.push(e);
      }), t = c), t;
    },
    parseMixTags: function parseMixTags(t) {
      var o = this,
          e = this.settings,
          r = e.mixTagsInterpolator,
          l = e.duplicates,
          d = e.transformTag,
          c = e.enforceWhitelist;
      return t = t.split(r[0]).map(function (t, e) {
        var i,
            s,
            n = t.split(r[1]),
            a = n[0];

        try {
          i = JSON.parse(a);
        } catch (t) {
          i = o.normalizeTags(a)[0];
        }

        if (!(1 < n.length) || c && !o.isTagWhitelisted(i.value) || !l && o.isTagDuplicate(i)) {
          if (t) return e ? r[0] + t : t;
        } else d.call(o, i), i.__tagifyId = h(), (s = o.createTagElem(i)).classList.add("tagify--noAnim"), s.__tagifyId = i.__tagifyId, o.tagsDataById[s.__tagifyId] = i, n[0] = s.outerHTML, o.value.push(i);

        return n.join("");
      }).join(""), this.DOM.input.innerHTML = t, this.DOM.input.appendChild(document.createTextNode("")), this.update(), t;
    },
    replaceTextWithNode: function replaceTextWithNode(t, e) {
      if (this.state.tag || e) {
        e = e || this.state.tag.prefix + this.state.tag.value;
        var i,
            s,
            n = this.state.selection || window.getSelection(),
            a = n.anchorNode;
        return a.splitText(n.anchorOffset), i = a.nodeValue.lastIndexOf(e), (s = a.splitText(i)).nodeValue = s.nodeValue.replace(e, ""), a.parentNode.insertBefore(t, s), this.DOM.input.normalize(), s;
      }
    },
    selectTag: function selectTag(t, e) {
      return this.input.set.call(this, e.value, !0), this.state.actions.selectOption && setTimeout(this.setRangeAtStartEnd.bind(this)), this.getLastTag() ? this.replaceTag(this.getLastTag(), e) : this.appendTag(t), this.value[0] = e, this.trigger("add", {
        tag: t,
        data: e
      }), this.update(), [t];
    },
    addEmptyTag: function addEmptyTag() {
      var t = {
        value: "",
        __tagifyId: h()
      },
          e = this.createTagElem(t);
      this.tagsDataById[t.__tagifyId] = t, e.__tagifyId = t.__tagifyId, this.appendTag(e), this.editTag(e, {
        skipValidation: !0
      });
    },
    addTags: function addTags(t, e, i) {
      var s,
          n = this,
          a = 2 < arguments.length && void 0 !== i ? i : this.settings.skipInvalid,
          o = [],
          r = this.settings;
      return t && 0 != t.length ? (t = this.normalizeTags(t), this.state.editing.scope ? this.onEditTagDone(this.state.editing.scope, t[0]) : "mix" == r.mode ? (r.transformTag.call(this, t[0]), s = this.createTagElem(t[0]), this.replaceTextWithNode(s) || this.DOM.input.appendChild(s), this.DOM.input.appendChild(document.createTextNode("")), setTimeout(function () {
        return s.classList.add("tagify--noAnim");
      }, 300), t[0].prefix = t[0].prefix || this.state.tag ? this.state.tag.prefix : (r.pattern.source || r.pattern)[0], this.value.push(t[0]), this.update(), this.state.tag = null, this.trigger("add", this.extend({}, {
        tag: s
      }, {
        data: t[0]
      })), this.DOM.input.appendChild(document.createTextNode("")), s) : ("select" == r.mode && (e = !1), this.DOM.input.removeAttribute("style"), t.forEach(function (t) {
        var e,
            i,
            s = {};

        if ((t = Object.assign({}, t)).__tagifyId = h(), n.tagsDataById[t.__tagifyId] = t, r.transformTag.call(n, t), !0 !== (e = n.hasMaxTags() || n.validateTag(t.value))) {
          if (a) return;
          n.extend(s, n.getInvaildTagParams(t, e)), e == n.TEXTS.duplicate && n.markTagByValue(t.value);
        }

        if (s.role = "tag", t.readonly && (s["aria-readonly"] = !0), (i = n.createTagElem(n.extend({}, t, s))).__tagifyId = t.__tagifyId, o.push(i), "select" == r.mode) return n.selectTag(i, t);
        n.appendTag(i), !0 === e ? (n.value.push(t), n.update(), n.trigger("add", {
          tag: i,
          index: n.value.length - 1,
          data: t
        })) : (n.trigger("invalid", {
          data: t,
          index: n.value.length,
          tag: i,
          message: e
        }), r.keepInvalidTags || setTimeout(function () {
          return n.removeTag(i, !0);
        }, 1e3)), n.dropdown.position.call(n);
      }), t.length && e && this.input.set.call(this), this.dropdown.refilter.call(this), o)) : ("select" == r.mode && this.removeAllTags(), o);
    },
    appendTag: function appendTag(t) {
      var e = this.DOM.scope.lastElementChild;
      e === this.DOM.input ? this.DOM.scope.insertBefore(t, e) : this.DOM.scope.appendChild(t);
    },
    minify: function minify(t) {
      return t ? t.replace(/\>[\r\n ]+\</g, "><").replace(/(<.*?>)|\s+/g, function (t, e) {
        return e || " ";
      }) : "";
    },
    createTagElem: function createTagElem(t) {
      var e = function (t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      }(t.value),
          i = this.settings.templates.tag.call(this, e, t);

      return this.settings.readonly && (t.readonly = !0), i = this.minify(i), this.parseHTML(i);
    },
    reCheckInvalidTags: function reCheckInvalidTags() {
      var n = this,
          t = this.DOM.scope.querySelectorAll(".tagify__tag.tagify--notAllowed");
      [].forEach.call(t, function (t) {
        var e = n.tagsDataById[t.__tagifyId],
            i = t.getAttribute("title") == n.TEXTS.duplicate,
            s = !0 === n.validateTag(e.value, e.__tagifyId);
        i && s && (t.isValid = !0, n.replaceTag(t, e));
      });
    },
    removeTag: function removeTag(t, e, i) {
      if (t = t || this.getLastTag(), i = i || this.CSSVars.tagHideTransition, "string" == typeof t && (t = this.getTagElmByValue(t)), t instanceof HTMLElement) {
        var s = this,
            n = t.__tagifyId,
            a = this.getNodeIndex(t);
        "select" == this.settings.mode && (i = 0, this.input.set.call(this)), t.classList.contains("tagify--notAllowed") && (e = !0), i && 10 < i ? (t.style.width = parseFloat(window.getComputedStyle(t).width) + "px", document.body.clientTop, t.classList.add("tagify--hide"), setTimeout(o, i)) : o();
      }

      function o() {
        t.parentNode && (t.parentNode.removeChild(t), e ? s.settings.keepInvalidTags && s.trigger("remove", {
          tag: t,
          index: a
        }) : (s.removeValueById(n), delete s.tagsDataById[n], s.update(), s.trigger("remove", {
          tag: t,
          index: a,
          data: s.tagsDataById[n]
        }), s.dropdown.refilter.call(s), s.dropdown.position.call(s), s.settings.keepInvalidTags && s.reCheckInvalidTags()));
      }
    },
    removeAllTags: function removeAllTags() {
      this.value = [], this.update(), Array.prototype.slice.call(this.getTagElms()).forEach(function (t) {
        return t.parentNode.removeChild(t);
      }), this.dropdown.position.call(this), "select" == this.settings.mode && this.input.set.call(this);
    },
    removeValueById: function removeValueById(e) {
      this.value = this.value.filter(function (t) {
        return t.__tagifyId != e;
      });
    },
    preUpdate: function preUpdate() {
      this.DOM.scope.classList.toggle("tagify--hasMaxTags", this.value.length >= this.settings.maxTags), this.DOM.scope.classList.toggle("tagify--noTags", !this.value.length);
    },
    update: function update() {
      this.preUpdate();

      var t = function (t, s) {
        return t.map(function (t) {
          var e = {};

          for (var i in t) {
            i != s && (e[i] = t[i]);
          }

          return e;
        });
      }(this.value, "__tagifyId");

      this.DOM.originalInput.value = "mix" == this.settings.mode ? this.getMixedTagsAsString(t) : this.value.length ? JSON.stringify(t) : "";
    },
    getMixedTagsAsString: function getMixedTagsAsString(t) {
      var i = "",
          s = 0,
          n = t,
          a = this.settings.mixTagsInterpolator;
      return function e(t) {
        t.childNodes.forEach(function (t) {
          if (1 == t.nodeType) {
            if (t.classList.contains("tagify__tag")) return void (i += a[0] + JSON.stringify(n[s++]) + a[1]);
            o && "BR" == t.tagName ? i += "\r\n" : "DIV" == t.tagName && (i += "\r\n", e(t));
          } else i += t.textContent;
        });
      }(this.DOM.input), i;
    },
    getNodeHeight: function getNodeHeight(t) {
      var e,
          i = t.cloneNode(!0);
      return i.style.cssText = "position:fixed; top:-9999px; opacity:0", document.body.appendChild(i), e = i.clientHeight, i.parentNode.removeChild(i), e;
    },
    dropdown: {
      init: function init() {
        this.DOM.dropdown = this.dropdown.build.call(this), this.DOM.dropdown.content = this.DOM.dropdown.querySelector(".tagify__dropdown__wrapper");
      },
      build: function build() {
        var t = this.settings.dropdown,
            e = t.position,
            i = t.classname,
            s = "".concat("manual" == e ? "" : "tagify__dropdown tagify__dropdown--".concat(e), " ").concat(i).trim();
        return this.parseHTML('<div class="'.concat(s, '" role="listbox" aria-labelledby="dropdown">\n                        <div class="tagify__dropdown__wrapper"></div>\n                    </div>'));
      },
      show: function show(t) {
        var e,
            i,
            s,
            n,
            a = this,
            o = this.settings,
            r = window.getSelection(),
            l = "manual" == o.dropdown.position;

        if (o.whitelist && o.whitelist.length && !1 !== o.dropdown.enable) {
          if (this.suggestedListItems = this.dropdown.filterListItems.call(this, t), !this.suggestedListItems.length) {
            if ("mix" != o.mode || o.enforceWhitelist) return this.input.autocomplete.suggest.call(this), void this.dropdown.hide.call(this);
            this.suggestedListItems = [{
              value: t
            }];
          }

          s = (i = this.suggestedListItems[0]).value || i, o.autoComplete && 0 == s.indexOf(t) && this.input.autocomplete.suggest.call(this, i), e = this.dropdown.createListHTML.call(this, this.suggestedListItems), this.DOM.dropdown.content.innerHTML = this.minify(e), (o.enforceWhitelist && !l || o.dropdown.highlightFirst) && this.dropdown.highlightOption.call(this, this.DOM.dropdown.content.children[0]), this.DOM.scope.setAttribute("aria-expanded", !0), this.trigger("dropdown:show", this.DOM.dropdown), this.state.dropdown.visible = t || !0, this.state.selection = {
            anchorOffset: r.anchorOffset,
            anchorNode: r.anchorNode
          }, this.dropdown.position.call(this), document.body.contains(this.DOM.dropdown) || (l || (this.events.binding.call(this, !1), n = this.getNodeHeight(this.DOM.dropdown), this.DOM.dropdown.classList.add("tagify__dropdown--initial"), this.dropdown.position.call(this, n), document.body.appendChild(this.DOM.dropdown), setTimeout(function () {
            return a.DOM.dropdown.classList.remove("tagify__dropdown--initial");
          })), setTimeout(this.dropdown.events.binding.bind(this)));
        }
      },
      hide: function hide(t) {
        var e = this.DOM,
            i = e.scope,
            s = e.dropdown,
            n = "manual" == this.settings.dropdown.position && !t;
        s && document.body.contains(s) && !n && (window.removeEventListener("resize", this.dropdown.position), this.dropdown.events.binding.call(this, !1), setTimeout(this.events.binding.bind(this), 250), i.setAttribute("aria-expanded", !1), s.parentNode.removeChild(s), this.state.dropdown.visible = !1, this.state.ddItemData = this.state.ddItemElm = this.state.selection = null, this.trigger("dropdown:hide", s));
      },
      refilter: function refilter() {
        this.suggestedListItems = this.dropdown.filterListItems.call(this, "");
        var t = this.dropdown.createListHTML.call(this, this.suggestedListItems);
        this.DOM.dropdown.content.innerHTML = this.minify(t), this.trigger("dropdown:updated", this.DOM.dropdown);
      },
      position: function position(t) {
        var e,
            i,
            s,
            n,
            a,
            o,
            r = this.DOM.dropdown;
        this.state.dropdown.visible && (o = "text" == this.settings.dropdown.position ? (n = (i = this.getCaretGlobalPosition()).bottom, s = i.top, a = i.left, "auto") : (s = (i = this.DOM.scope.getBoundingClientRect()).top, n = i.bottom - 1, a = i.left, i.width + "px"), s = Math.floor(s), n = Math.ceil(n), e = document.documentElement.clientHeight - n < (t || r.clientHeight), r.style.cssText = "left:" + (a + window.pageXOffset) + "px; width:" + o + ";" + (e ? "bottom:" + (document.documentElement.clientHeight - s - window.pageYOffset - 2) + "px;" : "top: " + (n + window.pageYOffset) + "px"), r.setAttribute("placement", e ? "top" : "bottom"));
      },
      events: {
        binding: function binding(t) {
          var e = !(0 < arguments.length && void 0 !== t) || t,
              i = this.dropdown.events.callbacks,
              s = this.listeners.dropdown = this.listeners.dropdown || {
            position: this.dropdown.position.bind(this),
            onKeyDown: i.onKeyDown.bind(this),
            onMouseOver: i.onMouseOver.bind(this),
            onMouseLeave: i.onMouseLeave.bind(this),
            onClick: i.onClick.bind(this),
            onScroll: i.onScroll.bind(this)
          },
              n = e ? "addEventListener" : "removeEventListener";
          "manual" != this.settings.dropdown.position && (window[n]("resize", s.position), window[n]("keydown", s.onKeyDown)), this.DOM.dropdown[n]("mouseover", s.onMouseOver), this.DOM.dropdown[n]("mouseleave", s.onMouseLeave), this.DOM.dropdown[n]("mousedown", s.onClick), this.DOM.dropdown.content[n]("scroll", s.onScroll), this.DOM[this.listeners.main.click[0]][n]("click", this.listeners.main.click[1]);
        },
        callbacks: {
          onKeyDown: function onKeyDown(t) {
            var e = this.DOM.dropdown.querySelector("[class$='--active']"),
                i = e;

            switch (t.key) {
              case "ArrowDown":
              case "ArrowUp":
              case "Down":
              case "Up":
                var s;
                t.preventDefault(), i = (i = i && i[("ArrowUp" == t.key || "Up" == t.key ? "previous" : "next") + "ElementSibling"]) || (s = this.DOM.dropdown.content.children)["ArrowUp" == t.key || "Up" == t.key ? s.length - 1 : 0], this.dropdown.highlightOption.call(this, i, !0);
                break;

              case "Escape":
              case "Esc":
                this.dropdown.hide.call(this);
                break;

              case "ArrowRight":
                if (this.state.actions.ArrowLeft) return;

              case "Tab":
                if ("mix" != this.settings.mode && !this.settings.autoComplete.rightKey) {
                  try {
                    var n = i ? i.textContent : this.suggestedListItems[0].value;
                    this.input.autocomplete.set.call(this, n);
                  } catch (t) {}

                  return !1;
                }

              case "Enter":
                t.preventDefault(), this.dropdown.selectOption.call(this, e);
                break;

              case "Backspace":
                if ("mix" == this.settings.mode || this.state.editing.scope) return;
                var a = this.input.value.trim();
                "" != a && 8203 != a.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTag() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0));
            }
          },
          onMouseOver: function onMouseOver(t) {
            var e = t.target.closest(".tagify__dropdown__item");
            e && this.dropdown.highlightOption.call(this, e);
          },
          onMouseLeave: function onMouseLeave() {
            this.dropdown.highlightOption.call(this);
          },
          onClick: function onClick(t) {
            if (0 == t.button && t.target != this.DOM.dropdown) {
              var e = t.target.closest(".tagify__dropdown__item");
              this.dropdown.selectOption.call(this, e);
            }
          },
          onScroll: function onScroll(t) {
            var e = t.target,
                i = e.scrollTop / (e.scrollHeight - e.parentNode.clientHeight) * 100;
            this.trigger("dropdown:scroll", {
              percentage: Math.round(i)
            });
          }
        }
      },
      highlightOption: function highlightOption(t, e) {
        var i,
            s = "tagify__dropdown__item--active";
        if (this.state.ddItemElm && (this.state.ddItemElm.classList.remove(s), this.state.ddItemElm.removeAttribute("aria-selected")), !t) return this.state.ddItemData = null, this.state.ddItemElm = null, void this.input.autocomplete.suggest.call(this);
        i = this.suggestedListItems[this.getNodeIndex(t)], this.state.ddItemData = i, (this.state.ddItemElm = t).classList.add(s), t.setAttribute("aria-selected", !0), e && (t.parentNode.scrollTop = t.clientHeight + t.offsetTop - t.parentNode.clientHeight), this.settings.autoComplete && (this.input.autocomplete.suggest.call(this, i), "manual" != this.settings.dropdown.position && this.dropdown.position.call(this));
      },
      selectOption: function selectOption(t) {
        var e = this;

        if (t) {
          this.state.actions.selectOption = !0, setTimeout(function () {
            return e.state.actions.selectOption = !1;
          }, 50);
          var i = this.settings.dropdown.closeOnSelect,
              s = this.suggestedListItems[this.getNodeIndex(t)] || this.input.value;
          this.trigger("dropdown:select", s), this.addTags([s], !0), setTimeout(function () {
            e.DOM.input.focus(), e.toggleFocusClass(!0);
          }), i && this.dropdown.hide.call(this);
        }
      },
      filterListItems: function filterListItems(t) {
        var i,
            e,
            s,
            n,
            a = this,
            o = this.settings,
            r = [],
            l = o.whitelist,
            d = o.dropdown.maxItems || 1 / 0,
            c = o.dropdown.searchKeys.concat(["searchBy", "value"]),
            h = 0;
        if (!t) return (o.duplicates ? l : l.filter(function (t) {
          return !a.isTagDuplicate(t.value || t);
        })).slice(0, d);

        for (; h < l.length && (i = l[h] instanceof Object ? l[h] : {
          value: l[h]
        }, s = c.reduce(function (t, e) {
          return t + " " + (i[e] || "");
        }, "").toLowerCase().indexOf(t.toLowerCase()), e = o.dropdown.fuzzySearch ? 0 <= s : 0 == s, n = !o.duplicates && this.isTagDuplicate(i.value), e && !n && d-- && r.push(i), 0 != d); h++) {
          ;
        }

        return r;
      },
      createListHTML: function createListHTML(t) {
        var e = this.settings.templates.dropdownItem.bind(this);
        return this.minify(t.map(e).join(""));
      }
    }
  }, t;
});

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

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/(dontuse)discover.js":
/*!*******************************************!*\
  !*** ./resources/js/(dontuse)discover.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yaireo/tagify */ "./node_modules/@yaireo/tagify/dist/tagify.min.js");
/* harmony import */ var _yaireo_tagify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yaireo_tagify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_validate_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/validate-url */ "./resources/js/utils/validate-url.js");
/* harmony import */ var _utils_adds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/adds */ "./resources/js/utils/adds.js");
/* harmony import */ var _utils_removes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/removes */ "./resources/js/utils/removes.js");
/* harmony import */ var _comps_show_login_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/show-login-alert */ "./resources/js/comps/show-login-alert.js");


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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}






/**
 * Init Tagify library
 */

var tagify = new _yaireo_tagify__WEBPACK_IMPORTED_MODULE_1___default.a($('.tags'), {
  enforceWhitelist: true,
  whitelist: [],
  maxTags: 5,
  skipInvalid: true,
  dropdown: {
    highlightFirst: true,
    maxItems: 7
  },
  placeholder: 'Pilih maksimal 5 tag',
  templates: {
    wrapper: function wrapper(input, settings) {
      return "<tags class=\"tagify focus-within:border-indigo-600 ".concat(settings.mode ? "tagify--" + settings.mode : "", " ").concat(input.className, "\"\n                                                    ").concat(settings.readonly ? 'readonly aria-readonly="true"' : 'aria-haspopup="listbox" aria-expanded="false"', "\n                                                    role=\"tagslist\">\n                                    <span contenteditable data-placeholder=\"").concat(settings.placeholder || '&#8203;', "\" aria-placeholder=\"").concat(settings.placeholder || '', "\"\n                                            class=\"tagify__input p-0 m-0 py-1\"\n                                            role=\"textbox\"\n                                            aria-controls=\"dropdown\"\n                                            aria-autocomplete=\"both\"\n                                            aria-multiline=\"").concat(settings.mode == 'mix' ? true : false, "\"></span>\n                            </tags>");
    },
    tag: function tag(value, tagData) {
      return "<tag title='".concat(tagData.title || value, "'\n                                    contenteditable='false'\n                                    spellcheck='false'\n                                    class='tagify__tag m-0 mr-2 rounded ").concat(tagData["class"] ? tagData["class"] : "", "'\n                                    ").concat(this.getAttributes(tagData), ">\n                        <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>\n                        <div>\n                                <span class='tagify__tag-text'>").concat(value, "</span>\n                        </div>\n                </tag>");
    },
    dropdownItem: function dropdownItem(item) {
      var mapValueTo = this.settings.dropdown.mapValueTo,
          value = (mapValueTo ? typeof mapValueTo == 'function' ? mapValueTo(item) : item[mapValueTo] : item.value) || item.value,
          sanitizedValue = (value || item).replace(/`|'/g, "&#39;");
      return "<div ".concat(this.getAttributes(item), "\n                                    class='tagify__dropdown__item px-4 ").concat(item["class"] ? item["class"] : "", "'\n                                    tabindex=\"0\"\n                                    role=\"option\"\n                                    aria-labelledby=\"dropdown-label\">").concat(sanitizedValue, "</div>");
    }
  }
}),
    controller;
/**
 * Tagify on input
 */

tagify.on('input', onInput);
/**
 * Tagify on input handler
 * @param  {Object} e Event
 */

function onInput(e) {
  var value = e.detail.value;
  tagify.settings.whitelist.length = 0;
  controller && controller.abort();
  controller = new AbortController();
  tagify.loading(true).dropdown.hide.call(tagify);
  fetch(routes.post_tags + '?value=' + value, {
    signal: controller.signal
  }).then(function (RES) {
    return RES.json();
  }).then(function (whitelist) {
    var _tagify$settings$whit;

    (_tagify$settings$whit = tagify.settings.whitelist).splice.apply(_tagify$settings$whit, [0, whitelist.length].concat(_toConsumableArray(whitelist)));

    tagify.loading(false).dropdown.show.call(tagify, value);
  });
}
/**
 * When discover form submitted
 */


$('#discover-form').addEventListener('submit', function (e) {
  var link = $('.input-link'),
      form = this,
      tags = tagify.value,
      btn = $('.publish-button');
  var tag_ids = '';
  tags.forEach(function (item) {
    tag_ids += item.id + ',';
  });
  tag_ids = tag_ids.replace(/,+$/g, "");

  if (link.value.trim().length < 1 || !Object(_utils_validate_url__WEBPACK_IMPORTED_MODULE_2__["default"])(link.value)) {
    link.focus();
  } else if (tags.length < 1) {
    tagify.DOM.input.focus();
  } else {
    var shimmer = window.posts.shimmer.add('prepend');
    Object(_utils_adds__WEBPACK_IMPORTED_MODULE_3__["default"])(btn.classList, 'pointer-events-none opacity-50');
    btn.disabled = true;
    window.scrollTo({
      top: $('.posts').offsetTop - 50
    });

    var posting = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(routes.post_store_discover, {
                method: 'POST',
                headers: {
                  'X-CSRF-TOKEN': token,
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify({
                  pages: link.value,
                  tags: tag_ids
                })
              });

            case 2:
              res = _context.sent;
              return _context.abrupt("return", Promise.resolve(res));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))() // on complete
    .then(function (res) {
      Object(_utils_removes__WEBPACK_IMPORTED_MODULE_4__["default"])(btn.classList, 'pointer-events-none opacity-50');
      btn.disabled = false;

      if (res.ok) {
        return Promise.resolve(res.json());
      }

      return Promise.reject(res);
    }).then(function (res) {
      form.reset();
      tagify.removeAllTags();
      window.posts.append({
        data: res
      }, true);
      shimmer.dispose();
    })["catch"](function (error) {
      shimmer.dispose();
      if (error.status == 401) Object(_comps_show_login_alert__WEBPACK_IMPORTED_MODULE_5__["default"])();else if (error.status == 422) link.focus();
    });
  }

  e.preventDefault();
});

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

/***/ "./resources/js/utils/validate-url.js":
/*!********************************************!*\
  !*** ./resources/js/utils/validate-url.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * URL string validation
 * @param  {String} value The string to be tested
 * @return {Boolean}
 */
function validateUrl(value) {
  return /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

/* harmony default export */ __webpack_exports__["default"] = (validateUrl);

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./resources/js/(dontuse)discover.js ./resources/css/app.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rizalfakhri/Kodinger/kodinger-3/resources/js/(dontuse)discover.js */"./resources/js/(dontuse)discover.js");
module.exports = __webpack_require__(/*! /Users/rizalfakhri/Kodinger/kodinger-3/resources/css/app.css */"./resources/css/app.css");


/***/ })

/******/ });