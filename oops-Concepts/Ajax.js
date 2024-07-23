function loadData(){
    var xhttp= new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
           console.log(this.responseText);
          document.getElementById("demo").innerText=this.responseText;
        }
        else if(this.readyState==4 && this.status==404){
            document.getElementById("demo").innerHTML="File not found";
            console.log("File not found");
        }
      }
    xhttp.open('GET',"Nishu.txt",true);
    //xhttp.open('GET',"https://jsonplaceholder.typicode.com/posts",true); 
    xhttp.send();
}

// function abc(){
//   var a= new XMLHttpRequest();
//  a.onreadystatechange=function(){
//   if(this.readyState==4 && this.status==200){
//     console.log(this.responseText);
//     document.getElementById("demo").innerHTML=this.responseText;
//   }
//   else if(this.readyState==4 && this.status==404){
//     console.log("file not found");
//   }
//  }
//   a.open('GET',"",true);
//   a.send();
// }