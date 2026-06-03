
let fruits = ['apple', 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'pineapple'];

//toString() method is used to convert an array into a string. 
// It returns a string with all the array elements separated by commas.

console.log("<<<<<<<< Here we are using toString() method >>>>>>>>>>") 
console.log(fruits.toString());

//join() method is used to convert an array into a string. 
// It returns a string with all the array elements separated by the specified separator. 
// If no separator is provided, it defaults to a comma.

console.log("<<<<<<<< Here we are using join() method >>>>>>>>>>")
console.log(fruits.join(" * ")); 

//pop() method is used to remove the last element from an array and returns that element.

console.log("<<<<<<<< Here we are using pop() method >>>>>>>>>>")
console.log(fruits.pop()) // pineapple
console.log(fruits) // [ 'apple', 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon' ]

//push() method is used to add one or more elements to the end of an array and returns the new length of the array.

console.log("<<<<<<<< Here we are using push() method >>>>>>>>>>")
console.log(fruits.push("papaya", "guava")) // 9
console.log(fruits) // [ 'apple', 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava' ]

//shift() method is used to remove the first element from an array and returns that element.

console.log("<<<<<<<< Here we are using shift() method >>>>>>>>>>")
console.log(fruits.shift()) // apple

console.log(fruits) // [ 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava' ]   


//map() method is used to create a new array by calling a provided function on every element in the calling array.

console.log("<<<<<<<< Here we are using map() method >>>>>>>>>>")
let newFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
})

console.log(newFruits) // [ 'MANGO', 'BANANA', 'GRAPES', 'ORANGE', 'KIWI', 'WATERMELON', 'PAPAYA', 'GUAVA' ]   
 
console.log(fruits) // [ 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava' ]

//find() method is used to return the value of the first element in the array that satisfies the provided testing function.

console.log("<<<<<<<< Here we are using find() method >>>>>>>>>>")
let findFruit = fruits.find((fruit) => {
    return fruit.length > 5;
})

console.log(findFruit) // banana


