// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t,n,r){f(t,n,{configurable:!1,enumerable:!1,get:r})}function y(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",h=s()?function(t){var n,r,e,o,i;if(null==t)return v.call(t);r=t[N],i=N,n=null!=(o=t)&&b.call(o,i);try{t[N]=void 0}catch(n){return v.call(t)}return e=v.call(t),n?t[N]=r:delete t[N],e}:function(t){return v.call(t)},m=Number,d=m.prototype.toString,w=s();function g(t){return"object"==typeof t&&(t instanceof m||(w?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function A(t){return y(t)||g(t)}function _(t){return y(t)&&t>=0&&t<=1}function U(t){return g(t)&&t.valueOf()>=0&&t.valueOf()<=1}function j(t){return _(t)||U(t)}function O(t){return t!=t}c(A,"isPrimitive",y),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U);var I,S="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var t,n,r;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(S&&r instanceof Uint32Array||"[object Uint32Array]"===h(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?T:function(){throw new Error("not implemented")};var F,H=I,P="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,M="function"==typeof Float64Array?Float64Array:void 0;F=function(){var t,n,r;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),r=n,t=(P&&r instanceof Float64Array||"[object Float64Array]"===h(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?M:function(){throw new Error("not implemented")};var V,k=F,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;V=function(){var t,n,r;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),r=n,t=(x&&r instanceof Uint8Array||"[object Uint8Array]"===h(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?W:function(){throw new Error("not implemented")};var q,C=V,Y="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,R="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var t,n,r;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,65536,65537]),r=n,t=(Y&&r instanceof Uint16Array||"[object Uint16Array]"===h(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?R:function(){throw new Error("not implemented")};var z,D={uint16:q,uint8:C};(z=new D.uint16(1))[0]=4660;var J=52===new D.uint8(z.buffer)[0],K=!0===J?1:0,Q=new k(1),X=new H(Q.buffer);function Z(t){return Q[0]=t,X[K]}var $=!0===J?1:0,tt=new k(1),nt=new H(tt.buffer),rt=1023,et=m.NEGATIVE_INFINITY,ot=.6931471803691238,it=1.9082149292705877e-10,ut=1048575;function at(t){var n,r,e,o,i,u,a,f,c,l,y,p;return 0===t?et:O(t)||t<0?NaN:(i=0,(r=Z(t))<1048576&&(i-=54,r=Z(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-rt|0,i+=(f=614244+(r&=ut)&1048576|0)>>20|0,a=(t=function(t,n){return tt[0]=t,nt[$]=n>>>0,tt[0]}(t,r|1072693248^f))-1,(ut&2+r)<3?0===a?0===i?0:i*ot+i*it:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*ot-(u-i*it-a)):(f=r-398458|0,c=440401-r|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),u=e+o,(f|=c)>0?(n=.5*a*a,0===i?a-(n-l*(n+u)):i*ot-(n-(l*(n+u)+i*it)-a)):0===i?a-l*(a-u):i*ot-(l*(a-u)-i*it-a))))}var ft=Math.sqrt,ct=Number.POSITIVE_INFINITY;function lt(t,n){return O(t)||O(n)||n<0||n>1?NaN:t<0?0:t>=1?1:1-n}function yt(t){return function(){return t}}function pt(t){return t>=0&&t<=1}c(lt,"factory",(function(t){return O(t)||t<0||t>1?yt(NaN):function(n){return O(n)?NaN:n<0?0:n>=1?1:1-t}}));var st,vt,bt=Math.floor,Nt=Math.ceil;function ht(t){return t<0?Nt(t):bt(t)}function mt(t){return t===ct||t===et}!0===J?(st=1,vt=0):(st=0,vt=1);var dt,wt,gt={HIGH:st,LOW:vt},At=new k(1),_t=new H(At.buffer),Ut=gt.HIGH,jt=gt.LOW;function Ot(t,n,r,e){return At[0]=t,n[e]=_t[Ut],n[e+r]=_t[jt],n}function It(t){return Ot(t,[0,0],1,0)}c(It,"assign",Ot),!0===J?(dt=1,wt=0):(dt=0,wt=1);var St={HIGH:dt,LOW:wt},Et=new k(1),Tt=new H(Et.buffer),Ft=St.HIGH,Ht=St.LOW;function Pt(t,n){return Tt[Ft]=t,Tt[Ht]=n,Et[0]}var Gt=[0,0];function Mt(t,n,r,e){return O(t)||mt(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c((function(t){return Mt(t,[0,0],1,0)}),"assign",Mt);var Vt=[0,0],kt=[0,0];function xt(t,n){var r,e,o,i,u,a;return 0===n||0===t||O(t)||mt(t)?t:(Mt(t,Vt,1,0),n+=Vt[1],n+=function(t){var n=Z(t);return(n=(2146435072&n)>>>20)-rt|0}(t=Vt[0]),n<-1074?(o=0,i=t,It.assign(o,Gt,1,0),u=Gt[0],u&=2147483647,a=Z(i),Pt(u|=a&=2147483648,Gt[1])):n>1023?t<0?et:ct:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,It.assign(t,kt,1,0),r=kt[0],r&=2148532223,e*Pt(r|=n+rt<<20,kt[1])))}var Lt=1.4426950408889634,Wt=1/(1<<28);function qt(t){var n;return O(t)||t===ct?t:t===et?0:t>709.782712893384?ct:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Wt?1+t:function(t,n,r){var e,o,i,u;return xt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(n=ht(t<0?Lt*t-.5:Lt*t+.5)),1.9082149292705877e-10*n,n)}function Ct(t,n){return O(t)||!pt(n)?NaN:1-n+n*qt(t)}function Yt(t,n){return O(t)||O(n)||n<0||n>1?NaN:0===t?1-n:1===t?n:0}function Bt(t,n){return O(n)||O(t)||n<0||n>1||t<0||t>1?NaN:t<=1-n?0:1}function Rt(){var t,n=arguments,r=n[0],e="https://stdlib.io/e/"+r+"?";for(t=1;t<n.length;t++)e+="&arg[]="+encodeURIComponent(n[t]);return e}function zt(){var t;if(!(this instanceof zt))return 0===arguments.length?new zt:new zt(arguments[0]);if(arguments.length){if(!_(t=arguments[0]))throw new TypeError(Rt("invalid argument. Mean parameter must be a probability. Value: `%s`.",t))}else t=.5;return f(this,"p",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!_(n))throw new TypeError(Rt("invalid assignment. Must be a probability. Value: `%s`.",n));t=n}}),this}return c(Ct,"factory",(function(t){return pt(t)?function(n){return O(n)?NaN:1-t+t*qt(n)}:yt(NaN)})),c(Yt,"factory",(function(t){return O(t)||t<0||t>1?yt(NaN):function(n){return O(n)?NaN:0===n?1-t:1===n?t:0}})),c(Bt,"factory",(function(t){return O(t)||t<0||t>1?yt(NaN):function(n){return O(n)||n<0||n>1?NaN:n<=1-t?0:1}})),l(zt.prototype,"entropy",(function(){return O(t=this.p)||t<0||t>1?NaN:0===t||1===t?0:-(n=1-t)*at(n)-t*at(t);var t,n})),l(zt.prototype,"kurtosis",(function(){return O(t=this.p)||t<0||t>1?NaN:1/(t*(1-t))-6;var t})),l(zt.prototype,"mean",(function(){return O(t=this.p)||t<0||t>1?NaN:t;var t})),l(zt.prototype,"median",(function(){return O(t=this.p)||t<0||t>1?NaN:t<=.5?0:1;var t})),l(zt.prototype,"mode",(function(){return O(t=this.p)||t<0||t>1?NaN:t<=.5?0:1;var t})),l(zt.prototype,"skewness",(function(){return O(t=this.p)||t<0||t>1?NaN:0===t?ct:1===t?et:(1-2*t)/ft(t*(1-t));var t})),l(zt.prototype,"stdev",(function(){return O(t=this.p)||t<0||t>1?NaN:ft((1-t)*t);var t})),l(zt.prototype,"variance",(function(){return O(t=this.p)||t<0||t>1?NaN:t*(1-t);var t})),c(zt.prototype,"cdf",(function(t){return lt(t,this.p)})),c(zt.prototype,"mgf",(function(t){return Ct(t,this.p)})),c(zt.prototype,"pmf",(function(t){return Yt(t,this.p)})),c(zt.prototype,"quantile",(function(t){return Bt(t,this.p)})),zt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Bernoulli=n();
//# sourceMappingURL=browser.js.map
