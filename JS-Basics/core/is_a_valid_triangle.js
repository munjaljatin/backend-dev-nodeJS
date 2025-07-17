console.log("is a valid triangle.")
let side_a = 10;
let side_b = 13;
let side_c = 18;

if((side_c + side_b > side_a) && (side_a + side_c > side_b) && (side_a + side_b > side_c)){
    console.log("Yes, We can form a triangle with the given sides.")
}
else{
    console.log("No, We can't form the triangle with the given sides.");
}