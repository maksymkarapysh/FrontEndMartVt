// Boolean
let isDone: boolean = false;
//isDone = 1; // [ts] - type '1' is not assignable to type 'boolean'

console.log(isDone);

//  Number
let a1_decimal: number = 10;

console.log(a1_decimal);

// String
let firstName: string = "Ivan";
let age: number = 25;
let messageTemplate: string = `Hello, my name is ${firstName} I'm ${age} years old.` // template string
let messageConcat: string = "Hello, my name is " + firstName + " I'm " + age + " years old." // concatenation

console.log(messageTemplate);
console.log(messageConcat);
