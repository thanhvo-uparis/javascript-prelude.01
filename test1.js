
var nom1 = "CHopPeR";
var nom2 = "TONY TONY";
// let test = "";

function lowerCase(myString){
     let test = "";
   for(var i=0; i<myString.length; i++){
        if(myString.charCodeAt(i)>=65 && myString.charCodeAt(i)<=90){
                var myNumber= myString.charCodeAt(i) + 32;
                var myCharacter= String.fromCharCode(myNumber);
                test+=myCharacter;
        }
        else{
             let myChar2 = myString.charAt(i);
             test+=myChar2;
        }
      }
        return test;

}
console.log(lowerCase(nom2));

// var a = "BienVenu";
// var test1 = a.charCodeAt(0) + 32;
// console.log(test1);