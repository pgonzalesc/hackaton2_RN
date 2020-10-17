/*Ejercicio #3: Escriba una función de JavaScript que acepte una cadena
como parámetro y encuentre la palabra más corta dentro de la cadena*/

function getMinLengthtString(text){
    let char, result = '', word='';
    let minLength = text.length;
    
    for(let key=0; key<text.length; key++){
        char = text.charAt(key);
        word = `${word}${char}`;
        if(char === " " || key === text.length-1) {
            word = word.trim();
            if(word.length <= minLength){
                minLength = word.length;
                result = word;
            }
            word = '';
        }  
    }
    console.log(result);
}

getMinLengthtString("hola programadores de react native");

