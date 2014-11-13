/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var sheetify = require('sheetify');
var prefix = require('../');
var fs = require('fs');

/**
 * Test
 */

describe('autoprefixer', function() {
  it('should prefix files', function(done) {
    var expects = fs.readFileSync(__dirname + '/fixtures/out.css', 'utf-8').trim();

    sheetify(__dirname + '/fixtures/in.css')
      .transform(prefix())
      .bundle(function(err, body) {
        (err === null).should.be.true;
        body.trim().should.eql(expects);
        console.log(body);
        done();
      });
  });
  it('should accept arguments')
});
