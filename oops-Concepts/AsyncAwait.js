// async function abc(){
//     return "Hello";
// }
// console.log(abc());

// let abc=async function(){
//     return "Nishu Pawar";
// };
// abc().then((result)=>{
// console.log(result);
// })

// let test = async ()=> "Nishu";
// test().then((result)=>{
//     console.log(result);
// });


// async function test(){
//     console.log("2 : message");
//    await console.log("3 : message");
//     console.log("4 : message");
//     console.log("5 : message");
// }
// console.log("1 : message ");
// test();
// console.log("6 : message");

// async function test(){
//     console.log("2 : message");
//    const a=await fetch("data.json");
//    console.log("3 : message");
//    let b= a.json();
//     console.log("4 : message");
//     console.log("5 : message");
//     return b;
// }
// console.log("1 : message ");
// let c= test();
// console.log("6 : message");
// console.log(c);

// async function test(){
//     // let a= await fetch("data.json");
//     // let b= await a.json();
//     // return b;

//     //return ((await fetch("data.json")).json();
//     return (await fetch("data.json")).json();
// }
// test().then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log("Error in await ");
// })


async function abc(){
    try{
    //   let a= await fetch("data.json");
    //   let b= await a.json();
    //   return b;
     return (await fetch("data.json")).json();
    }
    catch(error){
        console.log("error");
    }
}
abc().then((response)=>{
    console.log(response);
})