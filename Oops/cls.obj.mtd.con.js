class Student {

   // constructor(id, name, age, gender) 
     getDetails(id, name, age, gender)
    {   

         this.id = id;
         this.name = name;
         this.age = age;
         this.gender = gender;
    }
    

    displayDetails() 
    {

        console.log(this.id, this.name, this.age, this.gender );

    }

}
   const st1 = new Student();
   st1.getDetails(1001, "John", 25, "Male");

    const st2 = new Student();
    st2.getDetails(1002, "Jane", 23, "Female");

   // const st1 = new Student(1001, "John", 25, "Male");
  //  const st2 = new Student(1002, "Jane", 23, "Female");

    st1.displayDetails();
    st2.displayDetails();







