// Objects exercise 
// Create three objects 
// All Objects have the same properties 
// Age, Name

// Step 1: 
// First object is john 

// Step 2: 
// Second object is Ruth 

// Step 3: 
// Third object is Peter 

// Step 4: 
// Add those three objects to an array that you have to create 

// Step 5: 
// Using the filter method get the younger and older object 

// Step 6: 
// print the values here

// Creating constructor
function Person(age, name) {
  this.age = age;
  this.name = name;
}

let john = new Person(22, 'John');
let ruth = new Person(25, 'Ruth');
let peter = new Person(30, 'Peter');

let newArray = new Array(john, ruth, peter);

Person.prototype.doSomething = function() {
  return `Welcome ${this.name} you are ${this.age} years old`;
}

function findMinMax(arr) {
  let min = arr[0].y, max = arr[0].y;

  for (let i = 1, len = arr.length; i < len; i++) {
    let v = arr[i].y;
    min = (v < min) ? v : min;
    max = (v > max) ? v : max;
  }

  return [min, max];
  
}

console.log(findMinMax(newArray));

console.log(doSomething(newArray));

console.log(newArray);