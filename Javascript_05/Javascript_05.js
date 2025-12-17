// Functions and Methods

let name = "Santan Clegane";

function myfunction() {
  console.log("Hello ", name);
}
myfunction();

let pi = 3.1416;
function area(radius) {
  return pi * radius ** 2;
}
console.log(area(2));

// compact function / Arrow function

const greet = (name) => {
  console.log("Hi", name);
};

greet("Arry");

// count vowels in a string

let str = "WinterIsComing";
function countVowel(st) {
  let count = 0;
  for (const ch of st) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++;
    }
  }
  return count;
}

console.log(countVowel(str.toLowerCase()));

// ########## methods ######

// forEach
// higher order function(a function whose parameter is another function
// or returns a function)
// parameters forEach(val, idx, arr)

let arr = [1, 2, 3, 4, 5];

arr.forEach((val, idx) => {
  console.log(val, idx);
});

// Map
// creats a new array with the result of some operation

let cc = [1, 2, 3, 4, 5];

let ccsq = cc.map((val) => {
  return val * val;
});

console.log(ccsq);

// filter
// returns a new array of elements that are true for a condition

let isEven = cc.filter((val) => {
  return val % 2 === 0;
});

console.log(isEven);

// reduce
// performs some operations and reduces ther array into single value and returns that value

let ccc = [1, 2, 3, 4, 5];

const output = ccc.reduce((res, curr) => {
  return res + curr;
});
console.log(output); // sum of the array

const largest = ccc.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(largest); // finding the largest element using reduce
