// A happy number is a number defined by the following process: - Starting with any positive integer, replace the number by the sum of the squares of its digits.
// - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

console.log(isHappy(18));


//E.g 2


var isHappy = function(n) {
    var map = {};
    var tmp = 0;
  
    if (n < 1) return false;
  
    while (n !== 1 && !map[n]) {
      map[n] = true;
      tmp = 0;
  
      while (n > 0) {
        tmp += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
      }
  
      n = tmp;
    }
  
    return n === 1;
  };

  console.log(isHappy(19));


//E.g 3


var isHappy = function(n) {
    var fast = n;
    var slow = n;
  
    if (n < 1) return false;
  
    do {
      slow = getsumsquare(slow);
      fast = getsumsquare(getsumsquare(fast));
    } while (slow !== fast);
  
    return slow === 1;
  };
  
  var getsumsquare = function (n) {
    var sum = 0;
    var tmp = 0;
  
    while (n > 0) {
      tmp = n % 10;
      sum += tmp * tmp;
      n = Math.floor(n / 10);
    }
  
    return sum;
  };

  console.log(isHappy(20));