let myString1 = "tony tony chopper";

    function substr(myString, start, len){
        let result ="";
        
        if(!len){
            len = myString.length - start;
        }
        for(let i=0; i<len; i++){
            result += myString[start + i];
        }
        return result;
    }

    console.log(substr("tony tony chopper",10));