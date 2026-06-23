class Company
{
     Role()
     {
        return "Hi am Meher, My ROle Is QA ENgineer";
     }
}

class Org extends Company
{
     Role()
     {
        return "Hi am Shyam, My ROle Is Software Devlepment Engineer Test";
     }
}

class IT extends Company 
{
     Role()
     {
        return "Hi am Prasad, My Role Is IT Admin";
     }
}

let s = new Company();
console.log(s.Role());

s = new Org();
console.log(s.Role());

s = new IT();
console.log(s.Role());
