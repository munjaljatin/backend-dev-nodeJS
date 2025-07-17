
quadratic(2,5,3);

function quadratic(a,b,c)
{
    let root1 = (-b + Math.sqrt(b*b - 4*a*c)) / (2*a);
    let root2 = (-b - Math.sqrt(b*b - 4*a*c)) / (2*a);

    console.log(root1, root2);
}