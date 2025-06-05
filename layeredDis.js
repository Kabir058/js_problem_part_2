function leyerdDistot(quantity)
{
    let first100price = 100;
    let sc100price= 90;
    let above200price =70;
    if(quantity<=100)
    {
        let total =quantity * first100price;
            return totall;
    }
    else if(quantity<=200)
    {
        let first100total= 100* first100price;
        let ramainingQuantity = quantity - 100;
        let remainingTotal= ramainingQuantity * sc100price;
        let total = first100total + remainingTotal
        return total;
    }
}