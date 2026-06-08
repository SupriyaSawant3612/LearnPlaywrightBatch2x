//comparison operator are used to compare two values and return a boolean value (true or false) based on the comparison.
// Exaples of comparison operators are ==, ===, !=, !==, >, <, >=, <=

let a = 10, b = 20;

console.log(a == b); //false
console.log(a != b); //true
console.log(a > b); //false
console.log(a < b); //true
console.log(a >= b); //false
console.log(a <= b); //true
console.log(42 === '42');//Check the both value and type. No conversion. //false (strict equality operator, it does not perform type coercion)
console.log(42 == '42'); //true //Check values only. (loose equality operator, it performs type coercion)