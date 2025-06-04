let mobile = [
    { name : 'samsung', price : 20000, color : 'black'  },
    { name : 'xiaomi', price : 30000, color : 'black'  },
    { name : 'iphone', price : 40000, color : 'black'  },
    { name : 'tecno', price : 10000, color : 'black'  },
]

function getexpensive(phones)
{
    let max= phones[0];
    for( let phone of phones)
    {
        if(phone.price>max.price)
            max = phone;
    } return max;
}

let expensive = getexpensive(mobile)
console.log(expensive)