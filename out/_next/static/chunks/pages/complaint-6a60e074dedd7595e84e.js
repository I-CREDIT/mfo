_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"0bVq":function(t,e,n){var r=n("hBhu");function i(t){if(!(this instanceof i))return new i(t);this._from=t,this.ease("linear"),this.duration(500)}n("M4kv")(i.prototype),i.prototype.reset=function(){return this.isArray="[object Array]"===Object.prototype.toString.call(this._from),this._curr=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},this._from),this._done=!1,this._start=Date.now(),this},i.prototype.to=function(t){return this.reset(),this._to=t,this},i.prototype.duration=function(t){return this._duration=t,this},i.prototype.ease=function(t){if(!(t="function"==typeof t?t:r[t]))throw new TypeError("invalid easing function");return this._ease=t,this},i.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},i.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,r=this._to,i=this._curr,o=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var a=0;a<n.length;++a)i[a]=n[a]+(r[a]-n[a])*o;return this._update(i),this}for(var c in n)i[c]=n[c]+(r[c]-n[c])*o;return this._update(i),this}},i.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)},t.exports=i},"2mql":function(t,e,n){"use strict";var r=n("TOwV"),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||i}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(m){var i=p(n);i&&i!==m&&t(e,i,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=u(e),h=u(n),b=0;b<a.length;++b){var y=a[b];if(!o[y]&&(!r||!r[y])&&(!h||!h[y])&&(!c||!c[y])){var g=d(n,y);try{s(e,y,g)}catch(v){}}}}return e}},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,u,"next",t)}function u(t){r(a,i,o,c,u,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return i}))},JwyU:function(t,e,n){var r=n("0bVq"),i=n("xEkU");t.exports=function(t,e,n){n=n||{};var o={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft},a=r(o).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);function c(){i(c),a.update()}return a.update((function(t){window.scrollTo(0|t.left,0|t.top)})),a.on("end",(function(){c=function(){}})),c(),a}},M4kv:function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<r.length;i++)if((n=r[i])===e||n.fn===e){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,e);return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length},t.exports=r},SKMy:function(t,e,n){var r=n("JwyU");t.exports=function(t,e){if(e=e||{},"string"===typeof t&&(t=document.querySelector(t)),t)return r(0,function(t,e,n){var r,i=document.body,o=document.documentElement,a=t.getBoundingClientRect(),c=o.clientHeight,u=Math.max(i.scrollHeight,i.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight);e=e||0,r="bottom"===n?a.bottom-c:"middle"===n?a.bottom-c/2-a.height/2:a.top;var s=u-c;return Math.min(r+e+window.pageYOffset,s)}(t,e.offset,e.align),e)}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},TOwV:function(t,e,n){"use strict";t.exports=n("qT12")},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},bQgK:function(t,e,n){(function(e){(function(){var n,r,i,o,a,c;"undefined"!==typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!==typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-a)/1e6},r=e.hrtime,o=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),c=1e9*e.uptime(),a=o-c):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},hBhu:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e.inElastic=function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},e.outElastic=function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},e.inOutElastic=function(t){var e,n=.1,r=.4;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=r*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*.5+1)},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce,e["in-elastic"]=e.inElastic,e["out-elastic"]=e.outElastic,e["in-out-elastic"]=e.inOutElastic},lLxE:function(t,e,n){"use strict";n.r(e);var r=n("rePB"),i=n("o0o1"),o=n.n(i),a=n("HaE+"),c=n("1OyB"),u=n("vuIU"),s=n("JX7q"),l=n("Ji7U"),f=n("md7G"),d=n("foSv"),p=n("nKUr"),m=n("q1tI"),h=n.n(m),b=(n("82Mt"),n("GObB")),y=n.n(b),g=n("tAlu"),v=n.n(g),j=n("ppuw"),O=(n("T2y0"),n("vDqi")),x=n.n(O),w=n("8Kt/"),k=n.n(w),S=n("KYPV");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var i=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var $=n("SKMy"),B=[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],E=function(t){Object(l.a)(n,t);var e=P(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={btnLoading:!1,message:null,errorMessage:null},r.handleSubmit=r.handleSubmit.bind(Object(s.a)(r)),r}return Object(u.a)(n,[{key:"handleSubmit",value:function(){var t=Object(a.a)(o.a.mark((function t(e,n){var r=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(setTimeout((function(){$(".alert-danger",{offset:0,align:"middle",ease:"outExpo",duration:600})}),50),e.name&&e.iin&&e.email&&e.comment){t.next=5;break}this.setState({errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),t.next=17;break;case 5:if(Object(j.n)(e.email)){t.next=9;break}this.setState({errorMessage:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"}),t.next=17;break;case 9:if(Object(j.g)(e.iin)){t.next=13;break}this.setState({errorMessage:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d"}),t.next=17;break;case 13:return this.setState({btnLoading:!0,errorMessage:null}),n({}),t.next=17,x.a.get("https://api.money-men.kz/api/send_complaint?name=".concat(e.name,"&iin=").concat(e.iin,"&email=").concat(e.email,"&comment=").concat(e.comment)).then((function(t){r.setState({btnLoading:!1,message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e! \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043e\u0442\u0437\u044b\u0432"}),$(".alert-success",{offset:0,align:"middle",ease:"outExpo",duration:600})})).catch((function(t){console.log(t),r.setState({btnLoading:!1})}));case 17:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{children:Object(p.jsxs)("section",{className:"otherPages",children:[Object(p.jsx)(k.a,{children:Object(p.jsx)("title",{children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0436\u0430\u043b\u043e\u0431\u0443 | Zaymi.kz"})}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)("section",{className:"oplata feedback row",children:Object(p.jsxs)("div",{className:" oplate--form feedbackForm",children:[Object(p.jsx)("h2",{className:"text-center mb-3",children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0436\u0430\u043b\u043e\u0431\u0443"}),Object(p.jsx)(S.c,{initialValues:{name:"",comment:"",iin:"",email:""},onSubmit:function(e,n){var r=n.resetForm;t.handleSubmit(e,r)},children:function(e){e.errors,e.touched,e.isValidating,e.isSubmitting;return Object(p.jsxs)(S.b,{className:"oplataform complaint",children:[null!==t.state.message?Object(p.jsx)("div",{className:"alert alert-success",role:"alert",children:Object(p.jsxs)("strong",{children:[" ",t.state.message]})}):null,null!==t.state.errorMessage?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(p.jsxs)("strong",{children:[" ",t.state.errorMessage]})}):null,Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:Object(p.jsx)("h2",{children:"\u0418\u043c\u044f:"})}),Object(p.jsx)(S.a,{name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})]}),Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("label",{htmlFor:"email",children:Object(p.jsx)("h2",{children:"Email \u0430\u0434\u0440\u0435\u0441:"})}),Object(p.jsx)(S.a,{name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"})]}),Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("label",{htmlFor:"email",children:Object(p.jsx)("h2",{children:"\u0418\u0418\u041d:"})}),Object(p.jsx)(S.a,{name:"iin",placeholder:"\u0418\u0418\u041d",render:function(t){var e=t.field;return Object(p.jsx)(v.a,M(M({},e),{},{mask:B,id:"iin",type:"text",placeholder:"\u0418\u0418\u041d"}))}})]}),Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("label",{htmlFor:"comment",children:Object(p.jsx)("h2",{children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f:"})}),Object(p.jsx)(S.a,{name:"comment",as:"textarea"})]}),Object(p.jsx)("div",{className:"buttonForm",children:!0===t.state.btnLoading?Object(p.jsx)(y.a,{className:"loading",size:200,spinnerColor:"#ef2221",spinnerWidth:2,visible:!0}):Object(p.jsx)("button",{className:"redbtn",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}})]})})})]})})}}]),n}(h.a.Component);e.default=E},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},ppuw:function(t,e,n){"use strict";n.d(e,"m",(function(){return r})),n.d(e,"n",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"l",(function(){return c})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"c",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return b}));var r=function(t){return t&&t.length},i=function(t){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)},o=function(t){return!1===/[a-zA-Z0-9_"*/]/i.test(t)},a=function(t){if(t&&12!==t.length)return!1;if(!t)return!1;for(var e=[1,2,3,4,5,6,7,8,9,10,11],n=[3,4,5,6,7,8,9,10,11,1,2],r=[],i=0,o=0;o<12;o++)r[o]=parseInt(t.substring(o,o+1)),o<11&&(i+=r[o]*e[o]);if(10==(i%=11)){i=0;for(o=0;o<11;o++)i+=r[o]*n[o];i%=11}return i==r[11]},c=function(t){var e=String(t).replace(/[^A-Z0-9]/g,""),n=e.match(/^(\d{4})(\d{3})(\d{4})$/);if(!n||11!==e.length)return!1;var r=n[1];return[{id:"7700"},{id:"7701"},{id:"7702"},{id:"7705"},{id:"7706"},{id:"7707"},{id:"7708"},{id:"7747"},{id:"7771"},{id:"7775"},{id:"7776"},{id:"7777"},{id:"7778"}].filter((function(t){return t.id==r})).length>0},u=function(t){var e=String(t).toUpperCase().replace(/[^A-Z0-9]/g,""),n=e.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/);if(!n||20!==e.length)return"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430";var r=n[3],i=[{id:"947",name:'\u0410\u041e "\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0411\u0430\u043d\u043a "\u0410\u041b\u042c\u0424\u0410-\u0411\u0410\u041d\u041a"'},{id:"826",name:'\u0410\u041e "\u0410\u0422\u0424\u0411\u0430\u043d\u043a"'},{id:"913",name:'\u0410\u041e \u0414\u0411 "\u0411\u0410\u041d\u041a \u041a\u0418\u0422\u0410\u042f \u0412 \u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d\u0415"'},{id:"722",name:'\u0410\u041e "KASPI BANK"'},{id:"766",name:'\u0410\u041e "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0439 \u0426\u0435\u043d\u043d\u044b\u0445 \u0411\u0443\u043c\u0430\u0433"'},{id:"832",name:'\u0410\u041e "\u0421\u0438\u0442\u0438\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"907",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0420\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"700",name:"\u0415\u0412\u0420\u0410\u0417\u0418\u0419\u0421\u041a\u0418\u0419 \u0411\u0410\u041d\u041a \u0420\u0410\u0417\u0412\u0418\u0422\u0418\u042f"},{id:"948",name:'\u0410\u041e "\u0415\u0432\u0440\u0430\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a"'},{id:"009",name:'\u041d\u0410\u041e \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u044f "\u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0433\u0440\u0430\u0436\u0434\u0430\u043d"'},{id:"972",name:'\u0410\u041e "\u0416\u0438\u043b\u0441\u0442\u0440\u043e\u0439\u0441\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"246",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a "Al Hilal"'},{id:"601",name:'\u0410\u041e "\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"930",name:'\u0410\u041e "\u0422\u043e\u0440\u0433\u043e\u0432\u043e-\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0438\u0442\u0430\u044f \u0432 \u0433. \u0410\u043b\u043c\u0430\u0442\u044b"'},{id:"550",name:"\u0433.\u041c\u043e\u0441\u043a\u0432\u0430 \u041c\u0435\u0436\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a"},{id:"886",name:'\u0414\u0411 \u0410\u041e "\u0425\u043e\u0443\u043c \u041a\u0440\u0435\u0434\u0438\u0442 \u044d\u043d\u0434 \u0424\u0438\u043d\u0430\u043d\u0441 \u0411\u0430\u043d\u043a"'},{id:"965",name:'\u0410\u041e "ForteBank"'},{id:"927",name:'\u0410\u041e "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u0434\u043e\u0432\u0430\u044f \u0431\u0438\u0440\u0436\u0430"'},{id:"821",name:'\u0410\u041e "\u0411\u0430\u043d\u043a "Bank RBK"'},{id:"224",name:'\u0420\u0413\u041f "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440 \u043c\u0435\u0436\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u041d\u0411\u0420\u041a"'},{id:"070",name:'\u0420\u0413\u0423 "\u041a\u043e\u043c\u0438\u0442\u0435\u0442 \u043a\u0430\u0437\u043d\u0430\u0447\u0435\u0439\u0441\u0442\u0432\u0430 \u041c\u0438\u043d\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432 \u0420\u041a"'},{id:"551",name:'\u0410\u041e "\u0411\u0430\u043d\u043a Kassa Nova" (\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0431\u0430\u043d\u043a \u0410\u041e "ForteBank")'},{id:"885",name:'\u0410\u041e "\u0414\u0411 "\u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d-\u0417\u0418\u0420\u0410\u0410\u0422 \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0428\u041d\u041b \u0411\u0410\u041d\u041a"'},{id:"774",name:'\u0410\u041e "AsiaCredit Bank (\u0410\u0437\u0438\u044f\u041a\u0440\u0435\u0434\u0438\u0442 \u0411\u0430\u043d\u043a)" '},{id:"553",name:'\u0410\u041e \u0414\u0411 "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d\u0430" \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435'},{id:"147",name:'"\u0411\u0430\u043d\u043a-\u043a\u0430\u0441\u0442\u043e\u0434\u0438\u0430\u043d \u0410\u041e  "\u0415\u041d\u041f\u0424"'},{id:"125",name:"\u0420\u0413\u0423 \u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},{id:"849",name:'\u0410\u041e "\u041d\u0443\u0440\u0431\u0430\u043d\u043a"'},{id:"914",name:'\u0414\u0411 \u0410\u041e "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a"'},{id:"435",name:'\u0410\u041e "\u0428\u0438\u043d\u0445\u0430\u043d \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"781",name:'\u0410\u041e "Capital Bank Kazakhstan"'},{id:"620",name:'\u0410\u041e "Tengri Bank"'},{id:"998",name:'\u0410\u041e "First Heartland Jysan Bank"'},{id:"432",name:"\u0414\u041e \u0410\u041e \u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)"},{id:"896",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0431\u0430\u043d\u043a "\u0417\u0430\u043c\u0430\u043d-\u0411\u0430\u043d\u043a"'},""].filter((function(t){return t.id==r}));return i.length>0?i[0].name:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"},s=function(t){var e=String(t).toUpperCase().replace(/[^A-Z0-9]/g,""),n=e.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/);if(!n||20!==e.length)return!1;var r=n[3];return[{id:"947",name:'\u0410\u041e "\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0411\u0430\u043d\u043a "\u0410\u041b\u042c\u0424\u0410-\u0411\u0410\u041d\u041a"'},{id:"826",name:'\u0410\u041e "\u0410\u0422\u0424\u0411\u0430\u043d\u043a"'},{id:"949",name:'\u0410\u041e "Altyn Bank" (\u0414\u0411 China Citic Bank Corporation Limited) '},{id:"913",name:'\u0410\u041e \u0414\u0411 "\u0411\u0410\u041d\u041a \u041a\u0418\u0422\u0410\u042f \u0412 \u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d\u0415"'},{id:"722",name:'\u0410\u041e "KASPI BANK"'},{id:"766",name:'\u0410\u041e "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0439 \u0426\u0435\u043d\u043d\u044b\u0445 \u0411\u0443\u043c\u0430\u0433"'},{id:"832",name:'\u0410\u041e "\u0421\u0438\u0442\u0438\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"907",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0420\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"700",name:"\u0415\u0412\u0420\u0410\u0417\u0418\u0419\u0421\u041a\u0418\u0419 \u0411\u0410\u041d\u041a \u0420\u0410\u0417\u0412\u0418\u0422\u0418\u042f"},{id:"948",name:'\u0410\u041e "\u0415\u0432\u0440\u0430\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a"'},{id:"009",name:'\u041d\u0410\u041e \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u044f "\u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0433\u0440\u0430\u0436\u0434\u0430\u043d"'},{id:"972",name:'\u0410\u041e "\u0416\u0438\u043b\u0441\u0442\u0440\u043e\u0439\u0441\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"246",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a "Al Hilal"'},{id:"601",name:'\u0410\u041e "\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"930",name:'\u0410\u041e "\u0422\u043e\u0440\u0433\u043e\u0432\u043e-\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0438\u0442\u0430\u044f \u0432 \u0433. \u0410\u043b\u043c\u0430\u0442\u044b"'},{id:"550",name:"\u0433.\u041c\u043e\u0441\u043a\u0432\u0430 \u041c\u0435\u0436\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a"},{id:"886",name:'\u0414\u0411 \u0410\u041e "\u0425\u043e\u0443\u043c \u041a\u0440\u0435\u0434\u0438\u0442 \u044d\u043d\u0434 \u0424\u0438\u043d\u0430\u043d\u0441 \u0411\u0430\u043d\u043a"'},{id:"965",name:'\u0410\u041e "ForteBank"'},{id:"927",name:'\u0410\u041e "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u0434\u043e\u0432\u0430\u044f \u0431\u0438\u0440\u0436\u0430"'},{id:"821",name:'\u0410\u041e "\u0411\u0430\u043d\u043a "Bank RBK"'},{id:"224",name:'\u0420\u0413\u041f "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440 \u043c\u0435\u0436\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u041d\u0411\u0420\u041a"'},{id:"070",name:'\u0420\u0413\u0423 "\u041a\u043e\u043c\u0438\u0442\u0435\u0442 \u043a\u0430\u0437\u043d\u0430\u0447\u0435\u0439\u0441\u0442\u0432\u0430 \u041c\u0438\u043d\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432 \u0420\u041a"'},{id:"563",name:'\u0410\u041e "\u041a\u0410\u0417\u041f\u041e\u0427\u0422\u0410"'},{id:"551",name:'\u0410\u041e "\u0411\u0430\u043d\u043a Kassa Nova" (\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0431\u0430\u043d\u043a \u0410\u041e "ForteBank")'},{id:"885",name:'\u0410\u041e "\u0414\u0411 "\u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d-\u0417\u0418\u0420\u0410\u0410\u0422 \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0428\u041d\u041b \u0411\u0410\u041d\u041a"'},{id:"774",name:'\u0410\u041e "AsiaCredit Bank (\u0410\u0437\u0438\u044f\u041a\u0440\u0435\u0434\u0438\u0442 \u0411\u0430\u043d\u043a)" '},{id:"553",name:'\u0410\u041e \u0414\u0411 "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d\u0430" \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435'},{id:"147",name:'"\u0411\u0430\u043d\u043a-\u043a\u0430\u0441\u0442\u043e\u0434\u0438\u0430\u043d \u0410\u041e  "\u0415\u041d\u041f\u0424"'},{id:"125",name:"\u0420\u0413\u0423 \u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},{id:"849",name:'\u0410\u041e "\u041d\u0443\u0440\u0431\u0430\u043d\u043a"'},{id:"914",name:'\u0414\u0411 \u0410\u041e "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a"'},{id:"435",name:'\u0410\u041e "\u0428\u0438\u043d\u0445\u0430\u043d \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"781",name:'\u0410\u041e "Capital Bank Kazakhstan"'},{id:"620",name:'\u0410\u041e "Tengri Bank"'},{id:"998",name:'\u0410\u041e "First Heartland Jysan Bank"'},{id:"432",name:"\u0414\u041e \u0410\u041e \u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)"},{id:"896",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0431\u0430\u043d\u043a "\u0417\u0430\u043c\u0430\u043d-\u0411\u0430\u043d\u043a"'},""].filter((function(t){return t.id==r})).length>0},l=function(t){if(10!==String(t).replace(/_/g,"").length)return!1;var e=new Date(t.substring(6,10)+"-"+t.substring(3,5)+"-"+t.substring(0,2));if("Invalid Date"==e)return!1;var n=new Date,r=n.getMonth()+1,i=n.getDate(),o=n.getFullYear(),a=e.getMonth()+1,c=e.getDate(),u=e.getFullYear();return"Invalid Date"!=e&&(!(u>o)&&(!(u<o-50)&&(!(u>o)&&(!(u===o&&a>r)&&!(u===o&&a===r&&c>i)))))},f=function(t){if(10!==String(t).replace(/_/g,"").length)return!1;var e=new Date(t.substring(6,10)+"-"+t.substring(3,5)+"-"+t.substring(0,2));if("Invalid Date"==e)return!1;var n=new Date,r=n.getMonth()+1,i=n.getDate(),o=n.getFullYear(),a=e.getMonth()+1,c=e.getDate(),u=e.getFullYear();return!(u<o)&&(!(u===o&&a<r)&&!(u===o&&a===r&&c<i))},d=function(t){return/^[a-zA-Z\s]*$/.test(t)},p=function(t){return!(!t||2!==t.replace(/\s+$/,"").split(/\W+/).length)},m=function(t){return 9===String(t).replace(/_/g,"").length},h=function(t){var e=String(t).toUpperCase().replace(/[^0-9]/g,""),n=e.match(/^(\d{2})(\d{2})$/);return 4===e.length&&!(n[1]>12||n[2]<20)},b=function(t){if(/[^0-9-\s]+/.test(t))return!1;var e=0,n=!1;if(16!==(t=t.replace(/\D/g,"")).length)return!1;for(var r=t.length-1;r>=0;r--){var i=t.charAt(r),o=parseInt(i,10);n&&(o*=2)>9&&(o-=9),e+=o,n=!n}return e%10===0}},pzdJ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/complaint",function(){return n("lLxE")}])},qT12:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,j=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function x(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case f:case d:case a:case u:case c:case m:return t;default:switch(t=t&&t.$$typeof){case l:case p:case y:case b:case s:return t;default:return e}}case o:return e}}}function w(t){return x(t)===d}e.AsyncMode=f,e.ConcurrentMode=d,e.ContextConsumer=l,e.ContextProvider=s,e.Element=i,e.ForwardRef=p,e.Fragment=a,e.Lazy=y,e.Memo=b,e.Portal=o,e.Profiler=u,e.StrictMode=c,e.Suspense=m,e.isAsyncMode=function(t){return w(t)||x(t)===f},e.isConcurrentMode=w,e.isContextConsumer=function(t){return x(t)===l},e.isContextProvider=function(t){return x(t)===s},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return x(t)===p},e.isFragment=function(t){return x(t)===a},e.isLazy=function(t){return x(t)===y},e.isMemo=function(t){return x(t)===b},e.isPortal=function(t){return x(t)===o},e.isProfiler=function(t){return x(t)===u},e.isStrictMode=function(t){return x(t)===c},e.isSuspense=function(t){return x(t)===m},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===d||t===u||t===c||t===m||t===h||"object"===typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===b||t.$$typeof===s||t.$$typeof===l||t.$$typeof===p||t.$$typeof===v||t.$$typeof===j||t.$$typeof===O||t.$$typeof===g)},e.typeOf=x},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},xEkU:function(t,e,n){(function(e){for(var r=n("bQgK"),i="undefined"===typeof window?e:window,o=["moz","webkit"],a="AnimationFrame",c=i["request"+a],u=i["cancel"+a]||i["cancelRequest"+a],s=0;!c&&s<o.length;s++)c=i[o[s]+"Request"+a],u=i[o[s]+"Cancel"+a]||i[o[s]+"CancelRequest"+a];if(!c||!u){var l=0,f=0,d=[];c=function(t){if(0===d.length){var e=r(),n=Math.max(0,16.666666666666668-(e-l));l=n+e,setTimeout((function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(l)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return d.push({handle:++f,callback:t,cancelled:!1}),f},u=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}t.exports=function(t){return c.call(i,t)},t.exports.cancel=function(){u.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=c,t.cancelAnimationFrame=u}}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["pzdJ",0,1,2,4,7,10,11]]]);