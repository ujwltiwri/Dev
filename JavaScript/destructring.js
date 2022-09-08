//array -> In Array Sequence is Followed While Destructring
let arr = [10, 20, 30];

var [x, y, z] = arr;
var [, z] = arr;
console.log(z);

// Interview Question -> Swap Values of 2 Variables Without Creating Any Other Variable Using Destructing
let num1 = 5;
let num2 = 10;
console.log("N1", num1);
console.log("N2", num2);
[num2, num1] = [num1, num2];
console.log("N1", num1);
console.log("N2", num2);

// default values
let [fName = "Ujjwal", lName = "Tiwari"] = [, "Mishra"];
console.log(fName);

//Object -> Sequence is Not Followed in Objects While Destructring
let obj = {
  name: "abhi",
  age: 23,
  city: "New Delhi",
  occupation: "sde",
};

let {
  ages,
  city,
  /* To Give A Different Name to A Key -> */ occupation: job,
} = obj;
console.log(job);

let options = {
  title: "Menu",
};

let {
  title,
  /* Default Values Can Also Be Used in Objects -> */ weight = 100,
  /* To Give A Different Name to A Key -> */ height: h = "100lbs",
} = options;
console.log(title);
console.log(weight);
console.log(h);
// Default Values Can Also Be Used in Objects:
