!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=1)}({1:function(t,e,o){t.exports=o("bUC5")},bUC5:function(t,e){console.clear();var o,n=[{name:"Muhamad Nauval Azhar",url:"https://nauv.al",contribute:"💻"},{name:"Rizal Fakhri",url:"https://rizalfakhri.id",contribute:"💻"},{name:"Indah Ratna Sari",url:void 0,contribute:"📔"}];console.log("%cHayo mau ngapain, antum?","color: red; font-size: 40px;"),console.log("%cFound a bug? Report an issue: https://github.com/itskodinger/kodinger-3/issues \nContribute: https://github.com/itskodinger/kodinger-3","font-size: 16px;line-height: 30px;"),console.group("Contributors"),console.log("%cGive thanks to our dev💙rs:","font-size: 16px;"),console.table(n),console.groupEnd(),console.log("%c\n\nWith 💚 by Nauval & All contributors. Makasi!","font-size: 14px;"),$$(".side-toggle").forEach((function(t){var e=t.innerHTML;t.addEventListener("click",(function(o){var n=this.dataset.target,i=$(".nav-bottom-overlay");$(n).classList.toggle("off-canvasify--show"),i.classList.toggle("hidden"),t.classList.toggle("text-red-600"),$(n).className.indexOf("off-canvasify--show")>-1?t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>':t.innerHTML=e,n.indexOf("sidebar")>-1&&(i.style.left=t.clientWidth+"px",i.style.right=0),n.indexOf("rightbar")>-1&&(i.style.left=0,i.style.right=t.clientWidth+"px"),o.preventDefault()}))})),$("body").addEventListener("click",(function(t){t.target&&!t.target.classList.contains("user-dropdown")&&$(".user-dropdown-menu")&&($(".user-dropdown-menu").classList.add("hidden"),$("body").classList.remove("overflow-hidden"))})),function(){if(!$(".nav-auto-hide"))return!1;var t,e=!1,o=!1;$(".nav-auto-hide").style.transition="all .5s";window.addEventListener("scroll",(function(n){var i;t&&(window.scrollY<t&&!e&&($(".nav-auto-hide").style.top=0,e=!0,o=!1),window.scrollY>t&&!o&&(e=!1),window.scrollY>t&&window.scrollY>300&&!o&&((i=$(".nav-auto-hide")).style.top=-i.clientHeight+"px",e=!1,o=!0)),t=window.scrollY}))}(),window.sidebarSticky=function(){var t=$("#sidebar");if(!t)return!1;var e=t.clientHeight,o=t.clientWidth,n=t.offsetLeft,i=e+t.offsetTop,r=window.outerHeight,a=!1;t&&window.outerWidth>640&&window.addEventListener("scroll",(function(e){var l=window.scrollY+r-100;l>i&&!a&&(t.style.bottom="0",t.style.position="fixed",t.style.width="".concat(o,"px"),t.style.left="".concat(n,"px"),t.style.top="initial",t.style.bottom="20px",t.style.zIndex=1,a=!0),l<i&&a&&(t.style.transition="initial",t.style.position="static",t.style.top="initial",a=!1)}))},"undefined"!=typeof sidebar&&"manual"===sidebar||sidebarSticky(),(o=$(".drafted-post-alert"))&&(window.localStorage&&!window.localStorage.getItem("drafted-post-alert")&&o.classList.remove("hidden"),$$(".drafted-post-alert-close").forEach((function(t){return t.addEventListener("click",(function(t){t.preventDefault(),o.classList.add("hidden"),window.localStorage&&window.localStorage.setItem("drafted-post-alert",!1)}))})),$(".drafted-post-alert-view").addEventListener("click",(function(t){t.preventDefault(),window.localStorage&&window.localStorage.setItem("drafted-post-alert",!1),window.location.href=this.dataset.href})))}});