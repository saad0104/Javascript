// // fetch API

// // it uses Request and Response objects

// // fetch()
// //it is used to fetch a resource.

const url = "https://binaryjazz.us/wp-json/genrenator/v1/story/5"; // fetches array of 5 stories
// let Promise = fetch(url);
// console.log(Promise);

// // json() = returns a second promise that resolves with result of parsing the response body text as json
// // input json, output js object
const storyP = document.querySelector("#story");
const storyB = document.querySelector("#storyBtn");

// // ***************** API call using async-await [simpler]

const getFacts = async () => {
  console.log("Getting data....");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
  storyP.innerText = data[0];
};
// // getFacts();

// // *************** API call using promise chaining

// function getFacts() {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       storyP.innerText = data[0];
//     });
// }

storyB.addEventListener("click", getFacts);
