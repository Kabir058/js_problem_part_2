// function multiply(num1, num2)
// {
//     if(typeof num1 !=='number')
//     {
//         return "please put numbers"
//     }
//     else{
//     let mult= num1*num2;
//     return mult;
//     }
// }

// let oper = multiply(2, 9)
// console.log(oper)

function fullName(first, second)
{   
    if(typeof first !== 'string' )  
{
    return "Please provide string"
}

    let full = first + ' ' + second;
    return full;

}

let naam = fullName('Ridwanul' , 'Kabir');
console.log(naam)