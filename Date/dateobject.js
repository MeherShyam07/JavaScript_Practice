
let d = new Date();
console.log(d);

console.log(d.getFullYear()); // 4-digit year
console.log(d.getMonth()+1); // 1-12 (1=January, 2=February, ..., 12=December)
console.log(d.getDate()); // 1-31
console.log(d.getDay()+1);  // 1-7 (1=Sunday, 2=Monday, ..., 7=Saturday)  

console.log(d.getHours()); // 0-23
console.log(d.getMinutes()); // 0-59
console.log(d.getSeconds()); // 0-59

console.log(d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()); // DD/MM/YYYY format
console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); // HH:MM:SS format
