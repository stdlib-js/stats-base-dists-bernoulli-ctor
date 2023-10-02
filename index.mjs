// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-entropy@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-kurtosis@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mean@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mode@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-median@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-skewness@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-stdev@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-variance@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-cdf@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mgf@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-pmf@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-quantile@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function c(){var s;if(!(this instanceof c))return 0===arguments.length?new c:new c(arguments[0]);if(arguments.length){if(!i(s=arguments[0]))throw new TypeError(b("0uVHY",s))}else s=.5;return t(this,"p",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(b("0uV8h,HV",t));s=t}}),this}e(c.prototype,"entropy",(function(){return n(this.p)})),e(c.prototype,"kurtosis",(function(){return r(this.p)})),e(c.prototype,"mean",(function(){return o(this.p)})),e(c.prototype,"median",(function(){return p(this.p)})),e(c.prototype,"mode",(function(){return d(this.p)})),e(c.prototype,"skewness",(function(){return m(this.p)})),e(c.prototype,"stdev",(function(){return l(this.p)})),e(c.prototype,"variance",(function(){return u(this.p)})),s(c.prototype,"cdf",(function(t){return h(t,this.p)})),s(c.prototype,"mgf",(function(t){return j(t,this.p)})),s(c.prototype,"pmf",(function(t){return f(t,this.p)})),s(c.prototype,"quantile",(function(t){return a(t,this.p)}));export{c as default};
//# sourceMappingURL=index.mjs.map
