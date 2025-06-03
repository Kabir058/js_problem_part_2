function woodQuantity(chairQuantity , tableQuantity, bedQuantity)
{
    let perChairwood =3;
    let perTablewood=10;
    let perBedwood = 50;
    let chairTotalwood =chairQuantity* perChairwood;
    let tableTotalwood = tableQuantity * perTablewood;
    let bedTotalwood = bedQuantity * perBedwood; 
    
    return Totalwood = chairTotalwood + tableTotalwood + bedTotalwood;
}

let wood =woodQuantity(3,35,2);
console.log(wood)
