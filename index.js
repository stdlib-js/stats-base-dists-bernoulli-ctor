// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,p=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,w,"e"),e=l.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,g,"e-0$1"),r.alternate&&(e=l.call(e,h,"$1."),e=l.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):p.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,o,a,f,p,s,l;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",p=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(p=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[p],10),p+=1,E(e.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[p],10),p+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[p],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",p+=1}return f}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=j.exec(r);e;)(t=r.slice(i,j.lastIndex-e[0].length)).length&&n.push(t),n.push(k(e)),i=j.lastIndex,e=j.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){return"string"==typeof r}function T(r){var t,n,e;if(!F(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var O=Object.prototype,V=O.toString,H=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,P=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=O,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&H&&H.call(r,t,n.get),a&&$&&$.call(r,t,n.set),r};function W(r,t,n){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r,t,n){C(r,t,{configurable:!1,enumerable:!1,get:n})}function R(r){return"number"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"",B=Z()?function(r){var t,n,e,i,o;if(null==r)return q.call(r);n=r[z],o=z,t=null!=(i=r)&&Y.call(i,o);try{r[z]=void 0}catch(t){return q.call(r)}return e=q.call(r),t?r[z]=n:delete r[z],e}:function(r){return q.call(r)},D=Number,J=D.prototype.toString,K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return R(r)||Q(r)}function tr(r){return R(r)&&r>=0&&r<=1}function nr(r){return Q(r)&&r.valueOf()>=0&&r.valueOf()<=1}function er(r){return tr(r)||nr(r)}function ir(r){return r!=r}W(rr,"isPrimitive",R),W(rr,"isObject",Q),W(er,"isPrimitive",tr),W(er,"isObject",nr);var or,ar="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,t,n;if("function"!=typeof ur)return!1;try{t=new ur(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,pr=or,sr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),n=t,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,hr=fr,dr="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),n=t,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr=gr,Nr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Nr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:br,uint8:mr};(Er=new Ur.uint16(1))[0]=4660;var Ir=52===new Ur.uint8(Er.buffer)[0],Sr=!0===Ir?1:0,jr=new hr(1),kr=new pr(jr.buffer);function xr(r){return jr[0]=r,kr[Sr]}var Fr=!0===Ir?1:0,Tr=new hr(1),Or=new pr(Tr.buffer),Vr=1023,Hr=D.NEGATIVE_INFINITY,$r=.6931471803691238,Gr=1.9082149292705877e-10,Pr=1048575;function Cr(r){var t,n,e,i,o,a,u,c,f,p,s,l;return 0===r?Hr:ir(r)||r<0?NaN:(o=0,(n=xr(r))<1048576&&(o-=54,n=xr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-Vr|0,o+=(c=614244+(n&=Pr)&1048576|0)>>20|0,u=(r=function(r,t){return Tr[0]=r,Or[Fr]=t>>>0,Tr[0]}(r,n|1072693248^c))-1,(Pr&2+n)<3?0===u?0===o?0:o*$r+o*Gr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*$r-(a-o*Gr-u)):(c=n-398458|0,f=440401-n|0,i=(s=(l=(p=u/(2+u))*p)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=e+i,(c|=f)>0?(t=.5*u*u,0===o?u-(t-p*(t+a)):o*$r-(t-(p*(t+a)+o*Gr)-u)):0===o?u-p*(u-a):o*$r-(p*(u-a)-o*Gr-u))))}var Wr=Math.sqrt,Lr=Number.POSITIVE_INFINITY,Rr=Math.sqrt;function Mr(r,t){return ir(r)||ir(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function Zr(r){return r>=0&&r<=1}W(Mr,"factory",(function(r){return ir(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){return ir(t)?NaN:t<0?0:t>=1?1:1-r};var t}));var qr,Yr,Xr=Math.floor,zr=Math.ceil;function Br(r){return r<0?zr(r):Xr(r)}function Dr(r){return r===Lr||r===Hr}!0===Ir?(qr=1,Yr=0):(qr=0,Yr=1);var Jr,Kr,Qr={HIGH:qr,LOW:Yr},rt=new hr(1),tt=new pr(rt.buffer),nt=Qr.HIGH,et=Qr.LOW;function it(r,t,n,e){return rt[0]=r,t[e]=tt[nt],t[e+n]=tt[et],t}function ot(r){return it(r,[0,0],1,0)}W(ot,"assign",it),!0===Ir?(Jr=1,Kr=0):(Jr=0,Kr=1);var at={HIGH:Jr,LOW:Kr},ut=new hr(1),ct=new pr(ut.buffer),ft=at.HIGH,pt=at.LOW;function st(r,t){return ct[ft]=r,ct[pt]=t,ut[0]}var lt=[0,0];function yt(r,t,n,e){return ir(r)||Dr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}W((function(r){return yt(r,[0,0],1,0)}),"assign",yt);var gt=[0,0],ht=[0,0];function dt(r,t){var n,e,i,o,a,u;return 0===t||0===r||ir(r)||Dr(r)?r:(yt(r,gt,1,0),t+=gt[1],t+=function(r){var t=xr(r);return(t=(2146435072&t)>>>20)-Vr|0}(r=gt[0]),t<-1074?(i=0,o=r,ot.assign(i,lt,1,0),a=lt[0],a&=2147483647,u=xr(o),st(a|=u&=2147483648,lt[1])):t>1023?r<0?Hr:Lr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ot.assign(r,ht,1,0),n=ht[0],n&=2148532223,e*st(n|=t+Vr<<20,ht[1])))}var vt=1.4426950408889634,wt=1/(1<<28);function bt(r){var t;return ir(r)||r===Lr?r:r===Hr?0:r>709.782712893384?Lr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<wt?1+r:function(r,t,n){var e,i,o,a;return dt(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=Br(r<0?vt*r-.5:vt*r+.5)),1.9082149292705877e-10*t,t)}function mt(r,t){return ir(r)||!Zr(t)?NaN:1-t+t*bt(r)}function Nt(r,t){return ir(r)||ir(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function At(r,t){return ir(t)||ir(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function _t(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function Et(){var r;if(!(this instanceof Et))return 0===arguments.length?new Et:new Et(arguments[0]);if(arguments.length){if(!tr(r=arguments[0]))throw new TypeError(_t("0uVHY",r))}else r=.5;return C(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!tr(t))throw new TypeError(_t("0uV8h,HV",t));r=t}}),this}return W(mt,"factory",(function(r){return Zr(r)?function(t){return ir(t)?NaN:1-r+r*bt(t)}:(t=NaN,function(){return t});var t})),W(Nt,"factory",(function(r){return ir(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){return ir(t)?NaN:0===t?1-r:1===t?r:0};var t})),W(At,"factory",(function(r){return ir(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){return ir(t)||t<0||t>1?NaN:t<=1-r?0:1};var t})),L(Et.prototype,"entropy",(function(){return ir(r=this.p)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*Cr(t)-r*Cr(r);var r,t})),L(Et.prototype,"kurtosis",(function(){return ir(r=this.p)||r<0||r>1?NaN:1/(r*(1-r))-6;var r})),L(Et.prototype,"mean",(function(){return ir(r=this.p)||r<0||r>1?NaN:r;var r})),L(Et.prototype,"median",(function(){return ir(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),L(Et.prototype,"mode",(function(){return ir(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),L(Et.prototype,"skewness",(function(){return ir(r=this.p)||r<0||r>1?NaN:0===r?Lr:1===r?Hr:(1-2*r)/Wr(r*(1-r));var r})),L(Et.prototype,"stdev",(function(){return ir(r=this.p)||r<0||r>1?NaN:Rr((1-r)*r);var r})),L(Et.prototype,"variance",(function(){return ir(r=this.p)||r<0||r>1?NaN:r*(1-r);var r})),W(Et.prototype,"cdf",(function(r){return Mr(r,this.p)})),W(Et.prototype,"mgf",(function(r){return mt(r,this.p)})),W(Et.prototype,"pmf",(function(r){return Nt(r,this.p)})),W(Et.prototype,"quantile",(function(r){return At(r,this.p)})),Et},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Bernoulli=t();
//# sourceMappingURL=index.js.map
