/**
 * Module dependencies
 */

var autoprefixer = require('autoprefixer-core');
var through = require('through');
var assert = require('assert');

/**
 * Expose `transform()`.
 */

module.exports = transform;

/**
 * Text-transform `autoPrefixer()`.
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

function transform(opts) {
  var src = '';
  var buffer = [];
  var opts = opts || {};
  var prefixes = autoprefixer({browsers: opts.browsers});

  return function autoprefix(file) {
    if (/\.css$/.test(file)) return through();

    return through(write, flush);

    function write(data) {
      buffer.push(data);
    }

    function flush() {
      var source = buffer.join('');
      var nw = prefixes.process(source, {from: src, to: src}).css;
      return nw;
    }
  }
}
