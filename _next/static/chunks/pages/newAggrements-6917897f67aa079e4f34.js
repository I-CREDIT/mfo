_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{Eo8B:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),c=n.n(a),r=n("HaE+"),i=n("1OyB"),s=n("vuIU"),o=n("Ji7U"),d=n("md7G"),l=n("foSv"),u=n("nKUr"),h=n("q1tI"),p=n.n(h),m=n("nOHt"),f=n.n(m),j=n("vDqi"),b=n.n(j),g=n("GUC0"),O=n.n(g),v=n("8Kt/"),k=n.n(v),x=n("tNPP"),N=n("uuUm"),w=n("Otl1"),y=n("uJQ+");function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}function D(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var S=function(e){Object(o.a)(a,e);var t=C(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={token:null,leadID:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null,fio:null,dateOfBirth:null,address:null,email:null,placeOfWork:null,position:null,iin:null,cardNumber:null,startCard:null,endCard:null,placeOfBirth:null,insuranceAmount:null,givenDate:null,code:null,period:null,contractNumber:null,reward:null,main:null,total:null,cardGiven:null,iban:null,phone2:null,endDate:null},n}return Object(s.a)(a,[{key:"getUserDocument",value:function(){var e=Object(r.a)(c.a.mark((function e(t){var n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,b.a.get("https://api.money-men.kz/api/newGetData?token=".concat(t)).then((function(e){e.data.success?n.setState({loading:!1,leadID:e.data.leadID,phone2:e.data.phone,fio:e.data.fio,dateOfBirth:e.data.birthday,address:e.data.address,email:e.data.email,placeOfWork:e.data.work,position:e.data.position,iin:e.data.iin,cardNumber:e.data.cardNumber,startCard:e.data.cardDate,endCard:e.data.cardExpiration,placeOfBirth:e.data.placeOfBirth,insuranceAmount:e.data.insuranceAmount,givenDate:e.data.givenDate,code:e.data.code,period:e.data.period,contractNumber:e.data.contractNumber,reward:e.data.reward,main:e.data.main,total:e.data.main+e.data.reward,cardGiven:e.data.cardGiven,iban:e.data.iban,endDate:e.data.datePayment}):f.a.push("/")})).catch((function(e){n.setState({loading:!1}),f.a.push("/")}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCode",value:function(){var e=Object(r.a)(c.a.mark((function e(){var t=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&t.setState({isCodeSent:!0})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.state.code_conf){e.next=3;break}return e.next=3,b.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.success&&O()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(e.message),"success").then((function(){f.a.push("/")}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var e=this;this.setState({loading:!0}),b.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(t){e.setState({loading:!1}),t.data.success&&O()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){f.a.push("/")}))})).catch((function(t){e.setState({loading:!1}),console.log(t),f.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var e=Object(r.a)(c.a.mark((function e(){var t=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0});try{b.a.get("https://api.money-men.kz/api/agreementNew",{params:{token:this.state.token,leadId:this.state.leadID,sign:"y"}}).then((function(e){console.log(e),t.setState({loading:!1}),e.data.success&&O()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){f.a.push("/")}))}))}catch(n){this.setState({loading:!1}),console.log(n),f.a.push("/")}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===D("token").length?f.a.push("/"):this.setState({token:D("token")}),this.getUserDocument(0!==D("token").length?D("token"):null)}},{key:"render",value:function(){var e=this,t=this.state,a=t.fio,c=t.dateOfBirth,r=t.address,i=t.email,s=t.placeOfWork,o=t.position,d=t.iin,l=t.cardNumber,h=t.startCard,p=t.endCard,m=t.placeOfBirth,f=t.insuranceAmount,j=t.givenDate,b=t.code,g=t.period,O=t.contractNumber,v=t.reward,C=t.main,D=t.total,S=t.cardGiven,_=t.iban,A=t.phone2,B=t.endDate;return Object(u.jsxs)("div",{className:"container otherPages",children:[Object(u.jsx)(k.a,{children:Object(u.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(u.jsx)("div",{className:"modelLoader"}):Object(u.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(u.jsx)("div",{className:"row justify-content-center",children:Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsxs)("div",{className:"agreements-block",children:[Object(u.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(u.jsxs)("ul",{className:"complete",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(u.jsx)(x.a,{fio:a,dateOfBirth:c,address:r,phone:A,email:i,placeOfWork:s,position:o,iin:d,cardNumber:l,startCard:h,endCard:p,placeOfBirth:m,insuranceAmount:f,givenDate:j,code:b,period:g})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(u.jsx)(N.a,{fio:a,dateOfBirth:c,address:r,iin:d,cardNumber:l,contractNumber:O,insuranceAmount:f,code:b,period:g,reward:v})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(u.jsx)(w.a,{contractNumber:O,givenDate:j,endDate:B,fio:a,address:r,phone:A,iin:d,insuranceAmount:f,reward:v,cardNumber:l,cardGiven:S,startCard:h,email:i,period:g})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:n("jI6F")}),Object(u.jsx)(y.a,{main:C,reward:v,fio:a,iin:d,address:r,cardNumber:l,cardGiven:S,startCard:h,endCard:p,dateOfBirth:c,phone:A,iban:_,email:i,contractNumber:O,givenDate:j,endDate:B,total:D,period:g})]})]}),Object(u.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(u.jsx)("button",{onClick:function(){return e.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(u.jsx)("button",{onClick:function(){return e.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),a}(p.a.Component);t.default=S},NYbR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newAggrements",function(){return n("Eo8B")}])},jI6F:function(e,t){e.exports="/_next/static/images/checked-542f69ac8fd42a1c46953a5547bba55d.png"}},[["NYbR",0,1,11,13,15,2,3,4,6,16]]]);