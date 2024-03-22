// 1. Single parameter & single return
const sqr = (x) => x*x ;
console.log(sqr(8));

// 2. Multiple parameter & single return
const sum = (x,y) => x+y ;
console.log(sum(10,15));

// 3. Multiple statements in function expression
const sum2 = (x,y) => {
    console.log(`Adding ${x} and ${y}`);
    return x + y ;
}
console.log(sum2(5,15));

// 4. Returning an object
const sumAndDiff = (x,y) => ({sum: x+y, diff: x-y})
console.log(sumAndDiff(5,2));