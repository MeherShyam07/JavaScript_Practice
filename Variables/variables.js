
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

