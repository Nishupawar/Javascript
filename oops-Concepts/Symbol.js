// let a= Symbol("nishu");
// let b= Symbol("nishu");

// console.log(a);
// console.log(b);
// alert(typeof a);
// console.log(a.toString());
// alert(a.description);
// console.log(a==b);
// console.log(a===b);

// let c="Nishu";
// let d= "Nishu";
// console.log(c);
// console.log(d);
// console.log(c==d);
// console.log(c===d);

//let age= Symbol();
// let age= Symbol("age");
// let user={
// name :"Nishu",
// course : "BTEch",
// [age]:22
// }
// console.log(user);

// let age =Symbol("age");
// let user ={
//     name : "Nishu",
//     course : "CSE",
//     [age]: 23
// }
// user[age]=34;
// console.log(user);
// console.log(user.course);
// console.log(user.name);
// console.log(user[age]);


let age=Symbol("age");
let user={
    name : "Nishu",
    course : "BTEch",
}
user[age]=24;
user["gender"]="female";
console.log(user);
for(let key in user){        //age not show because it is symbol
    console.log(key);  //name , course ,gender
    console.log(user[key]); //Nishu , BTech , Female
}
console.log(JSON.stringify(user)); //it show json type