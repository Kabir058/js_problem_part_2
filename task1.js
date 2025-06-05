// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function getLowest(numbers)
{
    let low =numbers[0] ;
    for(let number of numbers)
    {
        if(number<low)
        {
            low =number;
        }
    }return low;
}

let heights2 = getLowest([167, 190, 120, 165, 137]);
console.log(heights2)