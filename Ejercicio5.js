/*Ejercicio #5: Escriba una función de JavaScript para imprimir un número
entero con comas como miles de separadores*/

function getInverseText(text){
    let arrayInverse = [];
    let inverseText = '';
    for(let key=0; key<text.length; key++){
        arrayInverse.push(text.charAt(key));
    }
    arrayInverse = arrayInverse.reverse();
    for(const element of arrayInverse){
        inverseText = `${inverseText}${element}`
    }
    return inverseText;
}

function separator(number){
    number = number.toString();
    let newNumber = '';
    let count = 0;
    let start = 0;
    let indexof;
    let numberInverse = getInverseText(number);
    for(let key=0; key<numberInverse.length; key++){
        indexof = numberInverse.indexOf('.');
        if(indexof==-1) start=1;
        if(start === 1){
            if(count === 3){
                newNumber = `${newNumber},`;
                count = 0;
            }
            newNumber = `${newNumber}${numberInverse.charAt(key)}`;
            count++;
        }else
            newNumber = `${newNumber}${numberInverse.charAt(key)}`;
        if(numberInverse.charAt(key) == '.')  
            start=1;
    }
    newNumber = getInverseText(newNumber)
    console.log(newNumber);
}
separator(10000.23);