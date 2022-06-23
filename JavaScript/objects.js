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

let user = {
  name: "Ujjwal",
};

let admin = user;
admin.name = "Ankish";
console.log(admin.name);

//Cloning and merging, Object.assign
let users = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

for (key in users) {
  clone[key] = users[key];
}

for (key in clone) {
  console.log("Cloned Object: ", clone[key]);
}

//We can also use the method Object.assign.
Object.assign(clone, users);
for (key in clone) {
  console.log("Copied Using Object Assign Method: " + clone[key]);
}
