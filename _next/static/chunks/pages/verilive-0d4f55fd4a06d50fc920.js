_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{nrDZ:function(e,n,t){"use strict";t.r(n);var o=t("nKUr"),i=t("q1tI"),r=t("GUC0"),c=t.n(r),a=(t("p46w"),t("nOHt")),s=t.n(a),u=function(e){var n=e.setLivePhoto,t={recordVideo:!1,rotated:!1,lang:"ru",render:{oval:!0,faceContourInsteadOfOval:!0,ovalRingColor:{default:"#F5F542",actionSuccess:"#00F500",actionFailure:"#F50000",sessionSuccess:"#00F500",sessionFailure:"#F50000"},ovalWidth:1,overlay:!0,overlayColor:{default:"#2F4F4F"},overlayTransparency:{default:.55},arrow:!0,arrowColor:{default:"#F0F0F0"},arrowProgressColor:{default:"#404040"},hint:!0,hintTextColor:{default:"#C8C9CC"},hintFontType:"Arial",hintUseProgressiveFontSize:!0,hintProgressiveFontSizeMultiplier:1,hintFontSize:25,hintCloudColor:{default:"#2D312F"}},hints:{noHint:"",noFace:"\u0412\u0430\u0441 \u041d\u0435 \u0412\u0438\u0434\u043d\u043e",badLight:"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",closer:"\u0411\u043b\u0438\u0436\u0435",away:"\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u0435\u0441\u044c",closerToCenter:"\u0411\u043b\u0438\u0436\u0435 \u043a \u0426\u0435\u043d\u0442\u0440\u0443 \u042d\u043a\u0440\u0430\u043d\u0430",targetLeft:"\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u041f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0413\u043e\u043b\u043e\u0432\u0443 \u0412\u043b\u0435\u0432\u043e",targetRight:"\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u041f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0413\u043e\u043b\u043e\u0432\u0443 \u0412\u043f\u0440\u0430\u0432\u043e",targetCenter:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u041f\u0440\u044f\u043c\u043e",sessionSuccess:"\u0412\u044b \u041f\u0440\u043e\u0448\u043b\u0438!",sessionFailure:"\u0412\u044b \u041d\u0435 \u041f\u0440\u043e\u0448\u043b\u0438!",sessionError:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}};function r(e){var t=JSON.stringify(e,void 0,2).replace(/</g,"&lt;");n(JSON.parse(t)),localStorage.setItem("livephoto",JSON.parse(t).bestFrame),s.a.push("/secondStep").then((function(){location.reload()}))}function a(e){n(JSON.stringify(e,void 0,2).replace(/</g,"&lt;"))}function u(e){JSON.stringify(e,void 0,2).replace(/</g,"&lt;")}function f(e){}return Object(i.useEffect)((function(){verilive.init("https://face.verigram.ai/verilive","PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ",r,a,u,f,t).then((function(){c()("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 '\u0436\u0438\u0432\u043e\u0441\u0442\u0438'","\u0415\u0441\u043b\u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 OK","info").then((function(){!function(){var e=verilive.start();console.log(verilive.name+": Token - "+e)}()}))}))}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:"Hello"})})},f=t("vDqi"),l=t.n(f);n.default=function(){var e=Object(i.useState)(1),n=e[0],t=e[1],r=Object(i.useState)(null),c=r[0],a=r[1],s=Object(i.useState)(null),f=s[0],d=s[1],p=Object(i.useState)(null),v=p[0],g=p[1],h=Object(i.useState)(null),w=h[0],C=h[1];function O(e,n,t){return t=t||(e.match(/^data:([^;]+);/)||"")[1],fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){return new File([e],n,{type:t})}))}return Object(i.useEffect)((function(){null!==f&&O(f,"doc.png","image/jpeg").then((function(e){C(e)}))}),[f]),Object(i.useEffect)((function(){!function(){if(null!==w){var e=new FormData;e.append("doc",w),e.append("photo",v),l.a.post("https://services.verigram.ai:8443/veriface",e,{headers:{apiKey:"PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ","Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),swal("\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438","".concat(e.data.Similarity),"info").then((function(){location.reload()}))})).catch((function(e){e.response&&console.log(e.response)}))}}()}),[w]),Object(i.useEffect)((function(){null!==c&&O(c.bestFrame,"a.png").then((function(e){g(e)}))}),[c]),Object(i.useEffect)((function(){null!==v&&t(2)}),[v]),Object(i.useEffect)((function(){function e(e){e.face_picture?d("data:image/jpeg;base64,"+e.face_picture):d("".concat(e))}2===n&&veridoc.init("https://dev.verilive.verigram.ai/ru/veridoc/","PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ",(function(n){e(n),function(){var e=veridoc.getRecognitionWarnings();e.includes(RecognitionWarning.DOCUMENT_EXPIRED)&&console.log("This document expired!"),e.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)&&console.log("Transliteration check fail warning!")}()}),(function(n){e(n)}),(function(){}))}),[n]),Object(o.jsx)("div",{children:Object(o.jsx)(u,{setLivePhoto:a})})}},p46w:function(e,n,t){var o,i;!function(r){if(void 0===(i="function"===typeof(o=r)?o.call(n,t,n,e):o)||(e.exports=i),!0,e.exports=r(),!!0){var c=window.Cookies,a=window.Cookies=r();a.noConflict=function(){return window.Cookies=c,a}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function i(){}function r(n,t,r){if("undefined"!==typeof document){"number"===typeof(r=e({path:"/"},i.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(u){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var s in r)r[s]&&(a+="; "+s,!0!==r[s]&&(a+="="+r[s].split(";")[0]));return document.cookie=n+"="+t+a}}function c(e,t){if("undefined"!==typeof document){for(var i={},r=document.cookie?document.cookie.split("; "):[],c=0;c<r.length;c++){var a=r[c].split("="),s=a.slice(1).join("=");t||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=n(a[0]);if(s=(o.read||o)(s,u)||n(s),t)try{s=JSON.parse(s)}catch(f){}if(i[u]=s,e===u)break}catch(f){}}return e?i[e]:i}}return i.set=r,i.get=function(e){return c(e,!1)},i.getJSON=function(e){return c(e,!0)},i.remove=function(n,t){r(n,"",e(t,{expires:-1}))},i.defaults={},i.withConverter=t,i}((function(){}))}))},sDca:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verilive",function(){return t("nrDZ")}])}},[["sDca",0,1,2,3,4,6]]]);