/**
 * mill - Readable milliseconds for you and other humans.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/**
 * Assumptions:
 * 
 * 1 month = 30.4368499 days
 * 1 year = 365.242199 days
 */

/**
 * Dependencies.
 */
var package = require('package')(module);

/**
 * Time constructor.
 * 
 * @param {Number} number.
 */
function Time(number) {
  this.number = number;
};

/**
 * Converts years to milliseconds.
 * 
 * @returns {Number} milliseconds
 */
Time.prototype.years = function() {
  return this.number * 1000 * 60 * 60 * 24 * 365.242199;
};

/**
 * Converts months to milliseconds.
 * 
 * @returns {Number} milliseconds
 */
Time.prototype.months = function() {
  return this.number * 1000 * 60 * 60 * 24 * 30.4368499;
};

/**
 * Converts weeks to milliseconds.
 * 
 * @returns {Number} milliseconds
 */
Time.prototype.weeks = function() {
  return this.number * 1000 * 60 * 60 * 24 * 7;
};

/**
 * Converts days to milliseconds.
 * 
 * @returns {Number} milliseconds
 */
Time.prototype.days = function() {
  return this.number * 1000 * 60 * 60 * 24;
};

/**
 * Converts hours to milliseconds.
 * 
 * @returns {Number} milliseconds
 */
Time.prototype.hours = function() {
  return this.number * 1000 * 60 * 60;
};

/**
 * Converts minutes to milliseconds.
 * 
 * @returns {Number} milliseconds
 */
Time.prototype.minutes = function() {
  return this.number * 1000 * 60;
};

/**
 * Converts seconds to milliseconds.
 * 
 * @returns {Number} milliseconds
 */
Time.prototype.seconds = function() {
  return this.number * 1000;
};

/**
 * Exported methods map.
 */
var methods = {
  year: 'years',
  years: 'years',
  month: 'months',
  months: 'months',
  week: 'weeks',
  weeks: 'weeks',
  day: 'days',
  days: 'days',
  hour: 'hours',
  hours: 'hours',
  minute: 'minutes',
  minutes: 'minutes',
  second: 'seconds',
  seconds: 'seconds',
};

// Syntactic sugar.
Object.keys(methods).forEach(function(method) {
  Object.defineProperty(Number.prototype, method, {
    get: function() {
      var call = methods[method];
      return new Time(this)[call]();
    },
    set: function() {},
    configurable: true  
  });
});

/**
 * Exporting the lib.
 */
module.exports = Time;

/**
 * Exporting the methods map.
 */
module.exports.methods = methods;

/**
 * Exporting the lib version.
 */
module.exports.version = package.version;