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
  it('should throw an error if radius scores are not all numbers', function() {
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
    let input = [];
    let results = radiusScores(input);
    expect(results).to.equal(-1);
  });

  it('should add scores correctly', function() {
    let input = [3, 7, 9, 2, 11];
    let results = radiusScores(input);
    expect(results).to.equal(30);
  });

  it('should award 100-point bonus if all radius <5', function() {
    let input = [3, 4, 1, 2];
    let results = radiusScores(input);
    expect(results).to.equal(140);
  });
  // add test to make sure scores added correctly
  // add test to make sure bonus awarded correctly
});
