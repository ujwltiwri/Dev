var arr = [2, 5, 7, 12];

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

var arr = [2, 5, 7, 12];

// 1st Method
// var areaofSquareArr = arr.map((num) => {
//   return num * num;
// });

// 2nd Method
function area(num) {
  return num * num;
}

var areaofSquareArr = arr.map(area);

// 3rd Method
// var areaOfSquareArr = arr.map(function(num){
//   return num * num;
// });

// 1) each element of arr is traversed, it is available in cb function's parameter .
// 2) we peform some action on that element
// 3) on writing return result is pushed inside an array
console.log("Arr.Map Ex");
console.log(areaofSquareArr);

// Implemeting Own Map
Array.prototype.calculator = function (logic) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(logic(this[i]));
  }
  return res;
};

// let narr = [5, 4, 9, 6];
// let ans = narr.calculator(perimeter);
// console.log("Map Implemetation");
// console.log(ans);

// //Array.push Implemetation
Array.prototype.mypush = function (num) {
  let length = this.length;
  this[length] = num;
  return this;
};

// narr.mypush(46);
// console.log(narr);

//2nd Hof -> Arr.filter
var arr = [2, 5, 7, 12];

function greaterThan4(num) {
  if (num > 4) {
    return num;
  }
}

function greaterThan4(num) {
  if (num > 4) {
    return num;
  }
}

var ans = arr.filter(greaterThan4);
console.log(ans);

//Implementing My own Arr.filter
Array.prototype.myFilter = function (greaterThan4) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (greaterThan4(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

var ans = arr.myFilter(greaterThan4);
console.log(ans);

3rd Array Method -> arr.reduce
var arr = [10, -5, 6, 28, 56, 12, 456];

function largestval(acc, current) {
  if (current > acc) {
    acc = current;
  }
  return acc;
}

let answer = arr.reduce(largestval);
console.log(answer);

var arr = [10, -5, 6, 28, 56, 12, 456];

let largestval = (acc, current) => {
  if (current > acc) {
    acc = current;
  }
  return acc;
};

let answer = arr.reduce(largestval);
console.log(answer);

const worldCapitals = [
  {
    country: "India",
    capital: "Delhi",
    population: "2cr",
  },
  {
    country: "America",
    capital: "Washington DC",
    population: "6cr",
  },
  {
    country: "France",
    capital: "Paris",
    population: "2cr",
  },

  {
    country: "England",
    capital: "London",
    population: "4cr",
  },
  {
    country: "Germany",
    capital: "Berlin",
    population: "2cr",
  },
];

//Q1 print country name and their capital
// [ India->Delhi, America->WashingtonDC, France->Paris , England->London, Germany->Berlin]

let countryCapital = (obj) => {
  return obj.country + "->" + obj.capital;
};

var ans = worldCapitals.map(countryCapital);
console.log(ans);

//Q2-> Return the number of countries with a particular population
//{ 2cr: 3, 4cr: 1, 6cr: 1 }

let getPopulation = (obj, current) => {
  if (obj[current.population]) {
    obj[current.population] = obj[current.population] + 1;
  } else {
    obj[current.population] = 1;
  }

  return obj;
};

var ans = worldCapitals.reduce(getPopulation, {});
console.log(ans);

//Q3 get country name with population less than 5cr
//[India, France,England,Germany]

function populationLessThan5cr(arr, obj) {
  if (obj.population < "5cr") {
    arr.push(obj.country);
  }
  return arr;
}

var ans = worldCapitals.reduce(populationLessThan5cr, []);
console.log(ans);
