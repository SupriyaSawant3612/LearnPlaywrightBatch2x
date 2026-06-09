let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "RJ will go to goa" : "No goa";
console.log(rj_will_goa); //ternary operator (condition ? value_if_true : value_if_false)
// condition ? true : false; 

let statusCode = 404;
let category = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Service Error";
console.log(`Status ${statusCode}: ${category}`);

let a = 45, b = 78;
let max = a > b ? a : b;
console.log(`Max of ${a} and ${b} is ${max}`);

// Nested ternary for max of three numbers
let x = 12, y = 45, z = 38;
let maxThree = x > y ? (x > z ? x : z) : (y > z ? y : z);
console.log(`Max of ${x}, ${y}, ${z} is ${maxThree}`);