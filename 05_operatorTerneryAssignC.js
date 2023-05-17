console.log("Male Marriage Eligibility");
console.log("-----------------------------------------------------");
var maleMarriageEligibility =function(gender,age,boyName){
    var result=gender="male"&&age>=21 ? `Hey ${boyName} You are eligible for marriage`:`Hey ${boyName} You are nor eligible for Marriage`;
    console.log(result);
   }
   maleMarriageEligibility("male",25,"Billgates");
   maleMarriageEligibility("male",17,"stew jobs");
console.log("");

console.log("Female Marriage Eligibilty");
console.log("-------------------------------------------------------");
   var femaleMarriageEligibility=function(gender,age,femaleName){
    var result=gender="female"&& age>=18 ?`Hey ${femaleName} you are eligible for Marriage`: `hey ${femaleName} you are not eligible for marriage`;
    console.log(result);
   }
   femaleMarriageEligibility("female",16,"jenifer");
   femaleMarriageEligibility("female",27,"malinda gates");



   
