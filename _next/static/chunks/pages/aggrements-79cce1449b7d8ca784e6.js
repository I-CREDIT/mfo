_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,c=void 0!==a&&a;return n||o&&c}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var i=0,s=d.length;i<s;i++){var u=d[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var f=o.props[u],l=r[u]||new Set;l.has(f)?a=!1:(l.add(f),r[u]=l)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},e)}h.rewind=function(){};var m=h;e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,a,c){try{var i=t[a](c),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var c=t.apply(e,n);function i(t){r(c,o,a,i,s,"next",t)}function s(t){r(c,o,a,i,s,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},M7WW:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aggrements",function(){return n("zJ0N")}])},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||c()}},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),l=function(t){c(n,t);var e=u(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=l},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},jI6F:function(t,e){t.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("U8pU"),o=n("JX7q");function a(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},zJ0N:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),c=n("1OyB"),i=n("vuIU"),s=n("Ji7U"),u=n("md7G"),f=n("foSv"),l=n("nKUr"),d=n("q1tI"),p=n.n(d),h=n("nOHt"),m=n.n(h),b=n("vDqi"),y=n.n(b),v=n("GUC0"),g=n.n(v),j=n("8Kt/"),x=n.n(j),O=n("5JmO"),_=n.n(O),k=n("TruH"),w=n.n(k);function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}function C(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}_.a.vfs=w.a.pdfMake.vfs,_.a.fonts={TimesNewRoman:{normal:"TimesNewRoman.ttf",bold:"TimesNewRomanBold.ttf",italics:"TimesNewRomanItalics.ttf",bolditalics:"TimesNewRomanBoldItalics.ttf"}};var M=function(t){Object(s.a)(r,t);var e=S(r);function r(t){var n;return Object(c.a)(this,r),(n=e.call(this,t)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null},n}return Object(i.a)(r,[{key:"getUserDocument",value:function(){var t=Object(a.a)(o.a.mark((function t(e){var n=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,y.a.get("https://api.money-men.kz/api/getData?token=".concat(e)).then((function(t){t.data.success?n.setState({docs:t.data.docs,id:t.data.id,id_req:t.data.id_req,loading:!1,rest:t.data.rest,phone:t.data.phone}):m.a.push("/")})).catch((function(t){n.setState({loading:!1}),m.a.push("/")}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCode",value:function(){var t=Object(a.a)(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&e.setState({isCodeSent:!0})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===this.state.code_conf){t.next=3;break}return t.next=3,y.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&g()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(t.message),"success").then((function(){m.a.push("/")}))})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var t=this;this.setState({loading:!0}),y.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(e){t.setState({loading:!1}),e.data.success&&g()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){m.a.push("/")}))})).catch((function(e){t.setState({loading:!1}),console.log(e),m.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var t=Object(a.a)(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loading:!0});try{y.a.get("https://api.money-men.kz/api/agreement",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(t){e.setState({loading:!1}),t.data.success&&g()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){m.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),m.a.push("/")}case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===C("token").length?m.a.push("/"):this.setState({token:C("token")}),this.getUserDocument(0!==C("token").length?C("token"):null)}},{key:"render",value:function(){var t=this,e={content:[{text:"\u0421\u0410\u049a\u0422\u0410\u041d\u0414\u042b\u0420\u0423 \u0422\u0423\u0420\u0410\u041b\u042b \u04e8\u0422\u0406\u041d\u0406\u0428/ \u0417\u0410\u042f\u0412\u041b\u0415\u041d\u0418\u0415 \u041d\u0410 \u0421\u0422\u0420\u0410\u0425\u041e\u0412\u0410\u041d\u0418\u0415",bold:!0},{text:"\u0421\u0410\u049a\u0422\u0410\u041d\u0414\u042b\u0420\u0423 \u0422\u0423\u0420\u0410\u041b\u042b \u04e8\u0422\u0406\u041d\u0406\u0428/ \u0417\u0410\u042f\u0412\u041b\u0415\u041d\u0418\u0415 \u041d\u0410 \u0421\u0422\u0420\u0410\u0425\u041e\u0412\u0410\u041d\u0418\u0415",italics:!0},{text:"\u0421\u0410\u049a\u0422\u0410\u041d\u0414\u042b\u0420\u0423 \u0422\u0423\u0420\u0410\u041b\u042b \u04e8\u0422\u0406\u041d\u0406\u0428/ \u0417\u0410\u042f\u0412\u041b\u0415\u041d\u0418\u0415 \u041d\u0410 \u0421\u0422\u0420\u0410\u0425\u041e\u0412\u0410\u041d\u0418\u0415",bolditalics:!0},{text:"\u0421\u0410\u049a\u0422\u0410\u041d\u0414\u042b\u0420\u0423 \u0422\u0423\u0420\u0410\u041b\u042b \u04e8\u0422\u0406\u041d\u0406\u0428/ \u0417\u0410\u042f\u0412\u041b\u0415\u041d\u0418\u0415 \u041d\u0410 \u0421\u0422\u0420\u0410\u0425\u041e\u0412\u0410\u041d\u0418\u0415"}],defaultStyle:{font:"TimesNewRoman"},styles:{header:{fontSize:20,bold:!0},text:{fontSize:12},boldText:{fontSize:12,bold:!0},subheader:{fontSize:50,italics:!0}}};return Object(l.jsxs)("div",{className:"container otherPages",children:[Object(l.jsx)(x.a,{children:Object(l.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(l.jsx)("div",{className:"modelLoader"}):Object(l.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsxs)("div",{className:"agreements-block",children:[Object(l.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(l.jsxs)("ul",{className:"complete",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(l.jsx)("a",{onClick:function(){return _.a.createPdf(e).open()},children:"\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(l.jsx)("a",{href:"##",target:"_blank",children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(l.jsx)("a",{href:"##",target:"_blank",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(l.jsx)("a",{href:"##",target:"_blank",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430"})]})]}),Object(l.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(l.jsx)("button",{onClick:function(){return t.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(l.jsx)("button",{onClick:function(){return t.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),r}(p.a.Component);e.default=M}},[["M7WW",0,1,19,20,2,3,4,6]]]);