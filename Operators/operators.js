
console.log("-----Operators in JavaScript-----");
console.log("Operators different types of operations they are Arithmetic, Assignment, Comparison, Logical, etc.");


console.log("1. Arithmetic Operators:");
console.log(`+  // Addition
-  // Subtraction
*  // Multiplication
/  // Division
%  // Modulus (Remainder)
** // Exponentiation
++ // Increment
-- // Decrement`);

console.log(" ----- Examples: ----- ");
console.log("5 + 2 =", 5 + 2);
console.log("5 - 2 =", 5 - 2);
console.log("5 * 2 =", 5 * 2);
console.log("5 / 2 =", 5 / 2);
console.log("5 % 2 =", 5 % 2);
console.log("2 ** 3 =", 2 ** 3);
let x = 5;
console.log("x++ =", x++);
console.log("After x++: x =", x);
x = 5;
console.log("++x =", ++x);

console.log("2. Assignment Operators:");
console.log(`=   // Assignment
+=  // Addition Assignment
-=  // Subtraction Assignment
*=  // Multiplication Assignment
/=  // Division Assignment
%=  // Modulus Assignment
**= // Exponentiation Assignment`);

console.log(" ----- Examples: ----- ");
let a = 10;
console.log("a =", a);
a += 5; 
console.log("a += 5 => a =", a);
a -= 3;
console.log("a -= 3 => a =", a);
a *= 2;
console.log("a *= 2 => a =", a);
a /= 4;
console.log("a /= 4 => a =", a);
a %= 3;
console.log("a %= 3 => a =", a);
a **= 2;
console.log("a **= 2 => a =", a);   



console.log("3. Comparison Operators:");
console.log(`==  // Equal to
=== // Strict equal to  
!=  // Not equal to
!== // Strict not equal to
>   // Greater than
<   // Less than
>=  // Greater than or equal to
<=  // Less than or equal to`); 

console.log(" ----- Examples: ----- ");
console.log("5 == '5' =>", 5 == '5');
console.log("5 === '5' =>", 5 === '5'); 
console.log("5 != '5' =>", 5 != '5');
console.log("5 !== '5' =>", 5 !== '5');
console.log("5 > 2 =>", 5 > 2);
console.log("5 < 2 =>", 5 < 2);
console.log("5 >= 5 =>", 5 >= 5);
console.log("5 <= 4 =>", 5 <= 4);

console.log("4. Logical Operators:");
console.log(`&& // Logical AND
|| // Logical OR
!  // Logical NOT`);    

console.log(" ----- Examples: ----- ");
console.log("true && false =>", true && false);
console.log("true && true =>", true && true);
console.log("false && false =>", false && false);
console.log("false || false =>", false || false);
console.log("true || false =>", true || false);
console.log("true || true =>", true || true);
console.log("!true =>", !true);
console.log("!false =>", !false);

console.log("5. Ternary Operator:");
console.log(`condition ? expressionIfTrue : expressionIfFalse`);
console.log(" ----- Example: ----- ");
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Age:", age);
console.log("Can vote?", canVote);






