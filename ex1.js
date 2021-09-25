
var a = 'BIENvenu';
var nom1 = "Chopper";
var nom2 = "TONY TONY";
function lowerCase( myString){
   for(var i=0; i<=myString.length; i++){
    //  var result =  myString.charAt(i);
  
//      if(myString.charCodeAt(i)>=65 && myString.charCodeAt(i)<=90){
//             myChar = String.fromCharCode(myString.charCodeAt(i) +32);
//             return myChar;
//      }
//    }
        if(myString.charCodeAt(i)>=65 && myString.charCodeAt(i)<=90)){
            console.log(myString.charCodeAt(i));
        }
}

lowerCase(nom1);


/*

var a = "BienVenu";
var test1 = a.charCodeAt(0) + 32;
console.log(String.fromCharCode(test1));
result.charCodeAt(i)+32;
*/
