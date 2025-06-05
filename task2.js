// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(names)
{
    let smallest =names[0]
    for(let name of names)
    {
        if(name.length< smallest.length)
        {
              smallest = name;
        }
    }return smallest;
}

let array=getSmallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed'])
console.log(array)