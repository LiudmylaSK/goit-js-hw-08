!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(w,t),s?p(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=b();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&o?p(e):(o=r=void 0,u)}function T(){var e=b(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(w,t),p(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:O(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var S=document.querySelector(".feedback-form"),h=S.email,w=S.message,O=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};h.value=O.email,w.value=O.message;var T=e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify(O)),console.log("Saved to local storage:",O)}),500);function x(e){var t=e.target,n=t.name,o=t.value;"email"!==n&&"message"!==n||(O[n]=o,T())}h.addEventListener("input",x),w.addEventListener("input",x),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault();var t={email:h.value,message:w.value};h.value="",w.value="",localStorage.removeItem("feedback-form-state"),console.log("Form submitted with state:",t)}))}();
//# sourceMappingURL=03-feedback.d77b9a7d.js.map
