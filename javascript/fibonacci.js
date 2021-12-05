function fibonacci(num) {

  if (num < 2) {
    return num
  }

  let lastTwo = [0, 1];

  for (let i = 0; i < num - 1; ++i) {

    const sum = lastTwo[0] + lastTwo[1];
    lastTwo = [lastTwo[1], sum]

  }

  return lastTwo[1]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 610");
  console.log("=>", fibonacci(15));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
This is an interesting problem...

by entering a number, the function must return the specific value for that index in f's srries...
it would be absurd to write out f's series, so it must construct itself with its length according to the input,
then return the input's value... interesting

first i need to write a function that constructs a fibonacci series as an array, to whichever length as input


*/
