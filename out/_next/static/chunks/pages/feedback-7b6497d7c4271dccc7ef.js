_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"0bVq":function(t,e,n){var r=n("hBhu");function o(t){if(!(this instanceof o))return new o(t);this._from=t,this.ease("linear"),this.duration(500)}n("M4kv")(o.prototype),o.prototype.reset=function(){return this.isArray="[object Array]"===Object.prototype.toString.call(this._from),this._curr=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},this._from),this._done=!1,this._start=Date.now(),this},o.prototype.to=function(t){return this.reset(),this._to=t,this},o.prototype.duration=function(t){return this._duration=t,this},o.prototype.ease=function(t){if(!(t="function"==typeof t?t:r[t]))throw new TypeError("invalid easing function");return this._ease=t,this},o.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},o.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,o=this._curr,i=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var c=0;c<n.length;++c)o[c]=n[c]+(r[c]-n[c])*i;return this._update(o),this}for(var u in n)o[u]=n[u]+(r[u]-n[u])*i;return this._update(o),this}},o.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)},t.exports=o},"2mql":function(t,e,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function a(t){return r.isMemo(t)?c:u[t.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=c;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(d){var o=h(n);o&&o!==d&&t(e,o,r)}var c=f(n);l&&(c=c.concat(l(n)));for(var u=a(e),b=a(n),m=0;m<c.length;++m){var y=c[m];if(!i[y]&&(!r||!r[y])&&(!b||!b[y])&&(!u||!u[y])){var v=p(n,y);try{s(e,y,v)}catch(g){}}}}return e}},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,i,c){try{var u=t[i](c),a=u.value}catch(s){return void n(s)}u.done?e(a):Promise.resolve(a).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function u(t){r(c,o,i,u,a,"next",t)}function a(t){r(c,o,i,u,a,"throw",t)}u(void 0)}))}}n.d(e,"a",(function(){return o}))},JwyU:function(t,e,n){var r=n("0bVq"),o=n("xEkU");t.exports=function(t,e,n){n=n||{};var i={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft},c=r(i).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);function u(){o(u),c.update()}return c.update((function(t){window.scrollTo(0|t.left,0|t.top)})),c.on("end",(function(){u=function(){}})),u(),c}},M4kv:function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length},t.exports=r},OPHg:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feedback",function(){return n("uc0Z")}])},SKMy:function(t,e,n){var r=n("JwyU");t.exports=function(t,e){if(e=e||{},"string"===typeof t&&(t=document.querySelector(t)),t)return r(0,function(t,e,n){var r,o=document.body,i=document.documentElement,c=t.getBoundingClientRect(),u=i.clientHeight,a=Math.max(o.scrollHeight,o.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);e=e||0,r="bottom"===n?c.bottom-u:"middle"===n?c.bottom-u/2-c.height/2:c.top;var s=a-u;return Math.min(r+e+window.pageYOffset,s)}(t,e.offset,e.align),e)}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},TOwV:function(t,e,n){"use strict";t.exports=n("qT12")},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},bQgK:function(t,e,n){(function(e){(function(){var n,r,o,i,c,u;"undefined"!==typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!==typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-c)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),u=1e9*e.uptime(),c=i-u):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},hBhu:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e.inElastic=function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},e.outElastic=function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},e.inOutElastic=function(t){var e,n=.1,r=.4;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=r*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*.5+1)},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce,e["in-elastic"]=e.inElastic,e["out-elastic"]=e.outElastic,e["in-out-elastic"]=e.inOutElastic},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},qT12:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,b=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function j(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case c:case a:case u:case d:return t;default:switch(t=t&&t.$$typeof){case f:case h:case y:case m:case s:return t;default:return e}}case i:return e}}}function w(t){return j(t)===p}e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=s,e.Element=o,e.ForwardRef=h,e.Fragment=c,e.Lazy=y,e.Memo=m,e.Portal=i,e.Profiler=a,e.StrictMode=u,e.Suspense=d,e.isAsyncMode=function(t){return w(t)||j(t)===l},e.isConcurrentMode=w,e.isContextConsumer=function(t){return j(t)===f},e.isContextProvider=function(t){return j(t)===s},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return j(t)===h},e.isFragment=function(t){return j(t)===c},e.isLazy=function(t){return j(t)===y},e.isMemo=function(t){return j(t)===m},e.isPortal=function(t){return j(t)===i},e.isProfiler=function(t){return j(t)===a},e.isStrictMode=function(t){return j(t)===u},e.isSuspense=function(t){return j(t)===d},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===c||t===p||t===a||t===u||t===d||t===b||"object"===typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===s||t.$$typeof===f||t.$$typeof===h||t.$$typeof===g||t.$$typeof===O||t.$$typeof===x||t.$$typeof===v)},e.typeOf=j},uc0Z:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),i=n("HaE+"),c=n("1OyB"),u=n("vuIU"),a=n("JX7q"),s=n("Ji7U"),f=n("md7G"),l=n("foSv"),p=n("nKUr"),h=n("q1tI"),d=n.n(h),b=(n("82Mt"),n("GObB")),m=n.n(b),y=(n("tAlu"),n("T2y0"),n("vDqi")),v=n.n(y),g=n("KYPV"),O=n("8Kt/"),x=n.n(O);function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var w=n("SKMy"),_=function(t){Object(s.a)(n,t);var e=j(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={btnLoading:!1,message:null,errorMessage:null},r.handleSubmit=r.handleSubmit.bind(Object(a.a)(r)),r}return Object(u.a)(n,[{key:"handleSubmit",value:function(){var t=Object(i.a)(o.a.mark((function t(e,n){var r=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.name&&e.feedback){t.next=4;break}this.setState({errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",message:null}),t.next=8;break;case 4:return this.setState({btnLoading:!0,errorMessage:null}),n({}),t.next=8,v.a.post("https://api.money-men.kz/api/send_feedback",e).then((function(t){r.setState({btnLoading:!1,message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e! \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043e\u0442\u0437\u044b\u0432"}),w(".alert-success",{offset:0,align:"middle",ease:"outExpo",duration:600})})).catch((function(t){console.log(t),r.setState({btnLoading:!1})}));case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{children:Object(p.jsxs)("section",{className:"otherPages",children:[Object(p.jsx)(x.a,{children:Object(p.jsx)("title",{children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"})}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)("section",{className:"oplata feedback row",children:Object(p.jsxs)("div",{className:" complaint oplate--form feedbackForm",children:[Object(p.jsx)("h2",{className:"text-center mb-3",children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"}),Object(p.jsx)(g.c,{initialValues:{name:"",feedback:""},onSubmit:function(e,n){var r=n.resetForm;t.handleSubmit(e,r)},children:function(e){e.errors,e.touched,e.isValidating,e.isSubmitting;return Object(p.jsxs)(g.b,{className:"oplataform",children:[null!==t.state.message?Object(p.jsx)("div",{className:"alert alert-success",role:"alert",children:Object(p.jsxs)("strong",{children:[" ",t.state.message]})}):null,null!==t.state.errorMessage?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(p.jsxs)("strong",{children:[" ",t.state.errorMessage]})}):null,Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:Object(p.jsx)("h2",{children:"\u0418\u043c\u044f:"})}),Object(p.jsx)(g.a,{name:"name",placeholder:"\u0418\u043c\u044f"})]}),Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("label",{htmlFor:"feedback",children:Object(p.jsx)("h2",{children:"\u041e\u0442\u0437\u044b\u0432:"})}),Object(p.jsx)(g.a,{name:"feedback",as:"textarea"})]}),Object(p.jsx)("div",{className:"buttonForm",children:!0===t.state.btnLoading?Object(p.jsx)(m.a,{className:"loading",size:200,spinnerColor:"#ef2221",spinnerWidth:2,visible:!0}):Object(p.jsx)("button",{className:"redbtn",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}})]})})})]})})}}]),n}(d.a.Component);e.default=_},xEkU:function(t,e,n){(function(e){for(var r=n("bQgK"),o="undefined"===typeof window?e:window,i=["moz","webkit"],c="AnimationFrame",u=o["request"+c],a=o["cancel"+c]||o["cancelRequest"+c],s=0;!u&&s<i.length;s++)u=o[i[s]+"Request"+c],a=o[i[s]+"Cancel"+c]||o[i[s]+"CancelRequest"+c];if(!u||!a){var f=0,l=0,p=[];u=function(t){if(0===p.length){var e=r(),n=Math.max(0,16.666666666666668-(e-f));f=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(f)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++l,callback:t,cancelled:!1}),l},a=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return u.call(o,t)},t.exports.cancel=function(){a.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=u,t.cancelAnimationFrame=a}}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["OPHg",0,1,2,4,7,10,11]]]);