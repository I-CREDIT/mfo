(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2W6z":function(t,e,n){"use strict";var r=function(){};t.exports=r},"82Mt":function(t,e,n){t.exports=n("L37t")},L37t:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var i=n("q1tI"),a=r(i),u=n("i8i4");n("17x9");var o=r(n("QLaP"));function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}function c(t){return requestAnimationFrame(t)}function f(t){cancelAnimationFrame(t)}function g(t){var e=t.ownerDocument;return e.hasFocus()&&e.activeElement===t}function h(t){return null==t?void 0:t.ownerDocument}function d(t){return i.useCallback((function(){var e=t.current,n="undefined"!=typeof window&&function(t){var e=function(t){var e;return null==(e=h(t))?void 0:e.defaultView}(t);return!!e&&t instanceof e.HTMLElement}(e);if(!e||!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e}),[t])}function v(t,e){var n,r,a,u,o=i.useRef({start:null,end:null}),l=d(t),s=i.useCallback((function(){return function(t){var e=t.selectionStart,n=t.selectionEnd;return{start:e,end:n,length:n-e}}(l())}),[l]),h=i.useCallback((function(){return o.current}),[]),v=i.useCallback((function(t){var e=l();e&&g(e)&&(function(t,e,n){void 0===n&&(n=e),t.setSelectionRange(e,n)}(e,t.start,t.end),o.current=s())}),[l,s]),p=i.useCallback((function(){o.current=s()}),[s]),m=(n=p,r=i.useRef(null),a=i.useCallback((function(){null===r.current&&function t(){n(),r.current=c(t)}()}),[n]),u=i.useCallback((function(){f(r.current),r.current=null}),[]),i.useEffect((function(){r.current&&(u(),a())}),[a,u]),i.useEffect(f,[]),[a,u]),b=m[0],P=m[1];return i.useLayoutEffect((function(){if(e){var t=l();return t.addEventListener("focus",b),t.addEventListener("blur",P),g(t)&&b(),function(){t.removeEventListener("focus",b),t.removeEventListener("blur",P),P()}}})),{getSelection:s,getLastSelection:h,setSelection:v}}function p(t,e){var n=i.useRef(),r=v(n,e),a=r.getSelection,u=r.getLastSelection,o=r.setSelection,l=function(t,e){var n=d(t),r=i.useRef(e);return{getValue:i.useCallback((function(){return n().value}),[n]),getLastValue:i.useCallback((function(){return r.current}),[]),setValue:i.useCallback((function(t){r.current=t;var e=n();e&&(e.value=t)}),[n])}}(n,t),s=l.getValue,c=l.getLastValue,f=l.setValue;return{inputRef:n,getInputState:function(){return{value:s(),selection:a()}},getLastInputState:function(){return{value:c(),selection:u()}},setInputState:function(t){var e=t.value,n=t.selection;f(e),o(n)}}}n("2W6z");var m=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],b={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},P=function(t){var e=this;this.isCharacterAllowedAtPosition=function(t,n){var r=e.maskOptions.maskPlaceholder;return!!e.isCharacterFillingPosition(t,n)||!!r&&r[n]===t},this.isCharacterFillingPosition=function(t,n){var r=e.maskOptions.mask;if(!t||n>=r.length)return!1;if(!e.isPositionEditable(n))return r[n]===t;var i=r[n];return new RegExp(i).test(t)},this.isPositionEditable=function(t){var n=e.maskOptions,r=n.mask,i=n.permanents;return t<r.length&&-1===i.indexOf(t)},this.isValueEmpty=function(t){return t.split("").every((function(t,n){return!e.isPositionEditable(n)||!e.isCharacterFillingPosition(t,n)}))},this.isValueFilled=function(t){return e.getFilledLength(t)===e.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var n=e.getFilledLength(t),r=e.getRightEditablePosition(n);return{start:r,end:r}},this.getFilledLength=function(t){return function(t,e){for(var n=t.length-1;n>=0;n--)if(e(t[n],n))return n;return-1}(t.split(""),(function(t,n){return e.isPositionEditable(n)&&e.isCharacterFillingPosition(t,n)}))+1},this.getStringFillingLengthAtPosition=function(t,n){return t.split("").reduce((function(t,n){return e.insertCharacterAtPosition(t,n,t.length)}),function(t,e){void 0===e&&(e=1);for(var n="",r=0;r<e;r++)n+=" ";return n}(0,n)).length-n},this.getLeftEditablePosition=function(t){for(var n=t;n>=0;n--)if(e.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(t){for(var n=e.maskOptions.mask,r=t;r<n.length;r++)if(e.isPositionEditable(r))return r;return null},this.formatValue=function(t){var n=e.maskOptions,r=n.maskPlaceholder,i=n.mask;if(!r){for(t=e.insertStringAtPosition("",t,0);t.length<i.length&&!e.isPositionEditable(t.length);)t+=i[t.length];return t}return e.insertStringAtPosition(r,t,0)},this.clearRange=function(t,n,r){if(!r)return t;var i=n+r,a=e.maskOptions,u=a.maskPlaceholder,o=a.mask,l=t.split("").map((function(t,r){var a=e.isPositionEditable(r);return!u&&r>=i&&!a?"":r<n||r>=i?t:a?u?u[r]:"":o[r]})).join("");return e.formatValue(l)},this.insertCharacterAtPosition=function(t,n,r){var i=e.maskOptions,a=i.mask,u=i.maskPlaceholder;if(r>=a.length)return t;var o=e.isCharacterAllowedAtPosition(n,r),l=e.isPositionEditable(r),s=e.getRightEditablePosition(r),c=u&&s?n===u[s]:null,f=t.slice(0,r);return!o&&l||(t=f+(o?n:a[r])),o||l||c||(t=e.insertCharacterAtPosition(t,n,r+1)),t},this.insertStringAtPosition=function(t,n,r){var i=e.maskOptions,a=i.mask,u=i.maskPlaceholder;if(!n||r>=a.length)return t;var o=n.split(""),l=e.isValueFilled(t)||!!u,s=t.slice(r);return t=o.reduce((function(t,n){return e.insertCharacterAtPosition(t,n,t.length)}),t.slice(0,r)),l?t+=s.slice(t.length-r):e.isValueFilled(t)?t+=a.slice(t.length).join(""):t=s.split("").filter((function(t,n){return e.isPositionEditable(r+n)})).reduce((function(t,n){var r=e.getRightEditablePosition(t.length);return null===r?t:(e.isPositionEditable(t.length)||(t+=a.slice(t.length,r).join("")),e.insertCharacterAtPosition(t,n,t.length))}),t),t},this.processChange=function(t,n){var r=e.maskOptions,i=r.mask,a=r.prefix,u=r.lastEditablePosition,o=t.value,l=t.selection,s=n.value,c=n.selection,f=o,g="",h=0,d=0,v=Math.min(c.start,l.start);return l.end>c.start?(g=f.slice(c.start,l.end),d=(h=e.getStringFillingLengthAtPosition(g,v))?c.length:0):f.length<s.length&&(d=s.length-f.length),f=s,d&&(1!==d||c.length||(v=c.start===l.start?e.getRightEditablePosition(l.start):e.getLeftEditablePosition(l.start)),f=e.clearRange(f,v,d)),f=e.insertStringAtPosition(f,g,v),(v+=h)>=i.length?v=i.length:v<a.length&&!h?v=a.length:v>=a.length&&v<u&&h&&(v=e.getRightEditablePosition(v)),{value:f=e.formatValue(f),enteredString:g,selection:{start:v,end:v}}},this.maskOptions=function(t){var e=t.mask,n=t.maskPlaceholder,r=[];if(!e)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if("string"==typeof e){var i=!1,a="";e.split("").forEach((function(t){i||"\\"!==t?(!i&&b[t]||r.push(a.length),a+=t,i=!1):i=!0})),e=a.split("").map((function(t,e){return-1===r.indexOf(e)?b[t]:t}))}else e.forEach((function(t,e){"string"==typeof t&&r.push(e)}));n&&(n=1===n.length?e.map((function(t,e){return-1!==r.indexOf(e)?t:n})):n.split(""),r.forEach((function(t){n[t]=e[t]})),n=n.join(""));for(var u=r.filter((function(t,e){return t===e})).map((function(t){return e[t]})).join(""),o=e.length-1;-1!==r.indexOf(o);)o--;return{maskPlaceholder:n,prefix:u,mask:e,lastEditablePosition:o,permanents:r}}(t)},k=function(t){function e(){return t.apply(this,arguments)||this}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,function(t,e){for(var n=Object.getOwnPropertyNames(e),r=0;r<n.length;r++){var i=n[r],a=Object.getOwnPropertyDescriptor(e,i);a&&a.configurable&&void 0===t[i]&&Object.defineProperty(t,i,a)}}(t,e)}(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=s(t,["children"]);return a.cloneElement(e,n)},e}(a.Component),E=i.forwardRef((function(t,e){var n=t.alwaysShowMask,r=t.children,f=t.mask,v=t.maskPlaceholder,b=t.beforeMaskedStateChange,E=s(t,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);!function(t){var e=t.mask,n=t.maskPlaceholder;e&&n&&1!==n.length&&n.length!==e.length&&o(!1)}(t);var w,S,C=new P({mask:f,maskPlaceholder:v}),y=!!f,D=!E.disabled&&!E.readOnly,L=null!==t.value&&void 0!==t.value,F=(w=y,S=i.useRef(),i.useEffect((function(){S.current=w})),S.current),O=p(function(t){return""+t}((L?t.value:t.defaultValue)||""),y),V=O.inputRef,A=O.getInputState,M=O.setInputState,x=O.getLastInputState,R=d(V);if(y&&L){var j=R(),I=j&&g(j)||n||t.value?C.formatValue(t.value):t.value;b&&(I=b({nextState:{value:I,selection:{start:null,end:null}}}).value),M(l({},x(),{value:I}))}var _=x(),Y=_.selection,Z=_.value;i.useLayoutEffect((function(){if(y){var t=g(R()),e=Y,r=A(),i=l({},r);if(!L){var a=r.value,u=C.formatValue(a),o=C.isValueEmpty(u);!o||t||n?i.value=u:o&&!t&&(i.value="")}t&&!F?i.selection=C.getDefaultSelectionForValue(i.value):L&&t&&e&&null!==e.start&&null!==e.end&&(i.selection=e),b&&(i=b({currentState:r,nextState:i})),M(i)}}));var N=l({},E,{onFocus:function(e){V.current=e.target;var n=A().value;if(y&&!C.isValueFilled(n)){var r=C.formatValue(n),i=C.getDefaultSelectionForValue(r),a={value:r,selection:i};b&&(r=(a=b({currentState:A(),nextState:a})).value,i=a.selection),M(a),r!==n&&t.onChange&&t.onChange(e),c((function(){M(x())}))}t.onFocus&&t.onFocus(e)},onBlur:function(e){var r=A().value,i=x().value;if(y&&!n&&C.isValueEmpty(i)){var a="",u={value:a,selection:{start:null,end:null}};b&&(a=(u=b({currentState:A(),nextState:u})).value),M(u),a!==r&&t.onChange&&t.onChange(e)}t.onBlur&&t.onBlur(e)},onChange:y&&D?function(e){var n=A(),r=x(),i=C.processChange(n,r);b&&(i=b({currentState:n,previousState:r,nextState:i})),M(i),t.onChange&&t.onChange(e)}:t.onChange,onMouseDown:y&&D?function(e){var n=R(),r=A().value,i=h(n);if(!g(n)&&!C.isValueFilled(r)){var a=e.clientX,u=e.clientY,o=(new Date).getTime();i.addEventListener("mouseup",(function t(e){if(i.removeEventListener("mouseup",t),g(n)){var r=Math.abs(e.clientX-a),s=Math.abs(e.clientY-u),c=Math.max(r,s),f=(new Date).getTime()-o;if(c<=10&&f<=200||c<=5&&f<=300){var h=x(),d=l({},h,{selection:C.getDefaultSelectionForValue(h.value)});M(d)}}}))}t.onMouseDown&&t.onMouseDown(e)}:t.onMouseDown,ref:function(t){V.current=u.findDOMNode(t),function(t){return"function"==typeof t}(e)?e(t):null!==e&&"object"==typeof e&&(e.current=t)},value:y&&L?Z:t.value});return r?(function(t,e){m.filter((function(n){return null!=e.props[n]&&e.props[n]!==t[n]})).length&&o(!1)}(t,r),a.createElement(k,N,r)):a.createElement("input",N)}));E.displayName="InputMask",E.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},t.exports=E},QLaP:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i,a,u,o){if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,i,a,u,o],c=0;(l=new Error(e.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},T2y0:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"j",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"l",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"i",(function(){return f})),n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return h})),n.d(e,"f",(function(){return v})),n.d(e,"m",(function(){return m}));var r=function(t){var e;return t||(e="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e},i=function(t){var e,n=/^[\d\w]/i.test(t);return t?t&&!n&&(e="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u0446\u0438\u0444\u0440\u044b \u0438\u043b\u0438 \u0431\u0443\u043a\u0432\u044b"):e="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",e},a=function(t){var e;return console.log(t),t||(e="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e},u=function(t){var e,n=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t);return t||(e="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t&&(n||(e="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email")),e},o=function(t){var e,n=/[a-zA-Z0-9+=!\u2116;%:?()@#$^&\|{}[\]_"*/]/i.test(t);return"-"==t.slice(0,1)[0]&&(n=!0),t||(e="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t&&(!0===n&&(e="\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0435"),t.length<=4&&"\u043d\u0435\u0442\u0443"==t.slice(0,4).toLowerCase()&&(e="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u043d\u0443\u044e \u0444\u0430\u043c\u0438\u043b\u0438\u044e"),t.length<=3&&"\u043d\u0435\u0442"==t.slice(0,3).toLowerCase()&&(e="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u043d\u0443\u044e \u0444\u0430\u043c\u0438\u043b\u0438\u044e")),e},l=function(t){var e,n=/[a-zA-Z0-9+=!\u2116;%:?()@#$^&\|{}[\]_"*/]/i.test(t);return t&&(!0===n&&(e="\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0435"),"-"==t.slice(0,1)[0]&&(e="\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0435"),t.length<=4&&"\u043d\u0435\u0442\u0443"==t.slice(0,4).toLowerCase()&&(e="\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),t.length<=3&&"\u043d\u0435\u0442"==t.slice(0,3).toLowerCase()&&(e="\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")),e},s=function(t){var e;return t||(e="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t&&t.length<5&&(e="\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e},c=function(t){var e;t&&12!==t.length&&(e="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f");var n=[1,2,3,4,5,6,7,8,9,10,11],r=[3,4,5,6,7,8,9,10,11,1,2],i=[],a=0;if(t){for(var u=0;u<12;u++)i[u]=parseInt(t.substring(u,u+1)),u<11&&(a+=i[u]*n[u]);if(10==(a%=11)){a=0;for(u=0;u<11;u++)a+=i[u]*r[u];a%=11}return a==i[11]&&0!=i[6]||(e="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0418\u0418\u041d"),e}},f=function(t){return!0===function(t){var e=String(t).replace(/[^A-Z0-9]/g,""),n=e.match(/^(\d{4})(\d{3})(\d{4})$/);if(!n||11!==e.length)return!1;var r=n[1];return[{id:"7700"},{id:"7701"},{id:"7702"},{id:"7705"},{id:"7706"},{id:"7707"},{id:"7708"},{id:"7747"},{id:"7771"},{id:"7775"},{id:"7776"},{id:"7777"},{id:"7778"}].filter((function(t){return t.id==r})).length>0}(t)?"":"\u041d\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430"},g=function(t){var e;return function(t){if(10!==String(t).replace(/_/g,"").length)return!1;var e=new Date(t.substring(6,10)+"-"+t.substring(3,5)+"-"+t.substring(0,2));if("Invalid Date"==e)return!1;var n=new Date,r=n.getMonth()+1,i=n.getDate(),a=n.getFullYear(),u=e.getMonth()+1,o=e.getDate(),l=e.getFullYear();return"Invalid Date"!=e&&!(l>a)&&!(l<a-25)&&!(l>a)&&!(l===a&&u>r)&&!(l===a&&u===r&&o>i)}(t)||(e="\u0414\u0430\u0442\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),e},h=function(t){var e;return d(t)||(e="\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u0442\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0438\u043b\u0438 \u0443\u0434. \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d "),e},d=function(t){if(10!==String(t).replace(/_/g,"").length)return!1;var e=new Date(t.substring(6,10)+"-"+t.substring(3,5)+"-"+t.substring(0,2));if("Invalid Date"==e)return!1;var n=new Date,r=n.getMonth()+2,i=n.getDate(),a=n.getFullYear(),u=e.getMonth()+1,o=e.getDate(),l=e.getFullYear();return!(l<a)&&(!(l===a&&u<r)&&!(l===a&&u===r&&o<i))},v=function(t){var e;return 9!==String(t).replace(/ /g,"").length&&(e="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"),e};function p(t){var e=new Date,n=e.getYear(),r=e.getMonth(),i=e.getDate(),a=new Date(function(t){return 0==t[0]?"20"+t.substring(0,2):"19"+t.substring(0,2)}(t),t.substring(2,4)-1,t.substring(4,6)),u=a.getYear(),o=a.getMonth(),l=a.getDate(),s=n-u;if(r>=o)var c=r-o;else{s--;c=12+r-o}if(i>=l)var f=i-l;else{f=31+i-l;--c<0&&(c=11,s--)}return{years:s,months:c,days:f}.years}var m=function(t){return(t[6]%2==0||!(p(t)<21||p(t)>73))&&(t[6]%2!=0||!(p(t)<21||p(t)>67))}}}]);