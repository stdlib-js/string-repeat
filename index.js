// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,c=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var f,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((a="value"in l)&&(u.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=f):t[e]=l.value),p="get"in l,y="set"in l,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),y&&i&&i.call(t,e,l.set),t};function f(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function a(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",v=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[_],i=_,e=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[_]=r:delete t[_],n}:function(t){return b.call(t)},d=Number,m=d.prototype.toString,g=y();function j(t){return"object"==typeof t&&(t instanceof d||(g?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function h(t){return a(t)||j(t)}f(h,"isPrimitive",a),f(h,"isObject",j);var S=Number.POSITIVE_INFINITY,O=d.NEGATIVE_INFINITY,w=Math.floor;function T(t){return t<S&&t>O&&w(e=t)===e;var e}function I(t){return a(t)&&T(t)}function P(t){return j(t)&&T(t.valueOf())}function E(t){return I(t)||P(t)}function N(t){return I(t)&&t>=0}function V(t){return P(t)&&t.valueOf()>=0}function k(t){return N(t)||V(t)}function x(t){return"string"==typeof t}f(E,"isPrimitive",I),f(E,"isObject",P),f(k,"isPrimitive",N),f(k,"isObject",V);var A=String.prototype.valueOf,F=y();function G(t){return"object"==typeof t&&(t instanceof String||(F?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function U(t){return x(t)||G(t)}function C(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}f(U,"isPrimitive",x),f(U,"isObject",G);var R=void 0!==String.prototype.repeat,Y=String.prototype.repeat,M=R?function(t,e){return Y.call(t,e)}:function(t,e){var r,n;if(0===t.length||0===e)return"";for(r="",n=e;1==(1&n)&&(r+=t),0!=(n>>>=1);)t+=t;return r};return function(t,e){if(!x(t))throw new TypeError(C("0hU3R",t));if(!N(e))throw new TypeError(C("0hU3k",e));return M(t,e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).repeat=e();
//# sourceMappingURL=index.js.map
