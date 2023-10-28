function orderChickenWith(sideDish){
    console.log("Chicken with "+sideDish);
}

orderChickenWith("friarielli");//-> it will print chicken with friarielli
orderChickenWith();//-> it will print chicken with undefined
/*How can i avoid undefined? i can set a default value.
Let see how: */
 
function orderChickenWith_(sideDish){
    sideDish=sideDish || "patatine";
    console.log(sideDish); 
}

orderChickenWith_("melenzane");//->it will print chicken with melenzane
orderChickenWith_();//-> it will print chicken with patatine
orderChickenWith_(null);//-> it will print chicken with patatine
orderChickenWith_(undefined);//-> it will print chicken with patatine
/*This happens because of or operator, || , infact it transforms variables in boolean variables and 
if the first is false, like happens in case of null or undefined, it evaluate the second . And what it does in this case
is returning the value that transformed has true value. */
