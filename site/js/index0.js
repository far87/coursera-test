/*This .js file helps us to better understand how scopes work in javascript*/ 
var x ="Hello World!!!";
console.log("global x: "+x);//--> it will print Hello world 

var a= function (){
    var y="only in a scope";
    var x= "inside a";
    console.log("a x: "+x);//--> it will print inside a
    b();/*--> it will print Hello world || this happens because b function is defined in global scope, 
    so its execution context will have an outer reference pointed to global scope not to a scope.
    This is ai important Javascript rule: no matter where a function is invoked,what matters is where a function is defined.
    */
   /* What happens if we define b inside a function ?
      Let see it defining a function c that executes the same instructions of b function
   */
   function c(){
    console.log("c x: "+x);
   }
   c();/*--> it will print inside a */
}

function b(){
    console.log("b x: "+x);
}
a();

/*Now consider the use of the let keyword */

var name ="Antonio";
if(name === "Antonio"){
    var name="Peppe";
    window.alert("ciao "+name);
}
window.alert("ciao "+name);
/*In the above example the alert will print "ciao Peppe" all times we call it.This 
happens because of var keyward not see the block scope, 
it sees only global and function scopes.But what if we change var keyword with let 
keyword? Let see*/


let nome ="Antonio";
if(nome === "Antonio"){
    let nome="Peppe";
    window.alert("ciao "+nome);
}
window.alert("ciao "+nome);
/*The code above will print in the alert "ciao Peppe" the first time and "ciao Antonio
"the second one.This because the let keyword sees the block scope and variables
holding "Peppe" exists only in the block scope.The same behaviour has the const keyword */ 
 