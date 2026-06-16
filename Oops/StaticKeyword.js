class StaticKeyword {
 
    static a = 100;
    static b = 200;

    c = 300;
    d = 400;

    static sum() 
    {
        console.log(StaticKeyword.a + StaticKeyword.b);
    }

    sub() 
    {  
        console.log(this.d - this.c);
    }

}

    StaticKeyword.sum();
    console.log(StaticKeyword.a);
    console.log(StaticKeyword.b);

    StaticKeyword.a = 1500;
    console.log("After Updating The Value --> " + StaticKeyword.a);

    let sk = new StaticKeyword()
    sk.sub();
    console.log("Non Static C Value --> " + sk.c);
    console.log("Non Static D Value --> " + sk.d);



 