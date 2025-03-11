// test.js
console.log("Hello, JavaScript!");


//call stack , memory and code execution ,  glolbal execution context 

var n=2
function square (num){
    var ans =num*num
    return ans 

}

var square2 = square(n)
var square4 = square(4)


//variable hoisting
//access variables even before intitialization

console.log(myVar);  // undefined (not a ReferenceError) is undefined, not a ReferenceError, because the declaration part was hoisted.
var myVar = "Hello, World!";
console.log(myVar);  // "Hello, World!"

//Function Hoisting
greet();  // "Hello, JavaScript!"

function greet() {
    console.log("Hello, JavaScript!");
}

//Hoisting with let and const
console.log(myVar);  // ReferenceError: Cannot access 'myVar' before initialization
let myVar1 = "Hello, JavaScript!";

//let and const variables are hoisted, but they are not initialized until their declaration is evaluated at runtime, so accessing them before initialization throws a ReferenceError.




//Array methods


//Executes a provided function once for each array element.
const arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2)); // 2, 4, 6


//Creates a new array by applying a function to each element.
const arr1 = [1, 2, 3];
const doubled = arr1.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


//Checks if at least one element satisfies the condition.
const arr2 = [1, 2, 3];
const hasEven = arr2.some(num => num % 2 === 0);
console.log(hasEven); // true


//Applies a function to reduce the array to a single value.
const arr3 = [1, 2, 3, 4];
const sum = arr3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10


//Creates a new array with elements that pass the condition in the provided function.
const arr4 = [1, 2, 3, 4];
const even = arr4.filter(num => num % 2 === 0);
console.log(even); // [2, 4]


//Checks if all elements satisfy the condition.
const arr5 = [2, 4, 6];
const allEven = arr5.every(num => num % 2 === 0);
console.log(allEven); // true


//Returns the first element that satisfies the condition.
const arr6 = [1, 2, 3, 4];
const firstEven = arr6.find(num => num % 2 === 0);
console.log(firstEven); // 2


//Returns the index of the first element that satisfies the condition.
const arr7 = [1, 2, 3, 4];
const firstEvenIndex = arr7.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 1


//Checks if an array includes a certain value.
const arr8= [1, 2, 3];
console.log(arr8.includes(2)); // true
console.log(arr8.includes(4)); // false


//Returns the first index of a specified value, or -1 if not found.
const arr9 = [1, 2, 3, 2];
console.log(arr9.indexOf(2)); // 1


//Returns the last index of a specified value, or -1 if not found.
const arr10 = [1, 2, 3, 2];
console.log(arr10.lastIndexOf(2)); // 3


//Merges two or more arrays into one.
const arra = [1, 2];
const arrb = [3, 4];
const merged = arra.concat(arrb);
console.log(merged); // [1, 2, 3, 4]


//Returns a shallow copy of a portion of an array.
const arr11 = [1, 2, 3, 4];
const sliced = arr11.slice(1, 3);
console.log(sliced); // [2, 3]


//Adds/removes elements in an array at a specific index.
const arr12 = [1, 2, 3, 4];
arr.splice(1, 2, 99, 100);
console.log(arr12); // [1, 99, 100, 4]


//Sorts an array in place.
const arr13 = [3, 1, 4, 2];
arr.sort((a, b) => a - b); // Ascending order
console.log(arr13); // [1, 2, 3, 4]


//Reverses the array in place.
const arr14 = [1, 2, 3];
arr.reverse();
console.log(arr14); // [3, 2, 1]


//Combines all array elements into a string.
const arr15 = [1, 2, 3];
const str = arr15.join('-');
console.log(str); // "1-2-3"


//Flattens nested arrays into a single array.
const arr16 = [1, [2, [3, 4]]];
const flattened = arr16.flat(2);
console.log(flattened); // [1, 2, 3, 4]



//FUNCTIONS

function domath(num){
    num = Number(num)
    if(num){
        var newNumber = (num+100)/3
        return newNumber;
    }else{
        return False;
    }
}

var customnum = domath(343);
console.log(customnum)

// Function definition
function add(a, b) {
    return a + b; // Returns the sum of a and b
}

// Function call
let result = add(5, 3); // result will be 8

console.log(result); // Outputs: 8


//Array Functions


//normal function
let num1 = [1, 2, 3, 4];
let doubled2 = []; // Declare doubled array with let or const

for (let i = 0; i < num1.length; i++) {
    doubled2.push(num1[i] * 2);
}

console.log(doubled2); // [2, 4, 6, 8]


//array function
let num = [5, 10, 15, 20];
let doubled1 = num.map(num => num * 2); // Doubles each number in the array

console.log(doubled1); // Output: [10, 20, 30, 40]


//objects


let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Corolla



