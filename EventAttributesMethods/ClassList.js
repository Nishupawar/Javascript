var a;
document.getElementById("left").addEventListener("click",abc);
function abc()
{
   
   // document.getElementById("left").classList.add("pqr","xyz","lkm");
    //document.getElementById("left").classList.remove("xyz");
   //   document.getElementById("left").classList.toggle("xyx");
    //a=document.getElementById("left").classList.length;
   //  a=document.getElementById("left").classList.item(0);
    a=document.getElementById("left").classList.contains("leaft");
    console.log(a);
}