// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,p=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,w,"e"),e=l.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,v,"e-0$1"),r.alternate&&(e=l.call(e,g,"$1."),e=l.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):p.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,a,o,f,p,s,l;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",p=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(p=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[p],10),p+=1,E(e.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[p],10),p+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[p],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(o)?String(e.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",p+=1}return f}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=j.exec(r);e;)(t=r.slice(i,j.lastIndex-e[0].length)).length&&n.push(t),n.push(k(e)),i=j.lastIndex,e=j.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){return"string"==typeof r}function O(r){var t,n,e;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var T=Object.prototype,V=T.toString,H=T.__defineGetter__,$=T.__defineSetter__,G=T.__lookupGetter__,P=T.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=T,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&H&&H.call(r,t,n.get),o&&$&&$.call(r,t,n.set),r};function W(r,t,n){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r,t,n){C(r,t,{configurable:!1,enumerable:!1,get:n})}function R(r){return"number"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";var B=Z()?function(r){var t,n,e,i,a;if(null==r)return q.call(r);n=r[z],a=z,t=null!=(i=r)&&Y.call(i,a);try{r[z]=void 0}catch(t){return q.call(r)}return e=q.call(r),t?r[z]=n:delete r[z],e}:function(r){return q.call(r)},D=Number,J=D.prototype.toString;var K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return R(r)||Q(r)}function tr(r){return R(r)&&r>=0&&r<=1}function nr(r){return Q(r)&&r.valueOf()>=0&&r.valueOf()<=1}function er(r){return tr(r)||nr(r)}function ir(r){return r!=r}W(rr,"isPrimitive",R),W(rr,"isObject",Q),W(er,"isPrimitive",tr),W(er,"isObject",nr);var ar="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var ur,cr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,pr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var lr,yr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr([1,3.14,-3.14,NaN]),n=t,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=lr,gr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var dr,wr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,n;if("function"!=typeof hr)return!1;try{t=new hr(t=[1,3.14,-3.14,256,257]),n=t,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br=dr,mr="function"==typeof Uint16Array;var Nr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(mr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:Ar,uint8:br};(Er=new Ur.uint16(1))[0]=4660;var Ir=52===new Ur.uint8(Er.buffer)[0],Sr=!0===Ir?1:0,jr=new vr(1),kr=new fr(jr.buffer);function xr(r){return jr[0]=r,kr[Sr]}var Fr=!0===Ir?1:0,Or=new vr(1),Tr=new fr(Or.buffer);var Vr=D.NEGATIVE_INFINITY;var Hr=.6931471803691238,$r=1.9082149292705877e-10;function Gr(r){var t,n,e,i,a,o,u,c,f,p,s,l;return 0===r?Vr:ir(r)||r<0?NaN:(a=0,(n=xr(r))<1048576&&(a-=54,n=xr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,t){return Or[0]=r,Tr[Fr]=t>>>0,Or[0]}(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===a?0:a*Hr+a*$r:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Hr-(o-a*$r-u)):(c=n-398458|0,f=440401-n|0,i=(s=(l=(p=u/(2+u))*p)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=e+i,(c|=f)>0?(t=.5*u*u,0===a?u-(t-p*(t+o)):a*Hr-(t-(p*(t+o)+a*$r)-u)):0===a?u-p*(u-o):a*Hr-(p*(u-o)-a*$r-u))))}var Pr=Math.sqrt,Cr=Number.POSITIVE_INFINITY;var Wr=Math.sqrt;function Lr(r,t){return ir(r)||ir(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function Rr(r){return r>=0&&r<=1}W(Lr,"factory",(function(r){return ir(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){if(ir(t))return NaN;if(t<0)return 0;if(t>=1)return 1;return 1-r};var t}));var Mr=Math.floor,Zr=Math.ceil;function qr(r){return r<0?Zr(r):Mr(r)}function Yr(r){return r===Cr||r===Vr}var Xr,zr;!0===Ir?(Xr=1,zr=0):(Xr=0,zr=1);var Br,Dr,Jr={HIGH:Xr,LOW:zr},Kr=new vr(1),Qr=new fr(Kr.buffer),rt=Jr.HIGH,tt=Jr.LOW;function nt(r,t,n,e){return Kr[0]=r,t[e]=Qr[rt],t[e+n]=Qr[tt],t}function et(r){return nt(r,[0,0],1,0)}W(et,"assign",nt),!0===Ir?(Br=1,Dr=0):(Br=0,Dr=1);var it={HIGH:Br,LOW:Dr},at=new vr(1),ot=new fr(at.buffer),ut=it.HIGH,ct=it.LOW;function ft(r,t){return ot[ut]=r,ot[ct]=t,at[0]}var pt=[0,0];function st(r,t,n,e){return ir(r)||Yr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}W((function(r){return st(r,[0,0],1,0)}),"assign",st);var lt=[0,0],yt=[0,0];function vt(r,t){var n,e,i,a,o,u;return 0===t||0===r||ir(r)||Yr(r)?r:(st(r,lt,1,0),t+=lt[1],t+=function(r){var t=xr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=lt[0]),t<-1074?(i=0,a=r,et.assign(i,pt,1,0),o=pt[0],o&=2147483647,u=xr(a),ft(o|=u&=2147483648,pt[1])):t>1023?r<0?Vr:Cr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,et.assign(r,yt,1,0),n=yt[0],n&=2148532223,e*ft(n|=t+1023<<20,yt[1])))}function gt(r){var t;return ir(r)||r===Cr?r:r===Vr?0:r>709.782712893384?Cr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,i,a,o;return vt(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=qr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function ht(r,t){return ir(r)||!Rr(t)?NaN:1-t+t*gt(r)}function dt(r,t){return ir(r)||ir(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function wt(r,t){return ir(t)||ir(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function bt(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function mt(){var r;if(!(this instanceof mt))return 0===arguments.length?new mt:new mt(arguments[0]);if(arguments.length){if(!tr(r=arguments[0]))throw new TypeError(bt("0uVHY",r))}else r=.5;return C(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!tr(t))throw new TypeError(bt("0uV8h,HV",t));r=t}}),this}W(ht,"factory",(function(r){return Rr(r)?function(t){if(ir(t))return NaN;return 1-r+r*gt(t)}:(t=NaN,function(){return t});var t})),W(dt,"factory",(function(r){return ir(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){if(ir(t))return NaN;if(0===t)return 1-r;if(1===t)return r;return 0};var t})),W(wt,"factory",(function(r){return ir(r)||r<0||r>1?(t=NaN,function(){return t}):function(t){if(ir(t)||t<0||t>1)return NaN;if(t<=1-r)return 0;return 1};var t})),L(mt.prototype,"entropy",(function(){return ir(r=this.p)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*Gr(t)-r*Gr(r);var r,t})),L(mt.prototype,"kurtosis",(function(){return ir(r=this.p)||r<0||r>1?NaN:1/(r*(1-r))-6;var r})),L(mt.prototype,"mean",(function(){return ir(r=this.p)||r<0||r>1?NaN:r;var r})),L(mt.prototype,"median",(function(){return ir(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),L(mt.prototype,"mode",(function(){return ir(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),L(mt.prototype,"skewness",(function(){return ir(r=this.p)||r<0||r>1?NaN:0===r?Cr:1===r?Vr:(1-2*r)/Pr(r*(1-r));var r})),L(mt.prototype,"stdev",(function(){return ir(r=this.p)||r<0||r>1?NaN:Wr((1-r)*r);var r})),L(mt.prototype,"variance",(function(){return ir(r=this.p)||r<0||r>1?NaN:r*(1-r);var r})),W(mt.prototype,"cdf",(function(r){return Lr(r,this.p)})),W(mt.prototype,"mgf",(function(r){return ht(r,this.p)})),W(mt.prototype,"pmf",(function(r){return dt(r,this.p)})),W(mt.prototype,"quantile",(function(r){return wt(r,this.p)}));export{mt as default};
//# sourceMappingURL=mod.js.map