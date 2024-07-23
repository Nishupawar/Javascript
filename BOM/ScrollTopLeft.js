const target= document.querySelector("#box");
target.addEventListener("scroll",()=>{
    console.clear();
console.log("scroll top offset : "+target.scrollTop);
console.log("scroll left offset : "+target.scrollLeft);
});