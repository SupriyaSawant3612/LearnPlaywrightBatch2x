// Difference between null vs undefined in JavaScript

// undefined - variable declared but not assigned a value
let a;
console.log(a); // undefined

// null - intentionally assigned "no value"
let b = null;
console.log(b); // null

// typeof check
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (this is a known JS bug/quirk)

// Comparison
console.log(undefined == null);  // true  (loose equality - they are equal)
console.log(undefined === null); // false (strict equality - they are different types)

// When do you get undefined?
let arr = [1, 2, 3];
console.log(arr[5]);            // undefined (index out of bounds)
let obj = {};
console.log(obj.name);          // undefined (property does not exist)

// When do you use null?
let user = null; // explicitly reset a reference


// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | == comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/

// typeof - operator- It will tell you the type of the variable. It will return a string indicating the type of the operand. For example, typeof 42 will return "number", and typeof "hello" will return "string". However, due to a historical quirk in JavaScript, typeof null returns "object", which can be confusing.
console.log(typeof pi);        // "number"

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof city);      // "undefined"
console.log(typeof car);       // "object" (null is an object in JS)
console.log(typeof person);    // "object"
console.log(typeof colors);    // "object"
console.log(typeof 10.5);      // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"

//Key things to note:
/*
- typeof null returns "object" (a well-known JS quirk)
- typeof array returns "object" (arrays are objects in JS)
- typeof undefined returns "undefined"
- typeof function(){} returns "function"
*/