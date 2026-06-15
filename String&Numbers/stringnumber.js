
let Str = "Offer Letter";
console.log(Str);

// String Methods

// 1. length
console.log(Str.length); // 12

// 2. toUpperCase
console.log(Str.toUpperCase()); // "OFFER LETTER"

// 3. toLowerCase
console.log(Str.toLowerCase()); // "offer letter"

// 4. indexOf
console.log(Str.indexOf("Letter")); // 6

// 5. slice
console.log(Str.slice(0, 5)); // "Offer"

// 6. replace
console.log(Str.replace("Letter", "Email")); // "Offer Email"


// 7. includes
console.log(Str.includes("Offer")); // true
console.log(Str.includes("Email")); // false

// 8. split
console.log(Str.split(" ")); // ["Offer", "Letter"] 


// 9. Concatenation
let Str1 = "Congrats! Offer Letter";
let Str2 = "Received";
let Str3 = Str1 + " " + Str2;
console.log(Str3); // "Congrats! Offer Letter Received"
console.log(Str1 + " " + Str2); // "Congrats! Offer Letter Received"
console.log(Str1.concat(" ", Str2)); // "Congrats! Offer Letter Received"

// 10. charAt
console.log(Str.charAt(0)); // "O"
console.log(Str.charAt(6)); // "L"

// 11. trim
let Str4 = "   Hello World!   ";
console.log(Str4.trim()); // "Hello World!"

// 12. startsWith
console.log(Str.startsWith("Offer")); // true
console.log(Str.startsWith("Letter")); // false 

// 13. endsWith
console.log(Str.endsWith("Letter")); // true
console.log(Str.endsWith("Offer")); // false

// 14. repeat
console.log(Str.repeat(2)); // "Offer LetterOffer Letter"

// 15. substring
console.log(Str.substring(0, 5)); // "Offer"
console.log(Str.substring(6)); // "Letter"

// 16. padStart
console.log(Str.padStart(20, "*")); // "*******Offer Letter"

// 17. padEnd
console.log(Str.padEnd(20, "*")); // "Offer Letter*******"

// 18. match
console.log(Str.match(/Letter/)); // ["Letter", index: 6, input: "Offer Letter", groups: undefined]
console.log(Str.match(/o/gi)); // ["O", "o"]

// 19. search
console.log(Str.search(/Letter/)); // 6
console.log(Str.search(/o/i)); // 0

// 20. lastIndexOf
console.log(Str.lastIndexOf("e")); // 10
console.log(Str.lastIndexOf("x")); // -1 (not found)

// 21. valueOf
console.log(Str.valueOf()); // "Offer Letter"

// 22. toString
console.log(Str.toString()); // "Offer Letter"

// 23. charCodeAt
console.log(Str.charCodeAt(0)); // 79 (ASCII code for 'O')
console.log(Str.charCodeAt(6)); // 76 (ASCII code for 'L')  

//Number Methods

let num = 125;
console.log(num);

// isNaN
console.log(isNaN(num)); // false (num is a valid number)
console.log(isNaN("Hello")); // true (not a number)

// toString
console.log(num.toString()); // "125"   

// toFixed
console.log(num.toFixed(2)); // "125.00" (2 decimal places)

// toExponential
console.log(num.toExponential(2)); // "1.25e+2" (exponential notation with 2 decimal places)

// toPrecision
console.log(num.toPrecision(4)); // "125.0" (4 significant digits)

// parseInt
console.log(parseInt("123")); // 123
console.log(Number.parseInt("123")); // 123 (same as parseInt)
console.log(parseInt("123.45")); // 123 (only the integer part is parsed)
console.log(parseInt("abc")); // NaN (not a number)

// parseFloat
console.log(parseFloat("123.45")); // 123.45
console.log(parseFloat("123")); // 123
console.log(parseFloat("abc")); // NaN (not a number)

// isInteger
console.log(Number.isInteger(num)); // true
console.log(Number.isInteger(123.45)); // false

// isFinite
console.log(Number.isFinite(num)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
