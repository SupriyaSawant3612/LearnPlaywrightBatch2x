let name = "Supriya";
let age = 25;

// 1. String interpolation
console.log(`My name is ${name} and I am ${age} years old.`);

// 2. Expression inside ${}
console.log(`In 5 years, I will be ${age + 5} years old.`);

// 3. Multi-line string
let message = `Hello ${name},
Welcome to JavaScript.
Enjoy learning!`;
console.log(message);

// 4. Calling functions inside template
console.log(`My name in uppercase: ${name.toUpperCase()}`);
