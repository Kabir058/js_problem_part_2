function leyerdDistot(quantity)
{
    let first100price = 100;
    let sc100price= 90;
    let above200price =70;
    if(quantity<=100)
    {
        let total =quantity * first100price;
            return total;
    }
    else if(quantity<=200)
    {
        let first100total= 100* first100price;
        let ramainingQuantity = quantity - 100;
        let remainingTotal= ramainingQuantity * sc100price;
        let total = first100total + remainingTotal
        return total;
    }
    else{
        let first100total = 100 * first100price;
        let sc100total = 100* sc100price;
            let remainingQuantity=quantity -200;
            let remainingTotal= remainingQuantity * above200price;
            let total = first100total +sc100total + remainingTotal;
            return total; 

    }
}

let value= leyerdDistot(55);
console.log(value)