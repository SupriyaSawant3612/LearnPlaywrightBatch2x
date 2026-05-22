// ======== All Number Types in JavaScript ========

// 1. Integer (decimal - base 10)
let decimal1 = 42;
let decimal2 = -100;
let decimal3 = 0;
console.log("Integer:", decimal1, decimal2, decimal3); // 42 -100 0

// 2. Floating-point
let float1 = 3.14;
let float2 = -0.5;
let float3 = 100.0;
console.log("Float:", float1, float2, float3); // 3.14 -0.5 100

// 3. Scientific / Exponential notation
let sci1 = 1.5e3;   // 1.5 × 10³ = 1500
let sci2 = 5e-3;    // 5 × 10⁻³ = 0.005
let sci3 = 2.5e10;  // 25000000000
console.log("Scientific:", sci1, sci2, sci3); // 1500 0.005 25000000000

// 4. Binary (base 2) - prefix 0b
let binary1 = 0b1010;  // 10 in decimal
let binary2 = 0b1111;  // 15 in decimal
console.log("Binary:", binary1, binary2); // 10 15

// 5. Octal (base 8) - prefix 0o
let octal1 = 0o12;  // 10 in decimal
let octal2 = 0o77;  // 63 in decimal
console.log("Octal:", octal1, octal2); // 10 63

// 6. Hexadecimal (base 16) - prefix 0x
let hex1 = 0xFF;   // 255 in decimal
let hex2 = 0x1A;   // 26 in decimal
let hex3 = 0xBEAD; // 48813 in decimal
console.log("Hex:", hex1, hex2, hex3); // 255 26 48813

// 7. BigInt (for numbers beyond 2⁵³ - 1) - suffix n
let big1 = 123456789012345678901234567890n;
let big2 = 0xFFn;   // 255n
let big3 = 0b1010n; // 10n
console.log("BigInt:", big1, big2, big3);

// 8. Special numeric values
let infinity1 = Infinity;
let infinity2 = -Infinity;
let notANumber = NaN;
let negativeZero = -0;
console.log("Special:", infinity1, infinity2, notANumber, negativeZero);

// 9. typeof all
console.log("\n--- typeof ---");
console.log(typeof 42);           // "number"
console.log(typeof 3.14);        // "number"
console.log(typeof 1.5e3);       // "number"
console.log(typeof 0b1010);      // "number"
console.log(typeof 0o12);        // "number"
console.log(typeof 0xFF);        // "number"
console.log(typeof 123n);        // "bigint"
console.log(typeof Infinity);    // "number"
console.log(typeof NaN);         // "number"

// 10. Number object methods
console.log("\n--- Number methods ---");
console.log(Number.MAX_VALUE);       // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);       // 5e-324
console.log(Number.MAX_SAFE_INTEGER);// 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);// -9007199254740991
console.log(Number.isInteger(42));   // true
console.log(Number.isInteger(3.14)); // false
console.log(Number.isNaN(NaN));      // true
console.log(Number.isFinite(Infinity)); // false
