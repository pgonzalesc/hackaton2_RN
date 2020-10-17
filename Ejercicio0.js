/*
Ejercicio #0: Escriba una función de JavaScript que acepte una cadena
como parámetro y convierta la primera letra de cada palabra de la
cadena en mayúsculas
*/

function getFirstUpper(text){
    let char, result = '';
    let cont = 0;

    for(let key=0; key<text.length; key++){
        char = text.charAt(key);
        cont++;
        if(cont === 1) 
            char = char.toUpperCase();
        result = `${result}${char}`;
        if(char === " ") 
            cont = 0;
    }
    console.log(result);
}

getFirstUpper("hola mundo");