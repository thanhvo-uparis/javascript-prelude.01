var a = 'BIENvenu';
var nom1 = "Chopper"; 
var nom2 = "tony tony"; //TONY TONY

function upperCase(myString){
    let result = '';
    for(let i=0; i<myString.length; i++){
        let codeOfChar = myString.charCodeAt(i);

        if(codeOfChar>=97 && codeOfChar<=122){
            result += String.fromCharCode(codeOfChar - 32);

        }
        else{
            result += myString.charAt(i);
        }
    }
    return result;
}

console.log(upperCase(nom1));