_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||i&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=M();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),a=n("FYa8"),u=n("/0+H");function M(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return M=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function I(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var g=["name","httpEquiv","charSet","itemProp"];function N(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(I,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,u=g.length;a<u;a++){var M=g[a];if(i.props.hasOwnProperty(M))if("charSet"===M)n.has(M)?o=!1:n.add(M);else{var s=i.props[M],I=r[M]||new Set;I.has(s)?o=!1:(I.add(s),r[M]=I)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function l(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:N,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}l.rewind=function(){};var j=l;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"C+P4":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjQ3cHgiIGhlaWdodD0iNDVweCIgdmlld0JveD0iMCAwIDQ3IDQ1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEgKDg5NTgxKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+0J7RhNC10YDRgtCwPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ItCe0YTQtdGA0YLQsCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDEuMDAwMDAwKSIgc3Ryb2tlPSIjRUYyMjIxIj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMS4wODM1Nzc2N2UtMTMsMS41OTE3MTE5NiBMLTEuMDgzNTc3NjdlLTEzLDQxLjQ5MzYxNDEgQy0xLjA4MzU3NzY3ZS0xMyw0Mi43OTUxMzEzIDAuNTQwMTQ1NzQ2LDQzLjQ0NTg4OTkgMS42MjA0MzcyNCw0My40NDU4ODk5IEMxNC45NDUyODM4LDQzLjQ0NTg4OTkgMTQuOTI5NTg5LDQzLjQ0NTg4OTkgMjguMTI5ODAwNyw0My40NDU4ODk5IEMyOS4zMDM2NDUzLDQzLjQ0NTg4OTkgMjkuODkwNTY3Niw0Mi43OTUxMzEzIDI5Ljg5MDU2NzYsNDEuNDkzNjE0MSBMMjkuODkwNTY3NiwxMC4yOTg2NzUzIEwxOS4yODg2Njg2LC0xLjc3NjM1Njg0ZS0xNCBDMTMuMTc2MjA4LC0xLjc3NjM1Njg0ZS0xNCA3LjI4Njc5NzUzLC0xLjc3NjM1Njg0ZS0xNCAxLjYyMDQzNzI0LC0xLjc3NjM1Njg0ZS0xNCBDMC41NDAxNDU3NDYsLTEuNzc2MzU2ODRlLTE0IC0xLjA4MzU3NzY3ZS0xMywwLjUzMDU3MDY1MiAtMS4wODM1Nzc2N2UtMTMsMS41OTE3MTE5NiBaIiBpZD0iUGF0aC01Ij48L3BhdGg+DQogICAgICAgICAgICA8cGF0aCBkPSJNMjkuODkwNTY3NiwxMC4yOTg2NzUzIEMyNi40NDQ3MzgxLDEwLjI5ODY3NTMgMjMuNTQ5Mzk0NCwxMC4yOTg2NzUzIDIxLjIwNDUzNjUsMTAuMjk4Njc1MyBDMjAuMTAzNTY0OSwxMC4yOTg2NzUzIDE5LjU1MzA3OSw5Ljc1ODYzOTA0IDE5LjU1MzA3OSw4LjY3ODU2NjU4IEwxOS41NTMwNzksOC41Nzk4MDM1M2UtMTMiIGlkPSJQYXRoLTYiPjwvcGF0aD4NCiAgICAgICAgICAgIDxsaW5lIHgxPSI1LjcyMjEyMjgzIiB5MT0iMzAuOTI0Nzk2MiIgeDI9IjE1LjQ4Nzk1MyIgeTI9IjMwLjkyNDc5NjIiIGlkPSJQYXRoLTciPjwvbGluZT4NCiAgICAgICAgICAgIDxsaW5lIHgxPSI1LjcyMjEyMjgzIiB5MT0iOC40NTk5ODY0MSIgeDI9IjE1LjQ4Nzk1MyIgeTI9IjguNDU5OTg2NDEiIGlkPSJQYXRoLTctQ29weSI+PC9saW5lPg0KICAgICAgICAgICAgPGxpbmUgeDE9IjUuNzIyMTIyODMiIHkxPSIyNi4yNTEyOTA4IiB4Mj0iMjQuMTM3MDU1MiIgeTI9IjI2LjI1MTI5MDgiIGlkPSJQYXRoLTgiPjwvbGluZT4NCiAgICAgICAgICAgIDxsaW5lIHgxPSI1LjcyMjEyMjgzIiB5MT0iMjEuNDY4NjgyMSIgeDI9IjI0LjEzNzA1NTIiIHkyPSIyMS40Njg2ODIxIiBpZD0iUGF0aC04LUNvcHkiPjwvbGluZT4NCiAgICAgICAgICAgIDxsaW5lIHgxPSI1LjcyMjEyMjgzIiB5MT0iMTYuODc3Mzc3NyIgeDI9IjI0LjEzNzA1NTIiIHkyPSIxNi44NzczNzc3IiBpZD0iUGF0aC04LUNvcHktMiI+PC9saW5lPg0KICAgICAgICAgICAgPHBhdGggZD0iTTM1LjMzMjc2OTgsNS44MjgwNTcwNyBMMzUuMzMyNzY5OCwzNy4wNzE5NDI5IEMzNi4zNTc5NDEzLDM5LjUyMTc4NDQgMzcuMzgxNjA4Niw0MC43NDY3MDUyIDM4LjQwMzc3MTcsNDAuNzQ2NzA1MiBDMzkuMzU1NDU0Nyw0MC43NDY3MDUyIDQwLjMwNTYzMzYsMzkuNTIxNzg0NCA0MS4yNTQzMDg0LDM3LjA3MTk0MjkgTDQxLjI1NDMwODQsNS44MjgwNTcwNyBDNDEuMjU0MzA4NCw1LjM3NTU3NzQ1IDQwLjk3OTQ2NTUsNS4xNDkzMzc2NCA0MC40Mjk3Nzk4LDUuMTQ5MzM3NjQgQzM4LjI4ODE3NTEsNS4xNDkzMzc2NCAzOC4yODgxNzUxLDUuMTQ5MzM3NjQgMzYuMTQwMTI2NSw1LjE0OTMzNzY0IEMzNS42MDE4ODg3LDUuMTQ5MzM3NjQgMzUuMzMyNzY5OCw1LjM3NTU3NzQ1IDM1LjMzMjc2OTgsNS44MjgwNTcwNyBaIiBpZD0iUGF0aC05Ij48L3BhdGg+DQogICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtMTAiIHBvaW50cz0iMzUuMzMyNzY5OCAxMC4xNjM5Nzc2IDQ0Ljc5OTc1MzQgMTAuMTYzOTc3NiA0NC43OTk3NTM0IDIyLjAyMTg1OCI+PC9wb2x5bGluZT4NCiAgICAgICAgICAgIDxsaW5lIHgxPSIzOC40MDM3NzE3IiB5MT0iNDAuNzQ2NzA1MiIgeDI9IjM4LjQwMzc3MTciIHkyPSI0My43NjI4MzEyIiBpZD0iUGF0aC0xMSI+PC9saW5lPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FEot:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),i=n("8Kt/"),o=n.n(i),c=n("oW4V");t.default=function(){return Object(r.jsxs)("section",{className:"accounting",style:{padding:"150px 0 0"},children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:"\u041e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c"})}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"\u041e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(c.a,{}),Object(r.jsx)("div",{children:Object(r.jsxs)("a",{className:"extra-info",children:[Object(r.jsx)("img",{src:n("C+P4")}),Object(r.jsx)("a",{children:Object(r.jsx)("h5",{children:"\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0441\u043a\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 2021 \u0433\u043e\u0434"})})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("a",{className:"extra-info",children:[Object(r.jsx)("img",{src:n("C+P4")}),Object(r.jsx)("a",{children:Object(r.jsx)("h5",{children:"\u041e\u0442\u0447\u0451\u0442 \u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0438 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 2021 \u0433\u043e\u0434"})})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("a",{className:"extra-info",children:[Object(r.jsx)("img",{src:n("C+P4")}),Object(r.jsx)("a",{children:Object(r.jsx)("h5",{children:"\u041e\u0442\u0447\u0451\u0442 \u043e \u043f\u0440\u0438\u0431\u044b\u043b\u044f\u0445 \u0438 \u0443\u0431\u044b\u0442\u043a\u0430\u0445 2021 \u0433\u043e\u0434"})})]})})]})]})]})}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=i},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Nte7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/accounting",function(){return n("FEot")}])},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||i(e)||o(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),a=n("a1gu"),u=n("Nsbk");function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),I=function(e){c(n,e);var t=M(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=I},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["Nte7",0,1,10,11,24]]]);