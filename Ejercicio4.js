/*Ejercicio #4: Escriba una función de JavaScript para contar el número
de vocales en una cadena dada*/

function isVocal(char){
    let vocals = ['A','E','I','O','U'];
    let state;
    for(const vocal of vocals){
        if(vocal === char.toUpperCase()){
            state = 1;
            break;
        }  
        else
            state = 0; 
    }
    return state;
}

function countVocals(text){
    let char;
    let state;
    let count=0;
    for(let key=0; key<text.length; key++){
        char = text.charAt(key);
        state = isVocal(char);
        if(state === 1) count++;
    }
    return count;
}

let numVocals = countVocals('Pedro Gonzales');
console.log(numVocals);