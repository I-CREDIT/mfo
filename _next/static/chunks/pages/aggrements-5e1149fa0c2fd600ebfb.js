_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(a.AmpStateContext))};var i,r=(i=n("q1tI"))&&i.__esModule?i:{default:i},a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,a=e.hasQuery,o=void 0!==a&&a;return n||r&&o}},"1OyB":function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return i}))},"7W2i":function(e,t,n){var i=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(i=n("Xuae"))&&i.__esModule?i:{default:i},o=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var u=p[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=r.props[u],d=i[u]||new Set;d.has(l)?a=!1:(d.add(l),i[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),i=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=r},"HaE+":function(e,t,n){"use strict";function i(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return r}))},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},JX7q:function(e,t,n){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return i}))},Ji7U:function(e,t,n){"use strict";function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}n.d(t,"a",(function(){return r}))},M7WW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aggrements",function(){return n("zJ0N")}])},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var i=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return i(e)||r(e)||a(e)||o()}},U8pU:function(e,t,n){"use strict";function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}))},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){o(n,e);var t=u(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(i(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var i=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?r(e):t}},foSv:function(e,t,n){"use strict";function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return i}))},jI6F:function(e,t){e.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=r},md7G:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("U8pU"),r=n("JX7q");function a(e,t){return!t||"object"!==Object(i.a)(t)&&"function"!==typeof t?Object(r.a)(e):t}},vuIU:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.d(t,"a",(function(){return r}))},zJ0N:function(e,t,n){"use strict";n.r(t);var i=n("o0o1"),r=n.n(i),a=n("HaE+"),o=n("1OyB"),s=n("vuIU"),c=n("Ji7U"),u=n("md7G"),l=n("foSv"),d=n("nKUr"),p=n("q1tI"),f=n.n(p),m=n("nOHt"),h=n.n(m),v=n("vDqi"),b=n.n(v),g=n("GUC0"),y=n.n(g),j=n("8Kt/"),x=n.n(j),O=n("5JmO"),k=n.n(O),w=n("TruH"),_=n.n(w);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(u.a)(this,n)}}function q(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}k.a.vfs=_.a.pdfMake.vfs,k.a.fonts={TimesNewRoman:{normal:"TimesNewRoman.ttf",bold:"TimesNewRoman.ttf",italics:"TimesNewRoman.ttf",bolditalics:"TimesNewRoman.ttf"}};var C=function(e){Object(c.a)(i,e);var t=S(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null},n}return Object(s.a)(i,[{key:"getUserDocument",value:function(){var e=Object(a.a)(r.a.mark((function e(t){var n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,b.a.get("https://api.money-men.kz/api/getData?token=".concat(t)).then((function(e){e.data.success?n.setState({docs:e.data.docs,id:e.data.id,id_req:e.data.id_req,loading:!1,rest:e.data.rest,phone:e.data.phone}):h.a.push("/")})).catch((function(e){n.setState({loading:!1}),h.a.push("/")}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCode",value:function(){var e=Object(a.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&t.setState({isCodeSent:!0})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.state.code_conf){e.next=3;break}return e.next=3,b.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&y()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(e.message),"success").then((function(){h.a.push("/")}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var e=this;this.setState({loading:!0}),b.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(t){e.setState({loading:!1}),t.data.success&&y()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){h.a.push("/")}))})).catch((function(t){e.setState({loading:!1}),console.log(t),h.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var e=Object(a.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0});try{b.a.get("https://api.money-men.kz/api/agreement",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(e){t.setState({loading:!1}),e.data.success&&y()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){h.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),h.a.push("/")}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===q("token").length?h.a.push("/"):this.setState({token:q("token")}),this.getUserDocument(0!==q("token").length?q("token"):null)}},{key:"render",value:function(){var e=this,t={content:[{text:"\u0421\u0410\u049a\u0422\u0410\u041d\u0414\u042b\u0420\u0423 \u0422\u0423\u0420\u0410\u041b\u042b \u04e8\u0422\u0406\u041d\u0406\u0428/ \u0417\u0410\u042f\u0412\u041b\u0415\u041d\u0418\u0415 \u041d\u0410 \u0421\u0422\u0420\u0410\u0425\u041e\u0412\u0410\u041d\u0418\u0415",style:"header"},{text:["\u0410\u0433\u0435\u043d\u0442: ",{text:"\u041c\u0424\u041e \u201ci-credit.kz\u201d",fontSize:25}],bold:!0,fontSize:20},{text:"\u0421\u0430\u049b\u0442\u0430\u043d\u0434\u044b\u0440\u044b\u043b\u0443\u0448\u044b \u0431\u043e\u043b\u044b\u043f \u0442\u0430\u0431\u044b\u043b\u0430\u0442\u044b\u043d \u0421\u0430\u049b\u0442\u0430\u043d\u0443\u0448\u044b \u0442\u0443\u0440\u0430\u043b\u044b \u043c\u04d9\u043b\u0456\u043c\u0435\u0442\u0442\u0435\u0440 /\u0421\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u0442\u0435\u043b\u0435, \u044f\u0432\u043b\u044f\u044e\u0449\u0438\u043c\u0441\u044f \u0417\u0430\u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u043d\u044b\u043c",style:"subheader"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n",{text:"Subheader 2 - using subheader style",style:"subheader"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n",{text:"It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties",style:["quote","small"]}],defaultStyle:{font:"TimesNewRoman"},styles:{header:{fontSize:16,bold:!0},subheader:{fontSize:16,bolditalics:!0},text:{fontSize:12,italics:!0},boldText:{fontSize:12,italics:!0},quote:{fontSize:12,italics:!0},small:{fontSize:8}}};return Object(d.jsxs)("div",{className:"container otherPages",children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(d.jsx)("div",{className:"modelLoader"}):Object(d.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"agreements-block",children:[Object(d.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(d.jsxs)("ul",{className:"complete",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{onClick:function(){return k.a.createPdf(t).open()},children:"\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{href:"##",target:"_blank",children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{href:"##",target:"_blank",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(d.jsx)("a",{href:"##",target:"_blank",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430"})]})]}),Object(d.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(d.jsx)("button",{onClick:function(){return e.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(d.jsx)("button",{onClick:function(){return e.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),i}(f.a.Component);t.default=C}},[["M7WW",0,1,19,20,2,3,4,6]]]);