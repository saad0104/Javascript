// Variables, Data type, Object

// comment

// print in the console
console.log("Hello, World!")


// ############     variables   #################
// Dynamically typed variable. No need to define type when declaring
// variable names are case sensetive
// good practice --> camelCase variable name, with let/const key word declaration
// keywords --> var = variable can be redeclared and redirected, global scope, shouldn't use it
// let = can't be redeclared, can be updated, block scope
//  const = can't be redeclared or updated. block scope.

name = "Jon Snow"
let age = 21
let price = 99.99
knows = null;  // value is known but empty
var relation = undefined;  // value is unknown
isCoward = false;
const pi = 3.1416;
console.log(name)

{
    let a = 5;  // let is block variable keyword
    console.log(a)
}
{
    let a = 69;
    console.log(a);
}

// ############### Data Types #####################
// Primitive data types = number, string, boolean, undefined, null, BigInt, Symbol
// NonPrimitive = array, function
isDumb = true;
console.log(typeof(isDumb));  // type of variable

let x = BigInt("123")
let y = Symbol("Hello!");

console.log(typeof(y))

// #############   Object   ##############

const student = {
    fullName : "Ned Stark",
    age : 54,
    isBrave : true
};
console.log(student["fullName"]);  // access element of object
console.log(student.isBrave);  

console.log(student);
console.log(typeof(student));


const product = {
    title : "Ball Pen",
    rating : 4.5,
    offer : false,
    price : 10
};
console.log(product);