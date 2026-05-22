let count = 42;
let negative = -100;
let zero = 0;
let hexadecimal = 0xFF; // 255 in decimal

/* Hexadecimal (base-16) is a number system using 16 digits: 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, F=15). It's commonly used in programming for:
- Color codes: #FF0000 = red, #00FF00 = green, #0000FF = blue
- Memory addresses: 0x7ffeefbff5b8
- Binary shorthand: one hex digit = 4 bits (e.g., 0xFF = 255 decimal = 11111111 binary)
In JS, prefix with 0x:
console.log(0xFF);  // 255
console.log(0x1A);  // 26
*/

let h = 0x1A; // 26 in decimal
console.log(typeof h); // "number"
console.log(h); // 26