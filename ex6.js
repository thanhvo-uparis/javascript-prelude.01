/*
function test(myString){
    for(let i=0; i<myString.length; i++){
        if(myString[i]===" "){
            
        }
    }
}
*/

/*
function test(myString){
    let result = '';
    for(let i=0; i<myString.length; i++){
        if(myString.charAt(i)===" "){
            result += "-"
        }
    }
    return result;
}
console.log(test(myString1));

*/
let myString1 = "love one code";
let myString2 = "LoveOneCode"; //love-one-code
let myString3 = "-Love-One-Code-"; //love-one-code

function test(myString){
    let result = '';
    for(let i=0; i<myString.length; i++){
        let codeOfChar = myString.charCodeAt[i];

        //pour les espaces
        if(myString[i]===" "){
            result +='-';
        }
        else if(codeOfChar>=65 && codeOfChar<=90){
                let
        }
        else{
            result += myString[i];
        }
    }
    return result;
}
console.log(test(myString1));



/*
function kebabCase(myString){
      if(myString.char)


}
*/