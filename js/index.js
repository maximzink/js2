
/*for(let i=5; i>1; i= i-2){
    
   document.write( i + "Hello");
    
}



let   i=1;
while (i <= 100){
    document.write(i + "hello world");
    i++;
}*/

/*let num = parseFloat(prompt("enter a number"));

while(isNaN(num)){
    
    alert("Please enter a number");
    
    num = parseFloat(prompt("enter a number"));
    
}
alert("Thank you. You entered  number:" + num);
*/
let products = ['Toyote corolla','Tesla','Chevrolet'];


products.push("Ferrari");

products[10]= "porshe";

for (let i=0; i<products.length; i++){
    if(products[i]!==undefined){
    
    document.write(products[i]);
    }
}

