var target=document.querySelector("#box");
window.addEventListener("offline",function(){
  target.innerHTML="you are offline";
  target.style.backgroundColor="pink";
});

window.addEventListener("online",function(){
    target.innerHTML="you are online";
    target.style.backgroundColor="blue";
});

console.log(navigator.onLine);