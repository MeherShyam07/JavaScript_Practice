
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

//unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array.

console.log("<<<<<<<< Here we are using unshift() method >>>>>>>>>>")
console.log(fruits.unshift("strawberry", "blueberry")) // 10
console.log(fruits) // [ 'strawberry', 'blueberry', 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava' ]    

//Delete() method is used to remove an element from an array at a specified index.

console.log("<<<<<<<< Here we are using delete() method >>>>>>>>>>")
delete fruits[2];   
console.log(fruits) // [ 'strawberry', 'blueberry', <1 empty item>, 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava' ]


//concat() method is used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array.

console.log("<<<<<<<< Here we are using concat() method >>>>>>>>>>")
let moreFruits = ["raspberry", "blackberry"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // [ 'strawberry', 'blueberry', 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava', 'raspberry', 'blackberry' ]


//slice() method is used to return a shallow copy of a portion of an array into a new array object selected 
// from start to end (end not included). The original array will not be modified.

console.log("<<<<<<<< Here we are using slice() method >>>>>>>>>>")
let citrusFruits1 = fruits.slice(4, 7);
console.log(citrusFruits1) // [ 'grapes', 'orange', 'kiwi' ]
console.log(fruits) // [ 'strawberry', 'blueberry', 'Mango', 'banana', 'grapes', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava' ]

//splice() method is used to change the contents of an array by removing or replacing existing elements 
// and/or adding new elements in place.

console.log("<<<<<<<< Here we are using splice() method >>>>>>>>>>")
let removedFruits = fruits.splice(2, 3, "dragonfruit", "passionfruit");
console.log(removedFruits) // [ 'Mango', 'banana', 'grapes' ]
console.log(fruits) // [ 'strawberry', 'blueberry', 'dragonfruit', 'passionfruit', 'orange', 'kiwi', 'watermelon', 'papaya', 'guava' ]

//sort() method is used to sort the elements of an array in place and returns the sorted array. 
// The default sort order is ascending, built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

console.log("<<<<<<<< Here we are using sort() method >>>>>>>>>>")
fruits.sort();
console.log(fruits) // [ 'blueberry', 'dragonfruit', 'guava', 'kiwi', 'orange', 'papaya', 'passionfruit', 'strawberry', 'watermelon' ]

//reverse() method is used to reverse the order of the elements of an array in place. 
// The first array element becomes the last, and the last array element becomes the first.

console.log("<<<<<<<< Here we are using reverse() method >>>>>>>>>>")
fruits.reverse();
console.log(fruits) // [ 'watermelon', 'strawberry', 'passionfruit', 'papaya', 'orange', 'kiwi', 'guava', 'dragonfruit', 'blueberry' ]

//filter() method is used to create a new array with all elements that pass the test implemented by the provided function.

console.log("<<<<<<<< Here we are using filter() method >>>>>>>>>>")
let citrusFruits2 = fruits.filter(fruit => fruit.includes("orange") || fruit.includes("kiwi"));
console.log(citrusFruits2) // [ 'orange', 'kiwi' ]
console.log(fruits) // [ 'watermelon', 'strawberry', 'passionfruit', 'papaya', 'orange', 'kiwi', 'guava', 'dragonfruit', 'blueberry' ]

//reduce() method is used to apply a function against an accumulator and each element in the array (from left to right)
// to reduce it to a single value.

console.log("<<<<<<<< Here we are using reduce() method >>>>>>>>>>")
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength) // 73

//every() method is used to test whether all elements in the array pass the test implemented by the provided function.

console.log("<<<<<<<< Here we are using every() method >>>>>>>>>>")
let allFruitsHaveMoreThanThreeLetters = fruits.every(fruit => fruit.length > 3);
console.log(allFruitsHaveMoreThanThreeLetters) // true

//some() method is used to test whether at least one element in the array passes the test implemented by the provided function.

console.log("<<<<<<<< Here we are using some() method >>>>>>>>>>")
let someFruitsHaveMoreThanTenLetters = fruits.some(fruit => fruit.length > 10);
console.log(someFruitsHaveMoreThanTenLetters) // true

//indexOf() method is used to return the first index at which a given element can be found in the array,
// or -1 if it is not present.

console.log("<<<<<<<< Here we are using indexOf() method >>>>>>>>>>")
let indexOfPapaya = fruits.indexOf("papaya");
console.log(indexOfPapaya) // 3

//lastIndexOf() method is used to return the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.

console.log("<<<<<<<< Here we are using lastIndexOf() method >>>>>>>>>>")
console.log(fruits) // [ 'watermelon', 'strawberry', 'passionfruit', 'papaya', 'orange', 'kiwi', 'guava', 'dragonfruit', 'blueberry' ]
let lastIndexOfPapaya = fruits.lastIndexOf("papaya");
console.log(lastIndexOfPapaya) // 3

//includes() method is used to determine whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log("<<<<<<<< Here we are using includes() method >>>>>>>>>>")
let hasMango = fruits.includes("Mango");
console.log(hasMango) // false  

//length property is used to return the number of elements in an array.

console.log("<<<<<<<< Here we are using length property >>>>>>>>>>")
console.log(fruits.length) // 9


//isArray() method is used to determine whether the passed value is an Array.

console.log("<<<<<<<< Here we are using isArray() method >>>>>>>>>>")
console.log(Array.isArray(fruits)) // true

