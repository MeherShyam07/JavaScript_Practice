
console.log("---Using var keyword for variable declaration and initialization: ---");

//Single statement variable declaration and initialization
var x = 20 

//multiple line variable declaration
var y;   //variable declaration
y = 10;  //variable initialization
var z = x + y;
console.log(z);

//Single line multiple variable declaration and initialization
var xx=100, y=200, z=300;
console.log(xx);
console.log(y);
console.log(z);
console.log(xx+y+z);
console.log(xx*y*z);
console.log(xx/y);
console.log(xx-y);
console.log(xx%y);


console.log("---Using let keyword for variable declaration and initialization: ---");


//Multiple line variable declaration and initialization
let c;
c = 200;
console.log(c);

//Single line variable declaration and initialization
let ge = "Hello World";
console.log(ge); 

//Multiple line variable declaration and initialization
let i = "Hello"; b = "World"; j = 1000;
console.log(i);
console.log(b);
console.log(j);

console.log("---Difference between var and let: ---");
var h;
console.log(h); //undefined
var k = 10;
console.log(h); //10
let f;
console.log(f); // Error: Cannot access 'f' before initialization
let l = 20;
console.log(l); //20


console.log("---Using const keyword for variable declaration and initialization: ---");
//Single line variable declaration and initialization
const PI = 3.14;
console.log(PI);
//const cannot be re-assigned and re-declared
//PI = 3.14159; // Error: Assignment to constant variable.




var name = "Am going to crack the interview and come up with a good package";
var words = name.split(" ");
console.log(words.length);

let a = 10;
let b = "20";
console.log(a * b); //In JavaScript, when you multiply a number (a) by a string that can be converted to a number (b), JavaScript will attempt to convert the string to a number before performing the multiplication. In this case, the string "20" can be converted to the number 20, so the result of a * b will be 200.

console.log("10" - "abc"); 

console.log(typeof NaN); 
console.log(5 == 6 ); //
console.log(5 == 5); //
console.log(5 === 5);  //
console.log(5 === "5"); //

console.log(boolean(0)); //false
console.log(boolean(1)); //true
console.log(boolean("")); //false
console.log(boolean("Hello")); //true       
console.log(boolean(null)); //false
console.log(boolean(undefined)); //false    
console.log(boolean(NaN)); //false
console.log(boolean([])); //true
console.log(boolean({})); //true
console.log(boolean(function() {})); //true

console.log(NaN == undefined); //false
console.log(NaN == NaN); //false
console.log(undefined == undefined); //true
console.log(undefined == null); //true

const city;
city = "New York"; // Error: Missing initializer in const declaration

let a = 10;

{
    let a = 20;
}

console.log(a); //

let a = 10;

{
    let a = 20;
    console.log(a); //
}

console.log(x); //
const x = 10; // Error: Cannot access 'x' before initialization


var p = 10;

function test() {
     p = 20;
    //console.log(p);
}
test(); //

console.log(p); //20
