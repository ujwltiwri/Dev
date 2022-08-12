// 1-> Spread in Case of Array
// let arr = [1, 2, 34, 4];
// console.log(arr);
// let newarr = [...arr];
// console.log(newarr);

// 2-> Spread in Case of Objects
let user = {
  name: "hardik",
  age: 20,
  residence: {
    state: "delhi",
    city: "new delhi",
  },
};

console.log(user);

let newUser = {
  ...user, //used spread operator to copy user object to newUser object
  age: 23,
  hobbies: "music",
};

console.log(newUser);

user.residence.state = "Maharashtra";

/*
 * 1) using this state of both objects changed because residence key (which is an obj by itself) has been copied by refernce
 * so because of ref -> the change in original obj is also visible in copied object
 * 2) whereas when i changed user.name -> then only user object changed cuz that has been copied by value & not by reference
 */
user.name = "ujjwal";

// 3) In case of Functions
// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
// Define a function with three parameters:
function myBio(firstName, lastName, company) {
  return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);

/* The invocation above will return:
 “Oluwatobi Sofela runs CodeSweetly”
*/

/*************************************************************************************************************/
// Rest Operator
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

/* The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"]; 
*/
