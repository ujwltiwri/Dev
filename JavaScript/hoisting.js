// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// function fun() {
//   console.log("Ujjwal");
// }

// fun();
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a);
// var ans = fun();
// console.log(ans);
// var a = 10
// function fun(){
//   console.log("FJP-9 Rocks");
// }
// console.log(greet);
// var greet = function (){
//   console.log("hello");
// }
// console.log(greet);
// console.log(a);

// greet();
// console.log(greet);
// var greet = function () {
//   console.log("Heloo");
// };
// // greet();
// console.log(greet);

{
  var a = 10;
  let b = 100;
  const c = 1000;

  console.log(a); //10
  console.log(b); //100
  console.log(c); //1000
}

a = 20;

console.log(a); //10
console.log(b); //not defined -> reference error
console.log(c); //not defined -> reference error

// function fun() {
//   if (true) {
//     let a = 10;
//     var b = 20;
//   }
//   console.log(b); // 20
//   console.log(a); // not defined
// }

// fun();

function news() {
  console.log("Hello This is a news portal");
}

//if i print this func then it will console log the whole func definition instead of printing "Hello This is a news portal"
console.log(news);
//so to overcome i will simply call this function
news();

function gd(num) {
  var res = num * num;
  return res;
}

//print the function then it will show func defination and not real value
console.log(gd);

// now we will have to catch the func in a var first
let print = gd(5);
console.log(gd);


