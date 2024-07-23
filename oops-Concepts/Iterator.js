// let ite =[10,20,30];
// console.log(ite);
// console.log(typeof ite);
// let a=ite[Symbol.iterator]();
// //console.log(a.next());
// a.next();
// //console.log(a.next());
// a.next();
// console.log(a.next().value);
// console.log(a.next().done);

// let num=[10,20,30,40];
// let itr= num[Symbol.iterator]();
// let result = itr.next();
// while(!result.done){
// console.log(result.value);
// result=itr.next();
// }

// let word= ["Nishu","Gayu","Praju"];
// let itr= word[Symbol.iterator]();
// let output= itr.next();
// while(!output.done){
// console.log(output.value);
// output=itr.next();
// }

let numbers=[10,20,30,40,50];
let itr= numbers[Symbol.iterator]();
let ans = itr.next();
while(!ans.done){
    console.log(ans.value);
    ans= itr.next();
}