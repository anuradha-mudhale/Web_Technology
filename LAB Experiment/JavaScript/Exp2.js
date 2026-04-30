// 1. Array, Function, Object declaration
let arr = [1,2,3,4,5];
console.log(arr);
console.log(typeof(arr)); // object

function displayName(){
    let myName = "Anuradha";
    console.log(`Hello ${myName}`);
}
displayName();

let vehicle = { 
    name: "Tunwal-Alpha-Pro",
    type: "e-bike",
    price: 60000,
    speed: "100km/hr"
};
console.log(vehicle);

let str = "Hello Moto";
console.log(str);
console.log(typeof(str)); // string

// --------------------------------------------------
// 2. Find largest number in string
let strNum = "Anu21@15dipu";
let max = -1;

for (let i = 0; i < strNum.length; i++) {
    if (!isNaN(strNum[i])) {
        let n = Number(strNum[i]);
        if (n > max) {
            max = n;
        }
    }
}
console.log("Largest number:", max);

// --------------------------------------------------
// 3. Find reverse number in string
let str1 = "Anu21@15dipu";
let result = "";
let numbers = "";

// extract numbers
for (let i = 0; i < str1.length; i++) {
    if (!isNaN(str1[i])) {
        numbers += str1[i];
    }
}

// reverse numbers
let revNum = "";
for (let i = numbers.length - 1; i >= 0; i--) {
    revNum += numbers[i];
}

// insert reversed numbers back
let k = 0;
for (let i = 0; i < str1.length; i++) {
    if (!isNaN(str1[i])) {
        result += revNum[k++];
    } else {
        result += str1[i];
    }
}
console.log(result);

// --------------------------------------------------
// 4. Check palindrome number
function isPalindrome(num) {
    let original = num;
    let rev = 0;

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (original === rev) {
        console.log(`${original} is palindrome`);
    } else {
        console.log(`${original} is not palindrome`);
    }
}

isPalindrome(121);

// --------------------------------------------------
// 5. Fibonacci series
function fibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);

    for (let i = 2; i < n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
fibonacci(7);

// --------------------------------------------------
// 6. Find largest element in array
let val = [101,102,103,104,105];
let largest = val[0];

for (let i = 1; i < val.length; i++) {
    if (val[i] > largest) {
        largest = val[i];
    }
}
console.log("Largest element:", largest);

// --------------------------------------------------
// 7. Remove duplicate elements
let arrDup = [1,2,3,2,4,3,5];
let unique = [];

for (let i = 0; i < arrDup.length; i++) {
    if (!unique.includes(arrDup[i])) {
        unique.push(arrDup[i]);
    }
}
console.log("Without duplicates:", unique);

// --------------------------------------------------
// 8. Find missing number in array
let missArr = [1,2,3,5];
let n = 5;
let total = (n * (n + 1)) / 2;
let sum = 0;

for (let i = 0; i < missArr.length; i++) {
    sum += missArr[i];
}
console.log("Missing number:", total - sum);

// --------------------------------------------------
// 9. Function to find even or odd
function evenOddFind(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
evenOddFind(191);

// --------------------------------------------------
// 10. Function to find sum of array
function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log("Sum:", sum);
}
sumOfArray([10,20,30,40]);

//--------------------------------------------------
// 11. Count vowels in string
function countVowel(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log("Vowel count:", count);
}

countVowel("we are buddies");
