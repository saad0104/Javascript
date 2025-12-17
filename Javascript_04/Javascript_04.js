// Array

/* array -> collection of items. can store different data types in a single array.
            arrays are mutable.
*/

let marks = [10, 12, 14, 25, 27, 29];

console.log(marks[0]);

let info = ["Hound", 23701078, "CSE"];

console.log(info[1]);

// size of array
console.log(info.length);

console.log(marks);

// iterating through an array

for (let i = 0; i < info.length; i++) {
  console.log(info[i]);
}

for (let i of info) {
  console.log(i);
}

// Array methods

info.push("House Clegane");
// info.pop();  // delete and return end vaklue of array
// info.toString();   // convert array to string

let cc = info.concat(marks); // concates/adds two array into one
console.log(cc);

// Shift, unshift

info.unshift("Good"); // Similar to push but adds in the begining of array
// let front = info.unshift();   // Similar to pop, but removes from the begining
console.log(info);

// slice, splice

console.log(info.slice(0, 3)); // returns part of the array

// splice(startIndex, numberofElementTodelete, elementThatwillReplace);

marks.splice(1, 3, 78, 90, 95);
console.log(marks);

// delete an element with splice
// I want to delete elemet of index 3(95)
marks.splice(3, 1);
console.log(marks);
