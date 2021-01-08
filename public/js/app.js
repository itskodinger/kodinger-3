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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// START
console.clear();
var contributors = [{
  name: 'Muhamad Nauval Azhar',
  url: 'https://nauv.al',
  contribute: '💻'
}, {
  name: 'Rizal Fakhri',
  url: 'https://rizalfakhri.id',
  contribute: '💻'
}, {
  name: 'Indah Ratna Sari',
  url: undefined,
  contribute: '📔'
} // you
];
console.log('%cHayo mau ngapain, antum?', 'color: red; font-size: 40px;');
console.log('%cFound a bug? Report an issue: https://github.com/itskodinger/kodinger-3/issues \nContribute: https://github.com/itskodinger/kodinger-3', 'font-size: 16px;line-height: 30px;');
console.group('Contributors');
console.log('%cGive thanks to our dev💙rs:', 'font-size: 16px;');
console.table(contributors);
console.groupEnd();
console.log('%c\n\nWith 💚 by Nauval & All contributors. Makasi!', 'font-size: 14px;');
/**
 * Sidebar toggle (mobile only)
 */

$$('.side-toggle').forEach(function (item) {
  var originalHtml = item.innerHTML;
  item.addEventListener('click', function (e) {
    var target = this.dataset.target,
        overlay = $('.nav-bottom-overlay');
    $(target).classList.toggle('off-canvasify--show');
    overlay.classList.toggle('hidden');
    item.classList.toggle('text-red-600');
    if ($(target).className.indexOf('off-canvasify--show') > -1) item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';else item.innerHTML = originalHtml;

    if (target.indexOf('sidebar') > -1) {
      overlay.style.left = item.clientWidth + 'px';
      overlay.style.right = 0;
    }

    if (target.indexOf('rightbar') > -1) {
      overlay.style.left = 0;
      overlay.style.right = item.clientWidth + 'px';
    }

    e.preventDefault();
  });
});
/**
 * Body on click
 */

$('body').addEventListener('click', function (e) {
  // close dropdown
  if (e.target && !e.target.classList.contains('user-dropdown') && $('.user-dropdown-menu')) {
    $('.user-dropdown-menu').classList.add('hidden');
    $('body').classList.remove('overflow-hidden');
  }
});
/**
 * Sticky navbar hide on scroll down
 */

(function () {
  if (!$('.nav-auto-hide')) {
    return false;
  }

  var scroll,
      scrollUp = false,
      scrollDown = false;
  $('.nav-auto-hide').style.transition = 'all .5s';

  var showNavbar = function showNavbar() {
    var navbar = $('.nav-auto-hide');
    navbar.style.top = 0;
  };

  var hideNavbar = function hideNavbar() {
    var navbar = $('.nav-auto-hide');
    navbar.style.top = -navbar.clientHeight + 'px';
  };

  window.addEventListener('scroll', function (e) {
    if (scroll) {
      if (window.scrollY < scroll && !scrollUp) {
        showNavbar();
        scrollUp = true;
        scrollDown = false;
      }

      if (window.scrollY > scroll && !scrollDown) {
        scrollUp = false;
      }

      if (window.scrollY > scroll && window.scrollY > 300 && !scrollDown) {
        hideNavbar();
        scrollUp = false;
        scrollDown = true;
      }
    }

    scroll = window.scrollY;
  });
})(); // sticky sidebar when reach bottom edge


window.sidebarSticky = function () {
  var sidebar = $('#sidebar');
  if (!sidebar) return false;
  var sidebarHeight = sidebar.clientHeight;
  var sidebarWidth = sidebar.clientWidth;
  var sidebarLeft = sidebar.offsetLeft;
  var sidebarBottomEdge = sidebarHeight + sidebar.offsetTop;
  var windowHeight = window.outerHeight;
  var sticked = false;

  function sticky(e) {
    var viewport = window.scrollY + windowHeight - 100;

    if (viewport > sidebarBottomEdge && !sticked) {
      sidebar.style.bottom = '0';
      sidebar.style.position = 'fixed';
      sidebar.style.width = "".concat(sidebarWidth, "px");
      sidebar.style.left = "".concat(sidebarLeft, "px");
      sidebar.style.top = 'initial';
      sidebar.style.bottom = '20px';
      sidebar.style.zIndex = 1;
      sticked = true;
    }

    if (viewport < sidebarBottomEdge && sticked) {
      sidebar.style.transition = 'initial';
      sidebar.style.position = 'static';
      sidebar.style.top = 'initial';
      sticked = false;
    }
  }

  if (sidebar) {
    if (window.outerWidth > 640) {
      window.addEventListener('scroll', sticky);
    }
  }
};

if (typeof sidebar == 'undefined' || sidebar !== 'manual') sidebarSticky(); // On Boarding
// (function() {
// 	const modal = $('.onboarding-modal');
// 	if(window.localStorage && !!!window.localStorage.getItem('boarding'))
// 		modal.classList.remove('hidden');
// 	const boarding = new Siema({
// 	    selector: $('.boarding')
// 	});
// 	$$('.boarding-close').forEach(btn => btn.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		modal.classList.add('hidden');
// 		if(window.localStorage)
// 			window.localStorage.setItem('boarding', false);
// 	}));
// 	['prev', 'next'].forEach(method => {
// 		((btns, boarding, method) => btns.forEach((btn) => btn.addEventListener('click', (e) => {
// 		    e.preventDefault();
// 		    boarding[method]();
// 		})))($$('.boarding-' + method), boarding, method);
// 	});
// 	$('.boarding-login').addEventListener('click', function(e) {
// 		e.preventDefault();
// 		if(window.localStorage)
// 			window.localStorage.setItem('boarding', false);
// 		window.location.href = this.dataset.href;
// 	});
// })();

(function () {
  var alert = $('.drafted-post-alert');
  if (!alert) return;
  if (window.localStorage && !!!window.localStorage.getItem('drafted-post-alert')) alert.classList.remove('hidden');
  $$('.drafted-post-alert-close').forEach(function (btn) {
    return btn.addEventListener('click', function (e) {
      e.preventDefault();
      alert.classList.add('hidden');
      if (window.localStorage) window.localStorage.setItem('drafted-post-alert', false);
    });
  });
  $('.drafted-post-alert-view').addEventListener('click', function (e) {
    e.preventDefault();
    if (window.localStorage) window.localStorage.setItem('drafted-post-alert', false);
    window.location.href = this.dataset.href;
  });
})();

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rizalfakhri/Kodinger/kodinger-3/resources/js/app.js */"./resources/js/app.js");


/***/ })

/******/ });