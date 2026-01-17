"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Basic Type Annotations
function add(x, y) {
    return x + y;
}
const result = add(1, 2);
console.log(`1 + 2 = ${result}`); // 3
function greet(person) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}
const person = { name: "Berl", age: 24 };
greet(person); // Hello, my name is Berl and I am 24 years old.
//# sourceMappingURL=index.js.map