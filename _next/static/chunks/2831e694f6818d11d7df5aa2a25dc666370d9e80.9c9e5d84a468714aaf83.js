(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"DH+K":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return a}));var o="DAY_CHANGE",r="MONEY_CHANGE",i="ADD_REGISTRATION",c="STEP_REGISTRATION",a="IS_LOADING"},HbFR:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var o=n("p46w"),r=n.n(o);function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var c=function(){void 0!==r.a.get("utm_source")&&void 0!==r.a.get("utm_medium")&&void 0!==r.a.get("utm_campaign")&&void 0!==r.a.get("utm_term")&&void 0!==r.a.get("clickid")?(r.a.remove("utm_medium"),r.a.remove("utm_campaign"),r.a.remove("utm_source"),r.a.remove("utm_term"),r.a.remove("clickid")):void 0!==r.a.get("utm_source")&&void 0!==r.a.get("afclick")?(r.a.remove("utm_source"),r.a.remove("afclick")):void 0!==r.a.get("utm_source")&&void 0!==r.a.get("clickid")&&void 0!==r.a.get("wmid")?(r.a.remove("utm_source"),r.a.remove("clickid"),r.a.remove("wmid")):void 0!==r.a.get("utm_source")&&r.a.remove("utm_source")},a=function(){"rafinad"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("click_id"),{expires:30}),r.a.set("wmid",i("web_id"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&i("utm_term").length>0&&i("click_id").length>0&&(c(),i("utm_source").includes("qaz")&&(localStorage.clear(),r.a.set("utm_source","qaz",{expires:1}),r.a.set("utm_medium",i("utm_medium"),{expires:1}),r.a.set("utm_campaign",i("utm_campaign"),{expires:1}),r.a.set("utm_term",i("utm_term"),{expires:1}),r.a.set("clickid",i("clickid"),{expires:1})),i("utm_source").includes("finpublic")&&(localStorage.clear(),console.log(i("click_id")),r.a.set("clickid",i("click_id"),{expires:30}),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30}),r.a.set("utm_term",i("utm_term"),{expires:30}))),i("utm_source").length>0&&i("afclick").length>0&&"loangate"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("afclick",i("afclick"),{expires:30})),i("utm_source").length>0&&i("cpa_click_id").length>0&&i("cpa_wm_id").length>0&&"leadgid"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("cpa_click_id"),{expires:30}),r.a.set("wmid",i("cpa_wm_id"),{expires:30})),i("utm_source").length>0&&i("v").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&i("web_id").length>0&&"doaff"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30}),r.a.set("utm_term",i("web_id"),{expires:30}),r.a.set("clickid",i("v"),{expires:30}),r.a.set("wmid",i("web_id"),{expires:30})),i("utm_source").length>0&&i("aff_id").length>0&&i("aff_sub").length>0&&"sales_doubler"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_term",i("aff_id"),{expires:30}),r.a.set("clickid",i("aff_sub"),{expires:30})),i("utm_source").length>0&&i("clickid").length>0&&"upsala"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("clickid"),{expires:30}),r.a.set("wmid","nothing",{expires:30})),i("utm_source").length>0&&i("click_id").length>0&&"pdl-profit"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("click_id"),{expires:30}),r.a.set("wmid",i("web_id"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&i("web_id").length>0&&i("click_id").length>0&&"goodaff"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30}),r.a.set("utm_term",i("web_id"),{expires:30}),r.a.set("clickid",i("click_id"),{expires:30})),i("utm_source").length>0&&i("utm_source").includes("sms")&&(localStorage.clear(),c(),r.a.set("utm_source",i("utm_source"),{expires:1})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&i("utm_term").length>0&&!i("utm_source").includes("finpublic")&&(c(),localStorage.clear(),r.a.set("clickid","notexist",{expires:30}),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30}),r.a.set("utm_term",i("utm_term"),{expires:30})),i("_branch_match_id").length>0&&i("utm_medium").length>0&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_medium"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_medium"),{expires:30}),r.a.set("utm_term",i("utm_medium"),{expires:30}),r.a.set("clickid",i("_branch_match_id"),{expires:30})),i("utm_source").length>0&&i("cid").length>0&&i("user").length>0&&"click2money"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("cid"),{expires:30}),r.a.set("wmid",i("user"),{expires:30})),i("utm_campaign").length>0&&i("clickid").length>0&&i("wm_id").length>0&&"guruleads"===i("utm_campaign")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_campaign"),{expires:30}),r.a.set("clickid",i("clickid"),{expires:30}),r.a.set("wmid",i("wm_id"),{expires:30})),i("utm_source").length>0&&i("utm_campaign").length>0&&i("utm_medium").length>0&&i("utm_source").includes("risk")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30})),i("affiliate_id").length>0&&i("transaction_id").length>0&&i("utm_source").length>0&&i("utm_source").includes("leadssu")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("transaction_id"),{expires:30}),r.a.set("wmid",i("affiliate_id"),{expires:30})),i("utm_source").length>0&&"crezu"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("click_id"),{expires:30})),i("utm_source").length>0&&"admitad"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("click_id"),{expires:30})),i("utm_source").length>0&&"sales_doubler"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("aff_sub"),{expires:30}),r.a.set("clickid",i("aff_sub"),{expires:30}),r.a.set("utm_term",i("aff_id"),{expires:30})),i("utm_source").length>0&&"google"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30}),r.a.set("utm_content",i("utm_content"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_2365"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_4291"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_7846"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_3954"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_8132"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_5673"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_6728"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_1589"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30})),i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&"altel_4376"===i("utm_source")&&(c(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30}))}},mS3u:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return x})),n.d(t,"l",(function(){return S})),n.d(t,"e",(function(){return k})),n.d(t,"d",(function(){return v})),n.d(t,"k",(function(){return b})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return A})),n.d(t,"c",(function(){return I})),n.d(t,"m",(function(){return T})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return j})),n.d(t,"f",(function(){return D}));var o=n("rePB"),r=n("DH+K"),i=n("nOHt"),c=n.n(i),a=n("p46w"),u=n.n(a),s=n("HbFR"),m=n("vDqi"),l=n.n(m),p=n("GUC0"),_=n.n(p);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){return{type:r.d,payload:e}};function f(e){return String(e).replace(/[^A-Z0-9]/g,"")}var x=function(e){return{type:r.b,payload:e}},S=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},k=function(e){return{type:"ERROR_MESSAGE",payload:e}},v=function(){return{type:"EMPTY_MESSAGE"}},w=function(e){return{type:"ADD_REGISTRATION",payload:e}},b=function(e){return{type:"STEP_REGISTRATION",payload:e}},y=function(e){return{type:"IS_LOADING",payload:e}},O=function(e){return function(t){t(v()),t(y(!0)),e.phone=f(e.phone);var n={phone:e.phone,iin:e.iin};return fetch("https://api.i-credit.kz/api/test/takeCode",{method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(n){n.success?(t(w(e)),t(y(!1)),t(b(1)),window.scrollTo(0,0),t(S("")),localStorage.setItem("step","1")):(t(y(!1)),localStorage.setItem("BMGAttempts","3"),localStorage.setItem("isOnBMG","false"),t(k("".concat(n.message,". \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438."))),setTimeout((function(){c.a.push("/login")}),5e3))})).catch((function(e){localStorage.setItem("BMGAttempts","3"),localStorage.setItem("isOnBMG","false"),t(k("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0441 egov. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0440\u0443\u0447\u043d\u0443\u044e."))})).then((function(){return t(y(!1))}))}},A=function(e){return function(t){t(v()),t(y(!0)),e.phone=f(e.phone);var n={source:"i-credit.kz",phone:e.phone};return fetch("https://api.i-credit.kz/api/test/sendSMS",{method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(n){n.success?(t(w(e)),t(y(!1)),t(b(4)),window.scrollTo(0,0),t(S("")),localStorage.setItem("step","4")):(t(y(!1)),t(k("\u0412\u0430\u0441 \u043d\u0435\u0442 \u0432 \u0411\u041c\u0413! \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0440\u0443\u0447\u043d\u0443\u044e.")))})).catch((function(e){t(k("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0441 egov. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0440\u0443\u0447\u043d\u0443\u044e.")),setTimeout((function(){var t;(t=e.errors)&&t.iin?document.location.replace("https://www.i-credit.kz/login"):console.log("not working")}),3e3)})).then((function(){return t(y(!1))}))}};var I=function(e){return function(t){t(v()),t(y(!0)),e.source="i-credit1",void 0!==u.a.get("utm_source")&&(e.source=u.a.get("utm_source")+"_1");var n={code:e.code,phone:e.phone,period:e.period_in_days,amount:e.loan_amount,name:e.name,surname:e.middlename,fatherName:e.last_name,password:e.password,email:e.email,source:e.source,utm_content:e.cpa_clickid,utm_campaign:e.webID,iin:e.iin,docNumber:e.doc_number,docIssue:e.doc_issue,startGiven:e.start_given,endGiven:e.end_given};return fetch("https://api.i-credit.kz/api/test/confirmSMS",{method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){e.success?(localStorage.setItem("token",e.token),t(w("")),t(b(2)),t(v()),localStorage.setItem("step","2"),window.scrollTo(0,0),t(y(!1))):(t(y(!1)),t(k("".concat(e.message,"."))))})).then((function(e){return t(y(!1))})).catch((function(e){console.log(e),t(k("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043a\u043e\u0434\u0430. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.")),setTimeout((function(){t(b(0))}),6e3),t(y(!1)),setTimeout((function(){localStorage.removeItem("step"),localStorage.removeItem("token")}),5e3),setTimeout((function(){c.a.push("/")}),5e3)})).then((function(){return t(y(!1))}))}},T=function(e){return function(t){t(v()),t(y(!0));var n={iin:e.iin,name:e.name,middleName:e.middlename,lastName:e.last_name,code:e.code};return l.a.get("https://24money.kz/biometria/public/api/takeDocs",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},params:n}).then((function(e){if(200===e.status)return e;throw e})).then((function(e){return e.data})).then((function(n){if(n.success){localStorage.setItem("token",n.token);var o=new Date(n.startGiven),r=1===o.getDate().toString().length?"0"+o.getDate().toString():o.getDate(),i=1===o.getMonth().toString().length?"0"+o.getMonth().toString():o.getMonth(),c="".concat(r,".").concat(i,".").concat(o.getFullYear()),a=new Date(n.endGiven),u=1===a.getDate().toString().length?"0"+o.getDate().toString():o.getDate(),s=1===a.getMonth().toString().length?"0"+o.getMonth().toString():o.getMonth(),m="".concat(u,".").concat(s,".").concat(a.getFullYear()),l=g(g({},e),{},{name:n.name||e.name,surname:n.middleName||e.middlename,fatherName:n.lastName||e.last_name,doc_number:n.docNumber,doc_issue:n.docGiven,start_given:c,end_given:m});t(I(l)),t(y(!1))}else t(k("".concat(n.message,"."))),setTimeout((function(){t(b(0))}),3e3),t(y(!1)),setTimeout((function(){localStorage.removeItem("step"),localStorage.removeItem("token")}),2e3)})).then((function(e){return t(y(!1))})).catch((function(e){console.log(e),t(k("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432.")),setTimeout((function(){t(b(0))}),6e3),t(y(!1)),setTimeout((function(){localStorage.removeItem("step"),localStorage.removeItem("token")}),5e3),setTimeout((function(){c.a.push("/")}),5e3)})).then((function(){return t(y(!1))}))}},C=function(e){return function(t){t(y(!0));var n={token:localStorage.getItem("token"),workPlace:e.work_place,sphere:e.sphere,lastSix:+e.lastSix<5e5?Math.round(2e6*Math.random()+2e6).toString().split("").slice(0,4).concat(["0","0","0"]).join(""):e.lastSix,deposit:"0"===e.deposit?"1000":e.deposit,position:e.position,fioContact:"".concat(e.relative_name," ").concat(e.relative_last_name),phoneContact:e.relative_phone_number,relativeContact:e.relative_type_id,source:e.source};return fetch("https://api.i-credit.kz/api/test/secondStep",{method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){e.success?(t(b(3)),t(v()),localStorage.setItem("step","3"),window.scrollTo(0,0)):(t(y(!1)),t(k("".concat(e.message))))})).catch((function(e){t(k("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u044f\u0432\u043a\u0438."))})).then((function(){return t(y(!1))}))}},j=function(e){return function(t){t(y(!0));var n={token:localStorage.getItem("token"),iban:e.iban_account,cardNumber:f(e.card_number),cardIssue:e.expiration_date_of_bcard,cardName:e.name_of_owner,source:e.source,clickID:e.cpa_clickid,web_id:e.webID};return fetch("https://api.i-credit.kz/api/test/thirdStep",{method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){e.success?(t(S("\u0423\u0441\u043f\u0435\u0448\u043d\u043e")),t(y(!1)),Object(s.b)(),l.a.get("https://api.i-credit.kz/api/getScore",{params:{token:localStorage.getItem("token")},headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){var n,o;(null===(n=e.data)||void 0===n?void 0:n.success)&&(null===(o=e.data)||void 0===o?void 0:o.decision)?_()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430","success").then((function(){var t;c.a.push("/newAgreements?token=".concat(localStorage.getItem("token"),"&bmg=").concat((null===(t=e.data)||void 0===t?void 0:t.bmg)?1:0)),u.a.remove("continue2")})):setTimeout((function(){t(b(0)),c.a.push("/thanks")}),2e3)}))):(t(y(!1)),t(k("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0437\u0430\u044f\u0432\u043a\u0438. ".concat(e.message))))})).then((function(){return t(y(!1))})).catch((function(e){console.log(e),t(k("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."))})).then((function(){return t(y(!1))}))}},D=function(e){return function(t){return t({type:"DATE_LOADING"}),fetch("https://api.money-men.kz/api/city/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t({type:"REGION_SUCCESS",payload:e})})).catch((function(e){return t({type:"DATE_FAILED",payload:e.message})}))}}},p46w:function(e,t,n){var o,r;!function(i){if(void 0===(r="function"===typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=i(),!!0){var c=window.Cookies,a=window.Cookies=i();a.noConflict=function(){return window.Cookies=c,a}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(s){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in i)i[u]&&(a+="; "+u,!0!==i[u]&&(a+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+a}}function c(e,n){if("undefined"!==typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var a=i[c].split("="),u=a.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var s=t(a[0]);if(u=(o.read||o)(u,s)||t(u),n)try{u=JSON.parse(u)}catch(m){}if(r[s]=u,e===s)break}catch(m){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(t,n){i(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))}}]);