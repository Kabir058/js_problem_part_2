let array =getLowest([12,3453,654,74,342,254,456,45,245,243345,6,456,564])

function getLowest(number)
{   
    let lowest =number[0];
    for(let num of number)
        {
        if(num<lowest)
        {
            lowest=num;
        }
        }
        return lowest;

}
console.log(array)