_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{Eo8B:function(e,t,n){"use strict";n.r(t);var s=n("o0o1"),a=n.n(s),c=n("HaE+"),o=n("1OyB"),i=n("vuIU"),r=n("Ji7U"),u=n("md7G"),l=n("foSv"),h=n("nKUr"),d=n("q1tI"),p=n.n(d),f=n("nOHt"),j=n.n(f),m=n("vDqi"),g=n.n(m),b=n("GUC0"),k=n.n(b),v=n("8Kt/"),x=n.n(v),O=n("tNPP"),y=n("uuUm"),_=n("Otl1"),w=n("uJQ+");function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return Object(u.a)(this,n)}}function S(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var C=function(e){Object(r.a)(s,e);var t=N(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null},n}return Object(i.a)(s,[{key:"getUserDocument",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,g.a.get("https://api.money-men.kz/api/newGetData?token=".concat(t)).then((function(e){console.log(e),e.data.success?n.setState({docs:e.data.docs,id:e.data.id,id_req:e.data.id_req,loading:!1,rest:e.data.rest,phone:e.data.phone}):j.a.push("/")})).catch((function(e){n.setState({loading:!1}),j.a.push("/")}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCode",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&t.setState({isCodeSent:!0})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.state.code_conf){e.next=3;break}return e.next=3,g.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&k()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(e.message),"success").then((function(){j.a.push("/")}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var e=this;this.setState({loading:!0}),g.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(t){e.setState({loading:!1}),t.data.success&&k()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){j.a.push("/")}))})).catch((function(t){e.setState({loading:!1}),console.log(t),j.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0});try{g.a.get("https://api.money-men.kz/api/agreementNew ",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(e){t.setState({loading:!1}),e.data.success&&k()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){j.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),j.a.push("/")}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===S("token").length?j.a.push("/"):this.setState({token:S("token")}),this.getUserDocument(0!==S("token").length?S("token"):null)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container otherPages",children:[Object(h.jsx)(x.a,{children:Object(h.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(h.jsx)("div",{className:"modelLoader"}):Object(h.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"agreements-block",children:[Object(h.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(h.jsxs)("ul",{className:"complete",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(h.jsx)(O.a,{})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(h.jsx)(y.a,{})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(h.jsx)(_.a,{})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(h.jsx)(w.a,{})]})]})]})})})]})}}]),s}(p.a.Component);t.default=C},NYbR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newAggrements",function(){return n("Eo8B")}])},jI6F:function(e,t){e.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"}},[["NYbR",0,1,11,13,15,2,3,4,6,16]]]);