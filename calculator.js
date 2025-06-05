function add ( num1,num2 )
{
    return num1+ num2;
}

function subtract(num1, num2)
{
    return num1-num2;
}

function multiply(num1, num2)
{
    return num1*num2;
}

function divide(num1, num2)
{
    return num1/num2;
}

function calculator(a,b, operation)
{
    if(operation === 'add')
    {
        result = add(a,b);
        return result;
    }
    else if(operation === 'subtract')
    {
        result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply')
    {
        result = multiply(a,b);
        return result;
    }
    else if(operation === 'divide')
    {
        result = divide(a,b);
        return result;
    }
    else{

        return "only 'add' , 'subtract' , 'multiply' & 'divide' is allowed. ";
    }
}

let results = calculator(60,3,'add');
console.log(results)