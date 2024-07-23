

// try{
//     console.log("First");
// jhh;
//     console.log("second");
// }
// catch(error){
// console.log(error);
// }



// setTimeout(
//     function(){
//   try{
// bwhdj;
//   }
//   catch(err){
//     console.log(err);
//   }
//     },2000
// );

// try{
//     hdjs;
// }
// catch(error){
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack);
//     if(error instanceof ReferenceError){
//         console.log(ReferenceError);
//     }
//     else if(error instanceof TypeError){
//         console.log(TypeError);
//     }
//     else if(error instanceof SyntaxError){
//         console.log(SyntaxError);
//     }
//     else{
//         console.log("unknown error");
//     }
// }

try{
let json=`{
    "name":"Nishu",
    "age":22
}`
let result =JSON.parse(json);
console.log(result.name)
console.log(result.age);
}
catch(err){
    console.log(err);
}

