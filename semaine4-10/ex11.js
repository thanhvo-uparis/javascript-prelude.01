let myString1 = "chopper";

/*
    function last(myString, len=1){
        let result = "";
        if(len>myString.length){
            return myString;
        }

        for(let i=(myString.length - len); i<=(myString.lengh -1); i++){
            result += myString[i];
        }
        return result;
    }
*/

    function last(myString, len=1){
        let result = "";
        if(len > myString.length){
            return myString;
        }
        for(let i=0; i<len; i++){
            result += myString[myString.length - len + i];
        }
        return result;
    }

    console.log(last("chopper", 6));