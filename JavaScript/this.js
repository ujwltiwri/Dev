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
// function type2() {
//   console.log(this.lname);
// }

// var lname = "Tiwari";

// var obj = {
//   lname: "Singh",
//   type2,

//   /*this is how the code in real sense is put here -> type2: function(){
//         console.log(this.name);
//     } */
// };
// obj.type2();

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
