!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.chooles=t():e.chooles=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(3)),a=i(r(2)),u=function(e){return e&&e.__esModule?e:{default:e}}(r(1));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.default=n({},o,{dom:o,form:a,Storage:u.default})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hasLocalStorage=e.hasLocalStorage();this.opts=n({},{key:"CHOOLES"},t)}return o(e,[{key:"empty",value:function(){this.hasLocalStorage&&localStorage.removeItem(this.key)}},{key:"key",get:function(){return this.opts.key}},{key:"value",get:function(){return this.hasLocalStorage?localStorage.getItem(this.key):null},set:function(e){this.hasLocalStorage&&localStorage.setItem(this.key,e)}}],[{key:"hasLocalStorage",value:function(){try{return localStorage.setItem("test","test"),localStorage.getItem("test"),localStorage.removeItem("test"),!0}catch(e){return!1}}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.serializeFormToJson=function(e){for(var t={},r=e.querySelectorAll("input, select, textarea"),n=0,o=r.length;n<o;n+=1){var a=r[n],u=a.name,i=a.value;u&&(t[u]=i)}return t},o=t.jsonToFormData=function(e){var t=new FormData;return Object.keys(e).forEach(function(r){t.append(r,e[r])}),t};t.serializeForm=function(e){var t=n(e);return o(t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.closest=function(e,t){for(var r=null,n="string"==typeof e?document.querySelector(e):e;n;){if(n.matches&&n.matches(t)||n.msMatchesSelector&&n.msMatchesSelector(t)){r=n;break}n=n.parentElement}return r},t.injectScript=function(e,t){if(t&&document.getElementById(t))return!1;var r=document.createElement("script");return r.type="text/javascript",r.id=t,r.async=!0,r.src=e,document.getElementsByTagName("head")[0].appendChild(r),!0};var n=t.readyStates={loading:"loading",interactive:"interactive",complete:"complete"},o=t.ready=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading",r={loading:0,interactive:1,complete:2},o=r[t],a=r[document.readyState];if(a>o||a>=r.complete)e();else switch(t){case n.loading:case n.interactive:document.addEventListener("DOMContentLoaded",e);break;case n.complete:window.addEventListener("load",e)}};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$html=document.querySelector(".js-test__"+t),this.onClick=r}return n(e,[{key:"onClick",value:function(){}},{key:"init",value:function(){this.$html.addEventListener("click",this.onClick)}}],[{key:"factory",value:function(t,r){return new e(t,r).init()}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=u(r(0)),a=u(r(4));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$form=document.querySelector(".form-test"),this.init()}return n(e,[{key:"init",value:function(){var e=this;a.default.factory("ready",function(){o.default.ready(function(){return alert("ready")})}),a.default.factory("closest",function(e){var t=o.default.closest(e.target,".foo");t.classList.contains("border-blue")?(t.classList.add("border-pink"),t.classList.remove("border-blue")):(t.classList.remove("border-pink"),t.classList.add("border-blue"))}),a.default.factory("tojson",function(){var t=JSON.stringify(o.default.form.serializeFormToJson(e.$form),null,2);document.querySelector(".result--tojson").innerHTML=t}),a.default.factory("tofd",function(){var e=o.default.form.jsonToFormData({input:"fo0",select:"bar1"});document.querySelector(".result--tofd").innerHTML=e.toString()}),a.default.factory("fromftofd",function(){var t=o.default.form.serializeForm(e.$form);document.querySelector(".result--fromftofd").innerHTML=t.toString()})}}],[{key:"factory",value:function(){return new e}}]),e}();t.default=i},function(e,t,r){"use strict";var n=a(r(0)),o=a(r(5));function a(e){return e&&e.__esModule?e:{default:e}}n.default.ready(o.default.factory)}])});