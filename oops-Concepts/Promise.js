// let complete =true;
// let prom = new Promise(function(resolve,reject){
// if(complete)
//     {
//         console.log("successfully");
//     }
//     else{
//         console.log("Failed");
//     }
// });


// let complete=true;
// let prom = new Promise(function(resolve,reject){
// if(complete){
// resolve("Succesffully..");
// }
// else{
// reject("Failed..");
// }
// });
// console.log(prom);

// function prom(complete){
//     return new Promise(function(resolve,reject){
//         console.log("Please Wait..");
//         setTimeout(()=>{
//             if(complete){
//                 resolve("I am Succesfully...");
//             }
//             else{
//                 reject("I am Failed...");
//             }
//         },2000);
//     });
// }
// let onFullfillment = (result)=>{
//     console.log(result);
// }
// let onRejection =(error)=>{
//     console.log(error);
// }
// prom(true).then(onFullfillment);
// prom(true).catch(onRejection);
//prom(true).then(onFullfillment).catch(onRejection);
// prom(false).then(onFullfillment);
// prom(false).catch(onRejection);
//console.log(prom(true));


function prom(a,b){
   return new Promise(function(resolve,reject){
    console.log("Please wait");
    let c=a/b;
    setTimeout(()=>{  
          if(a,b)
            {
            resolve(`I am succefylly : ${c}`);
          }
          else{
            reject("Failed");
          }
    },3000)
   });
}
prom(5,3).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});