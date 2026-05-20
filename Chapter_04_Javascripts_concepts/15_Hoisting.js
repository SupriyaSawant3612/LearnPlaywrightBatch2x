//JS Engine
// Line by Line Compilation and Execution
// Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
console.log("Greetings!"); // Output: undefined (due to hoisting)
var Greeting = "Hello, how are you?";
console.log(Greeting); // Output: Hello, how are you?

// Function hoisting
console.log(printMessage); // Output: [Function: printMessage]
function printMessage() {
    console.log("Hello, The testing academy!");
}
// var greeting; --> Hoisting with Undefined
//console.log(greeting); // Output: undefined
// greeting = "Hello, how are you?"; --> Assignment stay in the place
// console.log(greeting); // Output: Hello, how are you? 