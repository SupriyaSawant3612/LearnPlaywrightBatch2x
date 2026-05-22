console.log(c); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
//TDZ for "c" starts here because "c" is declared with "let" and is not accessible before its declaration in this block scope

let c = "supriya";

console.log(c); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
//TDZ for "c" starts here because "c" is declared with "let" and is not accessible before its declaration in this block scope

const c = "supriya"; // This will throw an error because 'c' is already declared as a constant and cannot be redeclared or reassigned.


console.log(c); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
console.log("Hi"); // Output: undefined
//TDZ for "c" starts here because "c" is declared with "let" and is not accessible before its declaration in this block scope

var c = "supriya";