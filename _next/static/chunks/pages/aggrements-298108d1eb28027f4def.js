_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,c=void 0!==o&&o;return n||r&&c}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},c=n("lwAK"),s=n("FYa8"),i=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,i=f.length;s<i;s++){var u=f[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],d=a[u]||new Set;d.has(l)?o=!1:(d.add(l),a[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(c.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,i.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},M7WW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aggrements",function(){return n("zJ0N")}])},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=i(e);if(t){var r=i(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},jI6F:function(e,t){e.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},zJ0N:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),c=n("1OyB"),s=n("vuIU"),i=n("Ji7U"),u=n("md7G"),l=n("foSv"),d=n("nKUr"),f=n("q1tI"),p=n.n(f),h=n("nOHt"),m=n.n(h),v=n("vDqi"),g=n.n(v),y=n("GUC0"),j=n.n(y),b=n("8Kt/"),k=n.n(b),x=n("5JmO"),O=n.n(x),_=n("TruH"),w=n.n(_),C=n("tNPP"),S=n("uuUm"),M=n("Otl1"),I=n("uJQ+");function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}function A(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}O.a.vfs=w.a.pdfMake.vfs,O.a.fonts={TimesNewRoman:{normal:"TimesNewRoman.ttf",bold:"TimesNewRomanBold.ttf",italics:"TimesNewRomanItalics.ttf",bolditalics:"TimesNewRomanBoldItalics.ttf"},emptyCheckbox:{normal:"emptyCheckbox.ttf"}};var P=function(e){Object(i.a)(a,e);var t=N(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null},n}return Object(s.a)(a,[{key:"getUserDocument",value:function(){var e=Object(o.a)(r.a.mark((function e(t){var n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,g.a.get("https://api.money-men.kz/api/getData?token=".concat(t)).then((function(e){e.data.success?n.setState({docs:e.data.docs,id:e.data.id,id_req:e.data.id_req,loading:!1,rest:e.data.rest,phone:e.data.phone}):m.a.push("/")})).catch((function(e){n.setState({loading:!1}),m.a.push("/")}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCode",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&t.setState({isCodeSent:!0})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.state.code_conf){e.next=3;break}return e.next=3,g.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&j()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(e.message),"success").then((function(){m.a.push("/")}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var e=this;this.setState({loading:!0}),g.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(t){e.setState({loading:!1}),t.data.success&&j()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){m.a.push("/")}))})).catch((function(t){e.setState({loading:!1}),console.log(t),m.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0});try{g.a.get("https://api.money-men.kz/api/agreement",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(e){t.setState({loading:!1}),e.data.success&&j()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){m.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),m.a.push("/")}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===A("token").length?m.a.push("/"):this.setState({token:A("token")}),this.getUserDocument(0!==A("token").length?A("token"):null)}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"container otherPages",children:[Object(d.jsx)(k.a,{children:Object(d.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(d.jsx)("div",{className:"modelLoader"}):Object(d.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"agreements-block",children:[Object(d.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(d.jsxs)("ul",{className:"complete",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{onClick:function(){return O.a.createPdf(C.a).open()},children:"\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{onClick:function(){return O.a.createPdf(S.a).open()},children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{onClick:function(){return O.a.createPdf(M.a).open()},children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{onClick:function(){return O.a.createPdf(I.a).open()},children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430"})]})]}),Object(d.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(d.jsx)("button",{onClick:function(){return e.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(d.jsx)("button",{onClick:function(){return e.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),a}(p.a.Component);t.default=P}},[["M7WW",0,1,14,21,19,2,3,4,6,22]]]);