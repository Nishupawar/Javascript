// function focusFunction(){
//     document.getElementById("fname").style.backgroundColor="lime";
// }

// function clickFunction()
// {
//     document.getElementById("class").style.backgroundColor="yellow";
// }

// function abc(){
//     document.getElementById("country").style.backgroundColor="pink";
// }

function focusFunction(ele){
  ele.style.backgroundColor="lime";
}

function clickFunction(xyz)
{
    xyz.style.backgroundColor="yellow";
}


function abc(element)
{
    element.style.backgroundColor="pink";
}

function onblur(element){
 element.style.backgroundColor="";
}

function input(element){
    var a=element.value;
    document.getElementById("test").innerHTML=a;
}

function input1(element)
{
    var a=element.value;
    document.getElementById("test").innerText=a;
}

function change(element)
{
    var a=element.value;
    document.getElementById("test").innerHTML=a;
} 

function submitFunction()
{
    var x=document.getElementById("fname").value;
    alert("Hello "+x);
}
