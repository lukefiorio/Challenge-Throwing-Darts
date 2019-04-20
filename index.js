function scoreCalculator(arr) {
  // not an array
  if (!Array.isArray(arr)) {
    throw new Error('Not an array!');
  }

  // not every element of array is a number
  const allNumbers = arr.every(function(elem) {
    return typeof elem === 'number';
  });
  if (!allNumbers) {
    throw new Error('Needs to be an array of numbers!');
  }

  // radius scores outside of valid range
  if (Math.max.apply(null, arr) > 20 || Math.min.apply(null, arr) < 1) {
    throw new Error('Missed the dartboard! (invalid radius)');
  }

  if (arr.length === 0) {
    return -1;
  }

  function radiusToScore(prev, cur) {
    let curScore = 0;
    if (cur >= 5 && cur <= 10) {
      curScore = 5;
    } else if (cur >= 1 && cur < 5) {
      curScore = 10;
    }
    return (prev += curScore);
  }

  let score = arr.reduce(radiusToScore, 0);
  let bonus = 0;

  // determine whether bonus should be awarded
  const awardBonus = arr.every(function(elem) {
    return elem < 5;
  });
  if (awardBonus) {
    bonus = 100;
  }

  return score + bonus;
}

module.exports = scoreCalculator;
console.log(scoreCalculator([1, 3, 5]));
