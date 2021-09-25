let myChar = 'c';
let myString1 = "one code"; //One Code
let myString2 = "One CODE"; //One code


    function capitaleize(myString, restToLoweropt=false){
            let result = "";
            for(let i=0; i<myString.length; i++){
                let codeAscii = myString.charCodeAt(0);
                if(i===0 && codeAscii>=97 && codeAscii<=122){
                    result = String.fromCharCode(codeAscii - 32);
                }
                else if(i != 0 && codeAscii>=65 && codeAscii<=90 && restToLoweropt){
                    result += String.fromCharCode(codeAscii + 32);
                }
                else{
                    result += myString.charAt(i)
                }
            }
            return result;
    }

console.log(capitaleize(myString2, true));
