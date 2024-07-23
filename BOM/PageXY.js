// var target=document.querySelector("#box");
// target.addEventListener("mousemove",function(e){
//     console.clear();
// var x=e.pageX;
// var y=e.pageY;

// var x=e.clientX;
// var y=e.clientY;

// console.log(" page x : "+x);
// console.log(" client x : "+x);
// console.log(" page y : "+y);
// console.log("page y : "+y);
// })

var target =document.querySelector("#inner");
target.addEventListener("mousemove",function(e){
    console.clear();
     var x=e.pageX;
     var y=e.pageY;

    var x=e.clientX;
    var y=e.clientY;
    
    console.log(" page x : "+x);
   console.log(" client x : "+x);
    console.log(" page y : "+y);
   console.log("page y : "+y);
});