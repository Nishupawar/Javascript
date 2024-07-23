let p1= new Promise((resolve,reject)=>{
setTimeout(() => {
    console.log("First promise has resolved");
    resolve(10);
}, 1*1000);
});

let p2=new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Second promise has resolved");
    resolve(20);
},2*1000);
});

let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
 console.log("Third promise has resolved");
 resolve(30);
    },3*1000);
});

let p4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
 console.log("forth promise has rejected");
 reject(40);
    },4*1000);
});
var p5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         console.log("Fifth promise has rejected");
         reject(50);
    },5*1000);
});

let p6=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Sixth promise has rejected");
      reject(60);
    },6*1000);
});

var total=0;
Promise.all([p1,p2,p3,p4,p5,p6]).then((result)=>{
    for(var i in result){
        total=total+result[i];
    }
    console.log(`Result : ${result}`);
    console.log(`Total : ${total}`);
}).catch((error)=>{
    console.log(`Error : ${error}`);
});