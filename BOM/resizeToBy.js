var a;

function openWindow()
{
    a=window.open("","","height=300px,width=500px,left=200px,top=200px,border=2px solid red");
    a.document.write("<p>Nishigandha Pawar</p>");
}
function resizeTo()
{
 a= window.resizeTo(500,500);
}

function resizeBy()
{
    a=window.resizeBy(500,500);
}