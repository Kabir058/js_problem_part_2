let mobile = [
    { name : 'samsung', price : 20000, color : 'black'  },
    { name : 'xiaomi', price : 30000, color : 'black'  },
    { name : 'iphone', price : 40000, color : 'black'  },
    { name : 'tecno', price : 10000, color : 'black'  },
]

function getcheapest(phones)
{
    let min= phones[0];
    for( let phone of phones)
    {
        if(phone.price<min.price)
            min = phone;
    } return min;
}

let cheap = getcheapest(mobile)
console.log(cheap)