/*This .js file explains the concept of the event lisener
and how things change by managing it from html or from .js script */

function saluta(){
    console.log(this);//this is the focus 
    this.textContent="Salutato";
    var name=document.getElementById("nome").value;
    var firstLetter=name.charAt(0);
    var firstLetterUpper=firstLetter.toUpperCase();
    if(!(firstLetter===firstLetterUpper)){
    document.getElementById("bachecaSaluti").innerHTML=
    "<h2>Ciao "+name+"</h2>"+
    "<h2>Ricorda che i nomi si scrivono con la prima lettera maiuscola</h2>";
    }
    else{
        document.getElementById("bachecaSaluti").innerHTML=
        "<h2>Ciao "+name+"</h2>";
    }
}
/*comment the line below to see saluta function how works with onclick attribute
N.B:before comment, be sure in the html corresponding file the instrucion with onclick 
attribute is active, and wich without it is inactive.
*/
document.getElementById("button").addEventListener("click",saluta);

/*The point of question is that if we manage the event listener from the html, in this 
case with onclick attribute, the 'this' reference in saluta function points to Window 
global object; otherwise,if we use the script .js and add an eventlistener to the element
the 'this' reference will point to the html element*/

/*There is another important event that the course treats but we don't mention in our 
code example. It's the 'DOMContentLoaded' event.It's triggered when all html elements
of the page are loaded and before that other css or js files are loaded.*/

/*An important argument is the event object.When we add an eventlistener to an element
the javascript engine passes an event object to the provided function.The instance of the event
object depends on the event itself.Every event object can have many properties in funcction
of the event.Let's see an example with the mousemove event */

document.querySelector("body").addEventListener("mousemove",function(event){
    if(event.shiftKey===true){//if we move the cursor with shift button pressed
        console.log(event.clientX);
        console.log(event.clientY);
    }
});
