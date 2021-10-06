let myString1 = "love one code"; //love-one-code
let myString2 = "LoveOneCode"; //love-one-code
let myString3 = "-Love-One-Code-"; //love-one-code

function kebabCase(myString){
    let result = "";
    for(let i=0; i<myString.length; i++){
    let codeAscii = myString.charCodeAt(i);
    if(myString.charAt(i)===" "){
        result += "-";
    }
    else if(codeAscii>=65 && codeAscii<=90){
        if(i != 0 && myString.charAt(i-1)!="-"){
            result += "-";
        }
        result += String.fromCharCode(codeAscii +32);
    }
     else if((i===0 || i===(myString.length - 1))&& myString.charAt(i)==="-"){

     }
     else{
            result += myString.charAt(i);
     }
    }
    return result;
}
console.log(kebabCase("-Love-One-Code-"));
/*
    function kebabCase(myString){
        let result = "";
        for(let i=0; i<myString.length; i++){
            let codeAscii = myString.charCodeAt(i);
            if(myString.charAt(i)===" "){
                result += "-";
            }
            else if(myString.charAt(0) === '-' || myString.charAt(myString.length -1) === '-'){
                result += "";
            }
            else if(codeAscii>=65 && codeAscii<=90){
                    if(i===0 || myString.charAt(i-1) === '-'){
                        result += String.fromCharCode(codeAscii(i) + 32);
                    }
                    else{
                        result += "-" + String.fromCharCode(codeAscii(i) + 32);
                    }
            }
            else{
                result += myString.charAt(i);
            }
        }
        return result;
    }

console.log(kebabCase(myString3));
*/
/*
    function kebabCase(myString){
        let result = "";
        for(let i=0; i<myString.length; i++){
            let codeAscii = myString.charCodeAt(i);
            let charOfIndex = myString.charAt(i);
            if(myString.charAt(i)===" "){
                result += "-";
            }
            else if(i===0 && codeAscii>=65 && codeAscii<=90 && charOfIndex != "-"){
                result += String.fromCharCode(codeAscii + 32);
            }
            else if(i!=0 && codeAscii>=65 && codeAscii<=90){
                result += "-" + String.fromCharCode(codeAscii +32);
            }
            else if(){

            }
            else{
                result += myString.charAt(i);
            }
        }
        return result;
    }

    console.log(kebabCase("-Love-One-Code-"));
    */