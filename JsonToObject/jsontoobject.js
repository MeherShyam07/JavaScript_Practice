
let text = '{ "employees" : [' +
    '{"FirstName":"Meher","LastName":"Shyam"},' +
    '{"FirstName":"Manikonda","LastName":"Prasad"},' +
    '{"FirstName":"Reddy","LastName":"Merwan"},' +
    '{"FirstName":"Roman","LastName":"Regins"}' +
']}';

let obj = JSON.parse(text);

console.log(obj.employees[1].FirstName + " " + obj.employees[1].LastName);


let jsonData = `{
  "name": "Meher Shyam",
  "age": 30,
  "mobileNumber": {
    "phoneNumber": "9876543210",
    "faxNumber": "040-12345678"
  },
  "address": {
    "streetAddress": "123 Main Road",
    "city": "Hyderabad",
    "state": "Telangana"
  }
}`;

let obj1 = JSON.parse(jsonData);

console.log("Name: " + obj.name);
console.log("Age: " + obj.age);
console.log("Phone Number: " + obj.mobileNumber.phoneNumber);
console.log("Fax Number: " + obj.mobileNumber.faxNumber);
console.log("Street Address: " + obj.address.streetAddress);
console.log("City: " + obj.address.city);
console.log("State: " + obj.address.state);
        

            