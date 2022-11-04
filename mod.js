// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,c){var l,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=e,delete t[r],t[r]=c.value,t.__proto__=l):t[r]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,c.get),y&&i&&i.call(t,r,c.set),t};function l(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[_],i=_,r=null!=(o=t)&&v.call(o,i);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)},m=Number,g=m.prototype.toString;var j=y();function d(t){return"object"==typeof t&&(t instanceof m||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function S(t){return f(t)||d(t)}l(S,"isPrimitive",f),l(S,"isObject",d);var h=Number.POSITIVE_INFINITY,O=m.NEGATIVE_INFINITY,w=Math.floor;function I(t){return t<h&&t>O&&w(r=t)===r;var r}function P(t){return f(t)&&I(t)}function T(t){return d(t)&&I(t.valueOf())}function E(t){return P(t)||T(t)}function N(t){return P(t)&&t>=0}function V(t){return T(t)&&t.valueOf()>=0}function k(t){return N(t)||V(t)}function A(t){return"string"==typeof t}l(E,"isPrimitive",P),l(E,"isObject",T),l(k,"isPrimitive",N),l(k,"isObject",V);var F=String.prototype.valueOf;var G=y();function U(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function x(t){return A(t)||U(t)}function C(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}l(x,"isPrimitive",A),l(x,"isObject",U);var R=void 0!==String.prototype.repeat;var Y=String.prototype.repeat;var M=R?function(t,r){return Y.call(t,r)}:function(t,r){var e,n;if(0===t.length||0===r)return"";for(e="",n=r;1==(1&n)&&(e+=t),0!=(n>>>=1);)t+=t;return e};function q(t,r){if(!A(t))throw new TypeError(C("0hU3R",t));if(!N(r))throw new TypeError(C("0hU3k",r));return M(t,r)}export{q as default};
//# sourceMappingURL=mod.js.map
