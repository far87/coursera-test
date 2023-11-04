/*This .js file explains the closure feature of Javascript */

function multiplier(molt){
    var moltiplicatore=molt;//passaggio per rendere meglio il concetto
    return function (x){
        return moltiplicatore * x;
    }
}

var doubleAll=multiplier(2);
console.log(doubleAll(3));//when executed it will print 6

/*When we invoke multiplier function by passing two as its value,
this function returns a function declaration that is assigned to a global variable 
doubleAll. The when we execute the doubleAll function we can see that this function remembers the
two value passed to multiplier function before, and it should not happen because the multiplier function gets executed
before, and so the dedicated stack gets cancelled.But , thanks to closure feature, doubleAll function stores and rememember 
this value.
So the closure is the mechanism for wich when Javascript returns a function by executing another function, the function 
returned contains the outer reference pointing to the scope of the function that returning it
*/

//Let's see another example
 
function wrap(n){
    var local=n;
    return ()=>local;
}

var wrap1=wrap(1);
var wrap2=wrap(2);
console.log(wrap1()+" "+wrap2());//when executed ti will print : "1 2"