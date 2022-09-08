/* 
    When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. 
*/
let user = {
  name: "abc",
  age: 23,
};

// {
//     age: 23
//     name: "abc"
//     [[Prototype]]: Object
// }

let admin = {
  dbAccess: true,
  dpPassword: "password",
};
admin.__proto__ =
  user; /* Now Admin Has Prototype and Properties of User As Well */
console.log(admin);

// {
// dbAccess: true
// dpPassword: "password"
// [[Prototype]]: Object
// age: 23
// name: "Abhi"
// [[Prototype]]: Object
// }

function abc() {
  console.log("hello");
}

console.log(
  abc.__proto__.__proto__
); /* This Proves That Function is Also An Object in JS*/