// Creating an object
let person = {
    name: "John",      // Property with a string value
    age: 30,           // Property with a number value
    greet: function() { // Property with a function (method)
        console.log("Hello, my name is " + this.name);
    },
    address: {          // Nested object as a property
        street: "123 Main St",
        city: "New York"
    }
};

// Accessing object properties
console.log(person.name);        // Output: John
console.log(person.age);         // Output: 30
console.log(person.address.city); // Output: New York

// Calling a method in the object
person.greet(); // Output: Hello, my name is John


//This mothod
const obj = {
    name: "Alice",
    greet: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name); // Inherits this from greet method
        }, 1000);
    }
};

obj.greet(); // Output after 1 second: Hello, Alice



//for of and for in loops

const fruits = ["apple", "banana", "cherry"];

console.log("Using for...of with arrays:");
for (const fruit of fruits) {
    console.log(fruit); // Outputs: apple, banana, cherry
}


const persons = { name: "Alice", age: 25, city: "Los Angeles" };

console.log("Using for...in with objects:");
for (const key in persons) {
    console.log(`${key}: ${persons[key]}`);
    // Outputs:
    // name: Alice
    // age: 25
    // city: Los Angeles
}


//class

class Person {
    // Instance properties without constructor
    name = "John";
    age = 30;
  
    // Method to display person's details
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create an instance of the Person class
  const person1 = new Person();
  person1.greet(); 
  // Output: Hello, my name is John and I am 30 years old.



  //constructor
  function Car(make, model, year) {
    // Constructor function to initialize properties
    this.make = make;
    this.model = model;
    this.year = year;
  
    // Method to display car details
    this.displayDetails = function() {
      console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    };
  }
  
  // Create a new Car object using the constructor
  const myCar = new Car("Tesla", "Model S", 2022);
  myCar.displayDetails(); 
  // Output: Car: 2022 Tesla Model S

  

  //Inheritance

  // Parent class
class Cars {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    drive() {
      console.log(`${this.brand} ${this.model} is driving.`);
    }
  }
  
  // Child class inherits from Car
  class ElectricCar extends Cars {
    constructor(brand, model, batteryCapacity) {
      // Call the parent class's constructor
      super(brand, model);
      this.batteryCapacity = batteryCapacity;
    }
  
    charge() {
      console.log(`${this.brand} ${this.model} is charging with ${this.batteryCapacity} kWh.`);
    }
  }
  
  // Create an instance of ElectricCar
  const tesla = new ElectricCar("Tesla", "Model S", 100);
  
  tesla.drive();  // Inherited from Car class
  // Output: Tesla Model S is driving.
  
  tesla.charge(); // Unique to ElectricCar class
  // Output: Tesla Model S is charging with 100 kWh.
  

  //Prototype

  function Personakhilaa(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Personakhilaa.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  let user1 = new Personakhilaa("Akhilaa");
  let user2 = new Personakhilaa("Sonduri");
  
  user1.greet(); // Output: "Hello, my name is Akhilaa"
  user2.greet(); // Output: "Hello, my name is Sonduri"
  

  //Closure

  function outer() {
    let count = 0; // Variable inside outer function
  
    return function inner() { // Inner function (closure)
      count++; // Accessing outer variable
      console.log(count);
    };
  }
  
  const counter = outer();
  counter(); // 1
  counter(); // 2
  counter(); // 3
  

  //Shadowing
  let x = 10;

    if (true) {
        let x = 20;  // Shadows the outer 'x' inside this block
        console.log(x);  // Output: 20
    }

    console.log(x);  // Output: 10


    var y = 5;

    function test() {
        var y = 15;  // Shadows the global 'y'
        console.log(y);  // Output: 15
    }

    test();
    console.log(y);  // Output: 5



    //Synchronous callback

    function greeting(name, callback) {
        console.log("Hello, " + name);
        callback();
    }
    
    function sayGoodbye() {
        console.log("Goodbye!");
    }
    
    greeting("Akhilaa", sayGoodbye);
    


    //----------------------------------------------------INTERVIEW QUESTIONS------------------------------------------------------------------------------------//

//CLONING AN OBJECT 

const circle = {
  radius:1,
  draw(){
    console.log('draw');
  }

};

const another = Object.assign({},circle);

//another way is to use spread operator 
//const another={...circle};


console.log('another');

//structured clone 

const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const clone = structuredClone(original);


//memoization//

function memoizedFibonacci() {
  let cache = {}; // Stores previously computed results
  
  return function fib(n) {
    if (n in cache) return cache[n]; // Return from cache if exists
    if (n <= 1) return n;
    
    cache[n] = fib(n - 1) + fib(n - 2); // Store computed value
    return cache[n];
  };
}

const fib = memoizedFibonacci();
console.log(fib(10)); // Faster on repeated calls
