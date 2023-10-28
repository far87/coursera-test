var obj=new Object();
obj.nome="Antonio";
obj.obj=new Object();
obj.obj.nome="Peppe";
console.log(obj);
console.log(obj.obj["nome"]); 
obj["cognome"]="cognome";
console.log(obj["cognome"]);

//constructor
function Circle(radius){    
    console.log(this);
}
/*if we consider the function above, what say us that it is a constructor is the capital c.The capital 
first letter is a convention, not a rule, for javascript Circle() is a normal function.So, if we simply 
call it, it returns the global window object that 'this' points to. But if we call it using 'new' keyword, 
things change.Infact using new keyword the reference this will not point to global window object but 
to Circle objet. Let's try it below. */

Circle();
new Circle();


/*Every time we call new keyword and create a new object, every object will have a special property called prototype.
We can access to this property simply by writing NameOfObject.prototype. Prototype is also an object and so we can define 
in it properties and these properties will be visible by every object we will create. To better understand, take a look
to code below.
*/
function Square(side){
    this.side=side;
}

Square.prototype.getArea=function (){
    return (this.side * 4);
};

var mySquare=new Square(4);
console.log("il mio quadrato ha area: "+mySquare.getArea());
console.log(mySquare);

/*So,now,let's take a look something that for some developers is considered a bug of Javascript */

var persona={
    nome: "Raffaele",
    cognome: "Maisto",
    presentati: function(){
        return "Ciao, mi chiamo "+this.nome+" "+this.cognome;
    }
}
console.log(persona.presentati());
/*In the code above we have created an object and defined in it a method presentati. We can see by the execution
of this code,that the 'this' keyword in the method points to the object in wich is defined. Now let's take a look to 
the code below */

var cane={
    razza: "bulldog",
    taglia: "piccola",
    presentati: function(){
        
        function stringa(){
            return "Il "+this.razza+" è un cane di taglia "+this.taglia;
        }

        console.log(stringa());

    } 
}
cane.presentati();
/*Once executed, the code above returns:  Il undefined è un cane di taglia undefined */
/*this happens beacause of when we define an inner function of a method, this function has the 'this' keyword
that points to window global object. For some coders this is a bug. Following we can see a common used pattern 
to fix this 'bug'  */

var cane2={
    razza: "bulldog",
    taglia: "piccola",
    presentati: function(){
        var self=this;
        function stringa(){
            return "Il "+self.razza+" è un cane di taglia "+self.taglia;
        }

        console.log(stringa());

    } 
}
cane2.presentati();
/*Once executed, the code above returns: Il bulldog è un cane di taglia piccola */