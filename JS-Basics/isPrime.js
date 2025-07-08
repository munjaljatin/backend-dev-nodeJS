// Program to check whether the given number is prime or not
let x = 19;
function isPrime(val)
{
    for(let i=2; i<val; i++)
    {
        if(val % i == 0){
            return false
        }
    }
    return true;
}

let resultPrime = isPrime(x);
if(resultPrime){
    console.log(x, "is a prime number");
}else{
    console.log(x, "is not a prime number");
}