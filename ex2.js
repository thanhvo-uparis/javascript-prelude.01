
var a = 'BIENvenu';
var nom1 = "choPPer";
var nom2 = "TONY TONY";

function upperCase(myString){
    let result = "";
    for(let i=0; i<myString.length; i++){
            if(myString.charCodeAt(i)>=97 && myString.charCodeAt(i)<=122){
                    let myNumber = myString.charCodeAt(i) - 32;
                    let myChar = String.fromCharCode(myNumber);
                    result+=myChar;
            }
            else{
                result += myString.charAt(i);
            }
        }
        return result;

}

    console.log(upperCase(nom1));