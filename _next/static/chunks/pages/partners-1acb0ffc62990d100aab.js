_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,s=p.length;i<s;i++){var u=p[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],f=r[u]||new Set;f.has(l)?a=!1:(f.add(l),r[u]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},jI6F:function(e,t){e.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vnC9:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("8Kt/"),a=n.n(o);t.default=function(){return Object(r.jsxs)("div",{className:"partners",children:[Object(r.jsx)(a.a,{children:Object(r.jsx)("title",{children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"})}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"title",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432"}),Object(r.jsx)("p",{className:"subtitle",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043e\u0442 MoneyMan \u2013 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043e\u043a, \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0439 \u043e\u0441\u043e\u0431\u044b\u0445 \u0443\u0441\u0438\u043b\u0438\u0439."}),Object(r.jsxs)("div",{className:"invite",children:[Object(r.jsx)("p",{children:"\u041c\u044b \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0443:"}),Object(r.jsxs)("ul",{className:"complete",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),"\u0412\u0435\u0431-\u043c\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u0438 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432 \u043a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0445 \u0441\u0430\u0439\u0442\u043e\u0432"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),"\u041b\u0438\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u044b"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),"\u041a\u0443\u043f\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),"\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043f\u043e\u0440\u0442\u0430\u043b\u044b"]})]})]}),Object(r.jsx)("p",{children:"\u0412\u0440\u0435\u043c\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u2013 \u043e\u0434\u043d\u0430 \u043c\u0438\u043d\u0443\u0442\u0430. \u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u044b \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u043a\u0430\u0436\u0434\u0443\u044e \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u0443\u044e \u0437\u0430\u044f\u0432\u043a\u0443. \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0445\u043e\u0434\u043e\u0432 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}),Object(r.jsxs)("form",{className:"form-group",children:[Object(r.jsx)("input",{class:"form-control form-control-lg",type:"text",placeholder:"\u0418\u043c\u044f*"}),Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("input",{type:"email",class:"form-control-lg",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"E-mail*"}),Object(r.jsx)("input",{type:"number",class:"form-control-lg",id:"exampleInputEmail1",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d*"})]}),Object(r.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435*"}),Object(r.jsx)("button",{type:"submit",class:"btn",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})]})}},zEcR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partners",function(){return n("vnC9")}])}},[["zEcR",0,1]]]);