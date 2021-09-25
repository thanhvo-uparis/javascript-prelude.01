let myChar = "A B";
let myString1 = "Woonan"; //woonan
let myString2 = "El Drago"; //el drago

    function decapitalize(myString){
           let result = '';
           for(let i=0; i<myString.length; i++){
               let codeAscii = myString.charCodeAt(i);
               if(codeAscii>=65 && codeAscii<=90){
                   result += String.fromCharCode(codeAscii + 32);
               }
               else{
                   result += myString.charAt(i);
               }
           }
           return result;
    }

    console.log(decapitalize(myString2));