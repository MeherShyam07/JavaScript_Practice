class employee 
{

  constructor()
  {
      let Name, Role;
  }
    
    getName()
    {
        return this.Name;
    }

    setName(Name)
    {
        this.Name = Name;
    }

    getRole()
    {
        return this.Role;
    }

    setRole(Role)
    {
        this.Role = Role;
    }
}

let emp = new employee();
emp.setName("Meher Shyam");
emp.setRole("QA Engineer");

console.log("Employee Name ---> " + emp.getName(),", " + "Role ---> "  + emp.getRole());

