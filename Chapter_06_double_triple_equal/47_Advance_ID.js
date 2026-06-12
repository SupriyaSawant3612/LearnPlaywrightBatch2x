let a = 10;
console.log(++a + a); //22 (pre-increment: increments the value first, then returns it)
console.log(a); //11 (a is now 11 after the pre-increment)


let a = 10;
console.log(a++ + ++a); //21 (post-increment: returns the value first, then increments it)
console.log(a); //12 (a is now 12 after the post-increment and pre-increment)


let a = 10;
console.log(++a + ++a); //22 (pre-increment: increments the value first, then returns it)
console.log(a); //12 (a is now 12 after the pre-increment and post-increment)

let a = 5;
console.log(a++ + ++a - --a + a-- + ++a); //18 (post-increment: returns the value first, then increments it)
console.log(a); //7 (a is now 7 after all the increments and decrements)