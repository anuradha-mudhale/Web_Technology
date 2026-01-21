// Basic Comparison Operators

console.log(2 > 1);     // true, 2 is greater than 1
console.log(10 < 11);   // true, 10 is less than 11
console.log(10 == 10);  // true, values are equal
console.log(10 >= 20);  // false, 10 is not greater than or equal to 20
console.log(20 <= 20);  // true, 20 is equal to 20
console.log(5 === "5"); // false, === checks both value and type
                        // 5 is number, "5" is string

// -------------------------------------------------------------

console.log("null conditions");

// Comparing strings with numbers
console.log("2" > 1);   // true, "2" is converted to number 2
console.log("02" > 1);  // true, "02" is converted to number 2

// Null comparisons
console.log(null > 0);  // false
console.log(null == 0); // false, null is only equal to undefined
console.log(null < 0);  // false

// Explanation:
// In JS, null only equals undefined using ==.
// Any relational comparison (>, <) converts null to 0, so null>0 → 0>0 → false

// -------------------------------------------------------------

console.log("undefined outputs");

// Comparisons with undefined
console.log(undefined == 0); // false, undefined is only equal to null
console.log(undefined > 0);  // false, undefined cannot be compared with numbers
console.log(undefined < 0);  // false, undefined cannot be compared with numbers

// Explanation:
// undefined is not converted to number in relational comparisons,
// so all undefined >0, <0, ==0 are false
