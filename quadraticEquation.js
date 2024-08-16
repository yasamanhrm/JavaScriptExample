// This program computes roots of a quadratic equation when its coefficients are known.

// The standard form of a quadratic equation is:

// ax2 + bx + c = 0, where
// a, b and c are real numbers and
// a ≠ 0
// To find the roots of such equation, we use the formula,

// (root1,root2) = (-b ± √b2-4ac)/2
// The term b2-4ac is known as the discriminant of a quadratic equation. It tells the nature of the roots.

// If the discriminant is greater than 0, the roots are real and different.
// If the discriminant is equal to 0, the roots are real and equal.
// If the discriminant is less than 0, the roots are complex and different.

let a = 4;
let b = 2;
let c = 6;
let root1, root2;
let discriminant = b*b-4*a*c;
if (discriminant > 0){
    root1 = (-b + Math.sqrt(discriminant))/2*a;
    root2 = (-b - Math.sqrt(discriminant))/2*a;
    console.log(`root1 is ${root1} and root2 is ${root2}`);
}
else if (discriminant == 0){
    root1 = root2 = -b/2*a;
    console.log(`root1 is ${root1} and root2 is ${root2}`);

}
else {
    let realPart = -b/(2*a);
    let imaginaryPart = Math.sqrt(-discriminant)/(2*a);
    console.log(`the roots of the quadratic equation are ${realPart}+${imaginaryPart}i and ${realPart}-${imaginaryPart}i`);
};

