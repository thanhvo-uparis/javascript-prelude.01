/*
let myString1 = "ch0pper";

    function length(myString){
        let compter = 0;
        for(let i=0; i<myString.length ; i++){
            let codeAscii = myString.charCodeAt(i);
            if((codeAscii>=65&&codeAscii<=90) || (codeAscii>=97&&codeAscii<=122) || (codeAscii>=48&&codeAscii<=57)){
                compter += 1;
            }
        }
        return compter;
    }

    console.log(length(myString1));

    */

let myString = "ch0pper";

    function length(myString){
        let compter = 0;
        while(myString[compter]){
            compter ++;
        }
        return compter;
    }
    console.log(length(myString));