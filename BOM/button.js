var target=document.querySelector("#box");
target.addEventListener("mousedown",function(e){
 console.clear();
 var text= e.button;
console.log(text);
var color;
switch(text){
    case 0:
    color="blue";
    break;
    case 1:
        color="red";
        break;
    case 2:
        color="yellow";
        break;
        default:
            color="black";
        break;
}

target.style.backgroundColor=color;
console.log(color);

});