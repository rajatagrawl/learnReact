let arr1 = [1, 2, 3 ,4, 5];
console.log(arr1);

arr1.push(6,7);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift(11);
console.log(arr1);

let arr2 = [10,20,30];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let s = arr3.join("|");
console.log(s);

arr3.reverse();
console.log(arr3);

console.log(arr3.indexOf(10));


console.log(arr3.slice(2,4));
console.log(arr3);

arr3.splice(2,3,90);
console.log(arr3);

