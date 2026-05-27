
    let person = {
        FirstName: "Meher",
        LastName: "Shyam",
        Age: 25,
        Email: "meher.shyam@example.com"
    };

    console.log(person["FirstName"]) // Meher
    console.log(person.Age) // 25
    console.log(person.Email) // meher.shyam@example.com

   
      var  FirstName =  "Manikonda"
      var  LastName = "Shyam"
      var  Age = 30
      var  Email = "manikonda.shyam@example.com"  

    var result = `FirstName : ${FirstName}, LastName : ${LastName}, Age : ${Age}, Email : ${Email}`
    console.log(result) // FirstName : Manikonda, LastName : Shyam, Age : 30, Email : manikonda.shyam@example.com

     person.City = "Hyderabad"
     console.log(person.City) // Hyderabad
     person["Country"] = "India"
     console.log(person.Country) // India
     console.log("Before:", person.Age)
     person.Age = 36
    console.log("After Update:", person.Age) // 36

    delete person.Age
    console.log("After Deletion:", person.Age) // undefined

    person["Age"] = 36  
    console.log("After Re-adding Age:", person.Age) // 36

    for (let key in person) {
      console.log(key + ": " + person[key]);
    }
s
