let hh2 = document.querySelector("h2");
hh2.style.color = "blue";
hh2.innerText = hh2.innerText + " Jon Snow";

// Access box and set properties uniqly

let bx = document.querySelectorAll(".box");
bx[0].innerText = "New Text1"; // box 1
bx[1].style.color = "white"; // box 2
bx[1].style.backgroundColor = "purple";
bx[2].style.backgroundColor = "grey"; // box 3

// access divs using for loop
let idx = 1;
for (bxs of bx) {
  bxs.innerText = `New Text ${idx}`;
  idx++;
}
