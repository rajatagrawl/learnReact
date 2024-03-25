// First method
let obj1 = {id:101, name: "Alex", salary: 15000}
console.log(obj1.id);
console.log(obj1);

// Second method
let obj2 = new Object();
obj2.id = 102;
obj2.name = "Sam";
obj2.salary = 13000;
console.log(obj2);

// Third method
function obj3(i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
}
const e = new obj3(103, "Amy", 14000);
console.log(e);
console.log(e.id);
console.log(e['name']);