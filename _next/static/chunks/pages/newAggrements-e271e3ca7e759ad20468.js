_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{Eo8B:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),s=n.n(a),c=n("HaE+"),o=n("1OyB"),i=n("vuIU"),r=n("Ji7U"),u=n("md7G"),l=n("foSv"),h=n("nKUr"),d=n("q1tI"),p=n.n(d),f=n("nOHt"),m=n.n(f),g=n("vDqi"),j=n.n(g),v=n("GUC0"),k=n.n(v),b=n("8Kt/"),y=n.n(b),w=n("5JmO"),O=n.n(w),x=n("TruH"),N=n.n(x);n("tNPP"),n("uuUm"),n("Otl1"),n("uJQ+");function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(l.a)(t);if(e){var s=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}function S(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}O.a.vfs=N.a.pdfMake.vfs,O.a.fonts={TimesNewRoman:{normal:"TimesNewRoman.ttf",bold:"TimesNewRomanBold.ttf",italics:"TimesNewRomanItalics.ttf",bolditalics:"TimesNewRomanBoldItalics.ttf"},emptyCheckbox:{normal:"emptyCheckbox.ttf"}};var R=function(t){Object(r.a)(n,t);var e=_(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null},a}return Object(i.a)(n,[{key:"getUserDocument",value:function(){var t=Object(c.a)(s.a.mark((function t(e){var n=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,j.a.get("https://api.money-men.kz/api/newGetData?token=".concat(e)).then((function(t){console.log(t),t.data.success?n.setState({docs:t.data.docs,id:t.data.id,id_req:t.data.id_req,loading:!1,rest:t.data.rest,phone:t.data.phone}):m.a.push("/")})).catch((function(t){n.setState({loading:!1}),m.a.push("/")}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCode",value:function(){var t=Object(c.a)(s.a.mark((function t(){var e=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&e.setState({isCodeSent:!0})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===this.state.code_conf){t.next=3;break}return t.next=3,j.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&k()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(t.message),"success").then((function(){m.a.push("/")}))})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var t=this;this.setState({loading:!0}),j.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(e){t.setState({loading:!1}),e.data.success&&k()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){m.a.push("/")}))})).catch((function(e){t.setState({loading:!1}),console.log(e),m.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var t=Object(c.a)(s.a.mark((function t(){var e=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loading:!0});try{j.a.get("https://api.money-men.kz/api/agreementNew ",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(t){e.setState({loading:!1}),t.data.success&&k()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){m.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),m.a.push("/")}case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===S("token").length?m.a.push("/"):this.setState({token:S("token")}),this.getUserDocument(0!==S("token").length?S("token"):null)}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"container otherPages",children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(h.jsx)("div",{className:"modelLoader"}):Object(h.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"agreements-block",children:[Object(h.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(h.jsx)("ul",{className:"complete"}),Object(h.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(h.jsx)("button",{onClick:function(){return t.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(h.jsx)("button",{onClick:function(){return t.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),n}(p.a.Component);e.default=R},NYbR:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newAggrements",function(){return n("Eo8B")}])}},[["NYbR",0,1,11,13,15,2,3,4,6,16]]]);