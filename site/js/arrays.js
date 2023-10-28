//this .js file explains what arrays are and how Javascript deals with them

//Define an array
var array=new Array();
//set the array
array[0]="Raffaele";
array[1]=3;
array[2]={nome: "Antonio"};
array[3]=function (){console.log(this)};
//because of javascript is a dinamically typed language,within the array we can insert all types: primitive, object and so on
console.log(array);

//Short hand array creation
var ar=["Antonio","Luigi",{nome: "Filippo",cognome: "Martucci"}];//simply putting values between square brackets
console.log(ar);

//loop over an array and print out its value
for(var p in array)
    console.log(array[p]);