_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"1OyB":function(e,t,n){"use strict";function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return c}))},"6JcU":function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),a=n("vDqi"),s=n.n(a),r=n("q1tI"),o=n("/MKj"),i=n("nOHt"),l=n.n(i),u=n("rePB"),d=n("Ff2n"),j=n("thol"),m=n("T2y0"),b=n("p46w"),p=n.n(b),_=n("82Mt"),h=n.n(_),f=n("KYPV");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t=e.field,n=(e.form,Object(d.a)(e,["field","form"]));return Object(c.jsx)(h.a,U(U({mask:"+7(999)-999-9999",maskPlaceholder:null,className:"my-input"},t),n))},x=function(e){var t=e.next,a=e.setNext,o=Object(r.useState)(!1),i=(o[0],o[1]),l=Object(r.useState)({}),u=l[0],d=l[1],b=Object(r.useState)(!!p.a.get("continueChecked")&&p.a.get("continueChecked")),_=b[0],h=b[1],O=Object(r.useState)(p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_17:""),U=O[0],x=O[1],g=n("SKMy");Object(r.useEffect)((function(){if(p.a.get("continue2")){var e=JSON.parse(p.a.get("continue2")).UF_17;s.a.get("https://api.money-men.kz/api/city/".concat(e)).then((function(e){console.log(e),d(e.data)}))}}),[]);return Object(c.jsx)("div",{children:Object(c.jsx)(f.c,{initialValues:{UF_17:p.a.get("continue2")?parseInt(JSON.parse(p.a.get("continue2")).UF_17):"",UF_18:p.a.get("continue2")?parseInt(JSON.parse(p.a.get("continue2")).UF_18):"",UF_19:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_19:"",UF_20:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_20:"",UF_21:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_21:"",UF_22:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_22:"",UF_23:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_23:"",UF_24:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_24:"",UF_25:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_25:"",UF_26:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_26:"",UF_27:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_27:"",UF_28:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_28:"",UF_29:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_29:"",UF_30:p.a.get("continue2")?JSON.parse(p.a.get("continue2")).UF_30:""},onSubmit:function(e){!function(e){window.scrollTo(0,0),e.UF_17=U,_&&(e.UF_21="");var n={regionOfCity_id:e.UF_18,street:e.UF_19,home:e.UF_20,apartment:e.UF_21||1,marital_status:e.UF_22,child_amount:e.UF_23,education:e.UF_24,relative_name:e.UF_25,relative_type_id:e.UF_26,additional_contact_name:e.UF_28,relative_phone_number:e.UF_27,additional_contact_type_id:e.UF_29,additional_contact_phone:e.UF_30,additional_contact_last_name:"-",relative_last_name:"-"};console.log(n),i(!0),s.a.post("https://api.money-men.kz/api/registration_step_two",n,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(p.a.get("token"))},credentials:"same-origin"}).then((function(e){i(!1),console.log(e,hello),!0===e.data.success?swal("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430","success").then((function(){Router.push("/cabinet/loans")})):swal("Oops!","".concat(e.errors||"\u0423 \u0432\u0430\u0441 \u0430\u043d\u043a\u0435\u0442\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043d\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430 WhatsApp \u0438\u043b\u0438 \u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043d\u0430 \u043d\u043e\u043c\u0435\u0440 +7 727 250 15 00"),"error").then((function(){}))})).catch((function(e){e.response&&console.log(e.response),i(!1)})),console.log(e),a(t+1),console.log("csa"),p.a.set("continueChecked",_),p.a.set("continue2",e),setTimeout((function(){g(".inputs_continue",{offset:0,align:"middle",ease:"outExpo",duration:600})}),100)}(e)},children:function(e){var t=e.errors,n=e.touched;e.isValidating,e.isSubmitting;return Object(c.jsxs)(f.b,{className:"container mt-5",children:[Object(c.jsxs)("div",{className:"row form-group",children:[Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u0421\u0435\u043c\u0435\u0439\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 *"}),Object(c.jsxs)(f.a,{as:"select",name:"UF_22",validate:m.k,className:"form-control",children:[Object(c.jsx)("option",{value:""}),Object(c.jsx)("option",{value:"\u0416\u0435\u043d\u0430\u0442/\u0417\u0430\u043c\u0443\u0436\u0435\u043c",children:"\u0416\u0435\u043d\u0430\u0442/\u0417\u0430\u043c\u0443\u0436\u0435\u043c"}),Object(c.jsx)("option",{value:"\u0425\u043e\u043b\u043e\u0441\u0442/\u041d\u0435 \u0437\u0430\u043c\u0443\u0436\u0435\u043c",children:"\u0425\u043e\u043b\u043e\u0441\u0442/\u041d\u0435 \u0437\u0430\u043c\u0443\u0436\u0435\u043c"})]}),t.UF_22&&n.UF_22&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_22})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u0435\u0442\u0435\u0439 *"}),Object(c.jsxs)(f.a,{as:"select",validate:m.k,name:"UF_23",className:"form-control",children:[Object(c.jsx)("option",{value:""}),Object(c.jsx)("option",{value:"0",children:"0"}),Object(c.jsx)("option",{value:"1",children:"1"}),Object(c.jsx)("option",{value:"2",children:"2"}),Object(c.jsx)("option",{value:"3",children:"3"}),Object(c.jsx)("option",{value:"4",children:"4"}),Object(c.jsx)("option",{value:"5+",children:"5+"})]}),t.UF_23&&n.UF_23&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_23})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 *"}),Object(c.jsxs)(f.a,{as:"select",validate:m.k,name:"UF_24",className:"form-control",children:[Object(c.jsx)("option",{value:""}),Object(c.jsx)("option",{value:"\u0411\u0435\u0437 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f",children:"\u0411\u0435\u0437 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(c.jsx)("option",{value:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435",children:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435"}),Object(c.jsx)("option",{value:"\u0412\u044b\u0441\u0448\u0435\u0435",children:"\u0412\u044b\u0441\u0448\u0435\u0435"})]}),t.UF_24&&n.UF_24&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_24})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u0413\u043e\u0440\u043e\u0434/\u041e\u0431\u043b\u0430\u0441\u0442\u044c *"}),Object(c.jsxs)(f.a,{onChange:function(e){return function(e){x(e.target.value),s.a.get("https://api.money-men.kz/api/city/".concat(e.target.value)).then((function(e){console.log(e),d(e.data)}))}(e)},value:U,as:"select",name:"UF_17",className:"form-control",children:[Object(c.jsx)("option",{value:"",disabled:!0}),j.b.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),t.UF_17&&n.UF_17&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_17})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0420\u0435\u0433\u0438\u043e\u043d\u044b/\u0420\u0430\u0439\u043e\u043d\u044b *"}),Object(c.jsx)("div",{className:"input-group",children:Object(c.jsxs)(f.a,{as:"select",validate:m.k,name:"UF_18",className:"form-control",children:[Object(c.jsx)("option",{value:""}),u.length>0&&u.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),Object(c.jsx)("div",{className:"hint",children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0413\u043e\u0440\u043e\u0434/\u041e\u0431\u043b\u0430\u0441\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"}),t.UF_18&&n.UF_18&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_18})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0423\u043b\u0438\u0446\u0430 *"}),Object(c.jsx)(f.a,{name:"UF_19",validate:m.j,autocomplete:"off",className:"form-control"}),t.UF_19&&n.UF_19&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_19})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0414\u043e\u043c *"}),Object(c.jsx)(f.a,{name:"UF_20",validate:m.k,autocomplete:"off",className:"form-control"}),t.UF_20&&n.UF_20&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_20})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b *"}),Object(c.jsx)(f.a,{name:"UF_21",validate:_?"":m.k,type:"number",className:"form-control",disabled:_}),t.UF_21&&n.UF_21&&Object(c.jsx)("p",{className:_?"d-none":"text-danger",children:t.UF_21})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(){return h(!_)},defaultChecked:_}),Object(c.jsx)("label",{className:"form-check-label ml-3",for:"exampleCheck1",children:"\u0427\u0430\u0441\u0442\u043d\u044b\u0439 \u0434\u043e\u043c"})]})]}),Object(c.jsx)("h2",{className:"mt-5 mb-5",children:"\u0420\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a"}),Object(c.jsxs)("div",{className:"row form-group",children:[Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0418\u043c\u044f \u0438 \u0424\u0430\u043c\u0438\u043b\u0438\u044f*"}),Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)(f.a,{name:"UF_25",validate:(m.k,m.c),autocomplete:"off",className:"form-control"}),Object(c.jsx)("div",{className:"hint",children:"\u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0440\u0438\u043b\u0438\u0446\u0435"})]}),t.UF_25&&n.UF_25&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_25})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 *"}),Object(c.jsx)(f.a,{name:"UF_27",className:"form-control",type:"tel",validate:m.i,component:F}),t.UF_27&&n.UF_27&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_27})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0412\u0438\u0434 \u0440\u043e\u0434\u0441\u0442\u0432\u0430 *"}),Object(c.jsx)("div",{className:"input-group",children:Object(c.jsxs)(f.a,{as:"select",name:"UF_26",validate:m.k,className:"form-control",children:[Object(c.jsx)("option",{value:"",disabled:!0}),j.c.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),t.UF_26&&n.UF_26&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_26})]})]}),Object(c.jsx)("h2",{className:"mt-5 mb-5",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(c.jsxs)("div",{className:"row form-group",children:[Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0418\u043c\u044f \u0438 \u0424\u0430\u043c\u0438\u043b\u0438\u044f*"}),Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)(f.a,{name:"UF_28",validate:(m.k,m.c),autocomplete:"off",className:"form-control"}),Object(c.jsx)("div",{className:"hint",children:"\u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0440\u0438\u043b\u0438\u0446\u0435"})]}),t.UF_28&&n.UF_28&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_28})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 *"}),Object(c.jsx)(f.a,{name:"UF_30",className:"form-control",type:"tel",validate:m.i,component:F}),t.UF_30&&n.UF_30&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_30})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0412\u0438\u0434 \u0440\u043e\u0434\u0441\u0442\u0432\u0430 *"}),Object(c.jsx)("div",{className:"input-group",children:Object(c.jsxs)(f.a,{as:"select",validate:m.k,name:"UF_29",className:"form-control",children:[Object(c.jsx)("option",{value:"",disabled:!0}),j.a.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),t.UF_29&&n.UF_29&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_29})]})]}),Object(c.jsx)("div",{className:"button form-group mb-5",children:Object(c.jsx)("button",{type:"submit ",className:"agreement-btn",children:"\u0414\u0430\u043b\u044c\u0448\u0435"})})]})}})})},g=n("ppuw"),v=n("GUC0"),N=n.n(v);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.field,n=(e.form,Object(d.a)(e,["field","form"]));return Object(c.jsx)(h.a,k(k({mask:"999999999",maskPlaceholder:" ",className:"my-input",type:"tel"},t),n))},S=function(e){var t=e.field,n=(e.form,Object(d.a)(e,["field","form"]));return Object(c.jsx)(h.a,k(k({mask:"99.99.9999",maskPlaceholder:null,type:"tel",className:"my-input"},t),n))},E=function(e){var t=e.field,n=(e.form,Object(d.a)(e,["field","form"]));return Object(c.jsx)(h.a,k(k({mask:"KZ******************",placeholder:"KZ",onChange:function(e){return setIbanValue(e)},className:"my-input"},t),n))},P=function(e){e.step,e.setStep,e.stepResult;var t=e.userDate,n=e.srok,a=e.summa,o=Object(r.useState)(!1),i=o[0],u=o[1],d=Object(r.useState)(!1),b=d[0],_=(d[1],Object(r.useState)({value:"",text:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430"})),h=_[0],O=_[1],U=1e6,F=function(e){U=e.target.value};return Object(c.jsx)("div",{children:Object(c.jsx)(f.c,{initialValues:{UF_31:"",UF_33:"",UF_32:"",UF_34:"",UF_35:"",UF_36:"0000000000000000",UF_37:"00/00",UF_38:"-",UF_39:"",UF_40:"",UF_41:"",UF_42:"",UF_43:"",UF_44:"",UF_45:"",UF_46:"",UF_47:""},onSubmit:function(e){!function(e){if(!1!==Object(g.j)(h.value)){console.log(t);var c={};e.UF_35=h.value,e.UF_47=h.text,e.UF_2=a,e.UF_3=n,p.a.get("continue2")&&(c=JSON.parse(p.a.get("continue2"))),t.UF_1,"".concat(e.UF_2),"".concat(e.UF_3),t.UF_4,t.UF_5,t.UF_6,t.UF_7,t.UF_8,t.UF_9,t.UF_10,t.UF_11,t.UF_12,t.UF_13,c.UF_17?c.UF_17:t.UF_17,c.UF_18?c.UF_18:t.UF_18,c.UF_19?c.UF_19:t.UF_19,c.UF_20?c.UF_20:t.UF_20,c.UF_21?c.UF_21:t.UF_21,c.UF_22?c.UF_22:t.UF_22,c.UF_23?c.UF_23:t.UF_23,c.UF_24?c.UF_24:t.UF_24,c.UF_25?c.UF_25:t.UF_25,c.UF_26?c.UF_26:t.UF_26,c.UF_28?c.UF_28:t.UF_28,c.UF_27?c.UF_27:t.UF_27,c.UF_29?c.UF_29:t.UF_29,c.UF_30?c.UF_30:t.UF_30,e.UF_31,e.UF_32,e.UF_33,e.UF_34,e.UF_35,e.UF_36,e.UF_37,e.UF_38,e.UF_39,e.UF_40,e.UF_41,e.UF_42,e.UF_43,e.UF_44,e.UF_45,e.UF_46,e.UF_47;var r={name_of_workplace:e.UF_31,work_experience:e.UF_32,type_id:e.UF_33,income:e.UF_34,iban_account:e.UF_35,card_number:e.UF_36,expiration_date_of_bcard:e.UF_37,name_of_owner:e.UF_38,amount_of_paid_loans_in_last_six_month:e.UF_39,balance_on_deposit:e.UF_40,amount_of_payments_for_current_loans:e.UF_41,id_card_number:e.UF_42,date_of_issue:e.UF_43,expiration_date_of_icard:e.UF_44,place_of_issue:e.UF_45,birth_place:e.UF_46,bank_name:e.UF_47};console.log(r),u(!0),s.a.post("https://api.money-men.kz/api/last_step",r,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(p.a.get("token"))},credentials:"same-origin"}).then((function(e){u(!1),console.log(e,hello),!0===e.data.success?N()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430","success").then((function(){l.a.push("/cabinet/loans"),p.a.remove("continue2")})):N()("Oops!","".concat(e.errors||"\u0423 \u0432\u0430\u0441 \u0430\u043d\u043a\u0435\u0442\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043d\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430 WhatsApp \u0438\u043b\u0438 \u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043d\u0430 \u043d\u043e\u043c\u0435\u0440 +7 727 250 15 00"),"error").then((function(){l.a.push("/cabinet/loans")}))})).catch((function(e){e.response&&console.log(e.response),u(!1),l.a.push("/cabinet/loans"),window.scrollTo(0,0)}))}}(e)},children:function(e){var t=e.errors,n=e.touched;e.isValidating,e.isSubmitting;return Object(c.jsxs)(f.b,{className:"container",children:[Object(c.jsx)("h2",{className:"mt-5 mb-5",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043c\u0435\u0441\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(c.jsxs)("div",{className:"row form-group",children:[Object(c.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b *"}),Object(c.jsx)(f.a,{validate:m.k,name:"UF_31",className:"form-control",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b"}),t.UF_31&&n.UF_31&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_31})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c *"}),Object(c.jsxs)(f.a,{as:"select",validate:m.k,name:"UF_33",className:"form-control",children:[Object(c.jsx)("option",{value:"",disabled:!0,selected:!0,children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),j.d.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),t.UF_33&&n.UF_33&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_33})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u0421\u0442\u0430\u0436 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u043c\u0435\u0441\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u044b *"}),Object(c.jsxs)(f.a,{validate:m.k,as:"select",name:"UF_32",className:"form-control",children:[Object(c.jsx)("option",{value:"",disabled:!0,selected:!0,children:"\u0421\u0442\u0430\u0436 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(c.jsx)("option",{value:"\u0434\u043e 3\u043c\u0435\u0441.",children:"\u0434\u043e 3\u043c\u0435\u0441."}),Object(c.jsx)("option",{value:"\u0434\u043e 4-6\u043c\u0435\u0441.",children:"\u0434\u043e 4-6\u043c\u0435\u0441."}),Object(c.jsx)("option",{value:"\u0434\u043e 7-12\u043c\u0435\u0441.",children:"\u0434\u043e 7-12\u043c\u0435\u0441."}),Object(c.jsx)("option",{value:"\u043e\u0442 1 \u0434\u043e 2\u043b\u0435\u0442",children:"\u043e\u0442 1 \u0434\u043e 2\u043b\u0435\u0442"}),Object(c.jsx)("option",{value:"\u043e\u0442 2 \u0434\u043e 5\u043b\u0435\u0442",children:"\u043e\u0442 2 \u0434\u043e 5\u043b\u0435\u0442"})]}),t.UF_32&&n.UF_32&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_32})]}),Object(c.jsx)("h2",{className:"col-md-12 mt-5 mb-5",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0443\u0434. \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438"}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f *"}),Object(c.jsx)(f.a,{validate:m.k,name:"UF_46",className:"form-control"}),t.UF_46&&n.UF_46&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_46})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u041d\u043e\u043c\u0435\u0440 \u0443\u0434\u043e\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u044f \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 *"}),Object(c.jsx)(f.a,{validate:m.f,name:"UF_42",className:"form-control",component:w}),t.UF_42&&n.UF_42&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_42})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438(\u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433) * :"}),Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)(f.a,{name:"UF_43",className:"form-control",validate:m.b,component:S}),Object(c.jsx)("div",{className:"hint",children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 (\u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413)"})]}),t.UF_43&&n.UF_43&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_43})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433) * :"}),Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)(f.a,{name:"UF_44",className:"form-control",validate:m.a,component:S}),Object(c.jsx)("div",{className:"hint",children:"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f  (\u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413)"})]}),t.UF_44&&n.UF_44&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_44})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{htmlFor:"",children:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d\u043e *"}),Object(c.jsxs)(f.a,{as:"select",name:"UF_45",validate:m.k,className:"form-control",children:[Object(c.jsx)("option",{value:"",disabled:!0,selected:!0,children:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d\u043e"}),Object(c.jsx)("option",{value:"\u041c\u042e \u0420\u041a",children:"\u041c\u042e \u0420\u041a"}),Object(c.jsx)("option",{value:"\u041c\u0412\u0414 \u0420\u041a",children:"\u041c\u0412\u0414 \u0420\u041a"})]}),t.UF_45&&n.UF_45&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_45})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0414\u043e\u0445\u043e\u0434 *"}),Object(c.jsx)(f.a,{validate:m.k,autocomplete:"off",name:"UF_34",className:"form-control",type:""}),t.UF_34&&n.UF_34&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_34})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0435 *"}),Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)(f.a,{validate:m.e,value:U,onChange:F,name:"UF_40",autocomplete:"off",className:"form-control",type:""}),Object(c.jsx)("div",{className:"hint",children:"\u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0443\u043c\u043c\u0430 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u0430 \u0442\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0443\u043c\u043c\u0430 \u043f\u0440\u0438 \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u0438 \u0437\u0430\u0438\u043c\u0430"})]}),t.UF_40&&n.UF_40&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_40})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0421\u0443\u043c\u043c\u0430 *"}),Object(c.jsx)(f.a,{validate:m.k,name:"UF_41",type:"",placeholder:"\u0421\u0443\u043c\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432:",className:"form-control",disabled:b}),t.UF_41&&n.UF_41&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_41})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"\u0421\u0443\u043c\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439 \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0445 \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 6 \u043c\u0435\u0441. *"}),Object(c.jsx)(f.a,{validate:m.k,name:"UF_39",type:"",className:"form-control"}),t.UF_39&&n.UF_39&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_39})]}),Object(c.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(c.jsx)("label",{children:"IBAN \u0441\u0447\u0435\u0442 *"}),Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)(f.a,{onChange:function(e){return function(e){O({value:e.target.value,text:Object(g.i)(e.target.value)})}(e)},value:h.value.toUpperCase(),className:"form-control",name:"UF_35",component:E}),Object(c.jsx)("div",{className:"hint",children:"\u041d\u043e\u043c\u0435\u0440 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430"})]}),Object(c.jsx)("p",{className:"mt-2 text-info",children:h.text}),t.UF_35&&n.UF_35&&Object(c.jsx)("p",{className:"text-danger",children:t.UF_35})]})]}),Object(c.jsx)("div",{className:"button form-group mb-5",children:Object(c.jsx)("button",{type:"submit ",disabled:i,className:"",children:i?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}})})},T=n("toLX");n("LeE0"),t.default=Object(T.a)(Object(o.connect)((function(e){return{userReducer:e.userReducer,userStatus:e.userStatus,userHistory:e.userHistory}}),null)((function(e){var t=e.userReducer,n=Object(r.useState)(1),a=n[0],o=n[1],i=Object(r.useState)(55e3),u=i[0],d=(i[1],Object(r.useState)(20)),j=d[0],m=(d[1],Object(r.useState)(a)),b=m[0],p=m[1],_=Object(r.useState)(!0);_[0],_[1];Object(r.useEffect)((function(){s.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(t.user.UF_4)).then((function(e){console.log(e),1==e.data.success||console.log(e)})),s.a.get("https://api.money-men.kz/api/notFull?iin=".concat(t.user.UF_4),{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){console.log(e),e.data.success&&(3===e.data.step?l.a.push("/cabinet/loans"):(p(parseInt(e.data.step)),o(parseInt(e.data.step))))})).catch(console.log("log"))}),[]);var h=function(){return Object(c.jsx)(c.Fragment,{children:1===b?Object(c.jsx)(x,{next:b,setNext:p,userDate:t.user}):Object(c.jsx)(P,{step:b,setStep:p,stepResult:a,userDate:t.user,summa:u,srok:j})})};return Object(c.jsxs)("div",{className:"otherPages container",children:[Object(c.jsx)("div",{className:"alert alert-info",children:Object(c.jsxs)("b",{children:[t.user.UF_5," ",t.user.UF_6,", \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u0430\u0439\u043c"]})}),Object(c.jsx)("h3",{className:"mt-5 mb-3 text-center",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443"}),1===a?Object(c.jsx)(h,{}):Object(c.jsx)(P,{userDate:t.user,summa:u,srok:j})]})})))},"9QFo":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/continue",function(){return n("6JcU")}])},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("zLVn");function a(e,t){if(null==e)return{};var n,a,s=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},JX7q:function(e,t,n){"use strict";function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return c}))},Ji7U:function(e,t,n){"use strict";function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",(function(){return a}))},U8pU:function(e,t,n){"use strict";function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}))},foSv:function(e,t,n){"use strict";function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return c}))},md7G:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n("U8pU"),a=n("JX7q");function s(e,t){return!t||"object"!==Object(c.a)(t)&&"function"!==typeof t?Object(a.a)(e):t}},rePB:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))},toLX:function(e,t,n){"use strict";var c=n("1OyB"),a=n("vuIU"),s=n("Ji7U"),r=n("md7G"),o=n("foSv"),i=n("nKUr"),l=n("q1tI"),u=n.n(l),d=n("/MKj"),j=n("nOHt"),m=n.n(j),b=n("w18f"),p=n("p46w"),_=n.n(p);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(o.a)(e);if(t){var a=Object(o.a)(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return Object(r.a)(this,n)}}t.a=function(e){var t=function(t){Object(s.a)(r,t);var n=h(r);function r(){return Object(c.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){_.a.get("token")&&!this.props.loggedIn&&this.props.fetchCurrentUser(),_.a.get("token")||m.a.push("/login")}},{key:"render",value:function(){return _.a.get("token")&&this.props.loggedIn?Object(i.jsx)(e,{}):!_.a.get("token")||!this.props.authenticatingUser&&this.props.loggedIn?Object(i.jsxs)("div",{className:"otherPages",children:[Object(i.jsx)("div",{className:"modelLoader"}),Object(i.jsx)("h2",{className:"text-center pt-5",children:"\u0412\u0440\u0435\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e"})]}):Object(i.jsxs)("div",{className:"otherPages",children:[Object(i.jsx)("div",{className:"pd-5 pt-5"}),Object(i.jsx)("div",{className:"modelLoader"})]})}}]),r}(u.a.Component);return Object(d.connect)((function(e){return{loggedIn:e.userReducer.loggedIn,authenticatingUser:e.userReducer.authenticatingUser}}),b)(t)}},vuIU:function(e,t,n){"use strict";function c(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}n.d(t,"a",(function(){return a}))},w18f:function(e,t,n){"use strict";n.r(t),n.d(t,"authenticatingUser",(function(){return o})),n.d(t,"setCurrentUser",(function(){return i})),n.d(t,"dateLoading",(function(){return l})),n.d(t,"dateFailed",(function(){return u})),n.d(t,"statusSuccess",(function(){return d})),n.d(t,"historySuccess",(function(){return j})),n.d(t,"logoutUser",(function(){return m})),n.d(t,"loginUser",(function(){return b})),n.d(t,"fetchCurrentUser",(function(){return p})),n.d(t,"fetchUserStatus",(function(){return _})),n.d(t,"fetchUserHistory",(function(){return h})),n.d(t,"fetchAdmin",(function(){return f}));var c=n("p46w"),a=n.n(c),s=n("nOHt"),r=n.n(s),o=function(){return{type:"AUTHENTICATING_USER"}},i=function(e){return{type:"SET_CURRENT_USER",payload:e}},l=function(){return{type:"DATE_LOADING"}},u=function(e){return{type:"DATE_FAILED",payload:e}},d=function(e){return{type:"STATUS_SUCCESS",payload:e}},j=function(e){return{type:"HISTORY_SUCCESS",payload:e}},m=function(){return{type:"LOGOUT_USER"}},b=function(e){return function(t){t({type:"AUTHENTICATING_USER"}),fetch("https://api.money-men.kz/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){a.a.set("token",e.access_token,{expires:2});var n=t(p());console.log(n),t({type:"SET_CURRENT_USER",payload:"user"}),r.a.push("/cabinet/loans")})).catch((function(e){e.message.includes("400")?t({type:"FAILED_LOGIN",payload:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}):t({type:"FAILED_LOGIN",payload:e.message})}))}},p=function(){return function(e){e(o()),fetch("https://api.money-men.kz/api/getUserProfileFromBitrix",{method:"GET",headers:{Authorization:"Bearer ".concat(a.a.get("token"))}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(i(t))})).catch((function(e){a.a.remove("token"),console.log(e.message||"Error")}))}},_=function(){return function(e){e(l(!0)),fetch("https://api.money-men.kz/api/getUserInfo",{method:"GET",headers:{Authorization:"Bearer ".concat(a.a.get("token"))}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(d(t))})).catch((function(t){a.a.remove("token"),e(u(t.message||"\u0414\u0430\u043d\u043d\u044b\u0435 \u0432\u0435\u0440\u043d\u044b. ")),console.log(t.message||"Error")}))}},h=function(){return function(e){e(l(!0)),fetch("https://api.money-men.kz/api/history",{method:"GET",headers:{Authorization:"Bearer ".concat(a.a.get("token"))}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(j(t))})).catch((function(t){a.a.remove("token"),e(u(t.message)),console.log(t.message||"Error")}))}},f=function(){return function(e){e(o()),fetch("http://localhost:8000/api/getProfile?token=".concat(a.a.get("admin_token")),{method:"GET"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(i(t))})).catch((function(e){a.a.remove("admin_token"),console.log(e.message||"Error")}))}}},zLVn:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return c}))}},[["9QFo",0,1,2,3,4,5,6,7,8,10,17,20]]]);