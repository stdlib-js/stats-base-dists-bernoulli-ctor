/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isProbability = require( '@stdlib/assert-is-probability' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-bernoulli-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-bernoulli-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-bernoulli-mean' );
var mode = require( '@stdlib/stats-base-dists-bernoulli-mode' );
var median = require( '@stdlib/stats-base-dists-bernoulli-median' );
var skewness = require( '@stdlib/stats-base-dists-bernoulli-skewness' );
var stdev = require( '@stdlib/stats-base-dists-bernoulli-stdev' );
var variance = require( '@stdlib/stats-base-dists-bernoulli-variance' );
var cdf = require( '@stdlib/stats-base-dists-bernoulli-cdf' );
var mgf = require( '@stdlib/stats-base-dists-bernoulli-mgf' );
var pmf = require( '@stdlib/stats-base-dists-bernoulli-pmf' );
var quantile = require( '@stdlib/stats-base-dists-bernoulli-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function bernoulliCDF( x ) {
	return cdf( x, this.p );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function bernoulliMGF( t ) {
	return mgf( t, this.p );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PMF
*/
function bernoulliPMF( x ) {
	return pmf( x, this.p );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function bernoulliQuantile( p ) {
	return quantile( p, this.p );
}


// MAIN //

/**
* Bernoulli distribution constructor.
*
* @constructor
* @param {Probability} [p=0.5] - success probability
* @throws {TypeError} `p` must be a probability
* @returns {Bernoulli} distribution instance
*
* @example
* var bernoulli = new Bernoulli();
*
* var y = bernoulli.cdf( 1.8 );
* // returns 1.0
*
* var v = bernoulli.median;
* // returns 0.0
*/
function Bernoulli() {
	var p;
	if ( !(this instanceof Bernoulli) ) {
		if ( arguments.length === 0 ) {
			return new Bernoulli();
		}
		return new Bernoulli( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		p = arguments[ 0 ];
		if ( !isProbability( p ) ) {
			throw new TypeError( format( 'invalid argument. Mean parameter must be a probability. Value: `%s`.', p ) );
		}
	} else {
		p = 0.5;
	}
	defineProperty( this, 'p', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return p;
		},
		'set': function set( value ) {
			if ( !isProbability( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a probability. Value: `%s`.', value ) );
			}
			p = value;
		}
	});
	return this;
}

/**
* Bernoulli distribution differential entropy.
*
* @name entropy
* @memberof Bernoulli.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.entropy;
* // returns ~0.673
*/
setReadOnlyAccessor( Bernoulli.prototype, 'entropy', function get() {
	return entropy( this.p );
});

/**
* Bernoulli distribution excess kurtosis.
*
* @name kurtosis
* @memberof Bernoulli.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.kurtosis;
* // returns ~-1.833
*/
setReadOnlyAccessor( Bernoulli.prototype, 'kurtosis', function get() {
	return kurtosis( this.p );
});

/**
* Bernoulli distribution expected value.
*
* @name mean
* @memberof Bernoulli.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.mean;
* // returns 0.4
*/
setReadOnlyAccessor( Bernoulli.prototype, 'mean', function get() {
	return mean( this.p );
});

/**
* Bernoulli distribution median.
*
* @name median
* @memberof Bernoulli.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.median;
* // returns 0.0
*/
setReadOnlyAccessor( Bernoulli.prototype, 'median', function get() {
	return median( this.p );
});

/**
* Bernoulli distribution mode.
*
* @name mode
* @memberof Bernoulli.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.mode;
* // returns 0.0
*/
setReadOnlyAccessor( Bernoulli.prototype, 'mode', function get() {
	return mode( this.p );
});

/**
* Bernoulli distribution skewness.
*
* @name skewness
* @memberof Bernoulli.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.skewness;
* // returns ~0.408
*/
setReadOnlyAccessor( Bernoulli.prototype, 'skewness', function get() {
	return skewness( this.p );
});

/**
* Bernoulli distribution standard deviation.
*
* @name stdev
* @memberof Bernoulli.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.stdev;
* // returns ~0.49
*/
setReadOnlyAccessor( Bernoulli.prototype, 'stdev', function get() {
	return stdev( this.p );
});

/**
* Bernoulli distribution variance.
*
* @name variance
* @memberof Bernoulli.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var bernoulli = new Bernoulli( 0.4 );
*
* var v = bernoulli.variance;
* // returns 0.24
*/
setReadOnlyAccessor( Bernoulli.prototype, 'variance', function get() {
	return variance( this.p );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Bernoulli.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var bernoulli = new Bernoulli( 0.2 );
*
* var v = bernoulli.cdf( 1.5 );
* // returns 1.0
*/
setReadOnly( Bernoulli.prototype, 'cdf', bernoulliCDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Bernoulli.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var bernoulli = new Bernoulli( 0.2 );
*
* var v = bernoulli.mgf( -3.0 );
* // returns ~0.81
*/
setReadOnly( Bernoulli.prototype, 'mgf', bernoulliMGF );

/**
* Evaluates the probability mass function (PMF).
*
* @name pmf
* @memberof Bernoulli.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var bernoulli = new Bernoulli( 0.2 );
*
* var v = bernoulli.pmf( 1.0 );
* // returns 0.2
*
* v = bernoulli.pmf( 0.0 );
* // returns 0.8
*/
setReadOnly( Bernoulli.prototype, 'pmf', bernoulliPMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Bernoulli.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var bernoulli = new Bernoulli( 0.2 );
*
* var v = bernoulli.quantile( 0.9 );
* // returns 1.0
*/
setReadOnly( Bernoulli.prototype, 'quantile', bernoulliQuantile );


// EXPORTS //

module.exports = Bernoulli;
