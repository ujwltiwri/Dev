var promise = new Promise(function (resolve, reject) {
  //   resolve("hello"); //invoked instantly
  setTimeout(() => resolve("Fulfilled Succesfully After 1 Second"), 1000);
});

// console.log(promise);

/* The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. */

// 2. Error Handling
let secondPromise = new Promise((reslove, reject) => {
  setTimeout(() => reject(new Error("Whoops")), 1000);
});

/* To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object. */

/* Imp -> There can be only a single result or an error
    The executor should call only one resolve or one reject. Any state change is final.
    All further calls of resolve and reject are ignored:
*/

// let promise = new Promise(function (resolve, reject) {
//   resolve("done");

//   reject(new Error("…")); // ignored
//   setTimeout(() => resolve("…")); // ignored
// });

/* 3. Consumers: then, catch 
    A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.
*/

// promise.then(
//   function (result) {
//     /* handle a successful result */
//   },
//   function (error) {
//     /* handle an error */
//   }
// );

var orgPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
orgPromise.then(
  (result) => alert(result), // shows "done!" after 1 second
  (error) => alert(error) // doesn't run
);

/* If we’re interested only in successful completions, then we can provide only one function argument to .then: */
var orgPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Success!"), 1000);
});

orgPromise.then(alert); // shows "done!" after 1 second

/* **************************************** Promise Chaining ************************************************* */

var promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    // console.log(result)
    setTimeout(() => console.log(result), 2000);
    return result * 10;
  })
  .then((lastdata) => {
    // console.log(lastdata)
    setTimeout(() => console.log(lastdata), 3000);
    // return lastdata;
  });

console.log(promise);

/******************************************************************************************************************* */
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

console.log(promise);

let songDeliveredPromise = new Promise(function (resolve, reject) {
  let song = {
    name: "Tum hi ho",
    album: "Aashiqui",
    length: "300s",
    singer: "Arijit Singh",
    lyrics: "Tum hi ho Tum hi ho Tum hi ho Tum hi ho",
  };
  //1sec = 1 month
  setTimeout(() => {
    resolve(song);
  }, 1000);
});

//audience
// songDeliveredPromise.then(
//     data => console.log(data),
//     err => console.log(err)
// )

songDeliveredPromise.then((data) => {
  console.log(data);
});

songDeliveredPromise.then(alert(data));
songDeliveredPromise.then(alert);

songDeliveredPromise.catch((err) => {
  console.log(err);
});

new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => alert("Promise ready"))
  .then((result) => alert(result))
  .catch((err) => alert(err));

//promise.all

// 1) laptop pe work
// 2)dm ka rply
// 3)episode binge

// day was successfull!

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then((arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
});

// [1,2,3]

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve, reject) => setTimeout(() => reject(3), 5000)),
])
  .then((arr) => {
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
  })
  .catch((err) => {
    console.log("promise all rejected");
    alert(err);
  });

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));

// requests = [fetch('https://api.github.com/users/iliakan'),
//             fetch('https://api.github.com/users/remy'),
//             ftech('https://api.github.com/users/jeresig')
//         ]

// responses = [{}, {}, {}];
// [response.json()]
// data=["","",""]
// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve, reject) => setTimeout(() => reject(3), 5000)),
])
  .then((arr) => {
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
  })
  .catch((err) => {
    console.log("promise all rejected");
    alert(err);
  });

async function getData() {
  let url = "https://api.github.com/users/iliakan";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

console.log("i am good");

//sync fn

let url = "https://api.github.com/users/iliakan";
let result = fetch(url); //fetch returns a promise
result
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });

console.log("i am good");

//sync fn

async function getData() {
  try {
    let url = "https://no-such-url";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("error", err.message);
  }
}

// url -> fetch -> res->res.json()->data -> print

// function calculator() {
//   try {
//     let res = sum(-10, -12);
//     if (res < 0) {
//       throw new Error("sum is less than zero");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// function sum(a, b) {
//   try {
//     return a + b;
//   } catch (error) {
//     console.log("err", error.message);
//   }
// }
