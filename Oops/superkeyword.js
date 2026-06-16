class Animal 
{
   constructor(color)
   {
     this.color = color;
   }

   printColor()
   {
     console.log(this.color);
   }
}

class Dog extends Animal 
{
    constructor(color, food)
    {
        super(color);
        this.food = food;
    }

    Eating()
    {
        console.log("Eating ----> " + this.food);
    }

    Display()
    {
        this.printColor();
        this.Eating()
    }
}

let d = new Dog("Brown", "Burgger");
d.Display();