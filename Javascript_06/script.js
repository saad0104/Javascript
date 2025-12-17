// DOM
// DOM -> Document Object Model
/* we can access html inside javascript in window.document.
     This is the model of HTML code. So, it is called DOM.
*/

// alert("Winter is coming.");

console.log(window.document); // in insect -> console
console.dir(window.document);

console.dir(document.body);

document.body.childNodes[3].innerText =
  "Heading is changed using childNodes[3].innerText"; // changes the title as title is the 3rd element of document.body

// ######   DOM Manipulation   #######

// Accessing DOM element

// ### selecting with ID
let heading = document.getElementById("heading");
console.log(heading);
console.dir(heading);
// to use id in the code, we have to use # in the front. eg. #heading
// example in style.css

// ###  selecting with class
let docClass = document.getElementsByClassName("headingClass");
console.dir(docClass);
console.log(docClass);
let myButton = document.getElementById("button1");
console.log(myButton);

// #####  Selecting with ID
let pID = document.getElementsByTagName("p");
console.log(pID);
console.dir(pID);

// ##### Query Selector  (good practice)

let queryElm = document.querySelector("p"); // selects 1st element
let queryElmAll = document.querySelectorAll("p");

console.dir(queryElm);
console.dir(queryElmAll);

let btn = document.querySelector("#button1"); // query selection by id
btn.style.color = "green";
btn.style.backgroundColor = "White";
console.dir(btn);

// ######  Properties

// ** tagName = returns tag for element nodes
console.log(btn.tagName);
// ** innerText = returns text content of all its elements and its children
console.log(document.querySelector("body").children);
console.log(document.querySelector("body").innerText);
// ** inner HTMl = returns html content of all its elements and its children
console.log(document.querySelector("body").innerHTML);
// ** textContent = returns textual content even for hidden elements
let innerElm = document.querySelector("#heading2");
innerElm.innerHTML = "<h3>Cng hoye gese</h3>";
// hidden element
console.log(document.querySelector("body").textContent); // hidden elemnt wont show in html page, but it will show in textContent

