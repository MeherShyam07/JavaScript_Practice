
let array = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
console.log(array);
console.log(array[0]);
console.log(array.length);

let myarray =["Meher", 12, "Software Engineer", true];
console.log(myarray);

let person1 = {
    name : "Manikonda Shyam Prasad Reddy",
    age : 35,
    role : "Software Test Engineer",
    isMarried : true
};

let person2 = {
    name : "Meher Manish Reddy",
    age : 24,
    role : "Support Engineer",
    isMarried : false
};

let person3 = {
    name : "Sneha Reddy",
    age : 35,
    role : "Embedded Engineer",
    isMarried : true
};

let myarray1 = [person1, person2, person3];
console.log(myarray1);
console.log(myarray1[0]);

for (let i=0; i<=array.length-1; i++){
    console.log(array[i]);
}

console.log("Using for of loop");

for (fruit of array){
    console.log(fruit);
}

console.log("Fruits" + " --> " + typeof array);

console.log(Array.isArray(array));