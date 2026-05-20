let a = 10;
console.log(a); // Output: 10
//defining of the function
function printHello() {
    console.log("Hello, The testing academy!");
    let a = 20;
    // This variable 'a' is local to the function printHello
    console.log(a); // Output: 20
    if (true) {
        let a = 30;
        // This variable 'a' is still the same as the one declared in printHello due to function scope
        console.log(a); // Output: 30
    }
    console.log("F->", a);// Output: 20
}
printHello();