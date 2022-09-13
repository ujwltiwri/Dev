// // ************************************************ Rules ************************************************
// // 1. the  value of "this" is evaluated during run-time
// // 2. Value of "this" depends from where it is called
// // 3. "this" points to that object from where the function is being called
// // 4. arr, obj, fn are all passed by refernce

// // Q1
// function type1() {
//   console.log(this.name);
// }

// var name = "JavaScript";
// type1(); //when function is called globally, this always points to window object

// // ************************************************************************************************************

// // Q2
function type2() {
  console.log(lname);
}

// var lname = "T iwari";

var obj = {
  lname: "Singh",
  type2,

  /*this is how the code in real sense is put here -> type2: function(){
        console.log(this.name);
    } */
};
obj.type2();

// // Q3
// var food = "Pizza";

// var obj = {
//   food: "Pasta",
//   eat() {
//     console.log("I like to eat " + this.food);
//   },
// };

// var foo = obj.eat;
// foo();

var length = 1;
function square() {
  let cb = function () {
    console.log(this.length * this.length);
  };
  setTimeout(cb, 2000);
}

var obj = {
  length: 3,
  square,
};

obj.square();

// var user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(function () {
//   user.sayHi(); // Hello, John!
// }, 1000);

/**************************************** Best Example *************************************************************** */

const obj = {
  a: 10,
  method() {
    let a = 20;
    console.log(this.a);
    const other = () => {
      console.log(this.a);
    };
    other();
  },
};

obj.method();

// Explaination -> this value inside of an arrow function always equals this value from the outer function. In other words, the arrow function resolves this lexical. So, we see that arrow functions instead of using a=20, it’s look-up to the method function and providing this of the method(). Thus it produces the same result.

