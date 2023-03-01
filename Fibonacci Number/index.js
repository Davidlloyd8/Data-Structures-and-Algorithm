function fibnocciGenerator(n) {
  var output = [];
  if(n === 1) {
    output = [0];
  } else if(n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for(var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
    return output;
}
output = fibnocciGenerator(2);
console.log(output);



//E.g 2


let fib = function(N) {
    if (N <= 0) {
        return 0;
    } else if (N === 1) {
        return 1;
    } else {
        return fib(N-1) + fib(N-2)
    }
};

console.log(fib(3))