
let i = 1;
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Finished counting.");

for (let j =2; j <= 20; j+=2) {
    console.log(j);
}
console.log("Finished counting even numbers.");

for (let k = 10; k >= 1; k--) {
    console.log(k);
}
console.log("Finished counting backwards.");


// Jumping Statments: break and continue
console.log("Using break statement:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
console.log("Finished using break statement.");

console.log("Using continue statement:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop body when i is 5
    }
    console.log(i);
}
console.log("Finished using continue statement.");