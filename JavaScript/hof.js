let arr = [2, 5, 7, 12];

function areaofSquare(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i]);
  }

  return res;
}

function permieterofSquare(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 4);
  }

  return res;
}

function diagnolOfSquare(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(Math.sqrt(2) * arr[i]);
  }

  return res;
}

// console.log(areaofSquare(arr));
// console.log(permieterofSquare(arr));
// console.log(diagnolOfSquare(arr));

/*
 * The Problem in this method is that we have to do the same task repetitively and that is not needed
 * because only logic of calculation is chaning here and other code is same.
 * So here we can use -> Functional Programming
 */

function area(side) {
  return side * side;
}

function perimeter(side) {
  return side * 4;
}

function diagnol(side) {
  return Math.sqrt(2) * side;
}

function calculator(arr, logic) {
  /*
   * Here calculator is a Higher Order Function because it took logic(which is a function) as argument
   * Here Logic is a Callback Function -> because it is passed as an argument to another function
   * which is in this case calculator
   */
  /* here logic function is passed as an argument -> logic is a callback function */
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(logic(arr[i]));
  }

  return res;
}

console.log(calculator(arr, area));
console.log(calculator(arr, perimeter));
console.log(calculator(arr, diagnol));

// here the code is less because we used functional programming

// hof functions
// 1-> Map
// // Syntax -> arr.map(function()){
//   return {logic};
// }

var areaofSquareArr = arr.map((num) => {
  return num * num;
});

//normal method
// const newArr = arr.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }

// var areaOfSquareArr = arr.map(function(num){
//   return num * num;
// });
// 1) each element of arr is traversed, it is available in cb function's parameter .
// 2) we peform some action on that element
// 3) on writing return res is pushed inside an array
// console.log("Arr.Map Ex");
// console.log(areaofSquareArr);
