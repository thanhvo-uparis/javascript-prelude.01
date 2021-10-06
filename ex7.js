let myString1 = "gold d roger"; //gold_d_roger
let myString2 = "GlodDRoger"; 
let myString3 = "-Glod-D-Roger-";

    function snakeCase(myString){
        let result = "";
        for(let i=0; i<myString.length; i++){
            let codeAscii = myString.charCodeAt(i);
            if(myString.charAt(i)===" "){
                result += "_";
            }
            else if(codeAscii>=65 && codeAscii<=90){
                if(i!=0 && myString.charAt(i-1)!="-"){
                    result += "_";
                }
                result += String.fromCharCode(codeAscii + 32);
            }
            else if((i===0||i===(myString.length - 1) && myString.charAt(i)==="-")){

            }
            else{
                result += myString.charAt(i);
            }

        }
        return result;
    }

    console.log(snakeCase("gold d roger"));