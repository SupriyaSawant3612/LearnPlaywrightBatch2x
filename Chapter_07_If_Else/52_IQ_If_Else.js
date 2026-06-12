if ("hello") console.log("string is truthy"); //string is truthy
if (42) console.log("number is truthy"); //number is truthy
if ({}) console.log("object is truthy"); //object is truthy
if ([]) console.log("array is truthy"); //array is truthy*//


if (0) console.log("zero is falsy"); //No output, because 0 is falsy
if ("") console.log("empty string is falsy"); //No output, because empty string is falsy
if (null) console.log("null is falsy"); //No output, because null is falsy
if (undefined) console.log("undefined is falsy"); //No output, because undefined is falsy
if (NaN) console.log("NaN is falsy"); //No output, because NaN is falsy

let name = undefined;
if (name) {
    console.log("Name is defined.");
} else {
    console.log("Name is undefined.");
}