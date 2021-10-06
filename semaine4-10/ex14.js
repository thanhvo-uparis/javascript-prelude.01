let myString1 = "tony tony";

    function count(myString){
            let compter = 0;
            while(myString[compter] !== undefined){
                compter++;
            }
            return compter;
    }

    console.log(count(myString1));