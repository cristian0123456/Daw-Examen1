var bbtt = document.getElementById("boton");
bbtt.addEventListener("click",calcular);



function calcular(){
    //variables globales
var a = parseFloat(document.getElementById("a").value);
var b = parseFloat(document.getElementById("b").value);


let comparador = ((b*b) - (4*a*b));
let real = false;
let imaginario = false;

if(comparador <= 0){
   imaginario = true;
    
   }else{
   real = true;
   }

if(imaginario == true){
   comparador = comparador*(-1);
    alert("Lasolucion imaginaria es: "+ (-b/(2*a))+" + "+((comparador)/(2*a))+"i y "+(-b/(2*a))+" - "+(comparador*comparador/(2*a)));
   }
if(real == true){
    
        alert("La cordenanda polar es: x1 = "+ (-b + (comparador)) / (2*a) +"x2 = "+(-b - (comparador)) / (2*a));
}   

}

