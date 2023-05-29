// a => { 
//     let x = a + 100;
//     console.log(x);
// }

// let a= 11;
// let b= 88;

// (a, b) => { 
//     let x = a + b;
//     console.log(x);
// }

let list = ["doors", "windows", "rooms"];
for(let x of list){
  console.log(x);
}         

for(let ch of "hello"){
    console.log(ch);
}  

let obj = {doors: 2, windows: 8, rooms: 5};
  for(let x in obj){
    console.log(x);
}

let obj1 = {doors: 2, windows: 8, rooms: 5};
Object.keys(obj1).forEach(function(property_name){
  console.log(obj1[property_name]);
});

let obj2 = {doors: 2, windows: 8, rooms: 5};
Object.values(obj2).forEach(function(property_value){
  console.log(property_value);
}); 


Object constructor
function Person(name, age, married) {
  this.name = name;
  this.age = age;
  this.isMarried = married;
  this.hello = function() {
    return "Hello " + this.name;
  }
};

class Person {
    constructor(name, age, married) {
      this.name = name;
      this.age = age;
      this.isMarried = married;
    }
    hello() {
      return "Hello " + this.name;
    }
  }


  class Animal {
    constructor(name) {
      this.name = name;
    }
    jump() { console.log(`${this.name} is jumping.`); }
  }
  class Bird extends Animal {
    fly() { console.log(`${this.name} is flying.`); }
  }
  class Dog extends Animal {
    bark() { console.log(`${this.name} says "Woof!"`); }
  }