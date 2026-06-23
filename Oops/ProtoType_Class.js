class employee
{
      constructor(Eid, Ename)
      {
            this.Eid = Eid;
            this.Ename = Ename;
      }
}

employee.prototype.Role = "QA Engineer";

employee.prototype.Display = function()
{
    console.log(this.Eid, this.Ename, this.Role)
}

emp = new employee(220173, "Meher Shyam");
emp.Display();


emp2 = new employee(220174, "Manikonda");
emp2.Display();
