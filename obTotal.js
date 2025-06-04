// let pro =[
//     { name : 'panjabi', price : 4200},
//     { name : 'Shirt', price : 1600},
//     { name : 'Perfume', price : 14000},
//     { name : 'Shoe', price : 4000}
// ]

// function shoptotal(products){
//     let sum = 0;
//     for(i=0; i<products.length ; i++ )
//     {
//          sum += products[i].price;
//     } return sum;
// }

// let tot = shoptotal(pro)
// console.log(tot)

// using for of loop

let pro = [
    { name: 'panjabi', price: 4200 },
    { name: 'Shirt', price: 1600 },
    { name: 'Perfume', price: 14000 },
    { name: 'Shoe', price: 4000 }
];

function shoptotal(products) {
    let sum = 0;
    for (let item of products) {
        sum += item.price;
    }
    return sum;
}

let tot = shoptotal(pro);
console.log(tot);
