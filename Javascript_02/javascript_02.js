// Opertators, Conditional Statements, Prompt(input)

/* Boilerplate Code - Code that has to be in any program, basic syntax jeta shob program e thakbe. eg . #include to return 0 shob progrma e thake. Er majhe baki shob program to program change hoy */


// ############## Operators ########### 
/* 
Operators -->> 

*/
let a = 5;
let b = 2;

console.log(a+b);  // addition
console.log(a-b);  // subtraction
console.log(a*b);  // multiplication
console.log(a/b);  // division
console.log(a%b);  // Modulas
console.log(a*b);  // Exponentiation
console.log(++a);  // pre increament
a++;
console.log(a);  // post Increament
console.log(--a);  // pre decreament
a--;
console.log(a);  // Decreament

 // ##############  Assignment Operators  ##############

 // =, +=, -=, *=, %=, **=

 // ################ Comparision Operator #############

 /* 
    <, < , <=, >=
    == , != --> compares the value only, not the type
    === , !==  -- > compares both value and type
 */

let c = 6;
let d = "6";
let e = 4;
// c and d has the same value but different type
 console.log(c==d);  
 console.log(c!=d);  
 console.log(c===d);
 console.log(c!==d);

 console.log(6>=4);
 console.log(6<=4);


 //  ##########  Logical Opearators  ############

 /* 
    and --> &&
    or --> ||
    not --> !
 */
 
 let cond1 = a>b;  // true
 let cond2 = c>e;  // true
 let cond3 = b>e;  // false

 console.log(cond1 && cond2);
 console.log(cond1 && cond3);
 console.log(cond1 || cond3);
 console.log(!cond3);
 
 

// ############  COnditional Statement ##############
/* 
    if- else if- else, switch-case
*/

let age = 17;

if(age>18)
{
    console.log("Hello, Adult World");
}
else if(age ===18)
{
    console.log("Hmmmmm");
}
else
{
    console.log("Baby boi"); 
}


// ######## Ternary Operator #######

console.log(age>18 ? "Aged" : "Not Aged");


// ############# Prompt(User Input) ############

let name = prompt("Enter Your Name Here");
console.log("Hello", name);


 



