console.log("1. Find the greatest number amonge two number");
console.log("");
var greaterNumber = function(num1,num2){
var result =num1>=num2 ? `${num1} is greater`:`${num2} is greater`;
console.log(result);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("-----------------------------------------------");

console.log("2. Even Or Odd");
console.log("");
var isEvenOrOddNum=function(num){
    var result=num%2==0?true:false;
    return result;
}
var result=isEvenOrOddNum(29);
var res=(result==true)?"29 is even":"29 is odd";
console.log(`${res}`);

var result=isEvenOrOddNum(44);
var res=(result==true)?"44 is even":"44 is odd";
console.log(`${res}`);

var result=isEvenOrOddNum(0);
 var res=(result==true)?"0  is even ":"0 is odd";
 console.log(`${res}`);

 var result=isEvenOrOddNum(101);
 var res=(result==true)?"101 is even":"101 is odd";
 console.log(`${res}`);

 console.log("-----------------------------------------------");
 console.log("3. Check Wheather given word had Odd Or even");
 console.log("");
 var wordLength =function(word){
var len=word.length;
var result=len %2==0? "even":"odd";
return result;
 }
 var returnValue= wordLength("javaScript");
 console.log(`javaScript has ${returnValue}`);

 var wordLength=function(word){
    var len=word.length;
    var result=len %2==0 ? "even":"odd";
    return result;
     }
     var returnValue=wordLength("devoloper");
     console.log(`devoloper has  ${returnValue}`);


 var wordLength=function(word){
    var len=word.length;
    var result=len %2==0 ? "even":"odd";
    return result;
 }
 var returnValue=wordLength("Google");
 console.log(`Google has     ${returnValue} `);
 
 