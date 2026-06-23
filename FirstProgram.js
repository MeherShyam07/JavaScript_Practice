
//consider the following code snippet that attempts to parse JSON data.
	//identify and handle any potential errors that may occur during execution
	// input : const jsonData ='{"name": "Jhon", "age":30}'; output : Parsed JSON: {name: 'Jhon', age:30 }

const jsonData = '{"name": "Jhon", "age": 30}'; // Corrected JSON format

try {
	const parsedData = JSON.parse(jsonData);
	console.log("Parsed JSON:", parsedData);
}catch (error) {
	console.error("Error parsing JSON:", error.message);
}	




//filter out adults(age >= 18).
//input: const persons =[{ name: 'John', age: 25 }, { name: 'Alice', age: 16 }, { name: 'bob', age: 30 }];
//output : output: [{name: 'John', age:25}, {name: 'Bob', age:30}

const persons = [{ name: 'John', age: 25 }, { name: 'Alice', age: 16 }, { name: 'Bob', age: 30 }];

const adults = persons.filter(person => person.age >= 18);
console.log("Adults:", adults);	


//input: orders = "[{ id: 1, total: 10 }, { id: 2, total: 20 }, { id: 3, total: 30}]"; 
//output: Total order amount: 60

const orders = '[{ "id": 1, "total": 100 }, { "id": 2, "total": 200 }, { "id": 3, "total": 300}]'; // Corrected JSON format
try {
	const parsedOrders = JSON.parse(orders);
	const totalAmount = parsedOrders.reduce((sum, order) => sum + order.total, 0);
	console.log("Total order amount:", totalAmount);
}catch (error) {
	console.error("Error parsing orders:", error.message);
}	
	

	//input: products = "[{ name: 'laptop', price: 1000 }, { name: 'smartphone', price: 800 }, { name: 'tablet', price: 500 }]";
	//output: Average price: 766.67

const products = '[{ "name": "laptop", "price": 1000 }, { "name": "smartphone", "price": 800 }, { "name": "tablet", "price": 500 }]'; // Corrected JSON format
try {
	const parsedProducts = JSON.parse(products);
	const averagePrice = parsedProducts.reduce((sum, product) => sum + product.price, 0) / parsedProducts.length;
	console.log("Average price:", averagePrice.toFixed(2));
}catch (error) {
	console.error("Error parsing products:", error.message);
}	

//input: const fruits = "[{ Apple, Bannana, Orange, Grapes, Pineapple, Mango, Strawberry }]";
//sortoffruitslength 
//output: Sorted fruits by length: [Apple, Grapes, Mango, Orange, Bannana, Pineapple, Strawberry]

const fruits = '[ "Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango", "Strawberry" ]'; // Corrected JSON format
try {
	const parsedFruits = JSON.parse(fruits);	
	const sortedFruits = parsedFruits.sort((a, b) => a.length - b.length);
	console.log("Sorted fruits by length:", sortedFruits);
}catch (error) {
	console.error("Error parsing fruits:", error.message);
}

//input : const win = "[{ year:1990", won : 1 }, { year: 1995, won: 0 }, { year: 2000, won: 1 }, { year: 2005, won: 0 }, { year: 2010, won: 2 }, { year: 2015, won: 1 }]";
//output: {yes{1990: 1, 2000: 1, 2010: 2, 2015: 1}, no{1995: 0, 2005: 0}}

const win = '[{ "year": 1990, "won": 1 }, { "year": 1995, "won": 0 }, { "year": 2000, "won": 1 }, { "year": 2005, "won": 0 }, { "year": 2010, "won": 2 }, { "year": 2015, "won": 1 }]'; // Corrected JSON format
try {	const parsedWin = JSON.parse(win);
	const result = { yes: {}, no: {} };	
	parsedWin.forEach(item => {
		if (item.won > 0) {
			result.yes[item.year] = item.won;
		} else {
			result.no[item.year] = item.won;
		}	
	});
	console.log("Result:", result);
}catch (error) {	console.error("Error parsing win data:", error.message);
}	
