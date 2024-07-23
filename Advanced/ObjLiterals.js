
// let fname="nishu";
// let lname="pawar";
// var obj={
//     fname ,
//     lname 
// }
// console.log(obj);

// let n="student";
// var obj={
//     [n+"name"] :"Nishu",
//     course : "Btech",
//     details : function(){
//         return `${this.studentname} of the ${this.course} 2023`;
//     },
//     show(){
//         console.log(this.course);
//     }
// }
// console.log(obj);
// console.log(obj.details());
// console.log(obj[`details`]());
// console.log(obj.show());

let fname="Nishu";
let lname="pawar";
let course ="Btech";

function student(name,lname,course){
    let fullname =fname+" "+lname;
return {fullname,course};
}
let s=student(fname,lname, course);
console.log(s.fullname);
console.log(s.course);
console.log(typeof s);