function isEven(num)
{
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function Welcome(firstName, lastName)
{
    console.log("Hello", firstName, lastName, "Welcome to the world of Javascript");
}

let resultWelcome = Welcome("Jatin", "Munjal");
console.log(resultWelcome);

// for(let i=0; i<=40; i++)
// {
//     if(isEven(i)){
//         console.log(i, "=>", "Even")
//     }else{
//         console.log(i, "=>", "Odd")
//     }
// }
