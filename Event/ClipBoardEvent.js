var target=document.querySelector("#myinput");
target.addEventListener("copy",function(){
    console.clear();
    console.log("you copied text");
    target.style.backgroundColor="green"
});

target.addEventListener("cut",function(){
    console.clear();
    console.log("you cut text");
    target.style.backgroundColor="yellow"
});

target.addEventListener("paste",function(){
    console.clear();
    console.log("you paste text");
    target.style.backgroundColor="pink"
});

var ele=document.querySelector("#box");
ele.addEventListener("copy",function(){
    console.clear();
    console.log("you copied text..");
    ele.style.backgroundColor="red";
})


ele.addEventListener("cut",function(){
    console.clear();
    console.log("you cut text..");
    ele.style.backgroundColor="blue";
})
ele.addEventListener("paste",function(){
    console.clear();
    console.log("you paste text..");
    ele.style.backgroundColor="purple";
})

function copyFunction(){
    console.clear();
    console.log("you copied text..");
    ele.style.backgroundColor="green";
}