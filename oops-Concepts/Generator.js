// function *generateit(){
//     console.log("First msg");
//     yield'yield no 1';
//     console.log("second msg");
//     yield'yield no 2';
//     yield'yield no 3';
// }
// let g=generateit();
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function *abc(){
//     yield"First msg";
//     yield"second msg";
//     yield"third msg";
// }
// let a=abc();
// console.log(a.next().value);
// a.next();
// console.log(a.next().value);
// console.log(a.next().value);
// for(let value of a){
//     console.log(value);
// }

// function *abc(){
//     let a=100;
//     while(true){
//         yield(a++);
//     }
// }
// let g= abc();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

// function *test(){
// let a= 1;
// while(true){
// yield(a++);
// }
// }
// let g= test();
// for(let i of g){
//     if(i > 11) break;
//     console.log(i);
// }

// function *abc(){
// let a=10;
// while(true){
//     yield(a++);
// }
// }
// let aa= abc();
// for(let b of aa){
//     if(b > 16) break;
//     console.log(b);
// }

// function *abc(){
//    // let result = (yield)*10;
//    let array= [yield,yield,yield,yield];
//     //console.log(`Result : ${result}`);
//     console.log(`Array : ${array[2]}`);
// }
// let g= abc();
// g.next();
// g.next(10);
// g.next(20);
// g.next(30);
// g.next(40);

// function *test(){
//     yield 50;
//     yield['Nishu','Gayu','Praju'];
// }
// let g= test();
// console.log(g.next());
// console.log(g.next().value);
// console.log(g.next());

// function *abc(){
//     yield'Nishu';
//     yield'Gayu';
//     yield'Praju';
//     yield'Vikram';
// }
// let g= abc();
// console.log(g.next());
// console.log(g.next());
// console.log([...g]);

function *abc(){
    yield'Nishu';
    yield'Gayu';
    yield'Praju';
    yield'Vikram';
}
let g= abc();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.return('Ending now'));
console.log(g.next().value);