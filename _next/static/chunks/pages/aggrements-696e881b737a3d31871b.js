_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{M7WW:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aggrements",function(){return a("zJ0N")}])},zJ0N:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),r=a.n(n),i=a("HaE+"),s=a("1OyB"),c=a("vuIU"),o=a("Ji7U"),d=a("md7G"),l=a("foSv"),u=a("nKUr"),p=a("q1tI"),h=a.n(p),m=a("nOHt"),f=a.n(m),j=a("vDqi"),b=a.n(j),g=a("GUC0"),v=a.n(g),O=a("8Kt/"),N=a.n(O),k=a("5JmO"),x=a.n(k),y=a("TruH"),w=a.n(y),C=a("tNPP"),_=a("uuUm"),D=a("Otl1"),S=a("izXH"),R=a("TJtg");function A(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(d.a)(this,a)}}function B(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}x.a.vfs=w.a.pdfMake.vfs,x.a.fonts={TimesNewRoman:{normal:"TimesNewRoman.ttf",bold:"TimesNewRomanBold.ttf",italics:"TimesNewRomanItalics.ttf",bolditalics:"TimesNewRomanBoldItalics.ttf"},emptyCheckbox:{normal:"emptyCheckbox.ttf"}};var I=function(t){Object(o.a)(n,t);var e=A(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={token:null,loading:!1,docs:[],id:null,id_req:null,sign:"",isCodeSent:!1,code_conf:null,errorInCode:null,phone:null,rest:null,fio:null,dateOfBirth:null,address:null,email:null,placeOfWork:null,position:null,iin:null,cardNumber:null,startCard:null,endCard:null,placeOfBirth:null,insuranceAmount:null,givenDate:null,code:null,period:null,contractNumber:null,reward:null,endDate:null,amount:null,penalty:null,cardGiven:null},a}return Object(c.a)(n,[{key:"getUserDocument",value:function(){var t=Object(i.a)(r.a.mark((function t(e){var a=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,b.a.get("https://api.i-credit.kz/api/getProlongationData?token=".concat(e)).then((function(t){t.data.success?a.setState({docs:t.data.data.docs,id:t.data.data.id,id_req:t.data.data.id_req,loading:!1,rest:t.data.data.rest,phone:t.data.data.phone?t.data.data.phone:"",address:t.data.data.address?t.data.data.address:"",amount:t.data.data.amount?t.data.data.amount:"",placeOfBirth:t.data.data.birthPlace?t.data.data.birthPlace:"",code:t.data.data.code?t.data.data.code:"",contractNumber:t.data.data.contractNumber?t.data.data.contractNumber:"",cardNumber:t.data.data.docNumber?t.data.data.docNumber:"",email:t.data.data.email?t.data.data.email:"",endCard:t.data.data.endGiven?t.data.data.endGiven:"",fio:t.data.data.fio?t.data.data.fio:"",iin:t.data.data.iin?t.data.data.iin:"",insuranceAmount:t.data.data.insurance?t.data.data.insurance:"",penalty:t.data.data.penalty?t.data.data.penalty:0,period:t.data.data.period?t.data.data.period:"",position:t.data.data.position?t.data.data.position:"",givenDate:t.data.data.prolongationDate?t.data.data.prolongationDate.slice(0,10).split("-").reverse().join("."):"",reward:t.data.data.reward?t.data.data.reward:"",startCard:t.data.data.startGiven?t.data.data.startGiven:"",placeOfWork:t.data.data.wordPlace?t.data.data.wordPlace:"",dateOfBirth:t.data.data.birthDay?t.data.data.birthDay:"",endDate:"",cardGiven:t.data.data.docIssue}):f.a.push("/")})).catch((function(t){a.setState({loading:!1}),f.a.push("/")}));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCode",value:function(){var t=Object(i.a)(r.a.mark((function t(){var e=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&e.setState({isCodeSent:!0})})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusForRest",value:function(){var t=Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===this.state.code_conf){t.next=3;break}return t.next=3,b.a.get("https://api.money-men.kz/api/sendSms",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,code:this.state.code_conf,sign:"y"}},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.success&&v()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","".concat(t.message),"success").then((function(){f.a.push("/")}))})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"sendAgreementStatusWithRest",value:function(){var t=this;this.setState({loading:!0}),b.a.get("https://api.i-credit.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then((function(e){t.setState({loading:!1}),e.data.success&&v()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","success").then((function(){f.a.push("/")}))})).catch((function(e){t.setState({loading:!1}),console.log(e),f.a.push("/")}))}},{key:"sendAgreementStatus",value:function(){var t=Object(i.a)(r.a.mark((function t(){var e=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loading:!0});try{b.a.get("https://api.i-credit.kz/api/agreement",{params:{id:this.state.id,phone:this.state.phone,token:this.state.token,id_req:this.state.id_req,sign:"y"}}).then((function(t){e.setState({loading:!1}),t.data.success&&v()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 15 \u043c\u0438\u043d\u0443\u0442").then((function(){f.a.push("/")}))}))}catch(a){this.setState({loading:!1}),console.log(a),f.a.push("/")}case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===B("token").length?f.a.push("/"):this.setState({token:B("token")}),this.getUserDocument(0!==B("token").length?B("token"):null)}},{key:"render",value:function(){var t=this,e=this.state,n=e.phone,r=e.address,i=e.amount,s=e.placeOfBirth,c=e.code,o=e.contractNumber,d=e.cardNumber,l=e.email,p=e.endCard,h=e.fio,m=e.iin,f=e.insuranceAmount,j=e.penalty,b=e.period,g=e.position,v=e.givenDate,O=e.reward,k=e.startCard,x=e.placeOfWork,y=e.dateOfBirth,w=e.endDate,A=e.cardGiven;return console.log(n,r,i,s,c,o,d,l,p,h,m,f,j,b,g,v,O,k,x,y,w,A),Object(u.jsxs)("div",{className:"container otherPages",children:[Object(u.jsx)(N.a,{children:Object(u.jsx)("title",{children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})}),this.state.loading?Object(u.jsx)("div",{className:"modelLoader"}):Object(u.jsx)("div",{className:"modelLoader loaded",children:" "}),Object(u.jsx)("div",{className:"row justify-content-center",children:Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsxs)("div",{className:"agreements-block",children:[Object(u.jsx)("h4",{align:"center",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(u.jsxs)("ul",{className:"complete",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(u.jsx)(C.a,{fio:h,dateOfBirth:y,address:r,phone:n,email:l,placeOfWork:x,position:g,iin:m,cardNumber:d,startCard:k,endCard:p,placeOfBirth:s,insuranceAmount:f,givenDate:v,code:c,period:b})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(u.jsx)(_.a,{fio:h,dateOfBirth:y,address:r,iin:m,cardNumber:d,contractNumber:o,insuranceAmount:f,code:c,period:b,reward:O})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(u.jsx)(D.a,{contractNumber:o,givenDate:v,endDate:w,fio:h,address:r,phone:n,iin:m,insuranceAmount:f,reward:O,cardNumber:d,cardGiven:A,startCard:k,email:l,period:b,amount:i})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(u.jsx)(S.a,{fio:h,iin:m,cardNumber:d,phone:n,period:b,moneyForRestructuring:2*+O,reward:O,penalty:j})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{className:"checkedComplete",src:a("jI6F")}),Object(u.jsx)(R.a,{contractNumber:o,iin:m,givenDate:v,fio:h,penalty:j,moneyForRestructuring:2*+O,period:b,cardNumber:d,startCard:k,endCard:p,cardGiven:A,address:r,phone:n,email:l,amoun:i,total:+i+ +O,reward:O,endDate:w})]})]}),Object(u.jsx)("div",{className:"repeatBtn form-group",children:!0===this.state.rest?Object(u.jsx)("button",{onClick:function(){return t.sendAgreementStatusWithRest()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"}):Object(u.jsx)("button",{onClick:function(){return t.sendAgreementStatus()},className:"mt-5",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u044e\u0441\u044c"})})]})})})]})}}]),n}(h.a.Component);e.default=I}},[["M7WW",0,1,10,11,2,3,4,5,13,14,23]]]);