var nom1 = "JonnyDang";
var nom2 = "EFREI";

function lowerCase(myString){
    let result = "";

    for(let i=0; i<myString.length; i++){
        let codeOfChar = myString.charCodeAt(i);
        if(codeOfChar>=65 && codeOfChar<=90){
            result += String.fromCharCode(codeOfChar + 32);
        }
        else{
            result += charAt(i);
        }
    }
    return result;
}

console.log(lowerCase(nom1));