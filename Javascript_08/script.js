//  Events
// change in the state of an object
// mdn event reference

let btn3 = document.querySelector("#btn3");

btn3.onclick = () => {
  console.log("BUtton Clicked");
};

let bx2 = document.querySelector("#box2");
bx2.onmouseover = () => {
  console.log("Mouse is inside Box2.");
};

// event Object
// contains details about an event

let btn4 = document.querySelector("#btn4");
btn4.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};

// eventListener(event, callback/handler)

let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
  console.log("Listener Button Clicked.");
});


let bt6 = document.querySelector("#btn6");
let handler1 = () => {
  console.log("Listener + Handler");
};
bt6.addEventListener("click", handler1);
