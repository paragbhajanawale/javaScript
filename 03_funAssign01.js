function show()
{
    
}
console.log("first function with no argument and no return type");
show();

function showTwo()
{
    console.log("");
}
console.log("Second function with no Argument and no return type");
show();


console.log("");
console.log("**********************************************************");
var firstName="Parag";
var lastName="Bhajanawale";
var collegeName="Vidnyan Mahavidyalay Sangola";
function personalDetails(firstName,lastName,collegeName)
{
console.log("First name :",firstName);
console.log("last name  :",lastName);
console.log("College name :",collegeName);
}
personalDetails(firstName,lastName,collegeName);





console.log("");
console.log("*************************************************************");

var name1="Virat";
var name2="Anushka";
var numOne=1000;
var numTwo=2000;
function swapValueDude(name1,name2){
console.log("Before swap",name1,name2);
var temp=name1;
name1=name2;
name2=temp;
console.log("After Swap :",name1,name2);
}
swapValueDude(name1,name2);
swapValueDude(numOne,numTwo);





console.log("");
console.log("*************************************************************");
var value1=10.23;
var value2=600;
var value3=40;
var val1="hello";
var val2="Good";
var val3="Morning";
function addThreevalues(value1,value2,value3)
{
var result=value1+value2+value3;
var resultt=val1+val2+val3;
    console.log("Addition is ",result);
    // console.log(resultt);
    

}
addThreevalues(value1,value2,value3);
addThreevalues(val1,val2,val3);