_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"37w6":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),c=n("1OyB"),i=n("vuIU"),s=n("Ji7U"),u=n("md7G"),f=n("foSv"),l=n("nKUr"),p=n("q1tI"),d=n.n(p),h=n("/MKj"),g=n("toLX"),m=(n("43wv"),n("hNt4")),y=(n("GObB"),n("nOHt")),b=n.n(y),v=n("GUC0"),O=n.n(v),j=n("vDqi"),w=n.n(j);function E(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var k=function(t){Object(s.a)(n,t);var e=E(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={btnLoading:!1},r}return Object(i.a)(n,[{key:"handleRepeated",value:function(){var t=Object(a.a)(o.a.mark((function t(){var e=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({btnLoading:!0}),t.next=3,w.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then((function(t){1==t.data.success?(b.a.push("/cabinet/repeated"),e.setState({btnLoading:!1})):(console.log(t),O()("Oops!","".concat(t.data.message),"error"),e.setState({btnLoading:!1}))}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{className:"otherPages",children:[this.state.btnLoading?Object(l.jsx)("div",{className:"modelLoader"}):Object(l.jsx)("div",{className:"modelLoader loaded"}),!0===this.props.userReducer.authenticatingUser?Object(l.jsx)("div",{className:"modelLoader"}):Object(l.jsx)("div",{className:"modelLoader loaded"}),Object(l.jsxs)("h3",{className:"text-center",children:[Object(m.a)(),"   ",this.props.userReducer.user.UF_5," ",this.props.userReducer.user.UF_6," !"]}),Object(l.jsxs)("div",{className:"zayavkaBlock container col-md-8 col-8 mt-5",children:[Object(l.jsx)("h5",{children:"\u041c\u043e\u0438 \u0437\u0430\u044f\u0432\u043a\u0438"}),Object(l.jsx)("h5",{className:"text-center",children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u0435\u0449\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}),Object(l.jsx)("div",{className:"repeatBtn form-group",children:Object(l.jsx)("button",{className:"mt-3",onClick:function(){return t.handleRepeated()},children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0437\u0430\u0439\u043c"})})]})]})}}]),n}(d.a.Component);e.default=Object(g.a)(Object(h.connect)((function(t){return{userReducer:t.userReducer}}))(k))},"43wv":function(t,e,n){"use strict";var r=n("rePB");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={user:null,loggedIn:!1,authenticatingUser:!1,failedLogin:!1,error:null};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CURRENT_USER":return a(a({},t),{},{user:e.payload,error:null,loggedIn:!0,authenticatingUser:!1});case"AUTHENTICATING_USER":return a(a({},t),{},{authenticatingUser:!0});case"AUTHENTICATED_USER":return a(a({},t),{},{authenticatingUser:!1});case"FAILED_LOGIN":return a(a({},t),{},{failedLogin:!0,error:e.payload,authenticatingUser:!1});case"LOGOUT_USER":return a(a({},t),{},{user:null,loggedIn:!1,authenticatingUser:!1,failedLogin:!1,error:null});default:return t}}},"9O6D":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet",function(){return n("37w6")}])},GObB:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var c=a(n("q1tI"));n("tsRy");e.default=function(t){var e=t.visible,n=void 0===e||e,a=t.color,i=void 0===a?"#333333":a,s=t.stroke,u=void 0===s?5:s,f=t.radius,l=void 0===f?40:f,p=o(t,["visible","color","stroke","radius"]);return n?c.createElement("div",r({},p,{className:"react-spinner-material",style:{width:l,height:l,borderColor:i,borderWidth:u}})):null}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,a,c){try{var i=t[a](c),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var c=t.apply(e,n);function i(t){r(c,o,a,i,s,"next",t)}function s(t){r(c,o,a,i,s,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},hNt4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){var t,e=(new Date).getHours();return e<12?t="\u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e":e>=12&&e<=17?t="\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c":e>=17&&e<=24&&(t="\u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440"),t}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},toLX:function(t,e,n){"use strict";var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),c=n("md7G"),i=n("foSv"),s=n("nKUr"),u=n("q1tI"),f=n.n(u),l=n("/MKj"),p=n("nOHt"),d=n.n(p),h=n("w18f"),g=n("p46w"),m=n.n(g);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}e.a=function(t){var e=function(e){Object(a.a)(c,e);var n=y(c);function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){m.a.get("token")&&!this.props.loggedIn&&this.props.fetchCurrentUser(),m.a.get("token")||d.a.push("/login")}},{key:"render",value:function(){return m.a.get("token")&&this.props.loggedIn?Object(s.jsx)(t,{}):!m.a.get("token")||!this.props.authenticatingUser&&this.props.loggedIn?Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)("div",{className:"modelLoader"}),Object(s.jsx)("h2",{className:"text-center pt-5",children:"\u0412\u0440\u0435\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e"})]}):Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)("div",{className:"pd-5 pt-5"}),Object(s.jsx)("div",{className:"modelLoader"})]})}}]),c}(f.a.Component);return Object(l.connect)((function(t){return{loggedIn:t.userReducer.loggedIn,authenticatingUser:t.userReducer.authenticatingUser}}),h)(e)}},tsRy:function(t,e,n){"use strict";var r="\n.react-spinner-material {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid #333;\n  box-sizing: border-box;\n  -webkit-animation: rsm-sweep 1s linear alternate infinite, rsm-rotate 0.8s linear infinite;\n          animation: rsm-sweep 1s linear alternate infinite, rsm-rotate 0.8s linear infinite;\n}\n\n@keyframes rsm-rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rsm-rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes rsm-sweep {\n  0% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n  }\n  100% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n  }\n}\n\n@-webkit-keyframes rsm-sweep {\n  0% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n  }\n  100% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n  }\n}\n",o="spinner_id_style";!function(){if("undefined"!==typeof window&&!document.getElementById(o)){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.id=o,e.type="text/css",e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r)),t&&t.appendChild(e)}}()},w18f:function(t,e,n){"use strict";n.r(e),n.d(e,"authenticatingUser",(function(){return i})),n.d(e,"setCurrentUser",(function(){return s})),n.d(e,"dateLoading",(function(){return u})),n.d(e,"dateFailed",(function(){return f})),n.d(e,"statusSuccess",(function(){return l})),n.d(e,"historySuccess",(function(){return p})),n.d(e,"logoutUser",(function(){return d})),n.d(e,"loginUser",(function(){return h})),n.d(e,"fetchCurrentUser",(function(){return g})),n.d(e,"fetchUserStatus",(function(){return m})),n.d(e,"fetchUserHistory",(function(){return y})),n.d(e,"fetchAdmin",(function(){return b}));var r=n("p46w"),o=n.n(r),a=n("nOHt"),c=n.n(a),i=function(){return{type:"AUTHENTICATING_USER"}},s=function(t){return{type:"SET_CURRENT_USER",payload:t}},u=function(){return{type:"DATE_LOADING"}},f=function(t){return{type:"DATE_FAILED",payload:t}},l=function(t){return{type:"STATUS_SUCCESS",payload:t}},p=function(t){return{type:"HISTORY_SUCCESS",payload:t}},d=function(){return{type:"LOGOUT_USER"}},h=function(t){return function(e){e({type:"AUTHENTICATING_USER"}),fetch("https://api.money-men.kz/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(t){if(t.ok)return t;var e=new Error("Error ".concat(t.status,": ").concat(t.statusText));throw e.response=t,e}),(function(t){throw new Error(t.message)})).then((function(t){return t.json()})).then((function(t){o.a.set("token",t.access_token,{expires:2});var n=e(g());console.log(n),e({type:"SET_CURRENT_USER",payload:"user"}),c.a.push("/cabinet/loans")})).catch((function(t){t.message.includes("400")?e({type:"FAILED_LOGIN",payload:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}):e({type:"FAILED_LOGIN",payload:t.message})}))}},g=function(){return function(t){t(i()),fetch("https://api.money-men.kz/api/getUserProfileFromBitrix",{method:"GET",headers:{Authorization:"Bearer ".concat(o.a.get("token"))}}).then((function(t){if(t.ok)return t;var e=new Error("Error ".concat(t.status,": ").concat(t.statusText));throw e.response=t,e}),(function(t){throw new Error(t.message)})).then((function(t){return t.json()})).then((function(e){t(s(e))})).catch((function(t){o.a.remove("token"),console.log(t.message||"Error")}))}},m=function(){return function(t){t(u(!0)),fetch("https://api.money-men.kz/api/getUserInfo",{method:"GET",headers:{Authorization:"Bearer ".concat(o.a.get("token"))}}).then((function(t){if(t.ok)return t;var e=new Error("Error ".concat(t.status,": ").concat(t.statusText));throw e.response=t,e}),(function(t){throw new Error(t.message)})).then((function(t){return t.json()})).then((function(e){t(l(e))})).catch((function(e){o.a.remove("token"),t(f(e.message||"\u0414\u0430\u043d\u043d\u044b\u0435 \u0432\u0435\u0440\u043d\u044b. ")),console.log(e.message||"Error")}))}},y=function(){return function(t){t(u(!0)),fetch("https://api.money-men.kz/api/history",{method:"GET",headers:{Authorization:"Bearer ".concat(o.a.get("token"))}}).then((function(t){if(t.ok)return t;var e=new Error("Error ".concat(t.status,": ").concat(t.statusText));throw e.response=t,e}),(function(t){throw new Error(t.message)})).then((function(t){return t.json()})).then((function(e){t(p(e))})).catch((function(e){o.a.remove("token"),t(f(e.message)),console.log(e.message||"Error")}))}},b=function(){return function(t){t(i()),fetch("http://localhost:8000/api/getProfile?token=".concat(o.a.get("admin_token")),{method:"GET"}).then((function(t){if(t.ok)return t;var e=new Error("Error ".concat(t.status,": ").concat(t.statusText));throw e.response=t,e}),(function(t){throw new Error(t.message)})).then((function(t){return t.json()})).then((function(e){t(s(e))})).catch((function(t){o.a.remove("admin_token"),console.log(t.message||"Error")}))}}}},[["9O6D",0,1,2,3,4,5,6]]]);