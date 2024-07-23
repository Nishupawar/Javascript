// class bike{
//     constructor(){
//         this.company ="Honda";
//     }
// }
// class vehicle extends bike{
//  constructor(color,prize){
//     super();
//   this.color=color;
//   this.prize=prize;
//  }
// }
// let a= new vehicle("Black",200000);
// console.log(a.company+" "+a.color+" "+a.prize);


// class Apple{
//     constructor(){
//         this.color="red";
//     }
// }
// class fruit extends Apple{
//     constructor(prize,shape){
//    super();
//    this.prize=prize;
//    this.shape=shape;
//     }
// }
// let a =new fruit(500,"round");
// console.log(a.color+" "+a.prize+" "+a.shape);

class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    info(){
        document.write(`<h3>Employee Info</h3>
                     id : ${this.id}<br>
                     name : ${this.name}<br>
                     salary : ${this.salary} `);
    }
}
class Manager extends Employee{
info(){

    let ta=2000;
    let pa=3000;
    let totalSalary= ta+pa+this.salary;
    document.write(`<h3>Manager Info</h3>
                     id  :${this.id}<br>
                     name : ${this.name}<br>
                     salary : ${totalSalary}`);
}
}
class Test extends Manager{

}
let a= new Manager(101,"Nishu",200000);
let b= new Employee(102,"Gayu",300000);
let c= new Manager(103,"Praju",40000);
let d= new Test(104,"Vikram",50000);
a.info();
b.info();
c.info();
d.info();