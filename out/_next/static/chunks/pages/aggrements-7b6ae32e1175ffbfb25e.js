_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var u=f[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=a.props[u],l=r[u]||new Set;l.has(d)?o=!1:(l.add(d),r[u]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,s,"next",e)}function s(e){r(c,a,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},M7WW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aggrements",function(){return n("zJ0N")}])},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},jI6F:function(e,t){e.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},zJ0N:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c=n("1OyB"),i=n("vuIU"),s=n("Ji7U"),u=n("md7G"),d=n("foSv"),l=n("nKUr"),f=n("q1tI"),p=n.n(f),h=n("nOHt"),m=n.n(h),v=n("vDqi"),g=n.n(v),y=n("GUC0"),b=n.n(y),j=n("8Kt/"),k=n.n(j);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}function _(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var O=function(e){Object(s.a)(r,e);var t=x(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null},n}return Object(i.a)(r,[{key:"getUserDocument",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,g.a.get("https://api.money-men.kz/api/getData?token=".concat(t)).then((function(e){e.data.success?n.setState({docs:e.data.docs,id:e.data.id,id_req:e.data.id_req,loading:!1,rest:e.data.rest,phone:e.data.phone}):m.a.push("/")})).catch((function(e){n.setState({loading:!1}),m.a.push("/")}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCode",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&t.setState({isCodeSent:!0})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.state.code_conf){e.next=3;break}return e.next=3,g.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&b()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(e.message),"success").then((function(){m.a.push("/")}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var e=this;this.setState({loading:!0}),g.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(t){e.setState({loading:!1}),t.data.success&&b()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){m.a.push("/")}))})).catch((function(t){e.setState({loading:!1}),console.log(t),m.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0});try{g.a.get("https://api.money-men.kz/api/agreement",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(e){t.setState({loading:!1}),e.data.success&&b()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){m.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),m.a.push("/")}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===_("token").length?m.a.push("/"):this.setState({token:_("token")}),this.getUserDocument(0!==_("token").length?_("token"):null)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"container otherPages",children:[Object(l.jsx)(k.a,{children:Object(l.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(l.jsx)("div",{className:"modelLoader"}):Object(l.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsxs)("div",{className:"agreements-block",children:[Object(l.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(l.jsx)("ul",{className:"complete",children:this.state.docs.map((function(e){return Object(l.jsxs)("li",{className:null===e.link?"d-none":"",children:[Object(l.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(l.jsx)("a",{href:e.link,target:"_blank",children:e.name})]})}))}),Object(l.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(l.jsx)("button",{onClick:function(){return e.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(l.jsx)("button",{onClick:function(){return e.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),r}(p.a.Component);t.default=O}},[["M7WW",0,1,2,3,4,6]]]);