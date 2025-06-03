let array =getMin([30000,34456,76000,12322,45000,70000])

function getMin(numbers)
{    let minimum = numbers[0];
    for(let num of numbers)
    {
         if(num<minimum)
         {
            minimum=num;
         }
    }return minimum;
}
console.log(array)