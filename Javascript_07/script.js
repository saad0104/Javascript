// // DOM

// // **** getAtrtibute(attr)

// let dv = document.querySelector("#bx");
// console.log(dv);

// let hd = document.querySelector(".heading");
// console.log(hd);

// console.log(dv.getAttribute("id"));
// console.log(hd.getAttribute("class"));

// // **** setAttribute(attr, new name)
// // changes the name of the class

// hd.setAttribute("class", "heading2"); // class name is changed
// console.log(hd.getAttribute("class"));

// // ******  style()

// // access and change the style attributes of an DOM
// console.log(hd.style); // shows the style

// hd.style.backgroundColor = "blue";
// hd.style.fontSize = "35px";

// let dvvv = document.querySelector("#dvv");

// dvvv.innerText = "Hello";

// // visibility
// // dv.style.visibility = "hiden";

// // ****** createElement()
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// console.log(newBtn);

// // add inside in at the end of node
// dvvv.append(newBtn);

// // add inside at the end of node
// dvvv.prepend(newBtn);
// // add outside before the node
// dvvv.before(newBtn);
// // add outside after the node
// dvvv.after(newBtn);

// // Adding new heading in the document

// let newHead = document.createElement("h1");
// newHead.innerText = "This is the new heading";

// document.querySelector("body").prepend(newHead); // adds in the front of body

// //  *****  remove the node

// newHead.remove();

// practice 1
// creating a button and set color inside js, not touching html
let bt1 = document.createElement("button");
document.querySelector("body").append(bt1);
bt1.innerText = "Click Here";
bt1.style.backgroundColor = "red";
bt1.style.color = "white";

// practice 2

// let

let pClass = document.querySelector(".pClass");

// pClass.setAttribute("class", "newClass");  // we dont use this as it completely overwrites previous class and its stylings.
// rather we use class list

pClass.classList.add("newClass");

console.log(pClass.getAttribute("class"));
