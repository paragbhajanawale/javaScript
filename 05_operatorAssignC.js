var info= function (gradScore,hscScore,sscScore,candidateName){
var result=gradScore>=70 ||hscScore>=80 || sscScore>90 ?`Congrates  " 
${candidateName} "   You are eligible for TCS interview`:`Unfortunetely  " 
${candidateName} " You are not eligible for interview`;
console.log(result);
}

info(80,86,90,"Parag Bhajanawale");
info(70,65,55,"Manoj Mhetre");
info(60,79,88,"Savan Teke");
