
function add (a, b) 
{
    console.log(a + b);
}
add(200,300)  


function sub ( x, y ){
    return x - y;
}
let result = sub(200, 100);
console.log(result);


function mul ( c, d ){
    return c * d;
}

let result1 = mul(10, 20);
console.log(result1);

function Greetings(message){
    console.log(message);
}
Greetings("Congrualtions Meher, Welcome Onboard!!");

function Greetings(){
    return "Hello Meher, Welcome to the team!!";
}
let message = Greetings("Let Me Introduce Meher in our team!!");
console.log(message);

console.log(Greetings());