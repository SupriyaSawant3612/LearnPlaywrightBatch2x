console.log(score); // Output: undefined
let score = 100; // This will throw an error because 'score' is not hoisted like 'var' and is in the temporal dead zone until it is declared.


// -----TDZ for "score" starts here-----
// console.log(score); // This will throw a ReferenceError because 'score' is in the temporal dead zone
// score = 100; // This will also throw a ReferenceError because 'score' is not declared yet
// typeof score; // This will also throw a ReferenceError because 'score' is not declared yet
// -----TDZ for "score" ends here-----