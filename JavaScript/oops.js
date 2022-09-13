//class components ko resemble krta h
class Human {
  constructor() {
    this.eats = true;
  }
  printHabbit() {
    console.log(this.eats);
  }
}

class Person extends Human {
  constructor() {
    //invoked as soon as new keyword is used
    super(); // -> Super Keyword is used -> to call Parent Class's Constructor
    this.name = "Abhi";
    this.eats = false;
  }

  printMyName() {
    console.log(this.name);
  }
}

var person = new Person();
console.log(person);
person.printMyName();
person.printHabbit();

//functional component ko resemble krta h
class Human {
  // in functional component you don't need to use constructor keyword and this inside constructor
  eats = true;
  printHabbit = () => {
    console.log(this);
  };
}

class Person extends Human {
  //invoked as soon as new keyword is used
  name = "Abhi";
  // in functional component you don't need to use super keyword to call Parent Class's Constructor
  printMyName = () => {
    console.log(this);
  };
}

const person = new Person();
console.log(person);
person.printMyName();
person.printHabbit();
