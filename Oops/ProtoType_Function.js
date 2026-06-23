function employee()
{
    this.Name = "Meher Shyam";
    this.Role = "QA Engineer";

}

employee.prototype.Salary = 56196;

emp = new employee();
console.log(emp.Name, emp.Role, emp.Salary);

emp2 = new employee();
console.log(emp2.Name, emp2.Role, emp.Salary);
