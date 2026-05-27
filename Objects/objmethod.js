

let employee = {
   Ename : "Meher Shyam",
   EID : 12345,
   Edept : "IT",
   Erole : "Software Engineer",
   Salary : 56196,   
   bonus : function(){
      return (this.Salary * 20/100);   
   }
};

console.log(employee.Ename);
console.log(employee.bonus());