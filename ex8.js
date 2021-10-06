let myString1 = "One Code";

    function swapCase(myString){
        let result = "";
        for(let i=0; i<myString.length; i++){
            let myCode = myString.charCodeAt(i);
            if(myCode>=65 && myCode<=90){
                result += String.fromCharCode(myCode + 32);
            }
            else if(myCode>=48 && myCode<=57){
                result += myString[i];
            }
            else{
                // if(myString[i]===" "){
                //     result += myString[i];
                // }
                result += String.fromCharCode(myCode - 32);
            }
        }
        return result;
    }

    console.log(swapCase("1371 Fruits"));