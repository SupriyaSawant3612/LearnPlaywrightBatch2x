console.log(0 == ""); //true (loose equality operator, it performs type coercion)
console.log(0 === "0"); //false (strict equality operator, it does not perform type coercion)
console.log("" == "0"); //false (loose equality operator, it performs type coercion)
//transitive broken
```
//*"" == 0      // true  → "" → Number("") → 0, 0 == 0
"0" == 0     // true  → "0" → Number("0") → 0, 0 == 0
"" == "0"    // false → both strings, compared as-is
```
If `==` transitive: `a==b && b==c` → `a==c`.Here `"" == 0` and `0 == "0"` both true, but`"" == "0"` false.Broken.*//

    console.log(0 == false); //true (loose equality operator, it performs type coercion)
console.log(null == 0); //false (loose equality operator, it performs type coercion)
console.log(undefined == null); //false (loose equality operator, it performs type coercion)
console.log(undefined == undefined); //true (loose equality operator, it performs type coercion)
console.log(null == null); //true (loose equality operator, it performs type coercion)  
