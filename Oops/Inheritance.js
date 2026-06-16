class car {

    Suzikhi() 
    {
       console.log("Swift Car");

    }
}

class Ecars extends car {

    ElectricCar()
    {
        console.log("E_Vitara");
    }
}

class luxuryCars extends Ecars {

    luxurycar()
    {
        console.log("Benz Cars")
    }
}

ec = new luxuryCars();
ec.Suzikhi();
ec.ElectricCar();
ec.luxurycar();
