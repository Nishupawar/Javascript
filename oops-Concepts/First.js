class Employee{
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    details(){
        //return ` ${this.id} ${this.name} ${this.salary}`;
        document.write("Details : "+this.id+" "+this.name+" "+this.salary+"<br>");
        console.log(this.id+" "+this.name+" "+this.salary);
    }
    static abc(){
        console.log("Static method");
        document.write("Static method");
    }
}
let a=new Employee(101,"Nishu",40000);
let b=new Employee(102,"Vikram",50000);
a.details();
b.details();
Employee.abc();