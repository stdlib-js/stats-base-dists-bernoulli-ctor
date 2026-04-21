<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Bernoulli

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Bernoulli distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-ctor@esm/index.mjs';
```

#### Bernoulli( \[p] )

Returns a [Bernoulli][bernoulli-distribution] distribution object.

```javascript
var bernoulli = new Bernoulli();

var mean = bernoulli.mean;
// returns 0.5
```

By default, `p = 0.5`. To create a distribution having a different success probability `p`, provide a parameter value.

```javascript
var bernoulli = new Bernoulli( 0.2 );

var mean = bernoulli.mean;
// returns 0.2
```

* * *

## bernoulli

A [Bernoulli][bernoulli-distribution] distribution object has the following properties and methods...

### Writable Properties

#### bernoulli.p

Success probability of the distribution. `p` **must** be a probability.

```javascript
var bernoulli = new Bernoulli( 0.2 );

var p = bernoulli.p;
// returns 0.2

bernoulli.p = 0.3;

p = bernoulli.p;
// returns 0.3
```

* * *

### Computed Properties

#### Bernoulli.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var entropy = bernoulli.entropy;
// returns ~0.673
```

#### Bernoulli.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var kurtosis = bernoulli.kurtosis;
// returns ~-1.833
```

#### Bernoulli.prototype.mean

Returns the [median][expected-value].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var mu = bernoulli.mean;
// returns 0.4
```

#### Bernoulli.prototype.median

Returns the [median][median].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var median = bernoulli.median;
// returns 0.0
```

#### Bernoulli.prototype.mode

Returns the [mode][mode].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var mode = bernoulli.mode;
// returns 0.0
```

#### Bernoulli.prototype.skewness

Returns the [skewness][skewness].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var skewness = bernoulli.skewness;
// returns ~0.408
```

#### Bernoulli.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var s = bernoulli.stdev;
// returns ~0.49
```

#### Bernoulli.prototype.variance

Returns the [variance][variance].

```javascript
var bernoulli = new Bernoulli( 0.4 );

var s2 = bernoulli.variance;
// returns 0.24
```

* * *

### Methods

#### Bernoulli.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.cdf( 0.5 );
// returns 0.8
```

#### Bernoulli.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.mgf( -3.0 );
// returns ~0.81
```

#### Bernoulli.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.pmf( 0.0 );
// returns 0.8

y = bernoulli.pmf( 1.0 );
// returns 0.2
```

#### Bernoulli.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var bernoulli = new Bernoulli( 0.2 );

var y = bernoulli.quantile( 0.5 );
// returns 0

y = bernoulli.quantile( 0.9 );
// returns 1
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-ctor@esm/index.mjs';

var bernoulli = new Bernoulli( 0.5 );

var mu = bernoulli.mean;
// returns 0.5

var s2 = bernoulli.variance;
// returns 0.25

var y = bernoulli.cdf( 2.0 );
// returns 1.0

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-bernoulli-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-bernoulli-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-bernoulli-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-bernoulli-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-bernoulli-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-bernoulli-ctor/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-bernoulli-ctor/main/LICENSE

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
