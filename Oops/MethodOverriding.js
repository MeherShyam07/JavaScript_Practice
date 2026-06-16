class bank 
{
     RateOfInterest()
     {
        return 0;
     }
}

class axis extends bank
{
     RateOfInterest()
     {
        return 10.5;
     }
}

class sbi extends bank
{
     RateOfInterest()
     {
    
        return 12.5;
     }
}

ax = new sbi();
console.log(ax.RateOfInterest())
