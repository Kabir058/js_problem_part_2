let pro = [
    { name: 'panjabi', price: 4200 ,  quantity : 3 },
    { name: 'Shirt'  , price: 1600 ,  quantity : 4 },
    { name: 'Perfume', price: 14000 , quantity : 3 },
    { name: 'Shoe'   , price: 4000 ,  quantity : 2 },
];

function cartTotal(products)
{
    sum = 0;
    for(let prod of products)
    {
        sum+= prod.price*prod.quantity;
    }return sum;
}

let total =cartTotal(pro)
console.log(total)