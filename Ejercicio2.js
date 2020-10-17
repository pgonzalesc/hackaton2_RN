/*Ejercicio #2: Escriba una función recursiva de JavaScript que determine
si un número es par o impar*/
let index = 0;
function parImpar(arrayNumber){
    let array = [];
    array = arrayNumber;
    let arrayPar = [];
    let arrayImpar = [];
    
    if(array[index]%2 === 0)
        console.log(`Par: ${array[index]}`);
    else
        console.log(`Impar: ${array[index]}`);
    index++;
    if(index == arrayNumber.length) 
        return;
    else
        parImpar(arrayNumber)
}
parImpar([21,2,53,1,50]);

