// var target =document.querySelector("#box");
// target.addEventListener("click",function(e){
//     console.clear();
//    var key=e.key;
//    var ctrlKey=e.ctrlKey;
//    if(ctrlKey){
//   console.log(" You pressed control key");
//    }
//    else{
//     console.log("You not pressed control key ");
//    }
//    console.log("ctrl key : "+ctrlKey);

//    var shiftKey=e.shiftKey;
//    if(shiftKey){
//   console.log(" You pressed shift key");
//    }
//   else{
//   console.log("you not pressed shift key");
//   }

// var alt=e.altKey;
//   if(alt){
//     console.log("you pressed alt key");
//    }
//     else{  
//     console.log("you not pressed alt key");
//    }  

//   var meta =e.metaKey;
//   if(meta)
//     {
//         console.log("you pressed meta key");
//     }
//    else{
//     console.log("you not pressed meta key");
//    }
// });


var target = document.querySelector("#mytextbox");
target.addEventListener("keydown", function(e) {
    console.clear();
    var key;
    switch (true) {
        case e.altKey:
            key = "alt key";
            break;
        case e.shiftKey:
            key = "shift key";
            break;
        case e.ctrlKey:
            key = "ctrl key";
            break;
        case e.metaKey:
            key = "meta key";
            break;
        default:
            key = "no key";
            break;
    }
    console.log(key); 
});
