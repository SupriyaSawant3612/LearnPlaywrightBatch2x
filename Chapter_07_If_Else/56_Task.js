// Even or odd 
let number = 7;
if (typeof number === 'number') {
    if (number % 2 === 0) {
        console.log('Even number');
    } else {
        console.log('Odd number');
    }
} else {
    console.log('Please provide a numeric value');
}
// Student grade Calculator 
let score = 85;
if (score === 100) {
    console.log("Grade: A+");
} else if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
}