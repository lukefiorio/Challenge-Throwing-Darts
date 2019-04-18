// write tests here
//const chai = require('./../node_modules/chai/chai.js');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
var radiusScores = require('../index.js');

describe('Input', function() {
  it('should throw an error if radius scores are not in an array', function() {
    expect(function() {
      radiusScores('2, 4, 6, 8');
    }).to.throw('Not an array!');
  });
  it('should throw an error if radius scores are not all be numbers', function() {
    expect(function() {
      radiusScores([2, 4, '6', 8]);
    }).to.throw('Needs to be an array of numbers!');
  });
  it('should throw an error if radius scores outside valid range', function() {
    expect(function() {
      radiusScores([3, 7, 34]);
    }).to.throw('Missed the dartboard! (invalid radius)');
  });
});

describe('Output', function() {
  it('should return -1 if empty collection', function() {
    let results = radiusScores([]);
    expect(results).to.equal(-1);
  });
  // add test to make sure scores added correctly
  // add test to make sure bonus awarded correctly
});
