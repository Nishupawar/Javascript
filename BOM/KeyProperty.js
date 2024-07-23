// document.querySelector("#myInput").addEventListener("keydown",function(e){
// console.clear();
// var text="you pressed : "+e.key;
// console.log(text);
// });


var left=0;
var up=0;
document.querySelector("body").addEventListener("keydown",function(e){
    console.clear();
    switch(e.key){
        case "ArrowRight":
            left=left+5;
            break;
        case "Arrowleft":
            left=left-5;
            break;
        case "ArrowDown":
                up=up+5;
                break;
        case "ArrowUp":
            up=up-5;
            break;
        default:
            console.log("other key pressed");
            break;
    }
    console.log("left : "+left);
    console.log("up : "+up);

    var target=document.querySelector("#box");
    target.style.marginLeft=left+"px";
    target.style.marginTop=up+"px";

})