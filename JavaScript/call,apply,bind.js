let car = {
  name: "Thar",
  brand: "Mahindra",
};

let carDescription = function (date, price, name) {
  console.log(`I bought a new ${this.brand} ${this.name} 
    on ${date} for INR ${price} and my Name is: ${name}`);
};

Function.prototype.myBind = function (...args) {
  let fnObj = this;
  let param = args.slice(1);
  return function () {
    fnObj.apply(args[0], param);
  };
};

var myBindedFn = carDescription.myBind(car, "12th August", "20 Lacs", "Ujjwal");
myBindedFn();
