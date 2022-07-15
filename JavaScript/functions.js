// // 1) Normal Function

// //function definition
// // function nameOfTheFunction(param1, param2) {
// //     //do something
// // }

// //function invocation / function call
// // nameOfTheFunction(arg1, arg2);

// //write a function to add 2 numbers
// // function add(a, b) {
// //   let res = a + b;
// //   return res;
// // }

// // let answer = add(20, 40); //called function here
// // console.log(answer); //we used console log of the browser to get output from the function

// //functions are treated as first class citizens in JS
// // -> functions can be returned
// // -> functions can be passed as parameters/args
// // build a calculator
// function calculator(operator, num1, num2) {
//   if (operator == "add") {
//     // -> functions can be returned
//     return function add() {
//       return num1 + num2;
//     };
//   } else if (operator == "subtract") {
//     return function minus() {
//       return num1 - num2;
//     };
//   }
// }

// let retFn = calculator("add", 30, 56);
// console.log(retFn); //function add is retuned here becuase function calculator got correct param. and if stat for add func is Truthy
// let answer = retFn();
// console.log(answer);

// let retfun = calculator("subtract", 45, 43);
// let minusans = retfun();
// console.log(minusans);

// //arrow function
// let sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(4, 6));

// //if only needed in one line
// let square = (num) => num * num; //don't need to put parameter in brackets (num)
// let ans = square(7);
// console.log(ans);

// //another example of one line
// let hello = () => console.log("Hello World"); //if don't want to pass parameters you would need to put brackets
// hello();

// //normal function problems

// function news() {
//   console.log("Hello This is a news portal");
// }

// console.log(news);

// function gd(num) {
//   var res = num * num;
//   return res;
// }

// //print the function then it will show func defination and not real value
// console.log(gd);

// // now we will have to catch the func in a var first
// let print = gd(5);
// console.log(gd);


function outer() {
  var a = 7;
  return function inner() {
    b = a;
  };
}

var res = outer();
console.log(res);