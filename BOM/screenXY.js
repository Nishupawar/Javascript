var target = document.querySelector("#box");
target.addEventListener("mousemove",function(e){
    console.clear();
    var screen_x=e.screenX;
    var client_x=e.clientX;
    var page_x=e.pageX;

    var screen_y=e.screenY;
    var client_y= e.clientY;
    var page_y=e.pageY;

    console.log("screen_x : "+ screen_x);
    console.log("client_x : "+client_x);
    console.log("page_x : "+page_x);

    console.log("screen_y : "+ screen_y);
    console.log("client_y : "+client_y);
    console.log("page_y : "+page_y);


})