// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__;var f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,y,p,l;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((y="value"in f)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),p="get"in f,l="set"in f,y&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,f.get),l&&i&&i.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(t,r,n){f(t,r,{configurable:!1,enumerable:!1,get:n})}function p(t){return"number"==typeof t}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return l&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol.toStringTag:"";var h=v()?function(t){var r,n,e,o,i;if(null==t)return s.call(t);n=t[N],i=N,r=null!=(o=t)&&b.call(o,i);try{t[N]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[N]=n:delete t[N],e}:function(t){return s.call(t)},m=Number,w=m.prototype.toString;var d=v();function A(t){return"object"==typeof t&&(t instanceof m||(d?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function _(t){return p(t)||A(t)}function g(t){return p(t)&&t>=0&&t<=1}function U(t){return A(t)&&t.valueOf()>=0&&t.valueOf()<=1}function j(t){return g(t)||U(t)}function O(t){return t!=t}c(_,"isPrimitive",p),c(_,"isObject",A),c(j,"isPrimitive",g),c(j,"isObject",U);var I="function"==typeof Uint32Array;var S="function"==typeof Uint32Array?Uint32Array:null;var E,F="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var t,r,n;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(I&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var T=E,H="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var G,M="function"==typeof Float64Array?Float64Array:void 0;G=function(){var t,r,n;if("function"!=typeof P)return!1;try{r=new P([1,3.14,-3.14,NaN]),n=r,t=(H&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?M:function(){throw new Error("not implemented")};var V=G,k="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var W,x="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),n=r,t=(k&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?x:function(){throw new Error("not implemented")};var q=W,C="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var R,z="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,65536,65537]),n=r,t=(C&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?z:function(){throw new Error("not implemented")};var B,D={uint16:R,uint8:q};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new V(1),X=new T(Q.buffer);function Z(t){return Q[0]=t,X[K]}var $=!0===J?1:0,tt=new V(1),rt=new T(tt.buffer);var nt=m.NEGATIVE_INFINITY;var et=.6931471803691238,ot=1.9082149292705877e-10;function it(t){var r,n,e,o,i,u,a,f,c,y,p,l;return 0===t?nt:O(t)||t<0?NaN:(i=0,(n=Z(t))<1048576&&(i-=54,n=Z(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-1023|0,i+=(f=(n&=1048575)+614244&1048576|0)>>20|0,a=(t=function(t,r){return tt[0]=t,rt[$]=r>>>0,tt[0]}(t,n|1072693248^f))-1,(1048575&2+n)<3?0===a?0===i?0:i*et+i*ot:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*et-(u-i*ot-a)):(f=n-398458|0,c=440401-n|0,o=(p=(l=(y=a/(2+a))*y)*l)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=l*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+o,(f|=c)>0?(r=.5*a*a,0===i?a-(r-y*(r+u)):i*et-(r-(y*(r+u)+i*ot)-a)):0===i?a-y*(a-u):i*et-(y*(a-u)-i*ot-a))))}var ut=Math.sqrt,at=Number.POSITIVE_INFINITY;function ft(t,r){return O(t)||O(r)||r<0||r>1?NaN:t<0?0:t>=1?1:1-r}function ct(t){return function(){return t}}function yt(t){return t>=0&&t<=1}c(ft,"factory",(function(t){return O(t)||t<0||t>1?ct(NaN):function(r){if(O(r))return NaN;if(r<0)return 0;if(r>=1)return 1;return 1-t}}));var pt=Math.floor,lt=Math.ceil;function vt(t){return t<0?lt(t):pt(t)}function st(t){return t===at||t===nt}var bt,Nt;!0===J?(bt=1,Nt=0):(bt=0,Nt=1);var ht,mt,wt={HIGH:bt,LOW:Nt},dt=new V(1),At=new T(dt.buffer),_t=wt.HIGH,gt=wt.LOW;function Ut(t,r,n,e){return dt[0]=t,r[e]=At[_t],r[e+n]=At[gt],r}function jt(t){return Ut(t,[0,0],1,0)}c(jt,"assign",Ut),!0===J?(ht=1,mt=0):(ht=0,mt=1);var Ot={HIGH:ht,LOW:mt},It=new V(1),St=new T(It.buffer),Et=Ot.HIGH,Ft=Ot.LOW;function Tt(t,r){return St[Et]=t,St[Ft]=r,It[0]}var Ht=[0,0];function Pt(t,r,n,e){return O(t)||st(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}c((function(t){return Pt(t,[0,0],1,0)}),"assign",Pt);var Gt=[0,0],Mt=[0,0];function Vt(t,r){var n,e,o,i,u,a;return 0===r||0===t||O(t)||st(t)?t:(Pt(t,Gt,1,0),r+=Gt[1],r+=function(t){var r=Z(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Gt[0]),r<-1074?(o=0,i=t,jt.assign(o,Ht,1,0),u=Ht[0],u&=2147483647,a=Z(i),Tt(u|=a&=2147483648,Ht[1])):r>1023?t<0?nt:at:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,jt.assign(t,Mt,1,0),n=Mt[0],n&=2148532223,e*Tt(n|=r+1023<<20,Mt[1])))}function kt(t){var r;return O(t)||t===at?t:t===nt?0:t>709.782712893384?at:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(t,r,n){var e,o,i,u;return Vt(1-(r-(e=t-r)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(t-.6931471803691238*(r=vt(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*r,r)}function Lt(t,r){return O(t)||!yt(r)?NaN:1-r+r*kt(t)}function Wt(t,r){return O(t)||O(r)||r<0||r>1?NaN:0===t?1-r:1===t?r:0}function xt(t,r){return O(r)||O(t)||r<0||r>1||t<0||t>1?NaN:t<=1-r?0:1}function qt(){var t,r=arguments,n=r[0],e="https://stdlib.io/e/"+n+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}function Ct(){var t;if(!(this instanceof Ct))return 0===arguments.length?new Ct:new Ct(arguments[0]);if(arguments.length){if(!g(t=arguments[0]))throw new TypeError(qt("invalid argument. Mean parameter must be a probability. Value: `%s`.",t))}else t=.5;return f(this,"p",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!g(r))throw new TypeError(qt("invalid assignment. Must be a probability. Value: `%s`.",r));t=r}}),this}c(Lt,"factory",(function(t){return yt(t)?function(r){if(O(r))return NaN;return 1-t+t*kt(r)}:ct(NaN)})),c(Wt,"factory",(function(t){return O(t)||t<0||t>1?ct(NaN):function(r){if(O(r))return NaN;if(0===r)return 1-t;if(1===r)return t;return 0}})),c(xt,"factory",(function(t){return O(t)||t<0||t>1?ct(NaN):function(r){if(O(r)||r<0||r>1)return NaN;if(r<=1-t)return 0;return 1}})),y(Ct.prototype,"entropy",(function(){return O(t=this.p)||t<0||t>1?NaN:0===t||1===t?0:-(r=1-t)*it(r)-t*it(t);var t,r})),y(Ct.prototype,"kurtosis",(function(){return O(t=this.p)||t<0||t>1?NaN:1/(t*(1-t))-6;var t})),y(Ct.prototype,"mean",(function(){return O(t=this.p)||t<0||t>1?NaN:t;var t})),y(Ct.prototype,"median",(function(){return O(t=this.p)||t<0||t>1?NaN:t<=.5?0:1;var t})),y(Ct.prototype,"mode",(function(){return O(t=this.p)||t<0||t>1?NaN:t<=.5?0:1;var t})),y(Ct.prototype,"skewness",(function(){return O(t=this.p)||t<0||t>1?NaN:0===t?at:1===t?nt:(1-2*t)/ut(t*(1-t));var t})),y(Ct.prototype,"stdev",(function(){return O(t=this.p)||t<0||t>1?NaN:ut((1-t)*t);var t})),y(Ct.prototype,"variance",(function(){return O(t=this.p)||t<0||t>1?NaN:t*(1-t);var t})),c(Ct.prototype,"cdf",(function(t){return ft(t,this.p)})),c(Ct.prototype,"mgf",(function(t){return Lt(t,this.p)})),c(Ct.prototype,"pmf",(function(t){return Wt(t,this.p)})),c(Ct.prototype,"quantile",(function(t){return xt(t,this.p)}));export{Ct as default};
//# sourceMappingURL=mod.js.map
