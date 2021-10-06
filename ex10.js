let myString1 = "chopper";  //c

    
    function first(myString, len=1){
        let result = "";
        if(len>myString.length){
            return myString;
        }
        
        for(let i=0; i<len; i++){
            result += myString[i];
        }
        return result;
    }

    // console.log(first(chopper));
    // console.log(first("chopper"));
    console.log(first("chopper", 8));