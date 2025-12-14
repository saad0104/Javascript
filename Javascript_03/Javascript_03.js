// Loop, Strings

// ################  Loop ##############

// for
let x = 5;
for (let i = 0; i < 10; i++) {
  console.log(++x);
}
// whhile
let i = 15;
while (i > 5) {
  console.log(i--);
}
// do-while
let j = 15;
do {
  console.log(j--);
} while (j > 5);

// for-of loop
let str = "WhiteWalkers";
for (let c of str) {
  console.log(c);
}
// for-in loop (for traversing element of object)
let lanisters = {
  father: "tywin",
  brother1: "Jammie",
  brother2: "Tarwin",
  sister: "Cersie",
};

for (let lns in lanisters) {
  console.log(lns, " ", lanisters[lns]);
}

// ############ String #############
// Strings are immutable in javascript

let phrase = "Winter is coming";

// Size
console.log(phrase.length);

console.log(phrase[0], " ", phrase[7], " ", phrase[10]);

// Template Literals
/*  
    Template Literals is a special types of string. We can embed expressions in string.
*/

let family = `${lanisters.father} is the father of Lanister family`;
console.log(family);

// Escape char (newline)
/*  
    \n -> newline
    \t -> tab space
*/
console.log("Hello, \n world");

// Special functions

let sentence = "ABCdef ghIj KlMn";

console.log(sentence.toUpperCase()); // Upper case
console.log(sentence.toLowerCase()); // Lower case
console.log(sentence.trim()); // trim, removes whitespace
console.log(sentence.slice(0, 3)); // Slice. returns part of the string

let s1 = "Joffrey";
let s2 = "Baratheon";
let s3 = s1 + s2; // Concates two strings
console.log(s3);
console.log(s1.concat(s2)); // Concates to string.

console.log(s3.replace("Baratheon", "Lanister")); // replace part of string

console.log(s3.charAt(3)); // character at position
