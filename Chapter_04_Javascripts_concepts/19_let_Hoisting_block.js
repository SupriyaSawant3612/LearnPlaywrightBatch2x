let x = "Global";
if (true) {
    console.log(x); // Output: Global Scope
    //TDZ for "x" starts here because "x" is declared with "let" and is not accessible before its declaration in this block scope

    let x = "Block";
    console.log(x); // Output: Block Scope
}