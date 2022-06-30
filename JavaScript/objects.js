let captainAmerica = {
  firstName: "Steve",
  lastName: "Rogers",
  friends: ["Bucky", "Tony Stark", "Bruce Banner", "Thor"],
  Age: 122,
  isAvenger: true,

  address: {
    State: "Manhattan",
    City: "New York",
    Country: "United States of America",
  },

  sayHi: function () {
    console.log(`Hello My Name is ${captainAmerica.firstName}`);
  },
};

captainAmerica.sayHi(); //called function from an onbject

//access key using square bracket notation
let square_bracket = captainAmerica["Age"];
console.log("Square Bracket: ", square_bracket);

//loop over on object
for (key in captainAmerica) {
  //   console.log("This is Key: ", key);
  console.log(captainAmerica[key]); //here we are using bracket notation for accessing key's value
}

//for loop method for object access
for (let i = 0; i < Object.keys(captainAmerica).length; i++) {
  console.log(captainAmerica);
}

//prompt
let fruitname = prompt("Enter Any Fruit Name: ");
let bag = {
  [fruitname]: 10,
};
/*
dot natation can't evalue fruitname so it will look for fruitname key in bag object but here fruit name can be anything according to input
*/
alert(bag.fruitname);

alert(bag.banana); //it will show 10 only if banana will be entered

/*
so we can use bracket notation for evaluating this and can get output for any input
*/
alert(bag[fruitname]); //now it will for any input

// Object references and copying
/*
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function, such as _.cloneDeep(obj).
*/

let user = {
  name: "Ujjwal",
  age: 24,
};

console.log(user);

user.height = 5.6;

console.log(user);

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

console.log(clone);

user.address = "himachal pradesh";
console.log(user);
console.log(clone); //value of clone didn't change even if value of user object change, becuase clone is stored at new location now

Object.assign(clone, user, { isUjjwal: true });
console.log(clone);

user.nick = "carry";
console.log(user);
console.log(clone);

//nested object cloning
let someone = {
  name: "John",
  size: {
    height: 182,
    width: 50,
  },
};

console.log(someone);

console.log(someone.size.height);

let newclone = {};
Object.assign(newclone, someone);
console.log(newclone);
console.log(someone.size.height === newclone.size.height); //true, but expected output was false because we have made a clone and memory of these two obj is different
/*
although here we have cloned someone to newclone, and these are stored at diff memory location
but we have not cloned size obj inside someone obj, instead refernce of size from someone is copied into size in newclone obj
this is the limitation of nested cloning of objects

To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning”.

We can use recursion to implement it. Or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.
*/

// Const objects can be modified
// An important side effect of storing objects as references is that an object declared as const can be modified.

const user = {
  name: "John",
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
// It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

// In other words, the const user gives an error only if we try to set user=... as a whole.

// That said, if we really need to make constant object properties, it’s also possible, but using totally different methods. We’ll mention that in the chapter Property flags and descriptors.
