let a = 20;
let b = 20;
let c = 20;

if(a == b && b ==c && a == c){
    console.log("The given triangle is equilateral.")
}else if(a==b || a==c || b==c){
    console.log("The given triangle is an Isosceles.")
}else{
    console.log("The given triangle is Scalene.")
}