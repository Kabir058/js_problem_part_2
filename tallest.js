let array =getMax([10,12,34,56,3,43,12,987,564,34,764,32])

function getMax(numbers)

{  let largest= numbers[0];
   for(let number of numbers)
   {
     if(number> largest)
     {
        largest = number;
     }
     
   } return largest;
}

console.log(array)