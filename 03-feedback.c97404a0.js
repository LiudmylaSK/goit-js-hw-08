function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function j(){var e=v();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function w(e){return u=void 0,p&&o?y(e):(o=i=void 0,a)}function O(){var e=v(),n=h(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector('input[name="email"]'),S=document.querySelector('textarea[name="message"]'),h=document.querySelector(".feedback-form"),j=JSON.parse(localStorage.getItem("feedback-form-state"));j&&(y.value=j.email,S.value=j.message);const w=e(t)((function(){const e={email:y.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log("Saved to local storage:",e)}),500);y.addEventListener("input",w),S.addEventListener("input",w),h.addEventListener("submit",(function(e){e.preventDefault();const t={email:y.value,message:S.value};y.value="",S.value="",localStorage.removeItem("feedback-form-state"),console.log("Form submitted with state:",t)}));
//# sourceMappingURL=03-feedback.c97404a0.js.map
