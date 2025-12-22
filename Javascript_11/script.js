// Class and Object , Error Handling

// Object
// object is an entity having state and behaviour

// Prototype
const student = {
  name: "Aegon Targeryan",
  marks: 100,
  printMark: function () {
    console.log("marks = ", this.marks);
  },
};

// JS object has a special property called prototype.
// __proto__

const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};

const NedStark = {
  salary: 10000,
};

NedStark.__proto__ = employee;
// sets one object as the prototype for another object

console.log(NedStark);

// *****    Class
// class is a program code template for creating object
// blueprint or template for creating object

class toyotaCar {
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
}

// creating object from class

const fortuner = new toyotaCar();
let lexus = new toyotaCar();

console.log(typeof fortuner);
console.log(fortuner.start());
console.log(lexus.start());
fortuner.setBrand("fortuner");
console.log(fortuner.brandName);

// *****   constructor
// constructor invokes automatically
class FormulaRace {
  constructor(brand) {
    this.brandName = brand;
  }
  pos() {
    console.log("Your Position is 5th");
  }
}

let Redbull = new FormulaRace("RedBull");

console.log(Redbull.brandName);
console.log(Redbull.pos());

// ******* Inheritance
// passing down properties and method from parent class to child classes

class F1 extends FormulaRace {}
class F2 extends FormulaRace {}

let f1 = new F1("Mercs");
let f2 = new F2("Toyota");

console.log(f1.brandName);
console.log(f2.brandName);

// ***** super keyword
// it is used to call the constructor of its parent class to access the parents properties and methods

// ******  Error Handling

a = 5;
b = 6;

console.log(a);
console.log(b);
console.log(a + b);
try {
  console.log(a + c); // error, c doesn't exist
} catch (err) {
  console.log("The error is : ");
  console.log(err);
}
