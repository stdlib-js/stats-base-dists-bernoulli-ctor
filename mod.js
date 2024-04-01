// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,w,"$1e"),e=s.call(e,d,"e"),e=s.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,l,"e+0$1"),e=s.call(e,y,"e-0$1"),r.alternate&&(e=s.call(e,v,"$1."),e=s.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,a,o,c,f,p,s,l,y,v,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,p=0;p<r.length;p++)if(e=r[p],"string"==typeof e)c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(a=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,A(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!A(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,v=e.padRight,g=void 0,(g=y-l.length)<0?l:l=v?l+m(g):m(g)+l)),c+=e.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,i;for(n=[],i=0,e=I.exec(r);e;)(t=r.slice(i,I.lastIndex-e[0].length)).length&&n.push(t),n.push(S(e)),i=I.lastIndex,e=I.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function k(r){var t,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var x=Object.prototype,F=x.toString,O=x.__defineGetter__,T=x.__defineSetter__,V=x.__lookupGetter__,$=x.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||$.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,t,n.get),o&&T&&T.call(r,t,n.set),r};function P(r,t,n){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r,t,n){G(r,t,{configurable:!1,enumerable:!1,get:n})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Z?Z.toStringTag:"";var q=L()?function(r){var t,n,e,i,a;if(null==r)return R.call(r);n=r[Y],a=Y,t=null!=(i=r)&&M.call(i,a);try{r[Y]=void 0}catch(t){return R.call(r)}return e=R.call(r),t?r[Y]=n:delete r[Y],e}:function(r){return R.call(r)},X=Number,z=X.prototype.toString;var D=L();function B(r){return"object"==typeof r&&(r instanceof X||(D?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function J(r){return H(r)||B(r)}function K(r){return H(r)&&r>=0&&r<=1}function Q(r){return B(r)&&r.valueOf()>=0&&r.valueOf()<=1}function rr(r){return K(r)||Q(r)}function tr(r){return r!=r}P(J,"isPrimitive",H),P(J,"isObject",B),P(rr,"isPrimitive",K),P(rr,"isObject",Q);var nr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var ir,ar="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,t,n;if("function"!=typeof er)return!1;try{t=new er(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(nr&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var fr,pr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),n=t,r=(ur&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,gr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),n=t,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr=vr,dr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null;var br,mr="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Nr,Ar={uint16:br,uint8:hr};(Nr=new Ar.uint16(1))[0]=4660;var _r=52===new Ar.uint8(Nr.buffer)[0],Er=!0===_r?1:0,Ur=new sr(1),Ir=new or(Ur.buffer);function Sr(r){return Ur[0]=r,Ir[Er]}var jr=!0===_r?1:0,kr=new sr(1),xr=new or(kr.buffer);var Fr=1023,Or=X.NEGATIVE_INFINITY;var Tr=.6931471803691238,Vr=1.9082149292705877e-10,$r=0x40000000000000,Gr=.3333333333333333,Pr=1048575,Cr=2146435072,Hr=1048576,Wr=1072693248;function Lr(r){var t,n,e,i,a,o,u,c,f,p,s,l;return 0===r?Or:tr(r)||r<0?NaN:(a=0,(n=Sr(r))<Hr&&(a-=54,n=Sr(r*=$r)),n>=Cr?r+r:(a+=(n>>20)-Fr|0,a+=(c=(n&=Pr)+614244&1048576|0)>>20|0,u=(r=function(r,t){return kr[0]=r,xr[jr]=t>>>0,kr[0]}(r,n|c^Wr))-1,(Pr&2+n)<3?0===u?0===a?0:a*Tr+a*Vr:(o=u*u*(.5-Gr*u),0===a?u-o:a*Tr-(o-a*Vr-u)):(c=n-398458|0,f=440401-n|0,i=(s=(l=(p=u/(2+u))*p)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=e+i,(c|=f)>0?(t=.5*u*u,0===a?u-(t-p*(t+o)):a*Tr-(t-(p*(t+o)+a*Vr)-u)):0===a?u-p*(u-o):a*Tr-(p*(u-o)-a*Vr-u))))}var Rr=Math.sqrt,Mr=Number.POSITIVE_INFINITY;function Zr(r,t){return tr(r)||tr(t)||t<0||t>1?NaN:r<0?0:r>=1?1:1-t}function Yr(r){return function(){return r}}function qr(r){return r>=0&&r<=1}P(Zr,"factory",(function(r){return tr(r)||r<0||r>1?Yr(NaN):function(t){if(tr(t))return NaN;if(t<0)return 0;if(t>=1)return 1;return 1-r}}));var Xr=Math.floor,zr=Math.ceil;function Dr(r){return r<0?zr(r):Xr(r)}var Br=1023,Jr=-1023,Kr=-1074;function Qr(r){return r===Mr||r===Or}var rt,tt,nt=2147483648,et=2147483647;!0===_r?(rt=1,tt=0):(rt=0,tt=1);var it,at,ot={HIGH:rt,LOW:tt},ut=new sr(1),ct=new or(ut.buffer),ft=ot.HIGH,pt=ot.LOW;function st(r,t,n,e){return ut[0]=r,t[e]=ct[ft],t[e+n]=ct[pt],t}function lt(r){return st(r,[0,0],1,0)}P(lt,"assign",st),!0===_r?(it=1,at=0):(it=0,at=1);var yt={HIGH:it,LOW:at},vt=new sr(1),gt=new or(vt.buffer),ht=yt.HIGH,dt=yt.LOW;function wt(r,t){return gt[ht]=r,gt[dt]=t,vt[0]}var bt=[0,0];var mt=22250738585072014e-324;var Nt=4503599627370496;function At(r,t,n,e){return tr(r)||Qr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<mt?(t[e]=r*Nt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}P((function(r){return At(r,[0,0],1,0)}),"assign",At);var _t=2146435072;var Et=2220446049250313e-31,Ut=2148532223,It=[0,0],St=[0,0];function jt(r,t){var n,e,i,a,o,u;return 0===t||0===r||tr(r)||Qr(r)?r:(At(r,It,1,0),r=It[0],t+=It[1],t+=function(r){var t=Sr(r);return(t=(t&_t)>>>20)-Fr|0}(r),t<Kr?(i=0,a=r,lt.assign(i,bt,1,0),o=bt[0],o&=et,u=Sr(a),wt(o|=u&=nt,bt[1])):t>Br?r<0?Or:Mr:(t<=Jr?(t+=52,e=Et):e=1,lt.assign(r,St,1,0),n=St[0],n&=Ut,e*wt(n|=t+Fr<<20,St[1])))}var kt=.6931471803691238,xt=1.9082149292705877e-10,Ft=1.4426950408889634,Ot=709.782712893384,Tt=-745.1332191019411,Vt=1/(1<<28),$t=-Vt;function Gt(r){var t;return tr(r)||r===Mr?r:r===Or?0:r>Ot?Mr:r<Tt?0:r>$t&&r<Vt?1+r:function(r,t,n){var e,i,a,o;return jt(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(t=Dr(r<0?Ft*r-.5:Ft*r+.5))*kt,t*xt,t)}function Pt(r,t){return tr(r)||!qr(t)?NaN:1-t+t*Gt(r)}function Ct(r,t){return tr(r)||tr(t)||t<0||t>1?NaN:0===r?1-t:1===r?t:0}function Ht(r,t){return tr(t)||tr(r)||t<0||t>1||r<0||r>1?NaN:r<=1-t?0:1}function Wt(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Lt(){var r;if(!(this instanceof Lt))return 0===arguments.length?new Lt:new Lt(arguments[0]);if(arguments.length){if(!K(r=arguments[0]))throw new TypeError(Wt("0uVDY",r))}else r=.5;return G(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!K(t))throw new TypeError(Wt("0uV8h",t));r=t}}),this}P(Pt,"factory",(function(r){return qr(r)?function(t){if(tr(t))return NaN;return 1-r+r*Gt(t)}:Yr(NaN)})),P(Ct,"factory",(function(r){return tr(r)||r<0||r>1?Yr(NaN):function(t){if(tr(t))return NaN;if(0===t)return 1-r;if(1===t)return r;return 0}})),P(Ht,"factory",(function(r){return tr(r)||r<0||r>1?Yr(NaN):function(t){if(tr(t)||t<0||t>1)return NaN;if(t<=1-r)return 0;return 1}})),C(Lt.prototype,"entropy",(function(){return tr(r=this.p)||r<0||r>1?NaN:0===r||1===r?0:-(t=1-r)*Lr(t)-r*Lr(r);var r,t})),C(Lt.prototype,"kurtosis",(function(){return tr(r=this.p)||r<0||r>1?NaN:1/(r*(1-r))-6;var r})),C(Lt.prototype,"mean",(function(){return tr(r=this.p)||r<0||r>1?NaN:r;var r})),C(Lt.prototype,"median",(function(){return tr(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),C(Lt.prototype,"mode",(function(){return tr(r=this.p)||r<0||r>1?NaN:r<=.5?0:1;var r})),C(Lt.prototype,"skewness",(function(){return tr(r=this.p)||r<0||r>1?NaN:0===r?Mr:1===r?Or:(1-2*r)/Rr(r*(1-r));var r})),C(Lt.prototype,"stdev",(function(){return tr(r=this.p)||r<0||r>1?NaN:Rr((1-r)*r);var r})),C(Lt.prototype,"variance",(function(){return tr(r=this.p)||r<0||r>1?NaN:r*(1-r);var r})),P(Lt.prototype,"cdf",(function(r){return Zr(r,this.p)})),P(Lt.prototype,"mgf",(function(r){return Pt(r,this.p)})),P(Lt.prototype,"pmf",(function(r){return Ct(r,this.p)})),P(Lt.prototype,"quantile",(function(r){return Ht(r,this.p)}));export{Lt as default};
//# sourceMappingURL=mod.js.map
