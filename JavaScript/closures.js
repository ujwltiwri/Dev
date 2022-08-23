// Q1.
var b = 100;

const foo = () => {
  b = 200;
  return () => {
    console.log(b);
  };
};

foo()();

/* **************************************************************************************************** */

// Q2.
var result = [];

for (var i = 0; i < 5; i++) {
  result[i] = function () {
    return i;
  };
}

console.log(result[0]());

/* **************************************************************************************************** */

// Q3.

var result = [];

for (var i = 0; i < 5; i++) {
  result[i] = (function inner(x) {
    return function () {
      return x;
    };
  })(i);
}

console.log(result[0]());

/* **************************************************************************************************** */

// Q4.

// function run(a1) {
//   var b1 = a1;
//   return function () {
//     b1 += 10;
//     return b1;
//   };
// }

// const fn = run(50);
// fn();
// console.log(fn());

/* **************************************************************************************************** */

// Q5.

var name = "JavaScript Centric";

function run() {
  var name = "Ujjwal Tiwari";

  setTimeout(function () {
    console.log(name);
  }, 1000);
}

run();

/* **************************************************************************************************** */

// Q6.

var a1 = 10;

function run() {
  var a1 = 20;

  function slow() {
    console.log(a1);
  }

  exec(slow);
}

function exec(func) {
  var a1 = 30;
  func();
}

run();

/* **************************************************************************************************** */

// Q7 -> Does this code represents an example of the closure?.

var ol = (function () {
  var o = {
    name: "JavaScript Centric",
  };

  return o;
})();

console.log(ol.name);

/* **************************************************************************************************** */

// Q8

var a = 10;

function run() {
  var a = 20;

  function fast() {
    console.log(a);
  }

  return fast;
}

var x = run();
x();

/* **************************************************************************************************** */

// Q9

// var x = 10;

// function run() {
//   var x = 20;
//   document.getElementById('btn').onclick = function () {
//     console.log(x);
//   };
// }

// run();

/* **************************************************************************************************** */

// Q10

function add(a) {
  var x = "Sum of two numbers is: ";
  return function (b) {
    var sum = a + b;
    console.log(x + sum);
  };
}

var totalSum = add(10);
totalSum(5);

/* **************************************************************************************************** */

// Q11

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + i);
}

/* **************************************************************************************************** */

// Q12

// for(let i = 0; i < 3; i++){
//   setTimeout(function() {
//     console.log(i);
//   }, 1000 + i)
// }

/* **************************************************************************************************** */

// Sol 1 ->

// We have function foo that returns an anonymous function. No matter where the function was executed it still remembers and has access to the scope in which it was declared. The returned function has access to inner scope (foo scope) and outer scope (global scope).

// Also we have two variable with the same name the variable shadowing occurs. So the output will be 200.

/* **************************************************************************************************** */

// Sol 2 ->

// The anonymous function assigned to the result array have access to the outer scope (global scope) where variable i is stored. Every time when we execute any of that functions we get the value that was assigned to i variable in the last for iteration-the step when the condition wasn’t fulfilled. So the value of i will become 5 and the output will be 5.

/* **************************************************************************************************** */

// Sol 3 ->

// In each for iteration we create an IIFE function that receives its own copy of i variable’s value and assigns that value to its local x variable. That’s why every time when we execute any of that functions we get the value that was assigned to a local x variable, in this case for result[0] value of x will be 0 that’s why output will be 0.

/* **************************************************************************************************** */

// Sol 4 ->

// In the first step, we assign the value 50 to the b1 variable and assign returned function to a variable fn.

// var fn = run(50); // b1 = 50

// In the next step, we call that function that was returned what causes that b1 variable will be increased by 10.

// fn() // b1 = 50 + 10;

// In the last step, we call that function again what increases the b1 variable by 10 again.

// console.log(fn()); // b1 = 60 +10

// As we use closure the b1 variable value isn’t reset with each fn execution.So the output of this code will be 70.

/* **************************************************************************************************** */

// Sol 5 ->

// No matter if we execute a function with a delay it still remembers the scope in which it was declared. The function inside setTimeout has access to lexical scope (run scope) and variable name (Ravi Sharma). So output of this code will be Ravi Sharma.

/* **************************************************************************************************** */

// Sol 6 ->

// No matter where the function was executed it still remembers and has access to the lexical scope in which it was declared. here slow function has access to inner scope (run scope) and outer scope (global scope). So therefore output will be 20.

/* **************************************************************************************************** */

// Sol 7 ->

// What we return from IIFE function is plain object, not a function. A closure is the combination of a function and the lexical environment within which that function was declared. So this is not example of closure.

/* **************************************************************************************************** */

// Sol 8 ->

// This is a simple example of closure. Here inner function fast can access lexical scope variable a and output will be 20.

/* **************************************************************************************************** */

// Sol 9 ->

// Even if we execute a function in the context of a DOM element it still remembers the scope in which it was declared. The onclick handler has access to inner scope(run scope) and it will display value of x is 20.

/* **************************************************************************************************** */

// Sol 10 ->

// As we know an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

// Here also when we call add(10) it will set a to 10. when we call totalSum(5) then value of b become 5. At the end inner function will retain reference of variable a and use its value to perform sum = 10 + 5. So the output will be “Sum of two numbers is 15”

/* **************************************************************************************************** */

// Sol 11 ->

// The goal of the code above is to alert the numbers 0, 1, and 2 each after 1, 1.1, and 1.2 seconds, respectively, but in this case there is some issue with JavaScript closures. Due to synchronous nature of JS it will not wait for setTimeout for 1ms and will execute for loop for 3 times, at that stage value of i will become 3. After 1ms inner function will try to get value of i which is in lexical scope so it will use 3. So the output will be 3,3,3.

// To avoid this issue see the next problem.

/* **************************************************************************************************** */

// Sol 12 ->

// Here we have used let variable inside the for loop. So the inner function will contains new i for each iteration and it will be different. So the output of this code will be 0,1,2
