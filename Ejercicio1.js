/*Ejercicio #1: Escriba una función de JavaScript que acepte una cadena
como parámetro y encuentre la palabra más larga dentro de la cadena*/

function getMaxLengthtString(text){
    let char, result = '', word='';
    let maxLength = 0;
    
    for(let key=0; key<text.length; key++){
        char = text.charAt(key);
        word = `${word}${char}`;
        if(char === " " || key === text.length-1) {
            word = word.trim();
            if(word.length >= maxLength){
                maxLength = word.length;
                result = word;
            }
            word = '';
        }  
    }
    console.log(result);
}

getMaxLengthtString("hola programadores de react native");