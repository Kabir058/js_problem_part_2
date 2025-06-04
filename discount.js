function getDiscount(quantity)
{
    if( quantity<=100)
    {
        let total = quantity *100;
        return total;
    }
    else if(quantity<=200)
    {
        let total = quantity *90;
        return total;
    }
    else{
         let total= quantity*70;
        return total;
    }
}
let tot = getDiscount(5)
console.log(tot)