//arrow function
let add = (a, b) => {
  return a + b;
};

console.log(add(4, 6));

//if only neede in one line
let square = (num) => num * num; //don't need to put parameter in brackets (num)
let ans = square(7);
console.log(ans);

//another example of one line
let hello = () => console.log("Hello World"); //if don't want to pass parameters you would need to put brackets
hello();
