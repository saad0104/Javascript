// Asynchronus programming
// async awaits > promises chain > callback hell

// Sync
// it means that the code runs in a sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

//  *******  setTimeout()

function greeting() {
  console.log("Hello");
}

setTimeout(greeting(), 5000);

setTimeout(() => {
  console.log("Hello2"); // executes after 5 seconds
}, 5000);

// Asynchronusd Programming.
// five, six doesn't wait for four to print.
console.log("one");
console.log("Two");
console.log("Three");

setTimeout(() => {
  console.log("Four");
}, 5000);
console.log("Five");
console.log("Six");

// ************  Callbacks
// functions passed as argument inside another function

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, ssum) {
  ssum(a, b);
}

calculator(3, 4, sum);

calculator(3, 4, (a, b) => {
  console.log("Again sum is ", a + b);
});

// Callback hell
// Nested callback stacked below one another forming a pyramid structure
// bad

function getData(dataId, getNextdata) {
  setTimeout(() => {
    console.log("data ", dataId);
    if (getNextdata) {
      getNextdata();
    }
  }, 2000);
}

//callback hell(nested callback)
getData(123, () => {
  console.log("getting data 2....");
  getData(345, () => {
    console.log("getting data 3...");
    getData(678);
  });
});

//  ******************  promises()
// solves callback hell problem
// it is an object. Promises is for eventual completetion of task

let promise = new Promise((resolve, reject) => {
  console.log("This is a Promise");
  // pending state -> result is undefined
  // resolve("Successful");   // fullfill state -> result is a value
  reject("Error Occured"); // reject state -> result is an error object
});

//
let dt = "hello dt";
function getDt(dt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(dt);
      resolve("Success dt");
    }, 5000);
  });
}
let ppromise = getDt(dt);
console.log(ppromise);

// *****************  promise .then, .catch

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Hello, this is another Promise");
    resolve("Another Promise success.");
  });
};

let pppromise = getPromise();
pppromise.then((res) => {
  console.log("Another Promise fullfilled.");
});

pppromise.catch((err) => {
  console.log("Another Promise rejected.");
});

// ******************   chaining
// objective = Async2 answers after Async1 is done.

function AsyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success1");
    }, 4000);
  });
}
function AsyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success2");
    }, 4000);
  });
}

// console.log("fetching data1....");
// let d1 = new AsyncFunc1();
// d1.then((res) => {
//   console.log(res);
//   let d2 = new AsyncFunc2();
//   d2.then((res) => {
//     console.log(res);
//   });
// });

// console.log("fetching data1...");
// AsyncFunc1().then((res) => {
//   console.log(res);
//   console.log("fetching data2...");
//   AsyncFunc2().then((res) => {
//     console.log(res);
//   });
// });

// both outputs the same result. 2nd one is just a bit shorter.
// 3rd one is actual promise chaining

// Promise Chaining
AsyncFunc1()
  .then((res) => {
    console.log(res);
    return AsyncFunc2();
  })
  .then((res) => {
    console.log(res);
  });

// ************  Async-Await

// async() always returns a promise
// await() pauses the execution of its surronding async() until the promise is settled.

async function greet() {
  console.log("Hiiii async.");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 3000);
  });
}

async function weatherData() {
  await api(); // 1st call
  await api(); // 2nd call
}
weatherData();

// *********   IIFE(Immediately Invoked Function Expression)
// functions that are called as soon as it is defined

(function () {
  console.log("Hello IIFE");
})();
