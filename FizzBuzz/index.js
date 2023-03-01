// const output = [];
// var count = 2;
// function fizzBuzz() {
//   if (count % 3 == 0 && count % 5 == 0) {
//     output.push("FizzBuzz");
//   } else if (count % 3 == 0) {
//     output.push("Fizz");
//   } else if (count % 5 == 0) {
//     output.push("Buzz");
//   } else {
//     output.push(count);
//   }
//   count++;
//   console.log(output);
// }

// fizzBuzz();

function fizzBuzz (n) {
    const output = []
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            output.push("FizzBuzz")
        else if (i % 3 == 0)
            output.push("Fizz")
        else if (i % 5 == 0)
            output.push("Buzz")
        else
            output.push(i.toString())
    }
    
    return output
};

console.log(fizzBuzz(15))