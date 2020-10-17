/*Ejercicio #2: Escriba una función recursiva de JavaScript que determine
si un número es par o impar*/

//Opción 1
function isParImpar1(number){
    number = Math.abs(number);
    if(number === 0)
        return "Par";
    else if(number === 1)
       return "Impar";
    else
      return isParImpar1(number-2);
}

console.log(isParImpar1(52));
console.log(isParImpar1(51));

//Opción 2
function isParImpar2(number, opc='P'){
    number = Math.abs(number);
    if(opc === 'P'){
        if(number === 0)
            return 'Par';
        else 
            return isParImpar2(number-1,'I');
    }else if(opc === 'I'){
        if(number === 0)
            return 'Impar';
        else
            return isParImpar2(number-1, 'P');
    }
}

console.log(isParImpar2(53));
console.log(isParImpar2(54));