var target=document.querySelector("#box");
target.addEventListener("mousemove",function(e){
    console.clear();
var x=e.clientX;
var y=e.clientY;

console.log("x : "+x);
console.log("y : "+y);
})

// var target =document.querySelector("#inner");
// target.addEventListener("mousemove",function(a){
//     console.clear();
//     var x=a.clientX;
//     var y=a.clientY;
// console.log("client x : "+x);
// console.log("client y : "+y);
// });