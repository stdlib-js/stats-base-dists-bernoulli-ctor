"use strict";var f=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var p=f(function(T,s){
var l=require('@stdlib/utils-define-property/dist'),n=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),t=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),o=require('@stdlib/assert-is-probability/dist').isPrimitive,c=require('@stdlib/stats-base-dists-bernoulli-entropy/dist'),v=require('@stdlib/stats-base-dists-bernoulli-kurtosis/dist'),m=require('@stdlib/stats-base-dists-bernoulli-mean/dist'),y=require('@stdlib/stats-base-dists-bernoulli-mode/dist'),g=require('@stdlib/stats-base-dists-bernoulli-median/dist'),q=require('@stdlib/stats-base-dists-bernoulli-skewness/dist'),h=require('@stdlib/stats-base-dists-bernoulli-stdev/dist'),b=require('@stdlib/stats-base-dists-bernoulli-variance/dist'),d=require('@stdlib/stats-base-dists-bernoulli-cdf/dist'),w=require('@stdlib/stats-base-dists-bernoulli-mgf/dist'),k=require('@stdlib/stats-base-dists-bernoulli-pmf/dist'),M=require('@stdlib/stats-base-dists-bernoulli-quantile/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function P(e){return d(e,this.p)}function F(e){return w(e,this.p)}function x(e){return k(e,this.p)}function E(e){return M(e,this.p)}function r(){var e;if(!(this instanceof r))return arguments.length===0?new r:new r(arguments[0]);if(arguments.length){if(e=arguments[0],!o(e))throw new TypeError(a('0uVDY',e))}else e=.5;return l(this,"p",{configurable:!1,enumerable:!0,get:function(){return e},set:function(u){if(!o(u))throw new TypeError(a('0uV8h',u));e=u}}),this;}t(r.prototype,"entropy",function(){return c(this.p)});t(r.prototype,"kurtosis",function(){return v(this.p)});t(r.prototype,"mean",function(){return m(this.p)});t(r.prototype,"median",function(){return g(this.p)});t(r.prototype,"mode",function(){return y(this.p)});t(r.prototype,"skewness",function(){return q(this.p)});t(r.prototype,"stdev",function(){return h(this.p)});t(r.prototype,"variance",function(){return b(this.p)});n(r.prototype,"cdf",P);n(r.prototype,"mgf",F);n(r.prototype,"pmf",x);n(r.prototype,"quantile",E);s.exports=r
});var O=p();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map