// Basic Type Annotations
function add(x: number, y: number): number {
  return x + y;
}

const result: number = add(1, 2);
console.log(`1 + 2 = ${result}`); // 3


// Working with Interfaces
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

const person: Person = { name: "Berl", age: 24 };
greet(person); // Hello, my name is Berl and I am 24 years old.
