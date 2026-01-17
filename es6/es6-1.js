// let, const and var
let name = "Alice";
if (true) {
  name = "Bob";
  console.log(name); // Bob
}
console.log(name); // Bob
// var has no block scope and can be reassigned


// Arrow Functions
const add = (a, b) => a + b;
console.log(add(1, 2)); // 3
// Arrow functions do not have their own 'this' context


// Template Literals
const greeting = `Hello, ${name}!\nWelcome to the course.`;
console.log(greeting);


// Destructuring
const person = {
  name: "Alice",
  age: 25,
  city: "Sydney"
};
const { name: personName, age } = person;
console.log(`name: ${personName}, age: ${age}`);

function destructure({ name, age, city }) {
  console.log(`name: ${name}, age: ${age}, city: ${city}`);
}
destructure(person);


// Default Parameters
function calculateArea(width, height = 10) {
  return width * height;
}
console.log(calculateArea(5)); // 50
console.log(calculateArea(5, 20)); // 100


// Rest and Spread Operators
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(sum(...arr1, ...arr2)); // 10
