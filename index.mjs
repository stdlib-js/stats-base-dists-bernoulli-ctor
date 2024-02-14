// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-probability@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-entropy@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-kurtosis@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mean@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mode@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-median@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-skewness@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-stdev@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-variance@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-cdf@v0.2.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mgf@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-pmf@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-quantile@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function v(){var s;if(!(this instanceof v))return 0===arguments.length?new v:new v(arguments[0]);if(arguments.length){if(!i(s=arguments[0]))throw new TypeError(f("invalid argument. Mean parameter must be a probability. Value: `%s`.",s))}else s=.5;return t(this,"p",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(f("invalid assignment. Must be a probability. Value: `%s`.",t));s=t}}),this}e(v.prototype,"entropy",(function(){return n(this.p)})),e(v.prototype,"kurtosis",(function(){return r(this.p)})),e(v.prototype,"mean",(function(){return o(this.p)})),e(v.prototype,"median",(function(){return m(this.p)})),e(v.prototype,"mode",(function(){return d(this.p)})),e(v.prototype,"skewness",(function(){return p(this.p)})),e(v.prototype,"stdev",(function(){return l(this.p)})),e(v.prototype,"variance",(function(){return a(this.p)})),s(v.prototype,"cdf",(function(t){return u(t,this.p)})),s(v.prototype,"mgf",(function(t){return b(t,this.p)})),s(v.prototype,"pmf",(function(t){return h(t,this.p)})),s(v.prototype,"quantile",(function(t){return j(t,this.p)}));export{v as default};
//# sourceMappingURL=index.mjs.map
